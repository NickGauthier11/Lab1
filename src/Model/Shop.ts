import { ItemModel } from '../export';


export class Shop {
    products : ItemModel[];
    jsonFile : any;

    constructor(){
        if (!localStorage.shop)
            this.createDatabase();
        else{
            this.products = (JSON.parse(localStorage.getItem("shop"))).produits;
        }
    }

    public addItem (name:string, image:string, price:number, description:string) {
        let id = Number(localStorage.lastId);
        this.products.push( new ItemModel(
            id,
            "produit " + id,
            "http://lorempixel.com/200/200",
            price,
            description
        ));
        this.saveModification();
        id++;
        localStorage.lastId = id;
    }

    public removeItem (id:number) {
        let itemIndex = this.findItemIndexFromId(id);
        if (itemIndex == -1)
            return;
        delete this.products[itemIndex];
        this.saveModification();
    }

    public modifyItem (id:number, name:string, image:string, price:number, description:string) {
        let itemIndex = this.findItemIndexFromId(id);
        console.log(itemIndex)
        if (itemIndex == -1)
            return;
        let item:ItemModel =  this.products[itemIndex];
        //item.modify(name,image,price,description);
        item.nom = name;
        item.description = description;
        item.prix = price;
        this.saveModification();
    }

    private saveModification () {
        localStorage.setItem("shop", JSON.stringify({ produits: this.products}));
    }

    private findItemIndexFromId(id:number) : number {
        for (let i = 0; i < this.products.length; i++)
            if (this.products[i].id == id)
                return  i;
        return -1;
       
    }

    private createDatabase(){
        this.products = [];

        for (let i = 0; i < 100; i++)
            this.products.push(new ItemModel(
                i,
                "produit " + (i + 1),
                "http://lorempixel.com/200/200",
                (i * 3 + 12 * 1 - 2) % 1026,
                "description du produit " + (i + 1)
            ));
        localStorage.setItem("shop", JSON.stringify({ produits: this.products}));
        localStorage.setItem("lastId", "100");
    }

    
}