// Assignment Code
// program started

let generatepasswordBtn = document.querySelector("#generate");

var length=prompt("How long do you want your password ?");

let onlyupperCase= ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"]
let onlylowerCase = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"]
let onlynumbers=["0","1","2","3","4","5","6","7","8","9","0"]
let onlysymbols=["!","@","#","$","%","&","^","*","+","?"]
if(length<8||length>128){
    alert("Please enter pass between 8 and 128");
    
}
else{
    let includesymbols= confirm("Do you wants to have symbols in your password?");
    let includeupperCase= confirm("Do you wants to have uppercase in your password?");
    let includelowerCase= confirm("Do you wants to have lowercase in your password?");
    let includenumbers= confirm("Do you wants to have numbers in your password?");
    if (!includesymbols && !includenumbers && !includelowerCase && !includeupperCase)
    {
      alert("please try again with atlease one uppercase,one number,one symbols and onelowercase");
      return;
    
    
    }
}

    
