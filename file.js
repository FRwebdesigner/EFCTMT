// Versión suave (recomendada)
  window.addEventListener('load', () => {
    setTimeout(() => {
      document.querySelector('#footer').scrollIntoView({ 
        behavior: 'smooth' 
      });
    }, 800); // pequeño retraso para que se vea la animación inicial
  });

  // O versión instantánea (sin animación)
  // window.scrollTo(0, document.body.scrollHeight);