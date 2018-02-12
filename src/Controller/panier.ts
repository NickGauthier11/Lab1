import Basket from "../Model/Basket"
import ShopView from "../View/ShopView"

export default function panier(){
    let panier:Basket = new Basket();
    let shopView:ShopView = new ShopView(panier.getItems(), false,true);
    shopView.displayPage(0);
}