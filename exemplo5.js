const prompt = require("prompt-sync")();

let alunos = [];
let qtd= prompt("Quantos alunos tem em sala: ");

for (let index = 0; index < qtd; index++) {
    let pessoa = {
        nome : undefined,
        idade : undefined,
        notas : []
    }   
    pessoa.nome = prompt("Informe o nome: ");
    pessoa.idade = prompt("Informe a idade de "+pessoa.nome+": ");
    for (let index2 = 0; index2 < 3; index2++) {
        pessoa.notas.push(prompt("Informe a nota "+index2+" do aluno "+pessoa.nome+": "));    
    } 
    alunos.push(pessoa);
}

console.log(alunos);