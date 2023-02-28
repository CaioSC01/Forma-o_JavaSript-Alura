const menorValor = 1;
const maiorvalor = 1000;

const numeroSecreto = gerarNumeroAleatorio();

function gerarNumeroAleatorio() {
  return parseInt(Math.random() * 100);
}

console.log("numero secreto:", numeroSecreto);

const elementoMenorValor = document.getElementById("menor_valor");
elementoMenorValor.innerHTML = menorValor;

const elementoMaiorValor = document.getElementById("maior_valor");
elementoMaiorValor.innerHTML = maiorvalor;
