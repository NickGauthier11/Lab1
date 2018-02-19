import * as $ from "jquery";
import { ItemModel,Basket } from "../export";

export class ItemView{
    //Display the view of an item
    public displayItem (product:ItemModel){
        let html = "";

            html += "<h2>Description</h2>" +
                    "<div class=\"media my-3 border rounded\" id='divDescProduit'>" +
                        "<img class=\"img-fluid rounded\" src=\""+product.image+"\"/>" +
                        "<div class=\"media-body mx-3\">" +
                            "<h1>" + product.nom+"</h1>" +
                            "<div><b>Prix:</b> "+product.prix + "$</div>" +
                            "<p>"+ product.description +"</p>" +
                            "<div><input type=\"button\" class=\"btn btn-primary\" value='Ajouter au panier'/></div>" +
                        "</div>" +
                    "</div>";

            $("#mainContent").html(html);
            this.addOptions();
    }

    private addOptions(){
        $("#mainContent .divProduct input").each(function(){
            let id:number  = Number((<HTMLInputElement>this).value);

            //Add click event to add basket button
            $(this).on("click", function(){
                    //Add item to basket
                    new Basket().addItem(id);
                    alert("Produit ajouté au panier.");
            });
        });
    }
}