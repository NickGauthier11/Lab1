import { ItemModel } from '../export';

export class Shop {
    products : ItemModel[];

    constructor(){
        //If there is no shop on session create one
        if (!localStorage.shop)
            this.createDatabase();
        else{
            //else load the products in session
            this.products = (JSON.parse(localStorage.getItem("shop"))).produits;
        }
    }

    //Add an item then save in session
    public addItem (name:string, image:string, price:number, description:string) {
        let id = Number(localStorage.lastId);
        this.products[id] =  new ItemModel(
            id,
            "produit " + id,
            "images/img"+(Math.floor(Math.random() * 10) + 1)+".jpg",
            price,
            description
        );
        this.saveModifications();
        id++;
        localStorage.lastId = id;
    }

    //Add an item with random infos
    public addRandomItem(){
        this.addItem(
            "nouveau produit ",
            "images/img"+(Math.floor(Math.random() * 10) + 1)+".jpg",
            10,
            "nouvel objet ajouté récement");
    }

    //Remove an item then save in session
    public removeItem (id:number) {
        delete this.products[id];
        this.saveModifications();
    }

    //Modify an item then save in session
    public modifyItem (id:number, name:string, image:string, price:number, description:string) {
        let item:ItemModel =  this.products[String(id)];
        item.nom = name;
        item.description = description;
        item.prix = price;
        this.saveModifications();
    }

    //Save all items in session
    private saveModifications () {
        localStorage.setItem("shop", JSON.stringify({ produits: this.products}));
    }

    public getProducts() : ItemModel[]{
        let products:ItemModel[] = [];
        this.products.forEach(function(element){
            if(element != null)
                products.push(element);
        })
        return products;
    }

    //Create a shop in session with random items
    private createDatabase(){
        this.products = [];

        for (let i = 0; i < 100; i++)
            this.products[i] = new ItemModel(
                i,
                "produit " + (i + 1),
                "images/img"+(Math.floor(Math.random() * 10) + 1)+".jpg",
                (i * 3 + 12 * 1 - 2) % 1026,
                "description du produit " + (i + 1)
            );
        localStorage.setItem("shop", JSON.stringify({ produits: this.products}));
        localStorage.setItem("lastId", "100");
    }

    //Find an item by ID
    public getItemFromId(id:number) : ItemModel{
        return this.products[id];
    }

    
}