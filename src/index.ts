import { ItemModel,ItemView,ItemController } from "./export";
import {Shop} from "./export";
import {Basket} from "./export";

function getURLParameter(name:string) {
    return decodeURIComponent((new RegExp('[?|&]' + name + '=' + '([^&;]+?)(&|#|;|$)').exec(location.search) || [null, ''])[1].replace(/\+/g, '%20')) || null;
}

var shop = new Shop();

let page = getURLParameter("page");
switch(page){
    case "panier":
        break;
    case "connexion":
        break;
    default:
        let itemModel = new ItemModel(1,"Test","test.jpg",10.99,"Lorem ipsum");
        let itemController = new ItemController(shop.products[0]);
        let itemView = new ItemView(itemController);
        break;
}
