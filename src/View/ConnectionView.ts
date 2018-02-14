import * as $ from "jquery";
import Shop from "../Model/Shop"

export class ConnectionView{
    constructor(){

    }
    connection(){
        let html = "<div class=\"alert alert-danger\" role=\"alert\" id='alertConnectionError' style='display:none'></div>"+
                    "<div class=\"form-group mx-auto border rounded w-25 p-3\">" +
                        "<h3>Administration</h3>" +
                        "<label for=\"txtUsername\">Utilisateur:</label><input type=\"text\" class=\"form-control\" id=\"txtUsername\" />" +
                        "<label for=\"txtPassword\">Mot de passe: </label><input type=\"text\" class=\"form-control\" id=\"txtPassword\"/>" +
                        "<div class=\"text-right\"><input type=\"button\" class=\"btn btn-primary mt-3\" value=\"Connexion\" id='btnConnection'/></div>" +
                    "</div>";
        $("#mainContent").html(html);
    }
    connected(shop:Shop){
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
        for(let i = 0;i < shop.products.length;i++){
            html += "<tr>" +
                        "<td class=\"text-center\"><img src=\""+shop.products[i].image+"\"/></td>" +
                        "<td class=\"text-left\">"+shop.products[i].nom+"</td>" +
                        "<td class=\"text-left\">"+shop.products[i].description+"</td>" +
                        "<td id=\"tdAdminPrix\">"+shop.products[i].prix+" $</td>" +
                        "<td class=\"text-center align-middle\"><input type=\"button\" class=\"btn btn-danger\" value=\"X\"/></td>" +
                    "</tr>";
        }

        html += "</tbody>\n" +
                "    </table>\n" +
                "</div>\n" +
                "<div class=\"text-right\"><input type=\"button\" class=\"btn btn-primary mt-3\" value=\"Ajouter\"/></div>";

        $("#mainContent").html(html);
    }
    connectionError(){
        $("#alertConnectionError").html("Nom d'utilisateur ou mot de passe invalid.").show();
    }
}