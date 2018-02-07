import {Model, View} from "../export";

interface IController {
    model:Model
}
export class Controller implements IController{
    model:Model;
    constructor(_model:Model) {
        this.model = _model;
    }
    handleEvent(e:any){
        e.stopPropagation();
        switch(e.type){
            case "click":
                //alert(e.target);
                this.clickHandler();
                break;
            default:
                console.log(e.target);
        }
    }
    getModelHeading(){
        return this.model.heading;
    }
    clickHandler(){
        this.model.heading = "World";
        this.model.notifyAll();
    }
}