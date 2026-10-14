(function () {
  "use strict";
  const config = window.MIPCSANO_DOWNLOAD || {};
  const button = document.getElementById("download-button");
  const status = document.getElementById("download-status");
  const publication = document.getElementById("publication-status");
  const local = window.location.protocol === "file:";
  let url = null;
  if (local && config.localInstaller) url = new URL(config.localInstaller, document.baseURI);
  else if (config.publicVerified === true && config.publicInstaller) {
    try {
      const candidate = new URL(config.publicInstaller);
      const expected = "https://github.com/etrinidaddd/mipcsano/releases/download/v1.4.0/MiPCsano-Setup-1.4.0.exe";
      if (candidate.href === expected) url = candidate;
    } catch (_) { /* La descarga permanece pendiente. */ }
  }
  if (url) {
    button.href = url.href;
    button.setAttribute("download", "MiPCsano-Setup-1.4.0.exe");
    button.removeAttribute("aria-disabled");
    status.textContent = "Instalador 1.4.0 disponible en GitHub Releases. Lee los requisitos antes de instalar.";
    publication.textContent = "MiPCsano 1.4.0 · Proyecto académico sin cobros reales.";
  }
  button.addEventListener("click", event => { if (button.getAttribute("aria-disabled") === "true") event.preventDefault(); });
  button.addEventListener("keydown", event => { if (button.getAttribute("aria-disabled") === "true" && (event.key === "Enter" || event.key === " ")) event.preventDefault(); });
})();
