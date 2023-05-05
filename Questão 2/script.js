/* 2. Faça um programa que leia um valor informado pelo usuário e diga se o valor informado é positivo, negativo ou zero. */

let positivos = 1;
let negativos = -1;
let zero = 0;
let numero = parseInt(prompt("Insira o um número:"));

if (numero > positivos || numero == positivos) {
  alert("O número " + numero + " é positivo");
} else if (numero < negativos || numero == negativos) {
  alert("O número " + numero + " é negativo");
} else if (numero == zero) {
  alert("O número é ZERO");
}
