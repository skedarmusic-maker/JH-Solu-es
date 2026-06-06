import { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [mobileDropdownOpen, setMobileDropdownOpen] = useState(false);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('resize', handleResize);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
    if (!mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
      setMobileDropdownOpen(false);
    }
  };

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
    setMobileDropdownOpen(false);
    setDropdownOpen(false);
    document.body.style.overflow = '';
  };

  const isMobile = windowWidth <= 992;

  return (
    <header className={`header ${scrolled ? 'scrolled' : ''}`}>
      <div className="container navbar">
        <NavLink to="/" className="logo" onClick={closeMobileMenu}>
          <img src="/images/logo-Photoroom.png" alt="Logo JH Soluções" className="logo-img" />
          <div className="logo-text">
            JH SOLUÇÕES
            <span>Mármore e Granito</span>
          </div>
        </NavLink>
        
        {/* Menu de Navegação */}
        <ul className={`nav-menu ${mobileMenuOpen ? 'is-active' : ''}`}>
          <li>
            <NavLink 
              to="/" 
              className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}
              onClick={closeMobileMenu}
              end
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink 
              to="/sobre" 
              className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}
              onClick={closeMobileMenu}
            >
              Sobre
            </NavLink>
          </li>
          
          {/* Menu Item Dropdown (Serviços) */}
          <li 
            className={`nav-item-dropdown ${dropdownOpen && !isMobile ? 'hovered' : ''} ${mobileDropdownOpen && isMobile ? 'expanded' : ''}`}
            onMouseEnter={() => !isMobile && setDropdownOpen(true)}
            onMouseLeave={() => !isMobile && setDropdownOpen(false)}
          >
            <div className="nav-link-wrapper" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', width: '100%' }}>
              <NavLink 
                to="/servicos" 
                className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}
                onClick={(e) => {
                  if (isMobile) {
                    e.preventDefault();
                    setMobileDropdownOpen(!mobileDropdownOpen);
                  } else {
                    closeMobileMenu();
                  }
                }}
                style={{ flexGrow: 1 }}
              >
                Serviços <i className="fa-solid fa-chevron-down dropdown-arrow-icon" style={{ fontSize: '0.75rem', marginLeft: '6px', transition: 'transform 0.3s' }}></i>
              </NavLink>
              
              {isMobile && (
                <button 
                  className="mobile-dropdown-toggle"
                  onClick={() => setMobileDropdownOpen(!mobileDropdownOpen)}
                  style={{
                    background: 'none',
                    border: 'none',
                    color: 'var(--color-text-white)',
                    padding: '8px 12px',
                    cursor: 'pointer'
                  }}
                  aria-label="Expandir Serviços"
                >
                  <i className={`fa-solid ${mobileDropdownOpen ? 'fa-chevron-up' : 'fa-chevron-down'}`} style={{ color: 'var(--color-primary-gold)' }}></i>
                </button>
              )}
            </div>

            {/* Dropdown Menu List */}
            <ul className="dropdown-menu-list">
              <li>
                <NavLink to="/servicos" className="dropdown-link" onClick={closeMobileMenu} end>
                  Todos os Serviços
                </NavLink>
              </li>
              <li>
                <NavLink to="/instalacao-de-pias-em-marmore-e-granito" className="dropdown-link" onClick={closeMobileMenu}>
                  Instalação de Pias
                </NavLink>
              </li>
              <li>
                <NavLink to="/cortes-sob-medida-marmore-e-granito" className="dropdown-link" onClick={closeMobileMenu}>
                  Cortes sob Medida
                </NavLink>
              </li>
              <li>
                <NavLink to="/reparo-e-restauracao-de-marmores" className="dropdown-link" onClick={closeMobileMenu}>
                  Reparos & Restauração
                </NavLink>
              </li>
            </ul>
          </li>
          
          <li>
            <NavLink 
              to="/contato" 
              className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}
              onClick={closeMobileMenu}
            >
              Contato
            </NavLink>
          </li>
        </ul>
        
        <div className="header-cta">
          <a 
            href="https://api.whatsapp.com/send?phone=5511961810709&text=Olá,%20gostaria%20de%20solicitar%20um%20orçamento%20de%20instalação/corte." 
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-outline-gold"
          >
            WhatsApp <i className="fa-brands fa-whatsapp"></i>
          </a>
        </div>
        
        {/* Botão Hambúrguer Mobile */}
        <button 
          className={`hamburger ${mobileMenuOpen ? 'is-active' : ''}`} 
          aria-label="Abrir Menu"
          onClick={toggleMobileMenu}
        >
          <span className="hamburger-box">
            <span className="hamburger-inner"></span>
          </span>
        </button>
      </div>
    </header>
  );
};

export default Header;
