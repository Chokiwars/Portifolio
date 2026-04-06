import React from "react";

export default function ContactSection() {
    return (
        <section className="min-h-screen flex items-center justify-center bg-gray-800 text-white px-6">
            <div className="max-w-3xl w-full text-center">

                {/* Título */}
                <h2 className="text-3xl md:text-4xl font-bold mb-6">
                    Vamos conversar? 💬
                </h2>

                {/* Texto */}
                <p className="text-gray-300 mb-10 text-lg">
                    Estou sempre aberta a novas oportunidades, projetos ou até só um papo sobre tecnologia e arte 💜
                </p>

                {/* Botões de contato */}
                <div className="flex flex-col md:flex-row gap-4 justify-center">

                    {/* Email */}
                    <a
                        href="mailto:seuemail@email.com"
                        className="bg-purple-500 hover:bg-purple-600 px-6 py-3 rounded-xl font-semibold transition"
                    >
                        📧 Enviar Email
                    </a>

                    {/* LinkedIn */}
                    <a
                        href="#"
                        target="_blank"
                        className="border border-purple-400 hover:bg-purple-400 hover:text-black px-6 py-3 rounded-xl font-semibold transition"
                    >
                        💼 LinkedIn
                    </a>

                    {/* GitHub */}
                    <a
                        href="#"
                        target="_blank"
                        className="border border-white hover:bg-white hover:text-black px-6 py-3 rounded-xl font-semibold transition"
                    >
                        💻 GitHub
                    </a>

                </div>

            </div>
        </section>
    );
}