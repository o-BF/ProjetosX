let sliderElement = document.querySelector("#slider");
let buttonElement = document.querySelector("#button");
let sizePassword = document.querySelector("#value");
let password = document.querySelector("#password");
let containerPassword = document.querySelector("#password-container")


let charset = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@&*';
let newpassword = "";

sizePassword.innerHTML = sliderElement.value;

slider.oninput = function(){
    sizePassword.innerHTML = this.value;
}

function generatePassword(){
    let pass = "";
    for(let i = 0, n = charset.length; i < sliderElement.value; ++i){
    pass += charset.charAt(Math.floor(Math.random() * n )) 
    
    }
    containerPassword.classList.remove("hide");
    password.innerHTML = pass;
    newpassword = pass;

}

function copyPassword(){

   alert("Password Copy with sucess")
   navigator.clipboard.writeText(newpassword);

}