import React, { useEffect, useState, useRef } from 'react';

const InteractiveCursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [clicked, setClicked] = useState(false);
  const [hidden, setHidden] = useState(true);
  const cursorRef = useRef(null);

  useEffect(() => {
    // Apenas habilitar em telas desktop (dispositivos com cursor)
    const isMobile = window.matchMedia("(max-width: 1023px)").matches;
    if (isMobile) return;

    setHidden(false);

    const handleMouseMove = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });

      // Ocasionalmente gera uma faísca sutil enquanto move o mouse para dar dinamismo
      if (Math.random() < 0.15) {
        createSparkle(e.clientX, e.clientY);
      }
    };

    const handleMouseDown = () => {
      setClicked(true);
      // Cria várias faíscas no clique
      for (let i = 0; i < 8; i++) {
        createSparkle(position.x, position.y, true);
      }
    };

    const handleMouseUp = () => {
      setClicked(false);
    };

    const handleMouseEnter = () => setHidden(false);
    const handleMouseLeave = () => setHidden(true);

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mousedown', handleMouseDown);
    window.addEventListener('mouseup', handleMouseUp);
    document.addEventListener('mouseenter', handleMouseEnter);
    document.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mousedown', handleMouseDown);
      window.removeEventListener('mouseup', handleMouseUp);
      document.removeEventListener('mouseenter', handleMouseEnter);
      document.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, [position.x, position.y]);

  const createSparkle = (x, y, isClick = false) => {
    const sparkle = document.createElement('div');
    sparkle.className = 'gold-sparkle';
    sparkle.style.left = `${x}px`;
    sparkle.style.top = `${y}px`;

    // Direções aleatórias de explosão
    const angle = Math.random() * Math.PI * 2;
    const velocity = isClick ? Math.random() * 80 + 30 : Math.random() * 40 + 10;
    const destX = Math.cos(angle) * velocity;
    const destY = Math.sin(angle) * velocity;

    sparkle.style.setProperty('--x', `${destX}px`);
    sparkle.style.setProperty('--y', `${destY}px`);

    document.body.appendChild(sparkle);

    // Destruir elemento após a animação terminar
    setTimeout(() => {
      sparkle.remove();
    }, 800);
  };

  if (hidden) return null;

  return (
    <div className="laser-cursor" ref={cursorRef}>
      {/* Linhas de Mira a laser de 45° e 90° */}
      <div 
        className="laser-line-h" 
        style={{ top: `${position.y}px` }} 
      />
      <div 
        className="laser-line-v" 
        style={{ left: `${position.x}px` }} 
      />
      {/* Ponto laser brilhante central */}
      <div 
        className="laser-dot" 
        style={{ 
          left: `${position.x}px`, 
          top: `${position.y}px`,
          transform: `translate(-50%, -50%) scale(${clicked ? 1.5 : 1})`
        }} 
      />
    </div>
  );
};

export default InteractiveCursor;
