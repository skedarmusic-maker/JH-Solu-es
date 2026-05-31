import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container footer-grid">
        {/* Coluna 1: Sobre */}
        <div className="footer-about">
          <Link to="/" className="logo" style={{ display: 'inline-flex' }}>
            <img src="/images/logo-Photoroom.png" alt="Logo JH Soluções" className="logo-img" />
            <div className="logo-text">
              JH SOLUÇÕES
              <span>Mármore e Granito</span>
            </div>
          </Link>
          <p>Especialistas em instalação, corte de precisão e reparos em mármores e granitos com acabamento premium.</p>
          <div style={{ display: 'flex', gap: '16px' }}>
            <a 
              href="https://api.whatsapp.com/send?phone=5511961810709" 
              target="_blank" 
              rel="noopener noreferrer"
              style={{ color: 'var(--color-primary-gold)', fontSize: '1.5rem' }} 
              aria-label="WhatsApp"
            >
              <i className="fa-brands fa-whatsapp"></i>
            </a>
            <a 
              href="https://www.instagram.com/jhsolucoesmarmoregranito" 
              target="_blank" 
              rel="noopener noreferrer"
              style={{ color: 'var(--color-outline)', fontSize: '1.5rem' }} 
              aria-label="Instagram"
            >
              <i className="fa-brands fa-instagram"></i>
            </a>
          </div>
        </div>

        {/* Coluna 2: Links rápidos */}
        <div>
          <h4 className="footer-title">Navegação</h4>
          <ul className="footer-links">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/sobre">Sobre</Link></li>
            <li><Link to="/servicos">Serviços</Link></li>
            <li><Link to="/instalacao-de-pias-em-marmore-e-granito">Instalação de Pias</Link></li>
            <li><Link to="/cortes-sob-medida-marmore-e-granito">Cortes sob Medida</Link></li>
            <li><Link to="/reparo-e-restauracao-de-marmores">Reparos & Restauração</Link></li>
            <li><Link to="/contato">Contato</Link></li>
          </ul>
        </div>

        {/* Coluna 3: Contato */}
        <div>
          <h4 className="footer-title">Contato & Localização</h4>
          <ul className="footer-contact-info">
            <li>
              <i className="fa-solid fa-phone"></i>
              <div>
                <strong>Telefone:</strong><br />
                <a href="tel:011961810709">(11) 96181-0709</a>
              </div>
            </li>
            <li>
              <i class="fa-solid fa-map-location-dot"></i>
              <div>
                <strong>Atendimento:</strong><br />
                Zona Norte de São Paulo e Região Metropolitana.
              </div>
            </li>
            <li>
              <i className="fa-solid fa-clock"></i>
              <div>
                <strong>Horário:</strong><br />
                Segunda a Sábado, das 08h às 18h
              </div>
            </li>
          </ul>
        </div>
      </div>

      {/* Direitos autorais */}
      <div className="container footer-bottom">
        <div className="footer-copy">
          &copy; {new Date().getFullYear()} JH Soluções. Todos os direitos reservados.
        </div>
        <div className="footer-developer">
          Criado com precisão por Antigravity
        </div>
      </div>
    </footer>
  );
};

export default Footer;
