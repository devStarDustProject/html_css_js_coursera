var message ="in global";
console.log("global: message=" + message);


var x = "Hallo Welt jetzt"
function a(){return console.log(x);}

console.log("global: message=");
a();
console.log("vor Variable b");
var b = a()+"Test";
