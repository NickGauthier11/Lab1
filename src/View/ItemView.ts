import * as $ from "jquery";
import { ItemModel } from "../Model/itemModel";
import Basket from "../Model/Basket"

export default class ItemView{
    pageOptions:String;

    public displayItem (product:ItemModel){
        let html = "";
        
            html += "<div class='divProduct' id='divProduct'>"+
                        "<div class='card'>"+
                            "<img src='" + product.image + "' class='card-img-top'/>"+
                            "<div class='card-body text-center'>"+
                                "<h3 class='card-title'><a href='?page=detail&id=" + product.id + "'>" + product.nom+"</a></h3>"+
                                "<p class='card-text'>" + product.description + "</p>" +
                                "<p class='card-text'>Prix: " + product.prix+"$</p>" +
                                "<input type='button' class='btn' value='" +product.id+"' />" +
                            "</div>" +
                        "</div>" +
                    "</div>";

            $("#mainContent").html(html);
            this.addOptions();
    }
        

    private addOptions(){
        let options = this.pageOptions;
        $("#mainContent .divProduct input").each(function(){
            let id:number  = Number((<HTMLInputElement>this).value);

            $(this).addClass("btn-primary");
            (<HTMLInputElement>this).value = "Ajouter au panier";
            $(this).on("click", function(){
                    new Basket().addItem(id);
                    alert("produit ajouté au pannier");
            });
        });
    }
}