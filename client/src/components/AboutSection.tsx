export default function AboutSection() {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">About Me</h2>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
            Passionate about creating digital experiences that make a difference
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <p className="text-lg leading-relaxed">
              I'm a dedicated <strong>Software Developer</strong> with 1+ years of hands-on experience in designing and building scalable, high-performance web applications. Currently working as a Frontend Developer at WIN Information Technology, where I develop enterprise-grade solutions using React.js, Redux, and modern technologies.
            </p>
            
            <p className="text-lg leading-relaxed">
              My expertise spans across <strong>React.js, Redux Toolkit, Django, FastAPI, and MongoDB</strong>, with a strong focus on clean architecture, code quality, and agile development practices. I'm passionate about leveraging AI-enhanced tools like GitHub Copilot and Cursor IDE to accelerate development and improve efficiency.
            </p>
            
            <div className="grid grid-cols-2 gap-6 mt-8">
              <div className="text-center p-4 bg-slate-50 rounded-lg">
                <div className="text-2xl font-bold text-accent mb-1">1+</div>
                <div className="text-sm text-slate-600">Years Experience</div>
              </div>
              <div className="text-center p-4 bg-slate-50 rounded-lg">
                <div className="text-2xl font-bold text-green-600 mb-1">10+</div>
                <div className="text-sm text-slate-600">Projects Completed</div>
              </div>
              <div className="text-center p-4 bg-slate-50 rounded-lg">
                <div className="text-2xl font-bold text-purple-500 mb-1">5+</div>
                <div className="text-sm text-slate-600">Technologies</div>
              </div>
              <div className="text-center p-4 bg-slate-50 rounded-lg">
                <div className="text-2xl font-bold text-orange-500 mb-1">30%</div>
                <div className="text-sm text-slate-600">Faster Delivery</div>
              </div>
            </div>
          </div>
          
          <div className="relative">
            <img 
              src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600" 
              alt="Modern tech office" 
              className="rounded-lg shadow-xl w-full"
            />
            
            <div className="absolute -bottom-6 -right-6 bg-white p-6 rounded-lg shadow-lg">
              <div className="text-accent font-semibold">🚀 Based in</div>
              <div className="text-primary font-bold">Bengaluru, Karnataka</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
