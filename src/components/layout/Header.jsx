import { useState } from "react";
import { ArrowUpRight, Menu, X } from "lucide-react";

const links = [
  ["Sobre mim", "sobre"],
  ["Habilidades", "habilidades"],
  ["Projetos", "projetos"],
];

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="topbar sticky top-0 z-20 border-b border-ink/10 bg-paper/90 backdrop-blur-lg">
      <div className="container nav mx-auto flex h-full items-center justify-between">
        <a className="brand font-display text-[21px] font-extrabold tracking-[-1.2px]" href="#inicio" onClick={() => setOpen(false)} aria-label="Bia, início">bia<span className="text-lilac">.</span></a>
        <nav className={`navlinks${open ? " open" : ""}`} aria-label="Navegação principal">
          {links.map(([label, id]) => <a key={id} href={`#${id}`} onClick={() => setOpen(false)}>{label}</a>)}
        </nav>
        <a className="nav-cta" href="#contato">Vamos conversar <ArrowUpRight size={15} /></a>
        <button className="menu-toggle" type="button" onClick={() => setOpen(!open)} aria-label={open ? "Fechar menu" : "Abrir menu"} aria-expanded={open}>
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>
    </header>
  );
}
