// ventas.js

const propiedades_venta = [
  {
    nombre: "Apartamento de lujo",
    descripcion: "Este apartamento de lujo está en una zona exclusiva.",
    ubicacion: "123 Luxury Lane, Prestige Suburb, CA 45678",
    habitaciones: 4,
    banos: 4,
    precio: 5000,
    fumadores: false,
    mascotas: false,
    img: "/assets/imgs/p1.png",
  },
  {
    nombre: "Casa con piscina",
    descripcion: "Casa espaciosa con piscina y jardín.",
    ubicacion: "456 Ocean Drive, Beach Town, CA 12345",
    habitaciones: 3,
    banos: 2,
    precio: 3500,
    fumadores: true,
    mascotas: true,
    img: "/assets/imgs/p4.jpg",
  },
];

let propiedadesCargadas = 3;

function renderPropiedades(propiedades, contenedorId) {
  const contenedor = document.getElementById(contenedorId);
  contenedor.innerHTML += propiedades
    .map(
      (propiedad) => `
          <div class="col-md-4 mb-4">
              <div class="card">
                  <img src="${propiedad.img}" class="card-img-top" alt="${
        propiedad.nombre
      }" />
                  <div class="card-body">
                      <h5 class="card-title">${propiedad.nombre}</h5>
                      <p class="card-text">${propiedad.descripcion}</p>
                      <p><i class="fas fa-map-marker-alt"></i> ${
                        propiedad.ubicacion
                      }</p>
                      <p><i class="fas fa-bed"></i> ${
                        propiedad.habitaciones
                      } Habitaciones | <i class="fas fa-bath"></i> ${
        propiedad.banos
      } Baños</p>
                      <p><i class="fas fa-dollar-sign"></i> ${
                        propiedad.precio
                      }</p>
                      <p class="${
                        propiedad.fumadores ? "text-success" : "text-danger"
                      }"><i class="fas fa-smoking${
        propiedad.fumadores ? "" : "-ban"
      }"></i> ${
        propiedad.fumadores ? "Permitido fumar" : "No se permite fumar"
      }</p>
                      <p class="${
                        propiedad.mascotas ? "text-success" : "text-danger"
                      }"><i class="fas fa-paw${
        propiedad.mascotas ? "" : "-ban"
      }"></i> ${
        propiedad.mascotas ? "Mascotas permitidas" : "No se permiten mascotas"
      }</p>
                  </div>
              </div>
          </div>
      `
    )
    .join("");
}

function cargarMasPropiedades() {
  const siguientePropiedades = propiedades_venta.slice(
    propiedadesCargadas,
    propiedadesCargadas + 3
  );
  renderPropiedades(siguientePropiedades, "venta-propiedades-full");
  propiedadesCargadas += 3;
  if (propiedadesCargadas >= propiedades_venta.length) {
    document.getElementById("cargar-mas-btn").style.display = "none";
  }
}

document.addEventListener("DOMContentLoaded", function () {
  renderPropiedades(
    propiedades_venta.slice(0, propiedadesCargadas),
    "venta-propiedades-full"
  );
  const cargarMasBtn = document.getElementById("cargar-mas-btn");
  if (cargarMasBtn) {
    cargarMasBtn.addEventListener("click", cargarMasPropiedades);
  }
});
