//Descripción: El algoritmo le permite al usuario seleccionar uno o varios discos de un catálogo, consultar su precio, incluirlo a la lista de compras, recibir el total de la compra y proceder al pago.

//Primero, definimos algunas variables necesarias
let disco1 = "Disco monográfico de Vásquez-Ocampo";
let disco2 = "Disco monográfico de Sergio Cote";
let disco3 = "Disco de lanzamiento de la agrupación CCC";
let disco4 = "Disco de la agrupación Notch";
let disco5 = "Disco de la agrupación Baho";

let val1= 50000;
let val2= 50000;
let val3= 60000;
let val4= 60000;
let val5= 60000;

let cuenta= 0;
//Luego, pedimos confirmación de algunos datos personales:

let nombre = prompt("Bienvenido a nuestra tienda Peche Records ¿Cómo es su nombre?");

while(nombre == ""){
    nombre = prompt("Por favor, escriba de nuevo su nombre")
}
alert("Bienvenido a la tienda, "+nombre);

let direc = prompt("Por favor, confirme su dirección de envío");

while(direc == ""){
    direc = prompt("Por favor, escriba de nuevo su dirección")
}
alert("Su dirección es "+direc);

//Posteriromente, comenzamos el bucle para agregar items al carrito
do {
    let canasta = Number(prompt("Por favor, seleccione un disco del siguiente catálogo escribiendo el número de la lista: \n 1 "+disco1+"\n 2 "+disco2+"\n 3 "+disco3+"\n 4 "+disco4+"\n 5 "+disco5))
    switch (canasta) {
        case 1:
            alert("Usted seleccionó el "+disco1+" con un valor de "+val1+" pesos.")
            if(confirm("¿Desea agregarlo al carrito?")){
                cuenta += val1
                break;
            }else{
                break;
            } 
        case 2:
            alert("Usted seleccionó el "+disco2+" con un valor de "+val2+" pesos.")
            if(confirm("¿Desea agregarlo al carrito?")){
                cuenta += val2
                break;
            }else{
                break;
            } 
        case 3:
            alert("Usted seleccionó el "+disco3+" con un valor de "+val3+" pesos.")
            if(confirm("¿Desea agregarlo al carrito?")){
                cuenta += val3
                break;
            }else{
                break;
            }
        case 4:
            alert("Usted seleccionó el "+disco4+" con un valor de "+val4+" pesos.")
            if(confirm("¿Desea agregarlo al carrito?")){
                cuenta += val4
                break;
            }else{
                break;
            }
        case 5:
            alert("Usted seleccionó el "+disco5+" con un valor de "+val5+" pesos.")
            if(confirm("¿Desea agregarlo al carrito?")){
                cuenta += val5
                break;
            }else{
                break;
            } 
        default:
            alert("Por favor, ingrese un número del 1 al 5")
            break;
    }
} while (confirm("¿Desea agregar otro disco al carrito?"));

//Opciones de compra
let compra = confirm("Su cuenta total va en "+cuenta+". ¿Desea realizar la compra?")
if(compra){
    alert("Fueron descontados de su tarjeta de cliente frecuente "+cuenta+" pesos. ¡Gracias por su compra!")
}else{
    alert("Usted canceló la transacción. ¡Lo esperamos pronto de vuelta!")
}