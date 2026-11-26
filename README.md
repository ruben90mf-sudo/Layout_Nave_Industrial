# Layout de nave industrial

**Versión 0.0.2** · App: https://ruben90mf-sudo.github.io/Layout_Nave_Industrial/

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

## Sincronización entre dispositivos

Con el botón **Planos** de la barra superior, entras con tu cuenta de Google y tus planos se guardan en la nube (Firebase). Un cambio en el PC aparece en la tablet en unos segundos, y al revés. Puedes tener varios planos con nombre, duplicarlos para probar ideas y seguir trabajando sin conexión: los cambios se suben al recuperarla.

Sin iniciar sesión, cada dispositivo guarda su propio plano. Para pasarlo a otro dispositivo, usa *Archivo → Guardar archivo .json* y, en el otro, *Archivo → Abrir archivo .json*.

### Configurar Firebase (una sola vez)

1. Crea un proyecto en la [consola de Firebase](https://console.firebase.google.com).
2. **Authentication** → activa el proveedor **Google** y, en *Configuración → Dominios autorizados*, añade `ruben90mf-sudo.github.io`.
3. **Firestore Database** → crea la base de datos en modo producción y, en *Reglas*, pega el contenido de `firestore.rules`.
4. *Configuración del proyecto → Tus apps → Web* → copia el objeto `firebaseConfig` en `firebase-config.js`.

## Archivos

| Archivo | Para qué sirve |
|---|---|
| `index.html` | El programa completo |
| `manifest.webmanifest` | Datos para instalarlo como app |
| `sw.js` | Hace que funcione sin conexión |
| `firebase-config.js` | Datos de conexión con Firebase (no son secretos) |
| `firestore.rules` | Reglas de seguridad: cada usuario solo ve sus planos |
| `icon-*.png`, `favicon.png`, `apple-touch-icon.png` | Iconos |

## Versiones

### 0.0.2 (26/11/2026)
- El botón de sincronización muestra el nombre del plano abierto (y la cuenta al pasar el ratón), para saber si el PC y la tablet están en el mismo plano.
- Al abrir la app no se sube nada a la nube hasta recibir la última versión del plano, para no pisarla con una copia antigua del dispositivo.

### 0.0.1 (26/11/2026)
- Corregido: el plano se ajusta solo al tamaño de la ventana mientras no se haya hecho zoom (antes podía salir diminuto al abrir la app en una ventana pequeña).

### 0.0.0 (26/11/2026)
Primera versión estable:
- Plano de la nave a escala con origen abajo a la izquierda, cuadrícula, cotas y herramienta de medir.
- Elementos: mesas de trabajo, máquinas, estanterías, mesas supletorias, zonas de tarea, pilares (también en malla), salas o almacenes, puertas y portones.
- Pasillos dibujados con líneas y espacio de trabajo alrededor de cada máquina.
- Avisos de choques, pasillos invadidos y espacios de trabajo invadidos.
- Modos Mover y Diseño libre; fijar todo el plano o por tipo.
- Flujos de material: recorrido en escuadra (ΔX + ΔY), metros por pieza y al día, indicador de movimiento.
- App instalable en PC y Android, funciona sin conexión y sincroniza los planos entre dispositivos con la cuenta de Google.
