import { ArrowUpRight } from "lucide-react";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-inner">
        <strong>bia.</strong>
        <span>© {new Date().getFullYear()} Bia. Feito com cuidado e café.</span>
        <a href="#inicio">Voltar ao topo <ArrowUpRight size={13} /></a>
      </div>
    </footer>
  );
}
