document.getElementById('contactForm').addEventListener('submit', function(e) {
      e.preventDefault();

      const name = document.getElementById('name').value.trim();
      const email = document.getElementById('email').value.trim();
      const message = document.getElementById('message').value.trim();
      const msgDiv = document.getElementById('formMessage');

      // Validación básica
      if (!name || !email || !message) {
        showMessage('Por favor completa todos los campos', 'error');
        return;
      }

      if (!isValidEmail(email)) {
        showMessage('El email no parece válido 😕', 'error');
        return;
      }

      // Aquí iría el código real de envío (fetch a backend, Formspree, etc)
      // Por ahora solo simulamos el envío
      setTimeout(() => {
        showMessage(`¡Gracias ${name}! Tu mensaje ha sido enviado correctamente ✨`, 'success');
        
        // Limpiar formulario
        document.getElementById('contactForm').reset();
      }, 800);
    });

    function showMessage(text, type) {
      const msgDiv = document.getElementById('formMessage');
      msgDiv.textContent = text;
      msgDiv.className = 'message ' + type;
      
      // Ocultar mensaje después de 5 segundos
      setTimeout(() => {
        msgDiv.style.display = 'none';
      }, 5000);
    }

    function isValidEmail(email) {
      return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    }