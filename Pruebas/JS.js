let precioTotalGamer = 0;
let subcategoriaActual = 1; // Índice de subcategoría actual, comenzando en 1

// Función para iniciar la configuración ocultando el carrusel y mostrando las opciones de uso
function empezar() {
    document.getElementById('inicio').classList.add('hidden');
    document.getElementById('pregunta-uso').classList.remove('hidden');
}

// Función para manejar la selección del uso y mostrar la sección correspondiente
function seleccionarUso(uso) {
    ocultarOpcionesUso();
    ocultarBotonYPregunta();
    ocultarTodasSecciones();

    if (uso === 'Gamer') {
        document.getElementById('gamer-section').classList.remove('hidden');
    } else if (uso === 'Office') {
        document.getElementById('office-section').classList.remove('hidden');
    } else if (uso === 'Diseño') {
        document.getElementById('diseno-section').classList.remove('hidden');
    } else if (uso === 'School') {
        document.getElementById('school-section').classList.remove('hidden');
    }
}

// Función para manejar la selección de Intel o AMD
function seleccionarFabricante(fabricante) {
    ocultarTodasSecciones(); // Ocultar todas las secciones

    if (fabricante === 'Intel') {
        document.getElementById('intel-section').classList.remove('hidden');
        document.getElementById('gamer-subsection-1').classList.remove('hidden'); // Mostrar procesadores Intel
    } else if (fabricante === 'AMD') {
        document.getElementById('amd-section').classList.remove('hidden');
        document.getElementById('gamer-subsection-1').classList.remove('hidden'); // Mostrar procesadores AMD
    }
}

// Funciones auxiliares
function ocultarOpcionesUso() {
    const opcionesUso = document.querySelectorAll('.opcion-uso');
    opcionesUso.forEach(opcion => opcion.classList.add('hidden'));
}

function ocultarBotonYPregunta() {
    document.getElementById('pregunta-uso').classList.add('hidden');
    document.getElementById('volver-carrusel-btn').classList.add('hidden');
}

function ocultarTodasSecciones() {
    const sections = document.querySelectorAll('.section-option');
    sections.forEach(section => section.classList.add('hidden'));

    const subsections = document.querySelectorAll('.gamer-subsection');
    subsections.forEach(subsection => subsection.classList.add('hidden'));
}

// Navegación entre subcategorías
function mostrarSiguienteSubcategoria() {
    const currentSection = document.querySelector('.section-option:not(.hidden)');
    const visibleSubsection = currentSection.querySelector('.gamer-subsection:not(.hidden)');
    const allSubsections = Array.from(currentSection.querySelectorAll('.gamer-subsection'));
    const currentIndex = allSubsections.indexOf(visibleSubsection);

    if (currentIndex >= 0 && currentIndex < allSubsections.length - 1) {
        visibleSubsection.classList.add('hidden');
        allSubsections[currentIndex + 1].classList.remove('hidden');
    } else {
        finalizarConfiguracion();
    }
}

function mostrarSubcategoriaAnterior() {
    const currentSection = document.querySelector('.section-option:not(.hidden)');
    const visibleSubsection = currentSection.querySelector('.gamer-subsection:not(.hidden)');
    const allSubsections = Array.from(currentSection.querySelectorAll('.gamer-subsection'));
    const currentIndex = allSubsections.indexOf(visibleSubsection);

    if (currentIndex > 0) {
        visibleSubsection.classList.add('hidden');
        allSubsections[currentIndex - 1].classList.remove('hidden');
    }
}

// Seleccionar un item y actualizar el precio
function seleccionarItem(item, precio) {
    const items = document.querySelectorAll(`#gamer-subsection-${subcategoriaActual} .item`);

    items.forEach(i => {
        if (i.classList.contains('selected')) {
            i.classList.remove('selected');
            precioTotalGamer -= parseInt(i.getAttribute('data-precio')) || 0;
        }
    });

    item.classList.add('selected');
    item.setAttribute('data-precio', precio); // Guardar precio en un atributo para referencia
    precioTotalGamer += precio;

    document.getElementById('precio-gamer-total').textContent = `Precio total: $${precioTotalGamer}`;
}

// Finalizar configuración
function finalizarConfiguracion() {
    alert(`La configuración ha finalizado. Precio total: $${precioTotalGamer}`);
}

// Iniciar carrusel al cargar la página
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
