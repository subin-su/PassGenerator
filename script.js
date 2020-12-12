
let generatepasswordBtn = document.querySelector("#generate");
// These are the possible elemets extracted from a website
let onlyupperCase= ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"]
let onlylowerCase = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"]
let onlynumbers=["0","1","2","3","4","5","6","7","8","9","0"]
let onlysymbols=["!","@","#","$","%","&","^","*","+","?"]
// The instruction page//

 alert("Welcome! Please click 'Generate password' to start!");
 //function here accumulates all the choices user wants and later when called with another function produces pass//
function first()
{
    // prompt the user to enter password size

 var length=prompt("Hoe liong do you want your password ?");
  if(length>128 || length<8){
      alert("Choose a number bewtwwn 8 and 125");
      return;
  }
  else{
      alert("Lets proceed on!!!!!!!!!!!")
  }
  //These arr the options provided to the users
  let includesymbols= confirm("Do you wants to have symbols in your password?");
  let includeupperCase= confirm("Do you wants to have uppercase in your password?");
  let includelowerCase= confirm("Do you wants to have lowercase in your password?");
  let includenumbers= confirm("Do you wants to have numbers in your password?");
  if (!includesymbols && !includenumbers && !includelowerCase && !includeupperCase)
  {
    alert("Choose atleast one of the options");
    return;
  
  
  }
  else{
      alert("Generating password for")
  }
 
let allvalue={
  length: length,
  lowerCase:includelowerCase,
  upperCase: includeupperCase,
  numeric:includenumbers,
  specialcharacters: includesymbols
}
return allvalue;
}

// Write password to the #password input
function two(){
 let x=first();
 if (!x) {
    return;
 }
//  help to extract the password
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
 let lastpassword=[];
 for (let i = 0; i < x.length; i++) {
   let pickrandomly =Math.floor(Math.random()*Math.floor(password1.length));
   lastpassword.push(password1[pickrandomly]);
 }
 console.log(lastpassword)
 let finalpassword=lastpassword.join("");
 console.log(finalpassword);
 document.getElementById("password").value = finalpassword;
  } 
  
 
// Add event listener to generate button
generatepasswordBtn.addEventListener("click", two);