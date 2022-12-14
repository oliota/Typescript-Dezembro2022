let nome = "Rubem";
let idade = 33;
let altura = 1.8;
let ja_sei_ts = true;
console.log("Tipo da variavel nome =", typeof (nome));
console.warn(`Tipo da variavel idade = ${typeof (idade)}`);
console.error(`Tipo da variavel altura = ${typeof (altura)}`);
console.log(`%c Tipo da variavel ja_sei_ts = ${typeof (ja_sei_ts)}`, "color:blue;");
function prodecimento() {
    console.log("Procedimeno sempre executa igual, pois não e dinamica quando nao recebe paremetros e também nao retorna valores");
}
//função dinamica que recebe parametros e retorna o resultado do calculo
function somar(numeroA, numeroB) {
    return numeroA + numeroB;
}
//função dinamica que recebe parametro e retorna o resultado de uma comparação
function ehPar(numero) {
    return numero % 2 == 0;
}
