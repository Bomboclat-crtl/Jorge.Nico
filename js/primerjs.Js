// Console.log nos sirve para depurar y probar nuestras salidas
console.log("Hola mundo desde JavaScript");
//alert nos sirve para mostrarle un alert al usuario
alert("Gente miren una alerta xdxdddd");

function cambiarCarita(){
    document.getElementById("carita").src="images/sad.jpg";
    alert("XQ estas triste??");
}
function feliz(){
    document.getElementById("carita").src="images/happy.jpg";
    document.getElementById("TituloJS").textContent="Ejemplo de Caritas";
}

function nombresNav() {
    document.getElementById("m1").textContent = "Home";
    document.getElementById("m2").textContent = "Lists";
    document.getElementById("m3").textContent = "Tables";
    document.getElementById("m4").textContent = "JS Examples";
    document.getElementById("m5").textContent = "JS Homework";
    document.getElementById("m6").textContent = "Forms";
    document.getElementById("m7").textContent = "Personal";
}

function cambiarTitulo(){
    document.getElementById("titulo").textContent="Practicando JS";
    document.getElementById("titulo").style.color="#7e1ba5";
    document.getElementById("titulo").style.fontSize="40px"; 
    document.getElementById("senati").src="images/senati2.png";
    document.getElementById("encabezado").style.backgroundColor="#e65082";
}

function suma(){
    let num1 = 3;
    let num2 = 5;
    let suma = num1+num2;
    alert(suma);
}

function eje01(){
    let p1 = 10;
    let p2 = 5;
    let p3 = 15;
    let c1 = 3;
    let c2 = 18;
    let c3 = 6;
    let Stotal, total;
    Stotal = (p1*c1)+(p2*c2)+(p3*c3);
    if(Stotal>100){
        total = Stotal*0.95;
        alert("Su compra lleva descuento");
    }else{
        total = Stotal;
    }
    alert("El total a Pagar es de: S/."+total);

}
function eje02(){
    let amigos = 10;
    let total = 100;
    let cuota = total/amigos;
    alert("Son "+amigos+" amigos"+ " y la cuota del total S/."+total+" es de : S/."+cuota);
}

function caida() {
    document.body.innerHTML = "<h1>ERROR</h1><p>Pagina no disponible</p><button onclick='recuperar()'>Volver</button>";
}

function recuperar() {
    location.reload();
}


function distancia(){
    let distanciaR = 20
    let tarifaI = 10
    let tarifaporKM = 3
    Stotal = (10+distanciaR*3)
    alert("El total seria de: S/."+Stotal)
}

function cambiarFondo() {
  document.body.style.backgroundColor = "lightblue";
  alert("esto cambia el fondo")
}

function cambiarTexto() {
  document.body.style.color = "darkred";
  alert("esto cambia el texto xd")
}

function agrandarTexto() {
  document.getElementById("TituloJS").style.fontSize = "40px";
  alert("esto agranda el texto")
}


function disminuirImagen() {
  document.getElementById("imagen").style.width = "300px";
  alert("esto disminuye la imagen")
}


function alertasC(){
    alert("hola");
    alert("gente");
    alert("de");
    alert("youtube");
    alert("6");
    alert("7");
}