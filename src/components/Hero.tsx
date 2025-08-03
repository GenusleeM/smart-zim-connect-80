import { Button } from "@/components/ui/button";
import { GraduationCap, Users, BookOpen, CreditCard } from "lucide-react";
import heroImage from "@/assets/hero-school.jpg";

const Hero = () => {
  return (
    <div className="relative min-h-screen bg-gradient-to-br from-primary to-primary-dark">
      {/* Background Image Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-20"
        style={{ backgroundImage: `url(${heroImage})` }}
      />
      
      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 pt-20 pb-16">
        <div className="grid lg:grid-cols-2 gap-12 items-center min-h-[80vh]">
          {/* Left Column - Text Content */}
          <div className="text-center lg:text-left">
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 mb-6">
              <GraduationCap className="h-5 w-5 text-accent" />
              <span className="text-white text-sm font-medium">Built for Zimbabwe Schools</span>
            </div>
            
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
              Smart<span className="text-accent">School</span>
              <br />
              Zimbabwe
            </h1>
            
            <p className="text-xl text-white/90 mb-8 max-w-2xl">
              The complete web-based school management system designed for Zimbabwean schools. 
              Manage students, fees, academics, and communication all in one platform.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <Button size="lg" variant="secondary" className="text-lg px-8">
                Get Started Free
              </Button>
              <Button size="lg" variant="outline" className="text-lg px-8 border-white text-white hover:bg-white hover:text-primary">
                Watch Demo
              </Button>
            </div>
            
            {/* Feature Pills */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 text-center">
                <Users className="h-8 w-8 text-accent mx-auto mb-2" />
                <div className="text-white text-sm font-medium">Student Management</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 text-center">
                <CreditCard className="h-8 w-8 text-accent mx-auto mb-2" />
                <div className="text-white text-sm font-medium">Fee Management</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 text-center">
                <BookOpen className="h-8 w-8 text-accent mx-auto mb-2" />
                <div className="text-white text-sm font-medium">ZIMSEC Ready</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 text-center">
                <GraduationCap className="h-8 w-8 text-accent mx-auto mb-2" />
                <div className="text-white text-sm font-medium">Multi-School</div>
              </div>
            </div>
          </div>
          
          {/* Right Column - Stats or Image */}
          <div className="lg:block">
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
              <h3 className="text-2xl font-bold text-white mb-6">Trusted by Schools Across Zimbabwe</h3>
              
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-accent">200+</div>
                  <div className="text-white/80 text-sm">Schools Using</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-accent">50k+</div>
                  <div className="text-white/80 text-sm">Students Managed</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-accent">95%</div>
                  <div className="text-white/80 text-sm">Digital Payments</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-accent">99.5%</div>
                  <div className="text-white/80 text-sm">Uptime</div>
                </div>
              </div>
              
              <div className="mt-8 p-4 bg-white/5 rounded-lg border border-white/10">
                <p className="text-white/90 text-sm italic">
                  "SmartSchool has transformed how we manage our school. Everything is now digital and efficient."
                </p>
                <div className="text-accent text-xs mt-2">- Headmaster, Harare High School</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;