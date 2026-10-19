import { ArrowUpRight, Code2 } from "lucide-react";

export default function ContactSection() {
  return (
    <section className="contact section" id="contato">
      <div className="site-container contact-grid">
        <div>
          <p className="section-kicker">04 — VAMOS CONVERSAR?</p>
          <h2>Tem uma ideia? Vamos tirar do papel.</h2>
          <p>Estou aberta a oportunidades, projetos e boas conversas sobre tecnologia e design.</p>
        </div>
        <div className="contact-actions">
          <a className="button button-light" href="https://github.com/Chokiwars" target="_blank" rel="noreferrer"><Code2 size={16} /> GitHub <ArrowUpRight size={15} /></a>
          <a className="button button-outline" href="#projetos">Ver projetos <ArrowUpRight size={15} /></a>
        </div>
      </div>
    </section>
  );
}
