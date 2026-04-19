function cambiarCarita() {
    let carita = document.getElementById("carita");
    if (carita.src.includes("happy.jpg")) {
        carita.src = "images/sad.jpg";
    } else {
        carita.src = "images/happy.jpg";
    }
}

function feliz() {
    let carita = document.getElementById("carita");
    carita.src = "images/happy.jpg";
}

function nombresNav() {
    document.getElementById("m1").innerHTML = "Home";
    document.getElementById("m2").innerHTML = "Lists";
    document.getElementById("m3").innerHTML = "Tables";
    document.getElementById("m4").innerHTML = "JS Examples";
    document.getElementById("m5").innerHTML = "JS Homework";
    document.getElementById("m6").innerHTML = "Forms";
    document.getElementById("m7").innerHTML = "Personal";
}