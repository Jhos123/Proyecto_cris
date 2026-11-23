// Contenido del taller: cada objeto es un panel.
// "grafica: true" indica que app.js debe dibujar la gráfica en el lugar de #grafica.
const PASOS = [
  {
    subtitulo: "Problema de aplicación: centro de entrenamiento",
    etiqueta: "Enunciado",
    titulo: "Enunciado del problema",
    html: `
      <div class="enunciado">
        Un centro de entrenamiento organiza <strong>clínicas técnicas (x)</strong> y
        <strong>sesiones de acondicionamiento físico (y)</strong>. Cada clínica técnica requiere
        <strong>2 horas de cancha</strong> y <strong>1 hora de evaluación</strong>; cada sesión requiere
        <strong>1 hora de cancha</strong> y <strong>2 horas de evaluación</strong>.
        Se dispone de <strong>12 horas de cancha</strong> y <strong>9 horas de evaluación</strong>.
        Las cantidades son enteras no negativas.
      </div>
      <div class="pregunta">
        <h3>Preguntas del taller</h3>
        <ol>
          <li>[1p] Formule el sistema de inecuaciones.</li>
          <li>[1p] Grafique las rectas frontera, sombree la región factible y determine sus vértices.</li>
          <li>[1p] El plan propuesto es Q(3, 2). Determine si es factible y justifique.</li>
        </ol>
      </div>
      <p>Lo que sigue resuelve cada petición paso a paso.</p>
    `
  },
  {
    subtitulo: "Problema de aplicación: centro de entrenamiento",
    etiqueta: "Marco teórico",
    titulo: "Marco Teórico",
    html: `
      <p>Cuando dos actividades usan recursos limitados, el consumo total de <strong>x</strong> unidades de la actividad 1 y <strong>y</strong> unidades de la actividad 2 es <strong>ax + by</strong>. Si se dispone de como máximo <strong>c</strong> unidades del recurso, la condición se escribe <strong>ax + by ≤ c</strong>.</p>
      <p>Se plantea una condición por cada recurso y además <strong>x, y ≥ 0</strong>, porque no pueden realizarse cantidades negativas.</p>
      <div class="subpaso">Región factible y vértices</div>
      <p>Las combinaciones <strong>(x, y)</strong> que cumplen todas las restricciones a la vez forman la <strong>región factible</strong>. Las esquinas de ese polígono son los <strong>vértices</strong>.</p>
      <div class="subpaso">Método de resolución</div>
      <ol>
        <li><strong>Formular:</strong> escribir el sistema de restricciones.</li>
        <li><strong>Trazar:</strong> graficar las rectas frontera reemplazando ≤ por = y sombrear la región común en el primer cuadrante.</li>
        <li><strong>Vértices:</strong> hallar las intersecciones de las rectas.</li>
        <li><strong>Punto de prueba:</strong> sustituir un plan Q(x₀, y₀) en cada inecuación para verificar si es factible.</li>
      </ol>
    `
  },
  {
    subtitulo: "Petición A · Formular el sistema de inecuaciones [1p]",
    etiqueta: "Petición A",
    titulo: "Paso 1: Definir las variables de decisión",
    html: `
      <p>Las variables son lo que el centro decide organizar:</p>
      <div class="enunciado">
        <p class="formula"><strong>x</strong> = número de clínicas técnicas a organizar.</p>
        <p class="formula"><strong>y</strong> = número de sesiones de acondicionamiento físico a organizar.</p>
      </div>
      <p>Con estas dos variables se escribe el consumo de cada recurso.</p>
    `
  },
  {
    subtitulo: "Petición A · Formular el sistema de inecuaciones [1p]",
    etiqueta: "Petición A",
    titulo: "Paso 2: Organizar los datos en una tabla de recursos",
    html: `
      <table>
        <thead>
          <tr><th>Actividad</th><th>Cancha (horas)</th><th>Evaluación (horas)</th></tr>
        </thead>
        <tbody>
          <tr><td>Clínica técnica (x)</td><td>2x</td><td>1x</td></tr>
          <tr><td>Acondicionamiento físico (y)</td><td>1y</td><td>2y</td></tr>
          <tr class="total"><td>Disponibilidad máxima</td><td>12</td><td>9</td></tr>
        </tbody>
      </table>
      <p>Cada fila muestra cuánto consume cada actividad, y la última fila el total disponible.</p>
    `
  },
  {
    subtitulo: "Petición A · Formular el sistema de inecuaciones [1p]",
    etiqueta: "Petición A",
    titulo: "Paso 3: Escribir las restricciones",
    html: `
      <p>El consumo de cada recurso no debe superar lo disponible, y las cantidades no pueden ser negativas.</p>
      <div class="respuesta">
        <strong>Respuesta Petición A: sistema formulado</strong>
        <p class="formula">2x + y ≤ 12 &nbsp;&nbsp;(restricción de horas de cancha)</p>
        <p class="formula">x + 2y ≤ 9 &nbsp;&nbsp;(restricción de horas de evaluación)</p>
        <p class="formula">x ≥ 0, y ≥ 0 &nbsp;&nbsp;(no negatividad)</p>
      </div>
    `
  },
  {
    subtitulo: "Petición B · Gráfica, región factible y vértices [1p]",
    etiqueta: "Petición B",
    titulo: "Paso 1: Interceptos de las rectas frontera",
    html: `
      <p>Se cambia ≤ por = y se evalúa x = 0 y y = 0 en cada recta.</p>
      <div class="subpaso">Recta 1 (L₁): 2x + y = 12</div>
      <table class="tabla-pequena">
        <thead><tr><th>Caso</th><th>Cálculo</th><th>Punto</th></tr></thead>
        <tbody>
          <tr><td>x = 0</td><td>2(0) + y = 12 ⇒ y = 12</td><td>(0, 12)</td></tr>
          <tr><td>y = 0</td><td>2x = 12 ⇒ x = 6</td><td>(6, 0)</td></tr>
        </tbody>
      </table>
      <div class="subpaso">Recta 2 (L₂): x + 2y = 9</div>
      <table class="tabla-pequena">
        <thead><tr><th>Caso</th><th>Cálculo</th><th>Punto</th></tr></thead>
        <tbody>
          <tr><td>x = 0</td><td>2y = 9 ⇒ y = 4.5</td><td>(0, 4.5)</td></tr>
          <tr><td>y = 0</td><td>x = 9</td><td>(9, 0)</td></tr>
        </tbody>
      </table>
    `
  },
  {
    subtitulo: "Petición B · Gráfica, región factible y vértices [1p]",
    etiqueta: "Petición B",
    titulo: "Paso 2: Trazar la gráfica y sombrear la región",
    grafica: true,
    html: `
      <p>Como x ≥ 0 e y ≥ 0 trabajamos en el primer cuadrante. Al evaluar (0, 0): 0 ≤ 12 y 0 ≤ 9, ambas verdaderas, así que se sombrea hacia el origen bajo las dos rectas.</p>
      <div id="grafica"></div>
      <p class="leyenda">Región factible sombreada. Q(3, 2) es el punto de prueba y V(5, 2) el vértice de intersección.</p>
    `
  },
  {
    subtitulo: "Petición B · Gráfica, región factible y vértices [1p]",
    etiqueta: "Petición B",
    titulo: "Paso 3: Vértice de intersección por reducción",
    html: `
      <p>Se igualan las dos ecuaciones frontera y se elimina x.</p>
      <div class="enunciado">
        <p class="formula">Ecuación (1): 2x + y = 12</p>
        <p class="formula">Ecuación (2): x + 2y = 9</p>
        <p>Multiplicamos la ecuación (2) por −2:</p>
        <p class="formula">−2x − 4y = −18</p>
        <p>Sumamos verticalmente con la ecuación (1):</p>
        <p class="formula">−3y = −6 ⇒ y = 2</p>
        <p>Reemplazamos y = 2 en la ecuación (1):</p>
        <p class="formula">2x + 2 = 12 ⇒ 2x = 10 ⇒ x = 5</p>
      </div>
      <div class="respuesta">
        <strong>Vértice de intersección:</strong> V(5, 2)
      </div>
    `
  },
  {
    subtitulo: "Petición B · Gráfica, región factible y vértices [1p]",
    etiqueta: "Petición B",
    titulo: "Vértices de la región factible",
    html: `
      <p>La región queda delimitada por cuatro vértices: el origen, los interceptos con los ejes y el punto de intersección.</p>
      <table class="tabla-pequena">
        <thead><tr><th>Vértice</th><th>Origen del vértice</th></tr></thead>
        <tbody>
          <tr><td>(0, 0)</td><td>Origen</td></tr>
          <tr><td>(6, 0)</td><td>Corte de L₁ con el eje x</td></tr>
          <tr><td>(5, 2)</td><td>Intersección de L₁ y L₂</td></tr>
          <tr><td>(0, 4.5)</td><td>Corte de L₂ con el eje y</td></tr>
        </tbody>
      </table>
      <div class="respuesta">
        <strong>Respuesta Petición B:</strong> la región factible tiene vértices (0, 0), (6, 0), (5, 2) y (0, 4.5).
      </div>
    `
  },
  {
    subtitulo: "Petición C · Factibilidad de Q(3, 2) [1p]",
    etiqueta: "Petición C",
    titulo: "Evaluar el plan propuesto Q(3, 2)",
    html: `
      <p>Se reemplazan x = 3 e y = 2 en cada restricción de la Petición A.</p>
      <table>
        <thead>
          <tr><th>Restricción</th><th>Cálculo</th><th>Resultado</th></tr>
        </thead>
        <tbody>
          <tr><td>Cancha: 2x + y ≤ 12</td><td>2(3) + 2 = 8 ≤ 12</td><td>Cumple (sobran 4 h)</td></tr>
          <tr><td>Evaluación: x + 2y ≤ 9</td><td>3 + 2(2) = 7 ≤ 9</td><td>Cumple (sobran 2 h)</td></tr>
          <tr><td>No negatividad y enteros</td><td>3 ≥ 0, 2 ≥ 0</td><td>Cumple</td></tr>
        </tbody>
      </table>
      <div class="respuesta">
        <strong>Respuesta Petición C:</strong> Q(3, 2) <strong>sí es factible</strong>, porque satisface
        simultáneamente todas las desigualdades del sistema sin exceder las horas disponibles.
      </div>
    `
  },
  {
    subtitulo: "Interpretación del resultado",
    etiqueta: "Cierre",
    titulo: "Qué significa cada resultado",
    html: `
      <ul>
        <li><strong>Región factible:</strong> todas las combinaciones de clínicas y sesiones que el centro puede programar sin exceder 12 horas de cancha ni 9 de evaluación.</li>
        <li><strong>Vértice V(5, 2):</strong> organizar 5 clínicas técnicas y 2 sesiones agota por completo ambos recursos: 2(5) + 2 = 12 horas de cancha y 5 + 2(2) = 9 horas de evaluación.</li>
        <li><strong>Plan Q(3, 2):</strong> es viable, pero deja capacidad libre: se usan 8 de 12 horas de cancha (quedan 4) y 7 de 9 de evaluación (quedan 2).</li>
      </ul>
      <div class="pregunta">
        <h3>Nota sobre enteros</h3>
        <p>El vértice (0, 4.5) no es entero, así que no puede organizarse 4.5 sesiones. Como las cantidades son enteras, los planes reales son los puntos enteros de la región, por ejemplo (0, 4), (3, 2) o (5, 2).</p>
      </div>
    `
  }
];
