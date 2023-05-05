const primeiro_numero = parseInt(prompt("Insira o primeiro número:"));
const segundo_numero = parseInt(prompt("Insira o segundo número:"));

// Pedindo entrada do usuário para a operação a ser realizada
const operacao = parseInt(
  prompt(
    "Escolha a operação digitando o número:\n1. Adição\n2. Subtração\n3. Multiplicação\n4. Divisão"
  )
);

// Realizando a operação escolhida
let resultado;
if (operacao === 1) {
  resultado = primeiro_numero + segundo_numero;
  alert(`A soma é: ${resultado}`);
} else if (operacao === 2) {
  resultado = primeiro_numero - segundo_numero;
  alert(`A diferença é: ${resultado}`);
} else if (operacao === 3) {
  resultado = primeiro_numero * segundo_numero;
  alert(`O produto é: ${resultado}`);
} else if (operacao === 4) {
  resultado = primeiro_numero / segundo_numero;
  alert(`A divisão é: ${resultado}`);
} else {
  alert("Operação inválida!");
}
