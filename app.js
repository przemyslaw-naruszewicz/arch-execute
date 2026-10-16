// Page logic for index.html. Texts come from texts.js; this file holds no user-facing copy.
"use strict";

// ===== Language state and text helpers =====
// Language state and text helpers shared by every module. All copy comes from texts.js (window.TEXTS).
window.studyUI = (() => {
  const language = () => (document.querySelector('.langbtn[aria-pressed="true"]')?.dataset.lang === "pl" ? "pl" : "en");
  // Resolve { en, pl } pairs, at any depth, to the current language.
  const pick = (node, lang) => {
    if (Array.isArray(node)) return node.map((item) => pick(item, lang));
    if (node && typeof node === "object") {
      const keys = Object.keys(node);
      if (keys.length === 2 && "en" in node && "pl" in node) return node[lang];
      return Object.fromEntries(keys.map((key) => [key, pick(node[key], lang)]));
    }
    return node;
  };
  // texts('race.modeHints') returns that part of TEXTS in the current language.
  const texts = (path) =>
    pick(
      path.split(".").reduce((node, key) => node?.[key], window.TEXTS),
      language(),
    );
  // text('version',{n:2}) reads TEXTS.ui.version; a dotted key reads any other section.
  const text = (key, values = {}) => {
    const value = texts(key.includes(".") ? key : "ui." + key) ?? key;
    return String(value).replace(/\{(\w+)\}/g, (_, name) => String(values[name] ?? ""));
  };
  const setText = (el, key, values = {}) => {
    if (el) el.textContent = text(key, values);
  };
  function replaceHTML(el, html) {
    const active = document.activeElement;
    const inside = active !== document.body && el.contains(active);
    const attributes = [
      "id",
      "data-time",
      "data-tick",
      "data-t",
      "data-step",
      "data-concept",
      "data-saga-step",
      "data-term",
      "data-tip",
    ];
    const identity = inside ? attributes.find((name) => active.hasAttribute(name)) : null;
    const value = identity ? active.getAttribute(identity) : null;
    el.innerHTML = html;
    if (identity) {
      const next = [...el.querySelectorAll("[" + identity + "]")].find((node) => node.getAttribute(identity) === value);
      const target = next?.disabled ? el.querySelector("button:not(:disabled)") : next;
      target?.focus({ preventScroll: true });
    }
  }
  function followColumn(el, selected) {
    const scroller = el.closest(".timeline-container,.ct-scroll");
    if (!scroller || scroller.clientWidth === 0) return;
    if (!selected) {
      scroller.scrollLeft = 0;
      return;
    }
    const frame = scroller.getBoundingClientRect(),
      cell = selected.getBoundingClientRect();
    const label = el.querySelector(".gantt-label,.ct-label")?.getBoundingClientRect().width || 0;
    const left = frame.left + label + 18,
      right = frame.right - 12;
    if (cell.left < left) scroller.scrollLeft += cell.left - left;
    else if (cell.right > right) scroller.scrollLeft += cell.right - right;
  }
  // A "?" button whose tooltip is the [title, body] pair at this TEXTS path.
  const tipButton = (path) =>
    `<button type="button" class="tip-button" data-tip="${path}" aria-label="${text("moreInfo")}">?</button>`;
  // Fill every element marked with data-t (plain text) or data-t-html (inline HTML).
  function applyTexts() {
    document.querySelectorAll("[data-t]").forEach((el) => {
      el.textContent = texts(el.dataset.t) ?? el.dataset.t;
    });
    document
      .querySelectorAll("[data-t-html]")
      .forEach((el) => replaceHTML(el, texts(el.dataset.tHtml) ?? el.dataset.tHtml));
    document.documentElement.lang = language();
  }
  return { language, texts, text, setText, replaceHTML, followColumn, applyTexts, tipButton };
})();

// ===== Simulations: PHP-FPM requests, CPU scheduling, database race, runtime comparison =====
(() => {
  "use strict";
  const $ = (s) => document.querySelector(s),
    $$ = (s) => Array.from(document.querySelectorAll(s));
  const state = {
    environment: "fpm",
    users: 6,
    workers: 2,
    cores: 2,
    workload: "io",
    preset: "burst",
    stagger: false,
    phpTick: 0,
    raceMode: "unsafe",
    raceTick: 0,
    compareTick: 0,
  };
  let phpTimer = null,
    raceTimer = null,
    compareTimer = null,
    phpModel = null;
  const ABC = "ABCDEFGH";
  const ui = window.studyUI;
  const types = { queue: "queue", cpu: "cpu", io: "io", ready: "ready", done: "done" };
  const esc = (s) =>
    String(s).replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[c]);
  function reqArrivals(cfg = state) {
    return Array.from({ length: cfg.users }, (_, i) => ({ id: ABC[i], idx: i, arrival: cfg.stagger ? i * 2 : 0 }));
  }
  function phaseCosts(cfg = state) {
    if (cfg.costs) return cfg.costs;
    return cfg.workload === "io" ? { first: 1, io: 5, last: 1 } : { first: 5, io: 0, last: 1 };
  }
  function makeReqs(cfg = state) {
    const cost = phaseCosts(cfg);
    return reqArrivals(cfg).map((u) => ({
      ...u,
      phase: "pre",
      remain: cost.first,
      io: cost.io,
      last: cost.last,
      worker: -1,
      doneAt: null,
      startAt: null,
      states: [],
    }));
  }
  function simulatePHP(cfg = state) {
    const requests = makeReqs(cfg),
      workers = cfg.environment === "builtin" ? 1 : cfg.workers,
      cores = cfg.cores,
      work = Array(workers).fill(-1),
      workerRows = Array.from({ length: workers }, () => []),
      coreRows = Array.from({ length: cores }, () => []),
      arrived = [],
      reqMap = Object.fromEntries(requests.map((r) => [r.id, r])),
      metrics = [];
    let final = 0;
    for (let t = 0; t < 120; t++) {
      for (const r of requests) if (r.arrival === t) arrived.push(r);
      for (let w = 0; w < workers; w++)
        if (work[w] === -1 && arrived.length) {
          let r = arrived.shift();
          work[w] = r.idx;
          r.worker = w;
          r.startAt = t;
          r.phase = "first";
        }
      const active = work.map((i) => (i < 0 ? null : requests[i]));
      const candidates = active.filter((r) => r && r.phase !== "io" && r.phase !== "done");
      // stable fair rotation among CPU-ready worker processes, bounded by physical cores
      candidates.sort(
        (a, b) => ((a.worker - (t % workers) + workers) % workers) - ((b.worker - (t % workers) + workers) % workers),
      );
      const executing = candidates.slice(0, cores);
      const execSet = new Set(executing.map((r) => r.idx));
      const runningIds = executing.map((r) => r.id);
      const coreAt = Array(cores).fill("");
      executing.forEach((r, i) => (coreAt[i] = r.id));
      for (let c = 0; c < cores; c++) coreRows[c].push(coreAt[c] || "");
      for (let w = 0; w < workers; w++) {
        const r = active[w];
        if (!r) {
          workerRows[w].push({ id: "", phase: "idle" });
          continue;
        }
        if (r.phase === "io") {
          workerRows[w].push({ id: r.id, phase: "io" });
          r.remain--;
          if (r.remain <= 0) {
            r.phase = "last";
            r.remain = r.last;
          }
        } else if (execSet.has(r.idx)) {
          workerRows[w].push({ id: r.id, phase: "cpu" });
          r.remain--;
          if (r.remain <= 0) {
            if (r.phase === "first" && r.io > 0) {
              r.phase = "io";
              r.remain = r.io;
            } else if (r.phase === "first") {
              r.phase = "last";
              r.remain = r.last;
            } else {
              r.phase = "done";
              r.doneAt = t + 1;
              work[w] = -1;
            }
          }
        } else workerRows[w].push({ id: r.id, phase: "ready" });
      }
      for (const r of requests) {
        let s = "absent";
        if (t >= r.arrival) {
          if (r.doneAt !== null && r.doneAt <= t) s = "done";
          else if (r.worker < 0) s = "queue";
          else {
            const cell = workerRows[r.worker][t];
            s = cell.id === r.id ? cell.phase : "queue";
          }
        }
        r.states.push(s);
      }
      metrics.push({
        t,
        arrived: requests.filter((r) => r.arrival <= t).length,
        queued: requests.filter((r) => r.states[t] === "queue").length,
        busy: workerRows.filter((row) => row[t].id).length,
        io: workerRows.filter((row) => row[t].phase === "io").length,
        cores: runningIds.length,
        finished: requests.filter((r) => r.doneAt !== null && r.doneAt <= t).length,
      });
      if (requests.every((r) => r.doneAt !== null)) {
        final = t + 1;
        break;
      }
    }
    return { requests, workerRows, coreRows, metrics, duration: final, cores, workers };
  }
  // Event-loop servers (ReactPHP, Node.js): requests are spread round-robin over the processes.
  // Each process runs one non-preemptive callback at a time. A blocking client keeps the callback
  // running through its I/O wait, so the whole request occupies that process's loop.
  function simulateLoops(cfg, processes, blocking) {
    const reqs = makeReqs(cfg),
      cost = phaseCosts(cfg),
      procs = Array.from({ length: processes }, () => ({ queue: [], pending: [], active: null, cells: [] })),
      states = reqs.map(() => []),
      steps = (n, phase) => Array(n).fill(phase);
    reqs.forEach((r, i) => (r.proc = i % processes));
    let end = 0;
    for (let t = 0; t < 120; t++) {
      for (const r of reqs) if (r.arrival === t) procs[r.proc].queue.push({ req: r, kind: "first" });
      for (const p of procs) {
        for (const item of p.pending.slice())
          if (item.readyAt <= t) {
            p.queue.push({ req: item.req, kind: "last" });
            p.pending.splice(p.pending.indexOf(item), 1);
          }
        if (!p.active && p.queue.length) {
          const item = p.queue.shift();
          item.steps =
            item.kind === "last"
              ? steps(cost.last, "cpu")
              : blocking || cost.io === 0
                ? [...steps(cost.first, "cpu"), ...steps(cost.io, "io"), ...steps(cost.last, "cpu")]
                : steps(cost.first, "cpu");
          p.active = item;
        }
      }
      reqs.forEach((r, i) => {
        const p = procs[r.proc];
        let s = "absent";
        if (t >= r.arrival) {
          if (r.doneAt !== null) s = "done";
          else if (p.active?.req === r) s = p.active.steps[0];
          else if (p.pending.some((item) => item.req === r)) s = "io";
          else s = "queue";
        }
        states[i].push(s);
      });
      for (const p of procs) {
        p.cells.push(p.active ? { id: p.active.req.id, phase: p.active.steps[0] } : { id: "", phase: "idle" });
        if (!p.active) continue;
        p.active.steps.shift();
        if (p.active.steps.length) continue;
        const r = p.active.req;
        if (p.active.kind === "first" && !blocking && cost.io > 0) p.pending.push({ req: r, readyAt: t + 1 + cost.io });
        else r.doneAt = t + 1;
        p.active = null;
      }
      if (reqs.every((r) => r.doneAt !== null)) {
        end = t + 1;
        break;
      }
    }
    return { reqs, loops: procs.map((p) => p.cells), states, duration: end, blocking };
  }
  function playbackLabels() {
    [
      ["phpPlay", phpTimer, phpModel && state.phpTick >= phpModel.duration],
      ["racePlay", raceTimer, state.raceTick >= racePlans[state.raceMode].length],
      [
        "comparePlay",
        compareTimer,
        comparePHPModel && state.compareTick >= compareHorizon(),
      ],
    ].forEach(([id, timer, done]) => {
      ui.setText($("#" + id), timer ? "pause" : done ? "replay" : "play");
      $("#" + id).dataset.playing = String(!!timer);
    });
  }
  function stopPHP() {
    if (phpTimer !== null) {
      clearInterval(phpTimer);
      phpTimer = null;
    }
    playbackLabels();
  }
  function stopRace() {
    if (raceTimer !== null) {
      clearInterval(raceTimer);
      raceTimer = null;
    }
    playbackLabels();
  }
  function stopCompare() {
    if (compareTimer !== null) {
      clearInterval(compareTimer);
      compareTimer = null;
    }
    playbackLabels();
  }
  function stopTimers() {
    stopConceptTimer();
    renderPatterns();
    stopPHP();
    stopRace();
    stopCompare();
  }
  function updateControls() {
    ui.setText($("#incomingCount"), "simulation.userCount." + state.users);
    $$("[data-set]").forEach((group) => {
      const key = group.dataset.set;
      group.querySelectorAll("button").forEach((btn) => {
        let disabled = key === "workers" && state.environment === "builtin" && btn.dataset.val !== "1";
        btn.disabled = disabled;
        btn.classList.toggle("on", String(state[key]) === btn.dataset.val);
        btn.setAttribute("aria-pressed", String(String(state[key]) === btn.dataset.val));
      });
    });
    $$(".preset").forEach((btn) => {
      btn.classList.toggle("on", state.preset === btn.dataset.preset);
      btn.setAttribute("aria-pressed", String(state.preset === btn.dataset.preset));
    });
    const preset =
      state.environment === "builtin" ? "builtin" : state.workload === "cpu" ? "cpu" : state.stagger ? "stagger" : "burst";
    ui.replaceHTML(
      $("#presetHelp"),
      ui.text("simulation.presetHelp." + preset) + ui.tipButton("simulation.presetTips." + preset),
    );
  }
  function setConfig(key, val) {
    stopTimers();
    if (key === "environment") {
      state.environment = val;
      if (val === "builtin") state.workers = 1;
    } else state[key] = val;
    state.preset = "custom";
    state.phpTick = 0;
    state.raceTick = 0;
    state.compareTick = 0;
    recompute();
  }
  function preset(name) {
    const d = {
      burst: { environment: "fpm", users: 6, workers: 2, cores: 2, workload: "io", stagger: false },
      one: { environment: "fpm", users: 6, workers: 1, cores: 2, workload: "io", stagger: false },
      compute: { environment: "fpm", users: 6, workers: 4, cores: 2, workload: "cpu", stagger: false },
      stagger: { environment: "fpm", users: 6, workers: 2, cores: 2, workload: "io", stagger: true },
    }[name];
    stopTimers();
    Object.assign(state, d, { preset: name, phpTick: 0, raceTick: 0, compareTick: 0 });
    recompute();
  }
  function tile(val, klass = "", time = -1, cut = Infinity) {
    const playing = time >= 0 && time < cut;
    return `<div class="tile ${klass} ${!playing && time >= 0 ? "future" : ""} ${time === cut - 1 ? "playhead" : ""}" title="t=${time} ${esc(klass)} ${esc(val || "idle")}">${esc(val || "")}</div>`;
  }
  function renderGantt(el, rows, total, now, groupAt = [], allowScrub = true) {
    const cols = Math.max(total, 1),
      limit = Math.min(now, total);
    let html = `<div class="gantt-row" style="--cols:${cols}"><div class="gantt-label subhead">${ui.text("time")}</div>`;
    for (let t = 0; t < cols; t++)
      html += `<div class="ruler-cell ${t === now - 1 ? "selected" : ""}" data-time="${t + 1}" role="button" tabindex="0" aria-label="${ui.text("showTime", { time: t + 1 })}">${t}</div>`;
    html += "</div>";
    rows.forEach((r, i) => {
      if (groupAt.includes(i))
        html += `<div class="gantt-row" style="--cols:${cols}"><div class="gantt-label subhead">${esc(r.group || "")}</div></div>`;
      html += `<div class="gantt-row" style="--cols:${cols}"><div class="gantt-label">${esc(r.label)}</div>`;
      for (let t = 0; t < cols; t++) {
        const v = r.cells[t] || { id: "", phase: "idle" };
        html += tile(v.id, v.phase, t, limit);
      }
      html += "</div>";
    });
    ui.replaceHTML(el, html);
    ui.followColumn(el, el.querySelector(".ruler-cell.selected"));
    if (allowScrub)
      el.querySelectorAll("[data-time]").forEach((b) => {
        b.addEventListener("click", () => {
          stopPHP();
          state.phpTick = Number(b.dataset.time);
          renderPHP();
        });
        b.addEventListener("keydown", (e) => {
          if (e.key === "Enter" || e.key === " ") {
            e.preventDefault();
            b.click();
          }
        });
      });
  }
  function renderPHP() {
    if (!phpModel) return;
    const { workerRows, coreRows, requests, duration, metrics } = phpModel;
    const label = (key, values) => ui.text(key, values);
    const rows = [
      ...workerRows.map((r, i) => ({
        label: state.environment === "builtin" ? label("dev") : label("fpm", { n: i + 1 }),
        cells: r,
      })),
      ...coreRows.map((r, i) => ({
        label: label("core", { n: i + 1 }),
        cells: r.map((id) => ({ id, phase: id ? "core" : "idle" })),
      })),
      ...requests.map((r) => ({
        label: label("user", { id: r.id }),
        cells: r.states.map((s) => ({
          id:
            s === "absent"
              ? ""
              : s === "done"
                ? "✓"
                : s === "queue"
                  ? "Q"
                  : s === "cpu"
                    ? "CPU"
                    : s === "io"
                      ? "I/O"
                      : "··",
          phase: s,
        })),
      })),
    ];
    renderGantt($("#phpGantt"), rows, duration, state.phpTick, [
      workerRows.length,
      workerRows.length + coreRows.length,
    ]);
    $("#phpTime").textContent = `t = ${state.phpTick} / ${duration}`;
    $("#phpBack").disabled = state.phpTick === 0;
    $("#phpNext").disabled = state.phpTick >= duration;
    playbackLabels();
    const t = state.phpTick;
    const m =
      t === 0
        ? { queued: requests.filter((r) => r.arrival === 0).length, busy: 0, io: 0, cores: 0, finished: 0 }
        : t >= duration
          ? { queued: 0, busy: 0, io: 0, cores: 0, finished: requests.length }
          : metrics[t];
    $("#phpMetrics").innerHTML = [
      ["queue", m.queued],
      ["busy", m.busy],
      ["cores", m.cores],
      ["done", m.finished],
    ]
      .map(([key, val]) => `<div class="metric"><b>${val}</b>${label(key)}</div>`)
      .join("");
    ui.setText(
      $("#phpNow"),
      t === 0 ? "before" : t >= duration ? "complete" : m.queued ? "queued" : m.io ? "blocked" : "processing",
      { n: m.queued || m.io },
    );
    ui.setText($("#phpNowDetail"), t === 0 ? "initialDetail" : "boundaryDetail", {
      t,
      busy: m.busy,
      cores: m.cores,
      previous: t - 1,
    });
    $("#phpRequests").innerHTML = requests
      .map((r) => {
        const ph = t === 0 ? (r.arrival === 0 ? "queue" : "absent") : r.doneAt <= t ? "done" : r.states[t] || "absent";
        return `<span class="request-pill ${ph}">${r.id} · ${label("phase_" + ph)}</span>`;
      })
      .join("");
    const workers = state.environment === "builtin" ? 1 : state.workers;
    ui.setText($("#phpTakeaway"), state.workload === "io" ? "ioTakeaway" : "cpuTakeaway", {
      workers,
      cores: state.cores,
      parallel: Math.min(workers, state.cores),
    });
  }
  function controlInit() {
    $$("[data-set]").forEach((g) =>
      g.addEventListener("click", (e) => {
        const b = e.target.closest("button[data-val]");
        if (!b || b.disabled) return;
        const k = g.dataset.set;
        setConfig(k, ["users", "workers", "cores"].includes(k) ? Number(b.dataset.val) : b.dataset.val);
      }),
    );
    $$(".preset").forEach((b) => b.addEventListener("click", () => preset(b.dataset.preset)));
    $("#phpNext").onclick = () => {
      stopPHP();
      state.phpTick = Math.min(phpModel.duration, state.phpTick + 1);
      renderPHP();
    };
    $("#phpBack").onclick = () => {
      stopPHP();
      state.phpTick = Math.max(0, state.phpTick - 1);
      renderPHP();
    };
    $("#phpReset").onclick = () => {
      stopPHP();
      state.phpTick = 0;
      renderPHP();
    };
    $("#phpPlay").onclick = () => {
      if (phpTimer) {
        clearInterval(phpTimer);
        phpTimer = null;
        renderPHP();
        return;
      }
      if (state.phpTick >= phpModel.duration) state.phpTick = 0;
      phpTimer = setInterval(() => {
        state.phpTick = Math.min(phpModel.duration, state.phpTick + 1);
        if (state.phpTick >= phpModel.duration) {
          clearInterval(phpTimer);
          phpTimer = null;
        }
        renderPHP();
      }, 650);
      renderPHP();
    };
  }
  // Guided CPU scheduling: request occupancy is not the same as execution on a core.
  const conceptSchedules = {
    sequential: {
      badge: "real",
      a: ["run", "run", "run", "run", "done", "done", "done", "done"],
      b: ["queue", "queue", "queue", "queue", "run", "run", "run", "run"],
      cores: [["A", "A", "A", "A", "B", "B", "B", "B"]],
    },
    interleaved: {
      badge: "real",
      a: ["run", "ready", "run", "ready", "run", "ready", "run", "done"],
      b: ["ready", "run", "ready", "run", "ready", "run", "ready", "run"],
      cores: [["A", "B", "A", "B", "A", "B", "A", "B"]],
    },
    parallelUnbroken: {
      badge: "concept",
      a: ["run", "run", "run", "run", "done", "done", "done", "done"],
      b: ["run", "run", "run", "run", "done", "done", "done", "done"],
      cores: [
        ["A", "A", "A", "A", "", "", "", ""],
        ["B", "B", "B", "B", "", "", "", ""],
      ],
    },
    parallelMixed: {
      badge: "real",
      a: ["run", "run", "run", "io", "run", "io", "run", "run"],
      b: ["run", "run", "io", "run", "run", "run", "run", "run"],
      cores: [
        ["A", "A", "A", "B", "A", "", "A", "A"],
        ["B", "B", "", "", "B", "B", "B", "B"],
      ],
    },
  };
  let conceptMode = "interleaved",
    conceptStep = 0,
    conceptTimer = null;
  function stopConceptTimer() {
    if (conceptTimer !== null) {
      clearInterval(conceptTimer);
      conceptTimer = null;
    }
  }
  function conceptStatusClass(s, id) {
    return s === "run"
      ? "ct-running ct-" + id
      : s === "ready"
        ? "ct-ready"
        : s === "queue"
          ? "ct-queued"
          : s === "io"
            ? "ct-io"
            : s === "done"
              ? "ct-done"
              : "";
  }
  function renderPatterns() {
    const t = ui.texts("concept.labels"),
      names = ui.texts("concept.schedules"),
      mode = conceptSchedules[conceptMode],
      copy = names[conceptMode];
    ui.replaceHTML(
      $("#conceptGrid"),
      Object.entries(conceptSchedules)
        .map(
          ([key, s], i) =>
            `<button type="button" class="ct-preset ${key === conceptMode ? "selected" : ""}" data-concept="${key}" aria-pressed="${key === conceptMode}"><span class="ct-preset-index">0${i + 1}</span><span class="ct-preset-body"><b>${names[key].title}</b><small>${names[key].tag}</small></span><span class="ct-preset-mark">${key === conceptMode ? "■" : "□"}</span></button>`,
        )
        .join(""),
    );
    const stepCells = 8,
      st = conceptStep;
    let html = `<div class="ct-intro"><div><b>${copy.title}</b><span>${copy.caption}${ui.tipButton("concept.tips." + conceptMode)}</span></div><span class="ct-meta">${copy.workerLabel}</span></div>`;
    html += `<div class="ct-toolbar"><button class="ct-action ct-main" id="conceptPlay" type="button">${conceptTimer ? t.pause : st >= 8 ? t.restart : t.play}</button><button class="ct-action" id="conceptBack" type="button" ${st === 0 ? "disabled" : ""}>${t.back}</button><button class="ct-action" id="conceptNext" type="button" ${st === 8 ? "disabled" : ""}>${t.next}</button><button class="ct-action" id="conceptReset" type="button">${t.reset}</button><span class="ct-counter">${t.current}: <b>${st} / 8</b></span></div>`;
    html += '<div class="ct-scroll"><div class="ct-matrix">';
    html +=
      `<div class="ct-grid-row ct-time-row"><span class="ct-label ct-time-label">${t.timeAxis}</span>` +
      Array.from(
        { length: 8 },
        (_, i) =>
          `<button type="button" class="ct-tick ${st === i + 1 ? "active" : ""}" data-tick="${i + 1}" aria-label="t${i}">t${i}</button>`,
      ).join("") +
      "</div>";
    html += `<div class="ct-group">${t.flow}</div>`;
    const row = (name, arr, id, type) => {
      html += `<div class="ct-grid-row"><div class="ct-label ${type === "core" ? "ct-corelabel" : ""}">${name}</div>`;
      arr.forEach((v, i) => {
        const css = type === "core" ? (v ? "ct-running ct-" + v.toLowerCase() : "ct-empty") : conceptStatusClass(v, id);
        const display =
          type === "core"
            ? v || "·"
            : v === "run"
              ? t.run
              : v === "ready"
                ? t.ready
                : v === "queue"
                  ? t.queue
                  : v === "io"
                    ? t.io
                    : v === "done"
                      ? "✓"
                      : "·";
        html += `<div class="ct-cell ${css} ${st === i + 1 ? "ct-now" : ""} ${st <= i ? "ct-future" : ""}" title="t${i}: ${name} — ${display}">${display}</div>`;
      });
      html += "</div>";
    };
    row(t.a, mode.a, "a", "request");
    row(t.b, mode.b, "b", "request");
    html += `<div class="ct-group ct-cpu-group">${t.cpu}</div>`;
    mode.cores.forEach((c, i) => row(`${t.core} ${i + 1}`, c, "", "core"));
    html += "</div></div>";
    html += `<div class="ct-legend"><span class="ct-legend-item"><i class="ct-symbol ct-running ct-a"></i>${t.legendRun}</span><span class="ct-legend-item"><i class="ct-symbol ct-ready"></i>${t.legendReady}</span><span class="ct-legend-item"><i class="ct-symbol ct-queued"></i>${t.legendQueue}</span><span class="ct-legend-item"><i class="ct-symbol ct-io"></i>${t.legendIo}</span></div>`;
    const messages = [];
    if (st === 0) messages.push(`<b>${t.before}</b><p>${t.beforeText}</p>`);
    else {
      const i = st - 1,
        descs = [];
      const states = [
        ["A", mode.a[i]],
        ["B", mode.b[i]],
      ];
      states.forEach(([name, s]) =>
        descs.push(
          `${name} ${t[s === "run" ? "runSummary" : s === "ready" ? "readySummary" : s === "queue" ? "queueSummary" : s === "io" ? "ioSummary" : "doneSummary"]}`,
        ),
      );
      const cpu = mode.cores.map((c, j) => (c[i] ? `${t.core} ${j + 1} → ${c[i]}` : null)).filter(Boolean);
      messages.push(`<b>${t.at} t${i}: ${cpu.length ? cpu.join(" · ") : t.noCore}</b><p>${descs.join("; ")}.</p>`);
    }
    html += `<div class="ct-explain" role="status" aria-live="polite">${messages.join("")}<small>${t.explanation}</small></div>`;
    ui.replaceHTML($("#conceptBoard"), html);
    $("#conceptReality").innerHTML =
      `<span class="ct-reality-badge ${mode.badge === "concept" ? "ct-caution" : ""}">${mode.badge === "concept" ? "!" : "✓"}</span><span>${mode.badge === "concept" ? t.special : t.real}</span>`;
    const viewport = $("#conceptBoard .ct-scroll");
    if (st > 0 && viewport) {
      const active = viewport.querySelector(".ct-tick.active");
      if (active) {
        const target = active.offsetLeft + active.offsetWidth / 2 - viewport.clientWidth / 2;
        viewport.scrollLeft = Math.max(0, target);
      }
    }
  }
  function advanceConcept() {
    if (conceptStep >= 8) {
      stopConceptTimer();
      renderPatterns();
      return;
    }
    conceptStep++;
    if (conceptStep === 8) stopConceptTimer();
    renderPatterns();
  }
  $("#conceptGrid").addEventListener("click", (e) => {
    const b = e.target.closest("[data-concept]");
    if (!b) return;
    stopConceptTimer();
    conceptMode = b.dataset.concept;
    conceptStep = 0;
    renderPatterns();
  });
  $("#conceptBoard").addEventListener("click", (e) => {
    const tick = e.target.closest("[data-tick]");
    if (tick) {
      stopConceptTimer();
      conceptStep = Number(tick.dataset.tick);
      renderPatterns();
      return;
    }
    const btn = e.target.closest("button");
    if (!btn) return;
    if (btn.id === "conceptPlay") {
      if (conceptTimer) {
        stopConceptTimer();
        renderPatterns();
      } else {
        if (conceptStep === 8) conceptStep = 0;
        conceptTimer = setInterval(advanceConcept, 850);
        renderPatterns();
      }
    }
    if (btn.id === "conceptBack") {
      stopConceptTimer();
      conceptStep = Math.max(0, conceptStep - 1);
      renderPatterns();
    }
    if (btn.id === "conceptNext") {
      stopConceptTimer();
      advanceConcept();
    }
    if (btn.id === "conceptReset") {
      stopConceptTimer();
      conceptStep = 0;
      renderPatterns();
    }
  });
  document.addEventListener("click", (e) => {
    if (e.target.closest(".langbtn")) {
      renderPatterns();
      updateControls();
      renderPHP();
      drawRace();
      drawCompare();
    }
  });
  // Database race: timestamped, deterministic transaction operations. Each t is one logical step.
  const racePlans = {
    unsafe: [
      [
        { who: "A", op: "R", msg: 0 },
        { who: "B", op: "R", msg: 1 },
      ],
      [
        { who: "A", op: "C", msg: 2 },
        { who: "B", op: "C", msg: 3 },
      ],
      [{ who: "A", op: "W", msg: 4 }],
      [{ who: "B", op: "W", msg: 5 }],
    ],
    optimistic: [
      [
        { who: "A", op: "R", msg: 6 },
        { who: "B", op: "R", msg: 7 },
      ],
      [
        { who: "A", op: "C", msg: 8 },
        { who: "B", op: "C", msg: 9 },
      ],
      [{ who: "A", op: "W", msg: 10 }],
      [{ who: "B", op: "!", msg: 11 }],
      [{ who: "B", op: "↻", msg: 12 }],
      [{ who: "B", op: "C", msg: 13 }],
      [{ who: "B", op: "W", msg: 14 }],
    ],
    pessimistic: [
      [
        { who: "A", op: "L", msg: 15 },
        { who: "B", op: "WAIT", msg: 16 },
      ],
      [
        { who: "A", op: "R", msg: 17 },
        { who: "B", op: "WAIT", msg: 18 },
      ],
      [
        { who: "A", op: "C", msg: 19 },
        { who: "B", op: "WAIT", msg: 20 },
      ],
      [
        { who: "A", op: "W", msg: 21 },
        { who: "B", op: "WAIT", msg: 20 },
      ],
      [
        { who: "A", op: "U", msg: 22 },
        { who: "B", op: "WAIT", msg: 23 },
      ],
      [{ who: "B", op: "L", msg: 24 }],
      [{ who: "B", op: "C", msg: 25 }],
      [{ who: "B", op: "W", msg: 26 }],
      [{ who: "B", op: "U", msg: 27 }],
    ],
  };
  function raceSim(mode, count) {
    let x = 100,
      version = 1,
      conflicts = 0,
      waits = 0,
      lock = null,
      local = { A: null, B: null },
      pending = null,
      last = ui.text("race.ready");
    const plan = racePlans[mode];
    for (let t = 0; t < count; t++)
      for (const e of plan[t]) {
        last = ui.text("race.events." + e.msg);
        const who = e.who,
          delta = who === "A" ? 10 : 20;
        switch (e.op) {
          case "R":
            local[who] = { x, version };
            break;
          case "↻":
            local[who] = { x, version };
            break;
          case "L":
            lock = who;
            if (who === "B") local[who] = { x, version };
            break;
          case "WAIT":
            waits++;
            break;
          case "W":
            if (mode === "unsafe") {
              x = local[who].x + delta;
              version++;
            } else if (mode === "optimistic") {
              if (local[who].version === version) {
                x = local[who].x + delta;
                version++;
              } else conflicts++;
            } else if (lock === who) {
              pending = { who, x: local[who].x + delta, version: version + 1 };
            }
            break;
          case "!":
            conflicts++;
            break;
          case "U":
            if (pending?.who === who) {
              x = pending.x;
              version = pending.version;
              pending = null;
            }
            lock = null;
            break;
        }
      }
    return { x, version, conflicts, waits, lock, pending, last };
  }
  function phpRaceAvailable() {
    return state.environment === "fpm" && state.workers >= 2;
  }
  function drawRace() {
    const safe = phpRaceAvailable(),
      mode = state.raceMode,
      plan = racePlans[mode],
      n = plan.length;
    state.raceTick = Math.min(state.raceTick, n);
    const msg = ui.text(safe ? "race.realitySafe" : "race.realityOneWorker");
    $("#raceScope").className = "chip " + (safe ? "good" : "warn");
    ui.setText($("#raceScope"), safe ? "race.scopeSafe" : "race.scopeOneWorker");
    $("#raceReality").innerHTML =
      `<b>${ui.text(safe ? "race.physicalModel" : "race.scenarioConstraint")}:</b> ${msg}${safe ? " " + ui.text("race.realitySafeNote") : ""}`;
    $("#raceModes")
      .querySelectorAll("[data-race]")
      .forEach((b) => {
        b.classList.toggle("on", b.dataset.race === mode);
        b.setAttribute("aria-pressed", String(b.dataset.race === mode));
      });
    ui.replaceHTML($("#raceModeHelp"), ui.text("race.modeHints." + mode) + ui.tipButton("race.modeTips." + mode));
    const rows = ["A", "B"].map((who) => ({
      label: ui.text("request", { id: who }),
      cells: plan.map((events) => {
        let e = events.find((x) => x.who === who);
        let op = e ? e.op : "";
        return {
          id: op === "WAIT" ? ui.text("wait") : op,
          phase:
            op === "WAIT"
              ? "io"
              : op === "!"
                ? "barrier"
                : op === "L" || op === "U"
                  ? "ready"
                  : op
                    ? who === "A"
                      ? "cpu"
                      : "core"
                    : "idle",
        };
      }),
    }));
    const time = state.raceTick;
    const el = $("#raceGantt");
    renderGantt(el, rows, n, time, [], false);
    el.querySelectorAll(".ruler-cell").forEach((b, t) => {
      b.dataset.time = String(t + 1);
      b.setAttribute("role", "button");
      b.tabIndex = 0;
      b.setAttribute("aria-label", ui.text("showTime", { time: t + 1 }));
      b.onclick = () => {
        stopRace();
        state.raceTick = t + 1;
        drawRace();
      };
      b.onkeydown = (e) => {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          b.click();
        }
      };
    });
    const s = raceSim(mode, time);
    $("#raceValue").textContent = s.x;
    ui.setText($("#raceVersion"), "version", { n: s.version });
    $("#racePending").hidden = mode !== "pessimistic";
    ui.setText(
      $("#racePending"),
      s.pending ? "transactionPending" : "noPending",
      s.pending ? { who: s.pending.who, value: s.pending.x, version: s.pending.version, committed: s.x } : {},
    );
    $("#raceTime").textContent = `t = ${time} / ${n}`;
    $("#raceBack").disabled = time === 0;
    $("#raceNext").disabled = time >= n;
    playbackLabels();
    const finished = time >= n;
    ui.setText($("#raceOutcome"), finished ? (s.x === 130 ? "raceCorrect" : "raceLost") : "raceExpected", {
      conflicts: s.conflicts,
      waits: s.waits,
    });
    $("#raceOutcome").style.color = finished ? (s.x === 130 ? "var(--emerald-ink)" : "var(--vermilion-ink)") : "";
    const currentEvents =
      time > 0
        ? plan[time - 1].map((e) => `${e.who} [${e.op}]: ${ui.text("race.events." + e.msg)}`).join(" · ")
        : ui.text("race.ready");
    $("#raceExplanation").innerHTML =
      `<strong>${time === 0 ? ui.text("race.beforeRace") : `${ui.text("race.afterStep")} ${time}`}</strong> · ${esc(currentEvents)}${finished ? ` <strong>${ui.text(mode === "unsafe" ? "race.lost" : "race.preserved")}</strong>` : ""}`;
  }
  function initRace() {
    $("#raceModes").addEventListener("click", (e) => {
      const b = e.target.closest("[data-race]");
      if (!b) return;
      stopRace();
      state.raceMode = b.dataset.race;
      state.raceTick = 0;
      drawRace();
    });
    $("#raceBack").onclick = () => {
      stopRace();
      state.raceTick = Math.max(0, state.raceTick - 1);
      drawRace();
    };
    $("#raceNext").onclick = () => {
      stopRace();
      state.raceTick = Math.min(racePlans[state.raceMode].length, state.raceTick + 1);
      drawRace();
    };
    $("#raceReset").onclick = () => {
      stopRace();
      state.raceTick = 0;
      drawRace();
    };
    $("#racePlay").onclick = () => {
      if (raceTimer) {
        clearInterval(raceTimer);
        raceTimer = null;
        drawRace();
        return;
      }
      const max = racePlans[state.raceMode].length;
      if (state.raceTick >= max) state.raceTick = 0;
      raceTimer = setInterval(() => {
        state.raceTick = Math.min(max, state.raceTick + 1);
        if (state.raceTick === max) {
          clearInterval(raceTimer);
          raceTimer = null;
        }
        drawRace();
      }, 850);
      drawRace();
    };
  }
  // Every approach gets 2 CPU cores and 2 processes. A scenario changes one variable for all of them.
  const IO = { first: 1, io: 5, last: 1 },
    CPU = { first: 5, io: 0, last: 1 },
    comparisonMachine = { users: 6, workers: 2, cores: 2, processes: 2, environment: "fpm", stagger: false };
  const comparisonPresets = {
    orders: { fpm: IO, fibers: IO, loop: IO, blocking: false },
    // Plain PHP-FPM runs two independent 5-unit queries in a row; Fibers and event loops overlap them.
    fanout: { fpm: { first: 1, io: 10, last: 1 }, fibers: IO, loop: IO, blocking: false },
    cpu: { fpm: CPU, fibers: CPU, loop: CPU, blocking: false },
    blocking: { fpm: IO, fibers: IO, loop: IO, blocking: true },
  };
  let comparisonScenario = "orders",
    comparePHPModel = null,
    fibersModel = null,
    reactModel = null,
    nodeModel = null;
  const compareHorizon = () =>
    Math.max(comparePHPModel.duration, fibersModel.duration, reactModel.duration, nodeModel.duration);
  function renderComparisonModel(el, model, type, h, t) {
    const rows =
      type === "fpm"
        ? [
            ...model.workerRows.map((r, i) => ({ label: ui.text("fpm", { n: i + 1 }), cells: r })),
            ...model.coreRows.map((r, i) => ({
              label: ui.text("core", { n: i + 1 }),
              cells: r.map((id) => ({ id, phase: id ? "core" : "idle" })),
            })),
          ]
        : [
            ...model.loops.map((cells, p) => ({
              label: ui.text(type === "react" ? "reactLoop" : "nodeLoop", { n: p + 1 }),
              cells: cells.map((c) => ({ id: c.id, phase: c.phase === "io" ? "io" : c.id ? "cpu" : "idle" })),
            })),
            ...model.reqs.map((r, i) => ({
              label: ui.text("request", { id: r.id }),
              cells: model.states[i].map((s) => ({
                id: s === "cpu" ? ui.text("run") : s === "io" ? "I/O" : s === "queue" ? "··" : s === "done" ? "✓" : "",
                phase:
                  s === "cpu" ? "cpu" : s === "io" ? "io" : s === "queue" ? "queue" : s === "done" ? "done" : "idle",
              })),
            })),
          ];
    renderGantt(el, rows, h, t, [], false);
    el.querySelectorAll(".ruler-cell").forEach((cell, index) => {
      cell.classList.add("compare-scrub");
      cell.setAttribute("role", "button");
      cell.setAttribute("tabindex", "0");
      cell.setAttribute("aria-label", ui.text("showTime", { time: index + 1 }));
      const select = () => {
        stopCompare();
        state.compareTick = index + 1;
        drawCompare();
      };
      cell.onclick = select;
      cell.onkeydown = (e) => {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          select();
        }
      };
    });
    ui.followColumn(el, t > 0 ? el.querySelectorAll(".ruler-cell")[t - 1] : null);
  }
  function drawCompare() {
    const preset = comparisonPresets[comparisonScenario],
      run = (costs) => ({ ...comparisonMachine, costs });
    comparePHPModel = simulatePHP(run(preset.fpm));
    fibersModel = simulatePHP(run(preset.fibers));
    reactModel = simulateLoops(run(preset.loop), comparisonMachine.processes, preset.blocking);
    nodeModel = simulateLoops(run(preset.loop), comparisonMachine.processes, preset.blocking);
    const h = compareHorizon();
    state.compareTick = Math.min(state.compareTick, h);
    const t = state.compareTick;
    renderComparisonModel($("#comparePhp"), comparePHPModel, "fpm", h, t);
    renderComparisonModel($("#compareFibers"), fibersModel, "fpm", h, t);
    renderComparisonModel($("#compareReact"), reactModel, "react", h, t);
    renderComparisonModel($("#compareNode"), nodeModel, "node", h, t);
    $("#compareTime").textContent = `t = ${t} / ${h}`;
    Object.assign($("#compareTime").dataset, { tick: t, last: h });
    $("#compareProgress").style.width = (h ? (t / h) * 100 : 0) + "%";
    $("#compareBack").disabled = t === 0;
    $("#compareNext").disabled = t >= h;
    playbackLabels();
    ui.setText($("#comparePhpDuration"), "elapsed", { n: comparePHPModel.duration });
    ui.setText($("#compareFibersDuration"), "elapsed", { n: fibersModel.duration });
    ui.setText($("#compareReactDuration"), "elapsed", { n: reactModel.duration });
    ui.setText($("#compareNodeDuration"), "elapsed", { n: nodeModel.duration });
    if (t === 0) ui.setText($("#compareStatus"), "compareBefore");
    else if (t === h) ui.setText($("#compareStatus"), "compareComplete", { t });
    else {
      const i = t - 1;
      const fpmStatus = (model) =>
        ui.text("fpmState", {
          busy: model.workerRows.filter((r) => r[i]?.id).length,
          workers: model.workers,
          io: model.workerRows.filter((r) => r[i]?.phase === "io").length,
        });
      const loopStatus = (model) => {
        if (i >= model.duration) return ui.text("loopAllDone");
        const processes = model.loops.map((cells, p) => {
          const cell = cells[i],
            mine = model.reqs.filter((r) => r.proc === p),
            waiting = mine.some((r) => model.states[r.idx][i] === "io"),
            finished = mine.every((r) => r.doneAt !== null && r.doneAt <= i),
            key = cell.id
              ? cell.phase === "io"
                ? "loopBlocked"
                : "loopRunning"
              : waiting
                ? "loopWaiting"
                : finished
                  ? "loopDone"
                  : "loopIdle";
          return ui.text("loopProcess", { p: p + 1, state: ui.text(key, { id: cell.id }) });
        });
        if (model.blocking) return processes.join(", ");
        const pending = model.states.filter((s) => s[i] === "io").length;
        return ui.text("loopSummary", { processes: processes.join(", "), n: pending });
      };
      const rows = [
        ["PHP-FPM", fpmStatus(comparePHPModel)],
        ["PHP-FPM + Fibers", fpmStatus(fibersModel)],
        ["ReactPHP", loopStatus(reactModel)],
        ["Node.js", loopStatus(nodeModel)],
      ];
      $("#compareStatus").innerHTML =
        `<span class="compare-live-time">${esc(ui.text("compareInterval", { from: i, to: t }))}</span>` +
        rows.map(([name, status]) => `<span><b>${name}:</b> ${esc(status)}</span>`).join("");
    }
    $("#compareInsight").innerHTML =
      ui.text("compare.insight." + comparisonScenario) +
      ' <span class="muted">' +
      ui.text("compare.insightNote") +
      "</span>";
    ui.replaceHTML(
      $("#comparisonScenarioDetail"),
      ui.text("compare.details." + comparisonScenario) + ui.tipButton("compare.detailTips." + comparisonScenario),
    );
  }
  function chooseComparisonScenario(name) {
    if (!comparisonPresets[name]) return;
    stopCompare();
    comparisonScenario = name;
    state.compareTick = 0;
    $$("#compareScenarios button").forEach((b) => {
      let chosen = b.dataset.scenario === name;
      b.classList.toggle("on", chosen);
      b.setAttribute("aria-pressed", String(chosen));
    });
    drawCompare();
  }
  function initCompare() {
    $("#compareScenarios").addEventListener("click", (e) => {
      const b = e.target.closest("button[data-scenario]");
      if (b) chooseComparisonScenario(b.dataset.scenario);
    });
    $("#compareBack").onclick = () => {
      stopCompare();
      state.compareTick = Math.max(0, state.compareTick - 1);
      drawCompare();
    };
    $("#compareNext").onclick = () => {
      stopCompare();
      state.compareTick = Math.min(compareHorizon(), state.compareTick + 1);
      drawCompare();
    };
    $("#compareReset").onclick = () => {
      stopCompare();
      state.compareTick = 0;
      drawCompare();
    };
    $("#comparePlay").onclick = () => {
      if (compareTimer) {
        clearInterval(compareTimer);
        compareTimer = null;
        drawCompare();
        return;
      }
      const h = compareHorizon();
      if (state.compareTick >= h) state.compareTick = 0;
      compareTimer = setInterval(() => {
        state.compareTick = Math.min(h, state.compareTick + 1);
        if (state.compareTick >= h) {
          clearInterval(compareTimer);
          compareTimer = null;
        }
        drawCompare();
      }, 550);
      drawCompare();
    };
  }

  function recompute() {
    phpModel = simulatePHP();
    state.phpTick = Math.min(phpModel.duration, state.phpTick);
    updateControls();
    renderPHP();
    drawRace();
    drawCompare();
  }
  $$(".tabbtn").forEach(
    (btn) =>
      (btn.onclick = () => {
        stopTimers();
        $$(".tabbtn").forEach((b) => {
          b.classList.toggle("active", b === btn);
          b.setAttribute("aria-selected", String(b === btn));
        });
        $$(".tab").forEach((t) => t.classList.toggle("active", t.id === "tab-" + btn.dataset.tab));
      }),
  );
  renderPatterns();
  controlInit();
  initRace();
  initCompare();
  recompute();
})();

// ===== Glossary tooltips, code examples and the language switch =====
(() => {
  "use strict";
  const $ = (sel) => document.querySelector(sel);
  const $$ = (sel) => [...document.querySelectorAll(sel)];
  const ui = window.studyUI;

  // Hover, focus and click; single tooltip keeps visuals uncluttered.
  const tip = $("#floatingTip");
  let tipTarget = null,
    tipCloseTimer = null;
  function cancelTipClose() {
    clearTimeout(tipCloseTimer);
    tipCloseTimer = null;
  }
  function closeTip() {
    cancelTipClose();
    tip.hidden = true;
    if (tipTarget) {
      const ids = (tipTarget.getAttribute("aria-describedby") || "")
        .split(/\s+/)
        .filter((id) => id && id !== "floatingTip");
      if (ids.length) tipTarget.setAttribute("aria-describedby", ids.join(" "));
      else tipTarget.removeAttribute("aria-describedby");
    }
    tipTarget = null;
  }
  function scheduleTipClose() {
    cancelTipClose();
    tipCloseTimer = setTimeout(() => {
      if (!tip.matches(":hover") && !tipTarget?.matches(":hover,:focus")) closeTip();
    }, 180);
  }
  function showTip(button) {
    const item = ui.texts(button.dataset.tip || "glossary." + button.dataset.term);
    if (!Array.isArray(item)) return;
    cancelTipClose();
    if (tipTarget !== button) closeTip();
    tipTarget = button;
    const [title, body] = item;
    tip.innerHTML = `<strong>${title}</strong>${body}`;
    tip.hidden = false;
    button.setAttribute(
      "aria-describedby",
      [
        ...new Set((button.getAttribute("aria-describedby") || "").split(/\s+/).filter(Boolean).concat("floatingTip")),
      ].join(" "),
    );
    const rect = button.getBoundingClientRect();
    let x = Math.min(window.innerWidth - tip.offsetWidth - 12, Math.max(12, rect.left));
    let y = rect.bottom + 10;
    if (y + tip.offsetHeight > window.innerHeight - 10) y = rect.top - tip.offsetHeight - 10;
    tip.style.left = x + "px";
    tip.style.top = Math.max(8, y) + "px";
  }
  document.addEventListener("pointerover", (e) => {
    if (e.pointerType === "touch") return;
    const b = e.target.closest?.(".tip-button");
    if (b) showTip(b);
    else if (e.target.closest?.("#floatingTip")) cancelTipClose();
  });
  document.addEventListener("pointerout", (e) => {
    if (e.pointerType === "touch") return;
    if (e.target.closest?.(".tip-button,#floatingTip")) scheduleTipClose();
  });
  document.addEventListener("focusin", (e) => {
    const b = e.target.closest?.(".tip-button");
    if (b) showTip(b);
  });
  document.addEventListener("focusout", (e) => {
    if (e.target.closest?.(".tip-button")) scheduleTipClose();
  });
  document.addEventListener("click", (e) => {
    const b = e.target.closest?.(".tip-button");
    if (b) showTip(b);
    else if (!e.target.closest?.("#floatingTip")) closeTip();
  });
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") closeTip();
  });
  window.addEventListener("scroll", closeTip, { passive: true });
  window.addEventListener("resize", closeTip, { passive: true });

  const codeExamples = {
    postgres: {
      optimistic: {
        code: `-- Example row: id = 1, balance = 100, version = 1
SELECT balance, version
FROM accounts WHERE id = 1;
-- Suppose we read balance=100, version=1.

UPDATE accounts
SET balance = 110,
    version = version + 1
WHERE id = 1 AND version = 1
RETURNING balance, version;

-- No returned row? Concurrent update won.
-- Reload current state and retry if appropriate.`,
      },
      pessimistic: {
        code: `BEGIN ISOLATION LEVEL READ COMMITTED;

SELECT balance, version FROM accounts
WHERE id = 1 FOR UPDATE;
-- Other writers wait on this row.

UPDATE accounts
SET balance = balance + 10,
    version = version + 1
WHERE id = 1
RETURNING balance, version;

COMMIT; -- Releases the row lock
-- Repeat in a second transaction with +20.`,
      },
    },
    symfony: {
      optimistic: {
        code: `// App\\Entity\\Account: Doctrine entity mapping
#[ORM\\Version]
#[ORM\\Column(type: 'integer')]
private int $version = 1;

// Symfony application service / controller:
use Doctrine\\DBAL\\LockMode;
use Doctrine\\ORM\\OptimisticLockException;

try {
    $account = $em->find(
        Account::class, 1,
        LockMode::OPTIMISTIC, $expectedVersion
    ); // expectedVersion came from the earlier GET
    if (!$account) throw new \\RuntimeException('Missing');

    $account->add(10);
    $em->flush(); // checks mapped version
} catch (OptimisticLockException $e) {
    // Send HTTP 409, or retry in a NEW unit of work.
}`,
      },
      pessimistic: {
        code: `use Doctrine\\DBAL\\LockMode;
use Doctrine\\ORM\\EntityManagerInterface;

// $em: EntityManagerInterface injected in Symfony
$em->wrapInTransaction(function ($tx) : void {
    $account = $tx->find(
        Account::class,
        1,
        LockMode::PESSIMISTIC_WRITE
    ); // SELECT ... FOR UPDATE (PostgreSQL)
    if (!$account) throw new \\RuntimeException('Missing');

    $account->add(10);
    // wrapInTransaction() flushes then COMMITs.
});`,
      },
    },
  };
  let strategy = "optimistic",
    platform = "postgres";
  function renderCode() {
    const example = codeExamples[platform][strategy],
      copy = ui.texts("code.examples." + platform + "." + strategy);
    $("#codeCaption").textContent = copy.caption;
    $("#codeExample").textContent = example.code;
    $("#codeInsightHeading").textContent = copy.title;
    $("#codeInsightBody").textContent = copy.body;
    $("#codeCaution").textContent = copy.caution;
    $$("#codeStrategy button").forEach((b) => {
      const on = b.dataset.strategy === strategy;
      b.classList.toggle("active", on);
      b.setAttribute("aria-pressed", String(on));
    });
    $$("#codePlatform button").forEach((b) => {
      const on = b.dataset.platform === platform;
      b.classList.toggle("active", on);
      b.setAttribute("aria-pressed", String(on));
    });
  }
  $("#codeStrategy").addEventListener("click", (e) => {
    const b = e.target.closest("button[data-strategy]");
    if (!b) return;
    strategy = b.dataset.strategy;
    renderCode();
  });
  $("#codePlatform").addEventListener("click", (e) => {
    const b = e.target.closest("button[data-platform]");
    if (!b) return;
    platform = b.dataset.platform;
    renderCode();
  });
  $("#copyCode").addEventListener("click", async () => {
    const text = $("#codeExample").textContent;
    try {
      await navigator.clipboard.writeText(text);
      ui.setText($("#copyCode"), "code.copied");
    } catch (e) {
      const t = document.createElement("textarea");
      t.value = text;
      document.body.appendChild(t);
      t.select();
      document.execCommand("copy");
      t.remove();
      ui.setText($("#copyCode"), "code.copied");
    }
    setTimeout(() => {
      ui.setText($("#copyCode"), "code.copy");
    }, 1200);
  });
  $$(".langbtn").forEach((btn) =>
    btn.addEventListener("click", () => {
      $$(".langbtn").forEach((b) => {
        const active = b.dataset.lang === btn.dataset.lang;
        b.setAttribute("aria-pressed", String(active));
      });
      closeTip();
      ui.applyTexts();
      renderCode();
    }),
  );
  ui.applyTexts();
  renderCode();
})();

// ===== Consistency tab: DDD aggregate and saga =====
(() => {
  "use strict";
  const $ = (s) => document.querySelector(s);
  const aggSteps = [
    { A: "—", B: "—", db: "1 / 2", version: 5, conf: 1, active: [] },
    { A: "HTTP → FPM", B: "HTTP → FPM", db: "1 / 2", version: 5, conf: 1, active: [0, 1] },
    { A: "read v5", B: "read v5", db: "1 / 2", version: 5, conf: 1, active: [0, 1] },
    { A: "local 2 / 2", B: "local 2 / 2", db: "1 / 2", version: 5, conf: 1, active: [0, 1] },
    { A: "confirmed ✓", B: "stale v5", db: "2 / 2", version: 6, conf: 2, active: [0, 2] },
    { A: "confirmed ✓", B: "conflict / rejected", db: "2 / 2", version: 6, conf: 2, active: [1, 2] },
    { A: "confirmed ✓", B: "full → rejected", db: "2 / 2", version: 6, conf: 2, active: [1] },
    { A: "confirmed ✓", B: "rejected", db: "2 / 2", version: 6, conf: 2, active: [] },
  ];
  const aggUnsafeSteps = aggSteps.map((x) => ({ ...x, active: [...x.active] }));
  aggUnsafeSteps[5] = { A: "confirmed ✓", B: "confirmed ✓", db: "2 / 2", version: 7, conf: 3, active: [1, 2] };
  aggUnsafeSteps[6] = { A: "confirmed ✓", B: "confirmed ✓", db: "2 / 2", version: 7, conf: 3, active: [1] };
  aggUnsafeSteps[7] = { A: "confirmed ✓", B: "confirmed ✓", db: "2 / 2", version: 7, conf: 3, active: [] };
  const sagaFailure = [
    { order: "—", stock: "1 available", payment: "—", ship: "—", active: [] },
    { order: "PENDING", stock: "1 available", payment: "—", ship: "—", active: [0] },
    { order: "PENDING", stock: "RESERVED", payment: "—", ship: "—", active: [1] },
    { order: "PENDING", stock: "RESERVED", payment: "CHARGED", ship: "—", active: [2] },
    { order: "PENDING", stock: "RESERVED", payment: "CHARGED", ship: "FAILED", active: [3], error: true },
    { order: "PENDING", stock: "RESERVED", payment: "REFUNDED", ship: "FAILED", active: [2] },
    { order: "PENDING", stock: "RELEASED", payment: "REFUNDED", ship: "FAILED", active: [1] },
    { order: "CANCELLED", stock: "RELEASED", payment: "REFUNDED", ship: "FAILED", active: [0] },
    { order: "CANCELLED", stock: "RELEASED", payment: "REFUNDED", ship: "FAILED", active: [] },
  ];
  const sagaSuccess = [
    { order: "—", stock: "1 available", payment: "—", ship: "—", active: [] },
    { order: "PENDING", stock: "1 available", payment: "—", ship: "—", active: [0] },
    { order: "PENDING", stock: "RESERVED", payment: "—", ship: "—", active: [1] },
    { order: "PENDING", stock: "RESERVED", payment: "CHARGED", ship: "—", active: [2] },
    { order: "PENDING", stock: "RESERVED", payment: "CHARGED", ship: "SHIPMENT_CREATED", active: [3] },
    { order: "CONFIRMED", stock: "RESERVED", payment: "CHARGED", ship: "SHIPMENT_CREATED", active: [0] },
    { order: "CONFIRMED", stock: "RESERVED", payment: "CHARGED", ship: "SHIPMENT_CREATED", active: [] },
  ];
  const fmt = (x) => studyUI.texts("consistency.status")[x] ?? x;
  const a = { tick: 0, mode: "protected", timer: null },
    s = { tick: 0, mode: "failure", timer: null };
  const aggCode = `// Symfony / Doctrine: mapped entity fragments
use Doctrine\\Common\\Collections\\Collection;
use Doctrine\\ORM\\Mapping as ORM;

// Inside Order; IDs and constructor omitted.
// The constructor initializes $items with an ArrayCollection.

#[ORM\\Version]
#[ORM\\Column(type: 'integer')]
private int $version = 1;

#[ORM\\Column(type: 'integer')]
private int $itemCount = 0;

#[ORM\\OneToMany(mappedBy: 'order', targetEntity: OrderItem::class)]
private Collection $items;

// $item is a new OrderItem created for this operation.
public function addItem(OrderItem $item): void
{
    if ($this->itemCount >= 2) {
        throw new OrderItemLimitReached();
    }
    $item->setOrder($this);
    $this->items->add($item);
    ++$this->itemCount; // Mapped scalar change schedules Order UPDATE.
}

// Inside OrderItem: the owning side stores the foreign key.
#[ORM\\ManyToOne(targetEntity: Order::class, inversedBy: 'items')]
#[ORM\\JoinColumn(nullable: false)]
private Order $order;

public function setOrder(Order $order): void
{
    $this->order = $order;
}

// Application service; initial Order #42: itemCount=1, version=5.
$em->wrapInTransaction(function ($tx): void {
    $order = $tx->find(Order::class, 42);
    if (!$order) throw new \\RuntimeException('Missing');

    $item = new OrderItem();
    $order->addItem($item);
    $tx->persist($item);
    // Automatic flush: insert child + versioned UPDATE of Order.
    // Both changes COMMIT together, or both roll back.
});
// On OptimisticLockException, wrapInTransaction() rolls back
// and closes the EntityManager. Return a conflict, or use a NEW
// manager, reload Order and call addItem() again: the limit is rechecked.
// Every add/remove operation must keep itemCount and items in sync.`;
  const sagaCode = `// Conceptual Symfony Messenger Saga orchestrator
// All handler steps must be idempotent.
handle(OrderPlaced $e):
  dispatch(new ReserveStock($e->orderId));
handle(StockReserved $e):
  dispatch(new ChargePayment($e->orderId));
handle(PaymentCharged $e):
  dispatch(new CreateShipment($e->orderId));
handle(ShipmentFailed $e):
  dispatch(new RefundPayment($e->orderId));
handle(PaymentRefunded $e):
  dispatch(new ReleaseStock($e->orderId));
handle(StockReleased $e):
  dispatch(new CancelOrder($e->orderId));

// Persist process state + stable correlation ID.
// Write business data and outgoing event to an outbox
// in the SAME local DB transaction.
// Recover/retry after worker crash; this is not automatic
// merely because Messenger is installed.`;
  function stop(obj) {
    if (obj.timer !== null) {
      clearInterval(obj.timer);
      obj.timer = null;
    }
  }
  function renderTrack(el, n, t, obj, draw) {
    el.style.setProperty("--n", String(n));
    studyUI.replaceHTML(
      el,
      Array.from(
        { length: n },
        (_, i) =>
          `<button type="button" class="domain-tick ${i < t ? "passed" : ""} ${i === t ? "current" : ""}" data-t="${i}" aria-label="t${i}" aria-pressed="${i === t}">t${i}</button>`,
      ).join(""),
    );
    el.querySelectorAll("button").forEach(
      (b) =>
        (b.onclick = () => {
          stop(obj);
          obj.tick = Number(b.dataset.t);
          draw();
        }),
    );
  }
  const sagaLinkPlans = {
    failure: [
      [],
      [
        { from: "Client UI", to: "Orders", label: "POST /orders", kind: "http" },
        { from: "Orders", to: "Saga", label: "OrderPlaced", kind: "event" },
      ],
      [
        { from: "Saga", to: "Inventory", label: "ReserveStock", kind: "command" },
        { from: "Inventory", to: "Saga", label: "StockReserved", kind: "event" },
      ],
      [
        { from: "Saga", to: "Payments", label: "ChargePayment", kind: "command" },
        { from: "Payments", to: "Saga", label: "PaymentCharged", kind: "event" },
      ],
      [
        { from: "Saga", to: "Shipping", label: "CreateShipment", kind: "command" },
        { from: "Shipping", to: "Saga", label: "ShipmentFailed", kind: "event", comp: true },
      ],
      [
        { from: "Saga", to: "Payments", label: "RefundPayment", kind: "compensation", comp: true },
        { from: "Payments", to: "Saga", label: "PaymentRefunded", kind: "event", comp: true },
      ],
      [
        { from: "Saga", to: "Inventory", label: "ReleaseStock", kind: "compensation", comp: true },
        { from: "Inventory", to: "Saga", label: "StockReleased", kind: "event", comp: true },
      ],
      [
        { from: "Saga", to: "Orders", label: "CancelOrder", kind: "compensation", comp: true },
        { from: "Orders", to: "Saga", label: "OrderCancelled", kind: "event", comp: true },
      ],
      [],
    ],
    success: [
      [],
      [
        { from: "Client UI", to: "Orders", label: "POST /orders", kind: "http" },
        { from: "Orders", to: "Saga", label: "OrderPlaced", kind: "event" },
      ],
      [
        { from: "Saga", to: "Inventory", label: "ReserveStock", kind: "command" },
        { from: "Inventory", to: "Saga", label: "StockReserved", kind: "event" },
      ],
      [
        { from: "Saga", to: "Payments", label: "ChargePayment", kind: "command" },
        { from: "Payments", to: "Saga", label: "PaymentCharged", kind: "event" },
      ],
      [
        { from: "Saga", to: "Shipping", label: "CreateShipment", kind: "command" },
        { from: "Shipping", to: "Saga", label: "ShipmentCreated", kind: "event" },
      ],
      [
        { from: "Saga", to: "Orders", label: "ConfirmOrder", kind: "command" },
        { from: "Orders", to: "Saga", label: "OrderConfirmed", kind: "event" },
      ],
      [],
    ],
  };

  function termIcon(key) {
    return `<button type="button" class="term-button tip-button" data-term="${key}" aria-label="${studyUI.text("consistency.termAria")}" title="${studyUI.text("consistency.termTitle")}">?</button>`;
  }
  function setText(id, value, html = false) {
    const el = $("#" + id);
    if (el) {
      if (html) el.innerHTML = value;
      else el.textContent = value;
    }
  }

  function renderAgg() {
    const tr = studyUI.texts("consistency");
    const plan = a.mode === "protected" ? aggSteps : aggUnsafeSteps;
    const r = plan[a.tick],
      protectedMode = a.mode === "protected",
      bad = r.conf > 2;
    const committedItems = bad ? 3 : r.conf;
    const currentNote =
      a.tick === 0
        ? tr.introTick
        : a.tick === 1
          ? tr.arriveTick
          : a.tick === 2
            ? tr.readTick
            : a.tick === 3
              ? tr.preparedTick
              : a.tick === 4
                ? tr.firstCommit
                : a.tick === 5
                  ? bad
                    ? tr.unsafeTick
                    : tr.conflictTick
                  : a.tick === 6
                    ? bad
                      ? tr.unsafeRetryTick
                      : tr.retryTick
                    : bad
                      ? tr.unsafeFinal
                      : tr.finalTick;
    renderTrack($("#aggTrack"), plan.length, a.tick, a, renderAgg);
    const state = (which) => {
      const t = a.tick;
      if (t === 0) return [tr.notStarted, tr.noRead, "idle"];
      if (t === 1) return [tr.arrived, tr.noRead, "active"];
      if (t === 2) return [tr.read, tr.source, "active"];
      if (t === 3) return [tr.prepared, tr.preparedValue, "active"];
      if (which === "A") return [tr.accepted, tr.preparedValue, "done"];
      if (t === 4) return [tr.stale, tr.source, "wait"];
      if (t === 5) return bad ? [tr.unsafeSaved, tr.preparedValue, "stop"] : [tr.conflict, tr.source, "stop"];
      if (t >= 6) return bad ? [tr.unsafeSaved, tr.preparedValue, "stop"] : [tr.rejected, tr.fresh, "stop"];
      return [tr.notStarted, tr.noRead, "idle"];
    };
    for (const [id, who, title] of [
      ["aggReqA", "A", tr.reqA],
      ["aggReqB", "B", tr.reqB],
    ]) {
      const [status, read, cls] = state(who);
      $("#" + id).innerHTML =
        `<div class="agg-request-head"><b>${title}</b><span class="agg-status ${cls}">${status}</span></div>` +
        `<div class="agg-request-step">${read}</div>` +
        `<div class="agg-request-meta"><span>${tr.memoryNote}${termIcon("snapshot")}</span></div>`;
    }
    $("#aggDbState").className = `agg-database-card ${bad ? "bad" : ""}`;
    $("#aggDbState").innerHTML =
      `<div class="agg-request-head"><b>${tr.dbTitle}${termIcon("committed")}</b><span class="agg-status ${bad ? "stop" : "done"}">${bad ? tr.bad : tr.okay}</span></div>` +
      `<div class="agg-db-num ${bad ? "bad" : ""}">${committedItems} / 2</div>` +
      `<div class="agg-db-small"><b>${tr.itemCount}:</b> ${committedItems}<br><b>${tr.orderVersion}:</b> v${r.version}` +
      (bad ? `<br><b>${tr.counter}:</b> 2 <em>(${tr.counterMismatch})</em>` : "") +
      `</div>`;
    $("#aggLiveExplanation").innerHTML = `<b>t${a.tick}:</b> ${currentNote}`;
    $("#aggPolicyBadge").textContent = protectedMode ? tr.protected : tr.unsafe;
    setText("aggMapEyebrow", tr.mapOver);
    setText("aggMapLead", tr.mapLead);
    setText("aggContextLabel", tr.context);
    $("#aggContextLabel").innerHTML += termIcon("boundedContext");
    setText("aggContextMeta", tr.contextMeta);
    setText("aggZoneLeftTitle", tr.zoneLeft);
    setText("aggZoneRightTitle", tr.zoneRight);
    setText("aggExternalDescription", tr.external);
    setText("aggBoundaryExplain", tr.boundedExplain);
    setText("aggLiveEyebrow", tr.liveOver);
    setText("aggLiveTitle", tr.liveTitle);
    $("#aggLeftNodes").innerHTML =
      `<div class="agg-node"><b>${tr.outsideLeft1}</b>${tr.outsideLeft1Desc}</div><div class="agg-node"><b>${tr.outsideLeft2}</b>${tr.outsideLeft2Desc}</div>`;
    $("#aggRightNodes").innerHTML =
      `<div class="agg-node"><b>${tr.outsideRight1}</b>${tr.outsideRight1Desc}</div><div class="agg-node"><b>${tr.outsideRight2}</b>${tr.outsideRight2Desc}</div><div class="agg-node"><b>${tr.outsideRight3}</b>${tr.outsideRight3Desc}</div>`;
    $("#aggBoundaryVisual").className = `agg-boundary-visual ${bad ? "bad" : a.tick >= 2 ? "hot" : ""}`;
    // Draw only OrderItems that have already been committed to PostgreSQL.
    // The prepared item is visible in each request's PHP-memory card, not inside the aggregate's committed-state map.
    const committedSecondItem =
      a.tick >= 4 ? `<div class="agg-item-card hot"><b>${tr.item2}</b>${tr.item2Saved}</div>` : "";
    const third = bad ? `<div class="agg-item-card bad"><b>${tr.item3}</b>${tr.item3Saved}</div>` : "";
    $("#aggBoundaryVisual").innerHTML =
      `<div class="agg-boundary-title"><b>${tr.aggregateLabel}${termIcon("aggregate")}</b><span>${tr.boundaryTag}${termIcon("immediate")}</span></div>` +
      `<div class="agg-root-card"><h6>${tr.root}${termIcon("aggregateRoot")}</h6><p>${tr.rootDescription}</p></div>` +
      `<div class="agg-items-grid ${a.tick < 4 ? "single" : ""}"><div class="agg-item-card"><b>${tr.item1}</b>${tr.item1Description}</div>${committedSecondItem}${third}</div>` +
      `<div class="agg-boundary-footer">${tr.invariantShort}${termIcon("invariant")}<div style="margin-top:5px">${tr.atomicText}${termIcon("txBoundary")}</div></div>`;
    $("#aggInvariant").classList.toggle("bad", bad);
    $("#aggInvariant").innerHTML =
      `<strong>${bad ? tr.invariantBad : tr.invariant}${termIcon("invariant")}</strong><span>${tr.initial}</span>`;
    $("#aggEvent").className = `domain-event ${bad ? "error" : a.tick === plan.length - 1 ? "good" : ""}`;
    $("#aggEvent").innerHTML =
      `<span class="event-count">t${a.tick}</span><div><b>${tr.whatHappened}</b><p>${currentNote}</p></div>`;
    $("#aggFoot").innerHTML = `<strong>${tr.remember}</strong> ${tr.atomicText}`;
    $("#aggCounter").textContent = `t = ${a.tick} / ${plan.length - 1}`;
    $("#aggControls [data-act=play]").textContent = a.timer
      ? tr.pause
      : a.tick === plan.length - 1
        ? tr.replay
        : tr.play;
    $("#aggControls [data-act=back]").disabled = a.tick === 0;
    $("#aggControls [data-act=next]").disabled = a.tick >= plan.length - 1;
    $("#aggOptions")
      .querySelectorAll("[data-agg]")
      .forEach((b) => {
        b.classList.toggle("on", b.dataset.agg === a.mode);
        b.setAttribute("aria-pressed", String(b.dataset.agg === a.mode));
      });
  }

  function renderSaga() {
    const ui = studyUI.texts("consistency");
    const plan = s.mode === "failure" ? sagaFailure : sagaSuccess;
    const r = plan[s.tick];
    const links = sagaLinkPlans[s.mode][s.tick] || [];
    renderTrack($("#sagaTrack"), plan.length, s.tick, s, renderSaga);
    const event = ui.sagaEvents[s.mode][s.tick];
    const serviceKeys = ["sagaSvcOrder", "sagaSvcInventory", "sagaSvcPayment", "sagaSvcShipping"];
    const rawStates = [r.order, r.stock, r.payment, r.ship];
    const serviceTasks = ui.serviceTasks;
    for (let i = 0; i < 4; i++) {
      const current = serviceKeys[i],
        isActive = r.active.includes(i);
      const inComp = s.mode === "failure" && s.tick >= [7, 6, 5, 99][i] && i < 3;
      $("#" + current).className = `saga-service ${isActive ? "active" : ""} ${inComp ? "comp" : ""}`;
      $("#" + current).innerHTML =
        `<b>${ui.serviceNames[i]}</b><div class="s-state">${fmt(rawStates[i])}</div>` +
        `<span class="tx-tag">${ui.localTransaction}${termIcon("localTx")}</span><div class="s-note">${serviceTasks[i]}</div>`;
    }
    setText("sagaSummary1Title", ui.sagaSummary1Title);
    setText("sagaSummary2Title", ui.sagaSummary2Title);
    setText("sagaSummary3Title", ui.sagaSummary3Title);
    setText("sagaSummary1", ui.saga1);
    setText("sagaSummary2", ui.saga2);
    setText("sagaSummary3", ui.saga3);
    $("#sagaClientCard").innerHTML = `<b>${ui.sagaClient}</b><p>${ui.sagaClientDesc}</p>`;
    $("#sagaLocalTxCard").innerHTML = `<b>${ui.sagaLocal}${termIcon("localTx")}</b><p>${ui.sagaLocalDesc}</p>`;
    $("#sagaEventualCard").innerHTML = `<b>${ui.sagaEventual}${termIcon("eventual")}</b><p>${ui.sagaEventualDesc}</p>`;
    $("#sagaCompCard").innerHTML = `<b>${ui.sagaComp}${termIcon("compensation")}</b><p>${ui.sagaCompDesc}</p>`;
    $("#sagaOutcomeCard").innerHTML =
      `<b>${ui.sagaOut}</b><p>${s.mode === "failure" ? ui.sagaDoneFail : ui.sagaDoneOk}</p>`;
    $("#sagaBusCard").innerHTML =
      `<b>${ui.sagaBus}${termIcon("outbox")}${termIcon("idempotency")}</b><p>${ui.sagaBusDesc}</p>`;
    $("#sagaOrchestrator").innerHTML =
      `<small>${ui.coordinatorLabel}</small><b>${ui.orchestrator}${termIcon("orchestrator")}</b><span>${ui.orchestratorDesc}</span>`;
    const names = ui.nodeNames;
    const kLabel = (k) => ui.linkKinds[k] || k;
    $("#sagaLinks").innerHTML = links.length
      ? links
          .map(
            (item) =>
              `<div class="saga-link ${item.comp ? "comp active" : "active"}">` +
              `<span class="kind">${kLabel(item.kind)}</span><span><span class="dir">${names[item.from] || item.from} → ${names[item.to] || item.to}</span><br><code>${item.label}</code></span><span>${item.comp ? kLabel("compensation") : kLabel(item.kind)}</span></div>`,
          )
          .join("")
      : `<div class="saga-link"><span class="kind">${ui.stateLabel}</span><span>${ui.noMessage}</span><span></span></div>`;
    const actions = s.mode === "failure" ? ui.sagaFlowFailure : ui.sagaFlowSuccess;
    studyUI.replaceHTML(
      $("#sagaFlowList"),
      actions
        .map((txt, i) => {
          const completed = s.tick >= i + 1;
          const isCurrent = s.tick === i + 1;
          const isComp = s.mode === "failure" && i >= 4;
          return `<div data-saga-step="${i + 1}" role="button" tabindex="0" class="saga-step-chip ${completed ? "active" : ""} ${isComp && completed ? "comp" : ""} ${isCurrent ? "saga-flow-current" : ""}"><span class="saga-step-no">${i + 1}</span><span>${txt}${isCurrent ? " ←" : ""}</span></div>`;
        })
        .join(""),
    );
    setText("sagaMapCaption", ui.sagaFooter);
    $("#sagaEvent").className = `domain-event ${r.error ? "error" : s.tick === plan.length - 1 ? "good" : ""}`;
    $("#sagaEvent").innerHTML =
      `<span class="event-count">t${s.tick}</span><div><b>${event[0]}</b><p>${event[1]}</p></div>`;
    $("#sagaFoot").innerHTML = `<strong>${ui.remember}</strong> ${ui.sagaFoot}`;
    $("#sagaNotes").innerHTML =
      `<span>${ui.sagaNote1}${termIcon("outbox")}</span><span>${ui.sagaNote2}${termIcon("idempotency")}</span><span>${ui.sagaNote3}</span>`;
    $("#sagaCounter").textContent = `t = ${s.tick} / ${plan.length - 1}`;
    Object.assign($("#sagaCounter").dataset, { tick: s.tick, last: plan.length - 1 });
    $("#sagaControls [data-act=play]").dataset.playing = String(!!s.timer);
    $("#sagaControls [data-act=play]").textContent = s.timer
      ? ui.pause
      : s.tick === plan.length - 1
        ? ui.replay
        : ui.play;
    $("#sagaControls [data-act=back]").disabled = s.tick === 0;
    $("#sagaControls [data-act=next]").disabled = s.tick >= plan.length - 1;
    $("#sagaOptions")
      .querySelectorAll("[data-saga]")
      .forEach((b) => {
        b.classList.toggle("on", b.dataset.saga === s.mode);
        b.setAttribute("aria-pressed", String(b.dataset.saga === s.mode));
      });
  }
  function attach(ctrl, obj, draw, len) {
    $(ctrl).addEventListener("click", (e) => {
      const b = e.target.closest("button[data-act]");
      if (!b) return;
      let action = b.dataset.act;
      if (action === "play" && obj.timer !== null) {
        stop(obj);
        draw();
        return;
      }
      stop(obj);
      if (action === "play") {
        if (obj.tick >= len() - 1) obj.tick = 0;
        obj.timer = setInterval(() => {
          obj.tick = Math.min(obj.tick + 1, len() - 1);
          if (obj.tick === len() - 1) stop(obj);
          draw();
        }, 900);
      } else if (action === "back") obj.tick = Math.max(0, obj.tick - 1);
      else if (action === "next") obj.tick = Math.min(len() - 1, obj.tick + 1);
      else if (action === "reset") obj.tick = 0;
      draw();
    });
  }

  function renderI18n() {
    const u = studyUI.texts("consistency");
    const items = {
      immediateTitle: u.immTitle + termIcon("immediate"),
      immediateDesc: u.immDesc,
      eventualTitle: u.evTitle + termIcon("eventual"),
      eventualDesc: u.evDesc,
      ddLocalTitle: u.localTitle + termIcon("aggregate"),
      ddLocalDesc: u.localDesc,
      ddDistTitle: u.distTitle + termIcon("saga"),
      ddDistDesc: u.distDesc,
      consHelp1Title: u.help1Title,
      consHelp1: u.help1,
      consHelp2Title: u.help2Title,
      consHelp2: u.help2,
      consHelp3Title: u.help3Title,
      consHelp3: u.help3,
      aggOverline: u.aggOver,
      aggregateTitle: u.aggTitle,
      aggregateLead: u.aggLead + studyUI.tipButton("consistency.aggTip"),
      sagaOverline: u.sagaOver,
      sagaTitle: u.sagaTitle,
      sagaLead: u.sagaLead + studyUI.tipButton("consistency.sagaTip"),
      aggCodeSummary: u.codeAgg,
      sagaCodeSummary: u.codeSaga,
      aggMapEyebrow: u.mapOver,
      aggMapLead: u.mapLead,
    };
    const htmlFields = new Set([
      "immediateTitle",
      "eventualTitle",
      "ddLocalTitle",
      "ddDistTitle",
      "aggregateLead",
      "sagaLead",
    ]);
    for (const [id, v] of Object.entries(items)) setText(id, v, htmlFields.has(id));
    $("#aggOptions [data-agg=protected]").textContent = u.protected;
    $("#aggOptions [data-agg=unsafe]").textContent = u.unsafe;
    $("#sagaOptions [data-saga=failure]").textContent = u.sagaFailure;
    $("#sagaOptions [data-saga=success]").textContent = u.sagaSuccess;
    for (const id of ["agg", "saga"])
      for (const act of ["back", "next", "reset"]) $("#" + id + "Controls [data-act=" + act + "]").textContent = u[act];
    renderAgg();
    renderSaga();
  }
  $("#aggOptions").onclick = (e) => {
    const b = e.target.closest("[data-agg]");
    if (!b) return;
    stop(a);
    a.mode = b.dataset.agg;
    a.tick = 0;
    renderAgg();
  };
  $("#sagaOptions").onclick = (e) => {
    const b = e.target.closest("[data-saga]");
    if (!b) return;
    stop(s);
    s.mode = b.dataset.saga;
    s.tick = 0;
    renderSaga();
  };
  attach("#aggControls", a, renderAgg, () => aggSteps.length);
  attach("#sagaControls", s, renderSaga, () => (s.mode === "failure" ? sagaFailure.length : sagaSuccess.length));
  $("#aggCode").textContent = aggCode;
  $("#sagaCode").textContent = sagaCode;
  document.querySelectorAll(".langbtn").forEach((b) => b.addEventListener("click", renderI18n));
  document.querySelectorAll("[data-tab]").forEach((b) =>
    b.addEventListener("click", () => {
      stop(a);
      stop(s);
      renderAgg();
      renderSaga();
    }),
  );
  renderI18n();
})();

// ===== Tab navigation, in-page links and keyboard support =====
(() => {
  const main = document.getElementById("learningContent");
  const topbar = document.querySelector(".topbar");
  const smooth = () => (matchMedia("(prefers-reduced-motion: reduce)").matches ? "instant" : "smooth");
  // Tab semantics support screen readers and arrow-key navigation.
  const tabs = [...document.querySelectorAll(".tabbtn[data-tab]")];
  document.querySelector("nav.tabs")?.setAttribute("role", "tablist");
  tabs.forEach((tab, i) => {
    tab.id = "chapter-" + tab.dataset.tab;
    tab.setAttribute("role", "tab");
    tab.setAttribute("aria-controls", "tab-" + tab.dataset.tab);
    tab.tabIndex = tab.classList.contains("active") ? 0 : -1;
    const panel = document.getElementById("tab-" + tab.dataset.tab);
    panel.setAttribute("role", "tabpanel");
    panel.setAttribute("aria-labelledby", tab.id);
    panel.tabIndex = 0;
    tab.setAttribute("aria-selected", String(tab.classList.contains("active")));
    tab.addEventListener("click", () => {
      tabs.forEach((t) => {
        t.setAttribute("aria-selected", String(t === tab));
        t.tabIndex = t === tab ? 0 : -1;
      });
      // A chapter opens at its beginning, not at the scroll position left by the previous one.
      const covered = topbar ? Math.max(0, topbar.getBoundingClientRect().bottom) : 0;
      if (main.getBoundingClientRect().top < covered) main.scrollIntoView({ behavior: "instant", block: "start" });
    });
    tab.addEventListener("keydown", (e) => {
      const delta = e.key === "ArrowRight" ? 1 : e.key === "ArrowLeft" ? -1 : 0;
      if (delta || e.key === "Home" || e.key === "End") {
        e.preventDefault();
        const next = e.key === "Home" ? 0 : e.key === "End" ? tabs.length - 1 : (i + delta + tabs.length) % tabs.length;
        tabs[next].focus();
        tabs[next].click();
      }
    });
  });
  // A link to a section in another chapter opens that chapter; a link to a collapsed section expands it.
  document.addEventListener("click", (e) => {
    const link = e.target.closest('a[href^="#"]');
    const target = link && document.getElementById(link.getAttribute("href").slice(1));
    const panel = target?.closest(".tab");
    if (!panel) return;
    e.preventDefault();
    if (!panel.classList.contains("active")) document.getElementById("chapter-" + panel.id.slice(4))?.click();
    if (target.tagName === "DETAILS") target.open = true;
    target.scrollIntoView({ behavior: smooth(), block: "start" });
  });
})();

// ===== Floating playback docks: Saga and the event-loop comparison =====
// A compact copy of an experiment's playback bar. It appears once the original bar has scrolled
// under the top of the viewport while the experiment is still on screen. The experiment publishes
// its state on the counter (data-tick, data-last) and on the play button (data-playing).
(() => {
  const $ = (q, root = document) => root.querySelector(q);
  const topbar = $(".topbar");
  const docks = [];

  function createDock({ name, section, controls, panel, counter, title, goTo, scrubber, watch = [], refreshOn, onUpdate }) {
    if (!section || !controls || !panel || !counter) return;
    const original = (act) => controls.querySelector(`[data-act="${act}"]`);
    const dock = document.createElement("aside");
    dock.className = "playback-dock";
    dock.dataset.dock = name;
    dock.hidden = true;
    dock.setAttribute("role", "region");
    dock.innerHTML = `<div class="pd-main">
        <div class="pd-info"><span class="pd-kicker"></span><span class="pd-step"></span></div>
        <div class="pd-buttons" role="group">
          <button type="button" class="pd-btn" data-act="back"></button>
          <button type="button" class="pd-btn pd-primary" data-act="play"></button>
          <button type="button" class="pd-btn" data-act="next"></button>
          <button type="button" class="pd-btn" data-act="reset"></button>
        </div></div>
      <div class="pd-timeline">${
        scrubber === "range" ? '<input type="range" class="pd-range" min="0" step="1" value="0">' : '<div class="pd-ticks"></div>'
      }<span class="pd-progress"></span></div>`;
    document.body.append(dock);
    const range = $(".pd-range", dock),
      ticks = $(".pd-ticks", dock);

    function update() {
      const tx = studyUI.texts("dock"),
        own = tx[name];
      const t = Number(counter.dataset.tick || 0),
        last = Number(counter.dataset.last || 0),
        playing = original("play")?.dataset.playing === "true",
        replay = t === last && !playing;
      $(".pd-kicker", dock).textContent = own.title;
      const step = title() || own.start;
      $(".pd-step", dock).textContent = step;
      $(".pd-step", dock).title = step;
      $(".pd-progress", dock).textContent = `${t} / ${last}`;
      dock.setAttribute("aria-label", own.label);
      dock.lang = studyUI.language();
      for (const [act, icon] of [
        ["back", "←"],
        ["next", "→"],
        ["reset", "↺"],
      ]) {
        const button = $(`[data-act="${act}"]`, dock);
        button.textContent = icon;
        button.title = tx[act];
        button.setAttribute("aria-label", tx[act]);
        button.disabled = !!original(act)?.disabled;
      }
      const play = $('[data-act="play"]', dock),
        caption = playing ? tx.pause : replay ? tx.replay : tx.play;
      play.innerHTML = `<span aria-hidden="true">${playing ? "Ⅱ" : replay ? "↺" : "▶"}</span> <span>${caption}</span>`;
      play.setAttribute("aria-label", caption);
      if (range) {
        range.max = String(last);
        range.value = String(t);
        range.setAttribute("aria-label", tx.position);
        range.setAttribute("aria-valuetext", `t = ${t} / ${last}`);
      } else {
        // Rebuild the step shortcuts only when the number of steps changes.
        if (ticks.children.length !== last + 1)
          ticks.innerHTML = Array.from(
            { length: last + 1 },
            (_, i) => `<button type="button" class="pd-tick" data-tick="${i}">t${i}</button>`,
          ).join("");
        [...ticks.children].forEach((btn, i) => {
          btn.classList.toggle("current", i === t);
          btn.classList.toggle("done", i < t);
          btn.setAttribute("aria-pressed", String(i === t));
          btn.setAttribute("aria-label", `${tx.step} ${i}`);
        });
      }
      onUpdate?.(t, tx);
    }
    function maybeShow() {
      const rect = controls.getBoundingClientRect(),
        panelRect = panel.getBoundingClientRect(),
        vh = innerHeight,
        covered = topbar && getComputedStyle(topbar).position === "sticky" ? topbar.getBoundingClientRect().bottom : 0;
      // Show only while the experiment is still on screen and its own bar is above it.
      const show =
        section.classList.contains("active") &&
        rect.bottom < Math.max(12, covered) &&
        panelRect.bottom > Math.min(vh * 0.22, 180) &&
        panelRect.top < vh * 0.78;
      if (dock.hidden === show) dock.hidden = !show;
    }
    let pending = false;
    function refresh() {
      if (pending) return;
      pending = true;
      requestAnimationFrame(() => {
        pending = false;
        update();
        maybeShow();
      });
    }
    dock.addEventListener("click", (e) => {
      const jump = e.target.closest("[data-tick]");
      if (jump) return goTo(Number(jump.dataset.tick));
      const button = e.target.closest("button[data-act]");
      if (button) original(button.dataset.act)?.click();
    });
    range?.addEventListener("input", () => goTo(Number(range.value)));
    const observer = new MutationObserver(refresh);
    observer.observe(controls, {
      subtree: true,
      childList: true,
      characterData: true,
      attributes: true,
      attributeFilter: ["disabled", "data-playing", "data-tick", "data-last"],
    });
    watch.forEach((el) => el && observer.observe(el, { subtree: true, childList: true, characterData: true }));
    document
      .querySelectorAll(".langbtn,.tabbtn," + refreshOn)
      .forEach((b) => b.addEventListener("click", () => requestAnimationFrame(refresh)));
    update();
    docks.push(maybeShow);
  }

  // Saga: one shortcut per step; the sequence chips next to the map also jump to a step.
  const sagaTrack = $("#sagaTrack"),
    sagaFlow = $("#sagaFlowList"),
    sagaGoTo = (t) => sagaTrack.querySelector(`button[data-t="${t}"]`)?.click();
  createDock({
    name: "saga",
    section: $("#tab-saga"),
    controls: $("#sagaControls"),
    panel: $("#sagaControls")?.closest(".domain-subpanel"),
    counter: $("#sagaCounter"),
    title: () => $("#sagaEvent b")?.textContent.trim(),
    goTo: sagaGoTo,
    watch: [$("#sagaEvent")],
    refreshOn: "[data-saga]",
    onUpdate: (t, tx) =>
      [...sagaFlow.querySelectorAll(".saga-step-chip")].forEach((card, i) => {
        if (card.dataset.sagaStep !== String(i + 1)) card.dataset.sagaStep = String(i + 1);
        card.setAttribute("role", "button");
        card.setAttribute("tabindex", "0");
        card.setAttribute("aria-label", `${tx.step} ${i + 1}: ${card.textContent.trim().replace(/\s+/g, " ")}`);
        card.setAttribute("aria-current", i + 1 === t ? "step" : "false");
      }),
  });
  sagaFlow?.addEventListener("click", (e) => {
    const card = e.target.closest("[data-saga-step]");
    if (card) sagaGoTo(Number(card.dataset.sagaStep));
  });
  sagaFlow?.addEventListener("keydown", (e) => {
    const card = e.target.closest("[data-saga-step]");
    if (card && (e.key === "Enter" || e.key === " ")) {
      e.preventDefault();
      sagaGoTo(Number(card.dataset.sagaStep));
    }
  });

  // Event-loop comparison: up to 36 time units, so a slider instead of step buttons.
  createDock({
    name: "compare",
    section: $("#tab-node"),
    controls: $("#compareControls"),
    panel: $("#compareControls")?.closest(".panel"),
    counter: $("#compareTime"),
    title: () => $("#compareScenarios .on strong")?.textContent.trim(),
    goTo: (t) =>
      t === 0 ? $("#compareReset").click() : document.querySelectorAll("#comparePhp .ruler-cell")[t - 1]?.click(),
    scrubber: "range",
    refreshOn: "[data-scenario]",
  });

  // Scroll position changes only the visibility of the docks, not the experiments.
  let scheduled = false;
  function onViewportChange() {
    if (scheduled) return;
    scheduled = true;
    requestAnimationFrame(() => {
      scheduled = false;
      docks.forEach((maybeShow) => maybeShow());
    });
  }
  window.addEventListener("scroll", onViewportChange, { passive: true });
  window.addEventListener("resize", onViewportChange, { passive: true });
})();

// ===== Transactional outbox relay simulation =====
(() => {
  const root = document.getElementById("outboxSection");
  if (!root) return;
  const $ = (s) => root.querySelector(s),
    all = (s) => [...root.querySelectorAll(s)];
  const events = [
    ["101", "OrderPlaced", "ord-508"],
    ["102", "OrderItemAdded", "ord-509"],
    ["103", "OrderConfirmed", "ord-510"],
  ];
  const claimSql = `-- Safe relay: one atomic claim transaction per poll
BEGIN ISOLATION LEVEL READ COMMITTED;
WITH picked AS (
  SELECT id FROM outbox_messages
  WHERE status = 'pending'
     OR (status = 'processing' AND leased_until < now())
  ORDER BY id
  FOR UPDATE SKIP LOCKED
  LIMIT 1
)
UPDATE outbox_messages AS o
SET status = 'processing',
    claimed_by = :relay,
    claim_token = :new_uuid,
    leased_until = now() + interval '30 seconds'
FROM picked
WHERE o.id = picked.id
RETURNING o.id, o.payload, o.claim_token;
COMMIT; -- row locks released, claim remains

-- Outside the claim transaction:
-- publish event_id + payload, wait for broker ACK

-- A separate short update after broker ACK:
UPDATE outbox_messages
SET status = 'published', published_at = now(),
    claimed_by = NULL, claim_token = NULL, leased_until = NULL
WHERE id = :event_id AND claim_token = :claim_token
  AND status = 'processing';
-- If 0 rows updated, do not overwrite another relay's claim.
-- After lease expiry a retry may republish: dedupe by event_id.`;
  const unsafeSql = `-- Deliberately UNSAFE polling publisher:
-- THREE different relay processes execute concurrently:
SELECT id, payload FROM outbox_messages
WHERE status = 'pending'
ORDER BY id LIMIT 1;
-- All three can receive event #101.
-- Each publishes #101 BEFORE a protected claim or state change.
-- Broker receives 3 copies of the same event_id.
-- A later UPDATE status = 'published' is too late.

-- Fix: use an atomic claim with FOR UPDATE SKIP LOCKED,
-- commit the claim, then publish and acknowledge.`;
  const state = { step: 0, mode: "skip", timer: null };
  const lang = studyUI.language;
  const stop = () => {
    if (state.timer !== null) {
      clearInterval(state.timer);
      state.timer = null;
    }
  };
  const max = () => window.TEXTS.outbox.stories[state.mode].length - 1;
  function snapshot() {
    const t = state.step,
      mode = state.mode;
    const status = { 101: "pending", 102: "pending", 103: "pending" },
      owner = {},
      locks = {};
    const phases = ["idle", "idle", "idle"],
      targets = ["", "", ""];
    const pubs = [];
    function set(i, phase, id) {
      phases[i] = phase;
      targets[i] = id || "";
    }
    if (mode === "unsafe") {
      if (t === 1) [0, 1, 2].forEach((i) => set(i, "seek", "101"));
      if (t === 2) [0, 1, 2].forEach((i) => set(i, "read", "101"));
      if (t >= 3 && t <= 6) [0, 1, 2].forEach((i) => set(i, "unsafe", "101"));
      if (t >= 4) pubs.push({ id: "101", relay: "A" });
      if (t >= 5) pubs.push({ id: "101", relay: "B" });
      if (t >= 6) pubs.push({ id: "101", relay: "C" });
      if (t === 4) set(0, "publish", "101");
      if (t === 5) {
        set(0, "sent", "101");
        set(1, "publish", "101");
      }
      if (t === 6) {
        set(0, "sent", "101");
        set(1, "sent", "101");
        set(2, "publish", "101");
      }
      if (t >= 7) {
        status["101"] = "published";
        [0, 1, 2].forEach((i) => set(i, i === 0 ? "done" : "sent", "101"));
      }
      if (t === 8) [0, 1, 2].forEach((i) => set(i, "done", "101"));
    } else {
      const skip = mode === "skip";
      const claimAt = skip ? [3, 3, 3] : [3, 5, 7];
      const pubAt = skip ? [4, 5, 6] : [8, 9, 10];
      const doneAt = skip ? [7, 8, 9] : [11, 12, 13];
      for (let i = 0; i < 3; i++) {
        const id = String(101 + i);
        if (t >= claimAt[i]) {
          status[id] = "processing";
          owner[id] = "ABC"[i];
          set(i, "claimed", id);
        }
        if (t >= pubAt[i]) {
          pubs.push({ id, relay: "ABC"[i] });
          set(i, t === pubAt[i] ? "publish" : "sent", id);
        }
        if (t >= doneAt[i]) {
          status[id] = "published";
          delete owner[id];
          set(i, "done", id);
        }
      }
      if (t === 1) [0, 1, 2].forEach((i) => set(i, "seek", "101"));
      if (skip) {
        if (t === 2) {
          [0, 1, 2].forEach((i) => {
            const id = String(101 + i);
            locks[id] = "ABC"[i];
            set(i, "lock", id);
          });
        }
      } else {
        if (t === 2) {
          locks["101"] = "A";
          set(0, "lock", "101");
          set(1, "wait", "101");
          set(2, "wait", "101");
        }
        // A resumed FOR UPDATE keeps rows it locked and then skipped on recheck until COMMIT.
        if (t === 3) {
          locks["101"] = "B";
          set(1, "resume", "101");
          set(2, "wait", "101");
        }
        if (t === 4) {
          locks["101"] = locks["102"] = "B";
          set(1, "lockMany", "102");
          set(2, "wait", "101");
        }
        if (t === 5) {
          locks["101"] = locks["102"] = "C";
          set(2, "resume", "102");
        }
        if (t === 6) {
          locks["101"] = locks["102"] = locks["103"] = "C";
          set(2, "lockMany", "103");
        }
      }
    }
    return { status, owner, locks, phases, targets, pubs };
  }
  // Polish has three count forms (1, 2–4, 5+); English has two.
  const plural = (n, forms) => {
    const i =
      n === 1 ? 0 : forms.length === 2 || (n % 10 >= 2 && n % 10 <= 4 && (n % 100 < 12 || n % 100 > 14)) ? 1 : 2;
    return `${n} ${forms[i]}`;
  };
  function render() {
    const tr = studyUI.texts("outbox"),
      t = state.step,
      scene = snapshot(),
      mx = max();
    all("[data-ob]").forEach((el) => {
      const val = tr[el.dataset.ob];
      if (typeof val === "string") el.textContent = val;
    });
    studyUI.replaceHTML($("#obModeHelp"), tr.modeHelp[state.mode] + studyUI.tipButton("outbox.modeTips." + state.mode));
    $("#obCode").textContent =
      state.mode === "unsafe"
        ? unsafeSql
        : state.mode === "wait"
          ? claimSql.replace("FOR UPDATE SKIP LOCKED", "FOR UPDATE")
          : claimSql;
    all("[data-ob-mode]").forEach((b) => {
      const on = b.dataset.obMode === state.mode;
      b.classList.toggle("on", on);
      b.setAttribute("aria-pressed", String(on));
      b.textContent = tr["mode" + b.dataset.obMode.charAt(0).toUpperCase() + b.dataset.obMode.slice(1)];
    });
    $("#obTimeline").style.gridTemplateColumns = `repeat(${mx + 1},minmax(0,1fr))`;
    studyUI.replaceHTML(
      $("#obTimeline"),
      Array.from(
        { length: mx + 1 },
        (_, i) =>
          `<button type="button" class="ob-tick ${i < t ? "done" : ""} ${i === t ? "active" : ""}" data-step="${i}" aria-pressed="${i === t}" aria-label="${tr.step} ${i}">t${i}</button>`,
      ).join(""),
    );
    $("#obPlay").textContent = state.timer !== null ? tr.pause : t === mx ? tr.replay : tr.play;
    $("#obBack").textContent = tr.back;
    $("#obNext").textContent = tr.next;
    $("#obReset").textContent = tr.reset;
    $("#obBack").disabled = t === 0;
    $("#obNext").disabled = t >= mx;
    $("#obTime").textContent = `t = ${t} / ${mx}`;
    const s = tr.stories[state.mode][t];
    $("#obStory").innerHTML = `<strong>t${t} · ${s[0]}</strong><p>${s[1]}</p>`;
    $("#obRaceStrip").innerHTML =
      `<div><b>${tr.raceLabel}</b><p>${tr.raceText}</p></div><span class="ob-race-pill">${tr.raceTarget}</span>`;
    $("#obWorkers").innerHTML = scene.phases
      .map((phase, i) => {
        const target = scene.targets[i],
          worker = "ABC"[i];
        const held = Object.keys(scene.locks)
          .filter((id) => scene.locks[id] === worker)
          .map((id) => "#" + id)
          .join(", ");
        return `<div class="ob-worker ${["lock", "lockMany", "wait", "publish", "seek"].includes(phase) ? "active" : ""} ${phase === "wait" ? "is-wait" : ""} ${["read", "unsafe"].includes(phase) ? "is-unsafe" : ""}" style="--ob-color:${["var(--ob-blue)", "var(--ob-amber)", "var(--ob-purple)"][i]}"><div class="ob-worker-top"><span>Relay ${worker}</span><span>${target ? "#" + target : "—"}</span></div><strong>${tr.workerStates[phase].replace("{id}", target).replace("{ids}", held)}</strong><em>${tr.workerNotes[phase]}</em></div>`;
      })
      .join("");
    $("#obRows").innerHTML = events
      .map(([id, event, order]) => {
        const status = scene.status[id],
          lock = scene.locks[id],
          owner = scene.owner[id];
        return `<tr class="${id === "101" ? "target-101" : ""} ${lock ? "locked-w" + (lock === "A" ? 1 : lock === "B" ? 2 : 3) : ""} ${status === "published" ? "just-published" : ""} ${state.mode === "unsafe" && id === "101" && t >= 2 && t < 7 ? "race-unsafe" : ""}"><td data-col="id"><b>#${id}</b></td><td data-col="${tr.thEvent}"><b>${event}</b><br><small style="color:#728489">${order}</small></td><td data-col="${tr.thState}"><span class="ob-mark ${status}">${tr[status]}</span></td><td data-col="${tr.thClaim}"><span class="ob-claim">${owner ? "Relay " + owner : "—"}</span></td><td data-col="${tr.thLock}">${lock ? `<span class="ob-lock lock-w${"ABC".indexOf(lock) + 1}">🔒 ${lock}</span>` : `<span style="color:#9caaaa">${tr.none}</span>`}</td></tr>`;
      })
      .join("");
    const count = (status) => Object.values(scene.status).filter((x) => x === status).length;
    $("#obPending").textContent = `${count("pending")} ${tr.counts[0]}`;
    $("#obProcessing").textContent = `${count("processing")} ${tr.counts[1]}`;
    $("#obSent").textContent = `${count("published")} ${tr.counts[2]}`;
    const seen = new Set();
    let dups = 0;
    $("#obBrokerCount").textContent = String(scene.pubs.length);
    $("#obBrokerMessages").innerHTML = scene.pubs.length
      ? scene.pubs
          .map((pub, i) => {
            const dup = seen.has(pub.id);
            if (dup) dups++;
            seen.add(pub.id);
            return `<div class="ob-broker-message ${dup ? "duplicate" : ""}" style="animation-delay:${i * 35}ms"><div><strong>#${pub.id} · ${events.find((e) => e[0] === pub.id)[1]}</strong><small style="display:block">Relay ${pub.relay} · event_id ${pub.id}</small></div><span class="ob-broker-flag">${dup ? tr.duplicate : tr.delivered}</span></div>`;
          })
          .join("")
      : `<div class="ob-broker-empty"><strong>${tr.brokerEmptyTitle}</strong><span>${tr.brokerEmpty}</span></div>`;
    $("#obBrokerSummary").className = `ob-broker-bottom ${dups ? "warning" : ""}`;
    $("#obBrokerSummary").innerHTML =
      `<b>${plural(scene.pubs.length, tr.messageForms)} · ${plural(dups, tr.duplicateForms)}</b><br>${dups ? tr.brokerBad : tr.brokerOkay}`;
    $("#obContrast").innerHTML =
      `<b>${tr.remember}</b> ${state.mode === "unsafe" ? tr.contrastUnsafe : state.mode === "wait" ? tr.contrastWait : tr.contrastSafe}`;
    const jump = document.getElementById("raceOutboxLink");
    if (jump) jump.textContent = tr.nextLink;
    root.setAttribute("lang", lang());
  }
  $("#obControls").addEventListener("click", (e) => {
    const b = e.target.closest("button");
    if (!b) return;
    const mx = max();
    if (b.id === "obPlay") {
      if (state.timer !== null) {
        stop();
        render();
        return;
      }
      if (state.step === mx) state.step = 0;
      state.timer = setInterval(() => {
        state.step = Math.min(state.step + 1, max());
        if (state.step === max()) stop();
        render();
      }, 1100);
    } else {
      stop();
      if (b.id === "obNext") state.step = Math.min(max(), state.step + 1);
      if (b.id === "obBack") state.step = Math.max(0, state.step - 1);
      if (b.id === "obReset") state.step = 0;
    }
    render();
  });
  $("#obTimeline").addEventListener("click", (e) => {
    const b = e.target.closest("button[data-step]");
    if (!b) return;
    stop();
    state.step = +b.dataset.step;
    render();
  });
  $("#obModes").addEventListener("click", (e) => {
    const b = e.target.closest("button[data-ob-mode]");
    if (!b) return;
    stop();
    state.mode = b.dataset.obMode;
    state.step = 0;
    render();
  });
  document.querySelectorAll(".langbtn").forEach((b) =>
    b.addEventListener("click", () => {
      queueMicrotask(render);
      setTimeout(render, 50);
    }),
  );
  document.querySelectorAll(".tabbtn").forEach((b) =>
    b.addEventListener("click", () => {
      stop();
      render();
    }),
  );
  render();
})();

// ===== Accessible labels for controls =====
(() => {
  const ui = studyUI;
  document.querySelectorAll("[data-set]").forEach((group) => {
    const label = group.closest(".field").querySelector(".field-label");
    label.id = "setting-" + group.dataset.set;
    group.setAttribute("role", "group");
    group.setAttribute("aria-labelledby", label.id);
  });
  document.querySelectorAll("button:not([type])").forEach((button) => (button.type = "button"));
  if (matchMedia("(max-width:720px)").matches) document.getElementById("phpArchitecture").open = false;
  function localizeLabels() {
    const labels = ui.texts("a11y.labels"),
      explain = ui.text("a11y.explainTerm");
    for (const [selector, label] of Object.entries(labels))
      document.querySelectorAll(selector).forEach((el) => el.setAttribute("aria-label", label));
    document.querySelectorAll(".tip-button[data-term]").forEach((button) => {
      button.setAttribute("aria-label", explain + button.dataset.term);
      button.removeAttribute("title");
    });
  }
  document
    .querySelectorAll(".langbtn")
    .forEach((button) => button.addEventListener("click", () => queueMicrotask(localizeLabels)));
  localizeLabels();
})();
