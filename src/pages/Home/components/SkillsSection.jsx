import { Code2, Layers3, Wrench } from "lucide-react";

const groups = [
  { title: "Front-end", icon: Code2, items: ["HTML", "CSS", "JavaScript", "React", "Tailwind CSS"] },
  { title: "Back-end", icon: Layers3, items: ["Node.js", "Java", "Spring Boot"] },
  { title: "Ferramentas", icon: Wrench, items: ["Git", "GitHub", "Figma", "VS Code"] },
];

export default function SkillsSection() {
  return (
    <section className="section" id="habilidades">
      <div className="site-container">
        <div className="section-heading">
          <div><p className="section-kicker">02 — CAIXA DE FERRAMENTAS</p><h2>Tecnologias que uso.</h2></div>
          <p className="section-intro">As ferramentas que me ajudam a transformar uma ideia em uma experiência digital completa.</p>
        </div>
        <div className="skills-grid">
          {groups.map(({ title, icon: Icon, items }) => (
            <article className="skill-card" key={title}>
              <h3><Icon size={17} style={{ verticalAlign: "-3px", marginRight: 8, color: "var(--purple)" }} />{title}</h3>
              <div className="skill-items">{items.map((item) => <span className="skill-chip" key={item}>{item}</span>)}</div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
