
let CartArr =JSON.parse(localStorage.getItem("AddedToCart")) || [];
function Add(){
    displayTable(CartArr);
}

function displayTable(CartArr){
    document.querySelector("tbody").innerHTML="";
    CartArr.forEach(function(elem) {
        let row = document.createElement("tr");
        let col1= document.createElement("td");
        col1.innerText=elem.name;
        let col2= document.createElement("td");
        col2.innerText=elem.wgt;
        let col3=document.createElement("td");
        col3.innerText = elem.pri;
        let col4= document.createElement("td");
        col4.innerText = "Remove";
        col4.addEventListener("click",function(event){
            event.target.parentNode.remove();
        })
        col4.style.backgroundColor = "#d11243";
        col4.style.color = "white";
        let col5=document.createElement("td");
        col5.innerText="order"
        col5.addEventListener("click",function(){
            alert("Your Order is Placed!!")
        })
        col5.style.color="white"
        col5.style.backgroundColor="#d11243"
        row.append(col1,col2,col3,col4,col5);
        document.querySelector("tbody").append(row)

    });
}
function home(){
    window.location.href="HomePage.html";
}