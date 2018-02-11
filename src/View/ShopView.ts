import { ItemController } from "../export";
import * as $ from "jquery";
import {Shop} from "../Model/Shop";

interface IShopView {
    model:Shop;
    pagination:number;
}
export class ShopView implements IShopView{
    model:Shop;
    pagination:number;
    constructor(model:Shop,pagination:number){
        this.model = model;
        this.pagination = pagination;

        let products = this.model.products;
        let html = "";

        for(let i = (this.pagination * 10);i < (this.pagination * 10) + 10;i++){
            html += "<div class='float-left p-3' id='divProduct'>"+
                        "<div class='card'>"+
                            "<img src='"+products[i].image+"' class='card-img-top'/>"+
                            "<div class='card-body text-center'>"+
                                "<h3 class='card-title'><a href='#'>"+products[i].nom+"</a></h3>"+
                                "<p class='card-text'>Prix: "+products[i].prix+"$</p>"+
                                "<input type='button' class='btn btn-primary' value='Ajouter au panier' onclick='alert("+products[i].id+")'/>"+
                            "</div>"+
                        "</div>"+
                    "</div>"
        }

        html += "<div class='w-100 text-right' id='divPagination'>" +
                    "<ul class='pagination float-right'>" +
                        "<li class='page-item'><a class='page-link' onclick='alert("+(this.pagination-1)+")'>Précédent</a></li>";


        for(let y = 1;y < Math.ceil(products.length / 10); y++){
            html +=     "<li class='page-item'><a class='page-link' onclick='alert("+y+")'>"+y+"</a></li>";
        }

        html +=         "<li class='page-item'><a class='page-link' onclick='alert("+(this.pagination+1)+")'>Suivant</a></li>" +
                    "</ul>"+
                "</div>";

        $("#mainContent").html(html);
    }
}