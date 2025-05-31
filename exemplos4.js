const prompt = require("prompt-sync")();

let pessoa = {
    nome : "Douglas",
    idade : 29,
    cpf : "000.000.000-00"
}

pessoa.nome = prompt("Informe outro nome: ");

console.log(pessoa);