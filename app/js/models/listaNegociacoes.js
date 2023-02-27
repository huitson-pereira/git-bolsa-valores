export class ListaNegociacao{
    #negociacao = [];

    adicionar(negociacao){
        this.#negociacao.push(negociacao);   
    }

    consultaPorValorMaiorQue(valor){
        var listaTabela = [].concat(this.#negociacao);
        let listaRetorno =[];

        for(let i = 0; i < listaTabela.length; i++){
            if(listaTabela[i].valor > valor) {
                listaRetorno.push(listaTabela[i]);
            }
        }

        return listaRetorno;
    };

    pequisaNegociacoes = () => this.consultaPorValorMaiorQue(5000);

    
    get negociacao(){
        return [].concat(this.#negociacao);
    }
} 