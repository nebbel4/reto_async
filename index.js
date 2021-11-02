function msj() { 
    console.log("Este mensaje se hizo utilizando un callback.");
 }

 msj();

 var numero = 3.14;

 function tipoDato(numero){
    console.log("La variable es de tipo: " + typeof(numero) + ", y su contenido es: " + numero);
 }

 tipoDato(numero);

 var numero1 = 26;
 var numero2 = 13;

 function operaciones(numero1, numero2){
     resultadoSuma = numero1 + numero2;
     resultadoResta = numero1 - numero2;
     resultadoMult = numero1 * numero2;
     console.log("La suma de los dos numeros es: "+resultadoSuma);
     console.log("La resta de los dos numeros es: "+resultadoResta);
     console.log("La multiplicacion de los dos numeros es: "+resultadoMult);
 }

 operaciones(numero1, numero2);

 var palabra = 'PejeLagarto';

 function mayusAndMinus(palabra) {
    console.log(palabra.toLowerCase());
    console.log(palabra.toUpperCase());
 }

 mayusAndMinus(palabra);