import * as $ from "jquery";
import { ItemModel,Basket } from "../export";

export class ShopView{
    products: ItemModel[];
    pageOptions:String;
    constructor(products: ItemModel[], pageOptions:string){
        this.products = products; 
        this.pageOptions = pageOptions;

    }

    //Display all items of the shop
    public displayPage (page:number){
        let html = "";
        
        for(let i = (page * 10); i < (page * 10) + 10 && i < this.products.length; i++){
            html += "<div class='float-left p-3 divProducts' id='divProduct'>"+
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
        if (this.pageOptions == "basket")
        html+= "<div class=\"text-left\"><input type=\"button\" class=\"btn btn-success mt-3\" value=\"Payer\" id=\"payer\"/></div>";
        
        html += "<div class='w-100 text-right' id='divPagination'>" +
                    "<ul class='pagination float-right'>" +
                        "<li class='page-item prev'><a class='page-link'>Précédent</a></li>";
        

        for(let y = 1;y < Math.ceil(this.products.length / 10) + 1; y++){
            let active:string = "";
            if (page == y - 1)
                active = " active";
            html += "<li class='page-item" + active + "'><a class='page-link page-number'>"+y+"</a></li>";
        }
        html += "<li class='page-item next'><a class='page-link'>Suivant</a></li>" ;
        html += "</ul>" + "</div>";

        $("#mainContent").html(html);
        this.addPagination(page);
        this.addOptions();
        
    }

    //Add events to all the buttons
    private addOptions(){
        let options = this.pageOptions;
        $("#mainContent .divProducts input").each(function(){
            let id:number  = Number((<HTMLInputElement>this).value);

            //If basket view
            if (options == "basket"){
                $(this).addClass("btn-danger");
                (<HTMLInputElement>this).value = "Retirer du panier";
                $(this).on("click", function(){
                    //Remove item from basket
                    new Basket().removeItem(id);
                    $(this).parent().parent().parent().remove();
                });
            }
            else if (options == "index") {//If index view
                $(this).addClass("btn-primary");
                (<HTMLInputElement>this).value = "Ajouter au panier";
                $(this).on("click", function(){
                    //Add item to basket
                    new Basket().addItem(id);
                    alert("Produit ajouté au panier.");
                });
            }
        });

        if (options == "basket"){
            $("#payer").on("click",function(){
                new Basket().clear();
                alert("votre panier a été payé avec success.");
                document.location.href = "?";
            })
        }

    }

    //Add all the events to the pagination
    private addPagination(page:number){
        if(page != 0){
            $("#mainContent .prev").on("click", function(){document.location.href = "?p=" + (page - 1);});
        }else{
            $("#mainContent .prev").addClass("disabled");
        }
        if(page < Math.ceil(this.products.length / 10) - 1){
            $("#mainContent .next").on("click", function(){document.location.href = "?p=" + (page + 1);});
        }else{
            $("#mainContent .next").addClass("disabled");
        }

        $("#mainContent .page-number").each(function(){
            let page:number = Number(this.innerText);
            $(this).on("click", function(){document.location.href = "?p=" + (page - 1);});
        });
    }
}