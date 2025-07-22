import { useState } from "react";
import { Mail, Linkedin, Github, MapPin, Download } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });
  const { toast } = useToast();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically send the form data to your backend
    toast({
      title: "Message sent!",
      description: "Thank you for your message. I'll get back to you soon.",
    });
    setFormData({ name: "", email: "", subject: "", message: "" });
  };

const handleDownloadResume = () => {
  const link = document.createElement("a");
  link.href = "/resume.pdf"; // Must match the file in public
  link.download = "Shanmukha_Resume.pdf"; // The name you want when downloaded
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);

  toast({
    title: "Resume download started",
    description: "Your download will begin shortly.",
  });
};


  const contactInfo = [
    {
      icon: Mail,
      title: "Email",
      value: "bussapagarishannu@gmail.com",
      href: "mailto:bussapagarishannu@gmail.com",
      color: "bg-accent"
    },
    {
      icon: Linkedin,
      title: "LinkedIn",
      value: "shanmukhabusappagari",
      href: "https://www.linkedin.com/in/shanmukhabusappagari",
      color: "bg-blue-600"
    },
    {
      icon: Github,
      title: "GitHub",
      value: "shannub556-marolix",
      href: "https://github.com/shannub556-marolix",
      color: "bg-gray-800"
    },
    {
      icon: MapPin,
      title: "Location",
      value: "Bengaluru, Karnataka, India",
      href: "#",
      color: "bg-green-600"
    }
  ];

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">Get In Touch</h2>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
            I'm always open to discussing new opportunities, interesting projects, or just having a chat about technology.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="space-y-8">
            {contactInfo.map((info, index) => (
              <a
                key={index}
                href={info.href}
                target={info.href.startsWith("http") ? "_blank" : undefined}
                rel={info.href.startsWith("http") ? "noopener noreferrer" : undefined}
                className="flex items-center space-x-4 p-6 bg-slate-50 rounded-lg hover:bg-slate-100 transition-colors duration-200"
              >
                <div className={`w-12 h-12 ${info.color} text-white rounded-full flex items-center justify-center`}>
                  <info.icon size={24} />
                </div>
                <div>
                  <h3 className="font-semibold text-primary">{info.title}</h3>
                  <p className="text-slate-600">{info.value}</p>
                </div>
              </a>
            ))}
          </div>
          
          <div className="bg-slate-50 p-8 rounded-lg">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-slate-700 mb-2">
                  Name
                </label>
                <Input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                  className="w-full"
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-slate-700 mb-2">
                  Email
                </label>
                <Input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  className="w-full"
                />
              </div>
              
              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-slate-700 mb-2">
                  Subject
                </label>
                <Input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleInputChange}
                  required
                  className="w-full"
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-slate-700 mb-2">
                  Message
                </label>
                <Textarea
                  id="message"
                  name="message"
                  rows={4}
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  className="w-full"
                />
              </div>
              
              <Button type="submit" className="w-full bg-accent hover:bg-blue-600 text-white">
                Send Message
              </Button>
            </form>
          </div>
        </div>
        
        <div className="text-center mt-12">
          <Button 
            onClick={handleDownloadResume}
            className="bg-primary text-white "
          >
            <Download className="mr-2" size={20} />
            Download Resume
          </Button>
        </div>
      </div>
    </section>
  );
}
