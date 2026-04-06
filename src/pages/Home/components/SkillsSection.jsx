import React from "react";

const skills = [
  {
    category: "Frontend 💻",
    items: ["HTML", "CSS", "JavaScript", "React", "TailwindCSS"],
  },
  {
    category: "Backend ⚙️",
    items: ["Node.js", "Java", "Spring Boot"],
  },
  {
    category: "Ferramentas 🛠️",
    items: ["Git", "GitHub", "Figma", "VS Code"],
  },
];

export default function SkillsSection() {
  return (
    <section className="min-h-screen flex items-center justify-center bg-gray-800 text-white px-6">
      <div className="max-w-5xl w-full">

        {/* Título */}
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          Minhas Skills 🚀
        </h2>

        {/* Grid de categorias */}
        <div className="grid md:grid-cols-3 gap-8">

          {skills.map((group, index) => (
            <div
              key={index}
              className="bg-gray-900 p-6 rounded-2xl shadow-lg hover:scale-105 transition"
            >
              <h3 className="text-xl font-semibold mb-4 text-purple-400">
                {group.category}
              </h3>

              <ul className="space-y-2">
                {group.items.map((skill, i) => (
                  <li
                    key={i}
                    className="bg-gray-800 px-3 py-2 rounded-lg text-sm text-center"
                  >
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
          ))}

        </div>

      </div>
    </section>
  );
}