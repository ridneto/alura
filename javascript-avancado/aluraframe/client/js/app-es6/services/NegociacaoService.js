import {HttpService} from './HttpService';
import {ConnectionFactory} from './ConnectionFactory';
import {NegociacaoDao} from '../dao/NegociacaoDao';
import {Negociacao} from '../models/Negociacao';

export class NegociacaoService{
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

    obterNegociacoes(){
        return Promise
            .all([
                this.obterNegociacoesDaSemana(),
                this.obterNegociacoesDaSemanaAnterior(),
                this.obterNegociacoesDaSemanaRetrasada()]
            ).then(negociacoes =>negociacoes
                    .reduce((todasNegociacoes, array) => todasNegociacoes.concat(array), [])            
            ).catch((erro) => {
                console.log('Error: ', erro);
                throw new Error("Não foi possível obter as negociações");
            })
    }

    cadastrar(negociacao){
        return ConnectionFactory
            .getConnection()
            .then(connection => new NegociacaoDao(connection))
            .then(dao => dao.adiciona(negociacao))
            .then(() => 'Negociação adicionada com sucesso')
            .catch(() => {
                console.log('Não foi possível adicionar a negociação');
                throw new Error("Não foi possível adicionar a negociação");
            })
    }

    listaTodos(){
        return ConnectionFactory
            .getConnection()
            .then(connection => new NegociacaoDao(connection))
            .then(dao => dao.listaTodos())
            .catch(erro => {
                console.log("Não foi possível obter as negociações");
                throw new Error("Não foi possível obter as negociações");
            });
    }

    apagaTodos(){
        return ConnectionFactory
            .getConnection()
            .then(connection => new NegociacaoDao(connection))
            .then(dao => dao.apagaTodos())
            .catch(erro => {
                console.log(erro)
                throw new Error("Não foi possível apagar as negociações");
            });
    }

    importa(listaAtual){
        return this.obterNegociacoes()
            .then(negociacoes =>
                negociacoes
                    .filter(negociacao => 
                        !listaAtual.some(negociacaoExistente => 
                            negociacao.isEquals(negociacaoExistente)
                    ))            
            ).catch((erro) => {
                console.log(erro);
                throw new Error("Não foi possível obter as negociações");
            });
    }
}