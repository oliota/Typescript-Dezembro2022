import { Trabalhador } from './Trabalhador.js';


export class Junior extends Trabalhador {
 
    private _formacaoAcademica: string

    constructor(
        nome: string,
        idade: number,
        obrigacoes: Array<string>,
        formacaoAcademica: string,

    ) {
       
        super(nome,idade,obrigacoes) 
        this._formacaoAcademica = formacaoAcademica
    }

    

    get formacaoAcademica():string{
        return this._formacaoAcademica
    }

    set formacaoAcademica(valor:string){
        this._formacaoAcademica=valor
    }

}