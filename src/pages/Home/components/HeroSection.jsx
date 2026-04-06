import React from "react";
import { Link } from "react-router-dom";

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 via-purple-900 to-gray-900 text-white px-6 overflow-hidden">
      
      {/* Glow de fundo */}
      <div className="absolute w-[500px] h-[500px] bg-purple-500/20 blur-[120px] rounded-full top-[-100px] left-[-100px]" />
      <div className="absolute w-[400px] h-[400px] bg-purple-700/20 blur-[120px] rounded-full bottom-[-100px] right-[-100px]" />

      <div className="relative max-w-4xl text-center">

        {/* Título */}
        <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
          Desenvolvedora Frontend
          <span className="block text-purple-400">
            focada em experiências modernas
          </span>
        </h1>

        {/* Subtítulo */}
        <p className="text-lg md:text-xl text-gray-300 mb-10 max-w-2xl mx-auto">
          Crio interfaces performáticas, acessíveis e visualmente consistentes, com foco em usabilidade e qualidade de código.
        </p>

        {/* Botões */}
        <div className="flex flex-col md:flex-row gap-4 justify-center">

          <Link
            to="/projetos"
            className="bg-purple-500 hover:bg-purple-600 px-8 py-3 rounded-xl font-medium transition shadow-lg hover:shadow-purple-500/30"
          >
            Ver projetos
          </Link>

          <Link
            to="/contato"
            className="border border-white/20 hover:border-white hover:bg-white/10 px-8 py-3 rounded-xl font-medium transition"
          >
            Entrar em contato
          </Link>

        </div>

      </div>
    </section>
  );
}