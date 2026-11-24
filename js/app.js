(function () {
  "use strict";

  const elTarjetas = document.getElementById("vista-tarjetas");
  const elVistaTaller = document.getElementById("vista-taller");
  const elIframe = document.getElementById("iframe-taller");
  const elNombre = document.getElementById("taller-nombre");
  const btnVolver = document.getElementById("btn-volver");

  function escapar(texto) {
    const div = document.createElement("div");
    div.textContent = texto;
    return div.innerHTML;
  }

  function abrirTaller(indice) {
    const taller = TALLERES[indice];
    elIframe.src = taller.archivo;
    elNombre.textContent = taller.tema + " · " + taller.alumno;
    elTarjetas.hidden = true;
    elVistaTaller.hidden = false;
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  function volverAlPanel() {
    elIframe.src = "about:blank";
    elVistaTaller.hidden = true;
    elTarjetas.hidden = false;
  }

  function renderTarjetas() {
    elTarjetas.innerHTML = TALLERES.map((t, i) => `
      <article class="tarjeta">
        <span class="tarjeta-numero">Taller ${i + 1}</span>
        <h2>${escapar(t.tema)}</h2>
        <p class="alumno"><strong>Alumno:</strong> ${escapar(t.alumno)}</p>
        <button class="boton" type="button" data-indice="${i}">Abrir taller</button>
      </article>
    `).join("");

    elTarjetas.querySelectorAll("button[data-indice]").forEach((btn) => {
      btn.addEventListener("click", () => abrirTaller(Number(btn.dataset.indice)));
    });
  }

  btnVolver.addEventListener("click", volverAlPanel);
  renderTarjetas();
})();
