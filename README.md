# Layout de nave industrial

Programa para organizar el layout de una nave industrial o un taller, a escala. Funciona en el navegador del PC, en tablets Android y en el móvil, y se puede instalar como app.

## Qué hace

- Plano de la nave a escala, con el origen (0, 0) en la esquina inferior izquierda. Unidades en metros, centímetros, milímetros o pies.
- Mesas de trabajo, máquinas, estanterías, mesas supletorias, zonas de tarea y pilares. Se mueven, se giran y se cambian de tamaño, con el ratón o con el dedo.
- Espacio de trabajo alrededor de cada máquina (delante, detrás, izquierda y derecha).
- Pasillos dibujados con líneas rectas, con el ancho que indiques.
- Pilares en malla (separación en X e Y).
- Avisos de choques, pasillos invadidos y espacios de trabajo invadidos.
- Cotas hasta el elemento más cercano, herramienta de medir y resumen de superficies.
- Guardar y abrir el plano como archivo `.json`, y exportarlo como imagen PNG.

## Cómo se usa

- **En el PC:** abre la dirección de GitHub Pages, o descarga `index.html` y ábrelo con doble clic.
- **En una tablet o un móvil Android:** abre la dirección en Chrome. En el menu ⋮, elige «Añadir a pantalla de inicio» (o «Instalar aplicación»). Desde ahí se abre como una app y funciona sin conexión.

Cada dispositivo guarda su propio plano. Para pasar un plano de uno a otro, usa *Archivo → Guardar archivo .json* y, en el otro dispositivo, *Archivo → Abrir archivo .json*.

## Archivos

| Archivo | Para qué sirve |
|---|---|
| `index.html` | El programa completo |
| `manifest.webmanifest` | Datos para instalarlo como app |
| `sw.js` | Hace que funcione sin conexión |
| `icon-*.png`, `favicon.png`, `apple-touch-icon.png` | Iconos |
