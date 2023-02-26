export class Negociacao {
    #dataNegociacao;
    #quantidadeAcoes;
    #valorAcoes;

    constructor(data, quantidade, valor) {
        this.#dataNegociacao = data;
        this.#quantidadeAcoes = quantidade;
        this.#valorAcoes = valor;
    }

    get dataNegociacao() {
        return this.#dataNegociacao;
    }

    get quantidadeAcoes() {
        return this.#quantidadeAcoes;
    }

    get valorAcoes() {
        return this.valorAcoes;
    }
}