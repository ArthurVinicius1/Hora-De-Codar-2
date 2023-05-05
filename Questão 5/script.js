/* 5.  Faça um programa que leia 6 valores informados pelo usuário, calcule, exiba os números informados e escreva a média aritmética desses valores lidos. */
let primeiro_numero = parseInt(prompt("Insira o primeiro número:"));
let segundo_numero = parseInt(prompt("Insira o segundo número:"));
let terceiro_numero = parseInt(prompt("Insira o terceiro número:"));
let quarto_numero = parseInt(prompt("Insira o quarto número:"));
let quinto_numero = parseInt(prompt("Insira o quinto número:"));
let sexto_numero = parseInt(prompt("Insira o sexto número:"));
let media =
  (primeiro_numero +
    segundo_numero +
    terceiro_numero +
    quarto_numero +
    quinto_numero +
    sexto_numero) /
  6;

alert(`Essa é a média dos números informados : ${media.toFixed(2)}`);
