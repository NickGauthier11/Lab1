import Shop from "../Model/Shop"
import {ItemModel} from "../Model/itemModel"
import ItemView from "../View/ItemView"

export default function edit(id:number){
    let produit:ItemModel = new Shop().getItemFromId(id);
    new ItemView().displayItem(produit);
}
