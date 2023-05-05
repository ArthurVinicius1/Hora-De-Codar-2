const altura = parseFloat(prompt("Por favor, informe sua altura:"));
const sexo = prompt("Por favor, informe seu sexo (masculino ou feminino):");

let pesoIdeal;
if (sexo.toLowerCase() === "masculino") {
  pesoIdeal = parseInt(72.7 * altura - 58);
  alert("Seu peso ideal é: " + pesoIdeal + " kg!");
} else if (sexo.toLowerCase() === "feminino") {
  pesoIdeal = parseInt(62.1 * altura - 44.7);
  alert("Seu peso ideal é: " + pesoIdeal + " kg!");
} else {
  alert("Sexo inválido. Por favor, tente novamente.");
}
