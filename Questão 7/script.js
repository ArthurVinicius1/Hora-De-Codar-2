let numeros = [];

for (let i = 1; i <= 6; i++) {
  let numero = parseInt(prompt(`Insira o ${i}º número:`));
  numeros.push(numero);
}

let soma = 0;
let numerosInferiores = [];

for (let i = 0; i < numeros.length; i++) {
  if (numeros[i] < 72) {
    soma += numeros[i];
    numerosInferiores.push(numeros[i]);
  }
}

document.write(`Os resultados são: <br>
  • Números informados: ${numeros.join(", ")} <br>
  • Números inferiores a 72: ${numerosInferiores.join(", ")} <br>
  • Soma dos números inferiores a 72: ${soma}`);
