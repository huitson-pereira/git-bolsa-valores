export class ListaNegociacao{
    #negociacao = [];

    adicionar(negociacao){
        this.#negociacao.push(negociacao);   
    }

    get negociacao(){
        return [].concat(this.#negociacao);
    }
}