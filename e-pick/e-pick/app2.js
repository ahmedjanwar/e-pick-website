function proc(){
    document.getElementById("q").removeAttribute("hidden"); 
    fetch('https://www.cc.puv.fi/~asa/json/project.json')
    .then(res => res.json())
    .then(data => {
        console.log(data)
        var temp = '';
        var info =" ";
        
    for ( var i=0;i<data.length; i++) 
    {
       
        let value = document.getElementById("search").value;
         //console.log(data[i].products);
             
            // document.getElementById("cont").removeAttribute("hidden");
                    // for loop
                    
                    let show=data[i].products
                    let showInfo =data[i]
                    var select = document.getElementById('op');
                    var vv = select.options[select.selectedIndex].value;
                    
                    if(vv=="Order_Id"){
                    
                    if (data[i].orderid == value){
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
                       
                    };    
                }
                
                else if (data[i].customerid == value){
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
                       
                    };          
                
}
                
    document.getElementById("infoTbody").innerHTML = info;
    document.getElementById("tbody").innerHTML = temp;
    })
}

function readyCheck(){
    var textinputs = document.querySelectorAll('input[type=checkbox]'); 
    var empty = [].filter.call( textinputs, function( el ) {
       return !el.checked
    });
    
    if (textinputs.length == empty.length) {
        alert("please check if every item is checked!");
        return false;
    }
    else if (document.querySelectorAll('input[type="checkbox"]:not(:checked)').length) {
        alert('Some checkbox are not checked');
    }
    else{
        console.log(textinputs.length)
        alert("All checked. ready to print")
        //window.location.replace("print.html")
        remover()
    }
}
function remover(){
    document.getElementById("print").removeAttribute("hidden");
}