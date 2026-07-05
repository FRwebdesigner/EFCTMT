// =============================================
// LIGHTBOX + GALERÍA - EFECTO METAL
// =============================================

const gallery = document.querySelector('.gallery');
const lightbox = document.getElementById('lightbox');
const lightboxImg = document.getElementById('lightbox-img');
const lightboxDesc = document.getElementById('lightbox-description');
const closeBtn = document.getElementById('close');

// Función para abrir el lightbox
function openLightbox(src, description = '') {
    lightboxImg.src = src;
    lightboxDesc.textContent = description;
    lightbox.classList.add('active');
    document.body.style.overflow = 'hidden'; // Bloquea el scroll del fondo
}

// Función para cerrar el lightbox
function closeLightbox() {
    lightbox.classList.remove('active');
    document.body.style.overflow = 'visible';
}

// =============================================
// 1. IMÁGENES ESTÁTICAS DEL HTML (.gallery-item)
// =============================================
document.querySelectorAll('.gallery-item').forEach(item => {
    item.addEventListener('click', () => {
        const img = item.querySelector('img');
        const p = item.querySelector('p');
        
        const description = p ? p.textContent.trim() : '';
        
        openLightbox(img.src, description);
    });
});

// =============================================
// 2. IMÁGENES GENERADAS DINÁMICAMENTE (40 imágenes de picsum)
// =============================================
for (let i = 1; i <= 40; i++) {
    const img = document.createElement('img');
    img.src = `https://picsum.photos/seed/${i * 17}/680/900?random=${i}`;
    img.alt = `Foto ${i}`;
    img.loading = "lazy";
    
    // Al hacer clic en las imágenes generadas
    img.addEventListener('click', () => {
        openLightbox(img.src, `Foto ${i} - Efecto Metal`);
    });
    
    gallery.appendChild(img);
}

// =============================================
// CERRAR EL LIGHTBOX
// =============================================

// Botón de cerrar (×)
closeBtn.addEventListener('click', closeLightbox);

// Cerrar al hacer clic fuera de la imagen (en el fondo oscuro)
lightbox.addEventListener('click', (e) => {
    if (e.target === lightbox) {
        closeLightbox();
    }
});

// Cerrar con la tecla Escape
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && lightbox.classList.contains('active')) {
        closeLightbox();
    }
});