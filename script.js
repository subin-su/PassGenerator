// Assignment Code
// program started

let generatepasswordBtn = document.querySelector("#generate");
alert("Click below button to start");

function first(){
   


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
    let x=first();
    if (!x) {
       return;
    }
    var choice1=onlyupperCase[Math.floor(Math.random()*onlyupperCase.length)];
    var choice2=onlylowerCase[Math.floor(Math.random()*onlylowerCase.length)];
    var choice3=onlynumbers[Math.floor(Math.random()*onlynumbers.length)];
    var choice4=onlysymbols[Math.floor(Math.random()*onlysymbols.length)];
    let password1=[];
    if(x.symbols){
        password1.push(choice4);}
        if(x.numbers){
            password1.push(choice3);}
            if(x.upperCase){
                password1.push(choice1);}
                if(x.lowerCase){
                    password1.push(choice42);}

        
    
