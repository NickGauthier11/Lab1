import {ItemModel,Shop,ItemView} from "../export";

export function detail(id:number){
    //Find item with ID
    let produit:ItemModel = new Shop().getItemFromId(id);
    //Display item
    new ItemView().displayItem(produit);
}
