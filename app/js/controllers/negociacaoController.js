export class NegociacaoController{
    #campmData;
    #campoQuantidade;
    #campoValor;

    constructor(){
        this.#campmData = document.getElementById('dt-negociacao');
        this.#campoQuantidade = document.getElementById('qtde-acoes-vendidas');
        this.#campoValor = document.getElementById('vlr-acoes');
    }

    criarNegociacao(){
        let data = new Date(this.#campmData.value);
        let quantidade = this.#campoQuantidade.value;
        let valor = this.#campoValor.value;
        let negociacaoController = new NegociacaoController(data, quantidade, valor)

        console.log(negociacaoController);
    }
}