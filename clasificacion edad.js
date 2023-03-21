edad = prompt("dime tu edad ");
function edades(edad){
    if(edad <= 13){
        return "Hay dios mio, maldito niño rata";
    }else if(edad>=13 && edad<=18){
        return "chavalote, al tuto que eres adolescente";
    }else if(edad>=18 && edad<=64){
        return "a trabaja al campo, que eres adulto"
    }else{
        return "abuelito insano";
    }
}
let edades_clas = edades(edad);
console.log(edades_clas)