
document.addEventListener("DOMContentLoaded", function () {
  const idiomaSelect = document.getElementById("idioma");
  const iframe = document.getElementById("video-frame");
  const btnAnterior = document.getElementById("anterior");
  const btnSiguiente = document.getElementById("siguiente");
  const infoEpisodio = document.getElementById("info-episodio");
  const capituloSelect = document.getElementById("capitulo-select");

  const episodios = {
    es: [
        "https://mega.nz/embed/JdZBRbIZ#MagCEub6dTptfNHiOn4uE5B_xd7NHevVjkYsqzIYvM0",
        "https://mega.nz/embed/UcByRCoZ#mqJVw-mEZgoT3_TJsGsr7ASrwFD1it8VyQho7i3Y3bk",
        "https://mega.nz/embed/UcIFBaDa#ZIcWtQncC9UKMSsi4fec09_opldHCMRXKjEQGyXijyI",
        "https://mega.nz/embed/UNIiQY7K#JFfYUSC1voEYJC0ZNjDnUZMrre182ex-Jeln1P6ZLRQ",
        "https://mega.nz/embed/AEQmmbzC#LkCKzqrF_1Gj1MwBIyUSDyD1MUGCQRL6UHkDPZOCR38",
        "https://mega.nz/embed/FUB2CLKK#CxicrKKU5nekDBwlILIbQOez-CsGVVD19svhwsLFs6U",
        "https://mega.nz/embed/IYxWgLqD#N4qvGchTsVuApb9rRy9NCkMjBpSM5pC3GzWGafh5EyE",
        "https://mega.nz/embed/VZplQYwC#cYJC-ytX2-7z7GA1unRAS2NI34lUzf-SX0WqGlRDjKY",
        "https://mega.nz/embed/YQgmmaDS#mqsxZ1iW61x0CfjxWfQadcPOe7lYLDa_XPho51r3TuE",
        "https://mega.nz/embed/9VRgWDTK#QSyPlkZ7d--RVNVmFkW-HNKmNxSztjcL8GjuXYepPCc",
        "https://mega.nz/embed/QAJSxLrI#5dKnZiQjXRLhY9s6ZELJv97bl_UCGfw7G19kyGpU3XE",
        "https://mega.nz/embed/ENwA1IzR#LtKhotJKu2Gba-ZN0nlm4NY9jro5VtMAYbf8QF4mqxQ",
        "https://mega.nz/embed/hYhQEZ5Z#M9H-RRsg4sJ879xzJdxZbIJNp1iRJS3cdnugocPTDQw",
    ],
    jp: [
      "https://mega.nz/embed/vBl1VCxL#6WRXQc9Kyh6AsPKkQHutfknQ5aHfZ6RiPSbMpzQv0ek",
      "https://mega.nz/embed/iYMFnAQT#xKBf7p87IPpu1yey2A4YzSVkhajeYwwnskVn3Mdd2GU",
      "https://mega.nz/embed/CBljmbqD#T7LKQXZp0hpm8qungaAgY4dsEgqWaSdCdUCsAu2_nug",
      "https://mega.nz/embed/WZslibAb#zccl59S5Zu2Utxo93U_ROSavaQlrn7fXpSyWCIh03y8",
      "https://mega.nz/embed/uMd1ACCC#83UmjeUMnGMNi7BuIf9BJjqfsC4GyBwQ4ac2oiAY1uk",
      "https://mega.nz/embed/aZETlRSJ#LhHrjlhUL-lpCxgUqBKS7ep81xLO9Djgf_VKboHt1ds",
      "https://mega.nz/embed/3c1CSIqa#M7NNGqQZK5jkVk7BKaXda4yRWSBqnHIAZ-Ry-aoTDrk",
      "https://mega.nz/embed/7JtjUL5T#bxKqnjOS4eOW86ojQI8vjDCJTSC9D9wkMQpo4oL_HGg",
      "https://mega.nz/embed/6B0QHTLC#tVTw5JXBSb182syr6Byp9maCq0KFDpQukrOfCQpoEWQ",
      "https://mega.nz/embed/jMVAnTrT#i9EGaOw4hFRiaNp9lU_MDTkYlLZdzN5oh0iMZnsFhcY",
      "https://mega.nz/embed/6c1GxJxC#EpVsy6v3-sB5xBX65OOtarYzUz5UqCi5I5U_j4qAAOI",
      "https://mega.nz/embed/7Q1TVISb#ff5Kv60yvVvz0jmiB_DuffpLSX-98BGO1SszCY5t538",
      "https://mega.nz/embed/rZ0mWbYa#s4JD6WFGFQrmrm03qrnsKEBWNeZD5oIrQ2Hl5X5ye88",
    ]
  };

  
  const titulos = ["Weird","Girls","Psyche","Religion","Distortion","Kids","Society","Rumors","Protocol","Love","Infornography","Landscape","Ego"];
  
  let idiomaActual = idiomaSelect.value;
  let episodioActual = 0;

  function actualizarIframe() {
    const listaIdioma = episodios[idiomaActual];
    
    const listaCapitulo = capituloSelect.value;
    if (listaCapitulo !== "none") {
      episodioActual = parseInt(listaCapitulo) - 1;
    } else {
      episodioActual = 0;
    }
    
    iframe.src = listaIdioma[episodioActual];
    infoEpisodio.textContent = `Episodio ${episodioActual + 1}: ${titulos[episodioActual]}`;
  }

  idiomaSelect.addEventListener("change", function () {
    idiomaActual = this.value;
    episodioActual = 0;
    actualizarIframe();
  });

  capituloSelect.addEventListener("change", function () {
    const capituloSeleccionado = this.value;
    if (capituloSeleccionado !== "none") {
      episodioActual = parseInt(capituloSeleccionado) - 1;
      actualizarIframe();
    }
  });

  btnAnterior.addEventListener("click", function () {
    if (episodioActual > 0) {
      episodioActual--;
      capituloSelect.value = episodioActual + 1; // Actualizar el select
      infoEpisodio.textContent = `Episodio ${episodioActual + 1}: ${titulos[episodioActual]}`;
      actualizarIframe();
    }
  });

  btnSiguiente.addEventListener("click", function () {
    if (episodioActual < episodios[idiomaActual].length - 1) {
      episodioActual++;
      capituloSelect.value = episodioActual + 1; // Actualizar el select
      infoEpisodio.textContent = `Episodio ${episodioActual + 1}: ${titulos[episodioActual]}`;
      actualizarIframe();
    }
  });

  // Inicializar
  actualizarIframe();
});
