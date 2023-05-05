/* 6. Faça um programa que receba quatro valores informados pelo usuário, mas informe somente o primeiro, o último e o maior de todos eles (considere que
todos os números informados serão diferentes) */
let array = [];
for (let i = 1; i <= 4; i++) {
  let numero = parseInt(prompt(`Insira o ${i}º número:`));
  array.push(numero);
}

let maiorNumero = array[0];
for (let i = 1; i < array.length; i++) {
  if (array[i] > maiorNumero) {
    maiorNumero = array[i];
  }
}

alert(
  `O primeiro número é ${array[0]}, o último número é ${
    array[array.length - 1]
  } e o maior número é ${maiorNumero}`
);
