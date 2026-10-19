import { useState } from "react";
import { ArrowUpRight, Menu, X } from "lucide-react";
import { Link, NavLink } from "react-router-dom";

const links = [
  ["Sobre mim", "/sobre-mim"],
  ["Habilidades", "/habilidades"],
  ["Projetos", "/projetos"],
];

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="topbar sticky top-0 z-20 border-b border-ink/10 bg-paper/90 backdrop-blur-lg">
      <div className="site-container nav mx-auto flex h-full items-center justify-between">
        <Link className="brand font-display text-[21px] font-extrabold tracking-[-1.2px]" to="/" onClick={() => setOpen(false)} aria-label="Bia, início">bia<span className="text-lilac">.</span></Link>
        <nav className={`navlinks${open ? " open" : ""}`} aria-label="Navegação principal">
          {links.map(([label, path]) => <NavLink key={path} to={path} onClick={() => setOpen(false)} className={({ isActive }) => isActive ? "active" : ""}>{label}</NavLink>)}
        </nav>
        <Link className="nav-cta" to="/contato">Vamos conversar <ArrowUpRight size={15} /></Link>
        <button className="menu-toggle" type="button" onClick={() => setOpen(!open)} aria-label={open ? "Fechar menu" : "Abrir menu"} aria-expanded={open}>
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>
    </header>
  );
}
