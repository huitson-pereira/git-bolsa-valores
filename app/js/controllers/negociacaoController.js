export class negociacaoController{
    #campmData;
    #campoQuantidade;
    #campoValor;

    constructor(){
        this.#campmData = document.getElementById('dt-negociacao');
        this.#campoQuantidade = document.getElementById('qtde-acoes-vendidas');
        this.#campoValor = document.getElementById('vlr-acoes');
    }
}