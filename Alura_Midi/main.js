function tocaSomPom() {
  document.querySelector("#som_tecla_pom").play();
}

const listaDeTclas = document.querySelectorAll(".tecla");

let contador = 0;

while (contador < listaDeTclas.length) {
  listaDeTclas[contador].onclick = tocaSomPom;

  contador = contador + 1;
  console.log(contador);
}
