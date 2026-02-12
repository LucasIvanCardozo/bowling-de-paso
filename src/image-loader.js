/**
 * Blur-up loading script para imagen de fondo
 * Elimina destellos visuales durante la carga
 */

(function() {
  // Verificar si la imagen de fondo ya está cacheada
  function isImageCached(url) {
    const img = new Image();
    img.src = url;
    return img.complete;
  }

  // Marcar el body cuando la imagen carga
  function markBodyAsLoaded() {
    document.body.classList.add('loaded');
  }

  // Inicializar blur-up
  function initBlurUp() {
    const imageUrl = '/src/assets/images/fondoMasContraste.webp';
    
    // Si ya está cacheada, marcar inmediatamente
    if (isImageCached(imageUrl)) {
      markBodyAsLoaded();
      return;
    }

    // Precargar imagen y marcar cuando cargue
    const img = new Image();
    img.src = imageUrl;
    
    img.onload = () => {
      markBodyAsLoaded();
    };
    
    // Fallback: marcar como cargado después de 3 segundos máximo
    setTimeout(markBodyAsLoaded, 3000);
  }

  // Ejecutar cuando DOM está listo
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initBlurUp);
  } else {
    initBlurUp();
  }
})();