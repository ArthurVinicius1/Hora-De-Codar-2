/* 4. Faça um programa que leia 3 valores informados pelo usuário (considere que não serão informados valores iguais) 
e escrever a soma dos 2 maiores. */

var primeiro_numero = parseInt(prompt("Insira o primeiro número:"));
var segundo_numero = parseInt(prompt("Insira o segundo número:"));
var terceiro_numero = parseInt(prompt("Insira o terceiro número:"));
var total = primeiro_numero + segundo_numero + terceiro_numero;

if (primeiro_numero < segundo_numero && primeiro_numero < terceiro_numero) {
  alert("A soma dos dois maiores é " + (total - primeiro_numero));
} else if (
  segundo_numero < primeiro_numero &&
  segundo_numero < terceiro_numero
) {
  alert("A soma dos dois maiores é " + (total - segundo_numero));
} else if (
  terceiro_numero < primeiro_numero &&
  terceiro_numero < segundo_numero
) {
  alert("A soma dos dois maiores é " + (total - terceiro_numero));
}
