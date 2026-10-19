import { ArrowDownRight, ArrowUpRight, Code2, FolderOpen, Mail, UserRound } from "lucide-react";
import { Link } from "react-router-dom";

const destinations = [
  { title: "Sobre mim", description: "Minha história, meu jeito de trabalhar e o que me inspira.", href: "/sobre-mim", icon: UserRound },
  { title: "Habilidades", description: "As ferramentas e tecnologias que fazem parte do meu dia a dia.", href: "/habilidades", icon: Code2 },
  { title: "Projetos", description: "Uma seleção de trabalhos e experiências que construí.", href: "/projetos", icon: FolderOpen },
  { title: "Contato", description: "Tem uma ideia ou oportunidade? Vamos conversar.", href: "/contato", icon: Mail },
];

export default function HomePage() {
  return (
    <main>
      <section className="hero relative py-[105px] pb-[76px]" id="inicio">
        <div className="site-container mx-auto">
          <div className="hero-grid relative grid items-center gap-[60px]">
            <div className="reveal">
              <div className="availability"><i /> Aberta a novas oportunidades</div>
              <p className="eyebrow">DESENVOLVEDORA FRONT-END · BRASIL</p>
              <h1 className="font-display text-[clamp(52px,7vw,88px)] font-bold leading-[.98] tracking-[-6px]">Olá, eu sou a Bia.<br />Crio para a <em className="text-lilac not-italic">web.</em></h1>
              <p className="hero-copy">Crio experiências digitais intuitivas, acessíveis e cheias de personalidade. Este é meu cantinho na web — escolha uma página para me conhecer melhor.</p>
              <Link className="button" to="/projetos">Explore meu portfólio <ArrowDownRight size={16} /></Link>
            </div>
            <div className="hero-art" aria-label="Ilustração abstrata com a inicial B">
              <div className="orbit" />
              <div className="art-card"><span className="art-spark">✳</span></div>
              <span className="art-note">design + código = ✳</span>
            </div>
          </div>
        </div>
      </section>
      <section className="section home-links" aria-label="Páginas do portfólio">
        <div className="site-container mx-auto">
          <div className="section-heading">
            <div><p className="section-kicker">POR ONDE COMEÇAR?</p><h2>Conheça meu trabalho.</h2></div>
            <p className="section-intro">Cada página conta uma parte diferente da minha jornada como desenvolvedora.</p>
          </div>
          <div className="home-link-grid">
            {destinations.map(({ title, description, href, icon: Icon }, index) => (
              <Link className="home-link-card" to={href} key={href}>
                <span className="home-link-number">0{index + 1}</span>
                <Icon size={20} className="home-link-icon" />
                <h3>{title}</h3>
                <p>{description}</p>
                <ArrowUpRight className="home-link-arrow" size={18} />
              </Link>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
