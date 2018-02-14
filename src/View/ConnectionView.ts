import * as $ from "jquery";
import Shop from "../Model/Shop"
import {ItemModel} from "../Model/itemModel"
import {login, deconnect} from "../Model/Connection"

export class ConnectionView{
    constructor(){

    }
    connection(){
        let html = "<div class=\"alert alert-danger\" role=\"alert\" id='alertConnectionError' style='display:none'></div>"+
                    "<div class=\"form-group mx-auto border rounded w-25 p-3\">" +
                        "<h3>Administration</h3>" +
                        "<label for=\"txtUsername\">Utilisateur:</label><input type=\"text\" class=\"form-control\" id=\"txtUsername\" />" +
                        "<label for=\"txtPassword\">Mot de passe: </label><input type=\"text\" class=\"form-control\" id=\"txtPassword\"/>" +
                        "<div class=\"text-right\"><input type=\"button\" class=\"btn btn-primary mt-3 connectionButton\" value=\"Connexion\" id='btnConnection'/></div>" +
                    "</div>";
        $("#mainContent").html(html);

        $("#btnConnection").on("click", function(){
            let nickname:string = String($("#txtUsername").val());
            let password:string = String($("#txtPassword").val());
            if ( login(nickname,password) )
                location.reload();
            else
                alert("la combinaison n'est pas bonne (admin, admin");
        })

    }
    connected(products:ItemModel[]){
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

        $("#mainContent .delete").each (function (index){
            let id:number = Number((<HTMLInputElement>this).value);
            (<HTMLInputElement>this).value = "X";
            $(this).on("click", function(){
                if (confirm("voulez-vous vraiment supprimer ce produit?")){
                    new Shop().removeItem(id);
                    $(this).parent().parent().remove();
                }
            })
        });

        $("#mainContent .edit").each (function (index){
            let id:string = (<HTMLInputElement>this).value;
            (<HTMLInputElement>this).value = "Modifier";
            $(this).on("click", function(){
                document.location.href = "?page=edit&id=" + id;
            })
        });
        
        $("#mainContent .ajouter").on("click", function(){
            new Shop().addRandomItem();
            location.reload();
        });

        $("#mainContent .deconnexion").on("click", function(){
            deconnect();
            location.reload();
        });


    }
    connectionError(){
        $("#alertConnectionError").html("Nom d'utilisateur ou mot de passe invalid.").show();
    }
}