/* 1. Escreva um programa em que o usuário informe dois números utilizando o "prompt". Então escreva em tela o maior deles. */

let primeiro_numero = parseInt(prompt("Insira o primeiro número:"));
let segundo_numero = parseInt(prompt("Insira o segundo número:"));

if (primeiro_numero > segundo_numero) {
  alert("O número maior é " + primeiro_numero);
} else if (primeiro_numero === segundo_numero) {
  alert("Os números são iguais");
} else {
  alert("O número maior é " + segundo_numero);
}
