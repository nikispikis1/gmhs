// Vnořené podmínky
let isloggedIn = true;
let isAdmin = false;

if(isloggedIn) {
console.log("vítejte na stránce")
if (isAdmin) {
    console.log("přístup do panelu admin povolen"
)} else {
    console.log("přístup jako uživatel povolen!")
}
}
// Operátory

let age = 20;
let hasDriverLicense = true;

if (age >= 18 && hasDriverLicense) {
    console.log("můžete řídit auto")
} else {
    console.log("nemůžete řídit auto")
}

let isHoliday = false;
let isWeekend = true;

if (isHoliday || isWeekend) {
    console.log("můžete si odpočinout")
} else {
    console.log("musíte jít do práce")
}