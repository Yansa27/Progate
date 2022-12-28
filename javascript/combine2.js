// array object for if

const identitas = 
    {nama : "yansa" , age : 18 , hobi : ["game" , "coding" , "Anime"]
}
    
console.log(`nama saya ${identitas.nama} umur ${identitas.age}`);
console.log("Hobi saya adallah : ");

for (let i = 0 ; i < identitas.hobi.length; i ++) {
    console.log(identitas.hobi[i]);
}

