let podminka = !false;

podminka = true && false; 

podminka = false || true;

console.log(podminka)

// Podmínka přes if

let number = 10;
let message;

if (number > 0) {
    message = "číslo je kladné";
} else  {
    message = "číslo je záporné";
}

console.log(message);

// Druhé řešení pomocí terrnárního operátoru

let number2 = 10;
let message2 = (number2 > 0) ? "číslo je kladné" : "číslo je záporné";

console.log(message2);