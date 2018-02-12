import { ItemModel,ItemView,ItemController } from "./export";

import {Shop} from "./export";
import {Basket} from "./export";

import connection from "./Controller/connection";
import panier from "./Controller/panier";
import edit from "./Controller/edit";
import detail from "./Controller/description";
import index from "./Controller/index"



function getURLParameter(name:string) {
    return decodeURIComponent((new RegExp('[?|&]' + name + '=' + '([^&;]+?)(&|#|;|$)').exec(location.search) || [null, ''])[1].replace(/\+/g, '%20')) || null;
}

var shop = new Shop();
let item = getURLParameter("id");
let page = getURLParameter("page");
switch(page){
    case "panier":
        break;
    case "connexion":
        connection(getURLParameter("nickname"), getURLParameter("password"));
        break;
    case "edit":
        
        break;
    case "detail":
        let id:string = getURLParameter("id");
        //detail d'un objet (param item)
        break;
    default:
        let itemModel = new ItemModel(1,"Test","test.jpg",10.99,"Lorem ipsum");
        let itemController = new ItemController(shop.products[0]);
        let itemView = new ItemView(itemController);
        break;
}
