(function () {
  "use strict";

  let actual = 0;
  const total = PASOS.length;

  const elContenido = document.getElementById("contenido");
  const elSubtitulo = document.getElementById("subtitulo");
  const elBarra = document.getElementById("progreso-barra");
  const elIndicador = document.getElementById("indicador");
  const btnAnterior = document.getElementById("btn-anterior");
  const btnSiguiente = document.getElementById("btn-siguiente");

  // Dibuja la región factible, las rectas y los puntos Q y V en SVG.
  function dibujarGrafica(contenedor) {
    const W = 520, H = 360;
    const m = { izq: 48, der: 24, sup: 24, inf: 44 };
    const xMax = 10, yMax = 13;
    const sx = (W - m.izq - m.der) / xMax;
    const sy = (H - m.sup - m.inf) / yMax;
    const X = (x) => m.izq + x * sx;
    const Y = (y) => H - m.inf - y * sy;

    const region = [[0, 0], [6, 0], [5, 2], [0, 4.5]];
    const puntosRegion = region.map(([x, y]) => `${X(x)},${Y(y)}`).join(" ");

    let rejilla = "";
    for (let i = 0; i <= xMax; i++) {
      rejilla += `<line class="rejilla" x1="${X(i)}" y1="${Y(0)}" x2="${X(i)}" y2="${Y(yMax)}"/>`;
      rejilla += `<text class="texto-eje" x="${X(i)}" y="${Y(0) + 18}" text-anchor="middle">${i}</text>`;
    }
    for (let j = 0; j <= yMax; j++) {
      rejilla += `<line class="rejilla" x1="${X(0)}" y1="${Y(j)}" x2="${X(xMax)}" y2="${Y(j)}"/>`;
      if (j > 0) {
        rejilla += `<text class="texto-eje" x="${X(0) - 8}" y="${Y(j) + 4}" text-anchor="end">${j}</text>`;
      }
    }

    const svg = `
      <svg class="grafica" viewBox="0 0 ${W} ${H}" role="img" aria-label="Región factible del sistema">
        ${rejilla}
        <polygon class="region" points="${puntosRegion}"/>
        <line class="eje" x1="${X(0)}" y1="${Y(0)}" x2="${X(xMax)}" y2="${Y(0)}"/>
        <line class="eje" x1="${X(0)}" y1="${Y(0)}" x2="${X(0)}" y2="${Y(yMax)}"/>
        <text class="texto-eje" x="${X(xMax) + 4}" y="${Y(0) + 4}">x</text>
        <text class="texto-eje" x="${X(0) + 6}" y="${Y(yMax) + 4}">y</text>

        <line class="recta-1" x1="${X(0)}" y1="${Y(12)}" x2="${X(6)}" y2="${Y(0)}"/>
        <line class="recta-2" x1="${X(0)}" y1="${Y(4.5)}" x2="${X(9)}" y2="${Y(0)}"/>
        <text class="etiq-recta-1" x="${X(2.2)}" y="${Y(8.2)}">2x + y = 12</text>
        <text class="etiq-recta-2" x="${X(6.3)}" y="${Y(1.2)}">x + 2y = 9</text>

        <circle class="punto-vertice" cx="${X(5)}" cy="${Y(2)}" r="5"/>
        <text class="etiq-punto" x="${X(5) + 8}" y="${Y(2) - 8}" fill="#14532d">V(5, 2)</text>
        <circle class="punto-q" cx="${X(3)}" cy="${Y(2)}" r="5"/>
        <text class="etiq-punto" x="${X(3) - 8}" y="${Y(2) - 10}" text-anchor="end" fill="#b91c1c">Q(3, 2)</text>
        <text class="etiq-punto" x="${X(0) + 6}" y="${Y(4.5) - 6}" fill="#14532d">(0, 4.5)</text>
        <text class="etiq-punto" x="${X(6) - 4}" y="${Y(0) - 8}" fill="#d97706">(6, 0)</text>
      </svg>`;

    contenedor.innerHTML = svg;
  }

  function render() {
    const paso = PASOS[actual];

    elSubtitulo.textContent = paso.subtitulo;
    elContenido.innerHTML = `
      <span class="etiqueta">${paso.etiqueta}</span>
      <h2 class="panel-titulo">${paso.titulo}</h2>
      ${paso.html}
    `;

    if (paso.grafica) {
      const destino = document.getElementById("grafica");
      if (destino) dibujarGrafica(destino);
    }

    elBarra.style.width = `${((actual + 1) / total) * 100}%`;
    elIndicador.textContent = `Paso ${actual + 1} de ${total}`;
    btnAnterior.disabled = actual === 0;
    btnSiguiente.disabled = actual === total - 1;

    elContenido.scrollTop = 0;
  }

  function irA(indice) {
    if (indice < 0 || indice >= total) return;
    actual = indice;
    render();
  }

  btnAnterior.addEventListener("click", () => irA(actual - 1));
  btnSiguiente.addEventListener("click", () => irA(actual + 1));

  document.addEventListener("keydown", (e) => {
    if (e.key === "ArrowRight") irA(actual + 1);
    if (e.key === "ArrowLeft") irA(actual - 1);
  });

  render();
})();
