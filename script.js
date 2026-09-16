document.addEventListener('DOMContentLoaded', () => {
  // 1. Atualização automática do ano no footer
  const yearElement = document.getElementById('currentYear');
  if (yearElement) {
    yearElement.textContent = new Date().getFullYear();
  }

  // 2. Simulador e Montador de Agendamento para WhatsApp
  const bookingForm = document.getElementById('bookingForm');
  if (bookingForm) {
    bookingForm.addEventListener('submit', (e) => {
      e.preventDefault();

      const name = document.getElementById('clientName').value.trim();
      const service = document.getElementById('serviceSelect').value;
      const period = document.getElementById('periodSelect').value;
      const day = document.getElementById('daySelect').value;

      const phoneNumber = '5521976601869';

      const messageText = 
`Olá, Studio SM Beauty! Me chamo ${name}.
Gostaria de consultar os horários para:
*Procedimento:* ${service}
*Período preferido:* ${period}
*Dia:* ${day}

Vi a página de vocês e aguardo o retorno para confirmar!`;

      const encodedMessage = encodeURIComponent(messageText);
      const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;

      // Abre o WhatsApp em nova aba
      window.open(whatsappUrl, '_blank');
    });
  }

  // 3. Fechar menu navbar responsivo ao clicar em um link (Mobile)
  const navLinks = document.querySelectorAll('.navbar-nav .nav-link');
  const navbarCollapse = document.getElementById('navbarContent');

  if (navbarCollapse) {
    navLinks.forEach((link) => {
      link.addEventListener('click', () => {
        if (navbarCollapse.classList.contains('show')) {
          const bsCollapse = bootstrap.Collapse.getInstance(navbarCollapse);
          if (bsCollapse) {
            bsCollapse.hide();
          }
        }
      });
    });
  }
});