<!DOCTYPE html>
<html lang="en" color-mode="light">
<head>
	<meta charset="utf-8">
	<meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
	<title>Accessible Skeleton</title>
	<link type="text/plain" rel="author" href="/humans.txt" />
	<!-- <link rel="stylesheet" href="/css/bootstrap.min.css"> -->
	<!-- <link rel="stylesheet" href="/css/gardenburger-2.0.0.css"> -->
	<!-- <link rel="stylesheet" href="/css/fontawesome.min.css"> -->
	<!-- <link rel="stylesheet" href="/css/aria.accordion.css"> -->
	<!-- <link rel="stylesheet" href="/css/modaal.css"> -->
	<link rel="stylesheet" href="/css/bb-accessibility.css">
	<link rel="stylesheet" href="/css/bb-global-styles.css">
    <script>
      if (
        localStorage.getItem("color-mode") === "dark" ||
        (window.matchMedia("(prefers-color-scheme: dark)").matches &&
          !localStorage.getItem("color-mode"))
      ) {
        document.documentElement.setAttribute("color-mode", "dark");
      }
    </script>    
</head>
<body>
	<main class="color-mode">
    <svg style="display: none;" >
      <symbol viewBox="0 0 24 24" id="moon">
        <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
      </symbol>
      <symbol viewBox="0 0 24 24" id="sun">
        <circle cx="12" cy="12" r="5"></circle>
        <line x1="12" y1="1" x2="12" y2="3"></line>
        <line x1="12" y1="21" x2="12" y2="23"></line>
        <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line>
        <line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line>
        <line x1="1" y1="12" x2="3" y2="12"></line>
        <line x1="21" y1="12" x2="23" y2="12"></line>
        <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line>
        <line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line>
      </symbol>
    </svg>	
	<h1>Hello World!</h1>
  <button
    class="color-mode__btn light--hidden"
    aria-label="Toggle light mode"
  >
    Toggle Light Mode
    <svg aria-hidden="true">
      <title>Light Mode</title>
      <use href="#sun"></use>
    </svg>
  </button>
  <button
    class="color-mode__btn dark--hidden"
    aria-label="Toggle dark mode"
  >
    Toggle Dark Mode
    <svg aria-hidden="true">
      <title>Dark Mode</title>
      <use href="#moon"></use>
    </svg>
  </button>
  </main>

	<!-- Start of footer scripts — convert to a reusable partial/include/view -->
	<!-- <script src="/js/bootstrap.bundle.min.js"></script> -->
	<script src="/js/jquery-1.12.4.js"></script>
	<script src="/js/jquery-migrate-1.4.1.js"></script>
	<!-- <script src="/js/aria.accordion.min.js"></script> -->
	<!-- <script src="/js/modaal.js"></script> -->
	<!-- <script src="/js/jquery.gardenburger-2.0.0.js"></script> -->
	<script src="/js/bb-accessibility.js"></script>
	<script src="/js/flying-focus.js"></script>
	<!-- End of footer scripts -->
</body>
</html>