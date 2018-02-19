import {ShopView,Basket} from "../export";

export function panier(){
    //Create or load the basket
    let basket:Basket = new Basket();
    //Display all items of the basket
    let shopView:ShopView = new ShopView(basket.getItems(),"basket");
    shopView.displayPage(0);
}