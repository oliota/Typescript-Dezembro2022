import { Professor } from "./Professor.js";


let professor1:Professor= new Professor("Oliota","Typescript",["Tipagem de variaveis","Tipagem de funções","Orientação a objetos","Abstração","Encapsulamento","Herança","Polimorfismo"])

console.log("Sobre o professor:",professor1);

console.log("Antes da mudança");

console.log(professor1.nome);
console.log(professor1.disciplina);
console.log(professor1.assuntos);

 professor1.nome="Rubem Oliota"
 professor1.disciplina="Super Typescript"
 professor1.assuntos.push("Exercicios")

 
console.log("Depois da mudança");

console.log(professor1.nome);
console.log(professor1.disciplina);
console.log(professor1.assuntos);