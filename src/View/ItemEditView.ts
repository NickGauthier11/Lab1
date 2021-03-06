import * as $ from "jquery";
import {ItemModel,Shop} from "../export";

export class ItemEditView{
    constructor(){

    }
    //Display the edit view of an item
    showItem(product:ItemModel){
        let html = "<div class=\"alert alert-danger\" role=\"alert\" id='alertConnectionError' style='display:none'></div>"+
                    "<div class=\"form-group mx-auto border rounded w-25 p-3\">" +
                        "<h3>Modification de : " + product.nom + "</h3>" +
                        "<label for=\"nom\">Nom:</label><input type=\"text\" class=\"form-control\" id=\"nom\" value=\""+ product.nom +"\" />" +
                        "<label for=\"image\">Image: </label><input type=\"text\" class=\"form-control\" id=\"image\" value=\""+ product.image +"\"/> " +
                        "<label for=\"prix\">Prix:</label><input type=\"number\" class=\"form-control\" id=\"prix\" value=\""+ product.prix +"\"/>" +
                        "<label for=\"description\">Description:</label><input type=\"text\" class=\"form-control\" id=\"description\" value=\""+ product.description +"\"/>" +
                        
                        "<div class=\"text-right\"><input type=\"button\" class=\"btn btn-primary mt-3 connectionButton\" value=\"Modifier\" id='btnValidation'/></div>" +
                    "</div>";
        $("#mainContent").html(html);

        //Add click event to confirm button
        $("#btnValidation").on("click", function(){
            let nom:string = String($("#nom").val());
            let image:string = String($("#image").val());
            let prix:number = Number($("#prix").val());
            let description:string = String($("#description").val());

            //Update item in shop
            new Shop().modifyItem(product.id,nom,image,prix,description);
            //Reload page
            document.location.href = "?page=connexion";
        });
    }
}