import React from "react";

const projects = [
  {
    title: "Choki For You",
    description:
      "Plataforma artística desenvolvida para apresentar trabalhos, comissões e conteúdo visual em uma experiência moderna e responsiva.",
    tech: ["React", "Tailwind CSS"],
    github: "https://github.com/Chokiwars/Choki_for_you-Website",
    demo: "https://choki-for-you-website.vercel.app/",
    image: "/images/projects/choki.png",
  },
  {
    title: "Frontend Manual",
    description:
      "Manual interativo voltado para desenvolvedores frontend, reunindo conceitos, referências e conteúdos de apoio em uma interface organizada.",
    tech: ["React", "Tailwind CSS"],
    github: "https://github.com/Chokiwars/Frontend-Manual",
    demo: "https://frontend-manuel.vercel.app/",
    image: "/images/projects/frontend-manual.png",
  },
  {
    title: "Nova Fauna",
    description:
      "Guia informativo sobre animais não convencionais, com foco em educação, navegação intuitiva e apresentação de conteúdo.",
    tech: ["React", "Tailwind CSS"],
    github: "https://github.com/Chokiwars/Nova-Fauna",
    demo: "https://nova-fauna.vercel.app/",
    image: "/images/projects/nova-fauna.png",
  },
  {
    title: "FrontArena",
    description:
      "Plataforma de competições frontend criada para incentivar prática, aprendizado e desenvolvimento de habilidades através de desafios.",
    tech: ["React", "Tailwind CSS"],
    github: "https://github.com/FrontArena/Frontarena-web",
    demo: "https://frontarena.vercel.app/",
    image: "/images/projects/frontarena.png",
  },
  {
    title: "Portfólio",
    description:
      "Portfólio pessoal desenvolvido para apresentar projetos, experiências e competências de forma moderna e responsiva.",
    tech: ["React", "Tailwind CSS"],
    github: "https://github.com/Chokiwars/Chokiwars-Portifolio",
    demo: "https://chokiwars-portifolio.vercel.app/",
    image: "/images/projects/portfolio.png",
  },
  {
    title: "O Pato",
    description:
      "Primeiro projeto publicado na Vercel. Um site simples que marcou o início da minha jornada com deploy e desenvolvimento web.",
    tech: ["HTML", "CSS", "JavaScript"],
    demo: "https://opato.vercel.app/",
    image: "/images/projects/opato.png",
  },
];

export default function ProjectsSection() {
    return (
        <section className="relative min-h-screen flex items-center justify-center bg-gray-900 text-white px-6 overflow-hidden">

            {/* Glow sutil */}
            <div className="absolute w-[400px] h-[400px] bg-purple-500/10 blur-[120px] rounded-full top-[-100px] left-[-100px]" />

            <div className="relative max-w-6xl w-full">

                {/* Título */}
                <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">
                    Projetos
                </h2>

                {/* Grid */}
                <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-8">

                    {projects.map((project, index) => (
                        <div
                            key={index}
                            className="group bg-white/5 border border-white/10 rounded-2xl overflow-hidden backdrop-blur-md transition hover:border-purple-500/50"
                        >
                            {/* Imagem */}
                            <div className="relative overflow-hidden">
                                <img
                                    src={project.image}
                                    alt={project.title}
                                    className="w-full h-48 object-cover group-hover:scale-105 transition duration-500"
                                />

                                {/* Overlay */}
                                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition flex items-center justify-center gap-4">

                                    <a
                                        href={project.github}
                                        target="_blank"
                                        className="bg-purple-500 hover:bg-purple-600 px-4 py-2 rounded-lg text-sm transition"
                                    >
                                        GitHub
                                    </a>

                                    <a
                                        href={project.demo}
                                        target="_blank"
                                        className="border border-white/30 hover:bg-white hover:text-black px-4 py-2 rounded-lg text-sm transition"
                                    >
                                        Demo
                                    </a>

                                </div>
                            </div>

                            {/* Conteúdo */}
                            <div className="p-6">

                                {/* Título */}
                                <h3 className="text-lg font-semibold mb-3 text-purple-400">
                                    {project.title}
                                </h3>

                                {/* Descrição */}
                                <p className="text-gray-300 text-sm mb-4">
                                    {project.description}
                                </p>

                                {/* Tecnologias */}
                                <div className="flex flex-wrap gap-2">
                                    {project.tech.map((tech, i) => (
                                        <span
                                            key={i}
                                            className="bg-gray-800 px-2 py-1 rounded-md text-xs text-gray-300"
                                        >
                                            {tech}
                                        </span>
                                    ))}
                                </div>

                            </div>
                        </div>
                    ))}

                </div>

            </div>
        </section>
    );
}
