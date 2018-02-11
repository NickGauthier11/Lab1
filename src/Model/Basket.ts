import { ItemModel } from '../export';
import { Shop } from '../export';

export class Basket {
    products : number[];
    shop: Shop;
    constructor(shop:Shop){
        this.shop = shop;
        if (!localStorage.basket){
            this.products = [];
            this.saveModifications();
        }
        else{
            this.products = (JSON.parse(localStorage.getItem("kart"))).produits;
        }
    }

    public addItem (id:number) : void{
        this.products.push(id);
        this.products.sort();
        this.saveModifications();
    }

    public removeItem (id:number) : void{
        let index = this.products.indexOf(id);
        if (index != -1)
            this.products.splice(index);
        this.saveModifications();
    }

    private saveModifications() : void{
        localStorage.setItem("kart", JSON.stringify({produits :this.products}));
    }

    public getItemFromid(id:number) : ItemModel {
        return this.shop.products[String(id)];
    }
}