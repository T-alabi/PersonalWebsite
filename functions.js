let cnt = 0;
let total = 0;
let totalItems = 0;
let price=0;

let cartArray = [];



function addtocart(productName, price){
    cnt++;

     /*if(totalItems == 0){
        totalItems++;
        total = price;
     } else {// total items !=0
        totalItems++;
        total= total + price;
     }*/

   total = total+price;
    // CREATE OBJECT 
    let cartItem =  {
        itemName: productName, 
        itemPrice: price
    };
    cartArray.push(cartItem);
    
    // new rows for table
    let table = document.getElementById("cartTable");
    let row = table.insertRow(-1);

    //create new table cells (2)
    let cname = row.insertCell(0);
    let cprice = row.insertCell(1);
    cname.innerHTML = cartArray[cnt-1].itemName;
    cprice.innerHTML = cartArray[cnt-1].itemPrice;

    // new rows for table2
    let table2 = document.getElementById("hiddenTable");
    let row2 = table2.insertRow(-1);
    //create new table2 cells (2)
    let cname2 = row2.insertCell(0);
    let cprice2 = row2.insertCell(1);
    cname2.innerHTML = cartArray[cnt-1].itemName;
    cprice2.innerHTML = cartArray[cnt-1].itemPrice;

    document.getElementById("totalPrice").innerHTML="Your Total Price is: $" +total;
    document.getElementById("totalPrice2").innerHTML = "Your Total Price is $"+total + "</br> Thank you for your purchase!";
    
}

function displayCart2() {
    console.log("Purchase made");
    document.getElementById("hidden").style.display = "block";
    alert("Your purchase of was made successfully! Check the page for the info");
    cnt = 0;
}
function sendMail() {
    var link = "mailto:tmalabi1@gmail.com"
             + "&subject=" + encodeURIComponent("Personal Website update")
             + "&body= Your resume was downloaded atv " + Date()
    ;
    
    window.location.href = link;
}

function resDownloaded(){
    alert("Thank you for downloading my resume, I look forward to hearing from you!");
    sendMail();
}

function emailSent(){
    console.log("email sent");
    window.location.href = "contactMe.html";
    
    alert("Your email was sent! Check your sending email for a copy.");
    return false;
}