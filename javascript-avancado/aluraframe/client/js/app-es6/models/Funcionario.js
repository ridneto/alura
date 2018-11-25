class Funcionario{
    constructor(email){
        this._email = email;
    }

    get email(){
        return this._email;
    }

    set email(email){
        this._email = email;
    }
}

let funcionario = new Funcionario("ridineu@hotmail.com");

let proxy = new Proxy(funcionario, {
    get: function(target, prop, receiver){
        console.log(`a propriedade "${prop}" foi interceptada`);
        return target[prop];
    },
    set: function(target, prop, value, receiver){
        console.log(`antigo valor: ${target[prop]}; novo valor: ${value}`);
        return Reflect.set(target, prop, value, receiver);
    }
});
/*
console.log(proxy.email);
proxy.email = 'teste@valemobi.com.br';
console.log(proxy.email)
*/