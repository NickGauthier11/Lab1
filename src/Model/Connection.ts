export function login (nickname:string ,password:string) : boolean {
    if (nickname == "admin" && password == "admin"){
        localStorage.setItem("connected", "true");
    } else return false; 
}

//These should be real functions with a node call to a database

export function isUserAdmin () : boolean {
    return localStorage.getItem("connected") == "true";
}