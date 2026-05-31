document.addEventListener('DOMContentLoaded', () => {
  // --- 1. EFEITO DE ROLAGEM NO HEADER ---
  const header = document.querySelector('.header');
  window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  });

  // --- 2. MENU HAMBÚRGUER MOBILE ---
  const hamburger = document.querySelector('.hamburger');
  const navMenu = document.querySelector('.nav-menu');
  const navLinks = document.querySelectorAll('.nav-link');

  if (hamburger && navMenu) {
    hamburger.addEventListener('click', () => {
      hamburger.classList.toggle('is-active');
      navMenu.classList.toggle('is-active');
      
      // Prevenir rolagem da página quando o menu estiver aberto no mobile
      if (navMenu.classList.contains('is-active')) {
        document.body.style.overflow = 'hidden';
      } else {
        document.body.style.overflow = '';
      }
    });

    // Fechar menu ao clicar em qualquer link
    navLinks.forEach(link => {
      link.addEventListener('click', () => {
        hamburger.classList.remove('is-active');
        navMenu.classList.remove('is-active');
        document.body.style.overflow = '';
      });
    });
  }

  // --- 3. FILTRO DA GALERIA DE PORTFÓLIO ---
  const filterButtons = document.querySelectorAll('.filter-btn');
  const portfolioItems = document.querySelectorAll('.portfolio-item');

  if (filterButtons.length > 0 && portfolioItems.length > 0) {
    filterButtons.forEach(button => {
      button.addEventListener('click', () => {
        // Remover classe ativa de todos
        filterButtons.forEach(btn => btn.classList.remove('active'));
        // Adicionar ativa ao atual
        button.classList.add('active');

        const filterValue = button.getAttribute('data-filter');

        portfolioItems.forEach(item => {
          if (filterValue === 'all' || item.getAttribute('data-category') === filterValue) {
            item.style.display = 'block';
            setTimeout(() => {
              item.style.opacity = '1';
              item.style.transform = 'scale(1)';
            }, 50);
          } else {
            item.style.opacity = '0';
            item.style.transform = 'scale(0.8)';
            setTimeout(() => {
              item.style.display = 'none';
            }, 300);
          }
        });
      });
    });
  }

  // --- 4. ACORDEÃO DO FAQ ---
  const faqItems = document.querySelectorAll('.faq-item');

  if (faqItems.length > 0) {
    faqItems.forEach(item => {
      const question = item.querySelector('.faq-question');
      question.addEventListener('click', () => {
        const isActive = item.classList.contains('active');
        
        // Fechar todos
        faqItems.forEach(faq => {
          faq.classList.remove('active');
          const ans = faq.querySelector('.faq-answer');
          if (ans) ans.style.maxHeight = null;
        });

        // Se não estava ativo, abre
        if (!isActive) {
          item.classList.add('active');
          const answer = item.querySelector('.faq-answer');
          if (answer) {
            answer.style.maxHeight = answer.scrollHeight + 'px';
          }
        }
      });
    });
  }

  // --- 5. REDIRECIONAMENTO DE FORMULÁRIO PARA O WHATSAPP ---
  const contactForm = document.getElementById('contactForm');
  if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();

      const name = document.getElementById('name').value.trim();
      const address = document.getElementById('address').value.trim();
      const phone = document.getElementById('phone').value.trim();
      const service = document.getElementById('service').value;
      const findUs = document.getElementById('findUs').value.trim();
      const message = document.getElementById('message').value.trim();

      // Número da empresa (JH Soluções): 5511961810709
      const phoneCompany = '5511961810709';

      // Montar texto da mensagem para o WhatsApp
      let text = `Olá, JH Soluções! Gostaria de um orçamento:\n\n`;
      text += `*Nome:* ${name}\n`;
      text += `*Endereço do Local:* ${address}\n`;
      text += `*Telefone:* ${phone}\n`;
      text += `*Serviço:* ${service}\n`;
      if (findUs) text += `*Como nos encontrou:* ${findUs}\n`;
      text += `*Mensagem:* ${message}`;

      // Encodar URI
      const encodedText = encodeURIComponent(text);
      const whatsappUrl = `https://api.whatsapp.com/send?phone=${phoneCompany}&text=${encodedText}`;

      // Abrir em nova aba
      window.open(whatsappUrl, '_blank');
      
      // Limpar formulário
      contactForm.reset();
    });
  }

  // --- 6. ANIMAÇÃO DE ENTRADA AO ROLAR O MOUSE (INTERSECTION OBSERVER) ---
  const observerOptions = {
    root: null,
    rootMargin: '0px',
    threshold: 0.1
  };

  const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('animate-fade-in');
        observer.unobserve(entry.target); // Animou uma vez, não precisa animar de novo
      }
    });
  }, observerOptions);

  // Selecionar seções para observar
  const revealElements = document.querySelectorAll('.reveal-on-scroll');
  revealElements.forEach(el => {
    // Definir estilos iniciais na JS se necessário, mas melhor via CSS
    el.style.opacity = '0';
    el.style.transform = 'translateY(30px)';
    el.style.transition = 'opacity 0.8s cubic-bezier(0.25, 0.8, 0.25, 1), transform 0.8s cubic-bezier(0.25, 0.8, 0.25, 1)';
    observer.observe(el);
  });
});

// Adicionar estilos extras para suporte às classes dinâmicas do Intersection Observer
const styleSheet = document.createElement("style");
styleSheet.innerText = `
  .reveal-on-scroll.animate-fade-in {
    opacity: 1 !important;
    transform: translateY(0) !important;
  }
`;
document.head.appendChild(styleSheet);
