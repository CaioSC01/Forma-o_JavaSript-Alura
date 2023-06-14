async function listaVideos() {
  const conexao = await fetch("http://localhost:3000/videos");
  const conexaoConvertida = await conexao.jason();
  return conexaoConvertida;
}

export const conectaAPI = {
	listaVideos
}
