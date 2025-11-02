import { useState, useEffect } from 'react';
import { Menu, X, Code, Smartphone, Palette, Globe, Search, MessageCircle, TrendingUp, ArrowRight, Sparkles, CheckCircle, Mail, Phone, MapPin, ExternalLink, Github } from 'lucide-react';
import { Link } from "react-router-dom";
import emailjs from "@emailjs/browser";



export default function Mind2PixelPortfolio() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [activeService, setActiveService] = useState(0);
    const [scrolled, setScrolled] = useState(false);
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

    function handleSubmit(event) {
  event.preventDefault();
  const form = event.target;

  const templateParams = {
    from_name: form.name.value,
    from_email: form.email.value,
    from_phone: form.phone?.value || "Not provided",
    message: form.message.value,
  };

  emailjs
    .send("service_zqx78ou", "template_yqngiep", templateParams, "NzAxi9ttqkP7xngqO")
    .then(() => {
      alert("✅ Thank you for reaching out! We'll get back to you soon.");
      form.reset();
    })
    .catch((error) => {
      console.error("EmailJS Error:", error);
      alert("⚠️ There was an issue submitting your message. Please try again later or contact us directly at +91 6354920939.");
    });
}

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 50);
        const handleMouseMove = (e) => {
            setMousePosition({ x: e.clientX, y: e.clientY });
        };

        window.addEventListener('scroll', handleScroll);
        window.addEventListener('mousemove', handleMouseMove);

        return () => {
            window.removeEventListener('scroll', handleScroll);
            window.removeEventListener('mousemove', handleMouseMove);
        };
    }, []);

    useEffect(() => {
        const interval = setInterval(() => {
            setActiveService((prev) => (prev + 1) % services.length);
        }, 3000);
        return () => clearInterval(interval);
    }, []);

    const services = [
        {
            icon: <Globe className="w-8 h-8" />,
            title: "WordPress Development",
            description: "Custom WordPress sites with stunning designs and powerful functionality",
            color: "from-blue-500 to-cyan-500"
        },
        {
            icon: <Smartphone className="w-8 h-8" />,
            title: "Android Development",
            description: "Native Android apps that deliver seamless user experiences",
            color: "from-green-500 to-emerald-500"
        },
        {
            icon: <Palette className="w-8 h-8" />,
            title: "Graphic Designing",
            description: "Eye-catching visuals that make your brand unforgettable",
            color: "from-purple-500 to-pink-500"
        },
        {
            icon: <Code className="w-8 h-8" />,
            title: "Website Development",
            description: "Modern, responsive websites built with cutting-edge technologies",
            color: "from-orange-500 to-red-500"
        },
        {
            icon: <Search className="w-8 h-8" />,
            title: "SEO Services",
            description: "Boost your visibility and rank higher on search engines",
            color: "from-yellow-500 to-amber-500"
        },
        {
            icon: <MessageCircle className="w-8 h-8" />,
            title: "WhatsApp Integration",
            description: "Connect with customers instantly through WhatsApp automation",
            color: "from-teal-500 to-cyan-500"
        },
        {
            icon: <TrendingUp className="w-8 h-8" />,
            title: "Meta Consultancy",
            description: "Strategic guidance for Facebook, Instagram, and Meta platforms",
            color: "from-indigo-500 to-purple-500"
        }
    ];

   
    return (
        
        <div className="min-h-screen bg-gradient-to-br from-slate-950 via-purple-950 to-slate-950 text-white overflow-hidden">
            {/* Animated background elements */}
            <div className="fixed inset-0 overflow-hidden pointer-events-none">
                <div
                    className="absolute w-96 h-96 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse"
                    style={{
                        left: `${mousePosition.x / 10}px`,
                        top: `${mousePosition.y / 10}px`,
                    }}
                />
                <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-cyan-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse delay-700" />
                <div className="absolute bottom-1/4 left-1/3 w-96 h-96 bg-pink-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse delay-1000" />
            </div>

            {/* Navigation */}
            <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-slate-950/90 backdrop-blur-lg shadow-lg shadow-purple-500/10' : 'bg-transparent'}`}>
                <div className="max-w-7xl mx-auto px-6 py-4">
                    <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-2">
                            <Sparkles className="w-8 h-8 text-purple-400" />
                            <span className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
                                Mind2Pixel
                            </span>
                        </div>

                        <div className="hidden md:flex items-center space-x-8">
                            <a href="#home" className="hover:text-purple-400 transition-colors">Home</a>
                            <a href="#services" className="hover:text-purple-400 transition-colors">Services</a>
                            <a href="#about" className="hover:text-purple-400 transition-colors">About</a>
                            <a href="#contact" className="hover:text-purple-400 transition-colors">Contact</a>
                            <button
                                onClick={() => {
                                    const phoneNumber = "916354920939"; // replace with your number
                                    const message = encodeURIComponent("Hello! I’d like to start a project with Mind2Pixel.");
                                    window.open(`https://wa.me/${phoneNumber}?text=${message}`, "_blank");
                                }}
                                className="bg-gradient-to-r from-purple-500 to-cyan-500 px-6 py-2 rounded-full hover:shadow-lg hover:shadow-purple-500/50 transition-all"
                            >
                                Get Started
                            </button>
                        </div>

                        <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="md:hidden">
                            {isMenuOpen ? <X /> : <Menu />}
                        </button>
                    </div>
                </div>

                {/* Mobile menu */}
                {isMenuOpen && (
                    <div className="md:hidden bg-slate-950/95 backdrop-blur-lg border-t border-purple-500/20">
                        <div className="px-6 py-4 space-y-4">
                            <a href="#home" className="block hover:text-purple-400 transition-colors">Home</a>
                            <a href="#services" className="block hover:text-purple-400 transition-colors">Services</a>
                            <a href="#about" className="block hover:text-purple-400 transition-colors">About</a>
                            <a href="#contact" className="block hover:text-purple-400 transition-colors">Contact</a>
                            <button
                                onClick={() => {
                                    const phoneNumber = "916354920939"; // replace with your number
                                    const message = encodeURIComponent("Hello! I’d like to start a project with Mind2Pixel.");
                                    window.open(`https://wa.me/${phoneNumber}?text=${message}`, "_blank");
                                }}
                                className="bg-gradient-to-r from-purple-500 to-cyan-500 px-6 py-2 rounded-full hover:shadow-lg hover:shadow-purple-500/50 transition-all"
                            >
                                Get Started
                            </button>
                        </div>
                    </div>
                )}
            </nav>

            {/* Hero Section */}
            <section id="home" className="relative min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 pt-20">
                <div className="w-full max-w-7xl mx-auto text-center z-10">
                    <div className="mb-8 inline-block">
                        <span className="bg-purple-500/20 border border-purple-500/30 text-purple-300 px-4 py-2 rounded-full text-sm">
                            ✨ Transform Your Digital Vision
                        </span>
                    </div>

                    <h1 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight px-4">
                        Turn Your <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400 bg-clip-text text-transparent">Ideas Into Reality</span>
                    </h1>

                    <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-300 mb-12 max-w-3xl mx-auto px-4">
                        We don't just meet expectations – we exceed them. From concept to launch,
                        we bring your digital dreams to life with pixel-perfect precision.
                    </p>

                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12 sm:mb-16 px-4">
                        <button
                            onClick={() => {
                                const phoneNumber = "916354920939"; // replace with your number
                                const message = encodeURIComponent("Hello! I’d like to start a project with Mind2Pixel.");
                                window.open(`https://wa.me/${phoneNumber}?text=${message}`, "_blank");
                            }}
                            className="group bg-gradient-to-r from-purple-500 to-cyan-500 px-6 sm:px-8 py-3 sm:py-4 rounded-full text-base sm:text-lg font-semibold hover:shadow-2xl hover:shadow-purple-500/50 transition-all flex items-center w-full sm:w-auto justify-center"
                        >
                            Start Your Project
                            <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
                        </button>
                        <button className="border-2 border-purple-500/50 px-6 sm:px-8 py-3 sm:py-4 rounded-full text-base sm:text-lg font-semibold hover:bg-purple-500/10 transition-all w-full sm:w-auto">
                            <Link to="/projects" className="block">View Our Work</Link>

                        </button>
                    </div>

                    {/* Stats */}
                    
                </div>
            </section>

            {/* Services Section */}
            <section id="services" className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="w-full max-w-7xl mx-auto">
                    <div className="text-center mb-12 sm:mb-16 px-4">
                        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
                            Our <span className="bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">Services</span>
                        </h2>
                        <p className="text-lg sm:text-xl text-gray-400">Everything you need to dominate the digital space</p>
                    </div>

                    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 px-4">
                        {services.map((service, index) => (
                            <div
                                key={index}
                                className={`group relative bg-white/5 backdrop-blur-sm border border-purple-500/20 rounded-xl sm:rounded-2xl p-6 sm:p-8 hover:bg-white/10 transition-all duration-300 cursor-pointer ${activeService === index ? 'ring-2 ring-purple-500 shadow-2xl shadow-purple-500/30' : ''
                                    }`}
                                onMouseEnter={() => setActiveService(index)}
                            >
                                <div className={`inline-block p-3 sm:p-4 rounded-xl bg-gradient-to-br ${service.color} mb-4 sm:mb-6 group-hover:scale-110 transition-transform`}>
                                    {service.icon}
                                </div>

                                <h3 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4">{service.title}</h3>
                                <p className="text-gray-400 mb-4 sm:mb-6 text-sm sm:text-base">{service.description}</p>

                                <div className="flex items-center text-purple-400 font-semibold group-hover:translate-x-2 transition-transform text-sm sm:text-base">
                                    Learn More <ArrowRight className="ml-2 w-4 h-4 sm:w-5 sm:h-5" />
                                </div>

                                <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity">
                                    <CheckCircle className="w-5 h-5 sm:w-6 sm:h-6 text-cyan-400" />
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* About Section */}
            <section id="about" className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="w-full max-w-7xl mx-auto px-4">
                    <div className="bg-gradient-to-br from-purple-500/10 to-cyan-500/10 backdrop-blur-sm border border-purple-500/20 rounded-2xl sm:rounded-3xl p-6 sm:p-8 lg:p-12">
                        <div className="grid md:grid-cols-2 gap-8 sm:gap-12 items-center">
                            <div>
                                <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6">
                                    Why Choose <span className="bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">Mind2Pixel?</span>
                                </h2>
                                <p className="text-gray-300 text-base sm:text-lg mb-4 sm:mb-6">
                                    We're not just service providers – we're your digital partners. With years of experience
                                    and a passion for innovation, we transform concepts into captivating digital experiences.
                                </p>
                                <p className="text-gray-300 text-base sm:text-lg mb-6 sm:mb-8">
                                    Our mission is simple: deliver solutions that don't just meet your expectations,
                                    but blow them out of the water. Every pixel, every line of code, every design element
                                    is crafted with your success in mind.
                                </p>
                                <div className="space-y-3 sm:space-y-4">
                                    {['Client-First Approach', 'Cutting-Edge Technology', 'On-Time Delivery', 'Unlimited Revisions'].map((item, i) => (
                                        <div key={i} className="flex items-center space-x-3">
                                            <CheckCircle className="w-5 h-5 sm:w-6 sm:h-6 text-cyan-400 flex-shrink-0" />
                                            <span className="text-gray-200 text-sm sm:text-base">{item}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            <div className="relative mt-8 md:mt-0">
                                <div className="absolute inset-0 bg-gradient-to-br from-purple-500 to-cyan-500 rounded-2xl sm:rounded-3xl blur-3xl opacity-30" />
                                <div className="relative bg-slate-900/50 backdrop-blur-sm border border-purple-500/30 rounded-2xl sm:rounded-3xl p-6 sm:p-8">
                                    <div className="space-y-4 sm:space-y-6">
                                        <div className="flex items-start space-x-3 sm:space-x-4">
                                            <div className="bg-purple-500/20 p-2 sm:p-3 rounded-lg flex-shrink-0">
                                                <Sparkles className="w-5 h-5 sm:w-6 sm:h-6 text-purple-400" />
                                            </div>
                                            <div>
                                                <h4 className="font-semibold text-base sm:text-lg mb-1 sm:mb-2">Innovation First</h4>
                                                <p className="text-gray-400 text-sm sm:text-base">We stay ahead of trends to give you the competitive edge</p>
                                            </div>
                                        </div>
                                        <div className="flex items-start space-x-3 sm:space-x-4">
                                            <div className="bg-cyan-500/20 p-2 sm:p-3 rounded-lg flex-shrink-0">
                                                <CheckCircle className="w-5 h-5 sm:w-6 sm:h-6 text-cyan-400" />
                                            </div>
                                            <div>
                                                <h4 className="font-semibold text-base sm:text-lg mb-1 sm:mb-2">Quality Guaranteed</h4>
                                                <p className="text-gray-400 text-sm sm:text-base">Every project undergoes rigorous testing and refinement</p>
                                            </div>
                                        </div>
                                        <div className="flex items-start space-x-3 sm:space-x-4">
                                            <div className="bg-pink-500/20 p-2 sm:p-3 rounded-lg flex-shrink-0">
                                                <TrendingUp className="w-5 h-5 sm:w-6 sm:h-6 text-pink-400" />
                                            </div>
                                            <div>
                                                <h4 className="font-semibold text-base sm:text-lg mb-1 sm:mb-2">Growth Focused</h4>
                                                <p className="text-gray-400 text-sm sm:text-base">Solutions designed to scale with your business</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Contact Section */}
            <section id="contact" className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="w-full max-w-7xl mx-auto">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl md:text-5xl font-bold mb-4">
                            Let's Create Something <span className="bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">Amazing</span>
                        </h2>
                        <p className="text-xl text-gray-400">Ready to turn your vision into reality? Get in touch today!</p>
                    </div>

                    <div className="bg-white/5 backdrop-blur-sm border border-purple-500/20 rounded-3xl p-8 md:p-12">
                         <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-3 gap-6">
                <input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  required
                  className="w-full bg-slate-900/50 border border-purple-500/30 rounded-xl px-6 py-4 focus:outline-none focus:ring-2 focus:ring-purple-500 transition-all"
                />
                <input
                  type="email"
                  name="email"
                  placeholder="Your Email"
                  required
                  className="w-full bg-slate-900/50 border border-purple-500/30 rounded-xl px-6 py-4 focus:outline-none focus:ring-2 focus:ring-purple-500 transition-all"
                />
              <input
                type="text"
                name="phone"
                placeholder="Phone Number (optional)"
                className="w-full bg-slate-900/50 border border-purple-500/30 rounded-xl px-6 py-4 focus:outline-none focus:ring-2 focus:ring-purple-500 transition-all"
              />
              </div>


              <textarea
                name="message"
                rows="6"
                placeholder="Tell us about your project..."
                required
                className="w-full bg-slate-900/50 border border-purple-500/30 rounded-xl px-6 py-4 focus:outline-none focus:ring-2 focus:ring-purple-500 transition-all resize-none"
              />

              <button
                type="submit"
                className="w-full bg-gradient-to-r from-purple-500 to-cyan-500 px-8 py-4 rounded-xl text-lg font-semibold hover:shadow-2xl hover:shadow-purple-500/50 transition-all"
              >
                Send Message
              </button>
            </form>

                        <div className="grid md:grid-cols-4 gap-6 mt-12 pt-12 border-t border-purple-500/20">
                            <div className="text-center">
                                <a href="mailto:aarmilsadarani981@gmail.com" className="block">
                                    <Mail className="w-8 h-8 text-purple-400 mx-auto mb-3" />
                                    <p className="text-gray-400 hover:text-purple-300 transition-colors">
                                        aarmilsadarani981@gmail.com
                                    </p>
                                </a>
                            </div>

                            <div className="text-center">
                                <a href="tel:+916354920939" className="block">
                                    <Phone className="w-8 h-8 text-cyan-400 mx-auto mb-3" />
                                    <p className="text-gray-400 hover:text-cyan-300 transition-colors">
                                        +91 6354920939
                                    </p>
                                </a>
                            </div>

                            <div className="text-center">
                                <a
                                    href="https://wa.me/916354920939?text=Hello!%20I%E2%80%99d%20like%20to%20start%20a%20project%20with%20Mind2Pixel."
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="block"
                                >
                                    <MessageCircle className="w-8 h-8 text-green-400 mx-auto mb-3" />
                                    <p className="text-gray-400 hover:text-green-300 transition-colors">
                                        +91 6354920939  
                                    </p>
                                </a>
                            </div>

                            <div className="text-center">
                                <a
                                    href="https://www.google.com/maps/search/?api=1&query=Ahmedabad,+Gujarat,+IN"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="block"
                                >
                                    <MapPin className="w-8 h-8 text-pink-400 mx-auto mb-3" />
                                    <p className="text-gray-400 hover:text-pink-300 transition-colors">
                                        Ahmedabad, Gujarat, IN
                                    </p>
                                </a>
                            </div>

                        </div>
                    </div>
                </div>
            </section>

            {/* Footer */}
            <footer className="bg-slate-950/50 backdrop-blur-sm border-t border-purple-500/20 py-12 px-6 relative z-10">
                <div className="max-w-7xl mx-auto">
                    <div className="flex flex-col md:flex-row items-center justify-between">
                        <div className="flex items-center space-x-2 mb-4 md:mb-0">
                            <Sparkles className="w-6 h-6 text-purple-400" />
                            <span className="text-xl font-bold bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
                                Mind2Pixel
                            </span>
                        </div>

                        <p className="text-gray-400 text-center md:text-right">
                            © 2024 Mind2Pixel. Transforming ideas into digital excellence.
                        </p>
                    </div>
                </div>
            </footer>
        </div>
    );
}