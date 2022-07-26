function cacheFunction(cb) {
    // Usa closures para crear un cache para la funcion cb.
    // la funcion que retornas debe aceptar un solo argumento e invocar a cb con ese argumento
    // cuando la funcion que hayas retornado es invocada de nuevo, deberia guardar el argumento y el resultado de la invocacion
    // cuando la funcion que retornaste sea invocada de nuevo con un argumento con el cual se habia invocado anterioremente, no deberia invocar de nuevo a cb
    // deberia retornar el resultado (previamente guardado)
    // Ejemplo:
    // cb -> function(x) { return x * x; }
    // si invocas la function que retornaste con 5, adentro deberia invocar cb(5) y retornar 25.
    // si la invocas de nuevo con 5, deberia retornar 25 (guardado previament en el cache)
    // Tips, usá un objeto donde cada propiedad sea un argumento, y el valor el resultado.
    // Aqui tu codigo

}


    // Instrucción:
    // Dada una cadena, escriba una función recursiva para devolver la cadena invertida. */// Ejemplo:
    // => 'divoco'
    //cadena inversa('covid')
    // Aqui tu codigo
    // function CadenaInvertida(cad) {
    //     return cad.split("").reverse().join("");
    // }
    
function CadenaInvertida(cad) {
    if (cad === "") // Este es el caso terminal que finalizará la recursión
      return "";
    
    else    
    return CadenaInvertida(cad.substr(1)) + cad.charAt(0);
}
console.log(CadenaInvertida("divoc"));

console.log(CadenaInvertida("NeuqueN"))


    // Instruction:
    //Dada una matriz, escriba una función recursiva para encontrar el entero más grande en una matriz. */// Ejemplos:
    //maxOf([1, 4, 5, 3])
    // => 5
    //maxOf([3, 1, 6, 8, 2, 4, 5])
    // => 8
    //Aqui tu codigo 

function EnteroMasGrande(array) {  
    var newArray = [];    
    cont = 0;    
    mayor = array[0];
    for (let index = 1; index < array.length; index++) {        
        if (array[index] > mayor  ) {
            mayor = array[index];
            cont = cont + 1;
        }            
        newArray[index - 1] = array[index];        
    }
    if (cont == 0) 
        return mayor;
    else
        return EnteroMasGrande(newArray);    
}

// function EnteroMasGrande(array) {

//     if (array.length === 1){ 
//         return array[0]
//     } else{

//     if(array[0]>array[array.length-1]){
//         array.pop()
//         return EnteroMasGrande(array) 
//     }else {
//        return EnteroMasGrande(array.slice(1) )
//     }
// }
// }

var array = [10, 3, 1, 6, 8, 20, 4, 5, 9];
console.log(EnteroMasGrande(array));


    
// Instrucción:
//Dada una cadena, escriba una función recursiva para imprimir una matriz de todas las permutaciones posibles de la cadena. */// Ejemplos:
//permutaciones('abc')
// => ['abc', 'acb', 'bac', 'bca', 'cab', 'cba']
//permutaciones('aabc')
// => ["aabc", "aacb", "abac", "abca", "acab", "acba", "baac", "baca", "bcaa", "caab", "caba", " cbaa"]
//Aqui tu codigo

function Permutaciones(str){

    function factorial(x){
        if (x > -1 && x < 2 )
        return 1
        else if( x < 0)
            return 0          
        return  x * factorial(x - 1);      
        // dato = x;  
        // for(let i = dato; i>0; i--){
        //      x*= i;
        // }
        // return  x;
    }

    var chars = str[0].split(''); 
    chars = chars.sort(function() {return Math.random() - 0.5 });    
    const newStr = chars.join('');

    for (let index = 0; index < str.length; index++) {       
        if (newStr === str[index]) {
            return Permutaciones(str);
        }
    }
    
    str[str.length] = newStr;

    if (str.length === factorial(str[0].length))
        return str;
    else
        return Permutaciones(str);

}

console.log(Permutaciones(['abcd']))



