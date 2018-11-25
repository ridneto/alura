class NegociacaoService{
    constructor(){
        this._http = new HttpService();
    }

    _obterNegoacioes(url){
        return this._http
            .get(url)
            .then(negociacoes => {
                return negociacoes.map(objeto => new Negociacao(new Date(objeto.data), objeto.quantidade, objeto.valor));
            }).catch(() => {
                throw new Error('Não foi possível obter as negociações');
            });
    }

    obterNegociacoesDaSemana(){
        return this._obterNegoacioes('negociacoes/semana');
    }

    obterNegociacoesDaSemanaAnterior(){
        return this._obterNegoacioes('negociacoes/anterior');
    }

    obterNegociacoesDaSemanaRetrasada(){
        return this._obterNegoacioes('negociacoes/retrasada');
    }
}