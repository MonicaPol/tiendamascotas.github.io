document.addEventListener('DOMContentLoaded', () => {
    // Datos de productos
    const productos = [
        { id: 1, nombre: "Correa", descripcion: "Correa extensible de alta resistencia", precio: 500 },
        { id: 2, nombre: "Alimento Balanceado", descripcion: "Alimento balanceado para perros de tamaño mediano", precio: 1500 },
        { id: 3, nombre: "Cucha", descripcion: "Cucha cómoda para perros pequeños", precio: 3500 },
        { id: 4, nombre: "Juguete", descripcion: "Juguete para perros que ayuda a su entretenimiento", precio: 800 }
    ];

    // Función para mostrar la descripción y precio 
    window.mostrarDescripcion = function(id) {
        const producto = productos.find(p => p.id === id);

        // Verificamos si el producto existe y luego actualiza
        if (producto) {
            document.getElementById('productoModalLabel').textContent = producto.nombre;
            document.getElementById('productoDescripcion').textContent = producto.descripcion;
            document.getElementById('productoPrecio').textContent = `Precio: $${producto.precio}`;
        } else {
            // Si el producto no se encuentra, se muestra un mensaje de error
            document.getElementById('productoModalLabel').textContent = "Producto no encontrado";
            document.getElementById('productoDescripcion').textContent = "No se encontró información sobre este producto.";
            document.getElementById('productoPrecio').textContent = "";
        }
    };
});
document.addEventListener('DOMContentLoaded', () => {
    // Función para validar el correo electrónico
    function isValidEmail(email) {
        const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        return emailRegex.test(email);
    }

    // Seleccionamos el formulario y los campos
    const form = document.querySelector('form');
    const emailInput = document.getElementById('email');
    const mensajeInput = document.getElementById('mensaje');

    // Función de validación
    form.addEventListener('submit', (event) => {
        let hasError = false;

        // Validación del correo electrónico
        const emailValue = emailInput.value.trim();
        if (!isValidEmail(emailValue)) {
            alert('Ingrese un correo electrónico válido');
            hasError = true;
        }

        // Validación del mensaje
        const mensajeValue = mensajeInput.value.trim();
        if (mensajeValue === '') {
            alert('El campo de mensaje está vacío');
            hasError = true;
        }

        // Si hay errores, evitar el envío del formulario
        if (hasError) {
            event.preventDefault();
        }
    });
});
