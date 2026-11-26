// Configuración de Firebase para sincronizar los planos entre dispositivos.
// Se copia de: Consola de Firebase → Configuración del proyecto → Tus apps → App web → firebaseConfig.
// Estos datos no son secretos: lo que protege los planos son las reglas de Firestore (cada usuario solo ve los suyos).
// Si vale null, la app funciona sin sincronizar (cada dispositivo guarda su plano).
window.FIREBASE_CONFIG = {
  apiKey: "AIzaSyCJearT1km4G7iKhEaJd7Why0QFNjIZ8QY",
  authDomain: "layout-nave.firebaseapp.com",
  projectId: "layout-nave",
  storageBucket: "layout-nave.firebasestorage.app",
  messagingSenderId: "654275601676",
  appId: "1:654275601676:web:5d07634270ac6a51b7d529"
};
