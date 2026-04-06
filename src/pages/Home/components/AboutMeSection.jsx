import React from "react";

export default function AboutMeSection() {
  return (
    <section className="min-h-screen flex items-center justify-center bg-gray-900 text-white px-6">
      <div className="max-w-5xl grid md:grid-cols-2 gap-10 items-center">

        {/* Texto */}
        <div>
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Sobre mim 💜
          </h2>

          <p className="text-lg text-gray-300 mb-4">
            Oi! Eu sou a Bia, uma desenvolvedora frontend apaixonada por criar
            interfaces modernas, bonitas e funcionais.
          </p>

          <p className="text-lg text-gray-300 mb-4">
            Atualmente trabalho com desenvolvimento de sistemas e estou sempre
            buscando aprender novas tecnologias e melhorar minhas habilidades.
          </p>

          <p className="text-lg text-gray-300">
            Além de programar, também amo desenhar 🎨 — principalmente gatos e
            dragões — e trazer um toque criativo para tudo o que faço.
          </p>
        </div>

        {/* Card visual */}
        <div className="bg-purple-500 rounded-2xl p-8 shadow-lg text-center">
          <h3 className="text-2xl font-semibold mb-4">
            💡 Curiosidades
          </h3>

          <ul className="space-y-2 text-lg">
            <li>💜 Apaixonada por roxo</li>
            <li>🎨 Artista nas horas vagas</li>
            <li>🐉 Ama dragões</li>
            <li>🐱 Desenha gatos</li>
            <li>🚀 Sempre aprendendo algo novo</li>
          </ul>
        </div>

      </div>
    </section>
  );
}