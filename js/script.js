const tabellone = document.getElementById("tabellone");

for (let i = 1; i <= 76; i++) {
  const celleTab = document.createElement("div");
  celleTab.className = "cell";
  celleTab.textContent = i;
  tabellone.appendChild(celleTab);
}

const estrazione = document.getElementById("bttnestrazione");
const numeriEstratti = []; // CREO UN ARRAY VUOTO PER METTERCI TUTTI I VALORI RANDOMICI USCITI //
estrazione.addEventListener("click", () => {
  const numberRandom = Math.floor(Math.random() * 76) + 1;
  console.log(numberRandom);

  if (numeriEstratti.includes(numberRandom)) {
    //USO IL METODO INCLUDES PER CONTROLLARE SE DENTRO L'ARRAY C'è IL NUMERO USCITO//
    alert("Il numero è già uscito");
    return;
  }

  numeriEstratti.push(numberRandom); //PUSHO IL NUMERO NELL'ARRAY, CHIARAMENTE AL PRIMO GIRO SARà VUOTO//

  const celleTab = document.querySelectorAll(".cell");

  celleTab.forEach((cellaTab) => {
    if (numberRandom === parseInt(cellaTab.textContent)) {
      cellaTab.style.backgroundColor = "green";
    }
  });
});
