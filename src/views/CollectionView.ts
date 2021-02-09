import { Collection } from "../models/Collection";
import { Model } from "../models/Model";

export abstract class CollectionView<T,K>{
    constructor(public parent: Element, public collection: Collection<T,K>){}
    
    render():void{
        this.parent.innerHTML = '';

        const templateElement = document.createElement('template');

        for(let model of this.collection.models){
            const itemparent = document.createElement('div');
            this.renderItem(model,itemparent);
            templateElement.content.append(itemparent);
        }

        this.parent.append(templateElement.content);
    }

    abstract renderItem(model:T,itemParent:Element):void;
}