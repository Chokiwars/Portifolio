import React from "react";

const projects = [
    {
        title: "Choki Website",
        description:
            "Plataforma artística com foco em apresentação visual, navegação fluida e identidade consistente.",
        tech: ["React", "Tailwind CSS"],
        github: "https://github.com/Chokiwars/Choki_for_you-Website",
        demo: "#",
        image: "https://via.placeholder.com/600x400",
    },
    {
        title: "Sistema de Gestão",
        description:
            "Aplicação para gerenciamento de dados com foco em organização, usabilidade e performance.",
        tech: ["React", "Java", "Spring Boot"],
        github: "#",
        demo: "#",
        image: "https://via.placeholder.com/600x400",
    },
    {
        title: "Portfólio",
        description:
            "Portfólio pessoal desenvolvido com foco em performance, responsividade e design moderno.",
        tech: ["React", "Tailwind CSS"],
        github: "#",
        demo: "#",
        image: "https://via.placeholder.com/600x400",
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
                <div className="grid md:grid-cols-3 gap-8">

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
