document.addEventListener('DOMContentLoaded', () => {

  // ====================== MENÚ HAMBURGUESA ======================
  const menuToggle = document.querySelector('.menu-toggle');
  const navUl = document.querySelector('nav ul');

  if (menuToggle && navUl) {
    menuToggle.addEventListener('click', (e) => {
      e.stopPropagation();
      navUl.classList.toggle('show');
    });

    // Cerrar menú al hacer clic fuera
    document.addEventListener('click', (e) => {
      if (!menuToggle.contains(e.target) && !navUl.contains(e.target)) {
        navUl.classList.remove('show');
      }
    });
  }

  // ====================== CONTROLES DE TAMAÑO (+ y -) ======================
  document.querySelectorAll('.quote-card').forEach(card => {
    const btnMenos = card.querySelector('.btn-menos');
    const btnMas = card.querySelector('.btn-mas');

    if (btnMenos && btnMas) {

      // Aseguramos que todas las tarjetas empiecen en modo preview
      card.classList.add('preview');

      // Botón "+" (expandir)
      btnMas.addEventListener('click', () => {
        if (card.classList.contains('preview')) {
          // Preview → Normal
          card.classList.remove('preview');
          card.classList.add('normal');
        } 
        else if (card.classList.contains('normal')) {
          // Normal → Large
          card.classList.remove('normal');
          card.classList.add('large');
        }
        // Si ya está en large, no hace nada (puedes cambiar esto si quieres ciclo)
      });

      // Botón "-" (contraer)
      btnMenos.addEventListener('click', () => {
        if (card.classList.contains('large')) {
          // Large → Normal
          card.classList.remove('large');
          card.classList.add('normal');
        } 
        else if (card.classList.contains('normal')) {
          // Normal → Preview
          card.classList.remove('normal');
          card.classList.add('preview');
        }
        // Si ya está en preview, no hace nada
      });
    }
  });

  // Opcional: Agregar scroll suave al expandir (mejora la experiencia)
  document.querySelectorAll('.size-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      // Pequeño delay para que la transición termine
      setTimeout(() => {
        btn.closest('.quote-card').scrollIntoView({
          behavior: 'smooth',
          block: 'nearest'
        });
      }, 300);
    });
  });

});