import { Controller } from "../export";
import * as $ from "jquery";

interface IView {
    controller:Controller;
}
export class View implements IView{
    controller:Controller;
    constructor(_controller:Controller){
        this.controller = _controller;
        let self = this.controller;
        $("#heading").html(this.controller.getModelHeading()).on("click",function(e:any){
            self.handleEvent(e);
        });
        this.controller.model.registerObserver(this);
    }
    update(){
        $("#heading").html(this.controller.getModelHeading());
    }
}