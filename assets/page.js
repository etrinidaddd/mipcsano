(function () {
  "use strict";
  const config = window.MIPCSANO_DOWNLOAD || {};
  const button = document.getElementById("download-button");
  const status = document.getElementById("download-status");
  try {
    const url = new URL(config.publicInstaller);
    if (url.protocol !== "https:" || url.username || url.password) return;
    button.href = url.href;
    button.setAttribute("download", "MiPCsano-Setup.exe");
    button.removeAttribute("aria-disabled");
    status.textContent = "Descarga del instalador desde GitHub. Lee los requisitos antes de instalar.";
  } catch (_) {
    // The HTML contains the verified download URL as a fallback.
  }
})();

