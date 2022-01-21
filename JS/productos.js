const productos = [
  {
    id: 1,
    nombre: "Shampoo Elite",
    precio: 600,
    imagen: "../multimedia/shampooToxicShine.png",
    descripcion: 'Shampoo que posee un mix de ceras de máxima calidad y potenciadores de brillo con aroma a coco y banana. PH neutro, alto poder espumógeno y de limpieza. No barre ceras ni selladores.',
  },
  {
    id: 2,
    nombre: "Cera Toxic Shine",
    precio: 800,
    imagen: "../multimedia/ceraToxicShine.png",
    descripcion: 'Es un Quick Detail elaborado con un gran porcentaje de cera de carnauba, la cual otorga un excelente brillo con efecto húmedo y protege la superficie del vehículo',
  },
  {
    id: 3,
    nombre: "Extreme Detail Toxic Shine",
    precio: 1000,
    imagen: "../multimedia/extremeDetail.png",
    descripcion:
      'Quick Detail con aroma a durazno, formulado para otorgar un brillo único. Puede ser utilizado en superficies húmedas y secas.',
  },
  {
    id: 4,
    nombre: "Perfume Toxic Shine",
    precio: 400,
    imagen: "../multimedia/perfumeToxicshine.jpg",
    descripcion: 'fragancia a base de alcohol con olor a vainilla',
  },
];

let carrito = [];
const divisa = "$";
const DOMitems = document.querySelector("#items");
const DOMcarrito = document.querySelector("#carrito");
const DOMtotal = document.querySelector("#total");
const DOMbotonVaciar = document.querySelector("#boton-vaciar");

// Funciones

// Añade todos los items,productos y estructura al HTML

function crearProductos() {
  productos.forEach((info) => {
    const miNodo = document.createElement("div");
    miNodo.classList.add("card", "col-sm-4");

    const miNodoCardBody = document.createElement("div");
    miNodoCardBody.classList.add("card-body");

    const miNodoTitle = document.createElement("h5");
    miNodoTitle.classList.add("card-title");
    miNodoTitle.textContent = info.nombre;

    const miNodoDescription = document.createElement("p");
    miNodoDescription.classList.add("card-title");
    miNodoDescription.textContent = info.descripcion;

    const miNodoImagen = document.createElement("img");
    miNodoImagen.classList.add("img-fluid");
    miNodoImagen.setAttribute("src", info.imagen);

    const miNodoPrecio = document.createElement("p");
    miNodoPrecio.classList.add("card-text");
    miNodoPrecio.textContent = `${info.precio}${divisa}`;

    const miNodoBoton = document.createElement("button");
    miNodoBoton.classList.add("btn", "btn-primary");
    miNodoBoton.textContent = "Añadir al carrito";
    miNodoBoton.setAttribute("marcador", info.id);
    miNodoBoton.addEventListener("click", agregarProductoAlCarrito);

    miNodoCardBody.appendChild(miNodoImagen);
    miNodoCardBody.appendChild(miNodoTitle);
    miNodoCardBody.appendChild(miNodoDescription)
    miNodoCardBody.appendChild(miNodoPrecio);
    miNodoCardBody.appendChild(miNodoBoton);
    miNodo.appendChild(miNodoCardBody);
    DOMitems.appendChild(miNodo);
  });
}

//Evento(añade producto al carrito)
function agregarProductoAlCarrito(evento) {
  carrito.push(evento.target.getAttribute("marcador"));

  actualizarCarrito();
}

//Muestra los productos elegidos en el carrito
function actualizarCarrito() {
  DOMcarrito.textContent = "";
  // Saca los duplicados
  const carritoSinDuplicados = [...new Set(carrito)];

  carritoSinDuplicados.forEach((item) => {
    const miItem = productos.filter((itemBaseDatos) => {
      return itemBaseDatos.id === parseInt(item);
    });
    // Cuenta el número de veces que se repite el producto
    const numeroUnidadesItem = carrito.reduce((total, itemId) => {
      return itemId === item ? (total += 1) : total;
    }, 0);

    const miNodo = document.createElement("li");
    miNodo.classList.add("list-group-item", "text-right", "mx-2");
    miNodo.textContent = `${numeroUnidadesItem} x ${miItem[0].nombre} - ${miItem[0].precio}${divisa}`;
    // Boton de borrar
    const miBoton = document.createElement("button");
    miBoton.classList.add("btn", "btn-danger", "mx-5");
    miBoton.textContent = "X";
    miBoton.style.marginLeft = "1rem";
    miBoton.dataset.item = item;
    miBoton.addEventListener("click", borrarItemCarrito);

    miNodo.appendChild(miBoton);
    DOMcarrito.appendChild(miNodo);
  });
  // Calculamos el precio total en el HTML
  DOMtotal.textContent = calcularTotal();
}

//Evento 2(eliminar productos)
function borrarItemCarrito(evento) {
  const id = evento.target.dataset.item;

  carrito = carrito.filter((carritoId) => {
    return carritoId !== id;
  });

  actualizarCarrito();
}

//Funcion para calculo final del carrito
function calcularTotal() {
  return carrito
    .reduce((total, item) => {
      const miItem = productos.filter((itemBaseDatos) => {
        return itemBaseDatos.id === parseInt(item);
      });

      return total + miItem[0].precio;
    }, 0)
    .toFixed(2);
}

//Funcion para vaciar el carrito
function vaciarCarrito() {
  carrito = [];

  actualizarCarrito();
}

DOMbotonVaciar.addEventListener("click", vaciarCarrito);

crearProductos();
actualizarCarrito();
