import { ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="site-container footer-inner">
        <strong>bia.</strong>
        <span>© {new Date().getFullYear()} Bia. Feito com cuidado e café.</span>
        <Link to="/">Voltar ao início <ArrowUpRight size={13} /></Link>
      </div>
    </footer>
  );
}
