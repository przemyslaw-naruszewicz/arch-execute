// All page copy lives here. Every text is a pair: { en: 'English', pl: 'Polski' }.
// A plain string is the same in both languages. Keys are referenced from index.html
// (data-t / data-t-html attributes) and from app.js (studyUI.text / studyUI.texts).
// Texts in data-t-html and some module texts may contain simple inline HTML (<b>, <code>, <a>).
// Placeholders such as {n} or {time} are filled in by app.js.
window.TEXTS = {
  page: {
    title: {
      en: 'ArchExecute: Visualize architecture across space and time',
      pl: 'ArchExecute: zobacz architekturę w przestrzeni i czasie',
    },
    description: {
      en: 'Step through simulations of PHP-FPM workers, database race conditions and PostgreSQL locks, the transactional outbox, event loops, DDD aggregates and sagas.',
      pl: 'Symulacje krok po kroku: workery PHP-FPM, wyścigi w bazie i blokady w PostgreSQL, transactional outbox, pętle zdarzeń, agregaty DDD i Sagi.',
    },
    skip: { en: 'Skip to learning content', pl: 'Przejdź do treści' },
  },
  ui: {
    play: { en: '▶ Play', pl: '▶ Odtwórz' },
    pause: { en: 'Ⅱ Pause', pl: 'Ⅱ Pauza' },
    replay: { en: '↺ Replay', pl: '↺ Odtwórz ponownie' },
    back: { en: '← Back', pl: '← Wstecz' },
    next: { en: 'Next →', pl: 'Dalej →' },
    reset: { en: 'Reset', pl: 'Od początku' },
    moreInfo: { en: 'More about this scenario', pl: 'Więcej o tym scenariuszu' },
    popoutOpen: { en: 'Open in a side window', pl: 'Otwórz w oknie obok' },
    popoutWindow: { en: 'Side window: {title}', pl: 'Okno obok: {title}' },
    popoutDrag: { en: 'Drag to move the window', pl: 'Przeciągnij, żeby przesunąć okno' },
    popoutRestore: { en: 'Put back', pl: 'Przywróć na miejsce' },
    popoutRestoreHere: { en: 'Put it back here', pl: 'Przywróć tutaj' },
    popoutPlaceholder: {
      en: 'This part is open in a side window. Scroll to the experiment and compare both views.',
      pl: 'Ta część jest otwarta w oknie obok. Przewiń do eksperymentu i porównuj oba widoki.',
    },
    showTime: { en: 'Show state at t = {time}', pl: 'Pokaż stan w t = {time}' },
    time: { en: 'Time →', pl: 'Czas →' },
    request: { en: 'Request {id}', pl: 'Żądanie {id}' },
    user: { en: 'User {id}', pl: 'Użytkownik {id}' },
    fpm: { en: 'FPM worker {n}', pl: 'Proces FPM {n}' },
    core: { en: 'CPU core {n}', pl: 'Rdzeń CPU {n}' },
    dev: { en: 'Dev PHP process', pl: 'Proces serwera PHP' },
    run: { en: 'run', pl: 'praca' },
    wait: { en: 'wait', pl: 'czeka' },
    version: { en: 'version {n}', pl: 'wersja {n}' },
    reactLoop: { en: 'ReactPHP process {n}', pl: 'Proces ReactPHP {n}' },
    nodeLoop: { en: 'Node.js process {n}', pl: 'Proces Node.js {n}' },
    raceExpected: {
      en: 'Expected correct result: 130 · conflicts: {conflicts} · wait intervals: {waits}',
      pl: 'Oczekiwany poprawny wynik: 130 · konflikty: {conflicts} · przedziały oczekiwania: {waits}',
    },
    raceCorrect: { en: '✓ Correct final state: 130', pl: '✓ Poprawny stan końcowy: 130' },
    raceLost: { en: '✕ Lost update. Correct result: 130', pl: '✕ Utracona aktualizacja. Poprawny wynik: 130' },
    queue: { en: 'Queue', pl: 'Kolejka' },
    busy: { en: 'Busy workers', pl: 'Zajęte procesy' },
    cores: { en: 'CPU running', pl: 'Aktywne rdzenie' },
    done: { en: 'Done', pl: 'Zakończone' },
    phase_absent: { en: 'not arrived', pl: 'jeszcze nie dotarło' },
    phase_queue: { en: 'queued', pl: 'w kolejce' },
    phase_cpu: { en: 'running', pl: 'wykonywane' },
    phase_io: { en: 'I/O wait', pl: 'oczekiwanie na I/O' },
    phase_ready: { en: 'CPU wait', pl: 'oczekiwanie na CPU' },
    phase_done: { en: 'complete', pl: 'zakończone' },
    before: { en: 'Before processing', pl: 'Przed rozpoczęciem' },
    complete: { en: 'All requests complete', pl: 'Wszystkie żądania zakończone' },
    queued: { en: 'Waiting for a worker: {n}', pl: 'Żądania oczekujące na proces: {n}' },
    blocked: { en: 'Workers blocked on I/O: {n}', pl: 'Procesy oczekujące na I/O: {n}' },
    processing: { en: 'Workers processing requests', pl: 'Procesy obsługują żądania' },
    initialDetail: {
      en: 'Click Play, Next, or a timestamp to explore the timeline.',
      pl: 'Kliknij Odtwórz, Dalej lub wybraną chwilę na osi czasu.',
    },
    boundaryDetail: {
      en: 'State at t = {t}: {busy} occupied workers, {cores} cores executing PHP. The highlighted column shows the elapsed interval [{previous}, {t}).',
      pl: 'Stan w t = {t}: zajęte procesy: {busy}, rdzenie wykonujące PHP: {cores}. Wyróżniona kolumna pokazuje zakończony przedział [{previous}, {t}).',
    },
    ioTakeaway: {
      en: 'During synchronous I/O a PHP process holds its request, even when the CPU cores are free.',
      pl: 'Podczas synchronicznego I/O proces PHP nadal obsługuje swoje żądanie, nawet gdy rdzenie CPU są wolne.',
    },
    cpuTakeaway: {
      en: '{workers} PHP processes can hold requests; with {cores} cores, at most {parallel} can execute PHP at once.',
      pl: 'Liczba procesów PHP obsługujących żądania: {workers}. Przy {cores} rdzeniach najwyżej {parallel} wykonuje PHP jednocześnie.',
    },
    elapsed: { en: '{n} time units', pl: '{n} jednostek czasu' },
    compareBefore: {
      en: 'Before t = 0: all four approaches receive the same six requests. Press Play or Next.',
      pl: 'Przed rozpoczęciem wszystkie cztery podejścia otrzymują te same sześć żądań. Kliknij Odtwórz lub Dalej.',
    },
    compareComplete: {
      en: 'At t = {t}, all four approaches have completed every request.',
      pl: 'W t = {t} wszystkie cztery podejścia zakończyły obsługę wszystkich żądań.',
    },
    compareInterval: { en: 'Interval [{from}, {to})', pl: 'Przedział [{from}, {to})' },
    fpmState: {
      en: '{busy} of {workers} workers occupied, {io} of them waiting for I/O',
      pl: 'zajęte workery: {busy} z {workers}, w tym czekające na I/O: {io}',
    },
    loopProcess: { en: 'process {p} {state}', pl: 'proces {p} {state}' },
    loopSummary: { en: '{processes}; async I/O in progress: {n}', pl: '{processes}; asynchroniczne I/O w toku: {n}' },
    loopBlocked: { en: 'is blocked on a synchronous query ({id})', pl: 'czeka na synchroniczne zapytanie ({id})' },
    loopRunning: { en: 'runs handler {id}', pl: 'wykonuje handler {id}' },
    loopWaiting: { en: 'waits for I/O', pl: 'czeka na I/O' },
    loopDone: { en: 'is done', pl: 'zakończył pracę' },
    loopAllDone: { en: 'all requests complete', pl: 'wszystkie żądania zakończone' },
    loopIdle: { en: 'is idle', pl: 'jest bezczynny' },
    transactionPending: {
      en: 'Transaction {who}: {value}, version {version} (uncommitted). Other sessions still read {committed}.',
      pl: 'Transakcja {who}: {value}, wersja {version} (przed COMMIT). Inne sesje nadal odczytują {committed}.',
    },
    noPending: { en: 'No uncommitted write.', pl: 'Brak niezatwierdzonego zapisu.' },
  },
  hero: {
    brandName: 'ArchExecute',
    brandTagline: {
      en: 'Visualize architecture across space and time.',
      pl: 'Zobacz architekturę w przestrzeni i czasie.',
    },
    chapters: {
      php: {
        en: 'PHP execution: PHP-FPM processes and CPU cores',
        pl: 'Wykonywanie PHP: procesy PHP-FPM i rdzenie CPU',
      },
      locks: {
        en: 'Database locks: protecting data from concurrent changes',
        pl: 'Blokady w bazie: ochrona danych przed równoczesnymi zmianami',
      },
      node: {
        en: 'Event loops: handling multiple requests in ReactPHP and Node.js',
        pl: 'Pętle zdarzeń: obsługa wielu żądań w ReactPHP i Node.js',
      },
      aggregate: {
        en: 'Immediate consistency: DDD aggregate rules within one transaction',
        pl: 'Spójność natychmiastowa: reguły agregatu DDD w jednej transakcji',
      },
      saga: {
        en: 'Eventual consistency: service coordination and compensation in a Saga',
        pl: 'Spójność ostateczna: współpraca usług i kompensacje w Sadze',
      },
    },
  },
  tabs: {
    phpExecution: { en: 'PHP execution', pl: 'Wykonywanie PHP' },
    databaseLocks: { en: 'Database locks', pl: 'Blokady w bazie' },
    eventLoops: { en: 'Event loops', pl: 'Pętle zdarzeń' },
    immediateConsistency: { en: 'Immediate consistency', pl: 'Spójność natychmiastowa' },
    eventualConsistency: { en: 'Eventual consistency', pl: 'Spójność ostateczna' },
  },
  jump: {
    jumpArchitecture: { en: 'Architecture', pl: 'Architektura' },
    jumpSimulation: { en: 'Request simulation', pl: 'Symulacja żądań' },
    jumpCpu: { en: 'CPU scheduling', pl: 'Przydział CPU' },
    jumpLinux: { en: 'Observe in Linux', pl: 'Podgląd w Linuksie' },
    jumpRace: { en: 'Optimistic and pessimistic locks', pl: 'Blokady optymistyczne i pesymistyczne' },
    jumpCode: { en: 'SQL and Doctrine code', pl: 'Kod SQL i Doctrine' },
    jumpOutbox: { en: 'Outbox relay', pl: 'Publikacja z outboxa' },
  },
  common: {
    back: { en: '← Back', pl: '← Wstecz' },
    next: { en: 'Next →', pl: 'Dalej →' },
    reset: { en: 'Reset', pl: 'Od początku' },
    optimistic: { en: 'Optimistic', pl: 'Optymistyczne' },
    pessimistic: { en: 'Pessimistic', pl: 'Pesymistyczne' },
  },
  architecture: {
    architectureSummary: {
      en: 'How Nginx, PHP-FPM and Symfony handle requests',
      pl: 'Jak Nginx, PHP-FPM i Symfony obsługują żądania',
    },
    firstPrinciple: {
      en: 'Nginx accepts the HTTP connection and passes the request to PHP-FPM. FPM keeps a pool of PHP processes that are already running and gives each of them one request at a time. Symfony does not start a new process for a controller: your code runs inside a process that FPM started earlier.',
      pl: 'Nginx przyjmuje połączenie HTTP i przekazuje żądanie do PHP-FPM. FPM trzyma pulę uruchomionych wcześniej procesów PHP i każdemu przydziela jedno żądanie naraz. Symfony nie tworzy nowego procesu dla kontrolera: twój kod działa w procesie, który FPM uruchomił wcześniej.',
    },
    vocabulary: {
      en: '<strong>Symfony vocabulary:</strong> an <em>FPM worker</em> serves HTTP requests; a <em>Messenger worker</em> is a separate long-running <code>bin/console messenger:consume async</code> process; a <em>Symfony Console command</em> is a PHP CLI process. They may run simultaneously, but they are not interchangeable.',
      pl: '<strong>Słownictwo Symfony:</strong> <em>worker FPM</em> obsługuje żądania HTTP; <em>worker Messengera</em> to osobny, długo działający proces <code>bin/console messenger:consume async</code>; <em>komenda Symfony Console</em> działa w procesie PHP CLI. Mogą działać jednocześnie, ale pełnią różne role.',
    },
    cliDescription: {
      en: 'Runs a Symfony Console command as its own PHP CLI process. A Messenger consumer is long-running. ReactPHP can also serve HTTP from a CLI process. None of these are FPM workers.',
      pl: 'Komenda Symfony Console działa w osobnym procesie PHP CLI. Konsument Messengera to długo działający proces. ReactPHP również może obsługiwać HTTP z procesu CLI. Żaden z tych procesów nie jest workerem FPM.',
    },
    terminology: {
      en: '<b>Terminology:</b> typical non-ZTS PHP-FPM workers execute application PHP on one main thread per process. Four FPM workers means four OS processes, <em>not</em> four Symfony Console commands or four PHP threads. The built-in server has an optional multiworker test mode on supported Unix systems; the model below uses its single-worker default.',
      pl: '<b>Terminologia:</b> typowy proces PHP-FPM bez ZTS wykonuje kod aplikacji w jednym głównym wątku. Cztery workery FPM oznaczają cztery procesy systemowe, a nie cztery komendy Symfony Console ani cztery wątki PHP. Serwer wbudowany ma opcjonalny tryb wielu procesów do testów na obsługiwanych systemach Unix; poniższy model używa domyślnego pojedynczego procesu.',
    },
    oneSymfonyRequestOnePhp: {
      en: 'One Symfony request, one PHP-FPM worker process',
      pl: 'Jedno żądanie Symfony, jeden proces PHP-FPM',
    },
    executionEnvironmentPhpSyntax: 'Nginx · PHP-FPM · Symfony',
    n01Architecture: { en: '01 / ARCHITECTURE', pl: '01 / ARCHITEKTURA' },
    sixCustomersRequestGetApi: {
      en: 'Six customers request <code>GET /api/orders</code> at once',
      pl: 'Sześciu klientów wywołuje <code>GET /api/orders</code> jednocześnie',
    },
    productionNginxPhpFpm: { en: 'Production · Nginx + PHP-FPM', pl: 'Produkcja · Nginx + PHP-FPM' },
    n01HttpClients: { en: '01 · HTTP clients', pl: '01 · Klienci HTTP' },
    sixConcurrentHttpRequests: { en: 'Six concurrent HTTP requests', pl: 'Sześć współbieżnych żądań HTTP' },
    n02WebServer: { en: '02 · Web server', pl: '02 · Serwer WWW' },
    forwardsRequestsToTheFpm: { en: 'Forwards requests to the FPM socket', pl: 'Przekazuje żądania do gniazda FPM' },
    n03PhpFpmPool: { en: '03 · PHP-FPM pool', pl: '03 · Pula PHP-FPM' },
    fpmMaster: { en: 'FPM master', pl: 'Proces nadrzędny FPM' },
    supervisesChildren: { en: 'supervises children', pl: 'nadzoruje procesy' },
    workerProcess1: { en: 'Worker process #1', pl: 'Proces FPM nr 1' },
    requestU1SymfonyKernelController: {
      en: 'Request U1 → Symfony Kernel → Controller',
      pl: 'Żądanie U1 → Symfony Kernel → Kontroler',
    },
    workerProcess2: { en: 'Worker process #2', pl: 'Proces FPM nr 2' },
    requestU2SymfonyKernelController: {
      en: 'Request U2 → Symfony Kernel → Controller',
      pl: 'Żądanie U2 → Symfony Kernel → Kontroler',
    },
    u3U4U5U6Waiting: {
      en: 'U3 · U4 · U5 · U6 → waiting for a free worker',
      pl: 'U3 · U4 · U5 · U6 → czekają na wolny proces',
    },
    n04DataService: { en: '04 · Data service', pl: '04 · Usługa danych' },
    sharedStateRowLocksVersion: {
      en: 'Shared state · row locks · version checks',
      pl: 'Wspólny stan · blokady wierszy · kontrola wersji',
    },
    workerSymfonyCommand: { en: 'Worker ≠ Symfony command', pl: 'Worker FPM ≠ komenda Symfony' },
    anFpmWorkerIsAn: {
      en: 'An FPM worker is an OS process managed by FPM. It runs Symfony’s <code>public/index.php</code> for one request at a time, then becomes available for another.',
      pl: 'Worker FPM to proces systemowy, którym zarządza FPM. Wykonuje plik <code>public/index.php</code> aplikacji Symfony dla jednego żądania naraz, a potem może przyjąć następne.',
    },
    waitingComputing: { en: 'Waiting ≠ computing', pl: 'Oczekiwanie ≠ obliczenia' },
    aWorkerBlockedOnSynchronous: {
      en: 'A worker blocked on synchronous Doctrine/PDO I/O stays occupied, even though its CPU core can run another process.',
      pl: 'Worker, który czeka na synchroniczne I/O Doctrine/PDO, pozostaje zajęty, choć rdzeń CPU może w tym czasie wykonywać inny proces.',
    },
    sameMachineDifferentProcesses: { en: 'Same machine, different processes', pl: 'Jedna maszyna, różne procesy' },
    phpBinConsoleCacheClear: {
      en: '<code>php bin/console cache:clear</code> and <code>messenger:consume</code> run through PHP CLI, outside the HTTP-FPM worker pool.',
      pl: '<code>php bin/console cache:clear</code> i <code>messenger:consume</code> działają w PHP CLI, poza pulą workerów FPM obsługujących HTTP.',
    },
    showTheSymfonyControllerExecuted: {
      en: 'Show the Symfony controller executed inside an FPM worker',
      pl: 'Pokaż kontroler Symfony wykonywany w workerze FPM',
    },
    onceTheResponseFinishesThe: {
      en: 'The FPM worker becomes available when the request script finishes, including any work after the response. Symfony may run <code>kernel.terminate</code> after <code>fastcgi_finish_request()</code> sends the response; the worker stays occupied until that work ends. The controller runs inside the existing FPM process.',
      pl: 'Worker FPM zwalnia się dopiero wtedy, gdy skrypt skończy obsługę żądania, łącznie z pracą wykonywaną po wysłaniu odpowiedzi. Symfony może wykonać <code>kernel.terminate</code> po wysłaniu odpowiedzi przez <code>fastcgi_finish_request()</code>; do końca tej pracy worker pozostaje zajęty. Kontroler działa w istniejącym procesie FPM.',
    },
    runtimesSummary: {
      en: 'How PHP can be started: CLI, built-in server and PHP-FPM',
      pl: 'Sposoby uruchamiania PHP: CLI, serwer wbudowany i PHP-FPM',
    },
    cliProcess: { en: 'CLI process', pl: 'Proces CLI' },
    builtInWebServer: { en: 'Built-in web server', pl: 'Serwer wbudowany' },
    devOnly: { en: 'Dev only', pl: 'Tylko do developmentu' },
    inTheDefaultDevelopmentSetup: {
      en: 'In the default development setup, a single PHP process handles one request at a time. A long request holds up subsequent requests. Not intended for production traffic.',
      pl: 'Domyślnie serwer developerski działa w jednym procesie PHP i obsługuje żądania po kolei. Długie żądanie opóźnia następne. Nie jest to serwer produkcyjny.',
    },
    typicalProduction: { en: 'Typical production', pl: 'Typowo w produkcji' },
    aMasterManagesWorkerProcesses: {
      en: 'A master manages worker processes. Each worker handles one request at a time; <code>pm.max_children</code> limits simultaneous requests.',
      pl: 'Proces nadrzędny zarządza pulą procesów roboczych. Każdy worker obsługuje jedno żądanie naraz; <code>pm.max_children</code> ogranicza liczbę jednocześnie obsługiwanych żądań.',
    },
    firstPrincipleLabel: { en: 'Basics', pl: 'Podstawy' },
  },
  simulation: {
    liveExperiment: { en: 'Experiment', pl: 'Eksperyment' },
    usersCallTheSameEndpoint: {
      en: 'users call the same endpoint. What happens next?',
      pl: 'użytkowników wywołuje ten sam endpoint. Co się wtedy dzieje?',
    },
    everyTimeSlotIsA: {
      en: 'Every time slot is a modeled unit of time. Follow the Nginx request backlog, occupied PHP-FPM workers, CPU cores and database I/O separately.',
      pl: 'Każda kolumna to umowna jednostka czasu. Obserwuj osobno kolejkę żądań w Nginx, zajęte workery PHP-FPM, rdzenie CPU i I/O bazy danych.',
    },
    realisticArchitecturalModel: { en: 'Simplified model · logical time', pl: 'Model uproszczony · umowny czas' },
    configuration: { en: 'Configuration', pl: 'Konfiguracja' },
    serverEnvironment: { en: 'Server environment', pl: 'Środowisko serwera' },
    scenario: { en: 'Scenario', pl: 'Scenariusz' },
    n6UsersBurst: { en: 'Sale starts · 6 at once', pl: 'Start promocji · 6 naraz' },
    n1WorkerQueue: { en: 'Only 1 worker', pl: 'Tylko 1 worker' },
    cpuContention: { en: 'PDF invoices · CPU', pl: 'Faktury PDF · CPU' },
    staggeredUsers: { en: 'Normal traffic', pl: 'Zwykły ruch' },
    incomingUsers: { en: 'Incoming users', pl: 'Liczba użytkowników' },
    fpmWorkerProcesses: { en: 'FPM worker processes', pl: 'Procesy PHP-FPM' },
    availableCpuCores: { en: 'Available CPU cores', pl: 'Dostępne rdzenie CPU' },
    requestWorkload: { en: 'Request workload', pl: 'Obciążenie żądania' },
    iOHeavy: { en: 'I/O-heavy', pl: 'Intensywne I/O' },
    cpuHeavy: { en: 'CPU-heavy', pl: 'Intensywne CPU' },
    waitingForWorker: { en: 'Waiting for worker', pl: 'Oczekiwanie na workera' },
    executingPhp: { en: 'Executing PHP', pl: 'Wykonywanie PHP' },
    workerHeldByIO: { en: 'Worker held by I/O', pl: 'Worker czeka na I/O' },
    waitingForCpu: { en: 'Waiting for CPU', pl: 'Oczekiwanie na CPU' },
    coreExecuting: { en: 'Core executing', pl: 'Rdzeń wykonuje' },
    clockHelp: {
      en: 'Each experiment has its own clock. Switching chapters pauses playback and keeps your position.',
      pl: 'Każdy eksperyment ma własny zegar. Zmiana rozdziału zatrzymuje odtwarzanie i zachowuje wybrany krok.',
    },
    scrollHint: {
      en: '↔ Scroll sideways to see other time intervals. Playback follows the active column.',
      pl: '↔ Przewiń w bok, aby zobaczyć pozostałe przedziały. Odtwarzanie podąża za aktywną kolumną.',
    },
    userCount: {
      2: { en: 'Two', pl: 'Dwóch' },
      4: { en: 'Four', pl: 'Czterech' },
      6: { en: 'Six', pl: 'Sześciu' },
      8: { en: 'Eight', pl: 'Ośmiu' },
    },
    presetHelp: {
      builtin: {
        en: 'You run php -S on your laptop. It handles one request at a time, so the other customers wait in line even when the CPU is free.',
        pl: 'Uruchamiasz php -S na laptopie. Ten serwer obsługuje jedno żądanie naraz, więc pozostali klienci czekają w kolejce, nawet gdy CPU jest wolne.',
      },
      cpu: {
        en: 'Each customer downloads a PDF invoice. Building the file is pure computing with no database wait, so the number of CPU cores sets the pace.',
        pl: 'Każdy klient pobiera fakturę PDF. Tworzenie pliku to same obliczenia, bez czekania na bazę, więc tempo wyznacza liczba rdzeni CPU.',
      },
      stagger: {
        en: 'An ordinary weekday: customers arrive one at a time, every 2 time units. Watch the queue for workers grow and shrink.',
        pl: 'Zwykły dzień: klienci przychodzą pojedynczo, co 2 jednostki czasu. Zobacz, jak kolejka do workerów rośnie i maleje.',
      },
      burst: {
        en: 'A sale starts and six customers open “My orders” in the same second. Each request runs a little PHP, waits for the database, then finishes.',
        pl: 'Rusza promocja i sześciu klientów w tej samej sekundzie otwiera „Moje zamówienia”. Każde żądanie chwilę wykonuje PHP, czeka na bazę danych i się kończy.',
      },
    },
    presetTips: {
      builtin: {
        en: [
          'php -S: the built-in development server',
          'By default the built-in server handles requests one by one in a single process. That is enough on your laptop, but in production every slow request would hold up everyone behind it. In production, Nginx passes requests to a pool of PHP-FPM workers instead.',
        ],
        pl: [
          'php -S: wbudowany serwer deweloperski',
          'Domyślnie wbudowany serwer obsługuje żądania po kolei, w jednym procesie. Na laptopie to wystarczy, ale na produkcji każde wolne żądanie blokowałoby wszystkich za nim. Dlatego na produkcji Nginx przekazuje żądania do puli workerów PHP-FPM.',
        ],
      },
      cpu: {
        en: [
          'PDF invoices: CPU-bound work',
          'Each request computes for 6 units and never waits for the database. When there are more FPM workers than CPU cores, the extra workers are ready but wait for a free core. Adding workers beyond the number of cores does not make the computing faster.',
        ],
        pl: [
          'Faktury PDF: praca obciążająca CPU',
          'Każde żądanie liczy przez 6 jednostek i w ogóle nie czeka na bazę. Gdy workerów FPM jest więcej niż rdzeni CPU, nadmiarowe workery są gotowe, ale czekają na wolny rdzeń. Dodatkowe workery ponad liczbę rdzeni nie przyspieszą obliczeń.',
        ],
      },
      stagger: {
        en: [
          'Normal traffic: requests spread over time',
          'A new customer arrives every 2 time units instead of all at once. Each request still holds its worker for 7 units, so a short queue forms anyway. The server is the same as in the sale scenario; only the arrival pattern changes.',
        ],
        pl: [
          'Zwykły ruch: żądania rozłożone w czasie',
          'Nowy klient przychodzi co 2 jednostki czasu, a nie wszyscy naraz. Każde żądanie nadal zajmuje workera przez 7 jednostek, więc i tak tworzy się krótka kolejka. Serwer jest ten sam co przy starcie promocji, zmienia się tylko rytm, w jakim przychodzą żądania.',
        ],
      },
      burst: {
        en: [
          'Sale starts: six requests at once',
          'Each request takes 1 unit of PHP, 5 units of waiting for PostgreSQL and 1 more unit of PHP. With 2 FPM workers, customers C to F wait in the queue until a worker is free. During the database wait the worker stays taken, even though its CPU core has nothing to do. Change the number of workers or cores and compare which change helps.',
        ],
        pl: [
          'Start promocji: sześć żądań naraz',
          'Każde żądanie to 1 jednostka PHP, 5 jednostek czekania na PostgreSQL i jeszcze 1 jednostka PHP. Przy 2 workerach FPM klienci C–F czekają w kolejce, aż któryś worker się zwolni. Podczas czekania na bazę worker pozostaje zajęty, choć jego rdzeń CPU nie ma nic do roboty. Zmień liczbę workerów albo rdzeni i porównaj, co pomaga.',
        ],
      },
    },
  },
  concept: {
    cpuSchedulingPhpFpm: { en: 'CPU scheduling · PHP-FPM', pl: 'Planowanie czasu CPU · PHP-FPM' },
    whoHoldsTheRequestAnd: {
      en: 'Who holds the request, and who is running on the CPU?',
      pl: 'Kto obsługuje żądanie, a kto wykonuje instrukcje?',
    },
    twoCustomersCallASymfony: {
      en: 'Two customers call a Symfony controller. An FPM worker keeps a request until it finishes; the operating system decides which process gets CPU time. Follow one tick at a time.',
      pl: 'Dwóch użytkowników wywołuje kontroler Symfony. Proces FPM obsługuje przypisane żądanie do końca, a system operacyjny decyduje, który proces otrzyma czas CPU. Przejdź przez kolejne takty.',
    },
    explicitClockOneDiagram: { en: '2 requests · 1–2 cores', pl: '2 żądania · 1–2 rdzenie' },
    eachColumnIsALogical: {
      en: 'Each column is a <b>logical time slot</b>, not a real millisecond. This is one possible OS schedule, not a guarantee. A waiting FPM process remains assigned to its request but does not necessarily occupy a CPU core.',
      pl: 'Każda kolumna to <b>umowny takt czasu</b>, a nie milisekunda. Pokazujemy jeden możliwy harmonogram, a nie gwarantowany przebieg. Proces FPM nadal obsługuje żądanie, nawet gdy oczekuje i nie korzysta z rdzenia CPU.',
    },
    schedules: {
      sequential: {
        title: { en: 'Sequential PHP execution', pl: 'Sekwencyjne wykonywanie PHP' },
        tag: { en: 'Real · 1 FPM worker, 1 core', pl: 'W praktyce · 1 worker FPM, 1 rdzeń' },
        caption: {
          en: 'Like a shop with one checkout: customer B waits until A has paid. Here B waits for the only FPM worker and starts after A is done.',
          pl: 'Jak sklep z jedną kasą: klient B czeka, aż A zapłaci. Tu B czeka na jedynego workera FPM i zaczyna dopiero po A.',
        },
        workerLabel: { en: '1 FPM process · reused for B', pl: '1 proces FPM · później obsługuje B' },
      },
      interleaved: {
        title: { en: 'Concurrent, not parallel', pl: 'Współbieżne, nie równoległe' },
        tag: { en: 'Real · 2 FPM workers, 1 core', pl: 'W praktyce · 2 workery FPM, 1 rdzeń' },
        caption: {
          en: 'Like one cashier serving two queues in turns. Each request has its own FPM worker, but the single CPU core runs only one of them at a time.',
          pl: 'Jak jedna kasjerka, która na zmianę obsługuje dwie kolejki. Każde żądanie ma własnego workera FPM, ale jedyny rdzeń CPU w danej chwili wykonuje tylko jedno z nich.',
        },
        workerLabel: { en: '2 FPM processes · 1 request each', pl: '2 procesy FPM · każdy obsługuje jedno żądanie' },
      },
      parallelUnbroken: {
        title: { en: 'Parallel, no per-core switching', pl: 'Równoległe, bez przełączania na rdzeniu' },
        tag: { en: 'Simplified · 2 FPM workers, 2 cores', pl: 'Uproszczenie · 2 workery FPM, 2 rdzenie' },
        caption: {
          en: 'Like two open checkouts: each core works on its own request from start to finish. The picture is simplified, because a real operating system also switches tasks.',
          pl: 'Jak dwie otwarte kasy: każdy rdzeń zajmuje się swoim żądaniem od początku do końca. To uproszczony obraz, bo prawdziwy system operacyjny też przełącza zadania.',
        },
        workerLabel: { en: '2 FPM processes · 2 CPU cores', pl: '2 procesy FPM · 2 rdzenie CPU' },
      },
      parallelMixed: {
        title: { en: 'Concurrent and parallel', pl: 'Współbieżne i równoległe' },
        tag: { en: 'Real · 2 FPM workers, 2 cores', pl: 'W praktyce · 2 workery FPM, 2 rdzenie' },
        caption: {
          en: 'Closest to a real shop: two cores, and requests sometimes wait for the database. Often both compute at once; sometimes one waits while the other works.',
          pl: 'Najbliżej prawdziwego sklepu: dwa rdzenie, a żądania czasem czekają na bazę danych. Często oba liczą jednocześnie, czasem jedno czeka, a drugie pracuje.',
        },
        workerLabel: { en: '2 FPM processes · 2 CPU cores', pl: '2 procesy FPM · 2 rdzenie CPU' },
      },
    },
    tips: {
      sequential: {
        en: [
          'One worker, one core',
          'With <code>pm.max_children = 1</code> PHP-FPM has a single worker. Request B cannot start until the worker finishes processing A, including any work after sending the response. A small admin panel with little traffic can live with this; a shop during a sale cannot.',
        ],
        pl: [
          'Jeden worker, jeden rdzeń',
          'Przy <code>pm.max_children = 1</code> PHP-FPM ma jednego workera. Żądanie B nie może się zacząć, dopóki worker nie zakończy obsługi A, łącznie z ewentualną pracą po wysłaniu odpowiedzi. Mały panel administracyjny z niewielkim ruchem to zniesie, sklep podczas promocji już nie.',
        ],
      },
      interleaved: {
        en: [
          'Concurrent, not parallel',
          'Concurrent means both requests are in progress during the same period. Parallel means they execute at the same instant, which needs two cores. Here the operating system gives the only core to A, then B, then A again. Each request finishes later than it would alone, but neither waits for the other to end.',
        ],
        pl: [
          'Współbieżnie, ale nie równolegle',
          'Współbieżnie znaczy, że oba żądania są w toku w tym samym okresie. Równolegle znaczy, że wykonują się w tej samej chwili, a do tego potrzeba dwóch rdzeni. Tu system operacyjny oddaje jedyny rdzeń na zmianę A i B. Każde żądanie kończy się później, niż gdyby działało samo, ale żadne nie czeka na koniec drugiego.',
        ],
      },
      parallelUnbroken: {
        en: [
          'Parallel, drawn without switching',
          'Two cores really can run two requests at the same instant. The diagram leaves out the operating system’s task switching on purpose, to show parallelism on its own. It is a teaching simplification, not a separate PHP-FPM mode, and parallel work is still concurrent work.',
        ],
        pl: [
          'Równolegle, bez przełączania na rdzeniu',
          'Dwa rdzenie naprawdę mogą wykonywać dwa żądania w tej samej chwili. Diagram celowo pomija przełączanie zadań przez system operacyjny, żeby pokazać samą równoległość. To uproszczenie dydaktyczne, a nie osobny tryb PHP-FPM. Praca równoległa jest przy tym także współbieżna.',
        ],
      },
      parallelMixed: {
        en: [
          'Concurrent and parallel',
          'This is the everyday case on a production server. While a request waits for PostgreSQL, its worker is still taken, but its core can run the other request. Look for columns where both cores are busy and columns where only one is.',
        ],
        pl: [
          'Współbieżnie i równolegle',
          'Tak wygląda zwykła praca serwera produkcyjnego. Gdy żądanie czeka na PostgreSQL, jego worker nadal jest zajęty, ale rdzeń może wykonywać drugie żądanie. Znajdź kolumny, w których pracują oba rdzenie, i te, w których pracuje tylko jeden.',
        ],
      },
    },
    labels: {
      pick: { en: 'Choose an execution pattern', pl: 'Wybierz przebieg wykonywania' },
      flow: { en: 'HTTP requests / FPM worker state', pl: 'Żądania HTTP / stan procesu FPM' },
      cpu: { en: 'What the physical CPU cores execute', pl: 'Co wykonują fizyczne rdzenie CPU' },
      a: { en: 'Request A', pl: 'Żądanie A' },
      b: { en: 'Request B', pl: 'Żądanie B' },
      core: { en: 'CPU core', pl: 'Rdzeń CPU' },
      play: { en: '▶ Play', pl: '▶ Odtwórz' },
      pause: { en: 'Ⅱ Pause', pl: 'Ⅱ Pauza' },
      restart: { en: '↺ Replay', pl: '↺ Odtwórz ponownie' },
      back: { en: '← Back', pl: '← Wstecz' },
      next: { en: 'Next →', pl: 'Dalej →' },
      reset: { en: 'Reset', pl: 'Od początku' },
      before: { en: 'Before the first time slot', pl: 'Przed pierwszym taktem' },
      beforeText: {
        en: 'Two customers send their requests. Select Next to see which FPM process runs and what each CPU core does.',
        pl: 'Dwóch użytkowników wysyła żądania. Kliknij Dalej, by zobaczyć, który proces FPM pracuje i co robi rdzeń CPU.',
      },
      at: { en: 'At', pl: 'W chwili' },
      run: { en: 'RUN', pl: 'PRACA' },
      ready: { en: 'READY', pl: 'GOTOWY' },
      queue: { en: 'QUEUE', pl: 'KOLEJKA' },
      io: 'I/O',
      done: '✓',
      idle: '—',
      legendRun: { en: 'RUN · process executes PHP', pl: 'PRACA · proces wykonuje instrukcje PHP' },
      legendReady: {
        en: 'READY · process has a request, but does not run',
        pl: 'GOTOWY · proces ma żądanie, ale nie wykonuje kodu',
      },
      legendQueue: { en: 'QUEUE · request has no FPM worker', pl: 'KOLEJKA · żądanie czeka na proces FPM' },
      legendIo: {
        en: 'I/O · worker is occupied but CPU can do other work',
        pl: 'I/O · worker jest zajęty, lecz nie wykorzystuje CPU',
      },
      legendDone: { en: '✓ · request finished', pl: '✓ · żądanie zakończone' },
      now: { en: 'Currently executing', pl: 'W tej chwili wykonuje się' },
      noCore: {
        en: 'No CPU core is executing PHP in this time slot.',
        pl: 'W tym takcie żaden rdzeń nie wykonuje PHP.',
      },
      explanation: {
        en: 'Core execution does not indicate how many requests are in progress.',
        pl: 'To, co wykonuje rdzeń, nie mówi jeszcze, ile żądań jest w toku.',
      },
      stateA: 'A',
      stateB: 'B',
      current: { en: 'Current time slot', pl: 'Aktualny takt' },
      special: {
        en: 'Tasks that run at the same instant also overlap in time, so they are concurrent too. The label “Parallel, no per-core switching” only means that no core switches between tasks.',
        pl: 'Zadania wykonywane równolegle nakładają się w czasie, więc są też współbieżne. Etykieta „Równoległe, bez przełączania na rdzeniu” oznacza tylko, że żaden rdzeń nie przełącza się między zadaniami.',
      },
      real: {
        en: 'Realistic execution pattern: the exact schedule is controlled by the operating system.',
        pl: 'Taki przebieg występuje w praktyce, ale dokładną kolejność wyznacza planista systemu operacyjnego.',
      },
      queueSummary: { en: 'is waiting for a free FPM process', pl: 'czeka na wolny proces FPM' },
      readySummary: {
        en: 'has an FPM process but is waiting for CPU time',
        pl: 'ma przypisany proces FPM, ale czeka na przydział CPU',
      },
      runSummary: { en: 'is executing Symfony PHP code', pl: 'wykonuje kod PHP kontrolera Symfony' },
      ioSummary: {
        en: 'is waiting for I/O; its FPM worker stays occupied',
        pl: 'czeka na I/O; proces FPM pozostaje zajęty',
      },
      doneSummary: { en: 'has finished', pl: 'zakończyło działanie' },
      timeAxis: { en: 'TIME →', pl: 'CZAS →' },
    },
  },
  race: {
    theNextProblem: { en: 'The next problem', pl: 'Kolejny problem' },
    twoUsersRaceForOne: {
      en: 'Two users race for one database row',
      pl: 'Wyścig dwóch użytkowników o jeden wiersz bazy',
    },
    noProtection: { en: 'No protection', pl: 'Bez ochrony' },
    rRead: { en: '<b>R</b> read', pl: '<b>R</b> odczyt' },
    cCompute: { en: '<b>C</b> compute', pl: '<b>C</b> obliczenia' },
    wWrite: { en: '<b>W</b> write', pl: '<b>W</b> zapis' },
    lAcquireLock: { en: '<b>L</b> acquire lock', pl: '<b>L</b> pobranie blokady' },
    conflict: { en: '<b>!</b> conflict', pl: '<b>!</b> konflikt' },
    retry: { en: '<b>↻</b> retry', pl: '<b>↻</b> ponowienie' },
    uUnlockAtCommitRollback: {
      en: '<b>U</b> unlock at COMMIT / ROLLBACK',
      pl: '<b>U</b> zwolnienie blokady przy COMMIT / ROLLBACK',
    },
    waitBlockedByRowLock: { en: '<b>WAIT</b> blocked by row lock', pl: '<b>CZEKA</b> oczekiwanie na blokadę wiersza' },
    raceLead: {
      en: 'Two users of the shop’s admin panel credit the same customer at the same moment: one adds 10 as a refund, the other adds 20 as a goodwill credit. The balance is 100 (<code>balance = 100</code>), so the correct result is 130. Each click is a separate HTTP request with its own FPM worker, so both requests can read 100 before either one saves.',
      pl: 'Dwóch użytkowników panelu sklepu w tej samej chwili dopisuje środki temu samemu klientowi: jeden dodaje 10 jako zwrot, drugi 20 jako rekompensatę. Saldo wynosi 100 (<code>balance = 100</code>), więc poprawny wynik to 130. Każde kliknięcie to osobne żądanie HTTP z własnym workerem FPM, więc oba żądania mogą odczytać 100, zanim którekolwiek zapisze zmianę.',
    },
    committedTitle: { en: 'Committed DB record', pl: 'Zatwierdzony rekord bazy' },
    modelDetails: {
      en: 'Model details: READ COMMITTED and FPM workers',
      pl: 'Szczegóły modelu: READ COMMITTED i workery FPM',
    },
    pgSummary: { en: 'See the lock wait in PostgreSQL', pl: 'Zobacz czekanie na blokadę w PostgreSQL' },
    pgLead: {
      en: 'While request B waits in pessimistic mode (steps 1–5), open another <code>psql</code> session and query the <code>pg_stat_activity</code> view. It lists the connections, shows which one is waiting and which session blocks it.',
      pl: 'Gdy w trybie pesymistycznym żądanie B czeka (kroki 1–5), otwórz kolejną sesję <code>psql</code> i odpytaj widok <code>pg_stat_activity</code>. Widok wypisuje połączenia i pokazuje, które z nich czeka i która sesja je blokuje.',
    },
    pgRead: {
      en: '<b>4101</b> is request A’s session. It holds the row lock in an open transaction and is waiting for the next command from PHP, hence <code>idle in transaction</code>. <b>4102</b> is request B: its <code>SELECT … FOR UPDATE</code> waits for a lock (<code>Lock</code>), and <code>pg_blocking_pids</code> points to session A. PostgreSQL reports a row-lock wait as <code>transactionid</code>, because B waits for A’s transaction to end. If you often see <code>idle in transaction</code> lasting for seconds, the application holds its transactions too long.',
      pl: '<b>4101</b> to sesja żądania A. Trzyma blokadę wiersza w otwartej transakcji i czeka na kolejne polecenie z PHP, stąd <code>idle in transaction</code>. <b>4102</b> to żądanie B: jego <code>SELECT … FOR UPDATE</code> czeka na blokadę (<code>Lock</code>), a <code>pg_blocking_pids</code> wskazuje sesję A. PostgreSQL oznacza czekanie na blokadę wiersza jako <code>transactionid</code>, bo B czeka na koniec transakcji A. Jeśli <code>idle in transaction</code> często trwa całe sekundy, aplikacja trzyma transakcje zbyt długo.',
    },
    pgOptimistic: {
      en: 'In optimistic mode this query shows no waiting session. Nobody holds a lock, and the conflict appears only when the second <code>UPDATE</code> matches no row.',
      pl: 'W trybie optymistycznym to zapytanie nie pokaże żadnej czekającej sesji. Nikt nie trzyma blokady, a konflikt wychodzi dopiero wtedy, gdy drugi <code>UPDATE</code> nie trafi w żaden wiersz.',
    },
    raceSemantics: {
      en: 'The panel shows committed data (READ COMMITTED). W prepares a transaction’s write; U commits it and releases its row lock. In the other two traces each successful W commits a short transaction.',
      pl: 'Panel pokazuje dane zatwierdzone (READ COMMITTED). W zapisuje zmianę wewnątrz transakcji; U zatwierdza ją i zwalnia blokadę wiersza. W pozostałych dwóch przebiegach każde udane W zatwierdza krótką transakcję.',
    },
    events: [
      { en: 'A reads 100.', pl: 'A odczytuje 100.' },
      { en: 'B reads 100.', pl: 'B odczytuje 100.' },
      { en: 'A computes 110.', pl: 'A oblicza 110.' },
      { en: 'B computes 120.', pl: 'B oblicza 120.' },
      { en: 'A writes and commits 110.', pl: 'A zapisuje i zatwierdza 110.' },
      {
        en: 'B writes 120 from a stale read → A’s update is lost.',
        pl: 'B zapisuje 120 na podstawie starego odczytu → zmiana A zostaje utracona.',
      },
      { en: 'A reads 100, version 1.', pl: 'A odczytuje 100, wersja 1.' },
      { en: 'B reads 100, version 1.', pl: 'B odczytuje 100, wersja 1.' },
      { en: 'A prepares +10.', pl: 'A przygotowuje +10.' },
      { en: 'B prepares +20.', pl: 'B przygotowuje +20.' },
      {
        en: 'A conditionally writes 110; version becomes 2.',
        pl: 'A warunkowo zapisuje i zatwierdza 110; wersja rośnie do 2.',
      },
      {
        en: 'B expects version 1, but the row is version 2. Compare-and-swap fails.',
        pl: 'B oczekuje wersji 1, ale wiersz ma wersję 2. Kontrola wersji odrzuca zapis.',
      },
      {
        en: 'B retries: reads current value 110 and version 2.',
        pl: 'B ponawia operację: odczytuje aktualną wartość 110 i wersję 2.',
      },
      { en: 'B recalculates 110 + 20 = 130.', pl: 'B oblicza ponownie: 110 + 20 = 130.' },
      {
        en: 'B writes 130 if version = 2; version becomes 3.',
        pl: 'B zapisuje i zatwierdza 130, jeśli wersja = 2; wersja rośnie do 3.',
      },
      { en: 'A obtains an exclusive DB row lock.', pl: 'A uzyskuje wyłączną blokadę wiersza.' },
      { en: 'B tries to lock the row and must wait.', pl: 'B próbuje zablokować wiersz i czeka.' },
      { en: 'A reads 100 inside its transaction.', pl: 'A odczytuje 100 wewnątrz swojej transakcji.' },
      { en: 'B still waits for A’s transaction.', pl: 'B nadal czeka na zakończenie transakcji A.' },
      { en: 'A calculates 110.', pl: 'A oblicza 110.' },
      { en: 'B still waits.', pl: 'B nadal czeka.' },
      {
        en: 'A writes 110 inside its transaction; COMMIT has not happened yet.',
        pl: 'A zapisuje 110 wewnątrz transakcji, jeszcze przed COMMIT.',
      },
      {
        en: 'A commits (U = unlock); the database releases the row lock.',
        pl: 'A wykonuje COMMIT: zatwierdza 110 i zwalnia blokadę wiersza.',
      },
      { en: 'B is still blocked until the lock is released.', pl: 'B czeka do zwolnienia blokady.' },
      {
        en: 'B obtains the lock and reads the latest value: 110.',
        pl: 'B uzyskuje blokadę i odczytuje aktualną wartość 110.',
      },
      { en: 'B calculates 130.', pl: 'B oblicza 130.' },
      {
        en: 'B writes 130 inside its transaction; COMMIT has not happened yet.',
        pl: 'B zapisuje 130 wewnątrz transakcji, jeszcze przed COMMIT.',
      },
      {
        en: 'B commits (U = unlock); the database releases the row lock.',
        pl: 'B wykonuje COMMIT: zatwierdza 130 i zwalnia blokadę wiersza.',
      },
    ],
    ready: {
      en: 'Two user requests are ready. Shared balance = 100.',
      pl: 'Dwa żądania są gotowe. Zatwierdzone saldo = 100.',
    },
    beforeRace: { en: 'Before the race', pl: 'Przed wyścigiem' },
    afterStep: { en: 'After step', pl: 'Po kroku' },
    lost: { en: 'One update was lost.', pl: 'Jedna aktualizacja została utracona.' },
    preserved: { en: 'Both changes are preserved.', pl: 'Obie zmiany zostały zachowane.' },
    modeHints: {
      unsafe: {
        en: 'Nothing stops them: both read 100, and the second save overwrites the first. The customer ends up with 120 instead of 130.',
        pl: 'Nic ich nie powstrzymuje: oba odczytują 100, a drugi zapis nadpisuje pierwszy. Klient kończy z saldem 120 zamiast 130.',
      },
      optimistic: {
        en: 'Each save checks that nobody changed the row in the meantime. The late request notices the conflict, reads again and retries.',
        pl: 'Każdy zapis sprawdza, czy nikt w międzyczasie nie zmienił wiersza. Spóźnione żądanie wykrywa konflikt, odczytuje dane ponownie i próbuje jeszcze raz.',
      },
      pessimistic: {
        en: 'The first request locks the row. The second one waits for its turn and then reads the already updated balance.',
        pl: 'Pierwsze żądanie blokuje wiersz. Drugie czeka na swoją kolej i dopiero potem odczytuje zmienione już saldo.',
      },
    },
    modeTips: {
      unsafe: {
        en: [
          'No protection: a lost update',
          'Both requests run <code>SELECT balance</code>, get 100, add their amount in PHP and save. The later <code>UPDATE</code> writes 120 over 110, so the refund of 10 disappears without any error. This lost update needs an interleaving such as read A, read B, write A, write B. The requests can start at different times and run on one core. Sequential tests miss it; a test that coordinates two database sessions can reproduce it.',
        ],
        pl: [
          'Bez ochrony: utracona aktualizacja',
          'Oba żądania wykonują <code>SELECT balance</code>, dostają 100, dodają swoją kwotę w PHP i zapisują wynik. Późniejszy <code>UPDATE</code> zapisuje 120 w miejsce 110, więc zwrot 10 znika bez żadnego błędu. Do utraconej aktualizacji (lost update) wystarczy kolejność: odczyt A, odczyt B, zapis A, zapis B. Żądania mogą zacząć się w różnym czasie i działać na jednym rdzeniu. Testy sekwencyjne tego nie sprawdzą; test sterujący kolejnością operacji w dwóch sesjach bazy może odtworzyć błąd.',
        ],
      },
      optimistic: {
        en: [
          'Optimistic locking: a version check',
          'The row has a <code>version</code> column, and each save runs <code>UPDATE … WHERE version = 1</code>. The first save wins and bumps the version to 2. The second matches no row, so its request reads the balance again and retries. In Doctrine you mark the field with <code>#[ORM\\Version]</code>, and a conflict raises <code>OptimisticLockException</code>.',
        ],
        pl: [
          'Blokowanie optymistyczne: kontrola wersji',
          'Wiersz ma kolumnę <code>version</code>, a każdy zapis wykonuje <code>UPDATE … WHERE version = 1</code>. Pierwszy zapis wygrywa i podbija wersję do 2. Drugi nie trafia w żaden wiersz, więc jego żądanie odczytuje saldo jeszcze raz i ponawia zapis. W Doctrine oznaczasz pole atrybutem <code>#[ORM\\Version]</code>, a konflikt zgłasza <code>OptimisticLockException</code>.',
        ],
      },
      pessimistic: {
        en: [
          'Pessimistic locking: a row lock',
          'The first request runs <code>SELECT … FOR UPDATE</code> inside a transaction and holds the row until <code>COMMIT</code>. The second request stops at the same <code>SELECT</code> and waits. When it finally reads, it sees 110 and saves 130. In Doctrine this lock comes from <code>LockMode::PESSIMISTIC_WRITE</code>.',
        ],
        pl: [
          'Blokowanie pesymistyczne: blokada wiersza',
          'Pierwsze żądanie wykonuje <code>SELECT … FOR UPDATE</code> w transakcji i trzyma wiersz do <code>COMMIT</code>. Drugie zatrzymuje się na tym samym <code>SELECT</code> i czeka. Gdy w końcu odczyta dane, widzi 110 i zapisuje 130. W Doctrine taką blokadę daje <code>LockMode::PESSIMISTIC_WRITE</code>.',
        ],
      },
    },
    scopeSafe: { en: '2 HTTP requests · ≥2 FPM workers', pl: '2 żądania HTTP · ≥2 workery FPM' },
    scopeOneWorker: {
      en: '1 FPM worker · external writer needed',
      pl: '1 worker FPM · potrzebny inny zapisujący proces',
    },
    physicalModel: { en: 'Physical model', pl: 'Model rzeczywisty' },
    scenarioConstraint: { en: 'Scenario constraint', pl: 'Ograniczenie scenariusza' },
    realitySafe: {
      en: 'Two browser actions produce two HTTP requests. With at least two available FPM workers, the two Symfony handlers can overlap, even on one CPU core.',
      pl: 'Dwa kliknięcia w interfejsie tworzą dwa żądania HTTP. Gdy dostępne są co najmniej dwa procesy FPM, obsługa obu żądań w Symfony może nakładać się w czasie, nawet na jednym rdzeniu CPU.',
    },
    realitySafeNote: {
      en: 'Database isolation and transaction boundaries still matter.',
      pl: 'Poziom izolacji i granice transakcji nadal mają znaczenie.',
    },
    realityOneWorker: {
      en: 'Two HTTP requests to a one-worker FPM pool run one after another. The overlapping timeline below would need another writer, such as Messenger, a second application instance or another pool.',
      pl: 'Dwa żądania HTTP w puli z jednym procesem FPM są obsługiwane po kolei. Pokazany niżej wyścig wymagałby innego procesu zapisującego, np. Messengera, drugiej instancji aplikacji lub innej puli FPM.',
    },
  },
  code: {
    fromTimelineToCode: { en: 'FROM TIMELINE TO CODE', pl: 'OD OSI CZASU DO KODU' },
    implementTheLockInPostgresql: {
      en: 'Implement the lock in PostgreSQL and Symfony',
      pl: 'Zaimplementuj blokadę w PostgreSQL i Symfony',
    },
    matchEachDatabaseActionOn: {
      en: 'Match each database action on the timeline to executable SQL or Doctrine ORM code. Change the locking strategy to see the matching implementation.',
      pl: 'Dopasuj działania bazy z osi czasu do SQL lub kodu Doctrine ORM. Przełącz strategię blokowania, aby zobaczyć odpowiednią implementację.',
    },
    executablePatternsExplicitTransactio: 'PostgreSQL · Doctrine ORM',
    codeSummary: {
      en: 'Show the code: locks in PostgreSQL and Symfony / Doctrine',
      pl: 'Pokaż kod: blokady w PostgreSQL i Symfony / Doctrine',
    },
    teachingNote: { en: 'EXPLANATION', pl: 'WYJAŚNIENIE' },
    documentation: { en: 'Documentation:', pl: 'Dokumentacja:' },
    copy: { en: 'Copy code', pl: 'Kopiuj kod' },
    copied: { en: 'Copied', pl: 'Skopiowano' },
    examples: {
      postgres: {
        optimistic: {
          caption: { en: 'POSTGRESQL / SQL · OPTIMISTIC', pl: 'POSTGRESQL / SQL · OPTYMISTYCZNE' },
          title: { en: 'Conditional update = compare-and-swap', pl: 'Zapis warunkowy = kontrola wersji' },
          body: {
            en: 'Both requests may read version 1. Only one UPDATE with WHERE version = 1 succeeds. A zero-row result means a conflict: re-read, recalculate, then retry with a limit.',
            pl: 'Oba żądania mogą odczytać wersję 1. Powiedzie się tylko jedno UPDATE z WHERE version = 1. Jeśli zapytanie nie zwróci wiersza, wystąpił konflikt: odczytaj dane ponownie, przelicz wynik i ponów zapis z limitem prób.',
          },
          caution: {
            en: 'Use parameters in application code. The returned row confirms success; without RETURNING, check the affected-row count. A plain UPDATE balance = balance + 10 is already atomic for simple increments.',
            pl: 'W aplikacji użyj parametrów zapytania. Zwrócony wiersz potwierdza sukces; bez RETURNING sprawdź liczbę zmienionych wierszy. Zwykłe UPDATE balance = balance + 10 jest już atomowe dla prostych inkrementacji.',
          },
        },
        pessimistic: {
          caption: { en: 'POSTGRESQL / SQL · PESSIMISTIC', pl: 'POSTGRESQL / SQL · PESYMISTYCZNE' },
          title: { en: 'Hold the row lock inside a transaction', pl: 'Utrzymaj blokadę wiersza w transakcji' },
          body: {
            en: 'SELECT FOR UPDATE locks the selected row. A competing write or FOR UPDATE waits until COMMIT or ROLLBACK. Read, calculate and write within the transaction. The UPDATE explicitly increments version to match the animation; the lock itself does not change it.',
            pl: 'SELECT FOR UPDATE blokuje wybrany wiersz. Konkurencyjny zapis lub FOR UPDATE czeka do COMMIT albo ROLLBACK. Odczytaj, oblicz i zapisz w jednej transakcji. UPDATE jawnie zwiększa version, zgodnie z animacją; sama blokada nie zmienia wersji.',
          },
          caution: {
            en: 'Keep transactions short. Ordinary SELECT without FOR UPDATE is not blocked by a row-level FOR UPDATE lock. NOWAIT and SKIP LOCKED have special semantics and should not be used indiscriminately.',
            pl: 'Transakcje powinny być krótkie. Zwykły SELECT bez FOR UPDATE nie jest blokowany przez blokadę wiersza FOR UPDATE. NOWAIT i SKIP LOCKED mają własną semantykę; nie stosuj ich bez namysłu.',
          },
        },
      },
      symfony: {
        optimistic: {
          caption: { en: 'SYMFONY / DOCTRINE ORM · OPTIMISTIC', pl: 'SYMFONY / DOCTRINE ORM · OPTYMISTYCZNE' },
          title: { en: 'Versioned entity + optimistic version check', pl: 'Encja wersjonowana i kontrola wersji' },
          body: {
            en: 'Map an integer field with #[ORM\\Version]. Doctrine compares the expected version when flushing an entity update and raises OptimisticLockException when the row changed. For an HTTP form, pass the original version from the GET request.',
            pl: 'Oznacz pole typu integer atrybutem #[ORM\\Version]. Podczas flush aktualizowanej encji Doctrine porównuje oczekiwaną wersję i zgłasza OptimisticLockException, gdy wiersz się zmienił. Formularz HTTP musi przekazać wersję z pierwotnego żądania GET.',
          },
          caution: {
            en: 'After a failed flush the EntityManager is closed; do not retry using the same managed entity. Start a new unit of work / manager, re-read and re-evaluate business logic. Example assumes Account::add().',
            pl: 'Po nieudanym flush EntityManager zostaje zamknięty; nie ponawiaj operacji na tej samej zarządzanej encji. Utwórz nową jednostkę pracy (nowy EntityManager), odczytaj dane ponownie i jeszcze raz sprawdź reguły biznesowe. Przykład zakłada metodę Account::add().',
          },
        },
        pessimistic: {
          caption: { en: 'SYMFONY / DOCTRINE ORM · PESSIMISTIC', pl: 'SYMFONY / DOCTRINE ORM · PESYMISTYCZNE' },
          title: { en: 'PESSIMISTIC_WRITE inside a transaction', pl: 'PESSIMISTIC_WRITE wewnątrz transakcji' },
          body: {
            en: 'The transaction must begin before find(..., PESSIMISTIC_WRITE). Doctrine issues database-specific row locking SQL. wrapInTransaction() flushes before commit and rolls back on failure.',
            pl: 'Transakcja musi się zacząć przed find(..., PESSIMISTIC_WRITE). Doctrine generuje SQL blokujący wiersz, właściwy dla danej bazy. wrapInTransaction() wykonuje flush przed commit, a po błędzie rollback.',
          },
          caution: {
            en: 'Do not put network calls or user interaction inside this transaction. Lock scope belongs to the PostgreSQL transaction, not the FPM worker itself. Example assumes an Account entity with add().',
            pl: 'Nie umieszczaj wywołań sieciowych ani interakcji z użytkownikiem wewnątrz transakcji. Zakres blokady wyznacza transakcja PostgreSQL, a nie sam worker FPM. Przykład zakłada encję Account z metodą add().',
          },
        },
      },
    },
  },
  outbox: {
    eyebrow: { en: 'EXPERIMENT / CONCURRENT RELAYS', pl: 'EKSPERYMENT / WYŚCIG PROCESÓW' },
    title: { en: 'Three relay processes compete for one event', pl: 'Trzy procesy relay konkurują o jedno zdarzenie' },
    lead: {
      en: 'The OrderPlaced event and two later events wait in the outbox_messages table. Three relay processes (Symfony CLI commands) try to send the oldest event, #101, at the same moment. Pick a strategy and check whether the broker receives duplicates.',
      pl: 'Zdarzenie OrderPlaced i dwa kolejne czekają w tabeli outbox_messages. Trzy procesy relay (komendy Symfony CLI) w tej samej chwili próbują wysłać najstarsze zdarzenie #101. Wybierz strategię i sprawdź, czy broker dostaje duplikaty.',
    },
    whyEyebrow: 'TRANSACTIONAL OUTBOX',
    whyTitle: {
      en: 'How do you send an event safely after saving to the database?',
      pl: 'Jak bezpiecznie wysłać zdarzenie po zapisie w bazie?',
    },
    whyLead: {
      en: 'When a customer places an order, the shop saves it in PostgreSQL and has to tell the warehouse through a message broker. These are two operations in two separate systems. One transaction cannot cover both, so a crash between them leaves the work half done.',
      pl: 'Gdy klient składa zamówienie, sklep zapisuje je w PostgreSQL i musi powiadomić magazyn przez brokera wiadomości. To dwie operacje w dwóch osobnych systemach. Jedna transakcja nie obejmie obu, więc awaria między nimi zostawia pracę w połowie.',
    },
    dwBadTitle: { en: 'Without an outbox: two separate writes', pl: 'Bez outboxa: dwa osobne zapisy' },
    dwBad1: { en: '<code>COMMIT</code> the order in PostgreSQL.', pl: '<code>COMMIT</code> zamówienia w PostgreSQL.' },
    dwBad2: {
      en: 'Send <code>OrderPlaced</code> to the broker. The process crashes or the network fails.',
      pl: 'Wysłanie <code>OrderPlaced</code> do brokera. Proces pada albo sieć zawodzi.',
    },
    dwBadResult: {
      en: 'The order exists, but the warehouse never hears about it.',
      pl: 'Zamówienie istnieje, ale magazyn nigdy się o nim nie dowie.',
    },
    dwGoodTitle: { en: 'With an outbox: one COMMIT, sending later', pl: 'Z outboxem: jeden COMMIT, wysyłka później' },
    dwGood1: {
      en: 'One transaction saves the order and a row in <code>outbox_messages</code>.',
      pl: 'Jedna transakcja zapisuje zamówienie i wiersz w <code>outbox_messages</code>.',
    },
    dwGood2: {
      en: 'A separate process, the relay, reads the table and sends the event. After a crash it tries again.',
      pl: 'Osobny proces, czyli relay, czyta tabelę i wysyła zdarzenie. Po awarii próbuje ponownie.',
    },
    dwGoodResult: {
      en: 'The event is not lost, but it can arrive more than once. The consumer has to recognise and skip duplicates.',
      pl: 'Zdarzenie nie ginie, ale może dotrzeć więcej niż raz. Odbiorca musi rozpoznać i pominąć duplikat.',
    },
    whyBridge: {
      en: 'Several relay processes usually run at once to keep up with sending. How do you stop them from taking the same event? The experiment below compares three ways of fetching rows.',
      pl: 'Zwykle działa kilka procesów relay naraz, żeby nadążyć z wysyłką. Jak sprawić, żeby nie wzięły tego samego zdarzenia? Eksperyment poniżej porównuje trzy sposoby pobierania wierszy.',
    },
    chip: { en: '3 PHP CLI processes · 1 shared table', pl: '3 procesy PHP CLI · 1 wspólna tabela' },
    flow1: 'Symfony / Doctrine',
    flow1sub: { en: 'Order change + event in one COMMIT', pl: 'Zmiana zamówienia + zdarzenie w jednym COMMIT' },
    flow2: 'PostgreSQL / outbox',
    flow2sub: { en: 'Oldest event: #101', pl: 'Najstarsze zdarzenie: #101' },
    flow3: { en: '3 relay processes', pl: '3 procesy relay' },
    flow3sub: { en: 'Separate Symfony CLI commands', pl: 'Oddzielne komendy Symfony CLI' },
    flow4: { en: 'Message broker', pl: 'Broker' },
    flow4sub: { en: 'Received messages and acknowledgements', pl: 'Otrzymane komunikaty i potwierdzenia' },
    tableMeta: { en: 'Committed PostgreSQL state', pl: 'Stan zapisany w PostgreSQL' },
    thEvent: { en: 'Event', pl: 'Zdarzenie' },
    thState: 'Status',
    thClaim: { en: 'Claimed by', pl: 'Przydział' },
    thLock: { en: 'SQL row lock*', pl: 'Blokada SQL*' },
    tableFoot: {
      en: '* The “SQL row lock” column is a visualization, not a stored field. FOR UPDATE locks end at COMMIT; the saved claim token and lease survive.',
      pl: '* Kolumna „Blokada SQL” to element symulacji, nie kolumna tabeli. Blokada FOR UPDATE trwa do COMMIT; zapisany przydział z tokenem i czasem wygaśnięcia zostaje.',
    },
    notesSummary: {
      en: 'Three questions · fetching, SKIP LOCKED, exactly-once',
      pl: 'Trzy pytania · pobieranie, SKIP LOCKED, exactly-once',
    },
    note1title: { en: '01 · What does each relay try to fetch?', pl: '01 · Co próbuje pobrać każdy relay?' },
    note1: {
      en: 'All three start with the same oldest event #101. Only correct locking and an atomic claim can divide the work safely.',
      pl: 'Wszystkie trzy zaczynają od tego samego, najstarszego zdarzenia #101. Pracę da się bezpiecznie rozdzielić tylko dzięki właściwej blokadzie i atomowemu przydziałowi.',
    },
    note2title: { en: '02 · What does SKIP LOCKED do?', pl: '02 · Co robi SKIP LOCKED?' },
    note2: {
      en: 'A locks #101. B skips it and locks #102, while C moves to #103. The lock ends at COMMIT; the saved claim survives. ORDER BY id with SKIP LOCKED does not guarantee publication order. These events belong to different orders, and the animation shows one possible order of delivery. Events for the same aggregate need a separate ordering mechanism.',
      pl: 'A blokuje #101. B pomija ten wiersz i blokuje #102, a C przechodzi do #103. Blokada kończy się przy COMMIT, a zapisany przydział zostaje. ORDER BY id z SKIP LOCKED nie gwarantuje kolejności publikacji. Te zdarzenia dotyczą różnych zamówień, a animacja pokazuje jeden z możliwych przebiegów. Kolejność zdarzeń tego samego agregatu wymaga osobnego mechanizmu.',
    },
    note3title: { en: '03 · Does this guarantee exactly-once?', pl: '03 · Czy to zapewnia exactly-once?' },
    note3: {
      en: 'No. A crash after broker ACK but before published is recorded may cause redelivery. A slow worker can also publish after its lease expires and another worker takes over. The claim_token check protects the database status update, but cannot stop that stale publisher. Consumers should deduplicate by event ID and commit the deduplication record with their local effect; external effects need their own idempotency mechanism.',
      pl: 'Nie. Awaria po ACK brokera, lecz przed zapisem published, może spowodować ponowne wysłanie. Powolny proces może też wysłać wiadomość po wygaśnięciu przydziału, gdy zadanie przejął już inny proces. Warunek claim_token chroni zapis statusu w bazie, ale nie powstrzyma takiej publikacji. Odbiorca powinien deduplikować po ID zdarzenia i zapisywać znacznik razem z lokalnym skutkiem w jednej transakcji. Skutki w zewnętrznych usługach wymagają własnego mechanizmu idempotencji.',
    },
    codeSummary: {
      en: 'Show SQL · atomic claim, COMMIT, broker, acknowledgement',
      pl: 'Zobacz SQL · atomowy przydział, COMMIT, broker i potwierdzenie',
    },
    codeCaption: {
      en: 'Teaching example with a short transaction and leased claim. Publish after COMMIT. The no-lock mode intentionally shows an unsafe read-then-publish algorithm.',
      pl: 'Przykładowa implementacja z krótką transakcją i przydziałem z czasem wygaśnięcia. Publikacja odbywa się po COMMIT. Tryb bez blokady celowo pokazuje błędny algorytm: odczyt, a potem publikacja.',
    },
    sources: { en: 'References:', pl: 'Źródła:' },
    modeHelp: {
      unsafe: {
        en: 'Each worker just reads the oldest pending row and sends it. All three pick #101, so the warehouse gets the same order three times.',
        pl: 'Każdy proces po prostu odczytuje najstarszy oczekujący wiersz i go wysyła. Wszystkie trzy biorą #101, więc magazyn dostaje to samo zamówienie trzy razy.',
      },
      wait: {
        en: 'The first worker locks #101 and the others wait in line for that row. This run has no crashes or expired leases, so there are no duplicates; some workers wait for a while.',
        pl: 'Pierwszy proces blokuje #101, a pozostałe czekają w kolejce do tego wiersza. W tym przebiegu nie ma awarii ani wygasłych przydziałów, więc nie ma duplikatów. Część procesów przez chwilę czeka.',
      },
      skip: {
        en: 'The first worker locks #101, the second skips it and takes #102, the third takes #103. All three work at once. This run has no crashes or expired leases, so there are no duplicates.',
        pl: 'Pierwszy proces blokuje #101, drugi go pomija i bierze #102, a trzeci #103. Wszystkie trzy pracują jednocześnie. W tym przebiegu nie ma awarii ani wygasłych przydziałów, więc nie ma duplikatów.',
      },
    },
    modeTips: {
      unsafe: {
        en: [
          'No lock: every worker sends #101',
          'A plain <code>SELECT</code> takes no row lock that would prevent competing claims. All three workers see #101 as pending and publish it before anyone marks it, so the warehouse could start packing the same order three times. Consumers can deduplicate by processed event ID, but the relay itself is still wrong.',
        ],
        pl: [
          'Bez blokady: każdy proces wysyła #101',
          'Zwykły <code>SELECT</code> nie zakłada blokady wiersza, która powstrzymałaby konkurencyjny przydział. Wszystkie trzy procesy widzą #101 jako pending i publikują je, zanim ktokolwiek je oznaczy, więc magazyn mógłby zacząć pakować to samo zamówienie trzy razy. Konsumenci mogą deduplikować po ID przetworzonych zdarzeń, ale sam relay nadal działa błędnie.',
        ],
      },
      wait: {
        en: [
          'FOR UPDATE: wait for the lock',
          'The first worker locks #101 with <code>SELECT … FOR UPDATE</code>. The others wait at that row. At <code>READ COMMITTED</code>, after the first commit they recheck its updated status and move to the next pending row within the same statement. PostgreSQL keeps the lock on the skipped row until the transaction ends, so C can still wait at #101 behind B. This run has no crashes or expired leases and produces no duplicates.',
        ],
        pl: [
          'FOR UPDATE: czekanie na blokadę',
          'Pierwszy proces blokuje #101 przez <code>SELECT … FOR UPDATE</code>. Pozostałe czekają przy tym wierszu. Przy <code>READ COMMITTED</code>, po pierwszym COMMIT sprawdzają jego nowy status i w ramach tego samego zapytania przechodzą do następnego oczekującego wiersza. PostgreSQL trzyma blokadę pominiętego wiersza do końca transakcji, więc C może dalej czekać przy #101 za B. W tym przebiegu nie ma awarii ani wygasłych przydziałów, dlatego nie powstają duplikaty.',
        ],
      },
      skip: {
        en: [
          'SKIP LOCKED: take the next free row',
          '<code>FOR UPDATE SKIP LOCKED</code> does not wait for locked rows. It skips them and takes the next pending one, so A gets #101, B gets #102 and C gets #103 at the same time. This is the usual way to run several outbox workers in parallel. A crash after the broker accepts a message, but before the row is marked published, can still cause a redelivery.',
        ],
        pl: [
          'SKIP LOCKED: następny wolny wiersz',
          '<code>FOR UPDATE SKIP LOCKED</code> nie czeka na zablokowane wiersze. Pomija je i bierze następny oczekujący, więc A dostaje #101, B #102, a C #103 w tej samej chwili. Tak zwykle uruchamia się kilka procesów outboxa równolegle. Awaria po przyjęciu wiadomości przez brokera, ale przed oznaczeniem wiersza jako published, nadal może spowodować ponowne wysłanie.',
        ],
      },
    },
    modeUnsafe: { en: 'No lock · duplicates', pl: 'Bez blokady · duplikaty' },
    modeWait: { en: 'FOR UPDATE · wait', pl: 'FOR UPDATE · czekaj' },
    modeSkip: 'FOR UPDATE SKIP LOCKED',
    play: { en: '▶ Play', pl: '▶ Odtwórz' },
    pause: { en: 'Ⅱ Pause', pl: 'Ⅱ Pauza' },
    replay: { en: '↺ Replay', pl: '↺ Odtwórz ponownie' },
    back: { en: '← Back', pl: '← Wstecz' },
    next: { en: 'Next →', pl: 'Dalej →' },
    reset: { en: 'Reset', pl: 'Od początku' },
    pending: { en: 'pending', pl: 'oczekuje' },
    processing: { en: 'processing', pl: 'w trakcie publikacji' },
    published: { en: 'published', pl: 'opublikowano' },
    none: { en: 'none', pl: 'brak' },
    counts: [
      { en: 'pending', pl: 'oczekuje' },
      { en: 'claimed', pl: 'przydzielono' },
      { en: 'published', pl: 'opublikowano' },
    ],
    brokerEyebrow: { en: 'SEPARATE SYSTEM', pl: 'OSOBNY SYSTEM' },
    brokerIntro: {
      en: 'Each card below is one message accepted by the broker. The outbox row may still say “processing”.',
      pl: 'Każda karta poniżej to osobny komunikat przyjęty przez brokera. Wiersz w outboxie może nadal mieć status „w trakcie publikacji”.',
    },
    brokerEmptyTitle: { en: 'Broker has not received anything yet', pl: 'Broker jeszcze nic nie otrzymał' },
    brokerEmpty: {
      en: 'Advance to the publish step. PostgreSQL and the broker have separate states.',
      pl: 'Przejdź do kroku wysyłki. Tabela PostgreSQL i broker mają niezależne stany.',
    },
    delivered: 'ACK',
    duplicate: { en: 'DUPLICATE', pl: 'DUPLIKAT' },
    messageForms: { en: ['message', 'messages'], pl: ['wiadomość', 'wiadomości', 'wiadomości'] },
    duplicateForms: { en: ['duplicate', 'duplicates'], pl: ['duplikat', 'duplikaty', 'duplikatów'] },
    brokerOkay: {
      en: 'Each event ID appears at most once in this simulated run.',
      pl: 'Każde ID zdarzenia pojawiło się w brokerze najwyżej raz w tej symulacji.',
    },
    brokerBad: {
      en: 'The broker received several copies of #101. A later published flag cannot undo those sends.',
      pl: 'Broker otrzymał kilka kopii #101. Sam późniejszy zapis published nie cofnie już tych wysyłek.',
    },
    raceLabel: { en: 'SAME START', pl: 'WSPÓLNY START' },
    raceText: {
      en: 'Relay A, B and C all start SELECT for the oldest event still marked pending. Each initially tries #101.',
      pl: 'Relay A, B i C rozpoczynają SELECT najstarszego zdarzenia, które wciąż ma status pending. Każdy zaczyna od #101.',
    },
    raceTarget: { en: 'target: #101', pl: 'cel: #101' },
    contrastSafe: {
      en: 'Selecting under a row lock and persisting the claim are one short transaction. After COMMIT, the worker publishes outside that transaction, then records published in another transaction.',
      pl: 'Wybranie zdarzenia pod blokadą i zapisanie przydziału to jedna krótka transakcja. Po COMMIT worker publikuje poza transakcją, a potem zapisuje published w nowej transakcji.',
    },
    contrastUnsafe: {
      en: 'Without locking and an atomic claim, every relay can read #101 as pending and publish the same event. This is deliberately unsafe.',
      pl: 'Bez blokady i atomowego przydziału każdy proces może odczytać #101 jako pending i opublikować to samo zdarzenie. To celowo niepoprawna implementacja.',
    },
    contrastWait: {
      en: 'FOR UPDATE prevents simultaneous claiming, but B and C wait at the first locked row. Under READ COMMITTED, the same waiting statement resumes, rechecks WHERE and continues to the next eligible row. Rows it skips after that recheck stay locked until its COMMIT, so the next relay keeps waiting.',
      pl: 'FOR UPDATE chroni przed jednoczesnym przydziałem tego samego wiersza, lecz B i C czekają na pierwszą blokadę. Przy READ COMMITTED to samo oczekujące zapytanie wznawia pracę, sprawdza WHERE i przechodzi do kolejnego pasującego wiersza. Wiersze pominięte po tym sprawdzeniu pozostają zablokowane do jego COMMIT, więc kolejny relay czeka dalej.',
    },
    workerStates: {
      idle: { en: 'Waiting to start', pl: 'Czeka na start' },
      seek: { en: 'Trying to fetch #101', pl: 'Próbuje pobrać #101' },
      read: { en: 'Read #101 as pending', pl: 'Odczytał #101 jako pending' },
      unsafe: { en: 'Has #101 without exclusive claim', pl: 'Ma #101 bez wyłącznego przydziału' },
      lock: { en: 'Holding SQL row lock', pl: 'Trzyma blokadę SQL' },
      lockMany: { en: 'Holding row locks {ids}', pl: 'Trzyma blokady {ids}' },
      wait: { en: 'Waiting on lock for #{id}', pl: 'Czeka na blokadę #{id}' },
      resume: { en: 'Query resumes; rechecking WHERE', pl: 'Zapytanie wznowione; sprawdza WHERE' },
      claimed: { en: 'Claim committed; SQL lock released', pl: 'Przydział zatwierdzony; blokada SQL zwolniona' },
      publish: { en: 'Sending to broker', pl: 'Wysyła do brokera' },
      sent: { en: 'Broker received message', pl: 'Broker otrzymał wiadomość' },
      done: { en: 'Saved published', pl: 'Zapisano published' },
      ready: { en: 'Ready to publish', pl: 'Gotowy do publikacji' },
    },
    workerNotes: {
      idle: { en: 'CLI process ready', pl: 'Proces CLI gotowy' },
      seek: { en: 'Concurrent queries', pl: 'Współbieżne zapytania' },
      read: { en: 'No protection against races', pl: 'Brak ochrony przed wyścigiem' },
      unsafe: { en: 'Other relays have the same event', pl: 'Inne procesy mogą mieć tę samą kopię' },
      lock: { en: 'Transaction still open', pl: 'Transakcja nadal otwarta' },
      lockMany: { en: 'Skipped rows stay locked until COMMIT', pl: 'Pominięte wiersze zablokowane do COMMIT' },
      wait: { en: 'Waiting statement is suspended', pl: 'Oczekujące zapytanie jest wstrzymane' },
      resume: { en: 'Same statement · READ COMMITTED', pl: 'To samo zapytanie · READ COMMITTED' },
      claimed: { en: 'COMMIT completed', pl: 'COMMIT wykonany' },
      publish: { en: 'Network I/O outside TX', pl: 'Operacja sieciowa poza TX' },
      sent: { en: 'Broker ACK ≠ SQL published', pl: 'ACK brokera ≠ published w SQL' },
      done: { en: 'New short DB transaction', pl: 'Nowa, krótka transakcja' },
      ready: { en: 'No SQL lock held', pl: 'Nie trzyma blokady SQL' },
    },
    stories: {
      unsafe: [
        [
          { en: 'Event #101 is pending', pl: 'Zdarzenie #101 czeka' },
          {
            en: 'All rows start pending. The broker is empty and relay processes have not started.',
            pl: 'Na początku wszystkie wiersze są pending. Broker jest pusty, a procesy relay jeszcze nie wystartowały.',
          },
        ],
        [
          { en: 'Three processes start together', pl: 'Trzy procesy zaczynają równocześnie' },
          {
            en: 'A, B and C run ordinary SELECT WHERE status = pending. Each targets the oldest event #101.',
            pl: 'A, B i C wykonują zwykły SELECT z warunkiem status = pending. Każdy celuje w najstarsze zdarzenie #101.',
          },
        ],
        [
          { en: 'Three reads of one row', pl: 'Trzy odczyty tego samego wiersza' },
          {
            en: 'All three observe #101 as pending. A plain SELECT does not lock the row or grant publication ownership.',
            pl: 'Wszystkie procesy widzą #101 jako pending. Zwykły SELECT nie blokuje wiersza i nie daje wyłącznego prawa publikacji.',
          },
        ],
        [
          { en: 'All three relays have #101', pl: 'Trzy relaye mają #101' },
          {
            en: 'Each process prepares to publish the same payload. #101 is still pending in the database.',
            pl: 'Każdy proces przygotowuje publikację tego samego payloadu. W bazie #101 nadal jest pending.',
          },
        ],
        [
          { en: 'A publishes #101', pl: 'A wysyła #101' },
          {
            en: 'The broker acknowledges the first #101 copy. PostgreSQL still says pending.',
            pl: 'Broker potwierdza pierwszą kopię #101. W PostgreSQL zdarzenie wciąż ma status pending.',
          },
        ],
        [
          { en: 'B publishes a duplicate', pl: 'B wysyła duplikat' },
          {
            en: 'The broker receives a second copy of event_id = 101.',
            pl: 'Broker otrzymuje drugą kopię tego samego event_id = 101.',
          },
        ],
        [
          { en: 'C publishes another duplicate', pl: 'C wysyła kolejny duplikat' },
          {
            en: 'The broker now has three copies of #101 even though there is just one table row.',
            pl: 'Broker ma już trzy kopie #101, chociaż w tabeli istnieje jeden wiersz.',
          },
        ],
        [
          { en: 'A records published', pl: 'A zapisuje published' },
          {
            en: 'A later status update cannot retract the extra broker messages.',
            pl: 'Późniejszy UPDATE statusu nie usuwa dwóch dodatkowych wiadomości, które trafiły już do brokera.',
          },
        ],
        [
          { en: 'Result: 3 copies, 1 event', pl: 'Wynik: 3 kopie, 1 zdarzenie' },
          {
            en: 'This deliberately unsafe mode has no lock and no atomic claim.',
            pl: 'To celowo błędny wariant: brak blokady i atomowego przydziału.',
          },
        ],
      ],
      skip: [
        [
          { en: 'Events wait in the table', pl: 'Zdarzenia czekają w tabeli' },
          {
            en: 'The broker is empty. None of the relays has read the table.',
            pl: 'Broker jest pusty. Procesy A, B i C jeszcze nie czytają tabeli.',
          },
        ],
        [
          { en: 'All three initially target #101', pl: 'Jednoczesna próba pobrania #101' },
          {
            en: 'The processes start a pending-event poll together. Each first aims at event #101.',
            pl: 'Trzy procesy zaczynają pobierać najstarsze zdarzenie pending. Wszystkie najpierw celują w #101.',
          },
        ],
        [
          { en: 'A locks #101; B and C skip it', pl: 'A blokuje #101; B i C omijają blokadę' },
          {
            en: 'A holds an SQL lock on #101. SKIP LOCKED lets B lock #102 and C lock #103 without waiting.',
            pl: 'A trzyma blokadę SQL na #101. Dzięki SKIP LOCKED B blokuje #102, a C blokuje #103, bez czekania.',
          },
        ],
        [
          { en: 'Each commits a different claim', pl: 'Każdy zapisuje własny przydział i robi COMMIT' },
          {
            en: 'A gets #101, B #102 and C #103. SQL locks disappear but persisted leases remain.',
            pl: 'A otrzymuje #101, B #102, C #103. Wszystkie blokady SQL znikają, ale zapisany przydział nadal obowiązuje.',
          },
        ],
        [
          { en: 'A publishes #101', pl: 'A publikuje #101' },
          {
            en: 'The broker acknowledges #101. PostgreSQL still stores processing, not published.',
            pl: 'Broker potwierdza #101. W PostgreSQL #101 nadal ma status processing, nie published.',
          },
        ],
        [
          { en: 'B publishes #102', pl: 'B publikuje #102' },
          {
            en: 'The broker receives #102. Its row is still processing.',
            pl: 'Broker otrzymuje #102. W tabeli #102 nadal jest processing.',
          },
        ],
        [
          { en: 'C publishes #103', pl: 'C publikuje #103' },
          {
            en: 'The broker receives #103. So far each event ID has been sent once.',
            pl: 'Broker otrzymuje #103. Każdy event_id wystąpił dotąd jeden raz.',
          },
        ],
        [
          { en: 'A marks #101 published', pl: 'A oznacza #101 jako published' },
          {
            en: 'Only now does a separate PostgreSQL update record #101 as published.',
            pl: 'Dopiero teraz osobny zapis w PostgreSQL potwierdza zakończenie publikacji #101.',
          },
        ],
        [
          { en: 'B marks #102 published', pl: 'B oznacza #102 jako published' },
          { en: 'B records published for #102.', pl: 'B zapisuje published dla #102.' },
        ],
        [
          { en: 'C marks #103 published', pl: 'C oznacza #103 jako published' },
          { en: 'C records published for #103.', pl: 'C zapisuje published dla #103.' },
        ],
        [
          { en: 'Result: no unnecessary lock waiting', pl: 'Wynik: bez niepotrzebnego czekania' },
          {
            en: 'Three distinct events reached the broker once each in this run. This is not an exactly-once guarantee under failures.',
            pl: 'Trzy różne zdarzenia trafiły do brokera, każde jeden raz w tym przebiegu. To nie jest gwarancja exactly-once w razie awarii.',
          },
        ],
      ],
      wait: [
        [
          { en: 'Events wait in the table', pl: 'Zdarzenia czekają w tabeli' },
          { en: 'The broker has received no messages.', pl: 'Broker nie otrzymał żadnej wiadomości.' },
        ],
        [
          { en: 'All three attempt #101', pl: 'A, B i C próbują pobrać #101' },
          {
            en: 'Every process starts a SELECT for the oldest pending event.',
            pl: 'Wszystkie procesy rozpoczynają SELECT najstarszego zdarzenia pending.',
          },
        ],
        [
          { en: 'A locks #101; B and C wait', pl: 'A blokuje #101; B i C czekają' },
          {
            en: 'Without SKIP LOCKED, both queries wait at the row that A has locked. B is first in the queue for that lock; C waits behind it.',
            pl: 'Bez SKIP LOCKED oba zapytania zatrzymują się przy wierszu zablokowanym przez A. B jest pierwszy w kolejce do tej blokady, C czeka za nim.',
          },
        ],
        [
          { en: 'A commits the claim', pl: 'A zapisuje przydział i wykonuje COMMIT' },
          {
            en: 'Row #101 becomes processing and A’s lock is released. B’s statement resumes first: it locks the current version of #101 and rechecks WHERE. C is still waiting at #101.',
            pl: 'Wiersz #101 zmienia się na processing, a blokada A znika. Zapytanie B wznawia pracę jako pierwsze: blokuje aktualną wersję #101 i ponownie sprawdza WHERE. C nadal czeka przy #101.',
          },
        ],
        [
          { en: 'B skips #101 and locks #102', pl: 'B pomija #101 i blokuje #102' },
          {
            en: '#101 is no longer pending, so B’s same statement continues to #102. PostgreSQL keeps B’s lock on the skipped #101 until B’s transaction ends, so C is still waiting at #101.',
            pl: '#101 nie jest już pending, więc to samo zapytanie B przechodzi do #102. PostgreSQL utrzymuje blokadę B na pominiętym #101 do końca transakcji B, dlatego C wciąż czeka przy #101.',
          },
        ],
        [
          { en: 'B commits claim #102', pl: 'B zapisuje przydział #102 i robi COMMIT' },
          {
            en: 'Both of B’s row locks are released and B owns a persisted claim on #102. C’s statement resumes, rechecks #101 and #102 (both now processing), skips them and keeps their locks until its own COMMIT.',
            pl: 'Obie blokady B znikają, a B ma trwały przydział #102. Zapytanie C wznawia pracę, sprawdza #101 i #102 (oba są już processing), pomija je i trzyma ich blokady do własnego COMMIT.',
          },
        ],
        [
          { en: 'C’s query continues to #103', pl: 'Zapytanie C przechodzi do #103' },
          {
            en: 'The same statement locks #103 and writes the claim. No new poll is needed in this trace.',
            pl: 'To samo zapytanie blokuje #103 i zapisuje przydział. Ten przebieg nie wymaga nowego zapytania aplikacji.',
          },
        ],
        [
          { en: 'C commits claim #103', pl: 'C zapisuje przydział #103 i robi COMMIT' },
          {
            en: 'All of C’s row locks are released. Each relay owns a different event, but claiming took longer than with SKIP LOCKED.',
            pl: 'Wszystkie blokady C znikają. Każdy relay ma inne zdarzenie, ale przydział trwał dłużej niż przy SKIP LOCKED.',
          },
        ],
        [
          { en: 'A publishes #101', pl: 'A publikuje #101' },
          {
            en: 'The broker receives #101 while the row still says processing.',
            pl: 'Broker otrzymuje #101, a w bazie jest nadal processing.',
          },
        ],
        [
          { en: 'B publishes #102', pl: 'B publikuje #102' },
          { en: 'The broker receives #102.', pl: 'Broker otrzymuje #102.' },
        ],
        [
          { en: 'C publishes #103', pl: 'C publikuje #103' },
          { en: 'The broker receives #103.', pl: 'Broker otrzymuje #103.' },
        ],
        [
          { en: 'A records published', pl: 'A zapisuje published' },
          { en: 'A separate update marks #101 as published.', pl: 'Osobna aktualizacja oznacza #101 jako published.' },
        ],
        [
          { en: 'B records published', pl: 'B zapisuje published' },
          { en: 'A separate update marks #102 as published.', pl: 'Osobna aktualizacja oznacza #102 jako published.' },
        ],
        [
          { en: 'C records published', pl: 'C zapisuje published' },
          { en: 'A separate update marks #103 as published.', pl: 'Osobna aktualizacja oznacza #103 jako published.' },
        ],
      ],
    },
    step: { en: 'Step', pl: 'Krok' },
    remember: { en: 'Remember:', pl: 'Zapamiętaj:' },
    nextLink: {
      en: 'Next: three relays race for one event in the Outbox →',
      pl: 'Dalej: trzy relaye konkurują o jedno zdarzenie w outboxie →',
    },
  },
  compare: {
    overline: { en: 'PHP-FPM, Fibers and event loops', pl: 'PHP-FPM, Fibers i pętle zdarzeń' },
    title: { en: 'Six HTTP requests, four approaches', pl: 'Sześć żądań HTTP, cztery podejścia' },
    lead: {
      en: 'Every approach gets the same machine (2 CPU cores), the same number of processes (2) and the same six requests. A scenario changes one thing for all of them, so the timelines differ only where the execution models differ.',
      pl: 'Każde podejście dostaje tę samą maszynę (2 rdzenie CPU), tyle samo procesów (2) i te same sześć żądań. Scenariusz zmienia jedną rzecz dla wszystkich naraz, więc wykresy różnią się tylko tam, gdzie różnią się modele wykonania.',
    },
    chip: { en: '2 cores · 2 processes each · one clock', pl: '2 rdzenie · po 2 procesy · wspólny czas' },
    scenario: {
      orders: {
        title: { en: 'Customers open “My orders”', pl: 'Klienci otwierają „Moje zamówienia”' },
        sub: { en: 'One database query per page', pl: 'Jedno zapytanie do bazy na stronę' },
      },
      fanout: {
        title: { en: 'Order page with invoice total', pl: 'Zamówienia z sumą faktur' },
        sub: { en: 'Two separate queries per page', pl: 'Dwa osobne zapytania na stronę' },
      },
      cpu: {
        title: { en: 'Customers download PDF invoices', pl: 'Klienci pobierają faktury PDF' },
        sub: { en: 'Pure computing · no waiting', pl: 'Same obliczenia · bez czekania' },
      },
      blocking: {
        title: { en: 'A blocking database driver', pl: 'Blokujący sterownik bazy' },
        sub: { en: 'Waiting freezes the whole process', pl: 'Czekanie zatrzymuje cały proces' },
      },
    },
    sharedTimeAxis: { en: 'SHARED TIME AXIS', pl: 'WSPÓLNA OŚ CZASU' },
    resultsTitle: {
      en: 'Last response in this scenario, in logical time units',
      pl: 'Ostatnia odpowiedź w tym scenariuszu, w umownych jednostkach czasu',
    },
    psSummary: { en: 'How to recognise these models in ps and htop', pl: 'Jak rozpoznać te modele w ps i htop' },
    psFpmNote: {
      en: 'Workers live through many requests, but each handles one at a time. With Fibers the list looks the same.',
      pl: 'Workery żyją przez wiele żądań, ale każdy obsługuje jedno naraz. Z Fibers lista wygląda tak samo.',
    },
    psReactNote: {
      en: 'Plain PHP CLI processes, started for example by systemd or Supervisor. Each runs its own loop and handles many requests at once.',
      pl: 'Zwykłe procesy PHP CLI, uruchamiane np. przez systemd albo Supervisora. Każdy ma własną pętlę i obsługuje wiele żądań naraz.',
    },
    psNodeNote: {
      en: 'In cluster mode the primary process accepts connections and hands them to the workers, which run the application code. The letter <code>l</code> in STAT marks a multithreaded process: libuv and V8 use helper threads, but your JavaScript runs on one thread.',
      pl: 'W trybie cluster proces główny (primary) przyjmuje połączenia i przekazuje je workerom, które wykonują kod aplikacji. Litera <code>l</code> w kolumnie STAT oznacza proces wielowątkowy: libuv i V8 mają wątki pomocnicze, ale twój kod JavaScript działa w jednym wątku.',
    },
    psHtopNote: {
      en: 'In <code>htop</code>, during the PDF scenario each of these processes shows about 100% CPU, one full core. During the database scenarios the event-loop processes use little CPU even while they serve many requests.',
      pl: 'W <code>htop</code> przy scenariuszu z fakturami PDF każdy z tych procesów pokaże około 100% CPU, czyli jeden pełny rdzeń. Przy scenariuszach z zapytaniami do bazy procesy z pętlą zdarzeń zużywają mało CPU, choć obsługują wiele żądań.',
    },
    pendingIO: { en: 'Pending I/O', pl: 'Oczekiwanie na I/O' },
    waitingForAWorkerCallback: { en: 'Waiting for a worker / callback', pl: 'Oczekiwanie na workera / callback' },
    cpuCore: { en: 'CPU core', pl: 'Rdzeń CPU' },
    fpmTitle: { en: 'PHP-FPM / synchronous PHP', pl: 'PHP-FPM / synchroniczne PHP' },
    fpmLead: {
      en: 'Two workers (pm.max_children = 2). Each one handles one request at a time and stays occupied while its synchronous query waits for PostgreSQL.',
      pl: 'Dwa workery (pm.max_children = 2). Każdy obsługuje jedno żądanie naraz i pozostaje zajęty, gdy jego synchroniczne zapytanie czeka na PostgreSQL.',
    },
    fibersTitle: 'PHP-FPM + Fibers / AMPHP',
    fibersLead: {
      en: 'The same two workers with an async PostgreSQL client (amphp/postgres) inside the request. Fibers let one request wait for several queries at once. A worker still takes only one request at a time.',
      pl: 'Te same dwa workery, a w żądaniu asynchroniczny klient PostgreSQL (amphp/postgres). Dzięki Fibers jedno żądanie czeka na kilka zapytań naraz, ale worker nadal przyjmuje tylko jedno żądanie.',
    },
    scrollSidewaysToSeeLater: {
      en: '↔ Scroll sideways to see later time units',
      pl: '↔ Przewiń w bok, aby zobaczyć dalsze takty',
    },
    lastResponseAt: { en: 'Last response at', pl: 'Ostatnia odpowiedź w' },
    reactTitle: {
      en: 'ReactPHP / 2 long-running PHP CLI processes',
      pl: 'ReactPHP / 2 długo działające procesy PHP CLI',
    },
    reactLead: {
      en: 'Two long-running PHP CLI processes, each with its own event loop. Nginx spreads requests between them. With a non-blocking database client, one process keeps several queries in flight while it starts handling the next request.',
      pl: 'Dwa długo działające procesy PHP CLI, każdy z własną pętlą zdarzeń. Nginx rozdziela między nie żądania. Dzięki nieblokującemu klientowi bazy jeden proces ma w toku kilka zapytań i w tym czasie zaczyna obsługiwać kolejne żądanie.',
    },
    nodeTitle: { en: 'Node.js / 2 processes', pl: 'Node.js / 2 procesy' },
    nodeLead: {
      en: 'Two processes with one event loop each (cluster). With an asynchronous DB client, <code>await</code> pauses the handler, not the event loop. CPU-heavy synchronous JavaScript still blocks it.',
      pl: 'Dwa procesy, w każdym jedna pętla zdarzeń (cluster). Przy asynchronicznym kliencie bazy <code>await</code> wstrzymuje obsługę danego żądania, a nie całą pętlę zdarzeń. Długie synchroniczne obliczenia JavaScript nadal ją blokują.',
    },
    mechanismNotABenchmark: { en: 'Mechanism, not a benchmark', pl: 'Mechanizm, nie benchmark' },
    whatIsWaitingAndWhat: { en: 'What is waiting, and what is running?', pl: 'Co czeka, a co się wykonuje?' },
    mechanismLead: {
      en: 'In PHP-FPM, a request holds a worker while it waits for a synchronous query. Fibers let that request wait for several queries at once, but the worker still serves a single request. ReactPHP and Node.js leave requests pending without blocking their loops, provided the clients are asynchronous. Every model still has to protect shared database writes.',
      pl: 'W PHP-FPM synchroniczne zapytanie zajmuje workera aż do otrzymania odpowiedzi. Fibers pozwalają temu żądaniu czekać na kilka zapytań naraz, ale worker nadal obsługuje jedno żądanie. ReactPHP i Node.js mogą w tym czasie obsługiwać inne zdarzenia, jeśli korzystają z nieblokujących klientów. W każdym modelu trzeba chronić wspólne dane przed konkurującymi zapisami.',
    },
    reactphpDeployment: { en: 'ReactPHP deployment', pl: 'Wdrożenie ReactPHP' },
    longRunningPhpCliHttp: { en: 'long-running PHP CLI HTTP server', pl: 'długo działający serwer HTTP w PHP CLI' },
    notAPhpFpmWorker: {
      en: 'Not a PHP-FPM worker. Each ReactPHP process stays alive between requests and schedules events in its own loop; this comparison runs two of them. Synchronous PDO calls still block that loop.',
      pl: 'To nie jest worker PHP-FPM. Każdy proces ReactPHP działa między żądaniami i planuje zdarzenia we własnej pętli. W tym porównaniu działają dwa takie procesy. Synchroniczne PDO nadal blokuje pętlę.',
    },
    fibersDeployment: { en: 'Fibers inside PHP-FPM', pl: 'Fibers w PHP-FPM' },
    fibersFlow: { en: 'FPM worker with a Revolt loop inside the request', pl: 'worker FPM z pętlą Revolt w obrębie żądania' },
    fibersDeploymentNote: {
      en: 'No extra server process. Revolt schedules the asynchronous work within this request. The FPM worker can accept another request only after the current script finishes, including any work after the response.',
      pl: 'Bez dodatkowego procesu serwera. Revolt planuje pracę asynchroniczną w obrębie tego żądania. Worker FPM może przyjąć następne żądanie dopiero po zakończeniu bieżącego skryptu, także ewentualnej pracy po wysłaniu odpowiedzi.',
    },
    codeSummary: {
      en: 'Show the code: one endpoint, four approaches',
      pl: 'Pokaż kod: jeden endpoint, cztery podejścia',
    },
    sameEndpointLead: {
      en: 'Each version loads orders and an invoice total for the authenticated customer, as in scenario 02. Customer IDs come from authentication, not request parameters. These are fragments: application setup, authentication and error handling are omitted. Async examples assume enough free pooled connections for every query in flight: two per FPM request, up to six per event-loop process here. On one PostgreSQL connection, queries execute sequentially.',
      pl: 'Każda wersja pobiera zamówienia i sumę faktur zalogowanego klienta, jak w scenariuszu 02. ID klienta pochodzi z uwierzytelnienia, nie z parametrów żądania. To fragmenty kodu: pominięto konfigurację aplikacji, uwierzytelnienie i obsługę błędów. Przykłady asynchroniczne zakładają wolne połączenie dla każdego zapytania w toku: dwa na żądanie FPM, tutaj do sześciu na proces z pętlą zdarzeń. Na jednym połączeniu PostgreSQL wykonuje zapytania kolejno.',
    },
    codeFpmNote: {
      en: 'Two queries in a row. The worker waits for each of them.',
      pl: 'Dwa zapytania po kolei. Worker czeka na każde z nich.',
    },
    codeFibersNote: {
      en: 'Both queries wait at once, each on its own pooled connection. The worker stays occupied until the request script finishes, including any work after the response.',
      pl: 'Oba zapytania czekają naraz, każde na własnym połączeniu z puli. Worker pozostaje zajęty do końca skryptu obsługującego żądanie, także ewentualnej pracy po wysłaniu odpowiedzi.',
    },
    codeReactNote: {
      en: 'Promises and <code>await()</code> on Fibers use the same pool. <code>AsyncPostgresPool</code> below is an application adapter contract to implement, not a ReactPHP class. Each in-flight query uses a separate connection and resolves to an array of associative rows; the adapter releases the connection after reading the result. The handler extracts the scalar invoice total.',
      pl: 'Promise i <code>await()</code> na Fibers korzystają z tej samej puli. Poniższy <code>AsyncPostgresPool</code> to kontrakt adaptera aplikacji, który trzeba zaimplementować, a nie klasa ReactPHP. Każde zapytanie w toku zajmuje osobne połączenie i zwraca promise z tablicą wierszy asocjacyjnych; adapter zwalnia połączenie po odczytaniu wyniku. Handler wyciąga z wyniku samą sumę faktur.',
    },
    codeNodeNote: {
      en: 'The two <code>pool.query()</code> calls submit the queries. <code>Promise.all</code> combines their results, and <code>await</code> pauses this handler while the event loop can run other work.',
      pl: 'Dwa wywołania <code>pool.query()</code> zlecają zapytania. <code>Promise.all</code> łączy ich wyniki, a <code>await</code> wstrzymuje ten handler, podczas gdy pętla zdarzeń może wykonywać inną pracę.',
    },
    codeReactDeployment: {
      en: 'Two ReactPHP instances behind Nginx',
      pl: 'Dwie instancje ReactPHP za serwerem Nginx',
    },
    codeReactDeploymentNote: {
      en: 'Run the processes with ports 8080 and 8081. Put this upstream and server inside the Nginx http block. Load balancing does not set CPU affinity.',
      pl: 'Uruchom procesy na portach 8080 i 8081. Poniższe upstream i server umieść w bloku http konfiguracji Nginx. Rozdzielanie żądań nie przypisuje procesów do rdzeni CPU.',
    },
    phpFpmSynchronousDbAccess: { en: 'PHP-FPM: synchronous DB access', pl: 'PHP-FPM: synchroniczny dostęp do bazy' },
    aWorkerWaitingForIts: {
      en: 'A worker waiting for its database result cannot accept another HTTP request; it is occupied but generally consumes little CPU while blocked.',
      pl: 'Proces oczekujący na wynik zapytania nie przyjmie kolejnego żądania HTTP. Nadal jest zajęty, choć w tym czasie zwykle prawie nie korzysta z CPU.',
    },
    nodeJsAsynchronousDbQuery: { en: 'Node.js: asynchronous DB query', pl: 'Node.js: asynchroniczne zapytanie' },
    aRequestRemainsPendingBut: {
      en: 'A request remains pending, but the event loop can start and resume other handlers. Network I/O does not imply a dedicated JS thread per request.',
      pl: 'Żądanie czeka na wynik, ale pętla zdarzeń może obsługiwać inne żądania. Sieciowe I/O nie wymaga osobnego wątku JavaScript dla każdego z nich.',
    },
    cpuHeavyWork: { en: 'CPU-heavy work', pl: 'Praca obciążająca CPU' },
    cpuHeavyWorkNote: {
      en: 'This model assigns 6 CPU units to each job in every runtime, so the timelines end together. This is not a performance measurement. Processes or worker threads can use spare cores; adding more when both cores are saturated does not create extra CPU capacity.',
      pl: 'Model przypisuje każdemu zadaniu 6 jednostek CPU w każdym środowisku, dlatego wykresy kończą się razem. To nie jest pomiar wydajności. Procesy lub wątki robocze mogą wykorzystać wolne rdzenie; dokładanie ich przy obu rdzeniach w pełni zajętych nie zwiększa mocy CPU.',
    },
    raceConditionsDoNotDisappear: { en: 'Race conditions do not disappear', pl: 'Wyścigi nie znikają' },
    twoNodeJsRequestHandlers: {
      en: 'Two Node.js request handlers can interleave around <code>await</code> and race on the same DB row. Optimistic version checks and transaction locks remain relevant.',
      pl: 'Dwa handlery Node.js mogą przeplatać się przy <code>await</code> i konkurować o ten sam wiersz bazy. Kontrola wersji i blokady w transakcji nadal są potrzebne.',
    },
    details: {
      orders: {
        en: 'Six customers open their order history at the same moment. Each page needs one database query. Watch what each process does while the database is working.',
        pl: 'Sześciu klientów w tej samej chwili otwiera historię zamówień. Każda strona potrzebuje jednego zapytania do bazy. Zobacz, co robi każdy proces, gdy baza pracuje.',
      },
      fanout: {
        en: 'The order page also shows the sum of the customer’s invoices, so it needs two queries that do not depend on each other. Can they run at the same time?',
        pl: 'Strona zamówień pokazuje też sumę faktur klienta, więc potrzebuje dwóch zapytań, które od siebie nie zależą. Czy mogą działać jednocześnie?',
      },
      cpu: {
        en: 'Six customers download a PDF invoice. The model assigns 6 CPU units and no I/O to each job in every runtime.',
        pl: 'Sześciu klientów pobiera fakturę PDF. Model przypisuje każdemu zadaniu 6 jednostek CPU bez I/O, jednakowo w każdym środowisku.',
      },
      blocking: {
        en: 'The same order page, but every runtime uses a database driver that blocks while it waits, such as PDO. In ReactPHP this is a common mistake.',
        pl: 'Ta sama strona zamówień, ale każde środowisko używa sterownika bazy, który blokuje proces na czas czekania, np. PDO. W ReactPHP to częsty błąd.',
      },
    },
    detailTips: {
      orders: {
        en: [
          'One query per request',
          'Each request runs 1 unit of PHP, waits 5 units for PostgreSQL, then runs 1 more unit. A PHP-FPM worker stays with its request for the whole wait, with or without Fibers, because the request has nothing else to do. ReactPHP and Node.js use non-blocking clients, so each process accepts other requests while its queries are in flight.',
        ],
        pl: [
          'Jedno zapytanie na żądanie',
          'Każde żądanie wykonuje 1 jednostkę PHP, czeka 5 jednostek na PostgreSQL i wykonuje jeszcze 1 jednostkę. Worker PHP-FPM jest przez cały ten czas przypisany do żądania, także z Fibers, bo żądanie nie ma nic innego do zrobienia. ReactPHP i Node.js korzystają z nieblokujących klientów, więc każdy proces przyjmuje kolejne żądania, zanim wrócą wyniki zapytań.',
        ],
      },
      fanout: {
        en: [
          'Two independent queries per request',
          'The endpoint needs two independent queries, the order list and the invoice total, 5 units each. Plain PHP-FPM sends them sequentially and waits 10 units. Fibers with a pooled async client (AMPHP) overlap the waits, giving 5 units; the worker stays occupied until the request script ends. ReactPHP and Node.js also overlap waits between requests. This assumes a separate available connection for every in-flight query; promises alone do not provide that.',
        ],
        pl: [
          'Dwa niezależne zapytania na żądanie',
          'Endpoint potrzebuje dwóch niezależnych zapytań: listy zamówień i sumy faktur, po 5 jednostek każde. Zwykłe PHP-FPM wysyła je po kolei i czeka 10 jednostek. Fibers z asynchronicznym klientem i pulą połączeń (AMPHP) nakładają oczekiwania, co daje 5 jednostek; worker pozostaje zajęty do końca skryptu. ReactPHP i Node.js nakładają oczekiwania także między żądaniami. Zakładamy tu osobne, dostępne połączenie dla każdego zapytania w toku. Sam promise tego nie zapewnia.',
        ],
      },
      cpu: {
        en: [
          'CPU only, no I/O',
          'The model assigns 6 CPU units to each PDF in every runtime, with no I/O waits. That assumption makes two processes on two cores finish in 18 units in all four variants; it is not a benchmark. A long synchronous computation occupies its event-loop thread. Extra processes or threads can use spare CPU capacity, but cannot create more when both cores are saturated.',
        ],
        pl: [
          'Tylko CPU, bez I/O',
          'Model przypisuje każdej fakturze PDF 6 jednostek CPU bez oczekiwania na I/O, jednakowo w każdym środowisku. Z tego założenia wynika czas 18 jednostek dla dwóch procesów na dwóch rdzeniach we wszystkich czterech wariantach. To nie jest benchmark. Długie synchroniczne obliczenia zajmują wątek pętli zdarzeń. Dodatkowe procesy lub wątki mogą wykorzystać wolną moc CPU, ale nie dodają jej, gdy oba rdzenie są już w pełni zajęte.',
        ],
      },
      blocking: {
        en: [
          'Blocking driver everywhere',
          'Counterexample: every runtime reads PostgreSQL through a synchronous driver, PDO in PHP and a synchronous call such as querySync from pg-native in Node.js. A blocking call stops the whole event loop, so each ReactPHP or Node.js process serves one request at a time, just like an FPM worker. Fibers do not help either, because PDO never suspends a fiber.',
        ],
        pl: [
          'Blokujący sterownik wszędzie',
          'Kontrprzykład: każde środowisko odczytuje PostgreSQL przez synchroniczny sterownik. W PHP jest to PDO, a w Node.js na przykład querySync z pg-native. Blokujące wywołanie zatrzymuje całą pętlę zdarzeń, więc każdy proces ReactPHP lub Node.js obsługuje jedno żądanie naraz, tak jak worker FPM. Fibers też nie pomogą, bo PDO nigdy nie wstrzymuje fibera.',
        ],
      },
    },
    insight: {
      orders: {
        en: '<b>One query per request:</b> while PostgreSQL works, an FPM worker stays with its request and an event-loop process starts the next one. With the same two processes, the event loops finish first.',
        pl: '<b>Jedno zapytanie na żądanie:</b> gdy PostgreSQL pracuje, worker FPM czeka przy swoim żądaniu, a proces z pętlą zdarzeń zaczyna następne. Przy tych samych dwóch procesach pętle zdarzeń kończą pierwsze.',
      },
      fanout: {
        en: '<b>Two queries per request:</b> Fibers shorten each PHP-FPM request because both queries wait together, yet a worker still serves one request at a time. Event loops overlap waits inside a request and between requests.',
        pl: '<b>Dwa zapytania na żądanie:</b> Fibers skracają każde żądanie PHP-FPM, bo oba zapytania czekają razem, ale worker nadal obsługuje jedno żądanie naraz. Pętle zdarzeń nakładają oczekiwania zarówno w obrębie żądania, jak i między żądaniami.',
      },
      cpu: {
        en: '<b>PDF invoices:</b> all four timelines end together because the model assigns the same CPU cost, two processes and two cores to each variant. This does not compare runtime performance. There are no I/O waits to overlap, and both cores are fully occupied.',
        pl: '<b>Faktury PDF:</b> wszystkie cztery wykresy kończą się razem, ponieważ model przypisuje każdemu wariantowi ten sam koszt CPU, dwa procesy i dwa rdzenie. To nie jest porównanie wydajności środowisk. Nie ma oczekiwań na I/O, które można na siebie nałożyć, a oba rdzenie są w pełni zajęte.',
      },
      blocking: {
        en: '<b>Blocking driver:</b> all four timelines end together. An event loop saves time only when the client hands the wait back to the loop. In ReactPHP, replace PDO with a non-blocking PostgreSQL client.',
        pl: '<b>Blokujący sterownik:</b> wszystkie cztery wykresy kończą się w tym samym momencie. Pętla zdarzeń skraca czas tylko wtedy, gdy klient oddaje jej oczekiwanie. W ReactPHP zastąp PDO nieblokującym klientem PostgreSQL.',
      },
    },
    insightNote: {
      en: 'Time slots are illustrative, not measurements; neither event loop makes blocking code asynchronous.',
      pl: 'To umowne jednostki czasu, nie pomiary. Sama pętla zdarzeń nie zmienia blokujących operacji w asynchroniczne.',
    },
  },
  consistency: {
    immOver: { en: 'DDD AGGREGATE · SYMFONY + POSTGRESQL', pl: 'AGREGAT DDD · SYMFONY + POSTGRESQL' },
    immTitle: { en: 'Immediate consistency', pl: 'Spójność natychmiastowa' },
    immChip: { en: 'One aggregate · one transaction', pl: 'Jeden agregat · jedna transakcja' },
    immDesc: {
      en: 'The order’s item limit must hold right after every save. This guarantee covers one Order aggregate, not other services.',
      pl: 'Limit pozycji zamówienia musi być spełniony od razu po każdym zapisie. Ta gwarancja obejmuje jeden agregat Order, a nie inne usługi.',
    },
    evOver: { en: 'SAGA · SERVICES AND MESSAGES', pl: 'SAGA · USŁUGI I KOMUNIKATY' },
    evTitle: { en: 'Eventual consistency', pl: 'Spójność ostateczna (eventual consistency)' },
    evChip: { en: 'Many services · many transactions', pl: 'Wiele usług · wiele transakcji' },
    evDesc: {
      en: 'Orders, inventory, payments and shipping commit independently. The Saga coordinates progress; intermediate states are expected, and recovery may require retries or compensation.',
      pl: 'Zamówienia, magazyn, płatności i wysyłka zatwierdzają zmiany niezależnie. Saga koordynuje przebieg; stany przejściowe są normalne, a błędy mogą wymagać ponowień i kompensacji.',
    },
    localTitle: { en: 'Aggregate: keep one Order valid', pl: 'Agregat: zachowaj poprawny stan zamówienia' },
    localDesc: {
      en: 'The Order aggregate root controls changes to OrderItems. Every successful database transaction must leave its invariant true, even when two requests race.',
      pl: 'Korzeń agregatu Order kontroluje zmiany OrderItem. Każda udana transakcja musi zachować niezmiennik, również podczas wyścigu dwóch żądań.',
    },
    distTitle: { en: 'Saga: coordinate several commits', pl: 'Saga: koordynuj kilka transakcji' },
    distDesc: {
      en: 'An orchestrator directs independent services. Each commits separately; a failed later step may require compensating operations.',
      pl: 'Orkiestrator kieruje niezależnymi usługami. Każda zatwierdza swoje zmiany; błąd późniejszego kroku może wymagać kompensacji.',
    },
    help1Title: { en: 'Look for the nested boundaries', pl: 'Znajdź dwie zagnieżdżone granice' },
    help1: {
      en: 'The solid frame is the Ordering bounded context. The dashed island inside it is one Order aggregate.',
      pl: 'Ciągła ramka to kontekst ograniczony Ordering, a przerywana granica w jej wnętrzu to jeden agregat Order.',
    },
    help2Title: { en: 'Follow what actually changed', pl: 'Zobacz, co naprawdę się zmieniło' },
    help2: {
      en: 'Each Symfony process has its own in-memory Order object. The green database panel shows what PostgreSQL has committed.',
      pl: 'Każdy proces Symfony ma własny obiekt Order w pamięci. Zielony panel bazy pokazuje stan zatwierdzony w PostgreSQL.',
    },
    help3Title: { en: 'How to read the Saga', pl: 'Jak czytać mapę Sagi' },
    help3: {
      en: 'Each service owns a local transaction. The coordinator sends commands and reacts to events until the process succeeds or is compensated.',
      pl: 'Każda usługa ma osobną transakcję. Koordynator wysyła polecenia i reaguje na zdarzenia, aż proces się powiedzie albo zostanie skompensowany.',
    },
    aggOver: { en: 'EXPERIMENT / ORDER AGGREGATE', pl: 'EKSPERYMENT / AGREGAT ORDER' },
    aggTitle: { en: 'Who adds the final item to an Order?', pl: 'Kto doda ostatnią pozycję do zamówienia?' },
    aggLead: {
      en: 'Order #42 has one item, and the shop allows at most two per order. The customer has the order open on a phone and on a laptop and clicks “Add item” on both at almost the same moment. Each click is a separate Symfony request that changes the same order.',
      pl: 'Zamówienie #42 ma jedną pozycję, a sklep pozwala na najwyżej dwie. Klient ma zamówienie otwarte na telefonie i na laptopie i niemal w tej samej chwili klika „Dodaj pozycję” na obu. Każde kliknięcie to osobne żądanie Symfony, które zmienia to samo zamówienie.',
    },
    aggTip: {
      en: [
        'What do the two buttons change?',
        '<b>Version check ON:</b> changing the mapped <code>itemCount</code> makes Doctrine update Order with <code>WHERE version = 5</code>. The root and child commit together. A advances the version to 6; B rolls back on conflict, reloads with a new EntityManager and rejects a third item. <b>Without version check:</b> both children are saved, but both requests write a counter of 2. There are 3 saved items. The displayed version counts writes in this unsafe model; it does not protect them.',
      ],
      pl: [
        'Co zmieniają te dwa przyciski?',
        '<b>Kontrola wersji włączona:</b> zmiana mapowanego <code>itemCount</code> powoduje UPDATE Order z warunkiem <code>WHERE version = 5</code>. Korzeń i pozycja są zatwierdzane razem. A zwiększa wersję do 6; B po konflikcie wycofuje transakcję, odczytuje stan przez nowy EntityManager i odrzuca trzecią pozycję. <b>Bez kontroli wersji:</b> obie pozycje zostają zapisane, ale oba żądania wpisują licznik 2. W bazie są 3 pozycje. W tym niebezpiecznym wariancie pokazywana wersja zlicza zapisy, lecz ich nie chroni.',
      ],
    },
    protected: { en: 'Version check ON', pl: 'Kontrola wersji włączona' },
    unsafe: { en: 'Without version check', pl: 'Bez kontroli wersji' },
    invariant: { en: 'INVARIANT · Order has no more than 2 items', pl: 'NIEZMIENNIK · Order ma najwyżej 2 pozycje' },
    invariantBad: {
      en: 'INVARIANT BROKEN · 3 saved items, limit 2',
      pl: 'NARUSZENIE REGUŁY · 3 zapisane pozycje przy limicie 2',
    },
    initial: { en: 'Limit: 2 · Initially saved: 1', pl: 'Limit: 2 · Początkowo zapisano: 1' },
    mapOver: { en: 'SYSTEM MAP · TWO DIFFERENT BOUNDARIES', pl: 'MAPA SYSTEMU · DWIE RÓŻNE GRANICE' },
    mapLead: {
      en: 'The solid frame contains the Ordering model. The dashed frame marks the smaller Order aggregate whose invariant must hold after each COMMIT.',
      pl: 'Ciągła ramka obejmuje model Ordering. Przerywana granica wskazuje mniejszy agregat Order, którego reguła musi być spełniona po każdym COMMIT.',
    },
    context: { en: 'Ordering bounded context', pl: 'Kontekst ograniczony · Ordering' },
    contextMeta: {
      en: 'Contains multiple objects and use cases · not one transaction',
      pl: 'Wiele obiektów i przypadków użycia · to nie jest jedna transakcja',
    },
    zoneLeft: { en: 'Other parts of Ordering', pl: 'Pozostałe elementy Ordering' },
    zoneRight: { en: 'Other bounded contexts', pl: 'Inne konteksty ograniczone' },
    external: {
      en: 'Outside Ordering and outside this Order transaction',
      pl: 'Poza Ordering i poza transakcją tego zamówienia',
    },
    boundedExplain: {
      en: 'The Order aggregate boundary is smaller than Ordering. The dashed area is protected together; other models and services have separate boundaries.',
      pl: 'Granica agregatu Order jest mniejsza niż granica Ordering. Obszar w ramce przerywanej jest chroniony razem; pozostałe modele i usługi mają własne granice.',
    },
    liveOver: { en: 'AT THIS POINT IN TIME', pl: 'W TEJ CHWILI' },
    liveTitle: {
      en: 'A request’s data in PHP memory is not the same as the committed database state',
      pl: 'Dane w pamięci procesu PHP to nie to samo co stan zatwierdzony w bazie',
    },
    reqA: { en: 'Symfony request A', pl: 'Żądanie Symfony A' },
    reqB: { en: 'Symfony request B', pl: 'Żądanie Symfony B' },
    dbTitle: { en: 'PostgreSQL · committed state', pl: 'PostgreSQL · stan zatwierdzony' },
    notStarted: { en: 'Not started', pl: 'Jeszcze nie rozpoczęto' },
    arrived: { en: 'Request received', pl: 'Przyjęto żądanie' },
    read: { en: 'Read from database', pl: 'Odczytano z bazy' },
    prepared: { en: 'Prepared in PHP memory', pl: 'Przygotowano zmianę w pamięci PHP' },
    accepted: { en: 'Saved and committed', pl: 'Zapisano i zatwierdzono' },
    stale: { en: 'Still holding old version', pl: 'W pamięci nadal jest stara wersja' },
    conflict: { en: 'Write rejected: version conflict', pl: 'Zapis odrzucony: konflikt wersji' },
    rejected: { en: 'Order full: change rejected', pl: 'Brak miejsca: zmiana odrzucona' },
    unsafeSaved: { en: 'Saved without detecting the conflict', pl: 'Zapisano bez wykrycia konfliktu' },
    source: { en: 'Read: 1 item, version v5', pl: 'Odczyt: 1 pozycja, wersja v5' },
    preparedValue: { en: 'Prepared: 2 items, based on v5', pl: 'W pamięci: przygotowano 2 pozycje na podstawie v5' },
    fresh: { en: 'Re-read: 2 items, version v6', pl: 'Ponowny odczyt: 2 pozycje, wersja v6' },
    noRead: { en: 'No Order loaded yet', pl: 'Nie odczytano jeszcze Order' },
    itemCount: { en: 'Saved OrderItems', pl: 'Zapisane pozycje OrderItem' },
    orderVersion: { en: 'Order version', pl: 'Wersja Order' },
    counter: { en: 'Order counter', pl: 'Licznik w Order' },
    okay: { en: 'Invariant preserved', pl: 'Niezmiennik zachowany' },
    bad: { en: 'Invariant violated', pl: 'Niezmiennik naruszony' },
    introTick: {
      en: 'Nothing is executing yet. The database contains one item and Order is at version v5.',
      pl: 'Żadne żądanie jeszcze nie działa. W bazie jest jedna pozycja, a Order ma wersję v5.',
    },
    arriveTick: {
      en: 'Two HTTP requests are assigned to different PHP-FPM processes. No database writes have happened.',
      pl: 'Dwa żądania HTTP trafiły do osobnych procesów PHP-FPM. Nie wykonano jeszcze zapisów w bazie.',
    },
    readTick: {
      en: 'Each process separately loaded an Order with 1 item at v5. These objects are independent copies in PHP memory.',
      pl: 'Każdy proces osobno odczytał Order z jedną pozycją w wersji v5. To dwa niezależne obiekty w pamięci PHP.',
    },
    preparedTick: {
      en: 'Both calls to Order::addItem() pass in memory, each preparing 2 items. PostgreSQL still has only 1 committed item.',
      pl: 'Oba wywołania Order::addItem() przechodzą sprawdzenie reguły w pamięci i przygotowują stan z dwiema pozycjami. PostgreSQL nadal ma jedną zapisaną pozycję.',
    },
    firstCommit: {
      en: 'Request A commits Order + OrderItem #2 and advances the Order version to v6. Request B still holds v5.',
      pl: 'Żądanie A zatwierdza Order i OrderItem #2, a wersja Order rośnie do v6. Żądanie B nadal ma dane z v5.',
    },
    conflictTick: {
      en: 'Request B attempts to save using v5. The version check rejects its transaction; no OrderItem #3 is committed.',
      pl: 'Żądanie B próbuje zapisać zmianę na podstawie v5. Kontrola wersji odrzuca transakcję; OrderItem #3 nie zostaje zapisany.',
    },
    unsafeTick: {
      en: 'With no version check, request B also commits OrderItem #3, although the Order counter still says 2. The invariant is broken.',
      pl: 'Bez kontroli wersji żądanie B także zapisuje OrderItem #3, choć licznik w Order nadal wskazuje 2. Niezmiennik zostaje naruszony.',
    },
    retryTick: {
      en: 'Request B loads current v6 again, sees 2 items, and rejects the business action instead of retrying blindly.',
      pl: 'Żądanie B ponownie odczytuje aktualną wersję v6, widzi dwie pozycje i odrzuca zmianę zamiast ponawiać zapis w ciemno.',
    },
    unsafeRetryTick: {
      en: 'Without concurrency protection the extra item is already committed; a later read reveals 3 saved items.',
      pl: 'Bez zabezpieczenia dodatkowa pozycja została już zatwierdzona. Późniejszy odczyt ujawnia trzy zapisane pozycje.',
    },
    finalTick: {
      en: 'Final result: two items are committed. Both requests were allowed to compute, but only one update was accepted.',
      pl: 'Wynik: zapisano dwie pozycje. Oba żądania mogły obliczyć zmianę, ale tylko jeden zapis został zaakceptowany.',
    },
    unsafeFinal: {
      en: 'Final result: 3 saved items with a limit of 2. An in-memory business rule alone did not protect the database.',
      pl: 'Wynik: zapisano trzy pozycje przy limicie dwóch. Sam warunek w metodzie domenowej nie zabezpieczył bazy przed wyścigiem.',
    },
    root: { en: 'Order #42 · aggregate root', pl: 'Order #42 · korzeń agregatu' },
    rootDescription: {
      en: 'Every change inside the aggregate goes through the root. Here it checks the item limit.',
      pl: 'Każda zmiana wewnątrz agregatu przechodzi przez korzeń. Tutaj korzeń sprawdza limit pozycji.',
    },
    item1: 'OrderItem #1',
    item1Description: { en: 'Committed before both requests', pl: 'Zapisany przed oboma żądaniami' },
    item2: 'OrderItem #2',
    item2Pending: { en: 'Not committed yet', pl: 'Jeszcze niezatwierdzony' },
    item2Saved: { en: 'Committed by request A', pl: 'Zatwierdzony przez żądanie A' },
    item3: 'OrderItem #3',
    item3Saved: { en: 'Incorrectly committed by request B', pl: 'Błędnie zatwierdzony przez żądanie B' },
    boundaryTag: { en: 'IMMEDIATE CONSISTENCY', pl: 'SPÓJNOŚĆ NATYCHMIASTOWA' },
    atomicText: {
      en: 'Changing the mapped itemCount forces a versioned Order UPDATE. It and the OrderItem insert belong to one transaction; a version conflict rolls both back. Adding only a child in a OneToMany collection does not ensure a root version check.',
      pl: 'Zmiana mapowanego itemCount wymusza UPDATE Order z kontrolą wersji. Ten zapis i INSERT OrderItem należą do jednej transakcji; konflikt wersji wycofuje oba. Samo dodanie dziecka do kolekcji OneToMany nie zapewnia kontroli wersji korzenia.',
    },
    outsideLeft1: { en: 'AddOrderItem application service', pl: 'Serwis aplikacyjny AddOrderItem' },
    outsideLeft1Desc: {
      en: 'Loads Order by OrderId, calls addItem() and commits the change in one transaction.',
      pl: 'Pobiera Order według OrderId, wywołuje addItem() i zatwierdza zmianę w jednej transakcji.',
    },
    outsideLeft2: { en: 'Order list read model', pl: 'Model odczytu listy zamówień' },
    outsideLeft2Desc: {
      en: 'A separate projection, not part of the Order invariant.',
      pl: 'Osobna projekcja, nie należy do niezmiennika Order.',
    },
    outsideRight1: { en: 'Inventory', pl: 'Magazyn' },
    outsideRight1Desc: { en: 'Owns stock availability.', pl: 'Odpowiada za dostępność towaru.' },
    outsideRight2: { en: 'Payments', pl: 'Płatności' },
    outsideRight2Desc: { en: 'Owns charges and refunds.', pl: 'Odpowiadają za pobranie i zwrot środków.' },
    outsideRight3: { en: 'Shipping', pl: 'Wysyłka' },
    outsideRight3Desc: { en: 'Owns shipment creation.', pl: 'Odpowiada za utworzenie przesyłki.' },
    codeAgg: { en: 'Symfony / Doctrine · protected variant, mapping fragments', pl: 'Symfony / Doctrine · wariant z ochroną, fragmenty mapowania' },
    // Collapsed panel under the experiment: the same limit enforced by PostgreSQL, a niche alternative to the aggregate.
    dbAlt: {
      summary: {
        en: 'A niche alternative: the rule in PostgreSQL instead of the aggregate',
        pl: 'Alternatywa niszowa: reguła w PostgreSQL zamiast w agregacie',
      },
      lead: {
        en: 'PostgreSQL can enforce the same limit by itself. A trigger, a function the database runs after every <code>INSERT</code> into <code>order_items</code>, adds 1 to <code>orders.item_count</code>. The condition <code>CHECK (item_count BETWEEN 0 AND 2)</code> rejects a counter of 3. Next to a correct <code>Order</code> aggregate you do not add this: the rule would exist in two places, and both Doctrine and the trigger would write the counter.',
        pl: 'Tego samego limitu może pilnować sam PostgreSQL. Trigger, czyli funkcja uruchamiana przez bazę po każdym <code>INSERT</code> do <code>order_items</code>, dodaje 1 do <code>orders.item_count</code>. Warunek <code>CHECK (item_count BETWEEN 0 AND 2)</code> odrzuca licznik równy 3. Obok poprawnego agregatu <code>Order</code> tego nie dodajesz: reguła byłaby w dwóch miejscach, a licznik zmieniałyby i Doctrine, i trigger.',
      },
      when: {
        en: 'It pays off only when programs that bypass <code>Order</code> also write to these tables, for example a legacy system or several applications sharing one database. The database is then the one place every write passes through. The price is a rule hidden in PL/pgSQL: the PHP code does not show it, and you can test it only against a real database. Structural constraints, that is <code>UNIQUE</code>, foreign keys, <code>NOT NULL</code> and a <code>CHECK</code> on one row, belong in the database in every case, next to the aggregate too.',
        pl: 'Opłaca się to tylko wtedy, gdy do tych tabel piszą też programy, które omijają <code>Order</code>, np. stary system albo kilka aplikacji na jednej bazie. Wtedy baza jest jedynym miejscem, przez które przechodzi każdy zapis. Płacisz za to regułą ukrytą w PL/pgSQL: kod PHP jej nie pokazuje, a przetestujesz ją tylko na prawdziwej bazie. Ograniczenia struktury, czyli <code>UNIQUE</code>, klucze obce, <code>NOT NULL</code> i <code>CHECK</code> na jednym wierszu, dodajesz w bazie zawsze, także obok agregatu.',
      },
      raceTitle: { en: 'How the database settles the race from the experiment', pl: 'Jak baza rozstrzyga wyścig z eksperymentu' },
      steps: {
        en: [
          'Request A inserts item #2. The trigger runs <code>UPDATE orders SET item_count = item_count + 1</code>, so A sees 2 and holds the lock on row #42 until COMMIT.',
          'Request B inserts item #3. The trigger’s <code>UPDATE</code> of row #42 waits for A’s lock.',
          'A commits item #2 together with <code>item_count = 2</code>. B’s <code>UPDATE</code> continues on the committed row version and computes 3.',
          'A counter of 3 breaks <code>CHECK order_item_limit</code>. PostgreSQL returns SQLSTATE <code>23514</code> and aborts B’s transaction, so item #3 is never committed.',
          'Symfony turns SQLSTATE 23514 into <code>OrderItemLimitReached</code>. A retry would hit the same <code>CHECK</code>, so the application reports the error.',
        ],
        pl: [
          'Żądanie A wstawia pozycję #2. Trigger wykonuje <code>UPDATE orders SET item_count = item_count + 1</code>, więc A widzi 2 i trzyma blokadę wiersza #42 aż do COMMIT.',
          'Żądanie B wstawia pozycję #3. <code>UPDATE</code> wiersza #42 w triggerze czeka na blokadę A.',
          'A zatwierdza pozycję #2 razem z <code>item_count = 2</code>. <code>UPDATE</code> żądania B działa dalej na zatwierdzonej wersji wiersza i wylicza 3.',
          'Licznik równy 3 łamie <code>CHECK order_item_limit</code>. PostgreSQL zwraca SQLSTATE <code>23514</code> i przerywa transakcję B, więc pozycja #3 nie zostaje zapisana.',
          'Symfony zamienia SQLSTATE 23514 na <code>OrderItemLimitReached</code>. Ponowienie trafiłoby na ten sam <code>CHECK</code>, więc aplikacja zgłasza błąd.',
        ],
      },
      pgLead: {
        en: 'While request B waits (step 2), run the query from chapter 02 in another <code>psql</code> session:',
        pl: 'Gdy żądanie B czeka (krok 2), uruchom w innej sesji <code>psql</code> zapytanie z rozdziału 02:',
      },
      pgRead: {
        en: '<b>5201</b> is request A: its <code>INSERT</code> is done and the transaction stays open until COMMIT. <b>5202</b> is request B. The <code>query</code> column shows its <code>INSERT</code>, but what waits is the <code>UPDATE orders</code> inside the trigger, because it needs the row A has locked. After A’s COMMIT, B gets this error:',
        pl: '<b>5201</b> to żądanie A: jego <code>INSERT</code> już się wykonał, a transakcja czeka otwarta na COMMIT. <b>5202</b> to żądanie B. Kolumna <code>query</code> pokazuje jego <code>INSERT</code>, ale czeka <code>UPDATE orders</code> w triggerze, bo potrzebuje wiersza zablokowanego przez A. Po COMMIT A żądanie B dostaje taki błąd:',
      },
      pgError: {
        en: 'The exception message in Symfony contains the same text, but the code checks only SQLSTATE <code>23514</code>. The <code>!</code> in the psql prompt marks a failed transaction: PostgreSQL ignores further commands until it ends.',
        pl: 'Komunikat wyjątku w Symfony zawiera ten sam tekst, ale kod sprawdza tylko SQLSTATE <code>23514</code>. Wykrzyknik w znaku zachęty psql oznacza nieudaną transakcję: do jej końca PostgreSQL ignoruje kolejne polecenia.',
      },
      codeTitle: { en: 'Code: schema, trigger and application service', pl: 'Kod: schemat, trigger i serwis aplikacyjny' },
    },
    codeSaga: { en: 'Symfony Messenger · Saga orchestrator in the Orders context', pl: 'Symfony Messenger · orkiestrator Sagi w kontekście Zamówień' },
    play: { en: '▶ Play', pl: '▶ Odtwórz' },
    pause: { en: 'Ⅱ Pause', pl: 'Ⅱ Pauza' },
    replay: { en: '↺ Replay', pl: '↺ Odtwórz ponownie' },
    back: { en: '← Back', pl: '← Wstecz' },
    next: { en: 'Next →', pl: 'Dalej →' },
    reset: { en: 'Reset', pl: 'Od początku' },
    sagaOver: { en: 'EXPERIMENT / DISTRIBUTED PROCESS', pl: 'EKSPERYMENT / PROCES ROZPROSZONY' },
    sagaTitle: { en: 'Saga: an order crosses service boundaries', pl: 'Saga: zamówienie przekracza granice usług' },
    sagaLead: {
      en: 'A customer places an order and four services each do their part: Orders saves it, Inventory reserves the item, Payments charges the card and Shipping books a courier. Pick “Shipping fails” to see how the shop reverses the earlier steps.',
      pl: 'Klient składa zamówienie, a cztery usługi wykonują swoją część: Zamówienia je zapisują, Magazyn rezerwuje towar, Płatności obciążają kartę, a Wysyłka zamawia kuriera. Wybierz „Błąd wysyłki”, żeby zobaczyć, jak sklep odwraca wcześniejsze kroki.',
    },
    sagaTip: {
      en: [
        'How the Saga reverses a failed order',
        'Each service has its own database and commits on its own, so there is no single transaction to roll back. When Shipping fails after the card was charged, the coordinator sends new commands: Payments refunds the money, Inventory releases the stock and Orders cancels the order. These compensations are new business actions. They can fail too, so they need retries.',
      ],
      pl: [
        'Jak Saga odwraca nieudane zamówienie',
        'Każda usługa ma własną bazę i sama zatwierdza zmiany, więc nie ma jednej transakcji, którą można wycofać. Gdy Wysyłka zawiedzie po obciążeniu karty, koordynator wysyła nowe polecenia: Płatności zwracają pieniądze, Magazyn zwalnia rezerwację, a Zamówienia anulują zamówienie. Kompensacje to nowe operacje biznesowe. One też mogą się nie udać, więc potrzebują ponowień.',
      ],
    },
    sagaFailure: { en: 'Shipping fails', pl: 'Błąd wysyłki' },
    sagaSuccess: { en: 'All steps succeed', pl: 'Wszystkie kroki udane' },
    sagaSummary1Title: { en: '1. An order starts a process', pl: '1. Zamówienie rozpoczyna proces' },
    sagaSummary2Title: { en: '2. Services commit separately', pl: '2. Usługi zatwierdzają osobno' },
    sagaSummary3Title: { en: '3. The Saga repairs partial failure', pl: '3. Saga naprawia częściowe niepowodzenie' },
    saga1: {
      en: 'The coordinator receives progress events and selects the next command.',
      pl: 'Koordynator odbiera zdarzenia i wybiera kolejne polecenia.',
    },
    saga2: {
      en: 'There is no global transaction or isolation between concurrent Sagas. One service may be updated while another step is pending. Each service must protect its own invariants, such as available stock, against concurrent changes.',
      pl: 'Nie ma globalnej transakcji ani izolacji między równoległymi Sagami. Jedna usługa może mieć już zmieniony stan, gdy kolejna wciąż czeka. Każda usługa musi chronić własne reguły, np. dostępność towaru, przed konkurującymi zmianami.',
    },
    saga3: {
      en: 'If shipping fails after payment, the Saga requests a refund, releases stock and cancels the order.',
      pl: 'Jeśli wysyłka zawiedzie po pobraniu płatności, Saga zleca zwrot środków, zwolnienie rezerwacji towaru i anulowanie zamówienia.',
    },
    sagaClient: { en: 'Customer / API', pl: 'Klient / API' },
    sagaClientDesc: { en: 'POST /orders starts the process.', pl: 'POST /orders rozpoczyna proces.' },
    sagaLocal: { en: 'One transaction boundary per service', pl: 'Osobna granica transakcji w każdej usłudze' },
    sagaLocalDesc: {
      en: 'Each service commits its own database changes. A local COMMIT cannot atomically include an external payment or shipping API. This model assumes their outcomes are known; an unknown result needs idempotency and reconciliation with the provider.',
      pl: 'Każda usługa zatwierdza zmiany we własnej bazie. Lokalny COMMIT nie obejmie atomowo zewnętrznego API płatności lub wysyłki. Model zakłada znane wyniki tych operacji; przy nieznanym wyniku potrzebne są idempotencja i uzgodnienie stanu z dostawcą.',
    },
    sagaEventual: { en: 'Temporary inconsistency', pl: 'Przejściowa niespójność' },
    sagaEventualDesc: {
      en: 'During the process, services can have different statuses.',
      pl: 'Podczas procesu usługi mogą mieć różne statusy.',
    },
    sagaComp: { en: 'Compensating actions', pl: 'Operacje kompensujące' },
    sagaCompDesc: {
      en: 'Refund and release are new transactions, not one global ROLLBACK.',
      pl: 'Zwrot pieniędzy i zwolnienie rezerwacji to nowe transakcje, nie jeden globalny ROLLBACK.',
    },
    sagaOut: { en: 'Final business outcome', pl: 'Końcowy wynik biznesowy' },
    sagaBus: { en: 'Commands & events', pl: 'Polecenia i zdarzenia' },
    sagaBusDesc: {
      en: 'Messages connect the orchestrator and services; production systems need durable delivery, retries and idempotent consumers.',
      pl: 'Komunikaty łączą orkiestrator z usługami; system produkcyjny wymaga trwałego dostarczania, ponowień i idempotentnych odbiorców.',
    },
    orchestrator: { en: 'Order Saga', pl: 'Saga zamówienia' },
    orchestratorDesc: {
      en: 'The Saga is an application service in the Orders context. It saves its current step and decides which command to send next.',
      pl: 'Saga to serwis aplikacyjny w kontekście Zamówień. Zapisuje bieżący krok i decyduje, które polecenie wysłać dalej.',
    },
    sagaStepLabel: { en: 'Saved step', pl: 'Zapisany krok' },
    clientName: { en: 'Client', pl: 'Klient' },
    clientTask: { en: 'Sends the order', pl: 'Wysyła zamówienie' },
    ordersContext: { en: 'Orders context', pl: 'Kontekst Zamówień' },
    seqStepHead: { en: 'Step', pl: 'Krok' },
    seqLegend: {
      command: { en: 'Command: the Saga tells a service what to do', pl: 'Polecenie: Saga zleca usłudze jej część pracy' },
      event: { en: 'Event: the service reports the result', pl: 'Zdarzenie: usługa zgłasza wynik' },
      failure: { en: 'The service reports a failure', pl: 'Usługa zgłasza błąd' },
      compensation: {
        en: 'Compensation: a new command that reverses an earlier step',
        pl: 'Kompensacja: nowe polecenie, które odwraca wcześniejszy krok',
      },
      localTx: { en: 'Service transaction with its own COMMIT', pl: 'Transakcja usługi z własnym COMMIT' },
      sagaTx: {
        en: 'Saga handler: saves the new step and the next command in one transaction',
        pl: 'Handler Sagi: zapisuje nowy krok i następne polecenie w jednej transakcji',
      },
    },
    serviceNames: [
      { en: 'Orders service', pl: 'Zamówienia' },
      { en: 'Inventory service', pl: 'Magazyn' },
      { en: 'Payments service', pl: 'Płatności' },
      { en: 'Shipping service', pl: 'Wysyłka' },
    ],
    sagaFooter: {
      en: 'One service cannot undo another service’s committed transaction. A compensation is a new business action. Time steps are illustrative, not latency measurements.',
      pl: 'Usługa nie może bezpośrednio wycofać zatwierdzonej transakcji innej usługi. Kompensacja to nowa operacja biznesowa. Takty są umowne i nie oznaczają rzeczywistych opóźnień.',
    },
    sagaDoneFail: {
      en: 'The process ends with cancellation after compensation.',
      pl: 'Proces kończy się anulowaniem po wykonaniu kompensacji.',
    },
    sagaDoneOk: { en: 'The process ends with a confirmed order.', pl: 'Proces kończy się potwierdzeniem zamówienia.' },
    sagaFoot: {
      en: 'Eventual consistency is conditional on reliable progress and recovery. Compensations themselves may fail and require retries or intervention.',
      pl: 'Spójność ostateczna zależy od skutecznego przetwarzania i odzyskiwania po błędach. Kompensacje także mogą zawieść i wymagać ponowień albo interwencji.',
    },
    sagaNote1: {
      en: 'Where it runs: the Saga is an application service of the Orders context. Inventory, Payments and Shipping know nothing about it. They handle commands and publish events.',
      pl: 'Gdzie działa: Saga to serwis aplikacyjny kontekstu Zamówień. Magazyn, Płatności i Wysyłka nic o niej nie wiedzą, tylko przyjmują polecenia i publikują zdarzenia.',
    },
    sagaNote2: {
      en: 'One step, one transaction: the new Saga step and the next command are saved together in the Orders database. The relay process from chapter 02 sends the command on.',
      pl: 'Jeden krok, jedna transakcja: nowy krok Sagi i następne polecenie trafiają razem do bazy Zamówień. Proces relay z rozdziału 02 wysyła polecenie dalej.',
    },
    sagaNote3: {
      en: 'Duplicates: the handler locks the Saga row and checks the current step, so a second copy of an event changes nothing. If a handler fails, Messenger retries the message.',
      pl: 'Duplikaty: handler blokuje wiersz Sagi i sprawdza bieżący krok, więc drugi egzemplarz zdarzenia niczego nie zmienia. Jeśli handler zakończy się błędem, Messenger ponowi obsługę komunikatu.',
    },
    sagaFlowFailure: [
      { en: 'Create the order', pl: 'Utworzenie zamówienia' },
      { en: 'Reserve stock', pl: 'Rezerwacja towaru' },
      { en: 'Charge payment', pl: 'Pobranie płatności' },
      { en: 'Shipment fails', pl: 'Błąd wysyłki' },
      { en: 'Refund payment', pl: 'Zwrot płatności' },
      { en: 'Release stock', pl: 'Zwolnienie rezerwacji' },
      { en: 'Cancel order', pl: 'Anulowanie zamówienia' },
    ],
    sagaFlowSuccess: [
      { en: 'Create the order', pl: 'Utworzenie zamówienia' },
      { en: 'Reserve stock', pl: 'Rezerwacja towaru' },
      { en: 'Charge payment', pl: 'Pobranie płatności' },
      { en: 'Create shipment', pl: 'Utworzenie wysyłki' },
      { en: 'Confirm order', pl: 'Potwierdzenie zamówienia' },
    ],
    sources: { en: 'Technical references:', pl: 'Źródła techniczne:' },
    sagaEvents: {
      failure: [
        [
          { en: 'Start · no transaction yet', pl: 'Start · brak transakcji' },
          {
            en: 'An order request arrives. Each service owns its data and transaction boundaries.',
            pl: 'Przychodzi żądanie złożenia zamówienia. Każda usługa odpowiada za swoje dane i granice transakcji.',
          },
        ],
        [
          { en: 'Orders commits PENDING + outbox event', pl: 'Zamówienia: PENDING + outbox' },
          {
            en: 'The new order and its OrderPlaced event are saved together in the Orders database transaction.',
            pl: 'Zamówienie i zdarzenie OrderPlaced zapisano w jednej lokalnej transakcji bazy Orders.',
          },
        ],
        [
          { en: 'Inventory commits a reservation', pl: 'Magazyn zatwierdza rezerwację' },
          {
            en: 'Inventory reserves one unit and commits locally. Other services cannot roll this transaction back.',
            pl: 'Magazyn rezerwuje jedną sztukę i wykonuje lokalny COMMIT. Inne usługi nie mogą wycofać tej transakcji.',
          },
        ],
        [
          { en: 'Payments commits the charge', pl: 'Płatności zatwierdzają pobranie środków' },
          {
            en: 'Payments captures the charge and commits locally. The order is not delivered yet.',
            pl: 'Usługa płatności pobiera środki i wykonuje lokalny COMMIT. Zamówienie nie zostało jeszcze dostarczone.',
          },
        ],
        [
          { en: 'Shipping fails', pl: 'Wysyłka kończy się błędem' },
          {
            en: 'Shipment creation fails. The process is temporarily inconsistent: stock is reserved and money was collected, but shipping did not succeed.',
            pl: 'Nie udało się utworzyć przesyłki. Stan przejściowy: towar zarezerwowany, pieniądze pobrane, ale wysyłka się nie udała.',
          },
        ],
        [
          { en: 'Compensation 1 · refund the charge', pl: 'Kompensacja 1 · zwrot płatności' },
          {
            en: 'Payments issues a new idempotent refund transaction. The earlier charge is not rolled back.',
            pl: 'Płatności wykonują nową, idempotentną transakcję zwrotu. Wcześniejsze pobranie środków nie jest wycofywane.',
          },
        ],
        [
          { en: 'Compensation 2 · release reserved inventory', pl: 'Kompensacja 2 · zwolnienie rezerwacji' },
          {
            en: 'Inventory commits a new release transaction. The item is available again.',
            pl: 'Magazyn wykonuje nową transakcję zwalniającą rezerwację. Towar jest znów dostępny.',
          },
        ],
        [
          { en: 'Orders commits CANCELLED', pl: 'Zamówienia ustawiają CANCELLED' },
          {
            en: 'Orders marks the order cancelled; the orchestrator durably records the final state.',
            pl: 'Zamówienie zostaje anulowane; orkiestrator zapisuje końcowy stan procesu.',
          },
        ],
        [
          { en: 'Compensation complete', pl: 'Kompensacja zakończona' },
          {
            en: 'The charge is refunded, stock is released, and the order is cancelled. Individual databases reached a valid business outcome eventually.',
            pl: 'Płatność zwrócona, rezerwacja zwolniona, zamówienie anulowane. Osobne bazy ostatecznie doszły do spójnego biznesowo wyniku.',
          },
        ],
      ],
      success: [
        [
          { en: 'Start · no transaction yet', pl: 'Start · brak transakcji' },
          {
            en: 'The purchase starts. Each service manages its own database transaction.',
            pl: 'Rozpoczyna się zakup. Każda usługa zarządza swoją transakcją.',
          },
        ],
        [
          { en: 'Orders commits PENDING + outbox', pl: 'Zamówienie PENDING + outbox' },
          {
            en: 'An order and its outgoing event are written atomically within Orders.',
            pl: 'Zamówienie i zdarzenie wyjściowe zapisano atomowo w bazie Orders.',
          },
        ],
        [
          { en: 'Inventory reserves stock', pl: 'Magazyn rezerwuje towar' },
          {
            en: 'Inventory commits its reservation and reports success.',
            pl: 'Magazyn zatwierdza rezerwację i zgłasza sukces.',
          },
        ],
        [
          { en: 'Payments commits the charge', pl: 'Płatności pobierają środki' },
          {
            en: 'A payment is captured in the Payments database.',
            pl: 'Baza płatności zapisuje pobranie środków.',
          },
        ],
        [
          { en: 'Shipping accepts the shipment', pl: 'Wysyłka przyjmuje przesyłkę' },
          {
            en: 'Shipping commits shipment creation and confirms the operation.',
            pl: 'Usługa wysyłki tworzy przesyłkę i potwierdza operację.',
          },
        ],
        [
          { en: 'Orders commits CONFIRMED', pl: 'Zamówienie CONFIRMED' },
          {
            en: 'The process orchestrator updates the Order status to CONFIRMED.',
            pl: 'Orkiestrator zmienia status zamówienia na CONFIRMED.',
          },
        ],
        [
          { en: 'Complete', pl: 'Koniec procesu' },
          {
            en: 'All local operations succeeded. There was no global ACID transaction across the four services.',
            pl: 'Wszystkie lokalne operacje się powiodły. Nie było jednej transakcji ACID obejmującej cztery usługi.',
          },
        ],
      ],
    },
    status: {
      '1 available': { en: '1 available', pl: '1 szt. dostępna' },
      '—': '—',
      PENDING: { en: 'PENDING', pl: 'OCZEKUJE' },
      RESERVED: { en: 'RESERVED', pl: 'ZAREZERWOWANY' },
      CHARGED: { en: 'CHARGED', pl: 'POBRANO' },
      FAILED: { en: 'FAILED', pl: 'BŁĄD' },
      REFUNDED: { en: 'REFUNDED', pl: 'ZWRÓCONO' },
      RELEASED: { en: 'RELEASED', pl: 'ZWOLNIONY' },
      CANCELLED: { en: 'CANCELLED', pl: 'ANULOWANE' },
      SHIPMENT_CREATED: { en: 'SHIPMENT_CREATED', pl: 'UTWORZONO PRZESYŁKĘ' },
      CONFIRMED: { en: 'CONFIRMED', pl: 'POTWIERDZONE' },
      'HTTP → FPM': 'HTTP → FPM',
      'read v5': { en: 'read v5', pl: 'odczyt v5' },
      'local 2 / 2': { en: 'local 2 / 2', pl: 'lokalnie 2 / 2' },
      'confirmed ✓': { en: 'confirmed ✓', pl: 'potwierdzone ✓' },
      'stale v5': { en: 'stale v5', pl: 'stara wersja v5' },
      'conflict / rejected': { en: 'conflict / rejected', pl: 'konflikt / odrzucone' },
      'full → rejected': { en: 'full → rejected', pl: 'brak miejsc' },
      rejected: { en: 'rejected', pl: 'odrzucone' },
    },
    termAria: { en: 'Explain term', pl: 'Wyjaśnij pojęcie' },
    termTitle: { en: 'Term explanation', pl: 'Wyjaśnienie pojęcia' },
    memoryNote: {
      en: 'The Order object exists in <b>this PHP process’s memory</b>. That alone does not update PostgreSQL.',
      pl: 'Obiekt Order istnieje w pamięci <b>tego procesu PHP</b>. To jeszcze nie zmienia stanu PostgreSQL.',
    },
    counterMismatch: {
      en: 'counter disagrees with committed items',
      pl: 'licznik nie zgadza się z zapisanymi pozycjami',
    },
    aggregateLabel: { en: 'AGGREGATE · Order', pl: 'AGREGAT · Order' },
    invariantShort: { en: 'Invariant: at most 2 items.', pl: 'Niezmiennik: maksymalnie 2 pozycje.' },
    whatHappened: { en: 'What happened', pl: 'Co się wydarzyło' },
    remember: { en: 'Remember:', pl: 'Zapamiętaj:' },
    serviceTasks: [
      { en: 'Order status', pl: 'Status zamówienia' },
      { en: 'Stock reservation', pl: 'Rezerwacja towaru' },
      { en: 'Charge or refund', pl: 'Pobranie lub zwrot środków' },
      { en: 'Shipment creation', pl: 'Utworzenie przesyłki' },
    ],
    coordinatorLabel: { en: 'PROCESS COORDINATOR', pl: 'KOORDYNATOR PROCESU' },
    nodeNames: {
      'Client UI': { en: 'Client UI', pl: 'Interfejs klienta' },
      Orders: { en: 'Orders', pl: 'Zamówienia' },
      Inventory: { en: 'Inventory', pl: 'Magazyn' },
      Payments: { en: 'Payments', pl: 'Płatności' },
      Shipping: { en: 'Shipping', pl: 'Wysyłka' },
      Saga: { en: 'Saga', pl: 'Koordynator' },
    },
    linkKinds: {
      http: { en: 'http', pl: 'HTTP' },
      command: { en: 'command', pl: 'polecenie' },
      event: { en: 'event', pl: 'zdarzenie' },
      compensation: { en: 'compensation', pl: 'kompensacja' },
    },
  },
  consistencyNav: {
    primer: { en: 'More about consistency boundaries', pl: 'Więcej o granicach spójności' },
    extra: { en: 'More on messages and service transactions', pl: 'Więcej o komunikatach i transakcjach usług' },
  },
  dock: {
    back: { en: 'Back', pl: 'Wstecz' },
    play: { en: 'Play', pl: 'Odtwórz' },
    pause: { en: 'Pause', pl: 'Pauza' },
    replay: { en: 'Replay', pl: 'Odtwórz ponownie' },
    next: { en: 'Next', pl: 'Dalej' },
    reset: { en: 'Reset', pl: 'Od początku' },
    step: { en: 'Step', pl: 'Krok' },
    position: { en: 'Position on the time axis', pl: 'Położenie na osi czasu' },
    saga: {
      title: { en: 'SAGA · PLAYBACK', pl: 'SAGA · STEROWANIE' },
      label: { en: 'Saga playback controls', pl: 'Sterowanie przebiegiem Sagi' },
      start: { en: 'Initial state', pl: 'Stan początkowy' },
    },
    compare: {
      title: { en: 'FOUR APPROACHES · PLAYBACK', pl: 'CZTERY PODEJŚCIA · STEROWANIE' },
      label: { en: 'Comparison playback controls', pl: 'Sterowanie porównaniem' },
    },
  },
  footer: {
    assumptions: {
      en: 'Model assumptions: discrete time units, a single idealized FIFO queue representing admission to FPM (real queues may exist in Nginx, kernel sockets and proxies), one request per FPM worker, idealized CPU-core scheduling, equal per-request cost, two processes on two CPU cores for every approach in the comparison (requests alternate between event-loop processes) and non-blocking I/O clients for the event-loop and Fibers models, except in the scenario with a blocking driver. Each in-flight query has an available database connection. We omit post-response work (such as kernel.terminate), process overhead, database connection limits, network variation and operating-system scheduling details. Not a throughput benchmark; Symfony controller examples correspond to equivalent, not identical, HTTP handlers in each runtime. References: <a href="https://reactphp.org/http/" rel="noopener" target="_blank">ReactPHP HTTP</a> · <a href="https://symfony.com/doc/current/messenger.html" rel="noopener" target="_blank">Symfony Messenger</a> · <a href="https://www.php.net/manual/en/install.fpm.configuration.php" rel="noopener" target="_blank">PHP-FPM</a> · <a href="https://www.php.net/manual/en/features.commandline.webserver.php" rel="noopener" target="_blank">PHP built-in server</a> · <a href="https://nodejs.org/en/learn/asynchronous-work/event-loop-timers-and-nexttick" rel="noopener" target="_blank">Node.js event loop</a>.',
      pl: 'Założenia modelu: umowne jednostki czasu, jedna uproszczona kolejka FIFO przed FPM (w praktyce kolejki mogą występować w Nginx, gniazdach systemowych i serwerach pośredniczących), jedno żądanie na proces FPM, uproszczony przydział czasu CPU, jednakowy koszt żądań, dwa procesy na dwóch rdzeniach CPU dla każdego podejścia w porównaniu (żądania trafiają na zmianę do procesów z pętlą zdarzeń) oraz nieblokujące klienty I/O w modelach pętli zdarzeń i Fibers, z wyjątkiem scenariusza z blokującym sterownikiem. Każde zapytanie w toku ma dostępne połączenie z bazą. Pomijamy pracę po wysłaniu odpowiedzi (np. kernel.terminate), narzut procesów, limity połączeń z bazą, zmienność sieci i szczegóły planisty systemu. To nie jest benchmark przepustowości. Przykładom kontrolerów Symfony odpowiadają równoważne, a nie identyczne handlery HTTP w pozostałych środowiskach. Źródła: <a href="https://reactphp.org/http/" rel="noopener" target="_blank">ReactPHP HTTP</a> · <a href="https://symfony.com/doc/current/messenger.html" rel="noopener" target="_blank">Symfony Messenger</a> · <a href="https://www.php.net/manual/en/install.fpm.configuration.php" rel="noopener" target="_blank">PHP-FPM</a> · <a href="https://www.php.net/manual/en/features.commandline.webserver.php" rel="noopener" target="_blank">Serwer wbudowany PHP</a> · <a href="https://nodejs.org/en/learn/asynchronous-work/event-loop-timers-and-nexttick" rel="noopener" target="_blank">Pętla zdarzeń Node.js</a>.',
    },
  },
  // Chapter introductions and summaries. Lists and tables are rendered by app.js from data-lesson-* attributes.
  lessons: {
    common: {
      intro: { en: 'Introduction', pl: 'Wprowadzenie' },
      terms: { en: 'Key terms', pl: 'Pojęcia na start' },
      example: { en: 'An everyday example', pl: 'Przykład z życia' },
      summary: { en: 'Summary', pl: 'Podsumowanie' },
      rules: { en: 'Main rules', pl: 'Najważniejsze zasady' },
      more: { en: 'Further reading', pl: 'Dowiedz się więcej' },
      practice: { en: 'In practice', pl: 'W praktyce' },
    },
    php: {
      title: {
        en: 'Why do customers wait when the CPU is idle?',
        pl: 'Dlaczego klienci czekają, skoro procesor nic nie robi?',
      },
      problem: {
        en: 'A Symfony shop feels fast while only a few people use it. When a sale starts and six customers open the same page in the same second, some of them wait for a response even though the server’s CPU is almost idle. To see why, separate two questions: who <b>handles</b> a request (a PHP process) and who <b>executes</b> its code at a given moment (a CPU core).',
        pl: 'Sklep na Symfony działa szybko, dopóki odwiedza go kilka osób. Gdy rusza promocja i sześciu klientów otwiera tę samą stronę w tej samej sekundzie, część z nich czeka na odpowiedź, choć procesor serwera prawie nic nie robi. Żeby zrozumieć dlaczego, rozdziel dwa pytania: co <b>obsługuje</b> żądanie (proces PHP) i co w danej chwili <b>wykonuje</b> jego kod (rdzeń CPU).',
      },
      plan: {
        en: 'First you follow a request through Nginx and PHP-FPM. Then you run a simulation with several customers and see how one request shares a CPU with another. Finally you check how the same state looks in <code>htop</code> on a Linux server.',
        pl: 'Najpierw prześledzisz drogę żądania przez Nginx i PHP-FPM. Potem uruchomisz symulację z kilkoma klientami i zobaczysz, jak żądania dzielą się procesorem. Na koniec sprawdzisz, jak ten sam stan wygląda w <code>htop</code> na serwerze z Linuksem.',
      },
      terms: [
        {
          en: ['Process', 'A running program with its own memory. Every process has a number (PID) and shows up in <code>ps</code> or <code>htop</code>.'],
          pl: ['Proces', 'Uruchomiony program z własną pamięcią. Każdy proces ma numer (PID) i widać go w <code>ps</code> albo <code>htop</code>.'],
        },
        {
          en: ['PHP-FPM worker', 'A PHP process that PHP-FPM starts in advance and keeps in a pool. It handles one HTTP request at a time.'],
          pl: ['Worker PHP-FPM', 'Proces PHP, który PHP-FPM uruchamia z wyprzedzeniem i trzyma w puli. Obsługuje jedno żądanie HTTP naraz.'],
        },
        {
          en: ['CPU core', 'The part of the processor that executes instructions. Simplified: one core runs the code of one process at a time. <code>nproc</code> prints how many you have.'],
          pl: ['Rdzeń CPU', 'Część procesora, która wykonuje instrukcje. W uproszczeniu jeden rdzeń w danej chwili wykonuje kod jednego procesu. Ich liczbę pokaże polecenie <code>nproc</code>.'],
        },
        {
          en: ['I/O (input/output)', 'Waiting for something outside the CPU: a database reply, the disk or another service over the network. While it waits, a process does not need a core.'],
          pl: ['I/O (wejście/wyjście)', 'Czekanie na coś spoza procesora: odpowiedź bazy danych, dysku albo innej usługi w sieci. W tym czasie proces nie potrzebuje rdzenia.'],
        },
        {
          en: ['Concurrency and parallelism', 'Concurrent: several requests are in progress during the same period. Parallel: their code runs at the same instant, which needs several cores.'],
          pl: ['Współbieżność i równoległość', 'Współbieżnie: kilka żądań jest w toku w tym samym okresie. Równolegle: ich kod wykonuje się w tej samej chwili, a do tego potrzeba kilku rdzeni.'],
        },
      ],
      summaryTitle: { en: 'Summary: processes, cores and waiting', pl: 'Podsumowanie: procesy, rdzenie i czekanie' },
      rules: {
        en: [
          'A PHP-FPM worker handles one request at a time and becomes free only when the script finishes.',
          'Waiting for the database occupies a worker but not a core. In <code>htop</code> such a process is in state <code>S</code> and uses no CPU.',
          'The number of cores limits how many processes run code at the same instant. The others stay in state <code>R</code> and wait their turn.',
          'Concurrency means several requests in progress during the same period. Parallelism needs several cores.',
          '<code>php -S</code> handles requests one by one in a single process, so it is for local development only.',
        ],
        pl: [
          'Worker PHP-FPM obsługuje jedno żądanie naraz i zwalnia się dopiero wtedy, gdy skrypt skończy pracę.',
          'Czekanie na bazę zajmuje workera, ale nie rdzeń. W <code>htop</code> taki proces ma stan <code>S</code> i nie zużywa CPU.',
          'Liczba rdzeni ogranicza, ile procesów wykonuje kod w tej samej chwili. Pozostałe mają stan <code>R</code> i czekają na swoją kolej.',
          'Współbieżność to kilka żądań w toku w tym samym okresie. Równoległość wymaga kilku rdzeni.',
          '<code>php -S</code> obsługuje żądania po kolei w jednym procesie, więc nadaje się tylko do pracy lokalnej.',
        ],
      },
      table: {
        title: { en: 'What shortens the queue?', pl: 'Co skróci kolejkę?' },
        head: ['', { en: 'More workers (pm.max_children)', pl: 'Więcej workerów (pm.max_children)' }, { en: 'More CPU cores', pl: 'Więcej rdzeni CPU' }],
        rows: [
          {
            en: ['Requests mostly wait for the database (I/O)', 'Helps: more requests can wait at the same time.', 'Helps little: the cores are idle most of the time anyway.'],
            pl: ['Żądania głównie czekają na bazę (I/O)', 'Pomaga: więcej żądań może czekać jednocześnie.', 'Pomaga niewiele: rdzenie i tak przez większość czasu stoją.'],
          },
          {
            en: ['Requests mostly compute (CPU)', 'Does not help beyond the number of cores: extra workers wait in state R.', 'Helps: more requests compute at once.'],
            pl: ['Żądania głównie liczą (CPU)', 'Nie pomaga ponad liczbę rdzeni: dodatkowe workery czekają w stanie R.', 'Pomaga: więcej żądań liczy jednocześnie.'],
          },
        ],
        common: {
          en: ['In both cases', 'Every worker uses RAM and, while it handles a request, usually one database connection. Server memory and PostgreSQL <code>max_connections</code> set the upper limit for <code>pm.max_children</code>.'],
          pl: ['W obu przypadkach', 'Każdy worker zajmuje pamięć RAM, a podczas obsługi żądania zwykle także jedno połączenie z bazą. Górną granicę <code>pm.max_children</code> wyznaczają pamięć serwera i <code>max_connections</code> w PostgreSQL.'],
        },
      },
      links: [
        { en: ['PHP-FPM pool configuration', 'https://www.php.net/manual/en/install.fpm.configuration.php'], pl: ['Konfiguracja puli PHP-FPM', 'https://www.php.net/manual/en/install.fpm.configuration.php'] },
        { en: ['PHP-FPM status page', 'https://www.php.net/manual/en/fpm.status.php'], pl: ['Strona statusu PHP-FPM', 'https://www.php.net/manual/en/fpm.status.php'] },
        ['htop', 'https://htop.dev/'],
        { en: ['ps(1): process state codes', 'https://man7.org/linux/man-pages/man1/ps.1.html'], pl: ['ps(1): kody stanów procesu', 'https://man7.org/linux/man-pages/man1/ps.1.html'] },
      ],
      next: { en: 'Next chapter: database locks →', pl: 'Następny rozdział: blokady w bazie →' },
    },
    locks: {
      title: {
        en: 'What happens when two requests change the same data?',
        pl: 'Co się dzieje, gdy dwa żądania zmieniają te same dane?',
      },
      problem: {
        en: 'In the previous chapter several FPM workers handled requests at the same time. That makes the application faster, but it brings a new problem. Suppose two requests read the same customer balance, and each adds its amount in PHP and saves the result. One of the changes disappears without any error. This chapter shows how the database helps prevent that and how to send events to other systems safely.',
        pl: 'W poprzednim rozdziale kilka workerów FPM obsługiwało żądania jednocześnie. Dzięki temu aplikacja działa szybciej, ale pojawia się nowy problem. Załóżmy, że dwa żądania odczytują to samo saldo klienta, a potem każde dodaje w PHP swoją kwotę i zapisuje wynik. Jedna ze zmian znika bez żadnego błędu. Ten rozdział pokazuje, jak baza danych pomaga temu zapobiec i jak bezpiecznie wysyłać zdarzenia do innych systemów.',
      },
      plan: {
        en: 'First you see a lost update and two ways to prevent it: optimistic and pessimistic locking. Then you compare them in SQL and Doctrine code. Finally you meet the transactional outbox pattern and check how several processes can share work without sending the same event twice.',
        pl: 'Najpierw zobaczysz utraconą aktualizację i dwa sposoby ochrony: blokowanie optymistyczne i pesymistyczne. Potem porównasz je w kodzie SQL i Doctrine. Na koniec poznasz wzorzec transactional outbox i sprawdzisz, jak kilka procesów dzieli się pracą, nie wysyłając dwa razy tego samego zdarzenia.',
      },
      terms: [
        {
          en: ['Transaction', 'A group of statements between <code>BEGIN</code> and <code>COMMIT</code>. The database saves all of them or none.'],
          pl: ['Transakcja', 'Grupa zapytań między <code>BEGIN</code> a <code>COMMIT</code>. Baza zapisuje wszystkie albo żadnego.'],
        },
        {
          en: ['COMMIT and ROLLBACK', '<code>COMMIT</code> makes a transaction’s changes permanent and visible to other sessions. <code>ROLLBACK</code> discards them.'],
          pl: ['COMMIT i ROLLBACK', '<code>COMMIT</code> zatwierdza zmiany transakcji i od tej chwili widzą je inne sesje. <code>ROLLBACK</code> je wycofuje.'],
        },
        {
          en: ['Race condition', 'A bug whose result depends on which request gets there first. It appears only with an unlucky ordering, so tests easily miss it.'],
          pl: ['Wyścig (race condition)', 'Błąd, którego wynik zależy od tego, które żądanie zdąży pierwsze. Pojawia się tylko przy pechowej kolejności, dlatego łatwo go przeoczyć w testach.'],
        },
        {
          en: ['Row lock', 'A marker in the database that makes other transactions wait before they change or lock that row, until the current transaction ends.'],
          pl: ['Blokada wiersza', 'Znacznik w bazie, przez który inne transakcje muszą poczekać ze zmianą lub zablokowaniem wiersza, aż bieżąca transakcja się skończy.'],
        },
        {
          en: ['READ COMMITTED', 'PostgreSQL’s default isolation level. Each statement sees data committed before it started. It does not stop a lost update when the application first reads and then writes.'],
          pl: ['READ COMMITTED', 'Domyślny poziom izolacji w PostgreSQL. Każde zapytanie widzi dane zatwierdzone przed jego startem. Nie chroni przed utraconą aktualizacją, gdy aplikacja najpierw czyta, a potem zapisuje.'],
        },
        {
          en: ['Message broker', 'A separate system, for example RabbitMQ, that services use to pass events to each other. It keeps its own state, independent of the database.'],
          pl: ['Broker wiadomości', 'Osobny system, np. RabbitMQ, przez który usługi przekazują sobie zdarzenia. Ma własny stan, niezależny od bazy danych.'],
        },
      ],
      summaryTitle: { en: 'Summary: concurrent writes to the database', pl: 'Podsumowanie: współbieżne zapisy w bazie' },
      rules: {
        en: [
          'Read, compute in PHP and write are three separate steps. When two requests interleave them, one change can vanish without an error: a lost update.',
          'Optimistic locking stops nobody. The conflict shows up at the write, and the application has to re-read the data and check its rules again.',
          'Pessimistic locking (<code>SELECT … FOR UPDATE</code>) makes the second request wait until <code>COMMIT</code>. Keep such a transaction short and free of network calls.',
          'A simple increment fits in one atomic statement: <code>UPDATE … SET balance = balance + 10</code>.',
          'The transactional outbox saves the event in the same transaction as the data. Relays share the work with <code>FOR UPDATE SKIP LOCKED</code>, and the consumer still has to skip duplicates.',
        ],
        pl: [
          'Odczyt, obliczenie w PHP i zapis to trzy osobne kroki. Gdy dwa żądania je przeplotą, jedna zmiana może zniknąć bez błędu. To utracona aktualizacja.',
          'Blokowanie optymistyczne nikogo nie zatrzymuje. Konflikt wychodzi przy zapisie, a aplikacja musi odczytać dane ponownie i jeszcze raz sprawdzić reguły.',
          'Blokowanie pesymistyczne (<code>SELECT … FOR UPDATE</code>) każe drugiemu żądaniu czekać do <code>COMMIT</code>. Taka transakcja powinna być krótka i bez wywołań sieciowych.',
          'Proste zwiększenie wartości zmieścisz w jednym atomowym zapytaniu: <code>UPDATE … SET balance = balance + 10</code>.',
          'Transactional outbox zapisuje zdarzenie w tej samej transakcji co dane. Procesy relay dzielą się pracą dzięki <code>FOR UPDATE SKIP LOCKED</code>, a odbiorca i tak musi pomijać duplikaty.',
        ],
      },
      table: [
        {
          title: { en: 'Three ways to protect the balance', pl: 'Trzy sposoby ochrony salda' },
          head: ['', { en: 'No protection', pl: 'Bez ochrony' }, { en: 'Optimistic', pl: 'Optymistyczne' }, { en: 'Pessimistic', pl: 'Pesymistyczne' }],
          rows: [
            {
              en: ['Result in the simulation', '120: A’s change is lost', '130', '130'],
              pl: ['Wynik w symulacji', '120: zmiana A ginie', '130', '130'],
            },
            {
              en: ['What the second request does', 'Overwrites the first result', 'Gets a conflict, re-reads and retries', 'Waits for the lock, then reads the current value'],
              pl: ['Co robi drugie żądanie', 'Nadpisuje wynik pierwszego', 'Dostaje konflikt, czyta ponownie i ponawia zapis', 'Czeka na blokadę, potem czyta aktualną wartość'],
            },
            {
              en: ['SQL', '—', '<code>UPDATE … WHERE version = :v</code>', '<code>SELECT … FOR UPDATE</code>'],
              pl: ['SQL', '—', '<code>UPDATE … WHERE version = :v</code>', '<code>SELECT … FOR UPDATE</code>'],
            },
            {
              en: ['Doctrine', '—', '<code>#[ORM\\Version]</code>', '<code>LockMode::PESSIMISTIC_WRITE</code>'],
              pl: ['Doctrine', '—', '<code>#[ORM\\Version]</code>', '<code>LockMode::PESSIMISTIC_WRITE</code>'],
            },
            {
              en: ['When to choose it', 'Never for a write that depends on a read', 'Conflicts are rare, for example editing a form', 'Conflicts are frequent and the operation is short, for example a balance or a stock level'],
              pl: ['Kiedy wybrać', 'Nigdy przy zapisie zależnym od odczytu', 'Konflikty są rzadkie, np. edycja formularza', 'Konflikty są częste, a operacja krótka, np. saldo albo stan magazynu'],
            },
            {
              en: ['Cost', 'Wrong data with no error message', 'A retry after a conflict', 'Other requests wait; with several locks there is a risk of deadlock'],
              pl: ['Koszt', 'Błędne dane bez komunikatu o błędzie', 'Ponowienie po konflikcie', 'Inne żądania czekają; przy kilku blokadach grozi zakleszczenie'],
            },
          ],
          common: {
            en: ['In common', 'The race happens in the database, so it threatens PHP-FPM, ReactPHP and Node.js alike, no matter how many processes run.'],
            pl: ['Wspólne', 'Wyścig powstaje w bazie, więc tak samo grozi w PHP-FPM, ReactPHP i Node.js, niezależnie od liczby procesów.'],
          },
        },
        {
          title: { en: 'Outbox: three ways to fetch events', pl: 'Outbox: trzy sposoby pobierania zdarzeń' },
          head: ['', { en: 'No lock', pl: 'Bez blokady' }, 'FOR UPDATE', 'FOR UPDATE SKIP LOCKED'],
          rows: [
            {
              en: ['What relay B does', 'Takes the same event #101', 'Waits for the lock on #101, then takes #102', 'Skips #101 and takes #102 at once'],
              pl: ['Co robi relay B', 'Bierze to samo zdarzenie #101', 'Czeka na blokadę #101, potem bierze #102', 'Pomija #101 i od razu bierze #102'],
            },
            {
              en: ['Duplicates in this run', '2 extra copies of #101', 'None', 'None'],
              pl: ['Duplikaty w tym przebiegu', '2 dodatkowe kopie #101', 'Brak', 'Brak'],
            },
            {
              en: ['Claiming three events', 'No claim at all', 'Longer: relays wait in turn', 'Short: all three at once'],
              pl: ['Przydział trzech zdarzeń', 'Brak przydziału', 'Dłuższy: relaye czekają po kolei', 'Krótki: wszystkie trzy naraz'],
            },
          ],
          common: {
            en: ['In common', 'A crash after sending but before saving <code>published</code> can cause a resend. The consumer deduplicates by event ID.'],
            pl: ['Wspólne', 'Awaria po wysłaniu, a przed zapisem <code>published</code>, może spowodować ponowną wysyłkę. Odbiorca deduplikuje po ID zdarzenia.'],
          },
        },
      ],
      links: [
        ['PostgreSQL: Explicit Locking', 'https://www.postgresql.org/docs/current/explicit-locking.html'],
        ['PostgreSQL: Transaction Isolation', 'https://www.postgresql.org/docs/current/transaction-iso.html'],
        ['PostgreSQL: pg_stat_activity', 'https://www.postgresql.org/docs/current/monitoring-stats.html#MONITORING-PG-STAT-ACTIVITY-VIEW'],
        ['Doctrine: Transactions and Concurrency', 'https://www.doctrine-project.org/projects/doctrine-orm/en/current/reference/transactions-and-concurrency.html'],
        ['microservices.io: Transactional outbox', 'https://microservices.io/patterns/data/transactional-outbox.html'],
      ],
      next: { en: 'Next chapter: event loops →', pl: 'Następny rozdział: pętle zdarzeń →' },
    },
    node: {
      title: {
        en: 'What does a process do while it waits for the database?',
        pl: 'Co robi proces, gdy czeka na bazę danych?',
      },
      problem: {
        en: 'In chapter 01 an FPM worker sat idle while it waited for PostgreSQL, yet it could not take another request. Runtimes such as Node.js and ReactPHP use that time differently: one process sends the query and moves straight on to the next request. This chapter compares four approaches on the same machine and shows when that difference pays off and when it gains nothing.',
        pl: 'W rozdziale 01 worker FPM bezczynnie czekał na PostgreSQL, a mimo to nie mógł przyjąć innego żądania. Środowiska takie jak Node.js i ReactPHP wykorzystują ten czas inaczej: jeden proces wysyła zapytanie i od razu zajmuje się kolejnym żądaniem. Ten rozdział porównuje cztery podejścia na tej samej maszynie i pokazuje, kiedy ta różnica się opłaca, a kiedy nic nie daje.',
      },
      example: {
        en: 'A waiter who takes an order and then stands by the kitchen until the dish is ready serves one table at a time. That is an FPM worker. A waiter who takes orders at other tables in the meantime is an event loop. The cook works at the same speed either way, so the second waiter gains time only when the first one would be standing idle.',
        pl: 'Kelner, który przyjmuje zamówienie i stoi przy kuchni, aż danie będzie gotowe, obsługuje jeden stolik naraz. Tak działa worker FPM. Kelner, który w tym czasie przyjmuje zamówienia przy innych stolikach, to pętla zdarzeń. Kucharz gotuje w tym samym tempie, więc drugi kelner zyskuje czas tylko wtedy, gdy pierwszy stałby bezczynnie.',
      },
      plan: {
        en: 'First look at how an event loop works. Then run the comparison: four timelines share one clock, and each scenario changes one thing for all of them. The summary puts the four approaches in one table.',
        pl: 'Najpierw zobacz, jak działa pętla zdarzeń. Potem uruchom porównanie: cztery wykresy mają wspólny zegar, a każdy scenariusz zmienia jedną rzecz dla wszystkich. Podsumowanie zestawia cztery podejścia w jednej tabeli.',
      },
      terms: [
        {
          en: ['Blocking I/O', 'The call returns only with the result, for example a PDO query. Until then the process does nothing else.'],
          pl: ['Blokujące I/O', 'Funkcja wraca dopiero z wynikiem, np. zapytanie przez PDO. Do tego czasu proces nie robi nic innego.'],
        },
        {
          en: ['Non-blocking I/O', 'The call sends the query and returns at once. The result arrives later as an event.'],
          pl: ['Nieblokujące I/O', 'Funkcja wysyła zapytanie i od razu wraca. Wynik przyjdzie później jako zdarzenie.'],
        },
        {
          en: ['Event loop', 'A loop inside one process that runs handler code for ready events one at a time: new requests and database replies.'],
          pl: ['Pętla zdarzeń', 'Pętla w jednym procesie, która po kolei uruchamia kod obsługi gotowych zdarzeń: nowych żądań i odpowiedzi z bazy.'],
        },
        {
          en: ['Promise and await', 'A promise stands for a future result. <code>await</code> pauses the current handler until the result arrives, while the loop handles other events.'],
          pl: ['Promise i await', 'Promise to obietnica przyszłego wyniku. <code>await</code> wstrzymuje bieżący handler do czasu wyniku, a pętla w tym czasie obsługuje inne zdarzenia.'],
        },
        {
          en: ['Fiber', 'A PHP 8.1 feature that pauses a function midway and resumes it later. It lets asynchronous PHP code read from top to bottom.'],
          pl: ['Fiber', 'Mechanizm PHP 8.1, który wstrzymuje funkcję w połowie i wznawia ją później. Dzięki niemu asynchroniczny kod PHP czyta się z góry na dół.'],
        },
      ],
      diagramTitle: { en: 'How an event loop works', pl: 'Jak działa pętla zdarzeń' },
      loop: [
        { en: ['Event', 'A new HTTP request or a database reply'], pl: ['Zdarzenie', 'Nowe żądanie HTTP albo odpowiedź z bazy'] },
        { en: ['Queue', 'Ready events wait their turn'], pl: ['Kolejka', 'Gotowe zdarzenia czekają na swoją kolej'] },
        { en: ['The loop runs a handler', 'The code runs to the end or to the first <code>await</code>'], pl: ['Pętla uruchamia handler', 'Kod działa do końca albo do pierwszego <code>await</code>'] },
        { en: ['Query in flight', 'The database works while the loop picks the next event'], pl: ['Zapytanie w toku', 'Baza pracuje, a pętla bierze następne zdarzenie'] },
      ],
      loopReturn: {
        en: 'When the database replies, the operating system tells the loop, and the reply becomes a new event.',
        pl: 'Gdy baza odpowie, system operacyjny powiadamia pętlę, a odpowiedź staje się nowym zdarzeniem.',
      },
      loopContrast: {
        en: 'An FPM worker has no such loop. After sending a query it sleeps until the reply arrives and only then runs the rest of the code.',
        pl: 'Worker FPM nie ma takiej pętli. Po wysłaniu zapytania śpi, aż przyjdzie odpowiedź, i dopiero wtedy wykonuje resztę kodu.',
      },
      summaryTitle: { en: 'Summary: waiting versus computing', pl: 'Podsumowanie: czekanie a liczenie' },
      rules: {
        en: [
          'An FPM worker waits together with its request. With many database queries you need more workers to serve more customers at once.',
          'Fibers shorten one request that has several independent queries, but the worker still serves only that request.',
          'An event loop (ReactPHP, Node.js) serves many requests in one process, as long as every I/O client is non-blocking. A single PDO call stops the whole loop.',
          'With pure computation all four approaches finish together: the number of cores sets the pace.',
          'No approach removes database races. Shared data needs the protection from chapter 02.',
        ],
        pl: [
          'Worker FPM czeka razem ze swoim żądaniem. Przy wielu zapytaniach do bazy potrzeba więcej workerów, żeby obsłużyć więcej klientów naraz.',
          'Fibers skracają jedno żądanie, które ma kilka niezależnych zapytań, ale worker nadal obsługuje tylko to żądanie.',
          'Pętla zdarzeń (ReactPHP, Node.js) obsługuje wiele żądań w jednym procesie, o ile każdy klient I/O jest nieblokujący. Jedno wywołanie PDO zatrzymuje całą pętlę.',
          'Przy samych obliczeniach wszystkie cztery podejścia kończą razem: tempo wyznacza liczba rdzeni.',
          'Żadne podejście nie usuwa wyścigów w bazie. Wspólne dane trzeba chronić tak jak w rozdziale 02.',
        ],
      },
      table: {
        title: { en: 'The four approaches side by side', pl: 'Cztery podejścia w jednym zestawieniu' },
        head: ['', 'PHP-FPM', 'PHP-FPM + Fibers', 'ReactPHP', 'Node.js'],
        rows: [
          {
            en: ['Requests at once in one process', '1', '1', 'Many', 'Many'],
            pl: ['Żądania naraz w jednym procesie', '1', '1', 'Wiele', 'Wiele'],
          },
          {
            en: ['While a request waits for the database', 'The worker sleeps', 'The worker waits, but other queries of the same request can be in flight', 'The loop serves other requests', 'The loop serves other requests'],
            pl: ['Gdy żądanie czeka na bazę', 'Worker śpi', 'Worker czeka, ale inne zapytania tego żądania mogą być w toku', 'Pętla obsługuje inne żądania', 'Pętla obsługuje inne żądania'],
          },
          {
            en: ['Last response, scenario 01', '21', '21', '9', '9'],
            pl: ['Ostatnia odpowiedź, scenariusz 01', '21', '21', '9', '9'],
          },
          {
            en: ['Last response, scenario 02', '36', '21', '9', '9'],
            pl: ['Ostatnia odpowiedź, scenariusz 02', '36', '21', '9', '9'],
          },
          {
            en: ['With a blocking driver (PDO)', 'Works as usual', 'Loses its advantage', 'Blocks the whole loop', 'Blocks the whole loop'],
            pl: ['Z blokującym sterownikiem (PDO)', 'Działa jak zwykle', 'Traci przewagę', 'Blokuje całą pętlę', 'Blokuje całą pętlę'],
          },
          {
            en: ['What ps shows', 'master + <code>php-fpm: pool www</code>', 'Same as PHP-FPM', '<code>php server.php</code> × 2', '<code>node server.js</code>: primary + workers'],
            pl: ['Co pokaże ps', 'master + <code>php-fpm: pool www</code>', 'To samo co PHP-FPM', '<code>php server.php</code> × 2', '<code>node server.js</code>: primary + workery'],
          },
        ],
        common: {
          en: ['In common', 'The number of cores limits computation, and shared data in the database needs a lock or a version check.'],
          pl: ['Wspólne', 'Obliczenia ogranicza liczba rdzeni, a wspólne dane w bazie wymagają blokady lub kontroli wersji.'],
        },
      },
      links: [
        ['Node.js: The Event Loop', 'https://nodejs.org/en/learn/asynchronous-work/event-loop-timers-and-nexttick'],
        ['PHP: Fibers', 'https://www.php.net/manual/en/language.fibers.php'],
        ['ReactPHP', 'https://reactphp.org/'],
        ['AMPHP', 'https://amphp.org/'],
      ],
      next: { en: 'Next chapter: immediate consistency →', pl: 'Następny rozdział: spójność natychmiastowa →' },
    },
    aggregate: {
      title: {
        en: 'How do you keep a business rule when two requests change the same order?',
        pl: 'Jak pilnować reguły biznesowej, gdy dwa żądania zmieniają to samo zamówienie?',
      },
      problem: {
        en: 'In chapter 02 we protected one number, a balance. In a real application a rule often spans several objects. For example, an order may have at most two items. <code>Order::addItem()</code> checks the limit, but it does so on a copy of the data in PHP memory. If two requests check the limit at the same moment, both decide there is room, and the database ends up with three items. Domain-Driven Design (DDD) calls such a group of objects an <em>aggregate</em> and protects it as a whole.',
        pl: 'W rozdziale 02 chroniliśmy jedną liczbę: saldo. W prawdziwej aplikacji reguła często obejmuje kilka obiektów. Na przykład zamówienie może mieć najwyżej dwie pozycje. Metoda <code>Order::addItem()</code> sprawdza limit, ale robi to na kopii danych w pamięci PHP. Jeśli dwa żądania sprawdzą limit w tej samej chwili, oba uznają, że jest miejsce, i w bazie znajdą się trzy pozycje. Domain-Driven Design (DDD) nazywa taką grupę obiektów <em>agregatem</em> i chroni ją jako całość.',
      },
      plan: {
        en: 'Run the experiment with and without a version check. Look at the boundary map to see how an aggregate differs from a bounded context. Finally compare the data in PHP memory with the committed state in the database.',
        pl: 'Uruchom eksperyment z kontrolą wersji i bez niej. Spójrz na mapę granic i zobacz, czym agregat różni się od kontekstu ograniczonego. Na końcu porównaj dane w pamięci PHP ze stanem zatwierdzonym w bazie.',
      },
      terms: [
        {
          en: ['Aggregate', 'A group of objects that change together, such as an order and its items. You save it in one transaction.'],
          pl: ['Agregat', 'Grupa obiektów, które zmieniają się razem, np. zamówienie i jego pozycje. Zapisujesz ją w jednej transakcji.'],
        },
        {
          en: ['Aggregate root', 'The main object of the aggregate, here <code>Order</code>. Outside code changes items only through its methods, so the root can enforce the rules.'],
          pl: ['Korzeń agregatu', 'Główny obiekt agregatu, tutaj <code>Order</code>. Kod z zewnątrz zmienia pozycje tylko przez jego metody, więc korzeń może pilnować reguł.'],
        },
        {
          en: ['Invariant', 'A rule that must hold after every <code>COMMIT</code>, for example “at most two items”.'],
          pl: ['Niezmiennik', 'Reguła, która musi być prawdziwa po każdym <code>COMMIT</code>, np. „najwyżej dwie pozycje”.'],
        },
        {
          en: ['Immediate consistency', 'The rule holds right after the transaction commits. Nobody ever sees a saved state that breaks it.'],
          pl: ['Spójność natychmiastowa', 'Reguła jest spełniona od razu po zatwierdzeniu transakcji. Nikt nigdy nie zobaczy zapisanego stanu, który ją łamie.'],
        },
        {
          en: ['Bounded context', 'A larger area of the system with its own model and vocabulary, such as Ordering. It contains many aggregates and is not one transaction.'],
          pl: ['Kontekst ograniczony', 'Większy obszar systemu z własnym modelem i słownictwem, np. Ordering. Zawiera wiele agregatów i nie jest jedną transakcją.'],
        },
      ],
      summaryTitle: { en: 'Summary: the aggregate boundary', pl: 'Podsumowanie: granica agregatu' },
      rules: {
        en: [
          'An aggregate is the boundary within which a business rule must hold after every <code>COMMIT</code>.',
          'A rule check in a domain method works on an in-memory copy. Without a version check or a lock, two requests can slip past it.',
          'Change items only through the root, and save the root with its version even when only a child changes. Adding an element to a collection does not bump the <code>Order</code> version by itself.',
          'After a conflict, reload the aggregate and check the rule again. A blind retry of the write would break the limit.',
          'Keep a business rule that spans many rows in the aggregate: <code>Order</code> is the one place in the code where you look for it. The database guards the structure of the data: <code>UNIQUE</code>, foreign keys, <code>NOT NULL</code>, a <code>CHECK</code> on one row.',
          'Rule of thumb: one transaction changes one aggregate. Pass changes to other aggregates and services through events, which is the topic of chapter 05.',
        ],
        pl: [
          'Agregat to granica, w której reguła biznesowa musi być prawdziwa po każdym <code>COMMIT</code>.',
          'Sprawdzenie reguły w metodzie domenowej działa na kopii w pamięci. Bez kontroli wersji lub blokady dwa żądania mogą je obejść.',
          'Zmieniaj pozycje tylko przez korzeń i zapisuj korzeń z wersją, nawet gdy zmienia się tylko pozycja. Samo dodanie elementu do kolekcji nie podbije wersji <code>Order</code>.',
          'Po konflikcie wczytaj agregat ponownie i jeszcze raz sprawdź regułę. Ślepe ponowienie zapisu złamałoby limit.',
          'Regułę biznesową obejmującą wiele wierszy trzymaj w agregacie: <code>Order</code> to jedno miejsce w kodzie, w którym jej szukasz. Baza pilnuje struktury danych: <code>UNIQUE</code>, kluczy obcych, <code>NOT NULL</code>, <code>CHECK</code> na jednym wierszu.',
          'Zasada praktyczna: jedna transakcja zmienia jeden agregat. Zmiany w innych agregatach i usługach przekazuj zdarzeniami. O tym jest rozdział 05.',
        ],
      },
      table: {
        title: { en: 'The experiment side by side', pl: 'Eksperyment w jednym zestawieniu' },
        head: ['', { en: 'Version check ON', pl: 'Kontrola wersji włączona' }, { en: 'Without version check', pl: 'Bez kontroli wersji' }],
        rows: [
          {
            en: ['Request B’s write', 'Rejected: the row is already at v6', 'Accepted despite stale data'],
            pl: ['Zapis żądania B', 'Odrzucony: wiersz ma już wersję v6', 'Przyjęty mimo nieaktualnych danych'],
          },
          {
            en: ['Items in the database', '2 of 2', '3 with a limit of 2'],
            pl: ['Pozycje w bazie', '2 z 2', '3 przy limicie 2'],
          },
          {
            en: ['What customer B sees', 'A message that the order is full', 'Success, although the rule is broken'],
            pl: ['Co widzi klient B', 'Komunikat, że zamówienie jest pełne', 'Sukces, choć reguła została złamana'],
          },
        ],
        common: {
          en: ['In common', 'Both variants start from Order #42 with one item and get the same two simultaneous requests.'],
          pl: ['Wspólne', 'Oba warianty zaczynają od zamówienia #42 z jedną pozycją i dostają te same dwa równoczesne żądania.'],
        },
      },
      links: [
        ['Martin Fowler: DDD Aggregate', 'https://martinfowler.com/bliki/DDD_Aggregate.html'],
        ['Vaughn Vernon: Effective Aggregate Design', 'https://www.dddcommunity.org/library/vernon_2011/'],
        ['Doctrine: Transactions and Concurrency', 'https://www.doctrine-project.org/projects/doctrine-orm/en/current/reference/transactions-and-concurrency.html'],
        ['PostgreSQL: Check Constraints', 'https://www.postgresql.org/docs/current/ddl-constraints.html#DDL-CONSTRAINTS-CHECK-CONSTRAINTS'],
        ['PostgreSQL: Trigger Functions in PL/pgSQL', 'https://www.postgresql.org/docs/current/plpgsql-trigger.html'],
        ['PostgreSQL: Read Committed Isolation Level', 'https://www.postgresql.org/docs/current/transaction-iso.html#XACT-READ-COMMITTED'],
      ],
      next: { en: 'Next chapter: eventual consistency →', pl: 'Następny rozdział: spójność ostateczna →' },
    },
    saga: {
      title: {
        en: 'What if one operation spans several services with separate databases?',
        pl: 'Co zrobić, gdy jedna operacja obejmuje kilka usług z osobnymi bazami?',
      },
      problem: {
        en: 'Placing an order takes four services: Orders, Inventory, Payments and Shipping. Each has its own database, so one transaction cannot cover them and there is no single <code>ROLLBACK</code> when something fails. If Shipping fails after the money was taken, the system has to undo the earlier steps with new operations. Such a process is called a Saga, and the state it eventually reaches is called eventual consistency.',
        pl: 'Złożenie zamówienia to praca czterech usług: Zamówień, Magazynu, Płatności i Wysyłki. Każda ma własną bazę, więc jedna transakcja ich nie obejmie i w razie błędu nie ma jednego <code>ROLLBACK</code>. Jeśli Wysyłka zawiedzie, gdy pieniądze są już pobrane, system musi cofnąć wcześniejsze kroki nowymi operacjami. Taki proces to Saga, a stan, do którego w końcu dochodzi, nazywamy spójnością ostateczną.',
      },
      example: {
        en: 'You plan a trip and book a flight, a hotel and a car on three different websites. When the car rental says no, you cannot turn back time. You cancel the hotel and the flight separately, and each cancellation is a new operation that can also fail.',
        pl: 'Planujesz wyjazd i rezerwujesz lot, hotel i samochód na trzech różnych stronach. Gdy wypożyczalnia odmówi, nie cofniesz czasu. Odwołujesz hotel i lot osobno, a każde odwołanie to nowa operacja, która też może się nie udać.',
      },
      plan: {
        en: 'Run the variant in which shipping fails. On the diagram, follow the commands the coordinator sends and the events each service sends back, then watch it undo the earlier steps in reverse order. Then compare it with the variant in which everything succeeds. The summary puts immediate and eventual consistency side by side.',
        pl: 'Uruchom wariant z błędem wysyłki. Na schemacie śledź polecenia, które wysyła koordynator, i zdarzenia, którymi odpowiadają usługi, a potem zobacz, jak cofa wcześniejsze kroki w odwrotnej kolejności. Następnie porównaj go z wariantem, w którym wszystko się udaje. Podsumowanie zestawia spójność natychmiastową i ostateczną.',
      },
      terms: [
        {
          en: ['Local transaction', 'A transaction in one service’s database. Another service cannot roll it back.'],
          pl: ['Transakcja lokalna', 'Transakcja w bazie jednej usługi. Inna usługa nie może jej wycofać.'],
        },
        {
          en: ['Saga', 'A process made of consecutive local transactions. A coordinator, also called an orchestrator, sends commands and reacts to the results.'],
          pl: ['Saga', 'Proces złożony z kolejnych transakcji lokalnych. Koordynator, nazywany też orkiestratorem, wysyła polecenia i reaguje na wyniki.'],
        },
        {
          en: ['Compensation', 'A new operation that reverses the effect of an earlier step, for example a refund after a charge.'],
          pl: ['Kompensacja', 'Nowa operacja, która odwraca skutek wcześniejszego kroku, np. zwrot pieniędzy po ich pobraniu.'],
        },
        {
          en: ['Eventual consistency', 'For a while the services disagree. Once every step and compensation has run, the system reaches a consistent outcome.'],
          pl: ['Spójność ostateczna', 'Przez pewien czas usługi mają różne stany. Gdy wykonają się wszystkie kroki i kompensacje, system dochodzi do spójnego wyniku.'],
        },
        {
          en: ['Idempotency', 'Processing the same message again does not change the outcome. For example, it does not charge the card twice.'],
          pl: ['Idempotencja', 'Ponowne przetworzenie tego samego komunikatu nie zmienia wyniku. Na przykład nie obciąża karty drugi raz.'],
        },
      ],
      summaryTitle: {
        en: 'Summary: immediate versus eventual consistency',
        pl: 'Podsumowanie: spójność natychmiastowa a ostateczna',
      },
      rules: {
        en: [
          'When data has different owners and separate databases, there is no single transaction and no single <code>ROLLBACK</code>.',
          'A Saga splits the process into local transactions. Compensations, which are new business operations, repair a failure in a later step.',
          'Intermediate states are normal. The interface should show them honestly, for example “Order in progress”, instead of pretending that everything has already happened.',
          'Messages have to survive crashes (an outbox), and consumers have to be idempotent, because the same message can arrive twice.',
          'Each service still protects its own data from races, like the aggregate in chapter 04.',
        ],
        pl: [
          'Gdy dane mają różnych właścicieli i osobne bazy, nie ma jednej transakcji ani jednego <code>ROLLBACK</code>.',
          'Saga dzieli proces na transakcje lokalne. Błąd w późniejszym kroku naprawiają kompensacje, czyli nowe operacje biznesowe.',
          'Stany pośrednie są normalne. Interfejs powinien uczciwie je pokazywać, np. „Zamówienie w realizacji”, zamiast udawać, że wszystko już się stało.',
          'Komunikaty muszą przetrwać awarie (outbox), a odbiorcy muszą być idempotentni, bo ten sam komunikat może przyjść dwa razy.',
          'Każda usługa nadal chroni własne dane przed wyścigiem, tak jak agregat w rozdziale 04.',
        ],
      },
      practice: {
        en: 'In Symfony the Saga steps run in <code>bin/console messenger:consume</code> processes. <code>bin/console messenger:stats</code> shows how many messages wait in each transport, and <code>bin/console messenger:failed:show</code> lists the ones that failed.',
        pl: 'W Symfony kroki Sagi wykonują procesy <code>bin/console messenger:consume</code>. Polecenie <code>bin/console messenger:stats</code> pokaże, ile komunikatów czeka w każdym transporcie, a <code>bin/console messenger:failed:show</code> wypisze te, które się nie udały.',
      },
      table: {
        title: { en: 'Two kinds of consistency side by side', pl: 'Dwa rodzaje spójności w jednym zestawieniu' },
        head: ['', { en: 'Immediate (chapter 04)', pl: 'Natychmiastowa (rozdział 04)' }, { en: 'Eventual (chapter 05)', pl: 'Ostateczna (rozdział 05)' }],
        rows: [
          {
            en: ['Scope', 'One aggregate in one database', 'Several services, each with its own database'],
            pl: ['Zakres', 'Jeden agregat w jednej bazie', 'Kilka usług, każda z własną bazą'],
          },
          {
            en: ['Transactions', 'One', 'One per step and one per compensation'],
            pl: ['Liczba transakcji', 'Jedna', 'Po jednej na każdy krok i każdą kompensację'],
          },
          {
            en: ['When the rule holds', 'Right after <code>COMMIT</code>', 'When the whole process ends'],
            pl: ['Kiedy reguła jest spełniona', 'Od razu po <code>COMMIT</code>', 'Gdy skończy się cały proces'],
          },
          {
            en: ['On failure', '<code>ROLLBACK</code> undoes everything', 'Compensations undo earlier steps'],
            pl: ['Co przy błędzie', '<code>ROLLBACK</code> wycofuje wszystko', 'Kompensacje cofają wcześniejsze kroki'],
          },
          {
            en: ['Intermediate states', 'Invisible to others', 'Visible, for example money taken but no shipment'],
            pl: ['Stany pośrednie', 'Niewidoczne dla innych', 'Widoczne, np. pieniądze pobrane, a przesyłki brak'],
          },
          {
            en: ['Tools', 'A transaction plus a version check or a lock', 'Outbox, retries, idempotency, stored Saga state'],
            pl: ['Narzędzia', 'Transakcja oraz kontrola wersji lub blokada', 'Outbox, ponowienia, idempotencja, zapisany stan Sagi'],
          },
        ],
        common: {
          en: ['In common', 'In both cases every single transaction has to be correct and safe from races.'],
          pl: ['Wspólne', 'W obu przypadkach każda pojedyncza transakcja musi być poprawna i odporna na wyścigi.'],
        },
      },
      links: [
        ['microservices.io: Saga', 'https://microservices.io/patterns/data/saga.html'],
        ['Microsoft Learn: Saga design pattern', 'https://learn.microsoft.com/en-us/azure/architecture/patterns/saga'],
        ['Symfony Messenger', 'https://symfony.com/doc/current/messenger.html'],
        ['Garcia-Molina, Salem: Sagas (1987, PDF)', 'https://www.cs.cornell.edu/andru/cs711/2002fa/reading/sagas.pdf'],
      ],
      next: { en: 'Back to chapter 01 ↺', pl: 'Wróć do rozdziału 01 ↺' },
    },
  },
  // Chapter 01: the request simulation as seen in htop and on the PHP-FPM status page.
  linux: {
    overline: { en: 'Observe in Linux', pl: 'Podgląd w Linuksie' },
    title: { en: 'The same moment in htop', pl: 'Ten sam moment w htop' },
    lead: {
      en: 'A server has no timeline, but it does show its processes. This view shows what <code>htop</code> would display on an Ubuntu 24.04 server with PHP 8.3 at the moment selected in the request simulation, next to the PHP-FPM status page. The buttons drive that simulation’s clock, so a step here also moves the simulation above. The button in the top right corner opens this view in a side window, so you can compare it with the simulation without scrolling.',
      pl: 'Serwer nie pokaże osi czasu, ale pokaże procesy. Ten widok odtwarza, co wyświetliłby <code>htop</code> na serwerze z Ubuntu 24.04 i PHP 8.3 w chwili wybranej w symulacji żądań, a obok stronę statusu PHP-FPM. Przyciski sterują zegarem tamtej symulacji, więc krok wykonany tutaj zmienia też symulację powyżej. Przycisk w prawym górnym rogu otwiera ten widok w oknie obok, żeby porównywać go z symulacją bez przewijania.',
    },
    chip: { en: 'Mock-up · Ubuntu 24.04 · PHP 8.3', pl: 'Makieta · Ubuntu 24.04 · PHP 8.3' },
    config: {
      en: '{env} · workers: {workers} · cores: {cores} · {load}',
      pl: '{env} · workery: {workers} · rdzenie: {cores} · {load}',
    },
    htopTitle: { en: 'htop · filter (F4): php · tree view (F5)', pl: 'htop · filtr (F4): php · widok drzewa (F5)' },
    statusTitle: { en: 'PHP-FPM status page', pl: 'Strona statusu PHP-FPM' },
    notes: {
      master: { en: 'supervises the workers; handles no requests', pl: 'nadzoruje workery, sam nie obsługuje żądań' },
      cpu: { en: '{id}: executes PHP', pl: '{id}: wykonuje PHP' },
      ready: { en: '{id}: ready, waiting for a free core', pl: '{id}: gotowy, czeka na wolny rdzeń' },
      io: { en: '{id}: sleeps in poll(), waiting for PostgreSQL', pl: '{id}: śpi w poll(), czeka na PostgreSQL' },
      idle: { en: 'free: waits in accept() for a request', pl: 'wolny: czeka w accept() na żądanie' },
      coreBusy: { en: 'runs {id}', pl: 'wykonuje {id}' },
      coreIdle: { en: 'idle', pl: 'bezczynny' },
      same: { en: '= “{label}” in the simulation', pl: '= „{label}” w symulacji' },
      idleWorkers: { en: 'free workers', pl: 'wolne workery' },
      accepted: { en: 'requests taken by workers so far', pl: 'żądania przyjęte dotąd przez workery' },
    },
    builtinStatus: {
      en: 'php -S has no status page. Waiting requests sit in the socket backlog of its single process.',
      pl: 'php -S nie ma strony statusu. Czekające żądania stoją w kolejce gniazda jego jedynego procesu.',
    },
    legend: {
      en: [
        '<b>Column S</b> is the process state. <code>R</code> means the process is running or queued for a core. <code>S</code> means it sleeps: it waits for I/O or for a new request and uses no CPU.',
        '<b>The numbered bars</b> are the cores. htop usually counts them from zero (a setting controls this), so “CPU core 1” in the simulation is <code>0</code> here.',
        '<b>Tasks</b> counts every process on the system, not only the filtered ones, and <code>thr</code> counts their extra threads. <b>running</b> counts processes in state <code>R</code>, including htop itself while it reads the data. When it stays above the number of cores, the server is short of CPU.',
        '<b>Load average</b> is the average number of processes in state <code>R</code> or <code>D</code> (uninterruptible wait, usually for the disk) over the last 1, 5 and 15 minutes. The mock-up assumes the selected scenario ran for the last minute. Waiting for PostgreSQL over the network is state <code>S</code>, so it does not raise this number.',
        '<b>RES</b> is the physical memory of a process in KiB, including the shared part <code>SHR</code> (such as OPcache), and <b>MEM%</b> is its share of RAM. Each worker also has memory of its own, so <code>pm.max_children</code> depends on the server’s RAM. <b>TIME+</b> is the total CPU time of a process and grows only for a worker that computes.',
        '<b>CPU%</b> in this mock-up covers one time unit. Real htop averages over about 1.5 seconds, so two processes sharing one core show about 50% each.',
        '<b>The status page</b> shows counters kept by PHP-FPM itself. <code>listen queue</code> counts requests waiting for a free worker, and <code>max listen queue</code> the longest queue since the start.',
        '<b>The mock-up pool differs from Ubuntu’s default.</b> It matches <code>pm = static</code> and <code>listen = 127.0.0.1:9000</code>. The default <code>www.conf</code> has <code>pm = dynamic</code>, where FPM starts and stops workers up to <code>pm.max_children</code>, and the Unix socket <code>/run/php/php8.3-fpm.sock</code>, with which <code>listen queue</code> may stay at 0. <code>max children reached</code> counts only with <code>pm = dynamic</code> and <code>ondemand</code>.',
      ],
      pl: [
        '<b>Kolumna S</b> to stan procesu. <code>R</code> znaczy, że proces pracuje albo czeka w kolejce do rdzenia. <code>S</code> znaczy, że śpi: czeka na I/O lub na nowe żądanie i nie zużywa CPU.',
        '<b>Ponumerowane paski</b> to rdzenie. htop zwykle liczy je od zera (decyduje o tym ustawienie), więc „Rdzeń CPU 1” z symulacji to tutaj <code>0</code>.',
        '<b>Tasks</b> liczy wszystkie procesy w systemie, nie tylko te z filtra, a <code>thr</code> to ich dodatkowe wątki. <b>running</b> to procesy w stanie <code>R</code>, łącznie z samym htop w chwili odczytu. Gdy ta liczba stale przekracza liczbę rdzeni, serwerowi brakuje CPU.',
        '<b>Load average</b> to średnia liczba procesów w stanie <code>R</code> lub <code>D</code> (nieprzerywalne czekanie, zwykle na dysk) z ostatnich 1, 5 i 15 minut. Makieta zakłada, że wybrany scenariusz trwał przez ostatnią minutę. Czekanie na PostgreSQL przez sieć to stan <code>S</code>, więc nie podnosi tej liczby.',
        '<b>RES</b> to pamięć fizyczna procesu w KiB, łącznie ze współdzieloną częścią <code>SHR</code> (np. OPcache), a <b>MEM%</b> to jej udział w RAM. Każdy worker ma też pamięć tylko dla siebie, dlatego <code>pm.max_children</code> zależy od RAM serwera. <b>TIME+</b> to łączny czas CPU procesu i rośnie tylko u workera, który liczy.',
        '<b>CPU%</b> w tej makiecie dotyczy jednej jednostki czasu. Prawdziwy htop uśrednia pomiar z około 1,5 sekundy, więc dwa procesy dzielące jeden rdzeń pokażą po około 50%.',
        '<b>Strona statusu</b> pokazuje liczniki prowadzone przez samo PHP-FPM. <code>listen queue</code> liczy żądania czekające na wolnego workera, a <code>max listen queue</code> najdłuższą kolejkę od startu.',
        '<b>Pula w makiecie różni się od domyślnej w Ubuntu.</b> Odpowiada <code>pm = static</code> i <code>listen = 127.0.0.1:9000</code>. Domyślny <code>www.conf</code> ma <code>pm = dynamic</code>, czyli FPM sam uruchamia i zamyka workery w granicy <code>pm.max_children</code>, oraz gniazdo Unix <code>/run/php/php8.3-fpm.sock</code>, przy którym <code>listen queue</code> może pokazywać 0. Licznik <code>max children reached</code> działa tylko przy <code>pm = dynamic</code> i <code>ondemand</code>.',
      ],
    },
    commandsTitle: { en: 'Check it on your own server', pl: 'Sprawdź to na własnym serwerze' },
    cmdHtop: { en: 'The same view on your server', pl: 'Ten sam widok na serwerze' },
    cmdHtopNote: {
      en: 'Opens the process tree filtered by <code>php</code>. Inside htop, F4 changes the filter, F5 switches the tree view and <code>q</code> quits. If htop is missing, install it with <code>sudo apt install htop</code>.',
      pl: 'Otwiera drzewo procesów z filtrem <code>php</code>. W programie F4 zmienia filtr, F5 przełącza widok drzewa, a <code>q</code> zamyka htop. Jeśli go brakuje, zainstaluj go poleceniem <code>sudo apt install htop</code>.',
    },
    cmdCores: { en: 'How many cores?', pl: 'Ile mam rdzeni?' },
    cmdCoresNote: {
      en: 'Counts logical CPUs. With hyper-threading the result can be twice the number of physical cores.',
      pl: 'Liczy rdzenie logiczne. Przy hyper-threadingu wynik bywa dwa razy większy niż liczba rdzeni fizycznych.',
    },
    cmdPs: { en: 'Which processes belong to PHP-FPM?', pl: 'Które procesy należą do PHP-FPM?' },
    cmdPsNote: {
      en: 'The workers’ PPID is the master’s PID. The config path depends on the PHP version and the distribution.',
      pl: 'PPID workerów to PID mastera. Ścieżka do konfiguracji zależy od wersji PHP i dystrybucji.',
    },
    cmdStrace: { en: 'What is a worker waiting for?', pl: 'Na co czeka worker?' },
    cmdStraceNote: {
      en: 'A worker busy with a query sleeps in <code>poll()</code> on the PostgreSQL socket. A free worker waits in <code>accept()</code> for a new connection. Stop tracing with Ctrl+C.',
      pl: 'Worker zajęty zapytaniem śpi w <code>poll()</code> na gnieździe PostgreSQL. Wolny worker czeka w <code>accept()</code> na nowe połączenie. Śledzenie przerwiesz klawiszami Ctrl+C.',
    },
    cmdStatus: { en: 'Turn on the status page', pl: 'Włącz stronę statusu' },
    cmdStatusNote: {
      en: 'Nginx also needs a <code>location</code> block that passes this path to FPM, on Ubuntu with <code>fastcgi_pass unix:/run/php/php8.3-fpm.sock;</code>. Allow it from internal addresses only.',
      pl: 'Nginx potrzebuje też bloku <code>location</code>, który przekaże ten adres do FPM. W Ubuntu robi to <code>fastcgi_pass unix:/run/php/php8.3-fpm.sock;</code>. Udostępnij go tylko z adresów wewnętrznych.',
    },
  },
  glossary: {
    react: {
      en: [
        'ReactPHP event loop',
        'A long-running PHP CLI server can handle many connections via non-blocking I/O. It is not a PHP-FPM worker, and any synchronous PDO query blocks its loop.',
      ],
      pl: [
        'Pętla zdarzeń ReactPHP',
        'Długo działający proces PHP CLI może obsługiwać wiele połączeń przez nieblokujące I/O. Nie jest workerem PHP-FPM, a synchroniczne PDO blokuje jego pętlę.',
      ],
    },
    fiber: {
      en: [
        'PHP Fiber',
        'A PHP 8.1+ fiber can suspend its call stack and resume it later. Code can call <code>start()</code>, <code>resume()</code> or <code>throw()</code> directly, without an event loop. AMPHP and react/async integrate fibers with their schedulers to wait for non-blocking I/O. A fiber is not an OS thread; a blocking PDO call still blocks the thread running it.',
      ],
      pl: [
        'Fiber w PHP',
        'Fiber (PHP 8.1+) pozwala wstrzymać własny stos wywołań i później go wznowić. Kod może wywołać <code>start()</code>, <code>resume()</code> lub <code>throw()</code> bez pętli zdarzeń. AMPHP i react/async łączą fibery ze swoimi mechanizmami planowania, żeby czekać na nieblokujące I/O. Fiber nie jest wątkiem systemowym; blokujące PDO nadal blokuje wątek, który je wykonuje.',
      ],
    },
    cli: {
      en: [
        'PHP CLI',
        'Executes a script as a normal operating-system process. CLI itself does not accept HTTP requests. Several independent CLI processes can run at once.',
      ],
      pl: [
        'PHP CLI',
        'Uruchamia skrypt jako zwykły proces systemowy. Samo CLI nie obsługuje HTTP. Wiele procesów CLI można uruchomić jednocześnie.',
      ],
    },
    builtIn: {
      en: [
        'PHP built-in server',
        'The default php -S development mode serves one request at a time. It has a Unix-only multiworker test option, which this lab intentionally excludes.',
      ],
      pl: [
        'Serwer wbudowany PHP',
        'Domyślny tryb php -S obsługuje jedno żądanie naraz. Istnieje dodatkowy eksperymentalny tryb wieloprocesowy na Uniksie, nieuwzględniony tutaj.',
      ],
    },
    fpm: {
      en: [
        'PHP FastCGI Process Manager',
        'A master supervises worker processes. In the common non-ZTS deployment, each process runs application PHP on one main thread and handles one HTTP request at a time.',
      ],
      pl: [
        'PHP FastCGI Process Manager',
        'Proces nadrzędny zarządza procesami roboczymi. W typowym wariancie non-ZTS każdy proces wykonuje PHP na jednym głównym wątku i obsługuje naraz jedno żądanie.',
      ],
    },
    sapi: {
      en: [
        'SAPI (Server API)',
        'The interface that embeds PHP in its execution environment: CLI, built-in web server and FPM. PHP language syntax alone does not determine request concurrency.',
      ],
      pl: [
        'SAPI (Server API)',
        'Interfejs uruchamiania PHP: CLI, wbudowany serwer i FPM. Sama składnia PHP nie decyduje o współbieżności HTTP.',
      ],
    },
    worker: {
      en: [
        'PHP-FPM worker',
        'One operating-system process in the FPM pool. It cannot handle a second request until its current request completes, even while it is blocked on the database.',
      ],
      pl: [
        'Proces roboczy PHP-FPM',
        'Jeden proces systemowy z puli FPM. Nie obsłuży następnego żądania, dopóki bieżące się nie skończy, także podczas oczekiwania na bazę danych.',
      ],
    },
    core: {
      en: [
        'CPU core',
        'A hardware execution resource. Many processes may exist, but at most one software thread per core is modeled as computing at an instant (simplified: no SMT/hyper-threading).',
      ],
      pl: [
        'Rdzeń CPU',
        'Zasób sprzętowy wykonujący instrukcje. Procesów może być wiele, lecz w modelu w danej chwili jeden rdzeń wykonuje jeden wątek (bez SMT/hyper-threadingu).',
      ],
    },
    workload: {
      en: [
        'CPU-bound / I/O-bound',
        'CPU-bound tasks spend most time computing. I/O-bound requests mostly wait for storage, network or databases. Blocking I/O ties up an FPM worker, not a CPU core.',
      ],
      pl: [
        'CPU-bound / I/O-bound',
        'Zadania CPU-bound głównie liczą. Żądania I/O-bound przede wszystkim czekają na dysk, sieć lub bazę. Blokujące I/O zajmuje proces FPM, nie rdzeń CPU.',
      ],
    },
    queue: {
      en: [
        'Request queue',
        'Requests admitted to the server but not yet assigned to a PHP-FPM worker. Real systems may queue at multiple layers (web server, socket backlog, proxies).',
      ],
      pl: [
        'Kolejka żądań',
        'Żądania oczekujące na wolny proces PHP-FPM. W praktyce kolejki mogą istnieć na wielu poziomach: reverse proxy, serwer HTTP i socket.',
      ],
    },
    cpu: {
      en: [
        'Executing PHP',
        'The process currently has CPU time and executes PHP instructions. It is different from merely having a request assigned to a worker.',
      ],
      pl: [
        'Wykonywanie PHP',
        'Proces korzysta z czasu CPU i wykonuje instrukcje. To nie to samo, co przypisanie żądania do workera.',
      ],
    },
    io: {
      en: [
        'Blocking I/O wait',
        'The worker remains occupied by this request while it waits for the DB or network, but ordinarily yields the physical CPU to other threads/processes.',
      ],
      pl: [
        'Blokujące oczekiwanie I/O',
        'Proces roboczy wciąż obsługuje to samo żądanie podczas oczekiwania na DB lub sieć, ale zwykle oddaje w tym czasie rdzeń CPU.',
      ],
    },
    ready: {
      en: [
        'Runnable but not running',
        'A process is ready to compute but all modeled CPU cores are in use; the OS scheduler will give it CPU time later.',
      ],
      pl: [
        'Gotowy, lecz niewykonywany',
        'Proces jest gotowy do obliczeń, ale wszystkie dostępne rdzenie są zajęte. Planista systemu da mu czas CPU później.',
      ],
    },
    parallelism: {
      en: [
        'Concurrency ≠ parallelism',
        'Concurrency means overlapping progress or lifetimes of tasks. Parallelism means instructions actually execute at the same instant. The “parallel without concurrency” box is a teaching shorthand for no per-core interleaving.',
      ],
      pl: [
        'Współbieżność ≠ równoległość',
        'Współbieżność dotyczy nakładania się postępu lub czasu życia zadań. Równoległość oznacza jednoczesne wykonywanie instrukcji. „Równolegle bez współbieżności” to skrót dydaktyczny: bez przeplatania na rdzeniu.',
      ],
    },
    race: {
      en: [
        'Race condition / lost update',
        'Two requests access the same state and the outcome depends on event ordering. Both can read 100; if both calculate a new value from that stale read, a later write may erase the earlier update.',
      ],
      pl: [
        'Wyścig / utracona aktualizacja',
        'Dwa żądania korzystają z tego samego stanu, a wynik zależy od kolejności zdarzeń. Oba mogą odczytać 100; późniejszy zapis obliczony ze starej wartości może nadpisać wcześniejszą zmianę.',
      ],
    },
    optimistic: {
      en: [
        'Optimistic locking',
        'Read freely, then compare a version when writing. A mismatch signals a conflict; the application should reject or retry with fresh data.',
      ],
      pl: [
        'Blokowanie optymistyczne',
        'Najpierw odczyt bez wyłącznej blokady, potem kontrola wersji przy zapisie. Niezgodność oznacza konflikt: aplikacja odrzuca operację lub ponawia ją na świeżych danych.',
      ],
    },
    pessimistic: {
      en: [
        'Pessimistic locking',
        'Acquire an exclusive row lock inside a database transaction before the read-modify-write sequence. Conflicting writers wait until COMMIT or ROLLBACK.',
      ],
      pl: [
        'Blokowanie pesymistyczne',
        'Pobierz wyłączną blokadę wiersza wewnątrz transakcji, zanim wykonasz odczyt–modyfikację–zapis. Konkurencyjne zapisy czekają do COMMIT lub ROLLBACK.',
      ],
    },
    eventLoop: {
      en: [
        'Node.js event loop',
        'The main JavaScript thread runs one synchronous callback at a time; asynchronous network I/O remains in flight without holding this thread. await pauses a handler, not the event loop.',
      ],
      pl: [
        'Pętla zdarzeń Node.js',
        'Główny wątek JS wykonuje synchronicznie jeden callback naraz; asynchroniczne sieciowe I/O może trwać niezależnie. await zawiesza handler, nie całą pętlę zdarzeń.',
      ],
    },
    aggregate: {
      en: [
        'DDD aggregate',
        'A group of domain objects changed through one root. The root enforces business rules. Its invariants must hold after each committed transaction.',
      ],
      pl: [
        'Agregat DDD',
        'Grupa obiektów domenowych modyfikowanych przez jeden korzeń. Korzeń egzekwuje reguły biznesowe, które muszą być spełnione po zatwierdzeniu transakcji.',
      ],
    },
    boundedContext: {
      en: [
        'Bounded context',
        'A boundary within which a particular domain model and its vocabulary apply. It can contain multiple aggregates; it is not automatically one database transaction.',
      ],
      pl: [
        'Kontekst ograniczony (bounded context)',
        'Granica obszaru, w którym obowiązuje określony model domenowy i jego język. Może zawierać wiele agregatów; nie oznacza jednej transakcji bazy.',
      ],
    },
    aggregateRoot: {
      en: [
        'Aggregate root',
        'The Order entity is the only entry point to the aggregate. Outside code holds a reference to Order alone and changes OrderItems only through its methods.',
      ],
      pl: [
        'Korzeń agregatu',
        'Encja Order to jedyne wejście do agregatu. Kod spoza agregatu trzyma referencję tylko do Order i zmienia pozycje OrderItem wyłącznie przez metody Order.',
      ],
    },
    invariant: {
      en: [
        'Business invariant',
        'A rule that must remain true after every committed update; here an order may contain at most two items.',
      ],
      pl: [
        'Niezmiennik biznesowy',
        'Reguła, która musi pozostać prawdziwa po każdej zatwierdzonej zmianie. Tutaj zamówienie może zawierać maksymalnie dwie pozycje.',
      ],
    },
    snapshot: {
      en: [
        'Data read into a PHP process',
        'Each HTTP request loads its own Order object at version v5. It may later be stale because another request committed a new version. This is an application-level copy, not a database snapshot-isolation guarantee.',
      ],
      pl: [
        'Dane w pamięci procesu PHP',
        'Każde żądanie HTTP odczytuje osobny obiekt Order w wersji v5. Ten stan może się zdezaktualizować, gdy inne żądanie zapisze nową wersję. To kopia w aplikacji, nie gwarancja izolacji snapshot w bazie.',
      ],
    },
    inMemory: {
      en: [
        'Prepared change in memory',
        'The Order domain method creates a proposed new state, but it has not been committed to PostgreSQL. A successful method call is not yet a successful database transaction.',
      ],
      pl: [
        'Zmiana przygotowana w pamięci',
        'Metoda domenowa Order przygotowuje nowy stan, ale nie zapisuje go jeszcze w PostgreSQL. Poprawne wykonanie metody nie oznacza zatwierdzonej transakcji.',
      ],
    },
    committed: {
      en: [
        'Committed database state',
        'The value visible after PostgreSQL completes COMMIT. A rejected transaction must leave no partial order-item change.',
      ],
      pl: [
        'Stan zatwierdzony w bazie',
        'Stan zapisany po udanym COMMIT w PostgreSQL. Odrzucona transakcja nie może pozostawić częściowej zmiany pozycji zamówienia.',
      ],
    },
    version: {
      en: [
        'Optimistic version check',
        'An UPDATE verifies the version read earlier (for example v5). If another request already committed v6, the stale write is rejected.',
      ],
      pl: [
        'Kontrola wersji',
        'UPDATE sprawdza wersję odczytaną wcześniej, np. v5. Jeśli inne żądanie zapisało już v6, zapis oparty na nieaktualnych danych zostaje odrzucony.',
      ],
    },
    rowLock: {
      en: [
        'Row lock',
        'UPDATE, DELETE and SELECT … FOR UPDATE lock the rows they touch until COMMIT or ROLLBACK. A second transaction that wants to change the same row waits. In READ COMMITTED it then works on the newly committed version of the row.',
      ],
      pl: [
        'Blokada wiersza',
        'UPDATE, DELETE i SELECT … FOR UPDATE blokują wiersze, których dotykają, aż do COMMIT albo ROLLBACK. Druga transakcja, która chce zmienić ten sam wiersz, czeka. W READ COMMITTED działa potem na nowo zatwierdzonej wersji wiersza.',
      ],
    },
    txBoundary: {
      en: [
        'Transaction boundary',
        'A set of SQL changes that commit together or roll back together. It must include every write needed to enforce this aggregate invariant.',
      ],
      pl: [
        'Granica transakcji',
        'Zestaw zmian SQL, które zatwierdzają się albo wycofują razem. Musi obejmować zapisy potrzebne do zachowania niezmiennika agregatu.',
      ],
    },
    immediate: {
      en: [
        'Immediate consistency',
        'Once the local transaction commits, the aggregate invariant is already true. It does not guarantee all other services have been updated.',
      ],
      pl: [
        'Spójność natychmiastowa',
        'Po zatwierdzeniu lokalnej transakcji niezmiennik agregatu jest już spełniony. Nie oznacza to jeszcze aktualizacji innych usług.',
      ],
    },
    eventual: {
      en: [
        'Eventual consistency',
        'Independent services may temporarily disagree while messages are processed. With successful retries and compensations, the process converges to an intended business outcome; convergence is not automatic.',
      ],
      pl: [
        'Spójność ostateczna (eventual consistency)',
        'Niezależne usługi mogą przejściowo mieć różne stany. Po udanych kolejnych krokach i kompensacjach proces może dojść do oczekiwanego wyniku; nie dzieje się to automatycznie.',
      ],
    },
    saga: {
      en: [
        'Saga',
        'A long-running business process made of several independent local transactions and, when needed, compensating business actions. It is not one global ACID transaction.',
      ],
      pl: [
        'Saga',
        'Długotrwały proces biznesowy złożony z niezależnych transakcji lokalnych i, w razie potrzeby, operacji kompensujących. Nie jest jedną globalną transakcją ACID.',
      ],
    },
    localTx: {
      en: [
        'Local transaction',
        'One service atomically changes its own data and commits. Another service cannot roll back that committed work directly.',
      ],
      pl: [
        'Transakcja lokalna',
        'Jedna usługa atomowo zapisuje własne dane i wykonuje COMMIT. Inna usługa nie może bezpośrednio wycofać już zatwierdzonej transakcji.',
      ],
    },
    orchestrator: {
      en: [
        'Saga orchestrator',
        'The process coordinator records progress and chooses the next command based on the result of previous steps.',
      ],
      pl: [
        'Orkiestrator Sagi',
        'Koordynator procesu zapisuje postęp i wybiera kolejne polecenie na podstawie wyników wcześniejszych kroków.',
      ],
    },
    compensation: {
      en: [
        'Compensating action',
        'A new business operation such as RefundPayment or ReleaseStock, used to counter the effect of a previous successful local transaction. It is not a cross-service SQL ROLLBACK.',
      ],
      pl: [
        'Kompensacja',
        'Nowa operacja biznesowa, np. RefundPayment lub ReleaseStock, która neutralizuje skutek wcześniejszej zatwierdzonej transakcji. Nie jest rozproszonym SQL ROLLBACK.',
      ],
    },
    outbox: {
      en: [
        'Transactional outbox',
        'Save both the business update and an outgoing message in the same local DB transaction. A separate publisher later delivers the message, reducing the risk of lost events.',
      ],
      pl: [
        'Transactional outbox',
        'Zapisz zmianę biznesową i komunikat wychodzący w tej samej lokalnej transakcji. Osobny proces opublikuje komunikat później, ograniczając ryzyko jego utraty.',
      ],
    },
    idempotency: {
      en: [
        'Idempotency',
        'Repeated processing of the same command or message must not cause repeated charges, stock reservations or refunds.',
      ],
      pl: [
        'Idempotencja',
        'Wielokrotne przetworzenie tego samego polecenia lub komunikatu nie może wywołać wielokrotnych płatności, rezerwacji ani zwrotów.',
      ],
    },
    row: {
      en: [
        'Shared DB row',
        'A database record that both request handlers want to update. The lock lives in PostgreSQL, independently of PHP processes or Node.js threads.',
      ],
      pl: [
        'Wspólny wiersz bazy',
        'Rekord bazy modyfikowany przez dwa żądania. Blokada istnieje w PostgreSQL niezależnie od procesów PHP i wątków Node.js.',
      ],
    },
  },
  a11y: {
    labels: {
      '.tab-jumpnav': { en: 'Experiments', pl: 'Eksperymenty' },
      'nav.tabs': { en: 'Learning chapters', pl: 'Rozdziały' },
      '#raceModes': { en: 'Locking strategy', pl: 'Sposób ochrony zapisu' },
      '#conceptGrid': { en: 'Choose CPU scheduling scenario', pl: 'Wybierz przebieg pracy CPU' },
      '#compareScenarios': { en: 'Request scenarios', pl: 'Scenariusze żądań' },
      '#aggOptions': { en: 'Aggregate concurrency protection', pl: 'Ochrona współbieżnych zmian agregatu' },
      '#sagaOptions': { en: 'Saga outcome', pl: 'Wynik sagi' },
      '#aggTrack': { en: 'Aggregate timeline', pl: 'Oś czasu agregatu' },
      '#sagaTrack': { en: 'Saga timeline', pl: 'Oś czasu sagi' },
    },
    explainTerm: { en: 'Explain term: ', pl: 'Wyjaśnij pojęcie: ' },
  },
};
