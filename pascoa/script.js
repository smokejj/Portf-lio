alert("Feliz Páscoa");


var botao = document.createElement("button");
botao.textContent = "Mudar mensagem";
botao.className = "botao-estilizado";

document.querySelector(".carta").appendChild(botao);

botao.onclick = function () {
  var texto = document.querySelector("#texto");
  texto.innerHTML = `
    Querido amigo,<br><br>
    Que sua Páscoa seja cheia de amor, carinho e muitos chocolates! 🐰🍫<br><br>
    Um grande abraço!
  `;
}
 