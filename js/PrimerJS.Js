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