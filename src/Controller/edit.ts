import Shop from "../Model/Shop"
import {ItemModel} from "../Model/itemModel"

export default function edit(id:number){
    let produit:ItemModel = new Shop().getItemFromId(id);
    //New view made for editing
    
}