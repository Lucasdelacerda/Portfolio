import React, { useState } from 'react';

const projects = [
  {
    number: '01',
    title: 'Nome do projeto',
    category: 'DESENVOLVIMENTO WEB',
    description: 'Um breve resumo sobre o projeto, o desafio e a solução criada.',
    technologies: ['React', 'Spring Boot'],
  },
  {
    number: '02',
    title: 'Nome do projeto',
    category: 'APLICAÇÃO WEB',
    description: 'Conte aqui o que este projeto faz e para quem ele foi pensado.',
    technologies: ['React', 'Java'],
  },
  {
    number: '03',
    title: 'Nome do projeto',
    category: 'PLATAFORMA DIGITAL',
    description: 'Troque este texto por uma descrição curta do seu trabalho.',
    technologies: ['JavaScript', 'Spring Boot'],
  },
  {
    number: '04',
    title: 'Nome do projeto',
    category: 'PROJETO PESSOAL',
    description: 'Adicione o contexto, os recursos principais e o resultado.',
    technologies: ['React', 'CSS'],
  },
];

const technologies = [
  
  {
    name: 'Spring Boot',
    detail: 'Back-end',
    icon: '/icons/spring%20boot.png',
  },
   {
    name: 'Docker',
    detail: 'Containers',
    icon: '/icons/docker.png',
  },
    {
    name: 'JUnit',
    detail: 'Testes',
    icon: '/icons/junit.png',
  },
  {
    name: 'React',
    detail: 'Interfaces',
    icon: '/icons/react.jpg',
  },
  
  {
    name: 'JavaScript',
    detail: 'Desenvolvimento',
    icon: '/icons/javascript.png',
  },
  {
    name: 'Tailwind CSS',
    detail: 'Estilo & layout',
    icon: '/icons/tailwind.png',
  },
 

];

function ArrowIcon({ diagonal = false }) {
  return (
    <svg
      aria-hidden="true"
      className={diagonal ? 'arrow-icon arrow-icon--diagonal' : 'arrow-icon'}
      viewBox="0 0 20 20"
      fill="none"
    >
      <path d="M3.5 10h12m-5-5 5 5-5 5" />
    </svg>
  );
}

function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => setMenuOpen(false);

  return (
    <>
      <header className="site-header">
        <a className="wordmark" href="#inicio" onClick={closeMenu} aria-label="Ir para o início">
          <span className="wordmark__mark" aria-hidden="true">
            <svg viewBox="0 0 32 32" fill="none">
              <path d="M11 9c-2-2 1-3 0-5M17 9c-2-2 1-3 0-5M23 9c-2-2 1-3 0-5" />
              <path d="M8 12h17l-2 12H10L8 12Z" />
              <path d="M25 14h2a3 3 0 0 1 0 6h-3" />
              <path d="M12 27h12" />
            </svg>
          </span>
          <span>LUCAS DE LACERDA</span>
        </a>

        <button
          className="menu-toggle"
          type="button"
          aria-label={menuOpen ? 'Fechar menu' : 'Abrir menu'}
          aria-expanded={menuOpen}
          aria-controls="site-navigation"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <span />
          <span />
        </button>

        <nav
          className={menuOpen ? 'site-nav site-nav--open' : 'site-nav'}
          id="site-navigation"
          aria-label="Navegação principal"
        >
          <a href="#trabalhos" onClick={closeMenu}>Trabalhos</a>
          <a href="#sobre" onClick={closeMenu}>Sobre mim</a>
          <a className="site-nav__contact" href="#contato" onClick={closeMenu}>
            Vamos conversar <ArrowIcon diagonal />
          </a>
        </nav>
      </header>

      <main>
        <section className="hero section-wrap" id="inicio">
          <div className="hero__copy">
            <p className="eyebrow"><span className="status-dot" /> DISPONÍVEL PARA NOVOS PROJETOS</p>
            <h1>
              Ideias bem pensadas.
              <br />
              <span>Experiências digitais.</span>
            </h1>
            <p className="hero__intro">
  Olá, sou <strong>Lucas</strong>. Desenvolvedor Back-End Java focado em criar sistemas robustos, seguros e de alta performance para o seu negócio.
</p>
            <div className="hero__actions">
              <a className="button button--dark" href="#trabalhos">
                Conheça meu trabalho <ArrowIcon />
              </a>
              <a className="text-link" href="#sobre">Um pouco sobre mim <span>↓</span></a>
            </div>
          </div>
          <div className="hero__aside" aria-label="Ilustração de uma xícara de café com o tema Java">
            <div className="java-illustration">
              <span className="java-illustration__orbit java-illustration__orbit--outer" />
              <span className="java-illustration__orbit java-illustration__orbit--inner" />
              <div className="java-illustration__badge">
                <svg className="java-cup" viewBox="0 0 120 120" fill="none" aria-hidden="true">
                  <path className="java-cup__steam" d="M43 34c-8-8 8-11 1-20M59 31c-8-8 8-11 1-20M75 34c-8-8 8-11 1-20" />
                  <path className="java-cup__bowl" d="M31 47h56l-7 39a9 9 0 0 1-9 8H47a9 9 0 0 1-9-8l-7-39Z" />
                  <path className="java-cup__handle" d="M87 53h7a11 11 0 0 1 0 22h-11" />
                  <path className="java-cup__saucer" d="M40 103h47" />
                </svg>
                <span>JAVA</span>
              </div>
              <span className="java-illustration__code java-illustration__code--one">{'{ }'}</span>
              <span className="java-illustration__code java-illustration__code--two">JVM</span>
            </div>
            <p className="hero__aside-caption">DESENVOLVIMENTO JAVA <span>↗</span></p>
          </div>
          <a href="#trabalhos" className="scroll-cue" aria-label="Rolar para os trabalhos">
            <span>ROLE PARA EXPLORAR</span><span className="scroll-cue__line" />
          </a>
        </section>

        <section className="work-section section-wrap" id="trabalhos">
          <div className="section-heading">
            <div>
              <p className="eyebrow">01 / TRABALHOS SELECIONADOS</p>
              <h2>Feito com intenção.</h2>
            </div>
            <p className="section-heading__note">
              Quatro espaços reservados para projetos que mostram como boas ideias ganham vida.
            </p>
          </div>

          <div className="project-grid">
            {projects.map((project) => (
              <article className="project-card" key={project.number}>
                <div className={`project-art project-art--${project.number}`}>
                  <span className="project-art__number">{project.number}</span>
                  <div className="project-art__window" aria-hidden="true">
                    <div className="window-bar">
                      <i /><i /><i />
                      <span>seu-projeto.com</span>
                    </div>
                    <div className="window-content">
                      <span className="window-content__line window-content__line--short" />
                      <span className="window-content__line" />
                      <span className="window-content__line window-content__line--mid" />
                      <span className="window-content__button" />
                    </div>
                  </div>
                  <span className="project-art__label">SEU PRÓXIMO PROJETO</span>
                  <span className="project-art__index">{project.number} — 04</span>
                </div>
                <div className="project-info">
                  <div>
                    <p className="project-category">{project.category}</p>
                    <h3>{project.title}</h3>
                  </div>
                  <span className="project-info__number">{project.number}</span>
                  <p className="project-info__description">{project.description}</p>
                  <div className="tag-list" aria-label="Tecnologias do projeto">
                    {project.technologies.map((technology) => (
                      <span className="tag" key={technology}>{technology}</span>
                    ))}
                  </div>
                  <a className="project-link" href="#contato">
                    Adicionar detalhes do projeto <ArrowIcon diagonal />
                  </a>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="about-section" id="sobre">
          <div className="section-wrap about-layout">
            <div className="about-heading">
              <p className="eyebrow">02 / SOBRE MIM</p>
              <h2>Curiosidade que vira <span>solução.</span></h2>
            </div>
           <div className="about-copy">
  <p className="about-copy__lead">
    Desenvolvo aplicações web completas, do design da interface à robustez do servidor.
  </p>
  <p>
    Ajudo empresas e empreendedores a tirarem ideias do papel utilizando <strong>React </strong> 
    para interfaces intuitivas e <strong>Spring Boot</strong> para back-ends seguros e escaláveis. 
    Trabalho com foco em boas práticas — incluindo arquitetura conteinerizada com <strong>Docker </strong> 
    e confiabilidade via <strong>JUnit</strong>. Acredito que o melhor software nasce da 
    união entre código organizado e comunicação clara.
  </p>
</div>
            <div className="technology-area">
              <div className="technology-heading">
                <p className="eyebrow">FERRAMENTAS DO DIA A DIA</p>
                <span>06 TECNOLOGIAS</span>
              </div>
              <div className="technology-grid">
                {technologies.map((technology) => (
                  <div className="technology-card" key={technology.name}>
                    <img className="technology-card__icon" src={technology.icon} alt="" />
                    <span className="technology-card__text">
                      <strong>{technology.name}</strong>
                      <small>{technology.detail}</small>
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="contact-section section-wrap" id="contato">
          <div className="contact-section__top">
            <p className="eyebrow">03 / CONTATO</p>
            <span className="contact-section__availability"><span className="status-dot" /> ABERTO A OPORTUNIDADES</span>
          </div>
          <h2>Vamos tirar uma ideia<br /><span>do papel?</span></h2>
          <p className="contact-section__copy">
            Tem um projeto, uma oportunidade ou só quer trocar uma ideia? Minha caixa de entrada está aberta.
          </p>
          <div className="contact-links">
            <a className="button button--light" href="mailto:lacerdalucas270@gmail.com">
              E-mail <ArrowIcon diagonal />
            </a>
            <a
              className="button button--light"
              href="https://wa.me/5583994023563"
              target="_blank"
              rel="noreferrer"
            >
              WhatsApp <ArrowIcon diagonal />
            </a>
            <a
              className="button button--light"
              href="https://www.linkedin.com/in/lucas-de-lacerda-066316186/"
              target="_blank"
              rel="noreferrer"
            >
              LinkedIn <ArrowIcon diagonal />
            </a>
          </div>
          <div className="contact-footer">
            <span>© {new Date().getFullYear()} Lucas de Lacerda</span>
            <span>FEITO COM CUIDADO E CAFÉ</span>
            <a href="#inicio">VOLTAR AO TOPO ↑</a>
          </div>
        </section>
      </main>
    </>
  );
}

export default App;
