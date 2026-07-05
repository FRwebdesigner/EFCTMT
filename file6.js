const reels = document.querySelectorAll('.reel-item');
const modal = document.getElementById('modal');
const modalVideo = document.getElementById('modalVideo');
const closeModal = document.getElementById('closeModal');

// ==================== FUNCIONALIDAD ORIGINAL (sin cambios) ====================

// Autoplay al pasar el mouse (como reels)
reels.forEach(reel => {
  const video = reel.querySelector('video');

  reel.addEventListener('mouseenter', () => {
    video.play();
    reel.classList.add('playing');
  });

  reel.addEventListener('mouseleave', () => {
    video.pause();
    video.currentTime = 0;
    reel.classList.remove('playing');
  });

  // Click → abrir en modal/fullscreen (excepto si se hace clic en el botón compartir)
  reel.addEventListener('click', (e) => {
    // Si se hizo clic en el botón de compartir o en el menú, no abrir el modal
    if (e.target.closest('.share-btn') || e.target.closest('.share-menu')) {
      return;
    }

    const src = reel.dataset.video;
    modalVideo.src = src;
    modal.classList.add('active');
    modalVideo.play();
  });
});

// Cerrar modal
closeModal.addEventListener('click', closeVideoModal);

modal.addEventListener('click', e => {
  if (e.target === modal) closeVideoModal();
});

document.addEventListener('keydown', e => {
  if (e.key === 'Escape') closeVideoModal();
});

function closeVideoModal() {
  modal.classList.remove('active');
  modalVideo.pause();
  modalVideo.src = ''; // Limpieza importante
}

// Mejora de seguridad en videos
document.addEventListener('DOMContentLoaded', function() {
  const videos = document.querySelectorAll('video');
  videos.forEach(video => {
    video.setAttribute('controlsList', 'nodownload');
    video.setAttribute('oncontextmenu', 'return false;');
  });
});

// ==================== NUEVA FUNCIONALIDAD: BOTÓN DE COMPARTIR ====================

// Función para compartir en redes sociales
function shareVideo(platform, title) {
    const pageUrl = encodeURIComponent(window.location.href);
    const videoTitle = encodeURIComponent(title || "Video - Efecto Metal");

    let shareUrl = '';

    switch(platform) {
        case 'whatsapp':
            shareUrl = `https://wa.me/?text=${videoTitle}%20${pageUrl}`;
            break;
        case 'facebook':
            shareUrl = `https://www.facebook.com/sharer/sharer.php?u=${pageUrl}`;
            break;
        case 'x':
            shareUrl = `https://twitter.com/intent/tweet?text=${videoTitle}&url=${pageUrl}`;
            break;
        case 'instagram':
            alert("Para compartir en Instagram copia el enlace de la página manualmente.");
            return;
        default:
            return;
    }

    window.open(shareUrl, '_blank', 'width=600,height=500');
}

// Manejo del botón de compartir
reels.forEach(reel => {
    const shareBtn = reel.querySelector('.share-btn');
    const shareMenu = reel.querySelector('.share-menu');
    const titleElement = reel.querySelector('p');
    const title = titleElement ? titleElement.textContent.trim() : "Video Efecto Metal";

    if (shareBtn && shareMenu) {
        // Abrir / Cerrar menú al hacer clic en el botón
        shareBtn.addEventListener('click', (e) => {
            e.stopPropagation();   // Evita que se abra el modal del video

            // Cerrar todos los demás menús abiertos
            document.querySelectorAll('.share-menu').forEach(menu => {
                if (menu !== shareMenu) menu.classList.remove('show');
            });

            shareMenu.classList.toggle('show');
        });

        // Click en cada opción de red social
        shareMenu.querySelectorAll('.share-option').forEach(option => {
            option.addEventListener('click', (e) => {
                e.preventDefault();
                e.stopPropagation();
                
                const platform = option.dataset.platform;
                shareVideo(platform, title);
                
                // Cerrar el menú después de compartir
                shareMenu.classList.remove('show');
            });
        });
    }
});

// Cerrar todos los menús de compartir al hacer clic fuera
document.addEventListener('click', () => {
    document.querySelectorAll('.share-menu').forEach(menu => {
        menu.classList.remove('show');
    });
});