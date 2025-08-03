import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { 
  Users, 
  CreditCard, 
  BookOpen, 
  MessageSquare, 
  BarChart3, 
  Shield,
  Smartphone,
  Globe
} from "lucide-react";

const Features = () => {
  const features = [
    {
      icon: Users,
      title: "Student Management",
      description: "Complete student records, registration, class allocation, and ZIMSEC-compliant transcripts."
    },
    {
      icon: CreditCard,
      title: "Fee Management",
      description: "Multi-currency support with EcoCash, OneMoney, and Zimswitch integration for seamless payments."
    },
    {
      icon: BookOpen,
      title: "Academic Management",
      description: "Attendance tracking, exam management, report cards, and continuous assessment tools."
    },
    {
      icon: MessageSquare,
      title: "Communication",
      description: "SMS alerts, web notifications, and parent-teacher messaging for real-time updates."
    },
    {
      icon: BarChart3,
      title: "Analytics & Reports",
      description: "Comprehensive dashboards and exportable reports for informed decision making."
    },
    {
      icon: Shield,
      title: "Secure & Reliable",
      description: "99.5% uptime, encrypted data, and role-based access control for data security."
    },
    {
      icon: Smartphone,
      title: "PWA Ready",
      description: "Works offline, installable as app, push notifications - no app store needed."
    },
    {
      icon: Globe,
      title: "Multi-School Support",
      description: "Manage multiple schools from a single platform with separate data isolation."
    }
  ];

  return (
    <section id="features" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Everything Your School Needs
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A comprehensive school management system built specifically for Zimbabwean schools, 
            supporting local payment methods and ZIMSEC standards.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <Card key={index} className="border-border hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="h-12 w-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <feature.icon className="h-6 w-6 text-primary" />
                </div>
                <CardTitle className="text-lg">{feature.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-sm leading-relaxed">
                  {feature.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Additional Feature Highlight */}
        <div className="mt-16 bg-gradient-to-r from-primary/5 to-accent/5 rounded-2xl p-8 md:p-12">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
                Built for Zimbabwe, Built for Schools
              </h3>
              <p className="text-muted-foreground mb-6">
                Our system understands the unique needs of Zimbabwean education - from ZIMSEC 
                requirements to local payment methods. Every feature is designed with your 
                school's workflow in mind.
              </p>
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <div className="h-2 w-2 bg-accent rounded-full"></div>
                  <span className="text-sm text-foreground">ZIMSEC-compliant report cards</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="h-2 w-2 bg-accent rounded-full"></div>
                  <span className="text-sm text-foreground">ZWL & USD multi-currency support</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="h-2 w-2 bg-accent rounded-full"></div>
                  <span className="text-sm text-foreground">Local payment gateway integration</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="h-2 w-2 bg-accent rounded-full"></div>
                  <span className="text-sm text-foreground">Offline-first PWA technology</span>
                </div>
              </div>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-lg">
              <div className="text-center">
                <div className="text-3xl font-bold text-primary mb-2">30 Days</div>
                <div className="text-muted-foreground mb-4">Free Trial</div>
                <div className="text-sm text-foreground">
                  Try all features risk-free with full support
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;