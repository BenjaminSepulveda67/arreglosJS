// alquiler.js

const propiedades_alquiler = [
  {
    nombre: "Departamento céntrico",
    descripcion:
      "Este departamento de 2 habitaciones está ubicado en el centro de la ciudad.",
    ubicacion: "123 Main Street, Anytown, CA 91234",
    habitaciones: 2,
    banos: 2,
    precio: 2000,
    fumadores: false,
    mascotas: true,
    img: "/assets/imgs/alq1.png",
  },
  {
    nombre: "Casa de campo",
    descripcion: "Casa de campo con amplio terreno y vistas impresionantes.",
    ubicacion: "789 Country Road, Countryside, CA 67890",
    habitaciones: 4,
    banos: 3,
    precio: 2500,
    fumadores: true,
    mascotas: true,
    img: "/assets/imgs/alq4.jpg",
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
  const siguientePropiedades = propiedades_alquiler.slice(
    propiedadesCargadas,
    propiedadesCargadas + 3
  );
  renderPropiedades(siguientePropiedades, "alquiler-propiedades-full");
  propiedadesCargadas += 3;
  if (propiedadesCargadas >= propiedades_alquiler.length) {
    document.getElementById("cargar-mas-btn").style.display = "none";
  }
}

document.addEventListener("DOMContentLoaded", function () {
  renderPropiedades(
    propiedades_alquiler.slice(0, propiedadesCargadas),
    "alquiler-propiedades-full"
  );
  const cargarMasBtn = document.getElementById("cargar-mas-btn");
  if (cargarMasBtn) {
    cargarMasBtn.addEventListener("click", cargarMasPropiedades);
  }
});
