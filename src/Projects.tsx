import { useState, useEffect } from 'react';
import { Menu, X, Sparkles, ArrowRight, ExternalLink, ArrowLeft } from 'lucide-react';

export default function Mind2PixelProjects() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeFilter, setActiveFilter] = useState('all');
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    const handleMouseMove = (e: MouseEvent) => {

      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    
    window.addEventListener('scroll', handleScroll);
    window.addEventListener('mousemove', handleMouseMove);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  const projects = [
    {
      id: 1,
      title: "Steller Space Reality",
      category: "web",
      description: "Modern real estate platform with property listings and advanced search functionality",
      image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=800&h=600&fit=crop",
      technologies: ["React.js"],
      liveUrl: "https://stellarspacerealty.com/",
      color: "from-blue-500 to-cyan-500"
    },
    {
      id: 2,
      title: "Bharat Organics (NCOL)",
      category: "web",
      description: "Organic products showcase website with clean and responsive design",
      image: "https://images.unsplash.com/photo-1542838132-92c53300491e?w=800&h=600&fit=crop",
      technologies: ["HTML", "CSS", "Bootstrap"],
      liveUrl: "https://bharatorganics.ncol.coop/index",
      color: "from-green-500 to-emerald-500"
    },
    {
      id: 3,
      title: "Amul Warehouse Management System",
      category: "web",
      description: "Comprehensive warehouse management solution for inventory tracking and logistics",
      image: "https://images.unsplash.com/photo-1553413077-190dd305871c?w=800&h=600&fit=crop",
      technologies: ["HTML", "CSS", "Bootstrap"],
      liveUrl: "https://wms.amul.in/",
      color: "from-orange-500 to-red-500"
    },
    {
      id: 4,
      title: "Amul Catalog",
      category: "web",
      description: "Interactive product catalog showcasing Amul's extensive product range",
      image: "https://images.unsplash.com/photo-1534723328310-e82dad3ee43f?w=800&h=600&fit=crop",
      technologies: ["React.js"],
      liveUrl: "https://catalog.amul.in/",
      color: "from-yellow-500 to-orange-500"
    },
    {
      id: 5,
      title: "Ambika Salt",
      category: "web",
      description: "Corporate website for salt manufacturing company with product information",
      image: "https://images.unsplash.com/photo-1581093588401-fbb62a02f120?w=800&h=600&fit=crop",
      technologies: ["React.js"],
      liveUrl: "http://103.48.42.115/ambicasalt/index",
      color: "from-cyan-500 to-blue-500"
    },
    {
      id: 6,
      title: "NCEL Trading Platform",
      category: "web",
      description: "Advanced trading platform with real-time data and secure transactions",
      image: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=800&h=600&fit=crop",
      technologies: ["React.js"],
      liveUrl: "https://trade.ncel.coop/",
      color: "from-indigo-500 to-purple-500"
    },
    {
      id: 7,
      title: "S3M Consultants",
      category: "web",
      description: "Professional consulting firm website with service portfolios and client testimonials",
      image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&h=600&fit=crop",
      technologies: ["React.js"],
      liveUrl: "http://103.48.42.115/S3M/",
      color: "from-purple-500 to-pink-500"
    },
    {
      id: 8,
      title: "Customer Complaint Management System (CCMS)",
      category: "web",
      description: "Streamlined complaint tracking and resolution system for customer service",
      image: "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?w=800&h=600&fit=crop",
      technologies: ["React.js"],
      liveUrl: "http://103.19.248.29/ccms",
      color: "from-red-500 to-orange-500"
    },
    {
      id: 9,
      title: "Vendor Management System",
      category: "web",
      description: "Complete vendor lifecycle management platform for GCMMF",
      image: "https://images.unsplash.com/photo-1557804506-669a67965ba0?w=800&h=600&fit=crop",
      technologies: ["HTML", "CSS", "Bootstrap"],
      liveUrl: "https://gcmmfvendor.amul.in/",
      color: "from-teal-500 to-cyan-500"
    },
    {
      id: 10,
      title: "Chat And Chill",
      category: "web",
      description: "Real-time chat application with modern UI and seamless messaging experience",
      image: "https://images.unsplash.com/photo-1611606063065-ee7946f0787a?w=800&h=600&fit=crop",
      technologies: ["React.js"],
      liveUrl: "https://chat-and-chill.netlify.app/",
      color: "from-pink-500 to-rose-500"
    },
    {
      id: 11,
      title: "Keshav Interior",
      category: "Web",
      description: "Elegant interior design showcase website with portfolio and service details",
      image: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=800&h=600&fit=crop",
      technologies: ["WordPress"],
      liveUrl: "https://keshavinterior.com/",
      color: "from-amber-500 to-orange-500"
    },
    {
      id: 12,
      title: "Music Player",
      category: "web",
      description: "Feature-rich music player with playlist management and audio controls",
      image: "https://images.unsplash.com/photo-1511379938547-c1f69419868d?w=800&h=600&fit=crop",
      technologies: ["React.js"],
      liveUrl: "https://aarmil-music-player.netlify.app/",
      color: "from-violet-500 to-purple-500"
    },
    {
      id: 13,
      title: "Restaurant Order Management System",
      category: "web",
      description: "Comprehensive ordering system for restaurants with menu management and tracking",
      image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=800&h=600&fit=crop",
      technologies: ["React.js"],
      liveUrl: "https://restaurant-order-management-system.netlify.app/",
      color: "from-red-500 to-pink-500"
    },
    {
      id: 14,
      title: "Queueless",
      category: "web",
      description: "Smart queue management system eliminating wait times with digital solutions",
      image: "https://images.unsplash.com/photo-1556761175-4b46a572b786?w=800&h=600&fit=crop",
      technologies: ["React.js"],
      liveUrl: "https://queueless.co.in",
      color: "from-emerald-500 to-teal-500"
    },
    {
      id: 15,
      title: "Admin Panel - Internal Management Tool",
      category: "uiux",
      description: "Comprehensive admin dashboard with data visualization and user management features",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop",
      technologies: ["Figma", "UI/UX Design"],
      liveUrl: "https://www.figma.com/proto/Hb9THywRVfiqvqzuMrj0Fc/Admin-Panel--Internal-Management-Tool--Community-?node-id=233-3631&t=64nO0uCX4TRpcJvK-0&scaling=min-zoom&content-scaling=fixed&page-id=0%3A1&starting-point-node-id=233%3A4089",
      color: "from-blue-500 to-indigo-500"
    },
    {
      id: 16,
      title: "Fitness Application Design",
      category: "uiux",
      description: "Modern fitness app with workout tracking, nutrition plans, and progress monitoring",
      image: "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?w=800&h=600&fit=crop",
      technologies: ["Figma", "UI/UX Design", "Prototyping"],
      liveUrl: "https://www.figma.com/proto/IzdJJ7HpcHK7sopIC7PAl6/Fitness-Application-Design---Prototypes--Community-?node-id=46-3588&t=OWb4mPdcCRq5NJTn-0&scaling=scale-down&content-scaling=fixed&page-id=0%3A1&starting-point-node-id=1%3A1404",
      color: "from-green-500 to-teal-500"
    },
    {
      id: 17,
      title: "Portfolio Website Design",
      category: "uiux",
      description: "Creative portfolio website design showcasing modern layouts and interactions",
      image: "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=800&h=600&fit=crop",
      technologies: ["Figma", "UI/UX Design"],
      liveUrl: "https://www.figma.com/proto/uQMphwApIXHGTN3PtkXIZ6/My-website-project--Community-?node-id=3-75&t=TMOZMdJi7cGdEowR-0&scaling=min-zoom&content-scaling=fixed&page-id=0%3A1&starting-point-node-id=3%3A10669",
      color: "from-purple-500 to-pink-500"
    },
    {
      id: 18,
      title: "Uber App Redesign",
      category: "uiux",
      description: "Modern ride-sharing app design with enhanced user experience and intuitive navigation",
      image: "https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?w=800&h=600&fit=crop",
      technologies: ["Figma", "UI/UX Design", "Prototyping"],
      liveUrl: "https://www.figma.com/proto/sqD25rIpcvfDR9P0nT83yj/UBER-APP-DESIGN---PROTOTYPE--Community-?node-id=33-6&t=MyUmQDEyg5zkV7lD-0&scaling=scale-down&content-scaling=fixed&page-id=0%3A1",
      color: "from-slate-600 to-slate-800"
    },
    {
      id: 19,
      title: "Graphic Design Portfolio",
      category: "design",
      description: "Collection of creative graphic design projects including logos, branding, and marketing materials",
      image: "https://images.unsplash.com/photo-1626785774573-4b799315345d?w=800&h=600&fit=crop",
      technologies: ["Photoshop", "Illustrator", "CorelDRAW"],
      liveUrl: "https://drive.google.com/drive/folders/1_TjzkH2yCZ7Iy_wAw9AfGR9-jEf3tuyL",
      color: "from-rose-500 to-orange-500"
    }
  ];

  const categories = [
    { id: 'all', label: 'All Projects' },
    { id: 'web', label: 'Web Development' },
    { id: 'uiux', label: 'UI/UX Design' },
    { id: 'design', label: 'Graphic Design' }
  ];

  const filteredProjects = activeFilter === 'all' 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

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
              <a href="/" className="hover:text-purple-400 transition-colors">Home</a>
              <a href="#" className="text-purple-400 font-semibold">Projects</a>
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
              <a href="#projects" className="block text-purple-400 font-semibold">Projects</a>
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
      <section className="relative min-h-[50vh] flex items-center justify-center px-4 sm:px-6 lg:px-8 pt-32 pb-12">
        <div className="w-full max-w-7xl mx-auto text-center z-10">
          <div className="mb-8">
            <a href="#home" className="inline-flex items-center text-purple-400 hover:text-purple-300 transition-colors mb-6">
              <ArrowLeft className="w-5 h-5 mr-2" />
              Back to Home
            </a>
          </div>
          
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
            Our <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400 bg-clip-text text-transparent">Portfolio</span>
          </h1>
          
          <p className="text-lg sm:text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Showcasing 19+ live websites, UI/UX designs, and creative projects we've built with passion and precision
          </p>
        </div>
      </section>

      {/* Projects Section */}
      <section className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="w-full max-w-7xl mx-auto">
          {/* Filter Buttons */}
          <div className="flex flex-wrap justify-center gap-3 sm:gap-4 mb-12">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveFilter(cat.id)}
                className={`px-4 sm:px-6 py-2 sm:py-3 rounded-full text-sm sm:text-base font-semibold transition-all ${
                  activeFilter === cat.id
                    ? 'bg-gradient-to-r from-purple-500 to-cyan-500 text-white shadow-lg shadow-purple-500/50'
                    : 'bg-white/5 border border-purple-500/30 text-gray-300 hover:bg-white/10'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>

          {/* Projects Grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {filteredProjects.map((project) => (
              <div
                key={project.id}
                className="group relative bg-white/5 backdrop-blur-sm border border-purple-500/20 rounded-2xl overflow-hidden hover:bg-white/10 transition-all duration-300 hover:scale-105"
              >
                {/* Project Image */}
                <div className="relative h-48 sm:h-56 overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className={`absolute inset-0 bg-gradient-to-br ${project.color} opacity-0 group-hover:opacity-30 transition-opacity`} />
                  
                  {/* Overlay on Hover */}
                  <div className="absolute inset-0 bg-slate-950/80 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-4">
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-purple-500 hover:bg-purple-600 p-3 rounded-full transition-colors transform hover:scale-110"
                      onClick={(e) => e.stopPropagation()}
                    >
                      <ExternalLink className="w-5 h-5" />
                    </a>
                  </div>
                </div>

                {/* Project Info */}
                <div className="p-6">
                  <h3 className="text-xl sm:text-2xl font-bold mb-2 group-hover:text-purple-400 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-gray-400 text-sm sm:text-base mb-4">
                    {project.description}
                  </p>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech, index) => (
                      <span
                        key={index}
                        className="text-xs px-3 py-1 rounded-full bg-purple-500/20 text-purple-300 border border-purple-500/30"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* View Project Link */}
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-cyan-400 font-semibold group-hover:translate-x-2 transition-transform"
                  >
                    View Live Site
                    <ArrowRight className="ml-2 w-4 h-4" />
                  </a>
                </div>
              </div>
            ))}
          </div>

          {/* No Projects Message */}
          {filteredProjects.length === 0 && (
            <div className="text-center py-12">
              <p className="text-gray-400 text-lg">No projects found in this category.</p>
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <div className="bg-gradient-to-br from-purple-500/10 to-cyan-500/10 backdrop-blur-sm border border-purple-500/20 rounded-3xl p-12">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6">
              Ready to Start Your <span className="bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">Project?</span>
            </h2>
            <p className="text-lg sm:text-xl text-gray-300 mb-8">
              Let's create something amazing together. Your vision, our expertise.
            </p>
                      <button
                          onClick={() => {
                              const phoneNumber = "916354920939"; // replace with your number
                              const message = encodeURIComponent("Hello! I’d like to start a project with Mind2Pixel.");
                              window.open(`https://wa.me/${phoneNumber}?text=${message}`, "_blank");
                          }}
                          className="bg-gradient-to-r from-purple-500 to-cyan-500 px-8 py-4 rounded-full text-lg font-semibold hover:shadow-2xl hover:shadow-purple-500/50 transition-all inline-flex items-center"
                      >
                          Get in Touch
                          <ArrowRight className="ml-2" />
                      </button>

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