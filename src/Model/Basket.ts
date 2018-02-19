import { ItemModel,Shop } from '../export';

export class Basket {
    products : number[];
    constructor(){
        //If there is no kart session create one
        if (!localStorage.kart){
            this.products = [];
            this.saveModifications();
        }
        else{
            //else get the products in session
            this.products = (JSON.parse(localStorage.getItem("kart"))).produits;
        }
    }

    //Add a product then save in session
    public addItem (id:number) : void {
        this.products.push(id);
        this.products.sort();
        this.saveModifications();
    }

    //Remove a product then save in session
    public removeItem (id:number) : void {
        let index = this.products.indexOf(id);
        if (index != -1)
            this.products.splice(index);
        this.saveModifications();
    }

    //Save all the products in the session
    private saveModifications() : void {
        localStorage.setItem("kart", JSON.stringify({produits :this.products}));
    }

    //Get a product from the shop with ID
    public getItemFromId(id:number) : ItemModel {
        let shop = new Shop();
        return shop.products[String(id)];
    }

    //Empty the basket then save in session
    public clear(){
        this.products = [];
        this.saveModifications();
    }

    //Get all the items in the basket and convert them in itemModel
    public getItems(): ItemModel[]{
        let items:ItemModel[] = [];
        this.products.forEach(element => {
            items.push(this.getItemFromId(element));
        });
        return items;
    }
}