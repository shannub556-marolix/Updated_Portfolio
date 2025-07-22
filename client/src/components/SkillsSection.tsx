export default function SkillsSection() {
  const skillCategories = [
    {
      title: "🎨 Frontend",
      skills: [
        { name: "React.js", level: 90 },
        { name: "Redux Toolkit", level: 85 },
        { name: "TypeScript", level: 80 },
        { name: "Tailwind CSS", level: 90 },
      ],
      color: "accent"
    },
    {
      title: "⚙️ Backend",
      skills: [
        { name: "Python", level: 85 },
        { name: "Django", level: 80 },
        { name: "FastAPI", level: 85 },
        { name: "Node.js", level: 75 },
      ],
      color: "green-600"
    },
    {
      title: "🛠️ Tools & Database",
      skills: [
        { name: "MongoDB", level: 85 },
        { name: "PostgreSQL", level: 80 },
        { name: "Git & GitHub", level: 90 },
        { name: "AI Tools (Copilot)", level: 85 },
      ],
      color: "purple-500"
    }
  ];

  return (
    <section className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">Technical Skills</h2>
          <p className="text-xl text-slate-600">Technologies I work with</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="text-2xl mb-4">{category.title}</div>
              <div className="space-y-3">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex}>
                    <div className="flex justify-between mb-1">
                      <span className="text-sm font-medium text-slate-700">{skill.name}</span>
                      <span className="text-sm text-slate-500">{skill.level}%</span>
                    </div>
                    <div className="skill-bar w-full bg-slate-200 rounded-full h-2">
                      <div 
                        className={`bg-${category.color} h-2 rounded-full transition-all duration-1000 ease-out`}
                        style={{ width: `${skill.level}%` }}
                      ></div>
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
