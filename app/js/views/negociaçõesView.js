export class NegociaçõesView{
    atualizarTabelaNegociacoes(data, quantidade, valor){
        let tabela = document.getElementById("tb-lista");
        let qtdeLinhas = tabela.rows.length;
        let linha = tabela.insertRow(qtdeLinhas);

        let cellCodigo = linha.insertCell(0);
        let cellData = linha.insertCell(1);
        let cellQuantidade = linha.insertCell(2);
        let celValor = linha.insertCell(3);

        cellCodigo.innerHTML = qtdeLinhas;
        cellData.innerHTML = data;
        cellQuantidade.innerHTML = quantidade;
        celValor.innerHTML = valor;
    }
}