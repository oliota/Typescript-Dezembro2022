import { Estagiario } from "./Estagiario.js";
import { Junior } from "./Junior.js";
import { Trabalhador } from './Trabalhador.js';


let estagiario1:Estagiario= new Estagiario("Fulano",17,["Cafezinho","Consulta em Sql"],6)


console.log("Estagiario1 = ",estagiario1);
console.log("Atributos = ",estagiario1.nome);
console.log("Atributos = ",estagiario1.idade);
console.log("Atributos = ",estagiario1.obrigacoes);
console.log("Tempo limite = ",estagiario1.tempoLimite);


let estagiario2:Estagiario= new Estagiario("Maria",16,["Telefone","Chamados no sistema"],6)


console.log("Estagiario2 = ",estagiario2);
console.log("Atributos = ",estagiario2.nome);
console.log("Atributos = ",estagiario2.idade);
console.log("Atributos = ",estagiario2.obrigacoes);
console.log("Tempo limite = ",estagiario2.tempoLimite);



let juninho1:Junior= new Junior("Junin",20,["Relatorios","Cadastros"],"Cursando Faculdade")
console.log("juninho1 = ",juninho1);
console.log("Atributos = ",juninho1.nome);
console.log("Atributos = ",juninho1.idade);
console.log("Atributos = ",juninho1.obrigacoes);
console.log("Formacao academica = ",juninho1.formacaoAcademica);


let juninho2:Junior= new Junior("Quase plenin",20,["Resolução de bugs","Apoio ao novatos"],"Adiando a monografia")
console.log("juninho2 = ",juninho2);
console.log("Atributos = ",juninho2.nome);
console.log("Atributos = ",juninho2.idade);
console.log("Atributos = ",juninho2.obrigacoes);
console.log("Formacao academica = ",juninho2.formacaoAcademica);



let apenasTrabalhador:Trabalhador= new Trabalhador("Zezinho",18,["Vontade de trabalhar","Precisa pagar as contas"])
console.log("apenasTrabalhador = ",apenasTrabalhador);
console.log("Atributos = ",apenasTrabalhador.nome);
console.log("Atributos = ",apenasTrabalhador.idade);
console.log("Atributos = ",apenasTrabalhador.obrigacoes);