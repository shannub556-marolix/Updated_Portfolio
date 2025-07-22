import { ChevronDown, Mail, Github, Linkedin } from "lucide-react";

export default function HeroSection() {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center gradient-bg relative overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <img 
          src="https://images.unsplash.com/photo-1461749280684-dccba630e2f6?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&h=1080" 
          alt="Developer workspace" 
          className="w-full h-full object-cover"
        />
      </div>
      
      <div className="relative z-10 text-center text-white px-4 sm:px-6 lg:px-8">
        <div className="animate-slide-up">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4">
            Hi, I'm <span className="text-yellow-300">Shanmukha</span>
          </h1>
          <p className="text-xl sm:text-2xl md:text-3xl mb-6 font-light">
            Full Stack Developer
          </p>
          <p className="text-lg sm:text-xl mb-8 max-w-2xl mx-auto opacity-90">
            Building scalable web applications with React, Python, and modern technologies. 
            1+ year of experience creating impactful digital solutions.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a 
              href="#projects" 
              className="bg-white text-primary px-8 py-3 rounded-full font-semibold hover:bg-slate-100 transition-colors duration-200 transform hover:scale-105"
            >
              View My Work
            </a>
            <a 
              href="#contact" 
              className="border-2 border-white text-white px-8 py-3 rounded-full font-semibold hover:bg-white hover:text-primary transition-colors duration-200"
            >
              Get In Touch
            </a>
          </div>
          
          <div className="flex justify-center space-x-6 mt-8">
            <a 
              href="https://www.linkedin.com/in/shanmukhabusappagari" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-white hover:text-yellow-300 transition-colors duration-200 transform hover:scale-110"
            >
              <Linkedin size={32} />
            </a>
            <a 
              href="https://github.com/shannub556-marolix" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-white hover:text-yellow-300 transition-colors duration-200 transform hover:scale-110"
            >
              <Github size={32} />
            </a>
            <a 
              href="mailto:bussapagarishannu@gmail.com" 
              className="text-white hover:text-yellow-300 transition-colors duration-200 transform hover:scale-110"
            >
              <Mail size={32} />
            </a>
          </div>
        </div>
        
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce-gentle">
          <ChevronDown className="text-white" size={24} />
        </div>
      </div>
    </section>
  );
}
