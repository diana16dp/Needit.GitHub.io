let precioTotalGamer = 0; // Variable para almacenar el precio de gamer-section
let precioTotalAdicional = 0; // Variable para almacenar el precio de configuracion-adicional-section

// Función para iniciar la configuración ocultando el carrusel e imagen de fondo
function empezar() {
    const inicio = document.getElementById('inicio');
    const preguntaUso = document.getElementById('pregunta-uso');

    // Ocultar el carrusel e imagen de fondo
    inicio.classList.add('hidden');

    // Mostrar la sección de pregunta
    preguntaUso.classList.remove('hidden');
}

// Función para manejar la selección del uso y mostrar la sección correspondiente
function seleccionarUso(uso) {
    // Ocultar la sección de pregunta
    const preguntaUso = document.getElementById('pregunta-uso');
    preguntaUso.classList.add('hidden');

    // Mostrar la sección correspondiente según la opción seleccionada
    const secciones = {
        'Gamer': document.getElementById('gamer-section'),
        'Office': document.getElementById('office-section'),
        'Diseño': document.getElementById('diseno-section'),
        'School': document.getElementById('school-section')
    };

    secciones[uso].classList.remove('hidden');
}

// Función para volver a la pantalla de inicio (carrusel)
function volver() {
    // Ocultar todas las secciones
    document.getElementById('pregunta-uso').classList.add('hidden');
    document.getElementById('gamer-section').classList.add('hidden');
    document.getElementById('office-section').classList.add('hidden');
    document.getElementById('diseno-section').classList.add('hidden');
    document.getElementById('school-section').classList.add('hidden');

    // Mostrar la pag anterior
    document.getElementById('pregunta-uso').classList.remove('hidden');
}

// Función para volver al carrusel desde la sección de pregunta-uso
function volverAlCarrusel() {
    // Ocultar la sección de pregunta-uso
    document.getElementById('pregunta-uso').classList.add('hidden');

    // Mostrar el carrusel de inicio
    document.getElementById('inicio').classList.remove('hidden');
}

// Función para seleccionar un item en la sección gamer y mostrar el precio
function seleccionarItem(item, precio) {
    const items = document.querySelectorAll('#gamer-section .item');
    items.forEach(i => i.classList.remove('selected')); // Quitar selección de otros items
    item.classList.add('selected'); // Agregar selección al item actual

    // Guardar precio de la selección de gamer-section
    precioTotalGamer = precio;
    document.getElementById('precio-gamer-total').textContent = `Precio total: $${precioTotalGamer}`;
}

// Función para ir a la siguiente sección
function irAConfiguracionAdicional() {
    document.getElementById('gamer-section').classList.add('hidden');
    document.getElementById('configuracion-adicional-section').classList.remove('hidden');
}

// Función para volver a gamer-section desde configuracion-adicional-section
function volverAGamer() {
    document.getElementById('configuracion-adicional-section').classList.add('hidden');
    document.getElementById('gamer-section').classList.remove('hidden');
}

// Función para seleccionar un item en la sección adicional y calcular el precio total
function seleccionarItemAdicional(item, precio) {
    const items = document.querySelectorAll('#configuracion-adicional-section .item');
    items.forEach(i => i.classList.remove('selected')); // Quitar selección de otros items
    item.classList.add('selected'); // Agregar selección al item actual

    // Guardar precio de la selección en configuracion-adicional-section
    precioTotalAdicional = precio;
    
    // Calcular el precio total sumando ambas selecciones
    const precioFinal = precioTotalGamer + precioTotalAdicional;
    document.getElementById('precio-total').textContent = `Precio total: $${precioFinal}`;
}

// Función para finalizar la configuración
function finalizarConfiguracion() {
    const precioFinal = precioTotalGamer + precioTotalAdicional;
    alert(`La configuración ha finalizado. Precio total: $${precioFinal}`);
}

// Ejecutar el carrusel cuando la página esté cargada
window.onload = function() {
    let currentImageIndex = 0;
    const images = document.querySelectorAll('.carousel-container img');
    const totalImages = images.length;

    function showNextImage() {
        // Ocultar la imagen actual
        images[currentImageIndex].classList.remove('active');

        // Cambiar al siguiente índice
        currentImageIndex = (currentImageIndex + 1) % totalImages;

        // Mostrar la nueva imagen
        images[currentImageIndex].classList.add('active');
    }

    // Cambiar imagen cada 3 segundos
    setInterval(showNextImage, 3000);
};
