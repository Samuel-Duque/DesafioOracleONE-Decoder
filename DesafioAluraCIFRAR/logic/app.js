function cifrar_texto(text) {
  const mapaVogais = {
    e: "enter",
    i: "imes",
    a: "ai",
    o: "ober",
    u: "ufat",
  };
  let texto_cifrado = "";
  if (text.match(/[#*&%[``^~}}()]/)) {
    return "Apenas caracteres alfabéticos são permitidos!";
  }

  for (let letra of text.toLowerCase().split("")) {
    texto_cifrado += mapaVogais[letra] || letra;
  }

  return texto_cifrado;
}

function decifrar_texto(text) {
  const mapaVogais = {
    enter: "e",
    imes: "i",
    ai: "a",
    ober: "o",
    ufat: "u",
  };
  let texto_decifrado = text;
  return texto_decifrado.replace(/enter|imes|ai|ober|ufat/g, (match) => {
    return mapaVogais[match];
  });
}

function esconder() {
  document.getElementById("placehold").style.display = "none";
}

function exibirTextoNaTela(tag, text) {
  let campo = document.querySelector(tag);
  esconder();
  campo.innerText = text;
}

const button_cypher = document.querySelector("#cypher__button");
button_cypher.addEventListener("click", (e) => {
  e.preventDefault();
  if (document.querySelector("#input__message").value === "") {
    alert("Digite algo para cifrar!");
    return;
  }
  const texto = document.querySelector("#input__message").value;
  const texto_cifrado = cifrar_texto(texto);
  console.log(texto_cifrado);
  exibirTextoNaTela("#output__message", texto_cifrado);
});

button_decifrar = document.querySelector("#decrypt__button");
button_decifrar.addEventListener("click", (e) => {
  e.preventDefault();
  if (document.querySelector("#input__message").value === "") {
    alert("Digite algo para decifrar!");
    return;
  }
  const texto = document.querySelector("#input__message").value;
  const texto_decifrado = decifrar_texto(texto);
  console.log(texto_decifrado);
  exibirTextoNaTela("#output__message", texto_decifrado);
});

const button_copy = document.querySelector("#copy_button");
button_copy.addEventListener("click", (e) => {
  e.preventDefault();
  const texto = document.querySelector("#output__message").innerText;
  navigator.clipboard.writeText(texto);
  alert("Texto copiado!");
});
