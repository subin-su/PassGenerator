// Assignment Code
// program started

let generatepasswordBtn = document.querySelector("#generate");


function first(){
    alert("Click below button to start");


var length=prompt("How long do you want your password ?");
let onlyupperCase= ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"]
let onlylowerCase = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"]
let onlynumbers=["0","1","2","3","4","5","6","7","8","9","0"]
let onlysymbols=["!","@","#","$","%","&","^","*","+","?"]

    
    if(length<8||length>128){
        alert("Please enter pass between 8 and 128");
        return;
    
    
    }
  else{
    alert("Choose more options")
    
  }
let symbols= confirm("Do you wants to have symbols in your password?");
let upperCase= confirm("Do you wants to have uppercase in your password?");
let lowerCase= confirm("Do you wants to have lowercase in your password?");
let numbers= confirm("Do you wants to have numbers in your password?");
    
    if(!symbols&&!upperCase&&!lowerCase&&!numbers){
        alert("You should confirm atleast one");
        return;
    }
    else{
        alert("Wait till the password is generating");
    }

}

function password(){
    let confirm=first();
    if (!x) {
       return;

let password1=[];
console.log(password1)
if (x.lowerCase){
  for (let i = 0; i < onlylowerCase.length; i++) {
    password1.push(onlylowerCase[i]);
  }
}
if (x.upperCase){
  for (let i = 0; i <onlyupperCase.length; i++) {
     password1.push(onlyupperCase[i]);
  }
}
if (x.numeric){
  for (let i = 0; i <onlynumbers.length; i++) {
      password1.push(onlynumbers[i]);
  }
}
if (x.specialcharacters){
  for (let i = 0; i < onlysymbols.length; i++) {
      password1.push(onlysymbols[i]);
}
}
let password2=[];
for (let i = 0; i < x.length; i++) {
 let randomx =Math.floor(Math.random()*Math.floor(password1l.length));
 password2.push(password1[randomx]);
}
console.log(password2)
let finalpassword=password2.join("");
console.log(finalpassword);
document.getElementById("password").value = finalpassword;
} }


// Add event listener to generate button
generatepasswordBtn.addEventListener("click", password);