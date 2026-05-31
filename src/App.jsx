import React, { useEffect } from 'react';
import { HashRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';

// Componentes globais
import Header from './components/Header';
import Footer from './components/Footer';
import FloatWpp from './components/FloatWpp';
import InteractiveCursor from './components/InteractiveCursor';

// Páginas
import Home from './pages/Home';
import Sobre from './pages/Sobre';
import Servicos from './pages/Servicos';
import Contato from './pages/Contato';
import ReparoMarmore from './pages/ReparoMarmore';
import CortesMarmore from './pages/CortesMarmore';
import InstalacaoPia from './pages/InstalacaoPia';

// Componente utilitário para forçar scroll no topo ao mudar de página
const ScrollToTop = () => {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    // Se houver âncora (hash) na URL, não faz scroll para o topo (deixa o componente Serviços lidar com o scroll)
    if (hash) return;
    
    window.scrollTo(0, 0);
  }, [pathname, hash]);

  return null;
};

// Componente para rotas animadas
const AnimatedRoutes = () => {
  const location = useLocation();
  
  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Home />} />
        <Route path="/sobre" element={<Sobre />} />
        <Route path="/servicos" element={<Servicos />} />
        <Route path="/contato" element={<Contato />} />
        <Route path="/reparo-e-restauracao-de-marmores" element={<ReparoMarmore />} />
        <Route path="/cortes-sob-medida-marmore-e-granito" element={<CortesMarmore />} />
        <Route path="/instalacao-de-pias-em-marmore-e-granito" element={<InstalacaoPia />} />
      </Routes>
    </AnimatePresence>
  );
};

function App() {
  return (
    <Router>
      <ScrollToTop />
      
      {/* Efeito Especial do Cursor Laser */}
      <InteractiveCursor />
      
      {/* Layout Principal */}
      <Header />
      
      <main style={{ flexGrow: 1 }}>
        <AnimatedRoutes />
      </main>
      
      <FloatWpp />
      <Footer />
    </Router>
  );
}

export default App;
