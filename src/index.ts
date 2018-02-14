import { ItemModel,ItemView,ItemController } from "./export";

import connection from "./Controller/connection";
import panier from "./Controller/panier";
import edit from "./Controller/edit";
import detail from "./Controller/description";
import index from "./Controller/index"



function getURLParameter(name:string) {
    return decodeURIComponent((new RegExp('[?|&]' + name + '=' + '([^&;]+?)(&|#|;|$)').exec(location.search) || [null, ''])[1].replace(/\+/g, '%20')) || null;
}


let item:number = Number(getURLParameter("id"));
let page = getURLParameter("page");
switch(page){
    case "panier":
        panier();
        break;
    case "connexion":
        connection();
        break;
    case "edit":
        edit(item);
        break;
    case "detail":
        detail(item);
        break;
    default:
        index();
        break;
}
