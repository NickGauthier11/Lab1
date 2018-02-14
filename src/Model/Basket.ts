import { ItemModel } from '../export';
import Shop from './Shop';

export default class Basket {
    products : number[];
    constructor(){
        if (!localStorage.kart){
            this.products = [];
            this.saveModifications();
            console.log("hi")
        }
        else{
            this.products = (JSON.parse(localStorage.getItem("kart"))).produits;
        }
    }

    public addItem (id:number) : void {
        this.products.push(id);
        console.log("yeah");
        this.products.sort();
        this.saveModifications();
    }

    public removeItem (id:number) : void {
        let index = this.products.indexOf(id);
        if (index != -1)
            this.products.splice(index);
        this.saveModifications();
    }

    private saveModifications() : void {
        localStorage.setItem("kart", JSON.stringify({produits :this.products}));
    }

    public getItemFromId(id:number) : ItemModel {
        let shop = new Shop();
        return shop.products[String(id)];
    }

    public clear(){
        this.products = [];
        this.saveModifications();
    }

    public getItems(): ItemModel[]{
        let items:ItemModel[] = [];
        this.products.forEach(element => {
            items.push(this.getItemFromId(element));
        });
        return items;
    }
}