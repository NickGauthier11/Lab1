import { View } from "../export";

interface IModel {
    observers:View[];
    heading:string;
}
export class Model implements IModel {
    observers:View[];
    heading:string;
    constructor(){
        this.observers = [];
        this.heading = "Hello";
    }
    registerObserver(observer:View){
        this.observers.push(observer);
    }
    notifyAll(){
        this.observers.forEach(function(observer){
            observer.update();
        });
    }
}