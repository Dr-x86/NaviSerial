// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/11.10.0/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/11.10.0/firebase-analytics.js";
import { getFirestore, collection, getDocs } from "https://www.gstatic.com/firebasejs/11.10.0/firebase-firestore.js";

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAjckUSYYqLeZYU8YQGpHADOv-wxzPfT3o",
    authDomain: "proyecto-wired.firebaseapp.com",
    projectId: "proyecto-wired",
    storageBucket: "proyecto-wired.firebasestorage.app",
    messagingSenderId: "896952254127",
    appId: "1:896952254127:web:c8573cbd33574682f91e5a",
    measurementId: "G-MGPM41LHNP"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getFirestore(app); // Inicializa Firestore

async function obtenerComentarios() {
    const comentariosRef = collection(db, 'comentarios'); // Asegúrate de que esta sea la ruta correcta
    const snapshot = await getDocs(comentariosRef);
    const comentarios = snapshot.docs.map(doc => doc.data());
    return comentarios;
}

// Llamar a la función y manejar la promesa
obtenerComentarios().then(comentarios => {
    const longitud = comentarios.length;
    for (var i = 0; i < longitud; i++) {
        console.log("Comentario:", comentarios[i]['comentario'])
    }

}).catch(error => {
    console.error("Error al obtener comentarios:", error);
});

async function mostrarComentarios() {
    try {
        const commentsContainer = document.querySelector('.comments-container');
        const template = document.getElementById("template-com");

        if (!template) {
            console.error("El template no se encontró en el DOM.");
            return;
        }
        
        const comentarios = await obtenerComentarios()

        commentsContainer.innerHTML = '';

        comentarios.forEach(comentario => {
            const nuevoComentario = template.cloneNode(true);
            nuevoComentario.querySelector('.comentario-texto').textContent = comentario.comentario;
            nuevoComentario.style.display = 'flex'; // Asegúrate de que el nuevo comentario sea visible
            commentsContainer.appendChild(nuevoComentario);
        });
    } catch (error) {
        console.error("Error al mostrar comentarios:", error);
    }
}

document.addEventListener('DOMContentLoaded', () => {
    mostrarComentarios();
});