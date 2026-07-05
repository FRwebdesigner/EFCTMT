document.querySelectorAll('.movie-card').forEach(card => {
      card.addEventListener('click', () => {
        // Aquí podrías abrir un modal con trailer, sinopsis, horarios, etc.
        alert(`Ver más información de: ${card.querySelector('.title').textContent}`);
      });
    });