let number = prompt("Entrer un nombre");
number = parseInt(number);
function afficherSigne(number) {
  if(Number.isInteger(number)){
    if (number >= 0) {
      document.write("P");
    } else if (number < 0) {
      document.write("N");
    }
  }
  }
afficherSigne(number);