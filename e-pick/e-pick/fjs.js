
const ObjectUser=[
    {
    Number:"admin1",
    Password:"pass1"
},

{
    Number:"admin2",
    Password:"pass2"
},
{
    Number:"admin3",
    Password:"pass3"
}];

function login() {
    let userName=document.getElementById("un").value;
    let PassWord=document.getElementById("P").value;
    localStorage.setItem("username", userName);
    localStorage.setItem("pass", PassWord);
    for(i=0;i<ObjectUser.length;i++){
        if(userName==ObjectUser[i].Number && PassWord==ObjectUser[i].Password)
        {
            
            index();
            return;
        }
        else if(userName ==515 && PassWord=="pass515") {
            user()
        }
        else {
            console.log("here")
        }
}
    if(userName==0 && PassWord==0)
    {
      alert("please fill the form");
    return;
    }
    //alert("Wrong Username or Password");
  
}


function index() {

    window.location.replace("index.html")
    

}
function user(){
    window.location.replace("user_page.html")
    //alert("welcome back")
}

function logout() {
    window.location.replace("login.html")
}


     /*   
         //console.log(data[i].products);
             
            // document.getElementById("cont").removeAttribute("hidden");
                    // for loop
                    console.log(data[i])
                    let show=data[i].products
                    let showInfo =data[i]
                    let value = document.getElementById("search").value;
                    if (data[i].orderid == 655){
                    show.forEach((u) => {
                        
                            temp += "<tr> ";
                            temp +="<td>" + "<input type=\"checkbox\" name=\"name1\" /> "+"</td>"
                            temp += "<td>" + u.code + "</td>"
                            temp += "<td>" + u.product + "</td>"
                            temp += "<td>" + u.description+ "</td>"
                            temp += "<td>" + u.qty+"</td>"
                            temp += "<td><input type=\"text\" size=\"8\"/></td></tr>"
                            //
                            //
                    });
                        info += "<th>Customer ID</th> <th>Customer</th> <th>Delvery Date</th> <th>Delivery Address</th> <th>Comments</th><tr>";
                        info += "<td>" + showInfo.customerid + "</td>"
                        info += "<td>" + showInfo.customer + "</td>"
                        info += "<td>" + showInfo.deliverydate+ "</td>"
                        info += "<td>" + showInfo.delivaddr+"</td>"
                        info += "<td>" + showInfo.comment+"</td></tr>"
                       
                }
    };
    document.getElementById("infoTbody").innerHTML = info;
    document.getElementById("tbody").innerHTML = temp;
    })

function proc(){
   let x= document.getElementById("q").removeAttribute("hidden"); 
   let value = document.getElementById("search").value;
      console.log(value)
      retrive(value)


}

function fetchdata(){
    fetch('https://www.cc.puv.fi/~asa/json/project.json')
        .then(res => res.json())
        .then(data => {  
            localStorage.setItem('data_Values', JSON.stringify(data)); 
            //retrive()
        });
}
function retrive(value){
    console.log("Fetiching from local storage")
    var retrievedObject = localStorage.getItem('data_Values');
    let sol = JSON.parse(retrievedObject)
    let value = document.getElementById("search").value;
}*/