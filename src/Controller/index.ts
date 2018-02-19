import {ShopView,Shop} from "../export";

export function index(p:number){
    //Create or load all items in session
    let shop = new Shop();
    //Display all items
    let shopView = new ShopView(shop.getProducts(),"index");
    shopView.displayPage(p);
}