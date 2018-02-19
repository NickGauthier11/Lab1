export function login (nickname:string ,password:string) : boolean {
    //Validate if correct user and password
    if (nickname == "admin" && password == "admin"){
        //Set the session to true
        localStorage.setItem("connected", "true");
        return true;
    } else return false; 
}

//These should be real functions with a node call to a database

export function isUserAdmin () : boolean {
    //Check if the user is connected
    return localStorage.getItem("connected") == "true";
}

export function deconnect() : void {
    //Disconnect the user by removing the session
    localStorage.removeItem("connected");
}