import { ItemModel } from '../export';


export default class Shop {
    products : ItemModel[];

    constructor(){
        if (!localStorage.shop)
            this.createDatabase();
        else{
            this.products = (JSON.parse(localStorage.getItem("shop"))).produits;
        }
    }

    public addItem (name:string, image:string, price:number, description:string) {
        let id = Number(localStorage.lastId);
        this.products[ String(id) ] =  new ItemModel(
            id,
            "produit " + id,
            "http://lorempixel.com/200/200",
            price,
            description
        );
        this.saveModifications();
        id++;
        localStorage.lastId = id;
    }

    public addRandomItem(){
        this.addItem(
            "nouveau produit ",
            "http://lorempixel.com/200/200",
            10,
            "nouvel objet ajouté récement");
    }

    public removeItem (id:number) {
        delete this.products[String(id)];
        this.saveModifications();
    }

    public modifyItem (id:number, name:string, image:string, price:number, description:string) {
        let item:ItemModel =  this.products[String(id)];
        //item.modify(name,image,price,description);
        item.nom = name;
        item.description = description;
        item.prix = price;
        this.saveModifications();
    }

    private saveModifications () {
        localStorage.setItem("shop", JSON.stringify({ produits: this.products}));
    }

    private createDatabase(){
        this.products = [];

        for (let i = 0; i < 100; i++)
            this.products[String(i)] = new ItemModel(
                i,
                "produit " + (i + 1),
                "http://lorempixel.com/200/200",
                (i * 3 + 12 * 1 - 2) % 1026,
                "description du produit " + (i + 1)
            );
        localStorage.setItem("shop", JSON.stringify({ produits: this.products}));
        localStorage.setItem("lastId", "100");
    }

    public getItemFromId(id:number) : ItemModel{
        return this.products[String(id)];
    }

    
}