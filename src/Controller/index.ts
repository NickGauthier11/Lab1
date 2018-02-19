import Shop from "../Model/Shop"
import ShopView from "../View/ShopView"
import {isUserAdmin} from "../Model/Connection"

export default function index(p:number){
    let shop = new Shop();
    let shopView = new ShopView(shop.getProducts(),"index");
    shopView.displayPage(p);
}