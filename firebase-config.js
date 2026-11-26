// Configuración de Firebase para sincronizar los planos entre dispositivos.
// Se copia de: Consola de Firebase → Configuración del proyecto → Tus apps → App web → firebaseConfig.
// Estos datos no son secretos: lo que protege los planos son las reglas de Firestore (cada usuario solo ve los suyos).
// Mientras valga null, la app funciona sin sincronizar (cada dispositivo guarda su plano).
window.FIREBASE_CONFIG = null;
