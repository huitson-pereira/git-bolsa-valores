import {Negociacao} from "../models/negociacao.js";
import {ListaNegociacao} from "../models/listaNegociacoes.js";
export class NegociacaoController{
    #campmData;
    #campoQuantidade;
    #campoValor;
    #listaNegociacao = new ListaNegociacao();

    constructor(){
        this.#campmData = document.getElementById('dt-negociacao');
        this.#campoQuantidade = document.getElementById('qtde-acoes-vendidas');
        this.#campoValor = document.getElementById('vlr-acoes');
    }

    criarNegociacao(){
        let data = new Date(this.#campmData.value);
        let dia = data.getUTCDate();
        let mes = data.getUTCMonth() + 1;
        let ano = data.getUTCFullYear();
        let dataNegociacao = `${dia}/${mes}/${ano}`;
        let quantidade = this.#campoQuantidade.value;
        let valor = this.#campoValor.value;
        let negociacao = new Negociacao(dataNegociacao, quantidade, valor)

        this.#listaNegociacao.adicionar(negociacao)
        console.log(this.#listaNegociacao.negociacao);
    }
}