import { Circle } from "lucide-react";

export default function ExperienceSection() {
  const experiences = [
    {
      title: "Frontend Developer",
      company: "WIN Information Technology (WINIT)",
      location: "Hyderabad, Telangana",
      period: "Jun 2024 – Present",
      responsibilities: [
        "Developed responsive cross-platform UIs using Blazor and React.js",
        "Led frontend development for Retail Audit & Presales Solution modules",
        "Integrated AI tools achieving 30% faster delivery cycles",
        "Built scalable components with Material UI and Tailwind CSS"
      ],
      color: "accent",
      status: "Current Position"
    },
    {
      title: "Python Developer Intern",
      company: "Marolix Technology Solutions Pvt Ltd",
      location: "Hyderabad, Telangana",
      period: "Aug 2023 – Jan 2024",
      responsibilities: [
        "Contributed to HRMS Leave Management module development",
        "Built and tested RESTful APIs with Python",
        "Performed unit testing using Postman",
        "Collaborated on implementation strategies"
      ],
      color: "green-600",
      status: "Previous Role"
    }
  ];

  return (
    <section id="experience" className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">Work Experience</h2>
          <p className="text-xl text-slate-600">My professional journey</p>
        </div>
        
        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 w-0.5 h-full bg-accent"></div>
          
          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <div key={index} className="flex flex-col md:flex-row items-start md:items-center">
                {index % 2 === 0 ? (
                  <>
                    <div className="flex-1 md:text-right md:pr-8">
                      <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
                        <h3 className="text-xl font-bold text-primary mb-2">{exp.title}</h3>
                        <h4 className={`text-${exp.color} font-semibold mb-2`}>{exp.company}</h4>
                        <p className="text-slate-600 mb-4">{exp.period} | {exp.location}</p>
                        <ul className="text-sm text-slate-600 space-y-2">
                          {exp.responsibilities.map((responsibility, respIndex) => (
                            <li key={respIndex} className="flex items-start">
                              <Circle className={`text-${exp.color} text-xs mt-2 mr-2`} size={8} />
                              {responsibility}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                    
                    <div className={`relative z-10 flex-shrink-0 w-8 h-8 bg-${exp.color} rounded-full border-4 border-white shadow-lg my-4 md:my-0`}></div>
                    
                    <div className="flex-1 md:pl-8">
                      <div className="text-sm text-slate-500">{exp.status}</div>
                    </div>
                  </>
                ) : (
                  <>
                    <div className="flex-1 md:text-right md:pr-8">
                      <div className="text-sm text-slate-500">{exp.status}</div>
                    </div>
                    
                    <div className={`relative z-10 flex-shrink-0 w-8 h-8 bg-${exp.color} rounded-full border-4 border-white shadow-lg my-4 md:my-0`}></div>
                    
                    <div className="flex-1 md:pl-8">
                      <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
                        <h3 className="text-xl font-bold text-primary mb-2">{exp.title}</h3>
                        <h4 className={`text-${exp.color} font-semibold mb-2`}>{exp.company}</h4>
                        <p className="text-slate-600 mb-4">{exp.period} | {exp.location}</p>
                        <ul className="text-sm text-slate-600 space-y-2">
                          {exp.responsibilities.map((responsibility, respIndex) => (
                            <li key={respIndex} className="flex items-start">
                              <Circle className={`text-${exp.color} text-xs mt-2 mr-2`} size={8} />
                              {responsibility}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
