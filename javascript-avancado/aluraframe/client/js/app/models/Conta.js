class Conta{
    constructor(saldo){
        this._saldo = saldo;
    }

    get saldo(){
        return this._saldo;
    }

    atualiza(taxa){
        throw new Error('O método atualiza não foi implementado.');
    }
}

class ContaCorrente extends Conta{
    atualiza(taxa){
        this._saldo += taxa;
    }
}

class ContaPoupanca extends Conta{
    atualiza(taxa){
        this._saldo += taxa * 2;
    }
}