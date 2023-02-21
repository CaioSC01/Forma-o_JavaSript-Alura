function tocaSom(idElementoAudio) {
  document.querySelector(idElementoAudio).play();
}

const listaDeTclas = document.querySelectorAll(".tecla");

for (let contador = 0; contador < listaDeTclas.length; contador++) {
  const tecla = listaDeTclas[contador];

  const instrumento = tecla.classList[1];

  const idAudio = `#som_${instrumento}`;
  listaDeTclas[contador].onclick = function () {
    tocaSom(idAudio);
  };
	tecla.onkeydown = function(){
		tecla.classList.add('ativa')
	}
	tecla.onkeyup = function(){
		tecla.classList.remove('ativa')
	}

 
}
