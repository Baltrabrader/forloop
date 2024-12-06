// ! Vise data på skjermen
// console.log("test");

// document.write("TEST")
// document.writeln("TEST")
// alert("Hei Baltra :))")

// ! IF statement
// ? Eksempel 1
var temp = 0;

if (temp >30) {
    console.log("Veldig varmt");
} else if (temp < -10) {
    console.log("Er du dumt? Du må være hjemme. Det er så kald");
} else {
    console.log("I dag er det en vanlig dag. Gå ut");
}

// ? Exmp 2

let tall = 0;

if (tall > 0) {
    console.log("Tallet er posotivt");
} else if( tall < 0) {
    console.log("Det er negativt");
} else {
    console.log("Tallet er bare 0");
}



var minTekst = "#";
for (var i = 0; i < 4; i++) {
    console.log(minTekst);
    minTekst = minTekst + "#";
}

for (let i = 1; i <= 50; i++) {
    if (i % 2 === 0) {
        console.log(i);
    }
}

for (let i = 1; i <= 100; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
        console.log(i);
    }
}

let numbers = [12, 45, 23, 56, 78]; 
let largest = numbers[0]; 

for (let i = 1; i < numbers.length; i++) {
    if (numbers[i] > largest) {
        largest = numbers[i]; 
    }
}

console.log("Det største tallet er:", largest);

for (let i = 1; i <=6; i++) {
    document.write(`<h${i}>Baltra er best</h${i}>`)
}

for (let i = 6; i > 1; i--) {
    document.write(`<h${i}>Baltra er best</h${i}>`)
}

