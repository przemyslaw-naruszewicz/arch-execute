// Run in <head>, before the browser can paint the untranslated page.
"use strict";

window.studyStartup = (() => {
  const root = document.documentElement;
  root.classList.add("is-starting");
  root.setAttribute("aria-busy", "true");
  let revealed = false;

  function reveal() {
    if (revealed) return;
    revealed = true;
    clearTimeout(deadline);
    window.removeEventListener("error", onError, true);
    root.removeAttribute("aria-busy");
    root.classList.remove("is-starting");
  }

  function onError(event) {
    // A failed application script must not leave the page permanently hidden.
    if (event.target instanceof HTMLScriptElement || event instanceof ErrorEvent) reveal();
  }
  window.addEventListener("error", onError, true);
  const deadline = setTimeout(reveal, 8000);

  async function ready() {
    if (document.fonts) {
      // Load both subsets and weights before revealing. PL then uses the same metrics on a language switch.
      const sample = "Aa Ąą Ęę Łł Ńń Óó Śś Źź Żż";
      await Promise.allSettled(
        ["Inter", "JetBrains Mono"].flatMap((family) =>
          [400, 600].map((weight) => document.fonts.load(`${weight} 15px "${family}"`, sample)),
        ),
      );
      await document.fonts.ready;
    }
    // Layout and viewport-dependent setup are complete before the first visible frame.
    requestAnimationFrame(reveal);
  }

  return { ready };
})();
