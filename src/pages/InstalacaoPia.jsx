import React, { useEffect } from 'react';
import { motion } from 'framer-motion';

const InstalacaoPia = () => {
  useEffect(() => {
    // Injeção do Schema Markup (Service / LocalBusiness) no head para SEO local
    const schemaData = {
      "@context": "https://schema.org",
      "@type": "Service",
      "name": "Instalação de Pias em Mármore e Granito",
      "description": "Instalação técnica e segura de pias de cozinha, lavatórios e bancadas de mármores e granitos com vedação de PU profissional na Zona Norte de SP.",
      "provider": {
        "@type": "LocalBusiness",
        "name": "JH Soluções",
        "image": "https://jhsolucoesmarmoregranitozn.com.br/images/logo-Photoroom.png",
        "telephone": "+5511961810709",
        "priceRange": "$$",
        "address": {
          "@type": "PostalAddress",
          "addressLocality": "São Paulo",
          "addressRegion": "SP",
          "addressCountry": "BR"
        },
        "areaServed": {
          "@type": "AdministrativeArea",
          "name": "Zona Norte de São Paulo e Região Metropolitana"
        }
      }
    };

    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.id = 'instalacao-pia-schema';
    script.innerHTML = JSON.stringify(schemaData);
    document.head.appendChild(script);

    return () => {
      const existingScript = document.getElementById('instalacao-pia-schema');
      if (existingScript) {
        existingScript.remove();
      }
    };
  }, []);

  const pageTransition = {
    initial: { opacity: 0, y: 15 },
    animate: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -15 },
    transition: { duration: 0.6, ease: [0.25, 0.8, 0.25, 1] }
  };

  return (
    <motion.div
      initial="initial"
      animate="animate"
      exit="exit"
      variants={pageTransition}
    >
      <section className="section-padding page-start" style={{ backgroundColor: 'var(--color-bg-deep)' }}>
        <div className="container">
          
          {/* AVISO IMPORTANTE DE NÃO FORNECIMENTO */}
          <div className="warning-banner" style={{ maxWidth: '900px', margin: '0 auto 32px auto' }}>
            <h4 style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px', margin: 0, fontSize: '1rem', color: 'var(--color-primary-gold)' }}>
              ⚠️ ATENÇÃO: NÃO FORNECEMOS AS PEDRAS
            </h4>
            <p style={{ margin: '8px 0 0 0', fontSize: '0.9rem', color: 'var(--color-text-dim)' }}>
              Apenas executamos a mão de obra de corte, furação, instalação e reparo com qualidade profissional.
            </p>
          </div>

          <div style={{ maxWidth: '850px', margin: '0 auto', textAlign: 'center', marginBottom: '48px' }}>
            <span className="label-uppercase">Instalação Segura</span>
            <h1 style={{ fontSize: '2.5rem', marginTop: '16px', marginBottom: '24px', fontFamily: 'var(--font-title)', lineHeight: '1.2' }}>
              Instalação de Pias em Mármore e Granito na Zona Norte de SP
            </h1>
            <p style={{ fontSize: '1.1rem', color: 'var(--color-text-dim)', lineHeight: '1.8', marginBottom: 20 }}>
              A instalação de uma pia é a fase mais crítica do seu projeto de cozinha ou banheiro. Uma peça de mármore ou granito é pesada e, se for mal instalada, pode ceder, quebrar a cuba, danificar os móveis planejados e causar infiltrações graves nas paredes.
            </p>
            <p style={{ fontSize: '1.1rem', color: 'var(--color-text-white)', lineHeight: '1.8', fontWeight: 500, marginBottom: '32px' }}>
              Na <strong>JH Soluções</strong>, nós garantimos uma instalação técnica, limpa e extremamente segura. Fixamos sua pia com os insumos corretos para suportar o uso diário, o peso de eletrodomésticos e o impacto constante de panelas e louças.
            </p>

            {/* Selo de Qualidade e CTA */}
            <div style={{ display: 'inline-block', padding: '24px', backgroundColor: 'var(--color-bg-surface)', border: '1px solid var(--color-primary-gold)', marginBottom: '16px', maxWidth: '480px', textAlign: 'center' }}>
              <h4 style={{ color: 'var(--color-primary-gold)', marginBottom: '8px', fontSize: '1.1rem', fontWeight: 'bold' }}>
                🛡️ Instalação Profissional & Segura
              </h4>
              <p style={{ fontSize: '0.85rem', color: 'var(--color-text-dim)', margin: '0 0 16px 0' }}>
                Nossa equipe utiliza fixações adequadas e vedação completa contra infiltrações para garantir a durabilidade da sua bancada.
              </p>
              <a 
                href="https://api.whatsapp.com/send?phone=5511961810709&text=Olá,%20gostaria%20de%20solicitar%20um%20Orçamento%20de%20Instalação%20de%20Pia." 
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary"
                style={{ width: '100%' }}
              >
                Solicitar Orçamento de Instalação no WhatsApp <i className="fa-brands fa-whatsapp"></i>
              </a>
            </div>
            <p style={{ fontSize: '0.85rem', color: 'var(--color-outline)', marginTop: '8px' }}>
              Fale com nossa equipe técnica agora mesmo. Atendimento rápido e equipe própria de instalação.
            </p>
          </div>

          <div style={{ maxWidth: '900px', margin: '0 auto', borderTop: '1px solid var(--color-outline)', paddingTop: '48px' }}>
            <h2 style={{ fontSize: '1.8rem', marginBottom: '32px', fontFamily: 'var(--font-title)', color: 'var(--color-primary-gold)' }}>
              Serviços Especializados em Instalação que Oferecemos
            </h2>
            <p style={{ marginBottom: '32px', color: 'var(--color-text-dim)' }}>
              Seja para uma substituição rápida ou para a finalização de uma grande obra, nossa equipe está pronta para instalar:
            </p>

            <div className="grid-2" style={{ gap: '32px', marginBottom: '48px' }}>
              <div className="service-card shimmer-card" style={{ padding: '32px' }}>
                <h3 style={{ fontSize: '1.25rem', marginBottom: '16px', color: 'var(--color-text-white)', fontWeight: 600 }}>
                  Pias e Bancadas de Cozinha
                </h3>
                <p style={{ fontSize: '0.95rem', color: 'var(--color-text-dim)', lineHeight: '1.7' }}>
                  Fixação robusta de bancadas secas e molhadas, com encaixe perfeito para cooktops e torneiras de bancada ou parede.
                </p>
              </div>

              <div className="service-card shimmer-card" style={{ padding: '32px' }}>
                <h3 style={{ fontSize: '1.25rem', marginBottom: '16px', color: 'var(--color-text-white)', fontWeight: 600 }}>
                  Pias de Banheiro e Lavatórios
                </h3>
                <p style={{ fontSize: '0.95rem', color: 'var(--color-text-dim)', lineHeight: '1.7' }}>
                  Instalação de bancadas com cubas esculpidas na própria pedra ou cubas de apoio, garantindo o alinhamento perfeito do escoamento de água.
                </p>
              </div>

              <div className="service-card shimmer-card" style={{ padding: '32px' }}>
                <h3 style={{ fontSize: '1.25rem', marginBottom: '16px', color: 'var(--color-text-white)', fontWeight: 600 }}>
                  Áreas Gourmet e Churrasqueiras
                </h3>
                <p style={{ fontSize: '0.95rem', color: 'var(--color-text-dim)', lineHeight: '1.7' }}>
                  Montagem de pias externas de alta resistência, preparadas para suportar a variação de temperatura e o uso intenso.
                </p>
              </div>

              <div className="service-card shimmer-card" style={{ padding: '32px' }}>
                <h3 style={{ fontSize: '1.25rem', marginBottom: '16px', color: 'var(--color-text-white)', fontWeight: 600 }}>
                  Instalação de Cubas e Acessórios
                </h3>
                <p style={{ fontSize: '0.95rem', color: 'var(--color-text-dim)', lineHeight: '1.7' }}>
                  Colagem técnica de cubas de inox (embutidas ou sobrepostas) e tanques de lavanderia com vedação náutica anti-vazamento.
                </p>
              </div>
            </div>

            <h2 style={{ fontSize: '1.8rem', marginBottom: '32px', fontFamily: 'var(--font-title)', color: 'var(--color-primary-gold)', borderTop: '1px solid var(--color-outline)', paddingTop: '48px' }}>
              Os Sistemas de Fixação que Garantem a Segurança da sua Pia
            </h2>
            <p style={{ marginBottom: '32px', color: 'var(--color-text-dim)' }}>
              Dependendo da estrutura da sua parede e do peso da pedra escolhida, nós aplicamos o método de fixação mais seguro para o seu ambiente:
            </p>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '24px', marginBottom: '48px' }}>
              <div className="service-card" style={{ padding: '24px', borderLeft: '3px solid var(--color-primary-gold)' }}>
                <h3 style={{ fontSize: '1.15rem', marginBottom: '8px', fontWeight: 600, color: 'var(--color-text-white)' }}>Fixação Embutida (Chumbada)</h3>
                <p style={{ fontSize: '0.95rem', color: 'var(--color-text-dim)', lineHeight: '1.6' }}>
                  A pedra é inserida alguns centímetros para dentro da parede e fixada com massa forte. É o método mais resistente, ideal para pias de cozinha pesadas.
                </p>
              </div>

              <div className="service-card" style={{ padding: '24px', borderLeft: '3px solid var(--color-primary-gold)' }}>
                <h3 style={{ fontSize: '1.15rem', marginBottom: '8px', fontWeight: 600, color: 'var(--color-text-white)' }}>Mão Francesa / Suportes Reforçados</h3>
                <p style={{ fontSize: '0.95rem', color: 'var(--color-text-dim)', lineHeight: '1.6' }}>
                  Utilização de suportes de ferro chumbados na parede para dar base e sustentação à pia, sem transferir o peso para o móvel planejado debaixo da bancada.
                </p>
              </div>

              <div className="service-card" style={{ padding: '24px', borderLeft: '3px solid var(--color-primary-gold)' }}>
                <h3 style={{ fontSize: '1.15rem', marginBottom: '8px', fontWeight: 600, color: 'var(--color-text-white)' }}>Fixação sobre Alvenaria/Móveis</h3>
                <p style={{ fontSize: '0.95rem', color: 'var(--color-text-dim)', lineHeight: '1.6' }}>
                  Nivelamento perfeito e colagem técnica sobre bases de concreto ou estruturas de marcenaria preparadas, distribuindo o peso de forma uniforme.
                </p>
              </div>
            </div>

            <h2 style={{ fontSize: '1.8rem', marginBottom: '32px', fontFamily: 'var(--font-title)', color: 'var(--color-primary-gold)', borderTop: '1px solid var(--color-outline)', paddingTop: '48px' }}>
              O Diferencial da Nossa Instalação Técnica
            </h2>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '24px', marginBottom: '48px' }}>
              <div style={{ borderLeft: '4px solid #ff4d4d', paddingLeft: '20px', marginBottom: '12px' }}>
                <h3 style={{ fontSize: '1.15rem', color: '#ff4d4d', marginBottom: '8px', fontWeight: 600 }}>
                  ⚠️ O Perigo da Vedação Errada:
                </h3>
                <p style={{ fontSize: '0.95rem', color: 'var(--color-text-dim)', lineHeight: '1.6' }}>
                  O uso de silicones comuns ou colas inadequadas apodrece com a umidade e descola em poucos meses, gerando infiltração crônica atrás da pia. Nós utilizamos apenas vedantes profissionais e PU de alta performance (poliuretano), que criam uma barreira 100% impermeável e flexível que não racha.
                </p>
              </div>

              <div style={{ borderLeft: '4px solid var(--color-primary-gold)', paddingLeft: '20px', marginBottom: '12px' }}>
                <h3 style={{ fontSize: '1.15rem', color: 'var(--color-text-white)', marginBottom: '8px', fontWeight: 600 }}>
                  Nivelamento Milimétrico:
                </h3>
                <p style={{ fontSize: '0.95rem', color: 'var(--color-text-dim)', lineHeight: '1.6' }}>
                  Uma pia desalinhada faz a água empossar nos cantos em vez de correr para o ralo. Usamos níveis de alta precisão para garantir o escoamento perfeito.
                </p>
              </div>

              <div style={{ borderLeft: '4px solid var(--color-primary-gold)', paddingLeft: '20px', marginBottom: '12px' }}>
                <h3 style={{ fontSize: '1.15rem', color: 'var(--color-text-white)', marginBottom: '8px', fontWeight: 600 }}>
                  Proteção para sua Marcenaria:
                </h3>
                <p style={{ fontSize: '0.95rem', color: 'var(--color-text-dim)', lineHeight: '1.6' }}>
                  Instalamos os frontões (rodapias) com vedação dupla. Isso impede que a água da pia escorra por trás do móvel, evitando que o MDF estufe ou mofe.
                </p>
              </div>

              <div style={{ borderLeft: '4px solid var(--color-primary-gold)', paddingLeft: '20px', marginBottom: '12px' }}>
                <h3 style={{ fontSize: '1.15rem', color: 'var(--color-text-white)', marginBottom: '8px', fontWeight: 600 }}>
                  Organização e Limpeza:
                </h3>
                <p style={{ fontSize: '0.95rem', color: 'var(--color-text-dim)', lineHeight: '1.6' }}>
                  Sabemos que você preza pela sua casa. Nossa equipe trabalha de forma organizada, minimizando a sujeira e deixando a área pronta para o uso.
                </p>
              </div>
            </div>

            <h2 style={{ fontSize: '1.8rem', marginBottom: '32px', fontFamily: 'var(--font-title)', color: 'var(--color-primary-gold)', borderTop: '1px solid var(--color-outline)', paddingTop: '48px' }}>
              Como Agendar a Instalação da sua Pia?
            </h2>

            <div className="grid-2" style={{ gap: '24px', marginBottom: '48px' }}>
              <div className="service-card" style={{ padding: '24px' }}>
                <h3 style={{ fontSize: '1.1rem', marginBottom: '8px', fontWeight: 600, color: 'var(--color-primary-gold)' }}>1. Orçamento</h3>
                <p style={{ fontSize: '0.95rem', color: 'var(--color-text-dim)', lineHeight: '1.6' }}>
                  Envie as fotos do local e as medidas da pia (ou o projeto).
                </p>
              </div>

              <div className="service-card" style={{ padding: '24px' }}>
                <h3 style={{ fontSize: '1.1rem', marginBottom: '8px', fontWeight: 600, color: 'var(--color-primary-gold)' }}>2. Agendamento</h3>
                <p style={{ fontSize: '0.95rem', color: 'var(--color-text-dim)', lineHeight: '1.6' }}>
                  Escolhemos o melhor dia e horário para a equipe ir até a sua residência ou obra.
                </p>
              </div>

              <div className="service-card" style={{ padding: '24px' }}>
                <h3 style={{ fontSize: '1.1rem', marginBottom: '8px', fontWeight: 600, color: 'var(--color-primary-gold)' }}>3. Execução</h3>
                <p style={{ fontSize: '0.95rem', color: 'var(--color-text-dim)', lineHeight: '1.6' }}>
                  Fazemos a fixação da pia, colagem da cuba, vedação dos acabamentos e testes de escoamento.
                </p>
              </div>

              <div className="service-card" style={{ padding: '24px' }}>
                <h3 style={{ fontSize: '1.1rem', marginBottom: '8px', fontWeight: 600, color: 'var(--color-primary-gold)' }}>4. Cura e Uso</h3>
                <p style={{ fontSize: '0.95rem', color: 'var(--color-text-dim)', lineHeight: '1.6' }}>
                  Orientamos sobre o tempo de secagem dos produtos (geralmente 24h) para que você possa usar sua cozinha ou banheiro com total segurança.
                </p>
              </div>
            </div>

            <h2 style={{ fontSize: '1.8rem', marginBottom: '24px', fontFamily: 'var(--font-title)', color: 'var(--color-primary-gold)', borderTop: '1px solid var(--color-outline)', paddingTop: '48px' }}>
              Deixe a Instalação da sua Pia com Especialistas
            </h2>
            <p style={{ marginBottom: '32px', color: 'var(--color-text-dim)' }}>
              Evite dores de cabeça com pias soltas ou vazamentos que estragam seus armários. Garanta durabilidade e segurança para sua casa hoje mesmo.
            </p>

            {/* CTA Final */}
            <div style={{ textAlign: 'center', padding: '32px', backgroundColor: 'var(--color-bg-surface)', border: '1px solid var(--color-outline)', marginBottom: '48px' }}>
              <a 
                href="https://api.whatsapp.com/send?phone=5511961810709&text=Olá,%20gostaria%20de%20solicitar%20um%20Orçamento%20de%20Instalação%20de%20Pia." 
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary"
                style={{ border: '1px solid var(--color-primary-gold)' }}
              >
                Solicitar Orçamento de Instalação no WhatsApp <i className="fa-brands fa-whatsapp"></i>
              </a>
              <p style={{ fontSize: '0.9rem', color: 'var(--color-text-dim)', marginTop: '16px', marginBottom: 0 }}>
                Fale com nossa equipe técnica agora mesmo. Atendimento rápido e equipe própria de instalação.
              </p>
            </div>

            {/* SEO Local & FAQ no rodapé do conteúdo */}
            <div style={{ borderTop: '1px solid var(--color-outline)', paddingTop: '32px' }}>
              <span className="label-uppercase" style={{ fontSize: '0.8rem' }}>Informações Adicionais</span>
              <h3 style={{ fontSize: '1.25rem', marginTop: '8px', marginBottom: '16px', color: 'var(--color-text-white)' }}>
                Dúvidas Frequentes sobre Instalação de Pias
              </h3>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '16px', fontSize: '0.9rem', color: 'var(--color-text-dim)' }}>
                <li>
                  <strong style={{ color: 'var(--color-text-white)' }}>Qual o preço de instalação de pia de cozinha?</strong><br />
                  O valor varia conforme as dimensões da bancada, o sistema de fixação (chumbado ou com suportes) e a necessidade de colagem de cubas. Solicite um orçamento rápido pelo nosso WhatsApp.
                </li>
                <li>
                  <strong style={{ color: 'var(--color-text-white)' }}>Como fixar pia de granito na parede com total segurança?</strong><br />
                  A melhor maneira é chumbando a pedra na parede (inserindo a borda para dentro da alvenaria) ou utilizando garras e mãos francesas de metal reforçadas fixadas com buchas e parafusos específicos.
                </li>
                <li>
                  <strong style={{ color: 'var(--color-text-white)' }}>Onde encontrar um instalador de pia de mármore na Zona Norte de São Paulo?</strong><br />
                  A JH Soluções atende com equipe própria especializada em toda a Zona Norte de São Paulo e região metropolitana, assegurando máxima precisão e vedação contra vazamentos ou descolamentos.
                </li>
              </ul>
            </div>

            {/* SEO Local - Área de Atendimento */}
            <div style={{ borderTop: '1px solid var(--color-outline)', paddingTop: '48px', marginTop: '48px' }}>
              <h2 style={{ fontSize: '1.8rem', marginBottom: '24px', fontFamily: 'var(--font-title)', color: 'var(--color-primary-gold)' }}>
                Área de Atendimento para Instalação de Pias na Zona Norte de SP
              </h2>
              <p style={{ color: 'var(--color-text-dim)', lineHeight: '1.7', fontSize: '0.95rem' }}>
                Nossa equipe realiza o assentamento, colagem de cubas e vedação de pias de mármore e granito em toda a Zona Norte de São Paulo e região. Se a sua residência ou obra fica em bairros como <strong>Santana</strong>, <strong>Vila Nova Cachoeirinha</strong>, <strong>Imirim</strong>, <strong>Freguesia do Ó</strong> ou <strong>Pirituba</strong>, conte com o serviço técnico especializado da JH Soluções.
              </p>
            </div>

          </div>
        </div>
      </section>
    </motion.div>
  );
};

export default InstalacaoPia;
