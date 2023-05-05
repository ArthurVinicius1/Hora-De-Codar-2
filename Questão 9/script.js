const anoNascimento = parseInt(prompt("Insira o ano em que você nasceu:"));

const anoAtual = new Date().getFullYear();

const idade = anoAtual - anoNascimento;

if (idade >= 18 && idade <= 130) {
  alert("Você pode votar este ano!");
} else if (idade < 0) {
  alert("Ano de nascimento inválido!");
} else {
  alert("Você não pode votar este ano!");
}
