import Shop from "../Model/Shop"
import ShopView from "../View/ShopView"
import {isUserAdmin} from "../Model/Connection"

export default function index(){
    let shop = new Shop();
    let shopView = new ShopView(shop.products,"index");
    shopView.displayPage(0);
}