var X = 9;
var Y = 69;
function division(a,b){
    if(b == 0){
        console.log("Nose puede dividir por 0")
    }else{
        return a / b;
    }
}
let sol = division(X,Y);
console.log("El resultado de dividir 9 entre 69 es"+ sol);