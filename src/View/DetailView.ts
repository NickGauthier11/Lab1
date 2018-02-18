import * as $ from "jquery";
import { ItemModel } from "../Model/itemModel";
import Basket from "../Model/Basket";

export default class DetailView{
    products: ItemModel;
    pageOptions:String;
    constructor(products: ItemModel, pageOptions:string){
        this.products = products;
        this.pageOptions = pageOptions;

        let html = "<h2>Description</h2>" +
                    "<div class='media my-3 border rounded' id='divDescProduit'>" +
                        "<img class='img-fluid rounded w-25' src='"+this.products.image+"'/>" +
                        "<div class='media-body mx-3'>" +
                            "<h1>"+this.products.nom+"</h1>" +
                            "<div><b>Prix:</b>"+this.products.prix+" $</div>" +
                            "<p>"+this.products.description+"</p>" +
                            "<div><input type='button' class='btn btn-primary' value='Ajouter au panier'/></div>" +
                        "</div>" +
                    "</div>";

        $("#mainContent").html(html);
        this.addOptions();
    }

    private addOptions(){
        let options = this.pageOptions;
        let id:number  = this.products.id;

        if (options == "detail") {
            $("#divDescProduit input").on("click", function(){
                new Basket().addItem(id);
                alert("produit ajouté au pannier");
            });
        }
    }
}