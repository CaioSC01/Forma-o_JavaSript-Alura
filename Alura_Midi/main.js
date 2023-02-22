function tocaSom(idElementoAudio) {
  const elemento = document.querySelector(idElementoAudio);
  if (elemento && elemento.localName === "audio") {
    elemento.play();
  } else {
    console.log("Elemento não encontrado ou seletor inválido");
  }
}

const listaDeTclas = document.querySelectorAll(".tecla");

for (let contador = 0; contador < listaDeTclas.length; contador++) {
  const tecla = listaDeTclas[contador];

  const instrumento = tecla.classList[1];

  const idAudio = `#som_${instrumento}`;
  listaDeTclas[contador].onclick = function () {
    tocaSom(idAudio);
  };
  tecla.onkeydown = function (e) {
    if (e.code === "space" || e.code === "Enter") {
      tecla.classList.add("ativa");
    }
  };
  tecla.onkeyup = function () {
    tecla.classList.remove("ativa");
  };
}
