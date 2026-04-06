import React from "react";

export default function AboutSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gray-900 text-white px-6 overflow-hidden">

      {/* Glow sutil */}
      <div className="absolute w-[400px] h-[400px] bg-purple-500/10 blur-[120px] rounded-full top-[-100px] right-[-100px]" />

      <div className="relative max-w-6xl w-full grid md:grid-cols-2 gap-12 items-center">

        {/* Texto */}
        <div>
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Quem sou eu
          </h2>

          <p className="text-lg text-gray-300 mb-4">
            Sou desenvolvedora frontend com foco na criação de interfaces modernas,
            acessíveis e bem estruturadas.
          </p>

          <p className="text-lg text-gray-300 mb-4">
            Tenho experiência no desenvolvimento de aplicações utilizando React,
            com atenção à organização de código, componentização e boas práticas.
          </p>

          <p className="text-lg text-gray-300">
            Busco constantemente evoluir minhas habilidades técnicas e entregar
            soluções que unam performance, usabilidade e consistência visual.
          </p>
        </div>

        {/* Bloco de destaque */}
        <div className="bg-white/5 border border-white/10 rounded-2xl p-8 backdrop-blur-md">

          <h3 className="text-xl font-semibold mb-6 text-purple-400">
            Principais competências
          </h3>

          <div className="space-y-4">

            <div className="flex justify-between text-sm">
              <span className="text-gray-300">Desenvolvimento Frontend</span>
              <span className="text-white">React, JavaScript</span>
            </div>

            <div className="flex justify-between text-sm">
              <span className="text-gray-300">Estilização</span>
              <span className="text-white">Tailwind CSS</span>
            </div>

            <div className="flex justify-between text-sm">
              <span className="text-gray-300">Boas práticas</span>
              <span className="text-white">Componentização, Responsividade</span>
            </div>

            <div className="flex justify-between text-sm">
              <span className="text-gray-300">Ferramentas</span>
              <span className="text-white">Git, GitHub</span>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}