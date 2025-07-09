const btn = document.getElementById('vhs');
const ventanas = document.querySelectorAll('.win95-window');

btn.addEventListener('click', () => {
    // Revisamos si al menos una ventana NO tiene la clase activa
    const algunaNoActiva = Array.from(ventanas).some(v => !v.classList.contains('win95-window-active'));

    ventanas.forEach(ventana => {
      if (algunaNoActiva) {
        ventana.classList.add('win95-window-active');
      } else {
        ventana.classList.remove('win95-window-active');
      }
    });

    btn.textContent = algunaNoActiva ? '🟥' : 'CRT';
});