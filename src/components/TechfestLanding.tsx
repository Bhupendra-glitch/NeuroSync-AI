import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

gsap.registerPlugin(ScrollTrigger);

const TechfestLanding = () => {
  const navRef = useRef<HTMLElement>(null);
  const heroRef = useRef<HTMLElement>(null);
  const aboutRef = useRef<HTMLElement>(null);
  const featuresRef = useRef<HTMLElement>(null);
  const ctaRef = useRef<HTMLElement>(null);

  useEffect(() => {
    // Navbar slide-in animation
    if (navRef.current) {
      gsap.fromTo(
        navRef.current,
        { y: -100, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.8, ease: "power2.out" }
      );
    }

    // Hero section animations
    if (heroRef.current) {
      const tl = gsap.timeline();
      tl.fromTo(
        ".hero-subtitle",
        { y: 50, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.8, delay: 0.3 }
      )
      .fromTo(
        ".hero-description",
        { y: 30, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.6 }
      )
      .fromTo(
        ".hero-buttons",
        { y: 30, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.6 }
      );
    }

    // Scroll-triggered animations
    const sections = [aboutRef.current, featuresRef.current, ctaRef.current];
    sections.forEach((section) => {
      if (section) {
        gsap.fromTo(
          section.children,
          { y: 60, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.8,
            stagger: 0.2,
            ease: "power2.out",
            scrollTrigger: {
              trigger: section,
              start: "top 80%",
              end: "bottom 20%",
              toggleActions: "play none none reverse",
            },
          }
        );
      }
    });

    // Floating particles animation
    const particles = document.querySelectorAll('.floating-particle');
    particles.forEach((particle, index) => {
      gsap.to(particle, {
        y: "random(-20, 20)",
        x: "random(-10, 10)",
        rotation: "random(-180, 180)",
        duration: "random(3, 6)",
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
        delay: index * 0.1,
      });
    });

    return () => {
      ScrollTrigger.getAll().forEach(t => t.kill());
    };
  }, []);

  return (
    <div className="min-h-screen bg-background text-foreground relative overflow-hidden">
      {/* Floating Particles Background */}
      {[...Array(20)].map((_, i) => (
        <div
          key={i}
          className="floating-particle"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            animationDelay: `${Math.random() * 6}s`,
          }}
        />
      ))}

      {/* Navbar */}
      <nav
        ref={navRef}
        className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-lg border-b border-border"
      >
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-r from-primary to-secondary rounded-lg"></div>
              <span className="text-xl font-bold gradient-text">NeuroSync AI</span>
            </div>
            <div className="hidden md:flex items-center space-x-8">
              <a href="#about" className="hover:text-primary transition-colors">About</a>
              <a href="#features" className="hover:text-primary transition-colors">Features</a>
              <a href="#contact" className="hover:text-primary transition-colors">Contact</a>
              <Button variant="outline" className="hover:animate-pulse-glow">
                Join Beta
              </Button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section ref={heroRef} className="min-h-screen flex items-center justify-center relative pt-20">
        <div className="container mx-auto px-6 text-center">
          <Badge className="mb-6 bg-primary/20 text-primary border-primary">
            Techfest IIT Bombay 2025 Startup Showcase
          </Badge>
          
          <h1 
            className="glitch gradient-text mb-6"
            data-text="NeuroSync AI"
          >
            NeuroSync AI
          </h1>
          
          <p className="hero-subtitle text-2xl md:text-3xl font-semibold mb-4 text-secondary">
            The Future of Neural Interface Technology
          </p>
          
          <p className="hero-description text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
            Revolutionizing human-computer interaction through advanced brain-computer interfaces. 
            Experience seamless control of digital environments with just your thoughts.
          </p>
          
          <div className="hero-buttons flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              className="bg-gradient-to-r from-primary to-secondary hover:shadow-lg hover:scale-105 transition-all duration-300 hover:animate-pulse-glow"
            >
              Request Demo
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              className="border-primary text-primary hover:bg-primary hover:text-primary-foreground hover:scale-105 transition-all duration-300"
            >
              Watch Demo
            </Button>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section ref={aboutRef} id="about" className="py-20">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 gradient-text">About NeuroSync AI</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Founded by IIT Bombay researchers, we're pioneering the next generation of neural interfaces
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="p-6 bg-card/50 backdrop-blur border-border hover:border-primary transition-colors">
              <div className="w-12 h-12 bg-gradient-to-r from-primary to-secondary rounded-lg mb-4"></div>
              <h3 className="text-xl font-semibold mb-2">Advanced Research</h3>
              <p className="text-muted-foreground">
                Built on cutting-edge neuroscience research from IIT Bombay's top labs
              </p>
            </Card>
            
            <Card className="p-6 bg-card/50 backdrop-blur border-border hover:border-primary transition-colors">
              <div className="w-12 h-12 bg-gradient-to-r from-secondary to-accent rounded-lg mb-4"></div>
              <h3 className="text-xl font-semibold mb-2">Real-time Processing</h3>
              <p className="text-muted-foreground">
                Process neural signals in real-time with 99.7% accuracy using our AI algorithms
              </p>
            </Card>
            
            <Card className="p-6 bg-card/50 backdrop-blur border-border hover:border-primary transition-colors">
              <div className="w-12 h-12 bg-gradient-to-r from-accent to-primary rounded-lg mb-4"></div>
              <h3 className="text-xl font-semibold mb-2">Safe & Non-invasive</h3>
              <p className="text-muted-foreground">
                Completely safe, non-invasive technology that works with existing devices
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section ref={featuresRef} id="features" className="py-20 bg-muted/20">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 gradient-text">Revolutionary Features</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Experience the future of human-computer interaction
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { title: "Thought Control", desc: "Control devices with pure thought" },
              { title: "Instant Response", desc: "Sub-millisecond response times" },
              { title: "Learning AI", desc: "Adapts to your unique brain patterns" },
              { title: "Universal Compatibility", desc: "Works with any digital device" }
            ].map((feature, index) => (
              <Card key={index} className="p-6 text-center bg-card/30 backdrop-blur border-border hover:border-primary transition-all duration-300 hover:shadow-lg">
                <div className="text-3xl mb-4">🧠</div>
                <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
                <p className="text-sm text-muted-foreground">{feature.desc}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section ref={ctaRef} className="py-20">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold mb-4 gradient-text">Join the Neural Revolution</h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Be among the first to experience the future of human-computer interaction. 
            Limited beta access available now.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg"
              className="bg-gradient-to-r from-primary to-secondary hover:shadow-lg hover:scale-105 transition-all duration-300 hover:animate-pulse-glow"
            >
              Apply for Beta Access
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              className="border-secondary text-secondary hover:bg-secondary hover:text-secondary-foreground hover:scale-105 transition-all duration-300"
            >
              Learn More
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 border-t border-border">
        <div className="container mx-auto px-6 text-center">
          <div className="flex items-center justify-center space-x-2 mb-4">
            <div className="w-6 h-6 bg-gradient-to-r from-primary to-secondary rounded"></div>
            <span className="text-lg font-semibold gradient-text">NeuroSync AI</span>
          </div>
          <p className="text-muted-foreground">
            © 2025 NeuroSync AI. Proudly presented at Techfest IIT Bombay.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default TechfestLanding;