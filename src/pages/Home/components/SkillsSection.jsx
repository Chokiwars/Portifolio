import React from "react";

const skills = [
  {
    category: "Frontend",
    items: [
      { name: "HTML", level: 90 },
      { name: "CSS", level: 85 },
      { name: "JavaScript", level: 80 },
      { name: "React", level: 75 },
      { name: "Tailwind CSS", level: 85 },
    ],
  },
  {
    category: "Backend",
    items: [
      { name: "Node.js", level: 60 },
      { name: "Java", level: 65 },
      { name: "Spring Boot", level: 60 },
    ],
  },
  {
    category: "Ferramentas",
    items: [
      { name: "Git", level: 80 },
      { name: "GitHub", level: 85 },
      { name: "Figma", level: 70 },
      { name: "VS Code", level: 90 },
    ],
  },
];

export default function SkillsSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gray-800 text-white px-6 overflow-hidden">

      {/* Glow sutil */}
      <div className="absolute w-[400px] h-[400px] bg-purple-500/10 blur-[120px] rounded-full bottom-[-100px] left-[-100px]" />

      <div className="relative max-w-6xl w-full">

        {/* Título */}
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">
          Skills
        </h2>

        {/* Grid */}
        <div className="grid md:grid-cols-3 gap-8">

          {skills.map((group, index) => (
            <div
              key={index}
              className="bg-white/5 border border-white/10 rounded-2xl p-6 backdrop-blur-md"
            >
              <h3 className="text-lg font-semibold mb-6 text-purple-400">
                {group.category}
              </h3>

              <div className="space-y-4">
                {group.items.map((skill, i) => (
                  <div key={i}>
                    
                    {/* Nome + porcentagem */}
                    <div className="flex justify-between text-sm mb-1">
                      <span className="text-gray-300">{skill.name}</span>
                      <span className="text-gray-400">{skill.level}%</span>
                    </div>

                    {/* Barra */}
                    <div className="w-full h-2 bg-gray-700 rounded-full overflow-hidden">
                      <div
                        className="h-full bg-purple-500 rounded-full transition-all duration-500"
                        style={{ width: `${skill.level}%` }}
                      />
                    </div>

                  </div>
                ))}
              </div>

            </div>
          ))}

        </div>

      </div>
    </section>
  );
}