import { ExternalLink, Github, CheckCircle } from "lucide-react";

export default function ProjectsSection() {
  const projects = [
    {
      title: "Email Automation Tool",
      description: "Full-stack web application for sending personalized bulk emails via Excel uploads with secure JWT authentication and real-time status tracking.",
      image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400",
      technologies: ["React", "FastAPI"],
      features: [
        "Custom SMTP configuration",
        "Excel parsing & batch processing",
        "MongoDB Atlas integration"
      ],
      techColors: ["bg-accent", "bg-green-600"],
      liveDemo: "https://email-automation-tool-one.vercel.app/",
      githubLink: "https://github.com/shannub556-marolix/Email_Automation_Tool.git"
    },
    {
      title: "Resource Management System",
      description: "Full-stack system for managing engineer assignments, project tracking, and capacity visualization with role-based dashboards.",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400",
      technologies: ["React", "Node.js"],
      features: [
        "JWT authentication & RBAC",
        "TypeScript & Zustand",
        "Capacity tracking & timelines"
      ],
      techColors: ["bg-accent", "bg-yellow-500"],
      liveDemo: "https://engineering-resource-ma-git-4aa489-shanmukhas-projects-009da9a3.vercel.app/",
      githubLink: "https://github.com/shannub556-marolix/Engineering-Resource-Management-System.git"
    },
    {
      title: "Anythingz Super App",
      description: "Multi-role super app inspired by Swiggy/Zomato with complex UIs for Admins, Store Managers, Customers, and Delivery Personnel.",
      image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400",
      technologies: ["React", "Laravel"],
      features: [
        "Multiple user roles & workflows",
        "Real-time order tracking",
        "Mobile-first responsive design"
      ],
      techColors: ["bg-accent", "bg-purple-500"],
      liveDemo: "https://prudvi.anythngz.com/home",
      githubLink: "https://github.com/shannub556-marolix/anythingz.git"
    }
  ];

  return (
    <section id="projects" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">Featured Projects</h2>
          <p className="text-xl text-slate-600">Some of my recent work</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="bg-slate-50 rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-48 object-cover"
              />

              <div className="p-6">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="text-xl font-bold text-primary">{project.title}</h3>
                  <div className="flex space-x-2">
                    {project.technologies.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className={`px-2 py-1 ${project.techColors[techIndex]} text-white text-xs rounded`}
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <p className="text-slate-600 mb-4">
                  {project.description}
                </p>

                <div className="space-y-2 mb-4">
                  {project.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center text-sm text-slate-600">
                      <CheckCircle className="text-green-600 mr-2" size={16} />
                      {feature}
                    </div>
                  ))}
                </div>

                <div className="flex space-x-3">
                  <a
                    href={project.liveDemo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 bg-accent text-white text-center py-2 rounded-lg hover:bg-blue-600 transition-colors duration-200 flex items-center justify-center"
                  >
                    <ExternalLink size={16} className="mr-2" />
                    Live Demo
                  </a>
                  <a
                    href={project.githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 border border-accent text-accent text-center py-2 rounded-lg hover:bg-accent hover:text-white transition-colors duration-200 flex items-center justify-center"
                  >
                    <Github size={16} className="mr-2" />
                    Code
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
