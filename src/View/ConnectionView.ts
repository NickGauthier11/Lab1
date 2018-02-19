import * as $ from "jquery";
import {ItemModel,Shop,login, deconnect} from "../export";

export class ConnectionView{
    constructor(){

    }
    //Show the connection view
    public connection(){
        let html = "<div class=\"alert alert-danger\" role=\"alert\" id='alertConnectionError' style='display:none'></div>"+
                    "<div class=\"form-group mx-auto border rounded w-25 p-3\">" +
                        "<h3>Administration</h3>" +
                        "<label for=\"txtUsername\">Utilisateur:</label><input type=\"text\" class=\"form-control\" id=\"txtUsername\" />" +
                        "<label for=\"txtPassword\">Mot de passe: </label><input type=\"text\" class=\"form-control\" id=\"txtPassword\"/>" +
                        "<div class=\"text-right\"><input type=\"button\" class=\"btn btn-primary mt-3 connectionButton\" value=\"Connexion\" id='btnConnection'/></div>" +
                    "</div>";
        $("#mainContent").html(html);
    }
    //Once connected show all items in shop to modification
    public connected(products:ItemModel[]){
        let html = "<h2>Administration</h2>" +
                    "<div class=\"border rounded-top\">" +
                        "<table id=\"tableAdmin\" class=\"table table-sm text-left m-0\">" +
                            "<thead class=\"thead-light\">" +
                                "<tr>" +
                                    "<th class=\"p-2 border-0\">Image</th>" +
                                    "<th class=\"p-2 border-0\">Nom</th>" +
                                    "<th class=\"p-2 border-0\">Description</th>" +
                                    "<th class=\"p-2 border-0\">Prix</th>" +
                                    "<th class=\"border-0\"></th>" +
                                "</tr>" +
                            "</thead>" +
                            "<tbody>";
        for(let i = 0;i < products.length;i++){
            html += "<tr>" +
                        "<td class=\"text-center\"><img src=\""+products[i].image+"\"/></td>" +
                        "<td class=\"text-left\">"+products[i].nom+"</td>" +
                        "<td class=\"text-left\">"+products[i].description+"</td>" +
                        "<td id=\"tdAdminPrix\">"+products[i].prix+" $</td>" +
                        "<td class=\"text-center align-middle\">" + 
                            "<input type=\"button\" class=\"btn btn-primary edit\" value=\"" + products[i].id + "\"/>" +
                            "<input type=\"button\" class=\"btn btn-danger delete\" value=\"" + products[i].id + "\"/>" +
                        "</td>" +
                    "</tr>";
        }

        html += "</tbody>\n" +
                "    </table>\n" +
                "</div>" +
                "<div class=\"text-right\"><input type=\"button\" class=\"btn btn-primary mt-3 ajouter\" value=\"Ajouter un produit\"/>" +
                "<input type=\"button\" class=\"btn btn-primary mt-3 deconnexion\" value=\"Se déconnecter\"/>";

        $("#mainContent").html(html);

        //Add a click event to all the delete buttons
        $("#mainContent .delete").each (function (index){
            let id:number = Number((<HTMLInputElement>this).value);
            (<HTMLInputElement>this).value = "X";
            $(this).on("click", function(){
                if (confirm("Voulez-vous vraiment supprimer ce produit?")){
                    //Remove item from shop
                    new Shop().removeItem(id);
                    $(this).parent().parent().remove();
                }
            })
        });

        //Add a click event to all the edit buttons
        $("#mainContent .edit").each (function (index){
            let id:string = (<HTMLInputElement>this).value;
            (<HTMLInputElement>this).value = "Modifier";
            $(this).on("click", function(){
                //Redirect to edit page
                document.location.href = "?page=edit&id=" + id;
            })
        });

        //Add click event to add button
        $("#mainContent .ajouter").on("click", function(){
            //Add a random item in shop
            new Shop().addRandomItem();
            location.reload();
        });

        //Add click event to disconnect button
        $("#mainContent .deconnexion").on("click", function(){
            //Disconnect user
            deconnect();
            location.reload();
        });


    }
    //Show an error message
    public connectionError(){
        $("#alertConnectionError").html("Nom d'utilisateur ou mot de passe invalid.(admin,admin)").show();
    }
}