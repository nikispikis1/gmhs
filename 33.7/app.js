function sayHello() {
  console.log("Hello World!");
}

rekniAhoj();
rekniAhoj();

let pozdrav = "Ahoj světe!";

function ukazPozdrav() {
  console.log(pozdrav);
}

function testLocal() {
  let localValue = 123;
  console.log(localValue);
}

ukazPozdrav();
testLocal();
console.log(LocalValue)

if (true) {
  let X = "jen uvnitř bloku";

}

console.log(X);

if (true) {
    var y = "var blok nerespektuje";
}
console.log(y);

// Parametr a Argument

function sayHello(name) { // name = parametr 
    console.log("ahoj" + name);
}


sayHello(Gerburda);

function addNumber(num1, num2) {
    console.log(num1 + num2);
}

addNumber(5,8); 