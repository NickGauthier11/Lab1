import Basket from "../Model/Basket"
import ShopView from "../View/ShopView"

export default function panier(){
    let basket:Basket = new Basket();
    let shopView:ShopView = new ShopView(basket.getItems(),"basket");
    shopView.displayPage(0);
}