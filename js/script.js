const tabellone = document.getElementById("tabellone");

for (let i = 1; i <= 76; i++) {
  const celleTab = document.createElement("div");
  celleTab.className = "cell";
  celleTab.textContent = i;
  tabellone.appendChild(celleTab);
}

const tabellina = document.getElementById("tabellina");

for (let i = 1; i <= 24; i++) {
  const celleTabellina = document.createElement("span");
  celleTabellina.className = "cellina";
  celleTabellina.textContent = Math.floor(Math.random() * 76) + 1;
  tabellina.appendChild(celleTabellina);
}

const estrazione = document.getElementById("bttnestrazione");
const numeriEstratti = []; // CREO UN ARRAY VUOTO PER METTERCI TUTTI I VALORI RANDOMICI USCITI //
estrazione.addEventListener("click", (e) => {
  e.preventDefault();
  const numberRandom = Math.floor(Math.random() * 76) + 1; //Math.ceil(Math.random *76)//
  console.log(numberRandom);

  if (numeriEstratti.includes(numberRandom)) {
    //USO IL METODO INCLUDES PER CONTROLLARE SE DENTRO L'ARRAY C'è IL NUMERO USCITO//
    alert("Il numero è già uscito");
    return;
  }

  numeriEstratti.push(numberRandom); //PUSHO IL NUMERO NELL'ARRAY, CHIARAMENTE AL PRIMO GIRO SARà VUOTO//

  const celleTab = document.querySelectorAll(".cell, .cellina"); // oppure [`.cell[numero="$"{random}]`] //

  celleTab.forEach((cellaTab) => {
    if (numberRandom === parseInt(cellaTab.textContent)) {
      cellaTab.style.backgroundColor = "green";
    }
  });
});
