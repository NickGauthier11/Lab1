import {connection,panier,edit,detail,index}from "./export";

function getURLParameter(name:string) {
    return decodeURIComponent((new RegExp('[?|&]' + name + '=' + '([^&;]+?)(&|#|;|$)').exec(location.search) || [null, ''])[1].replace(/\+/g, '%20')) || null;
}

//Get params from URL
let item:number = Number(getURLParameter("id"));
let page = getURLParameter("page");
let p:number;
if (getURLParameter("p") == ""){
    p = 0;
} else 
    p = Number(getURLParameter("p"));

//Call controllers
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
        index(p);
        break;
}
