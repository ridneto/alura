import {View} from './View';

export class MensagemView extends View{
    constructor(element){
        super(element);
    }

    template(model){ 
        let coxambre = typeof model === 'object' ? (model.texto || '') :  model;
        
        return coxambre ? `<p class="alert alert-info">${coxambre}</p>` : '<p></p>';
    }
}
