let precioTotalGamer = 0;
let subcategoriaActual = 1; // Índice de subcategoría actual, comenzando en 1

function empezar() {
    document.getElementById('inicio').classList.add('hidden');
    document.getElementById('pregunta-uso').classList.remove('hidden');
}

function seleccionarUso(uso) {
    document.getElementById('pregunta-uso').classList.add('hidden');
    if (uso === 'Gamer') {
        document.getElementById('gamer-section').classList.remove('hidden');
        document.getElementById('gamer-subsection-1').classList.remove('hidden');
    }
}

function ocultarTodasSubcategorias() {
    for (let i = 1; i <= 10; i++) {
        document.getElementById(`gamer-subsection-${i}`).classList.add('hidden');
    }
}

// Función para seleccionar solo un item por subcategoría y actualizar el precio total
function seleccionarItem(item, precio) {
    // Obtener todos los items dentro de la subcategoría actual
    const items = document.querySelectorAll(`#gamer-subsection-${subcategoriaActual} .item`);

    // Deseleccionar todos los items y restar su precio si estaban seleccionados
    items.forEach(i => {
        if (i.classList.contains('selected')) {
            i.classList.remove('selected');
            precioTotalGamer -= parseInt(i.getAttribute('data-precio'));
        }
    });

    // Seleccionar el item actual y sumar su precio
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
    }
}

function finalizarConfiguracion() {
    alert(`La configuración ha finalizado. Precio total: $${precioTotalGamer}`);
}

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
