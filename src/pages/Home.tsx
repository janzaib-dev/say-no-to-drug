import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Shield, Users, Heart, TrendingDown, AlertCircle, HandHeart } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import heroImage from "@/assets/hero-community.jpg";

const Home = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary via-primary to-accent text-white overflow-hidden">
        <div className="absolute inset-0 bg-black/50">
          <img src={heroImage} alt="Thatta Community" className="w-full h-full object-cover opacity-40" />
        </div>
        <div className="container mx-auto px-4 py-24 md:py-32 relative z-10">
          <div className="max-w-3xl mx-auto text-center space-y-6 animate-fade-in">
            <h1 className="text-4xl md:text-6xl font-bold leading-tight">
              Say No to Drugs in Thatta
            </h1>
            <p className="text-lg md:text-xl text-white/90">
              Together, we can save families, restore hope, and build a drug-free community in Thatta, Sindh.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
              <Link to="/help">
                <Button size="lg" variant="secondary" className="w-full sm:w-auto">
                  Get Help Now
                </Button>
              </Link>
              <Link to="/donate">
                <Button size="lg" variant="outline" className="w-full sm:w-auto bg-white/10 border-white text-white hover:bg-white hover:text-primary">
                  Support Our Cause
                </Button>
              </Link>
            </div>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-background to-transparent"></div>
      </section>

      {/* Statistics Section */}
      <section className="container mx-auto px-4 py-16 -mt-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            { icon: AlertCircle, title: "Rising Crisis", description: "Drug abuse affecting thousands in Thatta" },
            { icon: Users, title: "Families Impacted", description: "Countless homes broken by addiction" },
            { icon: TrendingDown, title: "Youth at Risk", description: "Young generation needs protection" },
          ].map((stat, index) => (
            <Card key={index} className="border-2 hover:shadow-lg transition-shadow animate-scale-in" style={{ animationDelay: `${index * 100}ms` }}>
              <CardHeader>
                <stat.icon className="h-10 w-10 text-primary mb-2" />
                <CardTitle>{stat.title}</CardTitle>
                <CardDescription>{stat.description}</CardDescription>
              </CardHeader>
            </Card>
          ))}
        </div>
      </section>

      {/* About Section */}
      <section className="container mx-auto px-4 py-16">
        <div className="max-w-3xl mx-auto text-center space-y-4 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">Our Mission</h2>
          <p className="text-lg text-muted-foreground">
            We are a community-driven initiative dedicated to combating drug abuse in Thatta district. 
            Our goal is to educate, support, and rehabilitate individuals and families affected by drugs, 
            while preventing youth from falling into addiction.
          </p>
        </div>
      </section>

      {/* Key Areas Section */}
      <section className="bg-secondary/20 py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-foreground">How We Help</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: Shield,
                title: "Prevention Programs",
                description: "Educational campaigns in schools and communities to prevent drug use among youth.",
                link: "/crisis"
              },
              {
                icon: Heart,
                title: "Family Support",
                description: "Counseling and rehabilitation programs for families affected by drug addiction.",
                link: "/impact"
              },
              {
                icon: HandHeart,
                title: "Community Action",
                description: "Volunteer programs and awareness drives to create a drug-free environment.",
                link: "/join"
              },
            ].map((area, index) => (
              <Card key={index} className="hover:shadow-xl transition-all hover:-translate-y-1 animate-slide-in-left" style={{ animationDelay: `${index * 150}ms` }}>
                <CardHeader>
                  <area.icon className="h-12 w-12 text-accent mb-4" />
                  <CardTitle className="text-xl">{area.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="mb-4">{area.description}</CardDescription>
                  <Link to={area.link}>
                    <Button variant="link" className="p-0 text-primary">
                      Learn More →
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="container mx-auto px-4 py-16">
        <Card className="bg-gradient-to-br from-accent to-accent/80 text-white border-0 shadow-xl">
          <CardHeader className="text-center space-y-4 py-12">
            <CardTitle className="text-3xl md:text-4xl font-bold">Join the Movement</CardTitle>
            <CardDescription className="text-white/90 text-lg max-w-2xl mx-auto">
              Your support can save lives and restore families. Whether through volunteering, donating, 
              or spreading awareness - every action counts.
            </CardDescription>
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
              <Link to="/join">
                <Button size="lg" variant="secondary" className="w-full sm:w-auto">
                  Become a Volunteer
                </Button>
              </Link>
              <Link to="/donate">
                <Button size="lg" variant="outline" className="w-full sm:w-auto bg-white/10 border-white text-white hover:bg-white hover:text-accent">
                  Make a Donation
                </Button>
              </Link>
            </div>
          </CardHeader>
        </Card>
      </section>

      <Footer />
    </div>
  );
};

export default Home;
