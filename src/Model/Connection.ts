export function login (nickname:string ,password:string) : boolean {
    if (nickname == "admin" && password == "admin"){
        localStorage.setItem("connected", "true");
    } else return false; 
}

export function isUserAdmin () : boolean {
    return localStorage.getItem("connected") == "true";
}