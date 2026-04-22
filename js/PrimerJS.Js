// Console.log nos sirve para depurar y probar nuestras salidas
console.log("Hola mundo desde JavaScript");
//alert nos sirve para mostrarle un alert al usuario
alert("Gente miren una alerta xdxdddd");

function cambiarCarita(){
    document.getElementById("carita").src="images/sad.jpg";
    document.getElementById("SENATI").src="images/senati2.png";
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
    document.getElementById("titulo").style.color="#7e1ba5"
    
    document.getElementById("senati").src="images/senati2.png";
    document.getElementById("encabezado").style.background="#e65082"
}

function suma(){
    let num1 = 3;
    let num2 = 5;
    let suma = num1+num2;
    alert(suma);
}


function caida() {
    document.body.innerHTML = "<h1>ERROR</h1><p>Pagina no disponible</p><button onclick='recuperar()'>Volver</button>";
}

function recuperar() {
    location.reload();
}

/*probando