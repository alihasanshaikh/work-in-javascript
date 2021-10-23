//console.log('hello');
//alert('warning , ur learning JS');
// console.log(b)
//var JsAge = prompt('what is your age');
// document.getElementById("fromIndex").innerHTML="I am from Home.js";
//document.getElementById("fromIndex").innerHTML=JsAge;

// prompt("what is your name");
// var Score = Math.random()* 100;
// Score = Math.floor(Score)+1;
// alert("Your Intellingence" + Score + "%");

// if (Score > 70){
//     alert("You are Enstein !" + Score + "%");
// }
// if(Score > 30 && Score <=70) {
//     alert("You are Elon Musk !" + Score + "%" )
// }

// if(Score <+30) {
//     alert("You are Mr Bean !" + Score + "%" )}

// var guestList = ["AliHasan","Asil","Fsiz","Kaif"];
// var guestName = prompt("What is Your Name");
// if (guestList.includes(guestName)){
//     alert("Welcome");
// }
// else{
//     alert("Not Welcome");
// }
// console.log(guestName);



var output = [] ; //Array is Empty
var count = 1;
// toukdo mai code karo logic biuld hogi
function fizzBuzz(){
    while(count <=101){
        if(count % 3 ===0 && count % 5 === 0 ){
            output.push("fizzBuzz");
        }
       else if(count % 3 === 0){
            output.push("fizz");
        }
        else if(count % 5 === 0){
            output.push("Buzz");
       }
       else{
           output.push(count);
       }
       count++;
    }
    console.log(output);
}