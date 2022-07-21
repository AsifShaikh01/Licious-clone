let form = document.querySelector("form");
let userdata =JSON.parse(localStorage.getItem("userdata")) || [];
form.addEventListener("submit",function(event){
    event.preventDefault();
    let data={
        email:form.email.value,
        name:form.name.value,
        password:form.password.value
    }
    if(checkEmail(data.email)===true){
        userdata.push(data);
        localStorage.setItem("userdata",JSON.stringify(userdata));
        alert("Sign Up Completed!!")
    }else{
        alert("Email already registered!!")
    }
    

})

function checkEmail(email){
    let filtered = userdata.filter(function(elem){
        return email === elem.email;
    })
    if(filtered.length> 0){
        return false;
    }else{
        return true;
    }
}

let showpass = document.querySelector("#showbtn");
showpass.addEventListener("click",showPassFun);

function showPassFun(){
    let passget = document.querySelector("#password");
    let showicon = document.querySelector("#show");
    
    if(passget.type === "password"){
        passget.type = "text";
        showicon.innerText = "visibility_off";
    }else{
        passget.type = "password";
        showicon.innerText = "visibility";
    }
}