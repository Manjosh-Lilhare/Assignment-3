const red = document.getElementById('Red');
const blue = document.getElementById('Blue');
const green = document.getElementById('Green');
const yellow = document.getElementById('Yellow');
//text = text.value;
//const h1=document.getElementById('greet')
//h1.innerText="Hello "+text;

//function redclick() {
//    console.log("red clicked");
//    red.style.backgroundColor = "red";
//}
//function blueclick() {
//    blue.style.backgroundColor = "blue";
//    console.log("blue clicked");
//}
//function greenclick() {
//    green.style.backgroundColor = "green";
//    console.log("green clicked");
//}
//function yellowclick() {
//    yellow.style.backgroundColor = "yellow";
//    console.log("yellow clicked");
//}
function greetUser() {
  const name = document.getElementById('name').value;
  if(length(name)>0){

      document.getElementById('greet').innerText = "Hello " + name + "!";
    }
    else{
      document.getElementById('greet').innerText = "Hello " ;

  }
}
red.addEventListener('click', ()=>
    {
    red.style.backgroundColor = "red";
});
blue.addEventListener('click', ()=>
    {
    blue.style.backgroundColor = "blue";
});
green.addEventListener('click', ()=>
    {
    green.style.backgroundColor = "green";
});
yellow.addEventListener('click', ()=>
    {
    yellow.style.backgroundColor = "yellow";
});