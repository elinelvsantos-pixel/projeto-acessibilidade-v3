const toggle = document.getElementById('darkModeToggle');

function aplicarModoEscuro(ativo) {
  if (ativo) {
    document.documentElement.style.filter = 'invert(1) hue-rotate(180deg)';
    document.querySelectorAll('img, video').forEach((m) => {
      m.style.filter = 'invert(1) hue-rotate(180deg)';
    });
  } else {
    document.documentElement.style.filter = '';
    document.querySelectorAll('img, video').forEach((m) => {
      m.style.filter = '';
    });
  }

  if (toggle) {
    toggle.setAttribute('aria-pressed', ativo);
    toggle.textContent = ativo ? 'Desativar modo escuro' : 'Ativar modo escuro';
  }
}

// Recupera o estado salvo
const modoEscuroAtivo = localStorage.getItem('modoEscuro') === 'true';
aplicarModoEscuro(modoEscuroAtivo);

// Configura o botão
if (toggle) {
  toggle.addEventListener('click', () => {
    const novoEstado = !(localStorage.getItem('modoEscuro') === 'true');
    localStorage.setItem('modoEscuro', novoEstado);
    aplicarModoEscuro(novoEstado);
  });
}
