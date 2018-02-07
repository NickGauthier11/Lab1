import { ItemController } from "../export";
import * as $ from "jquery";

interface IView {
    controller:ItemController;
}
export class ItemView implements IView{
    controller:ItemController;
    constructor(controller:ItemController){
        this.controller = controller;

$("#mainContent").html("<div class='row m-5'>"+
                                    "<div class='col-3 text-center'><img class='align-middle' src='images/"+this.controller.itemModel.image+"'/></div>"+
                                    "<div class='col-8' style='height:500px'>"+
                                        "<h1 class='h-20'>"+this.controller.itemModel.nom+"</h1>"+
                                        "<p class='h-60'>"+this.controller.itemModel.description+"</p>"+
                                        "<div class='align-bottom h-20'>"+this.controller.itemModel.prix+" $</div>"+
                                    "</div>"+
                                "</div>");
    }
}