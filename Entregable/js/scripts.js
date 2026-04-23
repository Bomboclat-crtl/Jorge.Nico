/*!
* Start Bootstrap - Shop Homepage v5.0.6 (https://startbootstrap.com/template/shop-homepage)
* Copyright 2013-2023 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-shop-homepage/blob/master/LICENSE)
*/
// This file is intentionally blank
// Use this file to add JavaScript to your project

const productos = [
  { nombre: "Lechuga", categoria: "Verduras", icono: "🥬", precio: 3.50, descripcion: "Fresca y crocante." },
  { nombre: "Espinaca", categoria: "Verduras", icono: "🌿", precio: 4.20, descripcion: "Ideal para batidos y salteados." },
  { nombre: "Zanahoria", categoria: "Verduras", icono: "🥕", precio: 3.80, descripcion: "Buena para jugos y ensaladas." },
  { nombre: "Tomate", categoria: "Verduras", icono: "🍅", precio: 4.00, descripcion: "Muy usado en cocina diaria." },
  { nombre: "Pepino", categoria: "Verduras", icono: "🥒", precio: 3.60, descripcion: "Refrescante para ensaladas." },
  { nombre: "Brócoli", categoria: "Verduras", icono: "🥦", precio: 5.10, descripcion: "Muy nutritivo y saludable." },
  { nombre: "Coliflor", categoria: "Verduras", icono: "🥬", precio: 5.00, descripcion: "Útil para sopas y guisos." },
  { nombre: "Apio", categoria: "Verduras", icono: "🌱", precio: 3.20, descripcion: "Sirve para caldos y jugos." },
  { nombre: "Pimiento", categoria: "Verduras", icono: "🫑", precio: 4.60, descripcion: "Aporta color y sabor." },
  { nombre: "Cebolla", categoria: "Verduras", icono: "🧅", precio: 2.90, descripcion: "Base de muchas recetas." },

  { nombre: "Manzana", categoria: "Frutas", icono: "🍎", precio: 5.40, descripcion: "Dulce y práctica." },
  { nombre: "Plátano", categoria: "Frutas", icono: "🍌", precio: 4.90, descripcion: "Buena fuente de energía." },
  { nombre: "Naranja", categoria: "Frutas", icono: "🍊", precio: 4.70, descripcion: "Ideal para jugos." },
  { nombre: "Fresa", categoria: "Frutas", icono: "🍓", precio: 7.20, descripcion: "Perfecta para postres." },
  { nombre: "Mango", categoria: "Frutas", icono: "🥭", precio: 6.80, descripcion: "Fruta tropical muy rica." },
  { nombre: "Piña", categoria: "Frutas", icono: "🍍", precio: 8.20, descripcion: "Muy usada en jugos." },
  { nombre: "Papaya", categoria: "Frutas", icono: "🟠", precio: 6.10, descripcion: "Ligera y suave." },
  { nombre: "Uva", categoria: "Frutas", icono: "🍇", precio: 7.40, descripcion: "Pequeña y dulce." },
  { nombre: "Pera", categoria: "Frutas", icono: "🍐", precio: 5.80, descripcion: "Fresca y suave." },
  { nombre: "Melón", categoria: "Frutas", icono: "🍈", precio: 7.00, descripcion: "Muy refrescante." },

  { nombre: "Chía", categoria: "Semillas", icono: "⚪", precio: 9.50, descripcion: "Usada en bebidas." },
  { nombre: "Linaza", categoria: "Semillas", icono: "🟤", precio: 8.30, descripcion: "Aporta fibra." },
  { nombre: "Sésamo", categoria: "Semillas", icono: "⚪", precio: 7.60, descripcion: "Útil en panes." },
  { nombre: "Girasol", categoria: "Semillas", icono: "🌻", precio: 8.10, descripcion: "Buen snack natural." },
  { nombre: "Calabaza", categoria: "Semillas", icono: "🎃", precio: 7.90, descripcion: "Semilla tostada." },
  { nombre: "Quinua", categoria: "Semillas", icono: "🌾", precio: 10.50, descripcion: "Muy nutritiva." },
  { nombre: "Amaranto", categoria: "Semillas", icono: "🌱", precio: 9.20, descripcion: "Muy usado en desayunos." },
  { nombre: "Cañihua", categoria: "Semillas", icono: "🌾", precio: 10.80, descripcion: "Grano andino." },
  { nombre: "Sacha Inchi", categoria: "Semillas", icono: "🟢", precio: 12.00, descripcion: "Semilla nutritiva." },
  { nombre: "Ajonjolí", categoria: "Semillas", icono: "⚪", precio: 7.40, descripcion: "Muy común en panes." },

  { nombre: "Lenteja", categoria: "Granos y legumbres", icono: "🟤", precio: 6.40, descripcion: "Usada en sopas." },
  { nombre: "Garbanzo", categoria: "Granos y legumbres", icono: "🟠", precio: 7.10, descripcion: "Sirve para ensaladas." },
  { nombre: "Frejol canario", categoria: "Granos y legumbres", icono: "🫘", precio: 6.90, descripcion: "Muy usado en menestras." },
  { nombre: "Pallares", categoria: "Granos y legumbres", icono: "🫘", precio: 7.30, descripcion: "Clásico de la cocina." },
  { nombre: "Arveja", categoria: "Granos y legumbres", icono: "🟢", precio: 5.90, descripcion: "Ideal para sopas." },
  { nombre: "Arroz integral", categoria: "Granos y legumbres", icono: "🌾", precio: 7.80, descripcion: "Opción saludable." },
  { nombre: "Maíz", categoria: "Granos y legumbres", icono: "🌽", precio: 5.50, descripcion: "Versátil y práctico." },
  { nombre: "Avena", categoria: "Granos y legumbres", icono: "🥣", precio: 6.20, descripcion: "Muy usada en desayuno." },
  { nombre: "Trigo", categoria: "Granos y legumbres", icono: "🌾", precio: 5.70, descripcion: "Base para varias comidas." },
  { nombre: "Cebada", categoria: "Granos y legumbres", icono: "🌾", precio: 5.60, descripcion: "Usada en sopas y bebidas." }
];

function comprar(nombre) {
  alert('La compra de "' + nombre + '" aún no está disponible porque el proyecto no tiene backend.');
}

function renderProductos() {
  const contenedor = document.getElementById("productos");
  const buscador = document.getElementById("buscador");

  if (!contenedor || !buscador) {
    return;
  }

  const categoria = document.body.dataset.categoria;
  const texto = buscador.value.toLowerCase().trim();

  const filtrados = productos.filter(function (p) {
    const coincideCategoria = p.categoria === categoria;
    const coincideTexto = p.nombre.toLowerCase().includes(texto) || p.descripcion.toLowerCase().includes(texto);
    return coincideCategoria && coincideTexto;
  });

  contenedor.innerHTML = "";

  if (filtrados.length === 0) {
    contenedor.innerHTML = '<div class="col-12"><div class="alert alert-warning mb-0">No se encontraron productos.</div></div>';
    return;
  }

  filtrados.forEach(function (p) {
    const col = document.createElement("div");
    col.className = "col-sm-6 col-lg-4 col-xl-3";

    col.innerHTML = `
      <div class="card product-card">
        <div class="producto-icono">${p.icono}</div>
        <div class="card-body d-flex flex-column">
          <span class="badge text-bg-success mb-2 align-self-start">${p.categoria}</span>
          <h5 class="card-title fw-bold mb-1">${p.nombre}</h5>
          <p class="mini-text mb-2">${p.descripcion}</p>
          <p class="price mb-3">S/ ${p.precio.toFixed(2)}</p>
          <button class="btn btn-farm mt-auto" type="button" onclick="comprar('${p.nombre.replace(/'/g, "\\'")}')">Comprar</button>
        </div>
      </div>
    `;

    contenedor.appendChild(col);
  });
}

function prepararPagina() {
  const formContacto = document.getElementById("formContacto");
  if (formContacto) {
    formContacto.addEventListener("submit", function (e) {
      e.preventDefault();
      alert("Mensaje enviado correctamente.");
      e.target.reset();
    });
  }

  const formReclamos = document.getElementById("formReclamos");
  if (formReclamos) {
    formReclamos.addEventListener("submit", function (e) {
      e.preventDefault();
      alert("Reclamo registrado correctamente.");
      e.target.reset();
    });
  }

  renderProductos();
}

document.addEventListener("DOMContentLoaded", prepararPagina);