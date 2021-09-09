let huruf = ["a",  "b" , "a" , "b" ,  "d" , "d" , "e" , "f" , "e"]

function noDuplikat(){
    for(let i = 0; i < huruf.length; i++){
        if(i === i){
            i--
        }
    }
}