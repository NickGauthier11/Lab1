import * as $ from "jquery";
import { ItemModel } from "../Model/itemModel";

interface IShopView {
    pagination:number;
}

export default class ShopView implements IShopView{
    pagination:number;
    products: ItemModel[];
    constructor(products:ItemModel[],pagination:number){
        this.pagination = pagination;   //Not usefull for the moment
        this.products = products;
    }

    public injectProducts (page:number, isAdmin:boolean, isInbasket:boolean){
        let html = "";
        
                for(let i = (page * 10);i < (page * 10) + 10;i++){
                    html += "<div class='float-left p-3' id='divProduct'>"+
                                "<div class='card'>"+
                                    "<img src='"+this.products[i].image+"' class='card-img-top'/>"+
                                    "<div class='card-body text-center'>"+
                                        "<h3 class='card-title'><a href='#'>"+this.products[i].nom+"</a></h3>"+
                                        "<p class='card-text'>Prix: "+this.products[i].prix+"$</p>"+
                                        "<input type='button' class='btn btn-primary' value='Ajouter au panier' onclick='alert("+this.products[i].id+")'/>"+
                                    "</div>"+
                                "</div>"+
                            "</div>";
                }
        
        
                html += "<div class='w-100 text-right' id='divPagination'>" +
                            "<ul class='pagination float-right'>" +
                                "<li class='page-item'><a class='page-link' onclick='alert("+(page - 1)+")'>Précédent</a></li>";
        
        
                for(let y = 1;y < Math.ceil(this.products.length / 10); y++){
                    html +=     "<li class='page-item'><a class='page-link' onclick='alert("+(y-1)+")'>"+y+"</a></li>";
                }
        
                html +=         "<li class='page-item'><a class='page-link' onclick='alert("+(page + 1)+")'>Suivant</a></li>" +
                            "</ul>"+
                        "</div>";
        
                $("#mainContent").html(html);
        //Add buttons for edit and for remove from basket
    }
}