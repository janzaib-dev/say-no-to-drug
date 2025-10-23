import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { Users, Megaphone, GraduationCap, HandHeart } from "lucide-react";

const Join = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
    skills: "",
    availability: "",
    motivation: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Thank You for Joining Us!",
      description: "We'll contact you soon with next steps.",
    });
    setFormData({ name: "", email: "", phone: "", address: "", skills: "", availability: "", motivation: "" });
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto space-y-12">
          <div className="text-center space-y-4 animate-fade-in">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground">Join Our Team</h1>
            <p className="text-xl text-muted-foreground">
              Be part of the solution. Volunteer to make Thatta drug-free.
            </p>
          </div>

          <Card className="bg-gradient-to-br from-primary/10 to-accent/10 border-primary animate-scale-in">
            <CardHeader className="text-center">
              <CardTitle className="text-2xl">Why Volunteer With Us?</CardTitle>
              <CardDescription className="text-base">
                Your time and skills can save lives, restore hope, and transform our community
              </CardDescription>
            </CardHeader>
          </Card>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              {
                icon: Megaphone,
                title: "Awareness Campaigns",
                description: "Help spread the message in schools, colleges, and communities through talks and events"
              },
              {
                icon: GraduationCap,
                title: "Educational Programs",
                description: "Teach prevention, life skills, and drug awareness to youth and families"
              },
              {
                icon: Users,
                title: "Support Services",
                description: "Provide emotional support, counseling assistance, and peer mentorship"
              },
              {
                icon: HandHeart,
                title: "Community Outreach",
                description: "Connect with families in need, organize events, and build support networks"
              },
            ].map((role, index) => (
              <Card key={index} className="border-2 hover:shadow-lg transition-all animate-slide-in-left" style={{ animationDelay: `${index * 100}ms` }}>
                <CardHeader>
                  <role.icon className="h-10 w-10 text-accent mb-2" />
                  <CardTitle className="text-xl">{role.title}</CardTitle>
                  <CardDescription>{role.description}</CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <Card className="animate-slide-in-left">
              <CardHeader>
                <CardTitle className="text-2xl">Volunteer Registration</CardTitle>
                <CardDescription>
                  Fill out the form below and we'll get in touch with you
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="name">Full Name *</Label>
                    <Input
                      id="name"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      required
                      placeholder="Your name"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="email">Email *</Label>
                    <Input
                      id="email"
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      required
                      placeholder="your@email.com"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="phone">Phone Number *</Label>
                    <Input
                      id="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      required
                      placeholder="+92 XXX XXXXXXX"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="address">Address</Label>
                    <Input
                      id="address"
                      value={formData.address}
                      onChange={(e) => setFormData({ ...formData, address: e.target.value })}
                      placeholder="Your area in Thatta"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="skills">Skills & Experience</Label>
                    <Input
                      id="skills"
                      value={formData.skills}
                      onChange={(e) => setFormData({ ...formData, skills: e.target.value })}
                      placeholder="e.g., Teaching, counseling, social work"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="availability">Availability</Label>
                    <Input
                      id="availability"
                      value={formData.availability}
                      onChange={(e) => setFormData({ ...formData, availability: e.target.value })}
                      placeholder="e.g., Weekends, evenings, 2 hours/week"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="motivation">Why do you want to volunteer? *</Label>
                    <Textarea
                      id="motivation"
                      value={formData.motivation}
                      onChange={(e) => setFormData({ ...formData, motivation: e.target.value })}
                      required
                      placeholder="Tell us what motivates you to join this cause"
                      rows={4}
                    />
                  </div>

                  <Button type="submit" className="w-full" size="lg">
                    Submit Application
                  </Button>
                </form>
              </CardContent>
            </Card>

            <div className="space-y-6 animate-slide-in-right">
              <Card>
                <CardHeader>
                  <CardTitle className="text-xl">What We Look For</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3 text-muted-foreground">
                    <li className="flex items-start space-x-2">
                      <span className="text-primary mt-1">✓</span>
                      <span>Compassion and empathy for people struggling with addiction</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <span className="text-primary mt-1">✓</span>
                      <span>Commitment to making a positive change in Thatta</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <span className="text-primary mt-1">✓</span>
                      <span>Reliability and willingness to dedicate time</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <span className="text-primary mt-1">✓</span>
                      <span>Respect for confidentiality and ethical standards</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <span className="text-primary mt-1">✓</span>
                      <span>Good communication and interpersonal skills</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="bg-accent/5 border-accent">
                <CardHeader>
                  <CardTitle className="text-xl text-accent">Training & Support</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3 text-muted-foreground">
                  <p>We provide comprehensive training to all volunteers:</p>
                  <ul className="space-y-2">
                    <li>• Understanding drug addiction and recovery</li>
                    <li>• Communication and counseling basics</li>
                    <li>• Cultural sensitivity and ethics</li>
                    <li>• Safety protocols and boundaries</li>
                    <li>• Ongoing mentorship and guidance</li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="bg-primary text-primary-foreground">
                <CardContent className="pt-6 text-center space-y-4">
                  <Users className="h-12 w-12 mx-auto" />
                  <p className="text-lg font-semibold">
                    Join 100+ volunteers already making a difference in Thatta
                  </p>
                  <p className="text-sm">
                    Together, we can create a drug-free future for our community
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Join;
