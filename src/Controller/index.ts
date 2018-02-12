import Shop from "../Model/Shop"
import ShopView from "../View/ShopView"
import {isUserAdmin} from "../Model/Connection"

export default function index(){
    let shop = new Shop();
    let shopView = new ShopView(shop.products, 10);
    shopView.injectProducts(0,isUserAdmin(),false);
}