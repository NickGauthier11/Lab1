import { ConnectionView,Shop,isUserAdmin, login } from "../export";
import * as $ from "jquery"

export function connection(){
    //No data needed here
    let view = new ConnectionView();
    let shop = new Shop();

    //Different page if connected or not
    if( isUserAdmin() ){
        view.connected(shop.getProducts());
    }else{
        view.connection();
    }


    $("#btnConnection").on("click",function(){
        let nickname:string = $("#txtUsername").val().toString();
        let password:string = $("#txtPassword").val().toString();
        if (login(nickname, password) != false){
            //Reload Page
            window.location.href = "?page=connexion";
        }else{
            //Error message
            view.connectionError();
        }
    });
}