let a = "Hola Mundo";
document.write(a);

let b = "Alerta de prueba de javascript";
console.log(b);

let c = "Otra alerta de prueba de Javascript";
console.warn(c);

let d = `Otro comentario estúpido`;
document.write(d);

let e = 'Otro comentario estúpido 2';
console.log("idiota", 5 + 4, "otra cosa");

var iva = 0.21;
iva = 0.15;
console.log(iva);

const PI = 3.1416;
//PI = 0.15;
console.log(PI);

let f = true;

let u;

console.log(a);
console.log(b);
console.log(c);
console.log(d);
console.log(e);
console.log(iva);
console.log(PI);
console.log(f);

console.log(typeof(a));
console.log(typeof(b));
console.log(typeof(c));
console.log(typeof(d));
console.log(typeof(e));
console.log(typeof(iva));
console.log(typeof(PI));
console.log(typeof(f));
console.log(typeof(u));

let objeto_2 = new Object();
objeto_2.nombre = "Juan";
objeto_2.apellido = "Perez";
objeto_2.edad = 30;
console.log(objeto_2);


let objeto = {var1: 23, var2: true, var3: "Hola Mundo"};
console.log(objeto);
console.log(objeto.var2);

//let testprompt = prompt("Ingrese su nombre","");
//document.write("Hola :" + testprompt);

let i = 0;
while (i < 5) {
console.log("Valor de i:", i);
i = i + 1;
}

for (i = 0; i < 5; i++) {
    console.log("Valor de i:", i);
    }

/*function myfirsfunction() {
    document.write("Ejecución de mi primera función en Javascript");let d = prompt("Ingrese el autor",""); document.write (d)


myfirsfunction();}

for ( i=1; i<=10; i++) {console.log("1 x ", i , "=", i*1);};

function tablaDel10() {for ( i=1; i<=10; i++) {console.log("1 x ", i , "=", i*1);};};

tablaDel10();

for (let i=1; i<=3; i++) {tablaDel10();};

console.log(typeof(a)); console.log (a);
console.log(typeof(b)); console.log(b);


let g = prompt("Ingrese el valor de g",""); 
let h = prompt("Ingrese el valor de h",""); 

console.log(typeof(g)); console.log (g);
console.log(typeof(h)); console.log(h);

function gplush(g,h) {return g+h;};

let resultado = gplush(g,h);

console.log("El resultado de ", g, "+", h, "=", resultado);
document.write("El resultado de ", g, "+", h, "=", resultado);

let fval = prompt("Ingrese el valor de fval","0");
let sval = prompt("Ingrese el valor de sval","0");

console.log(typeof(fval)); console.log (fval);
console.log(typeof(sval)); console.log(sval);

let fval1 = parseInt(fval);
let sval1 = parseInt(sval);

function pluss(sval,sval) {return fval1+sval1;};

let result = pluss(sval,fval);

console.log("El resultado de ", sval, "+", sval, "=", result);
document.write("El resultado de ", fval, "+", sval, "=", result);

console.log(i)

function tablaMultiplicar(tabla, hasta) {
    for (let i = 1; i <= hasta; i++)
    console.log(tabla + " x " + i + " = ", tabla * i);
    }

tablaMultiplicar(1, 10);

var lname1 = prompt("Apellido");
var fname1 = prompt("nombre");
var cage1 = prompt("Edad");

function poredad (lname, fname, cage) 
{console.log("id: " + lname + "," + fname + " Age: " + cage); 
if (cage<=18) {console.log("No apto")} else {console.log("Apto")}
};

poredad(lname1,fname1,cage1);

function add1 (value1,value2) {total = (value1 + value2); console.log(value1 +" + "+value2 +" = " +total)};

let value3 = 2;
let value4 = 5;

add1(value3,value4);

function add2 (val1,val2) {var sum=val1+val2; return sum;};

n1 = 2;
n2 = 4;

var resultado = add2(n1,n2)

console.log("El resultado de " +n1+" + "+n2+" es tanto como..."+resultado)*/

function sumar(num10, num20){
    var suma = num10 + num20;
    console.log("La suma es " + suma);
    }
    sumar(2,5);

function sumarDos(num1, num2){
        var suma = num1 + num2;
        return suma;
        }
        n1 = 2;
        n2 = 3;
        var resultado = sumarDos(n1, n2);
        console.log("El resultado es: " + resultado);

        function cuadrado(x){
            return x*x;
            }
            console.log(cuadrado(2));

        const aCuadrado = x => x*x;
        console.log(aCuadrado(2))
        
        var aMultiplicar = (num1,num2) => num1*num2;

        console.log(aMultiplicar(6,7)); 

        function aalgo(a){return(a+100)}
        console.log(aalgo(1))

        var aalgo1 = a => a+100;
        console.log(aalgo1(2))
    
        var ab = 5;
        var bb = 10;

        console.log(ab);
        console.log(bb);
        
        if (ab === 5) {
          let ab = 4; // El alcance es dentro del bloque if
          var bb = 1; // El alcance es global
        
          console.log(ab);  // 4
          console.log(bb);  // 1
        }
        
        console.log(ab); // 5
        console.log(bb); // 1

        // Función anónima "saludo"
const saludo = function () {
    return "Hola";
  };
  
  console.log(saludo) // ƒ () { return 'Hola'; }
  console.log(saludo()); // 'Hola'

// fB = Función B
const fB = function () {
    console.log("Función B ejecutada.");
  };
  
  // fA = Función A
  const fA = function (callback) {
    callback();
  };
  
  fA(fB);

const mytest = function () {console.log("La variable i es =" + i);};
const execute = function (callback) {
    callback();
  };

execute(mytest)

execute(fB)

var textToTest = new String("Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore beatae repudiandae debitis molestias nesciunt ullam aspernatur perspiciatis quo rerum officiis possimus sequi quod ipsa assumenda aliquam, dolore at? Adipisci, error.");
var textToTest2 = new String("Texto para pruebas 2.");
var textToTest3 = new String('          Texto para pruebas 3.            ');
var texToTest4 = new String('diego.defeo@fibertel.com.ar');



console.log(textToTest.length);
console.log(textToTest.charAt(7));
console.log(textToTest.concat(textToTest2,textToTest3));
console.log(textToTest.indexOf("a"));  //22 ->
console.log(textToTest.indexOf("a",23)); //39 ->
console.log(textToTest.charAt(39)); //a
console.log(textToTest.lastIndexOf("a")); // 211 <-
console.log(textToTest.lastIndexOf("a",210)); // 200 <-
console.log(textToTest2.repeat(3));
console.log(textToTest.toUpperCase());
console.log(textToTest2.toLowerCase());
console.log(textToTest2.toUpperCase());
console.log(textToTest3.toString());
console.log(textToTest3.trim());
console.log(textToTest2.replace("pruebas", "PRUEBAS"))
console.log(texToTest4.indexOf("@"));
console.log(texToTest4.substr(11,9))
console.log(texToTest4.substr(11))
let myfirsttxt = textToTest[7]
console.log(myfirsttxt)

let vector= [1,3,5,8]; //0, 1, 2, 3: cantidad de elementos - 1
let vectortest= new Array(1,3,5,8);
let vectorVacio= []; //Vector vacío
let vectorDos = new Array("a", "b", "c");
let vectorTres = new Array (1, 5, 10, 15, 20);

console.log(vector);
console.log(vectortest);
console.log(vectorDos);
console.log(vector.length)
console.log(vector[vector.length-1])

console.log("Elementos del vector 2:");
for(i = 0; i < vector.length; i++){
console.log(vector[i]);
};

document.write("Elementos del vector 3: <br>");
for(i = 0; i < vectorTres.length; i++){
document.write(vectorTres[i] + " <br> ");
}

vector.push(10,12,14,16,19);
console.log(vector);
vector.pop(1);
console.log(vector);
console.log(vector.pop());
console.log(vector);
console.log(vector.pop());
console.log(vector.unshift(10,12,14,16,19));
console.log(vector);
vector.shift(1);
vector.pop(1);
console.log(vector);
vector.push(12);
console.log(vector);
console.log(vector.concat(1,2,3));
console.log(vector);
console.log(vector.concat(4));
console.log(vector);
let vectori = vector.concat(10,12,14,16,19);
console.log(vectori);
console.log(vectori.indexOf(10));
console.log(vectori.indexOf(10, 3));
console.log(vectori.lastIndexOf(12))
console.log(vectori.lastIndexOf(12,6))

console.log(vectori)
vectori.splice(2,0,"a","b","c")
console.log(vectori)
vectori.splice(5,2,"d","e")
console.log(vectori)
vectori.splice(7,11,"f","g")
console.log(vectori)
let vshort = vectori.slice(2,8)
console.log(vshort)

let lastvecot = new Array(1,3,5,7,9,"a","b","c","d","e")
console.log(lastvecot)
console.log(lastvecot.reverse())
console.log(lastvecot)
let last = lastvecot.slice(0,5)
console.log(last)
let lastn = lastvecot.slice (5,10)
console.log(lastn)
console.log(lastn.sort())
console.log(last.sort())
const asc = function (a, b) {
return a - b;
};
const desc = function (a, b) {
return b - a;
};
console.log(lastn.sort(asc));
console.log(last.sort(desc));
console.log(lastn.sort(desc));
console.log(last.sort(asc));

let listado = new Array ("Google", "BID", "Coursera","Edx", "Chile","Argentinita")
listado.sort()
console.log(listado)

listado.forEach(mostrar);
function mostrar(elemento, indice) {
document.write(indice + ": " + elemento + "<br>");
indice++;
}

listado.every(comprobar)
function comprobar(elemento) {}

console.log(listado)



