import React from "react";

export default function HeroSection() {
  return (
    <section className="min-h-screen flex items-center justify-center bg-purple-400 text-white px-6">
      <div className="max-w-4xl text-center">

        {/* Nome / título */}
        <h1 className="text-4xl md:text-6xl font-bold mb-6">
          Olá👋
        </h1>

        {/* Subtítulo */}
        <p className="text-lg md:text-2xl mb-8">
          Desenvolvedora Frontend apaixonada por criar experiências bonitas e funcionais
        </p>

        {/* Botões */}
        <div className="flex flex-col md:flex-row gap-4 justify-center">
          <button className="bg-white text-purple-500 px-6 py-3 rounded-xl font-semibold hover:bg-gray-100 transition">
            Ver Projetos
          </button>

          <button className="border border-white px-6 py-3 rounded-xl font-semibold hover:bg-white hover:text-purple-500 transition">
            Contato
          </button>
        </div>

      </div>
    </section>
  );
}