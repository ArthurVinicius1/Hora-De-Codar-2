/* 3. Faça um programa para ler 3 valores (considere que não serão informados valores iguais) e escrever o maior deles. */

var primeiro_numero = parseInt(prompt("Insira o primeiro número:"));
var segundo_numero = parseInt(prompt("Insira o segundo número:"));
var terceiro_numero = parseInt(prompt("Insira o terceiro número:"));

if (primeiro_numero > segundo_numero && primeiro_numero > terceiro_numero) {
  alert("O número maior é " + primeiro_numero);
} else if (
  segundo_numero > primeiro_numero &&
  segundo_numero > terceiro_numero
) {
  alert("O número maior é " + segundo_numero);
} else if (
  terceiro_numero > primeiro_numero &&
  terceiro_numero > segundo_numero
) {
  alert("O número maior é " + terceiro_numero);
}
