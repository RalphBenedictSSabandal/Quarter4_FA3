var x, y;
let result = "";
let list = "";
const contact = [];
var number = parseInt(prompt("Enter a number"));

while(Number.isInteger(number) == false){
    number = parseInt(prompt("Enter a number"));
}

document.getElementById("userinput").innerHTML = "Number inputted: " + number;

if (number%2 == 0){
    for (x=number; x>=1; x--){
        for (y=0; y<x; y++){
            result = result + x + " ";
        }
        result = result + "<br>";
    }
    document.getElementById("shape").innerHTML = result;
}
else{
    for (x=number; x>=1; x--){
        for (y=0; y<number; y++){
            result = result + x + " ";
        }
        result = result + "<br>";
    }
    document.getElementById("shape").innerHTML = result;
}

function add(){
    let addition = document.getElementById("add").value;
    if (contact.length < 7){
        contact.push(addition);
        list = ""
        for(x=0; x<contact.length; x++){
            list = list + contact[x] + " ";
        }
        document.getElementById("list").innerHTML = list;
    }
    else{
        contact.shift();
        contact.push(addition);
        list = ""
        for(x=0; x<contact.length; x++){
            list = list + contact[x] + " ";
        }
        document.getElementById("list").innerHTML = list;
    }
}
function remove(){
    contact.pop();
    list = ""
    for(x=0; x<contact.length; x++){
        list = list + contact[x] + " ";
    }
    document.getElementById("list").innerHTML = list;
}