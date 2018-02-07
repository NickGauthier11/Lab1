interface IItem {
    id:number;
    nom:string;
    image:string;
    prix:number;
    description:string;
}
export class ItemModel implements IItem {
    id:number;
    nom:string;
    image:string;
    prix:number;
    description:string;
    constructor(id:number,nom:string,image:string,prix:number,description:string){
        this.nom = nom;
        this.image = image;
        this.prix = prix;
        this.description = description;
    }
}