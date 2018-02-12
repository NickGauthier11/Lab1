import * as $ from "jquery";
import { ItemModel } from "../Model/itemModel";

interface IShopView {
}

export default class ShopView implements IShopView{
    products: ItemModel[];
    isAdmin:boolean;
    isInbasket:boolean;
    constructor(products: ItemModel[], isAdmin:boolean, isInbasket:boolean){
        this.isInbasket = isInbasket;
        this.isAdmin = isAdmin;
        this.products = products; 
    }

    public displayPage (page:number){
        let html = "";
        
                for(let i = (page * 10);i < (page * 10) + 10;i++){
                    html += "<div class='float-left p-3' id='divProduct'>"+
                                "<div class='card'>"+
                                    "<img src='"+this.products[i].image+"' class='card-img-top'/>"+
                                    "<div class='card-body text-center'>"+
                                        "<h3 class='card-title'><a href='#'>"+this.products[i].nom+"</a></h3>"+
                                        "<p class='card-text'>Prix: "+this.products[i].prix+"$</p>";
                if (this.isInbasket)
                html += "<input type='button' class='btn btn-danger' value='" + this.products[i].id + "' onclick='alert("+this.products[i].id+")'/>";
                else
                    html += "<input type='button' class='btn btn-primary' value='" + this.products[i].id + "' onclick='alert("+this.products[i].id+")'/>";
                html +=                "</div>"+
                                "</div>"+
                            "</div>";
                }
        
        
                html += "<div class='w-100 text-right' id='divPagination'>" +
                            "<ul class='pagination float-right'>"
                if (page > 0)
                    html += "<li class='page-item preview'><a class='page-link' >Précédent</a></li>";
        
        
                for(let y = 1;y < Math.ceil(this.products.length / 10); y++){
                    html +=     "<li class='page-item page-number'><a class='page-link' >"+y+"</a></li>";
                    //Here we should add the buttons one by one to add the function onclick
                }
        
                html +=         "<li class='page-item next'><a class='page-link'>Suivant</a></li>" +
                            "</ul>"+
                        "</div>";
                
        $("#mainContent").html(html);
        //Add buttons for edit and for remove from basket
        let shopView:ShopView = this;
        $("#mainContent .preview").click({view:shopView}, function(event){event.data.view.displayPage(page - 1);});
        $("#mainContent .page-number").click();
        $("#mainContent .next").click({view:shopView}, function(event){event.data.view.displayPage(page + 1);});

    }

    public test(){
        console.log(this);
    }
}