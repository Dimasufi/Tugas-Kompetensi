let dumbwaysJos = 0.211;
let dumbwaysMantap = 0.3;

let uangBelanja = [];

function hitungVoucher(){
    if( uangBelanja >= 50000){
    return uangBelanja - (uangBelanja*dumbwaysJos);
    } else if(uangBelanja >= 80000){
    return uangBelanja - (uangBelanja*dumbwaysMantap);
    }
}

uangBelanja.push(85000)
console.log(hitungVoucher(uangBelanja.length));