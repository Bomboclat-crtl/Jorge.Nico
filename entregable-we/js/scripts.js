
window.onscroll = function () {
    var btn = document.getElementById("btn-arriba");
    if (document.documentElement.scrollTop > 300) {
        btn.style.display = "block";
    } else {
        btn.style.display = "none";
    }
};

function irArriba() {
    window.scrollTo({ top: 0, behavior: "smooth" });
}

function comprar(nombreProducto) {
    alert("¡Gracias por tu interés en " + nombreProducto + "!\n\nActualmente no contamos con un backend disponible. Pronto podrás realizar tu compra en línea.");
}

function enviarContacto(event) {
    event.preventDefault();
    var nombre = document.getElementById("contacto-nombre").value;
    var email = document.getElementById("contacto-email").value;
    var mensaje = document.getElementById("contacto-mensaje").value;
    if (nombre === "" || email === "" || mensaje === "") {
        alert("Por favor completa todos los campos.");
        return;
    }
    alert("¡Gracias " + nombre + "! Tu mensaje fue recibido. Te responderemos pronto.");
    document.getElementById("form-contacto").reset();
}

function enviarReclamo(event) {
    event.preventDefault();
    var nombre = document.getElementById("r-nombre").value;
    if (nombre === "") {
        alert("Por favor completa todos los campos requeridos.");
        return;
    }
    alert("Tu reclamo ha sido registrado correctamente. Te contactaremos a la brevedad posible.");
    document.getElementById("form-reclamo").reset();
}
