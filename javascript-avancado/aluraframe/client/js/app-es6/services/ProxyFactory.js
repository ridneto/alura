export class ProxyFactory{
    static create(object, props, action){
        return new Proxy(object, {
            get(target, prop, receiver){
                if(props.includes(prop) && ProxyFactory._isFunction(target[prop])){
                    return function(){
                        //console.log(`Interceptando ${prop}`);
                        let result = Reflect.apply(target[prop], target, arguments);    
                        action(target);
                   
                        return result;
                    }
                }

                return Reflect.get(target, prop, receiver);
            },
            set(target, prop, value, receiver){    
                let result = Reflect.set(target, prop, value, receiver);
                if(props.includes(prop)) action(target);

                return result;
            } 
        });
    }

    static _isFunction(param){
        return typeof(param) === typeof(Function);
    }
}