const original = document.querySelector('.original');
  const cloneContainer = document.querySelector('.clone');

  // Clona os ícones originais
  const clone = original.cloneNode(true);
  cloneContainer.appendChild(clone);

  // Calcula a largura total dos ícones originais
  const totalWidth = original.offsetWidth;

  // Aplica a duração proporcional à largura
  const carrossel = document.getElementById('carrossel');
  carrossel.style.animationDuration = `${totalWidth / 20}s`; 