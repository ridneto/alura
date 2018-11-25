class ListaNegociacoes{
    constructor(armadilha){
        this._negociacoes = []
    }

    adiciona(negogiacao){
        this._negociacoes.push(negogiacao);
    }

    get negociacao(){
        return [].concat(this._negociacoes);
    }

    esvazia(){
        this._negociacoes = [];
    }

    get volumeTotal(){
        return this._negociacoes.reduce((total, n) => total + n.volume, 0.0);
    }

    ordena(criterio){
        this._negociacoes.sort(criterio);
    }

    inverteOrdem(){
        this._negociacoes.reverse();
    }
}