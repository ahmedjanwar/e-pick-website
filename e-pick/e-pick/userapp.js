console.log("other pae")
document.getElementById("data").innerHTML=localStorage.getItem("username");
document.getElementById("data1").innerHTML=localStorage.getItem("password");
    fetch('https://www.cc.puv.fi/~asa/json/project.json')
    .then(res => res.json())
    .then(data => {
        console.log(data)
        var temp = '';
        var info =" ";
        
    for ( var i=0;i<data.length; i++) 
    {
        console.log(data[i].orderid)

        
        if (data[i].orderid == username){
            console,log("we got it")
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
        console.log("we did not")       
    
}
    
document.getElementById("infoTbody").innerHTML = info;
document.getElementById("tbody").innerHTML = temp;
    
    
})