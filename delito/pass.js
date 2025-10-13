function ofuscar(texto) {
  return texto
    .split("")
    .reverse()
    .map(c => String.fromCharCode(c.charCodeAt(0) + 1))
    .join("");
}

function recuperar(ofuscado) {
  return ofuscado
    .split("")
    .reverse()
    .map(c => String.fromCharCode(c.charCodeAt(0) - 1))
    .join("");
}
const API_KEY = "8ba5395226c049bb8ff816496c16859c.8tGkqfsvheCvYom5";
const API_URL = "https://api.z.ai/api/paas/v4/chat/completions";

