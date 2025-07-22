import { Linkedin, Github, Mail, Phone } from "lucide-react";

export default function Footer() {
  const socialLinks = [
    {
      icon: Linkedin,
      href: "https://www.linkedin.com/in/shanmukhabusappagari",
      label: "LinkedIn"
    },
    {
      icon: Github,
      href: "https://github.com/shannub556-marolix",
      label: "GitHub"
    },
    {
      icon: Mail,
      href: "mailto:bussapagarishannu@gmail.com",
      label: "Email"
    },
    {
      icon: Phone,
      href: "tel:+919550685733",
      label: "Phone"
    }
  ];

  return (
    <footer className="bg-primary text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <div className="mb-8">
            <h3 className="text-2xl font-bold mb-4">Shanmukha Busappagari</h3>
            <p className="text-slate-300 max-w-md mx-auto">
              Full Stack Developer passionate about creating digital experiences that make a difference.
            </p>
          </div>
          
          <div className="flex justify-center space-x-6 mb-8">
            {socialLinks.map((link, index) => (
              <a
                key={index}
                href={link.href}
                target={link.href.startsWith("http") ? "_blank" : undefined}
                rel={link.href.startsWith("http") ? "noopener noreferrer" : undefined}
                className="text-slate-300 hover:text-white transition-colors duration-200"
                aria-label={link.label}
              >
                <link.icon size={32} />
              </a>
            ))}
          </div>
          
          <div className="border-t border-slate-700 pt-8">
            <p className="text-slate-400 text-sm">
              © 2025 Shanmukha Busappagari
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
