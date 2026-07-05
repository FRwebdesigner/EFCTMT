// =============================================
// file7.js - Botones + y - solo expanden/contraen
// =============================================

$(document).ready(function() {

    // ==================== BOTÓN "+" → EXPANDE la tarjeta ====================
    $('.btn-mas').on('click', function(e) {
        e.stopImmediatePropagation();
        e.preventDefault();
        
        const card = $(this).closest('.quote-card');
        card.removeClass('collapsed');   // Expande
        console.log('🔼 Botón + → Tarjeta expandida');
    });

    // ==================== BOTÓN "-" → CONTRAE la tarjeta ====================
    $('.btn-menos').on('click', function(e) {
        e.stopImmediatePropagation();
        e.preventDefault();
        
        const card = $(this).closest('.quote-card');
        card.addClass('collapsed');      // Contrae
        console.log('🔽 Botón - → Tarjeta contraída');
    });

    // ==================== CLIC EN EL RESTO DE LA TARJETA → Toggle ====================
    $('.quote-card').on('click', function(e) {
        // Si se clickeó en los botones + o -, no hacer nada aquí
        if ($(e.target).closest('.size-controls').length > 0) {
            return;
        }

        // Toggle normal (expandir o contraer)
        $(this).toggleClass('collapsed');
    });

    // Doble clic también togglea (opcional)
    $('.quote-card').on('dblclick', function(e) {
        if ($(e.target).closest('.size-controls').length > 0) return;
        $(this).toggleClass('collapsed');
    });

    console.log('✅ file7.js listo: + expande, - contrae, clic en tarjeta togglea');
});


// ==================== MENÚ HAMBURGUESA ====================

$(document).ready(function() {
    
    // ... (todo tu código anterior de botones + y - queda igual)

    // Menú hamburguesa
    const menuToggle = $('#menuToggle');
    const navMenu = $('#navMenu');

    menuToggle.on('click', function(e) {
        e.stopPropagation();
        navMenu.toggleClass('show');
        
        // Cambia el icono entre ☰ y ✕
        if (navMenu.hasClass('show')) {
            menuToggle.html('✕');
        } else {
            menuToggle.html('☰');
        }
    });

    // Cerrar el menú al hacer clic en un enlace
    $('#navMenu a').on('click', function() {
        navMenu.removeClass('show');
        menuToggle.html('☰');
    });

    // Cerrar el menú al hacer clic fuera de él
    $(document).on('click', function(e) {
        if (!$(e.target).closest('.nav-container').length) {
            navMenu.removeClass('show');
            menuToggle.html('☰');
        }
    });

    console.log('✅ Menú hamburguesa activado correctamente');
});