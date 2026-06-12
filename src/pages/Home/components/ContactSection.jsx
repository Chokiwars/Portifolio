import React from "react";

export default function ContactSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gray-800 text-white px-6 overflow-hidden">

      {/* Glow sutil */}
      <div className="absolute w-[400px] h-[400px] bg-purple-500/10 blur-[120px] rounded-full bottom-[-100px] right-[-100px]" />

      <div className="relative max-w-5xl w-full grid md:grid-cols-2 gap-12 items-center">

        {/* Texto */}
        <div>
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Contato
          </h2>

          <p className="text-gray-300 text-lg mb-6">
            Estou disponível para oportunidades, projetos e colaborações.
            Se quiser conversar, entre em contato por um dos canais abaixo.
          </p>

          <p className="text-gray-400 text-sm">
            Respondo normalmente em até 24 horas.
          </p>
        </div>

        {/* Bloco de ações */}
        <div className="bg-white/5 border border-white/10 rounded-2xl p-8 backdrop-blur-md space-y-4">

          {/* Email */}
          <a
            href="mailto:seuemail@email.com"
            className="block w-full text-center bg-purple-500 hover:bg-purple-600 px-6 py-3 rounded-xl font-medium transition"
          >
            Enviar email
          </a>

          {/* LinkedIn */}
          <a
            href="#"
            target="_blank"
            className="block w-full text-center border border-white/20 hover:border-white hover:bg-white/10 px-6 py-3 rounded-xl font-medium transition"
          >
            LinkedIn
          </a>

          {/* GitHub */}
          <a
            href="#"
            target="_blank"
            className="block w-full text-center border border-white/20 hover:border-white hover:bg-white/10 px-6 py-3 rounded-xl font-medium transition"
          >
            GitHub
          </a>

        </div>

      </div>
    </section>
  );
}