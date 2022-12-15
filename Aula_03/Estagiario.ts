import { Trabalhador } from './Trabalhador.js';


export class Estagiario extends Trabalhador {
 
    private _tempoLimite: number

    constructor(
        nome: string,
        idade: number,
        obrigacoes: Array<string>,
        tempoLimite: number,

    ) {
        super(nome,idade,obrigacoes) 
        this._tempoLimite = tempoLimite
    }

    

    get tempoLimite():number{
        return this._tempoLimite
    }

    set tempoLimite(valor:number){
        this._tempoLimite=valor
    }

}