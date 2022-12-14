import { Aluno } from "./Aluno.js";


let aluno1: Aluno = new Aluno("Fulano", 18, [7, 8, 10])

console.log(`Média do aluno ${aluno1.nome} = ${aluno1.calcularMedia()}`);


$("#botao1").on("click", function () {
    alert("opa")

});


$("#ver_nota").on("click", function () {
    console.log(`O aluno ${aluno1.nome} tem ${aluno1.idade} anos e suas notas não ${aluno1.notas}`);

})

$("#diminuir_notas").on("click", function () {


    for (let index = 0; index < aluno1.notas.length; index++) {
        if (aluno1.notas[index] > 0) {

            --aluno1.notas[index];
        }

    }
})