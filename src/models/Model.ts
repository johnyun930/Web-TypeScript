import { AxiosPromise } from "axios";

interface ModelAttibutes<T>{
    set(update:T): void;
    getAll(): T;
    get<K extends keyof T>(key: K): T[K];
}

interface Sync{
    fetch(id:number): AxiosPromise;
    save(data:T): AxiosPromise;
}

interface Events{
    on(eventName:string, callback:()=>void):void;
    trigger(evnetName: string): void;
}

export class Model{

}