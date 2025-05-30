const prompt = require("prompt-sync")();

let notas = [], nomes = [],status;
let qtd = prompt("Informe a quantidade de alunos: ");

for (let index = 0; index < qtd; index++) {
    nomes[index] = prompt("Informe o nome: ");
    notas[index] = prompt("Informe a nota do(a) "+nomes[index]+": ");
}

for (let index = 0; index < qtd; index++) {
    if(notas[index] >= 7){
        status = "Aprovado"
    }else if(notas[index] >= 4){
        status = "Exame"
    }else{
        status = "Reprovado"
    }
    console.log("O(a) aluno(a) "+nomes[index]+" ficou com a nota "+notas[index]+" e o status é "+status);
}