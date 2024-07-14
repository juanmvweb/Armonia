// script.js

// Menú Desplegable para Móviles
document.addEventListener('DOMContentLoaded', function() {
    const nav = document.querySelector('nav ul');
    const toggle = document.createElement('button');
    toggle.textContent = '☰';
    toggle.style.fontSize = '1.5rem';
    toggle.style.background = 'none';
    toggle.style.border = 'none';
    toggle.style.color = 'white';
    toggle.style.cursor = 'pointer';

    toggle.addEventListener('click', function() {
        nav.classList.toggle('open');
    });

    document.querySelector('header').appendChild(toggle);
});

// Validación del Formulario de Contacto
function validateForm() {
    const nombre = document.getElementById('nombre').value;
    const email = document.getElementById('email').value;
    const mensaje = document.getElementById('mensaje').value;

    if (nombre === '' || email === '' || mensaje === '') {
        alert('Todos los campos son obligatorios');
        return false;
    }
    return true;
}
