// Creation des elements

const h1 = document.createElement("h1");
const h3 = document.createElement("h3");
const h4 = document.createElement("h4");
let input = document.createElement("INPUT");
let input2 = document.createElement("INPUT");
var select = document.getElementById("list").value;
let div = document.createElement("div");
var btn = document.createElement("BUTTON");



// Ajout des Attributs
// Input n°1
input.setAttribute("type", "number");
input.setAttribute("value", "");
input.setAttribute("id", "in1");

// Input n°2
input2.setAttribute("type", "number");
input2.setAttribute("value", "");
input2.setAttribute("id", "in2");

// Lancer l'event de recherche de valeur avec la touche Enter
input.addEventListener("keypress", function (event) {
  if (event.key === "Enter") {
    getResult();
  }
});

// Ou bien le faire en appuyant sur le button "Click Me"
btn.textContent= "Calcul"
btn.onclick = function () {
  getResult();
};

// Modifie la valeur de la variable String to Number et fait le calcul (addition)
function getResult() {
  let value1 = Number(input.value);
  let value2 = Number(input2.value);
  var choix =
    document.getElementById("list").options[
      document.getElementById("list").selectedIndex
    ].text;
  var resultat;

  console.log(choix);

  if (choix == "Addition") {
    resultat = value1 + value2;
  } else if (choix == "Soustraction") {
    resultat = value1 - value2;
  } else if (choix == "Multiplication") {
    resultat = value1 * value2;
  } else if (choix == "Division") {
    resultat = value1 / value2;
  } else {
    alert("Selectionner un signe a effectuer");
  }

  h3.innerHTML = "Voici le resultat du calcul : " + resultat;
}

// Texte
h1.innerHTML = "Calculatrice de Wish";

// Parents
const body = document.body;

body.appendChild(h1);
div.appendChild(input);
div.appendChild(input2);
div.appendChild(btn);
body.appendChild(div)
body.appendChild(h3);
body.appendChild(h4);
