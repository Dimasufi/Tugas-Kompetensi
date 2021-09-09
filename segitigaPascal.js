let s = "";
let polaAngka = 5;

function faktorial(n){
    let a = 1;
    let i = 1;

    while(i <= n){
        a *= i;
        i++;
    }
    return a;
}

for(let i = 0; 1 < polaAngka; i++){
    for(let j = polaAngka; j >= 1; j--){
        s+= "";
    }
    for(let j = 0; j <= i; j++ ){
        s += faktorial(i) / (faktorial(j) * faktorial(i-j) + "")
    }
    s += "\n";
}

console.log(s)