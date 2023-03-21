function maximo(a,b){
    if(a > b ){
        return a;
    }else{
        return b;
    }
}

let max = maximo(5,15);
console.log("El maximo de 5 y 15 es " + max );