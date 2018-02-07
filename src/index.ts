import { ItemModel,ItemView,ItemController } from "./export";


function getURLParameter(name:string) {
    return decodeURIComponent((new RegExp('[?|&]' + name + '=' + '([^&;]+?)(&|#|;|$)').exec(location.search) || [null, ''])[1].replace(/\+/g, '%20')) || null;
}

let page = getURLParameter("page");
switch(page){
    case "panier":
        break;
    case "connexion":
        break;
    default:
        let itemModel = new ItemModel(1,"Test","test.jpg",10.99,"Lorem ipsum");
        let itemController = new ItemController(itemModel);
        let itemView = new ItemView(itemController);
        break;
}
