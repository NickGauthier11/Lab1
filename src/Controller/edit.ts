import Shop from "../Model/Shop"
import {ItemModel} from "../Model/itemModel"
import ItemEditView from "../View/ItemEditView"

export default function edit(id:number){
    let produit:ItemModel = new Shop().getItemFromId(id);
    new ItemEditView().showItem(produit);
    
}