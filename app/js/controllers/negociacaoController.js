import { Negociacao } from "../models/negociacao.js";
import { ListaNegociacoes } from "../models/listaNegociacoes";
export class NegociacaoController{
    #campmData;
    #campoQuantidade;
    #campoValor;
    #listaNegociacao = new ListaNegociacoes();

    constructor(){
        this.#campmData = document.getElementById('dt-negociacao');
        this.#campoQuantidade = document.getElementById('qtde-acoes-vendidas');
        this.#campoValor = document.getElementById('vlr-acoes');
    }

    criarNegociacao(){
        let data = new Date(this.#campmData.value);
        let quantidade = this.#campoQuantidade.value;
        let valor = this.#campoValor.value;
        let negociacao = new Negociacao(data, quantidade, valor)

        this.#listaNegociacao.adicionar(negociacao)
        console.log(this.#listaNegociacao.Negociacao);
    }
}