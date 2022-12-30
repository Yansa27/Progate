// cara nulis function

const objek = function() {
    console.log ("yansa");
    console.log ("Hallo");
}

objek ();
// cara cepat arrow function 

const iden = () => {
    console.log ("hallo deck");
    console.log ("hallo guys");
}

iden ();

// argument 
const greet = (name) => {
    console.log (`Halo ${name}`);

}

greet("Guru Domba");

// menggunakan beberapa parameter 

const add = (number1 , number2) => {
    console.log (number1 + number2);
}

add (5,7);