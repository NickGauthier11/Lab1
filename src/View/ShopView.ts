import * as $ from "jquery";
import { ItemModel } from "../Model/itemModel";
import Basket from "../Model/Basket"
import Shop from "../Model/Shop"
import {isUserAdmin} from "../Model/Connection"

interface IShopView {
}

export default class ShopView implements IShopView{
    products: ItemModel[];
    pageOptions:String;
    constructor(products: ItemModel[], pageOptions:string){
        this.products = products; 
        this.pageOptions = pageOptions;
    }

    public displayPage (page:number){
        let html = "";
        
            for(let i = (page * 10); i < (page * 10) + 10 && i < this.products.length; i++){
                html += "<div class='float-left p-3 divProducts''>"+
                            "<div class='card'>"+
                                "<img src='" + this.products[i].image + "' class='card-img-top'/>"+
                                "<div class='card-body text-center'>"+
                                    "<h3 class='card-title'><a href='?page=detail&id=" + this.products[i].id + "'>" + this.products[i].nom+"</a></h3>"+
                                    "<p class='card-text'>Prix: "+this.products[i].prix+"$</p>" +
                                    "<input type='button' class='btn' value='"+this.products[i].id+"' />" +
                                "</div>" +
                            "</div>" +
                        "</div>";
            }
        
        
                html += "<div class='w-100 text-right' id='divPagination'>" +
                            "<ul class='pagination float-right'>"
                if (page > 0)
                    html += "<li class='page-item preview'><a class='page-link' >Précédent</a></li>";
        
        
                for(let y = 1;y < Math.ceil(this.products.length / 10); y++){
                    let active:string = page == y - 1 ? " active" : "";
                    html +=     "<li class='page-item page-number" + active +"'><a class='page-link' >"+y+"</a></li>";
                }
                if (page < Math.ceil(this.products.length / 10) - 2)
                    html +=         "<li class='page-item next'><a class='page-link'>Suivant</a></li>" ;
                html += "</ul>" + "</div>";
                
        $("#mainContent").html(html);
        new Basket();
        this.addPagination(page);
        this.addOptions();
        
    }

    private addOptions(){
        let options = this.pageOptions;
        $("#mainContent .divProducts input").each(function(index){
            let id:number  = Number((<HTMLInputElement>this).value);
            
            if (options == "basket"){
                $(this).addClass("btn-danger");
                (<HTMLInputElement>this).value = "Retirer du panier";
                $(this).click({}, function(event){
                    new Basket().removeItem(id);
                    $(this).parent().parent().parent().remove();
                });
            }
            else if (options == "index" && !isUserAdmin()) {
                $(this).addClass("btn-primary");
                (<HTMLInputElement>this).value = "Ajouter au panier";
                $(this).click({}, function(event){
                    new Basket().addItem(id);
                    alert("produit ajouté au pannier");
                });
            }
            else {
                $(this).addClass("btn-danger");
                (<HTMLInputElement>this).value = "Retirer produit";
                $(this).click({}, function(event){
                    if (confirm("voulez-vous vraiment retirer ce produit? ")){
                        new Shop().removeItem(id);
                        $(this).parent().parent().parent().remove();
                    }
                });
            }
        });
    }

    private addPagination(page:number){
        let shopView:ShopView = this;
        $("#mainContent .preview").click({view:shopView}, function(event){event.data.view.displayPage(page - 1);});
        $("#mainContent .next").click({view:shopView}, function(event){event.data.view.displayPage(page + 1);});
        $("#mainContent .page-number").each(function(index){
            $(this).click({view:shopView}, function(event){event.data.view.displayPage(index);});
        });
    }
}