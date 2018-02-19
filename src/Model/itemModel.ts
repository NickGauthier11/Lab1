interface IItem {
    id:number;
    nom:string;
    image:string;
    prix:number;
    description:string;
}
//Create a model of an item with all the infos needed
export class ItemModel implements IItem {
    id:number;
    nom:string;
    image:string;
    prix:number;
    description:string;
    constructor(id:number,nom:string,image:string,prix:number,description:string){
        this.id = id;
        this.nom = nom;
        this.image = image;
        this.prix = prix;
        this.description = description;
    }
}