let precioTotalGamer = 0;
let subcategoriaActual = 1; // Índice de subcategoría actual, comenzando en 1

// Función para iniciar la configuración ocultando el carrusel y mostrando las opciones de uso
function empezar() {
    document.getElementById('inicio').classList.add('hidden');
    document.getElementById('pregunta-uso').classList.remove('hidden');
}

// Función para manejar la selección del uso y mostrar la sección correspondiente
function seleccionarUso(uso) {
    // Ocultar todas las opciones antes de mostrar la sección correspondiente
    ocultarOpcionesUso();

    // Ocultar el botón de "volver" y la pregunta de uso
    ocultarBotonYPregunta();

    // Ocultar todas las secciones
    ocultarTodasSecciones();

    // Mostrar la sección seleccionada según el uso
    if (uso === 'Gamer') {
        document.getElementById('gamer-section').classList.remove('hidden');
        document.getElementById('gamer-subsection-1').classList.remove('hidden'); // Mostrar primera subcategoría en Gamer
    } else if (uso === 'Office') {
        document.getElementById('office-section').classList.remove('hidden');
    } else if (uso === 'Diseño') {
        document.getElementById('diseno-section').classList.remove('hidden');
    } else if (uso === 'School') {
        document.getElementById('school-section').classList.remove('hidden');
    }
}

// Función para ocultar todas las opciones de uso (Gamer, School, Office, Diseño)
function ocultarOpcionesUso() {
    const opcionesUso = document.querySelectorAll('.opcion-uso');
    opcionesUso.forEach(opcion => {
        opcion.classList.add('hidden');
    });
}

// Función para ocultar el botón de "volver" y la pregunta de uso
function ocultarBotonYPregunta() {
    document.getElementById('pregunta-uso').classList.add('hidden');
    document.getElementById('volver-carrusel-btn').classList.add('hidden');
}

// Función para ocultar todas las secciones de configuración
function ocultarTodasSecciones() {
    document.getElementById('gamer-section').classList.add('hidden');
    document.getElementById('office-section').classList.add('hidden');
    document.getElementById('diseno-section').classList.add('hidden');
    document.getElementById('school-section').classList.add('hidden');
}

// Función para regresar al menú de selección de uso
function volver() {
    ocultarTodasSecciones();
    document.getElementById('pregunta-uso').classList.remove('hidden');
    document.getElementById('volver-carrusel-btn').classList.remove('hidden'); // Mostrar botón de "volver"
    mostrarOpcionesUso(); // Volver a mostrar las opciones de uso
}

function volverAlCarrusel() {
    document.getElementById('pregunta-uso').classList.add('hidden');
    document.getElementById('inicio').classList.remove('hidden');
}

// Función para seleccionar solo un item por subcategoría y actualizar el precio total
function seleccionarItem(item, precio) {
    const items = document.querySelectorAll(`#gamer-subsection-${subcategoriaActual} .item`);

    items.forEach(i => {
        if (i.classList.contains('selected')) {
            i.classList.remove('selected');
            precioTotalGamer -= parseInt(i.getAttribute('data-precio'));
        }
    });

    item.classList.add('selected');
    item.setAttribute('data-precio', precio); // Guardar precio en un atributo para referencia
    precioTotalGamer += precio;

    document.getElementById('precio-gamer-total').textContent = `Precio total: $${precioTotalGamer}`;
}

function mostrarSiguienteSubcategoria() {
    if (subcategoriaActual < 10) {
        document.getElementById(`gamer-subsection-${subcategoriaActual}`).classList.add('hidden');
        subcategoriaActual++;
        document.getElementById(`gamer-subsection-${subcategoriaActual}`).classList.remove('hidden');
    } else {
        finalizarConfiguracion();
    }
}

function mostrarSubcategoriaAnterior() {
    if (subcategoriaActual > 1) {
        document.getElementById(`gamer-subsection-${subcategoriaActual}`).classList.add('hidden');
        subcategoriaActual--;
        document.getElementById(`gamer-subsection-${subcategoriaActual}`).classList.remove('hidden');
    } else if (subcategoriaActual === 1) {
        // Regresar a la sección "pregunta-uso"
        document.getElementById('gamer-section').classList.add('hidden');
        document.getElementById('pregunta-uso').classList.remove('hidden');
        
        // Reactivar botones de la sección "pregunta-uso"
        mostrarOpcionesUso();

         // Mostrar botón "volver-carrusel-btn"
         document.getElementById('volver-carrusel-btn').classList.remove('hidden');
    }
}



// Ocultar todas las subcategorías en Gamer
function ocultarTodasSubcategorias() {
    for (let i = 1; i <= 10; i++) {
        document.getElementById(`gamer-subsection-${i}`).classList.add('hidden');
    }
}

// Función para finalizar la configuración y mostrar el precio total acumulado
function finalizarConfiguracion() {
    alert(`La configuración ha finalizado. Precio total: $${precioTotalGamer}`);
}

// Función para mostrar todas las opciones de uso cuando se vuelve al menú
function mostrarOpcionesUso() {
    const opcionesUso = document.querySelectorAll('.opcion-uso');
    opcionesUso.forEach(opcion => {
        opcion.classList.remove('hidden');
    });
}

// Ejecutar el carrusel cuando la página esté cargada
window.onload = function() {
    let currentImageIndex = 0;
    const images = document.querySelectorAll('.carousel-container img');
    const totalImages = images.length;

    function showNextImage() {
        images[currentImageIndex].classList.remove('active');
        currentImageIndex = (currentImageIndex + 1) % totalImages;
        images[currentImageIndex].classList.add('active');
    }

    setInterval(showNextImage, 3000);
};
