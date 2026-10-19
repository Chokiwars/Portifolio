import { ArrowUpRight, Code2 } from "lucide-react";

const projects = [
  { title: "Choki For You", description: "Uma plataforma artística para apresentar trabalhos, comissões e conteúdo visual com uma experiência responsiva.", tech: ["React", "Tailwind CSS"], github: "https://github.com/Chokiwars/Choki_for_you-Website", demo: "https://choki-for-you-website.vercel.app/", label: "PORTFÓLIO CRIATIVO", tone: "tone-lilac" },
  { title: "Frontend Manual", description: "Um manual interativo com conceitos, referências e conteúdos de apoio para quem está aprendendo front-end.", tech: ["React", "Tailwind CSS"], github: "https://github.com/Chokiwars/Frontend-Manual", demo: "https://frontend-manuel.vercel.app/", label: "GUIA INTERATIVO", tone: "tone-green" },
  { title: "Nova Fauna", description: "Guia informativo sobre animais não convencionais, com navegação intuitiva e conteúdo educativo.", tech: ["React", "Tailwind CSS"], github: "https://github.com/Chokiwars/Nova-Fauna", demo: "https://nova-fauna.vercel.app/", label: "EDUCAÇÃO & NATUREZA", tone: "tone-peach" },
  { title: "FrontArena", description: "Uma plataforma de desafios que incentiva a prática e o desenvolvimento de habilidades front-end.", tech: ["React", "Tailwind CSS"], github: "https://github.com/FrontArena/Frontarena-web", demo: "https://frontarena.vercel.app/", label: "APRENDER FAZENDO", tone: "tone-dark" },
  { title: "Portfólio", description: "Meu espaço pessoal na web para reunir projetos, compartilhar meu trabalho e contar um pouco da minha trajetória.", tech: ["React", "Tailwind CSS"], github: "https://github.com/Chokiwars/Chokiwars-Portifolio", demo: "https://chokiwars-portifolio.vercel.app/", label: "MEU CANTO NA WEB", tone: "tone-green" },
  { title: "O Pato", description: "Um dos meus primeiros projetos publicados: uma experiência simples que marcou meu começo com deploy.", tech: ["HTML", "CSS", "JavaScript"], github: "https://github.com/Chokiwars/Formatacao-de-textos-Ford-ENTER", demo: "https://opato.vercel.app/", label: "PRIMEIRO DEPLOY", tone: "tone-lilac" },
];

function ProjectPreview({ label }) {
  return <div className="project-window" aria-hidden="true"><div className="window-dots"><i /><i /><i /></div><div className="window-line" /><div className="window-line short" /><div className="window-blocks"><i /><i /><i /></div><span className="cover-label">{label}</span></div>;
}

export default function ProjectsSection() {
  return (
    <section className="section" id="projetos">
      <div className="container">
        <div className="section-heading">
          <div><p className="section-kicker">03 — FEITO COM CARINHO</p><h2>Projetos em destaque.</h2></div>
          <p className="section-intro">Um pouco do que venho construindo. Cada projeto me ensinou algo novo — e ainda tem muita coisa por vir.</p>
        </div>
        <div className="project-grid">
          {projects.map((project) => (
            <article className="project-card" key={project.title}>
              <div className={`project-cover ${project.tone}`}><ProjectPreview label={project.label} /></div>
              <div className="project-info">
                <div className="project-title-row"><h3>{project.title}</h3><div className="project-links"><a href={project.github} target="_blank" rel="noreferrer" aria-label={`Código de ${project.title} no GitHub`}><Code2 size={17} /></a><a href={project.demo} target="_blank" rel="noreferrer" aria-label={`Abrir demonstração de ${project.title}`}><ArrowUpRight size={18} /></a></div></div>
                <p>{project.description}</p>
                <div className="tags">{project.tech.map((tech) => <span key={tech}>{tech}</span>)}</div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
