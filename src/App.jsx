import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Header from "@/components/layout/Header";
import Footer from "@/components/ui/Footer";
import HomePage from "@/pages/Home/index";
import AboutPage from "@/pages/About";
import SkillsPage from "@/pages/Skills";
import ProjectsPage from "@/pages/Projects";
import ContactPage from "@/pages/Contact";
import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <div className="site min-h-screen bg-paper text-ink">
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/sobre-mim" element={<AboutPage />} />
          <Route path="/habilidades" element={<SkillsPage />} />
          <Route path="/projetos" element={<ProjectsPage />} />
          <Route path="/contato" element={<ContactPage />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
