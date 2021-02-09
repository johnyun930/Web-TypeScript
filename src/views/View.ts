import { Model } from "../models/Model";
import { UserProps } from "../models/User";


export abstract class View<T extends Model<K>,K>{
    constructor(public parent: Element, public model: T extends  ){
        this.bindModel();
    }
    bindModel(): void{
        this.model.on('change',()=>{
            this.render();
        })
    }

    abstract eventsMap(): {[key:string]:()=>void};
    abstract template(): string

    bindEvents(fragments:DocumentFragment): void {
        const eventsMap = this.eventsMap();

        for(let eventKey in eventsMap) {
            const[eventName, selector] = eventKey.split(":");
            fragments.querySelectorAll(selector).forEach(element =>{
                element.addEventListener(eventName,eventsMap[eventKey]);
            });
        }
    }

    render(): void {
        this.parent.innerHTML = '';
        const templateElement = document.createElement('template');
        templateElement.innerHTML = this.template();

        this.bindEvents(templateElement.content);
        this.parent.append(templateElement.content);

    }
}