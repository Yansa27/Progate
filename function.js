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

// return fuction

const value = (nilai) => {
    return nilai / 2 ;
}

const result = value (130) ;

console.log (`Hasil 130 dibagi 2 adallah ${result}`);

// menggunakan nilai return 

const add1 = (check) => {
    return check % 3 == 0 ;
}
if ( add1(123) ) {
    console.log("multiple 3");
} else {
    console.log("Not multiple 3");
}


// latihan akhir mencarir nilai terkecil

number1 = 100
number2 = 60
number3 = 20
number4 = 10

const getmax = (a , b , c , d) => {
    let max = a ;

    if (max > b ) {
        max = b;
    }
    if (max > c ) {
        max = c;
    }
    if (max > d) {
        max = d;
    }

    return max
};

const max = getmax(number1 , number2 , number3 , number4);

console.log(`Nilai terkecil adalah ${max}`);
