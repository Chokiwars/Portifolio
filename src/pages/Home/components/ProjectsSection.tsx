import React from "react";

const projects = [
    {
        title: "Choki Website 🎨",
        description:
            "Site artístico com galeria, animações e identidade visual focada no universo roxo.",
        tech: ["React", "TailwindCSS"],
        github: "https://github.com/Chokiwars/Choki_for_you-Website",
        demo: "#",
    },
    {
        title: "Sistema de Gestão 💼",
        description:
            "Sistema para gerenciamento de dados com foco em organização e produtividade.",
        tech: ["React", "Java", "Spring Boot"],
        github: "#",
        demo: "#",
    },
    {
        title: "Portfólio 💜",
        description:
            "Meu portfólio pessoal desenvolvido com React e Tailwind, focado em design moderno.",
        tech: ["React", "TailwindCSS"],
        github: "#",
        demo: "#",
    },
];

export default function ProjectsSection() {
    return (
        <section className="min-h-screen flex items-center justify-center bg-gray-900 text-white px-6">
            <div className="max-w-6xl w-full">

                {/* Título */}
                <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
                    Meus Projetos 🚀
                </h2>

                {/* Grid */}
                <div className="grid md:grid-cols-3 gap-8">

                    {projects.map((project, index) => (
                        <div
                            key={index}
                            className="bg-gray-800 rounded-2xl p-6 shadow-lg hover:scale-105 transition flex flex-col justify-between"
                        >
                            <div>
                                {/* Título */}
                                <h3 className="text-xl font-semibold mb-3 text-purple-400">
                                    {project.title}
                                </h3>

                                {/* Descrição */}
                                <p className="text-gray-300 mb-4">
                                    {project.description}
                                </p>

                                {/* Tecnologias */}
                                <div className="flex flex-wrap gap-2 mb-4">
                                    {project.tech.map((tech, i) => (
                                        <span
                                            key={i}
                                            className="bg-gray-700 px-2 py-1 rounded-md text-xs"
                                        >
                                            {tech}
                                        </span>
                                    ))}
                                </div>
                            </div>

                            {/* Botões */}
                            <div className="flex gap-3 mt-4">
                                <a
                                    href={project.github}
                                    target="_blank"
                                    className="flex-1 text-center bg-purple-500 hover:bg-purple-600 px-4 py-2 rounded-lg text-sm font-medium transition"
                                >
                                    GitHub
                                </a>

                                <a
                                    href={project.demo}
                                    target="_blank"
                                    className="flex-1 text-center border border-purple-400 hover:bg-purple-400 hover:text-black px-4 py-2 rounded-lg text-sm font-medium transition"
                                >
                                    Demo
                                </a>
                            </div>
                        </div>
                    ))}

                </div>

            </div>
        </section>
    );
}