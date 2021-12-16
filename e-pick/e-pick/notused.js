var form = document.getElementsByid("login");

const UerNames=[
    {username:"ahmed",
    password:"1230"},
    {username:"admin",
    password:"1231"}
]

function log_in(){
    let user=document.getElementById("uname").value;
    let pass=document.getElementById("pass").value; 
    for(i=0;i<UserNames.length;i++){
        if(user==UserNames[i].username && pass ==UserNames[i].password){
            console.log("done")
        }
    }
}

function login() {
    let u = form.elements['uname'];
    let p = form.elements['pass'];

    let user = u.value
    let pass = p.value

    console.log(u)
    for(i=0;i<UserNames.length;i++){
        if(user==UserNames[i].username && pass ==UserNames[i].password){
            console.log("done")
        }
    }
}