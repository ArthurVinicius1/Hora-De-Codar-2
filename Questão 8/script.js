alert(
  "Coloque a sua nota de quatro testes valendo dez, se sua média for 5 ou maior, você passa!"
);

let notas = [];
let soma = 0;

for (let i = 1; i <= 4; i++) {
  let nota = parseInt(prompt(`Insira a nota do ${i}º teste:`));
  if (nota > 0 && nota < 10) {
    notas.push(nota);
    soma += nota;
  }
}

let media = soma / notas.length;

if (media >= 5) {
  alert("Você passou no teste!");
} else {
  alert("Tente novamente!");
}

document.write(
  `Suas notas: ${notas.join(", ")} <br> Sua média: ${media.toFixed(2)}`
);
