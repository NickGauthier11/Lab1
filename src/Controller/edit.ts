import {ItemModel,Shop,ItemEditView} from "../export";

export function edit(id:number){
    //Find item with ID
    let produit:ItemModel = new Shop().getItemFromId(id);
    //Display the edit view
    new ItemEditView().showItem(produit);
}