document.addEventListener("DOMContentLoaded", function () {
  const propiedades_venta = [
    {
      nombre: "Apartamento en zona exclusiva",
      descripcion:
        "Este apartamento de lujo está ubicado en una exclusiva zona residencial.",
      ubicacion: "123 Luxury Lane, Prestige Suburb, CA 45678",
      habitaciones: 4,
      banos: 4,
      precio: 5000,
      fumadores: false,
      mascotas: true,
      img: "/assets/imgs/p1.png",
    },
    {
      nombre: "Apartamento acogedor en la montaña",
      descripcion:
        "Este apartamento acogedor está situado en lo alto de una montaña con impresionantes vistas.",
      ubicacion: "789 Mountain Road, Summit Peaks, CA 23456",
      habitaciones: 2,
      banos: 1,
      precio: 1200,
      fumadores: true,
      mascotas: true,
      img: "/assets/imgs/p2.png",
    },
    {
      nombre: "Penthouse de lujo con terraza panorámica",
      descripcion:
        "Este penthouse de lujo ofrece una terraza panorámica con vistas espectaculares.",
      ubicacion: "567 Skyline Avenue, Skyview City, CA 56789",
      habitaciones: 3,
      banos: 3,
      precio: 4500,
      fumadores: false,
      mascotas: true,
      img: "/assets/imgs/p3.png",
    },
  ];

  const propiedades_alquiler = [
    {
      nombre: "Apartamento en el centro de la ciudad",
      descripcion:
        "Este apartamento de dos habitaciones está ubicado en el corazón de la ciudad.",
      ubicacion: "123 Main Street, Anytown, CA 91234",
      habitaciones: 2,
      banos: 2,
      precio: 2000,
      fumadores: false,
      mascotas: true,
      img: "/assets/imgs/alq1.png",
    },
    {
      nombre: "Apartamento luminoso con vista al mar",
      descripcion:
        "Este hermoso apartamento ofrece una vista impresionante al mar.",
      ubicacion: "456 Ocena Avenue, Seaside Town, CA 56789",
      habitaciones: 3,
      banos: 3,
      precio: 2500,
      fumadores: true,
      mascotas: true,
      img: "/assets/imgs/alq2.png",
    },
    {
      nombre: "Condominio moderno en zona residencial",
      descripcion:
        "Este elegante condominio moderno está ubicado en una tranquila zona residencial.",
      ubicacion: "123 Main Street, Anytown, CA 91234",
      habitaciones: 2,
      banos: 2,
      precio: 2200,
      fumadores: false,
      mascotas: false,
      img: "/assets/imgs/alq3.png",
    },
  ];

  function renderPropiedades(propiedades, contenedorId) {
    const contenedor = document.getElementById(contenedorId);
    contenedor.innerHTML = propiedades
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
                        }">
                            <i class="fas fa-smoking${
                              propiedad.fumadores ? "" : "-ban"
                            }"></i> ${
          propiedad.fumadores ? "Permitido fumar" : "No se permite fumar"
        }
                        </p>
                        <p class="${
                          propiedad.mascotas ? "text-success" : "text-danger"
                        }">
                            <i class="fas fa-paw${
                              propiedad.mascotas ? "" : "-ban"
                            }"></i> ${
          propiedad.mascotas ? "Mascotas permitidas" : "No se permiten mascotas"
        }
                        </p>
                    </div>
                </div>
            </div>
        `
      )
      .join("");
  }

  // Renderizar propiedades en index.html
  if (document.getElementById("venta-propiedades")) {
    renderPropiedades(propiedades_venta.slice(0, 3), "venta-propiedades");
  }
  if (document.getElementById("alquiler-propiedades")) {
    renderPropiedades(propiedades_alquiler.slice(0, 3), "alquiler-propiedades");
  }
});
