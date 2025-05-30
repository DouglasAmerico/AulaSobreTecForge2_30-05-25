const prompt = require("prompt-sync")();
let qtd;
do{
    qtd = prompt("Quantos pessoas quer intrevistar? ");
    if(qtd <= 0) {
        console.log("O numero de pessoas tem que ser maior que 0");
    }
} while (qtd <= 0);

let nome, idade,qtdPessoasMaioresDeIdade=0;

for(let i=0;i<qtd;i++){
    nome = prompt("Informe o nome ");
    do{
        idade = prompt("Informe a idade do(a) "+nome+": ");
        if(idade < 0 || idade > 120){
            console.log("Idades validas são entre 0 e 120 anos");
        }
    } while(idade < 0 || idade > 120);    
    if(idade >= 18){
        qtdPessoasMaioresDeIdade++;
    }
}

console.log("Fora informadas "+qtd+" pessoas e "+qtdPessoasMaioresDeIdade+" são maiores de idade");
