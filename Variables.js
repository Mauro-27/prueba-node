
//VAR al usar var javascript ignora los bloques de codigo y a la variable la convierte en global. 
//Si hubiera otra variable igual en el codigo estariamos pisando su valor
if (true) {
    var nombre = "Juan";
}

console.log(nombre) // OK. muestra "Juan"

//Let al usar let en javascript este respeta los bloques de codigo eso quiere decir que nombre no podra ser accedida fuera del if y podremos tener variables del mismo nombre fura del codigo
if (true) {
    let nombre = "Juan"
}

console.log(nombre) //error: nombre no existe

print("Hola s")