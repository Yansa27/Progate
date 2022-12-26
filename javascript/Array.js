// apa itu array 

const animals = ["anjing" , "kucing" , "domba"];
console.log(animals);

// cetak index array 

console.log (animals[0]); 
console.log (animals[2]);

// ganti element index array 

animals[2] = "kelinci";

console.log (animals[2]);

// iterasi dengan array
for (let i = 0 ; i < 3 ; i++) {
    console.log(animals[i]);
}

// property length
for (let i = 0 ; i < animals.length ; i++) {
    console.log(animals[i]);
}

