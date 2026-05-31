import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Phone, MapPin, Clock, Plus, HelpCircle } from 'lucide-react';

const Contato = () => {
  useEffect(() => {
    const schema = {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "Vocês fornecem ou vendem as pedras?",
          "acceptedAnswer": { "@type": "Answer", "text": "Não. Executamos exclusivamente a mão de obra especializada em assentamento, cortes, furos e reparos. As pedras devem ser adquiridas pelo cliente diretamente na marmoraria." }
        },
        {
          "@type": "Question",
          "name": "Como faço para solicitar um orçamento?",
          "acceptedAnswer": { "@type": "Answer", "text": "Envie fotos do local, o tipo de pedra e as dimensões aproximadas via WhatsApp. Com isso, conseguimos fazer uma estimativa rápida." }
        },
        {
          "@type": "Question",
          "name": "Vocês fazem cortes em pedras já instaladas?",
          "acceptedAnswer": { "@type": "Answer", "text": "Sim! Realizamos cortes para cooktops, cubas embutidas, furações para torneiras e torres de tomada diretamente na bancada já instalada." }
        },
        {
          "@type": "Question",
          "name": "Minha pia gourmet descolou da bancada. É possível consertar?",
          "acceptedAnswer": { "@type": "Answer", "text": "Com certeza. Fazemos a remoção, limpeza, colagem estrutural e reforço com mãos francesas de aço para que não volte a cair." }
        }
      ]
    };
    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.id = 'contato-schema';
    script.innerHTML = JSON.stringify(schema);
    document.head.appendChild(script);
    return () => { document.getElementById('contato-schema')?.remove(); };
  }, []);
  // Estados para o formulário
  const [name, setName] = useState('');
  const [address, setAddress] = useState('');
  const [phone, setPhone] = useState('');
  const [service, setService] = useState('');
  const [findUs, setFindUs] = useState('');
  const [message, setMessage] = useState('');

  // Estado para FAQ (Accordion)
  const [activeFaq, setActiveFaq] = useState(null);

  const pageTransition = {
    initial: { opacity: 0, y: 15 },
    animate: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -15 },
    transition: { duration: 0.6, ease: [0.25, 0.8, 0.25, 1] }
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();

    const phoneCompany = '5511961810709';

    // Montar texto da mensagem
    let text = `Olá, JH Soluções! Gostaria de um orçamento:\n\n`;
    text += `*Nome:* ${name}\n`;
    text += `*Endereço do Local:* ${address}\n`;
    text += `*Telefone:* ${phone}\n`;
    text += `*Serviço:* ${service}\n`;
    if (findUs) text += `*Como nos encontrou:* ${findUs}\n`;
    text += `*Mensagem:* ${message}`;

    // Encodar e abrir WhatsApp
    const encodedText = encodeURIComponent(text);
    const whatsappUrl = `https://api.whatsapp.com/send?phone=${phoneCompany}&text=${encodedText}`;
    window.open(whatsappUrl, '_blank');

    // Resetar campos
    setName('');
    setAddress('');
    setPhone('');
    setService('');
    setFindUs('');
    setMessage('');
  };

  const toggleFaq = (index) => {
    if (activeFaq === index) {
      setActiveFaq(null);
    } else {
      setActiveFaq(index);
    }
  };

  const faqs = [
    {
      question: "Vocês fornecem ou vendem as pedras?",
      answer: "Não. Nós somos focados exclusivamente na mão de obra técnica especializada de instalação, corte, furação e reparos. As pedras (mármore, granito, quartzito, etc.) devem ser adquiridas pelo cliente diretamente na marmoraria."
    },
    {
      question: "Como faço para solicitar um orçamento estimativo?",
      answer: "Para orçamentos rápidos, você pode enviar fotos do local, o tipo de pedra e as dimensões aproximadas via WhatsApp. Com isso, conseguimos fazer uma estimativa. Se o projeto demandar, podemos agendar uma visita técnica no local para medições precisas."
    },
    {
      question: "Vocês fazem cortes e furos em pedras que já estão instaladas?",
      answer: "Sim! Realizamos cortes para instalação de novos cooktops e cubas de embutir ou sobrepor, além de furações para torneiras gourmet, lixeiras e torres de tomada diretamente na bancada instalada, utilizando ferramentas profissionais refrigeradas e com mínima dispersão de poeira."
    },
    {
      question: "Minha pia gourmet descolou da bancada. É possível consertar?",
      answer: "Com certeza. Fazemos a remoção da cuba, a limpeza completa dos resíduos de cola antigos, colagem com cola plástica estrutural ultra-resistente e o reforço por baixo da bancada usando mãos francesas de aço ou suportes grapados, garantindo que ela não volte a cair."
    }
  ];

  return (
    <motion.div
      initial="initial"
      animate="animate"
      exit="exit"
      variants={pageTransition}
    >
      {/* SEÇÃO PRINCIPAL DE CONTATO */}
      <section className="section-padding page-start" style={{ backgroundColor: 'var(--color-bg-deep)' }} id="contactMainSection">
        <div className="container">
          <div className="contact-grid">
            {/* Lado Esquerdo: Informações de Contato */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <span className="label-uppercase">Orçamentos e Dúvidas</span>
              <h1 style={{ fontSize: '2.25rem', marginBottom: '24px', fontFamily: 'var(--font-title)' }}>
                Vamos planejar o seu projeto
              </h1>
              <p style={{ marginBottom: '32px', lineHeight: '1.8' }}>
                Precisa de uma estimativa de preço ou quer tirar alguma dúvida técnica sobre a instalação e cortes de suas pedras? Escolha a forma de contato preferida ou use nosso formulário ao lado para enviar os detalhes por WhatsApp instantaneamente.
              </p>
              
              <div className="contact-info-list">
                {/* Telefone */}
                <div className="contact-info-item">
                  <div className="contact-info-icon"><Phone size={24} /></div>
                  <div className="contact-info-details">
                    <h4>Telefone & WhatsApp</h4>
                    <p>
                      <a href="https://api.whatsapp.com/send?phone=5511961810709" target="_blank" rel="noopener noreferrer">
                        (11) 96181-0709
                      </a>
                    </p>
                  </div>
                </div>

                {/* Região */}
                <div className="contact-info-item">
                  <div className="contact-info-icon"><MapPin size={24} /></div>
                  <div className="contact-info-details">
                    <h4>Área de Atendimento</h4>
                    <p>Zona Norte de São Paulo e Região Metropolitana.</p>
                  </div>
                </div>

                {/* Horário */}
                <div className="contact-info-item">
                  <div className="contact-info-icon"><Clock size={24} /></div>
                  <div className="contact-info-details">
                    <h4>Horário de Funcionamento</h4>
                    <p>Segunda a Sábado — das 08h às 18h</p>
                  </div>
                </div>
              </div>

              {/* Lembrete Importante */}
              <div style={{ marginTop: '48px', borderLeft: '2px solid var(--color-primary-gold)', padding: '16px 20px', backgroundColor: 'var(--color-bg-surface)', borderTop: '1px solid var(--color-vein-gray)', borderBottom: '1px solid var(--color-vein-gray)', borderRight: '1px solid var(--color-vein-gray)' }}>
                <strong style={{ color: 'var(--color-primary-gold)', fontSize: '0.9rem', textTransform: 'uppercase', letterSpacing: '0.05em', display: 'block', marginBottom: '4px' }}>
                  Lembrete Importante:
                </strong>
                <p style={{ fontSize: '0.9rem', color: 'var(--color-text-dim)', margin: 0, lineHeight: '1.5' }}>
                  Nós não vendemos as pedras. Executamos exclusivamente a mão de obra especializada em assentamento, cortes, furos e reparos.
                </p>
              </div>
            </motion.div>

            {/* Lado Direito: Formulário com inputs controlados */}
            <motion.div 
              className="contact-form shimmer-card" 
              id="formWrapper"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h3 style={{ fontSize: '1.5rem', marginBottom: '8px', fontFamily: 'var(--font-title)' }}>Enviar Mensagem</h3>
              <p style={{ fontSize: '0.9rem', color: 'var(--color-outline)', marginBottom: '32px' }}>
                Preencha e envie para iniciar sua conversa no WhatsApp.
              </p>
              
              <form onSubmit={handleFormSubmit}>
                {/* Nome */}
                <div className="form-group">
                  <input 
                    type="text" 
                    id="name" 
                    className="form-control" 
                    placeholder=" " 
                    required 
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    autoComplete="name"
                  />
                  <label htmlFor="name" className="form-label">Seu Nome *</label>
                </div>

                {/* Endereço */}
                <div className="form-group">
                  <input 
                    type="text" 
                    id="address" 
                    className="form-control" 
                    placeholder=" " 
                    required 
                    value={address}
                    onChange={(e) => setAddress(e.target.value)}
                    autoComplete="street-address"
                  />
                  <label htmlFor="address" className="form-label">Endereço completo do local *</label>
                </div>

                {/* Telefone */}
                <div className="form-group">
                  <input 
                    type="tel" 
                    id="phone" 
                    className="form-control" 
                    placeholder=" " 
                    required 
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    autoComplete="tel"
                  />
                  <label htmlFor="phone" className="form-label">Seu Telefone / WhatsApp *</label>
                </div>

                {/* Serviço */}
                <div className="form-group" style={{ paddingTop: '12px' }}>
                  <select 
                    id="service" 
                    className="form-control" 
                    required 
                    style={{ borderRadius: 0 }}
                    value={service}
                    onChange={(e) => setService(e.target.value)}
                  >
                    <option value="" disabled selected></option>
                    <option value="Instalação de Mármore e Granito">Instalação de Pias, Bancadas ou Soleiras</option>
                    <option value="Corte sob Medida e Furação">Corte para Cooktop, Cubas ou Furos Técnicos</option>
                    <option value="Reparo e Ajustes de Bancadas">Reparo de Trincas, Colagem ou Reforço de Pia</option>
                    <option value="Outros Serviços Técnicos">Outro Serviço Especializado</option>
                  </select>
                  <label htmlFor="service" className="form-label" style={{ top: '-12px', fontSize: '0.75rem', color: 'var(--color-primary-gold)' }}>
                    Qual serviço você precisa? *
                  </label>
                </div>

                {/* Como nos Encontrou */}
                <div className="form-group" style={{ paddingTop: '12px' }}>
                  <select 
                    id="findUs" 
                    className="form-control" 
                    style={{ borderRadius: 0 }}
                    value={findUs}
                    onChange={(e) => setFindUs(e.target.value)}
                  >
                    <option value="" disabled selected></option>
                    <option value="Google">Google</option>
                    <option value="Indicação">Indicação de Amigo/Profissional</option>
                    <option value="Instagram">Instagram</option>
                    <option value="WhatsApp">WhatsApp</option>
                    <option value="Outros">Outros</option>
                  </select>
                  <label htmlFor="findUs" className="form-label" style={{ top: '-12px', fontSize: '0.75rem', color: 'var(--color-primary-gold)' }}>
                    Como nos encontrou?
                  </label>
                </div>

                {/* Mensagem */}
                <div className="form-group">
                  <textarea 
                    id="message" 
                    className="form-control" 
                    placeholder=" " 
                    required
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                  />
                  <label htmlFor="message" className="form-label">Mensagem / Detalhes do Projeto *</label>
                </div>

                <button type="submit" className="btn btn-primary" style={{ width: '100%' }}>
                  Enviar para o WhatsApp <i className="fa-brands fa-whatsapp" style={{ marginLeft: '10px' }}></i>
                </button>
              </form>
            </motion.div>
          </div>
        </div>
      </section>

      {/* SEÇÃO DE FAQ (PERGUNTAS FREQUENTES ACCORDION COM FRAMER MOTION) */}
      <section className="section-padding" style={{ backgroundColor: 'var(--color-bg-surface)' }} id="faqSection">
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '60px' }}>
            <span className="label-uppercase">Respostas Rápidas</span>
            <h2 style={{ fontSize: '2.5rem', marginTop: '12px', fontFamily: 'var(--font-title)' }}>Dúvidas Frequentes</h2>
          </div>

          <div className="faq-list">
            {faqs.map((faq, index) => {
              const isOpen = activeFaq === index;
              return (
                <motion.div 
                  key={index} 
                  className={`faq-item ${isOpen ? 'active' : ''}`}
                  layout
                  transition={{ duration: 0.3 }}
                >
                  <div className="faq-question" onClick={() => toggleFaq(index)}>
                    <h4>{faq.question}</h4>
                    <span className="faq-toggle-icon">
                      <Plus size={18} style={{ transform: isOpen ? 'rotate(45deg)' : 'rotate(0)', transition: 'transform 0.3s' }} />
                    </span>
                  </div>
                  
                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: 'easeInOut' }}
                        style={{ overflow: 'hidden' }}
                      >
                        <div className="faq-answer-inner">
                          {faq.answer}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* SEÇÃO DE MAPA / LOCALIZAÇÃO */}
      <section className="section-padding" style={{ backgroundColor: 'var(--color-bg-deep)', paddingBottom: 0 }} id="mapSection">
        <div className="container" style={{ maxWidth: '100%', paddingLeft: 0, paddingRight: 0 }}>
          <div style={{ textAlign: 'center', marginBottom: '40px', paddingLeft: 'var(--gutter)', paddingRight: 'var(--gutter)' }}>
            <span className="label-uppercase">Nossa Localização</span>
            <h2 style={{ fontSize: '2.5rem', marginTop: '12px', fontFamily: 'var(--font-title)' }}>Onde nos Encontrar</h2>
            <p style={{ color: 'var(--color-text-dim)', maxWidth: '600px', margin: '16px auto 0 auto' }}>
              Baseados na Zona Norte de São Paulo, atendemos a toda a região metropolitana com agilidade e compromisso técnico.
            </p>
          </div>
          
          <div style={{ width: '100%', height: '450px', borderTop: '1px solid var(--color-vein-gray)', borderBottom: '1px solid var(--color-vein-gray)' }}>
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d469260.1835192382!2d-46.45781648743672!3d-23.23962313538582!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x293c1a6fac9a4ed9%3A0xbdfedff974acc0bf!2zSkggU29sdcOnw7VlcyDigJMgSW5zdGFsYcOnw6NvLCBDb3J0ZSBlIFJlcGFybyBlbSBNw6FybW9yZSBlIEdyYW5pdG8!5e0!3m2!1spt-BR!2sbr!4v1780199915818!5m2!1spt-BR!2sbr" 
              width="100%" 
              height="100%" 
              style={{ border: 0, filter: 'grayscale(100%) invert(90%) contrast(90%) brightness(95%)' }} 
              allowFullScreen="" 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
              title="Localização da JH Soluções no Google Maps"
            ></iframe>
          </div>
        </div>
      </section>
    </motion.div>
  );
};

export default Contato;
