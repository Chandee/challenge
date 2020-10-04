import axios from "axios";

const queryAPI =
  "?apikey=1a754d78f886ce132ab749a30da02bbe&hash=b78cca0064dbcfaae1be040182d88090&ts=1601801671383";
const URLbase =
  "https://cors-anywhere.herokuapp.com/https://gateway.marvel.com/v1/public/";

//cancel token
const CancelToken = axios.CancelToken;
let source = CancelToken.source();
//const chave = characters/1009351?apikey=0d5ae9536dec8869bfc4df3ca842bc8c&hash=a46a41c5f67aee5a3dc17316629d364a&ts=1601528497249
export const heroiOrdemAlfabetica = () => {
  return axios.get(URLbase + "characters" + queryAPI + "&orderBy=name");
};

export const heroiEspecifico = (id) => {
  return axios.get(URLbase + "characters/" + id + queryAPI);
};

export const resgataQuadrinho = (id) => {
  return axios.get(
    URLbase +
      "characters/" +
      id +
      "/comics" +
      queryAPI +
      "&orderBy=-onsaleDate&limit=10"
  );
};

export const buscaHeroiPorNome = (nome) => {
  source && source.cancel("Operation canceled due to new request.");

  source = axios.CancelToken.source();
  console.log("nome", nome.length);
  return axios.get(
    URLbase +
      "characters" +
      queryAPI +
      (nome.length > 0 ? "&nameStartsWith=" + nome : ""),
    {
      cancelToken: source.token,
    }
  );
};
