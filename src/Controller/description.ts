import Shop from "../Model/Shop"
import {ItemModel} from "../Model/itemModel"
import DetailView from "../View/DetailView";

export default function edit(id:number){
    let produit:ItemModel = new Shop().getItemFromId(id);
    //New view made for viewing
    new DetailView(produit,"detail");
}