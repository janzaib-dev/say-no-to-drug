import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { Mail, Phone, MapPin, Clock, MessageSquare } from "lucide-react";

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Message Sent!",
      description: "Thank you for reaching out. We'll respond within 24 hours.",
    });
    setFormData({ name: "", email: "", phone: "", subject: "", message: "" });
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto space-y-12">
          <div className="text-center space-y-4 animate-fade-in">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground">Contact Us</h1>
            <p className="text-xl text-muted-foreground">
              Have questions? Need help? We're here for you.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 animate-scale-in">
            {[
              {
                icon: Phone,
                title: "Phone",
                info: "+92 XXX XXXXXXX",
                subinfo: "24/7 Helpline"
              },
              {
                icon: Mail,
                title: "Email",
                info: "info@Thatta Anti-Narcotics.pk",
                subinfo: "Response within 24h"
              },
              {
                icon: MapPin,
                title: "Location",
                info: "Thatta, Sindh",
                subinfo: "Pakistan"
              },
              {
                icon: Clock,
                title: "Office Hours",
                info: "Mon-Sat: 9AM-6PM",
                subinfo: "Sunday: Closed"
              },
            ].map((item, index) => (
              <Card key={index} className="text-center border-2 hover:shadow-lg transition-all">
                <CardHeader>
                  <item.icon className="h-10 w-10 text-primary mx-auto mb-2" />
                  <CardTitle className="text-lg">{item.title}</CardTitle>
                  <CardDescription>
                    <p className="font-semibold text-foreground">{item.info}</p>
                    <p className="text-xs">{item.subinfo}</p>
                  </CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <Card className="animate-slide-in-left">
              <CardHeader>
                <CardTitle className="text-2xl flex items-center gap-2">
                  <MessageSquare className="h-7 w-7 text-primary" />
                  Send Us a Message
                </CardTitle>
                <CardDescription>
                  Fill out the form and we'll get back to you as soon as possible
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
                    <Label htmlFor="phone">Phone Number</Label>
                    <Input
                      id="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="+92 XXX XXXXXXX"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="subject">Subject *</Label>
                    <Input
                      id="subject"
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      required
                      placeholder="What is this about?"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message">Message *</Label>
                    <Textarea
                      id="message"
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      required
                      placeholder="Write your message here..."
                      rows={5}
                    />
                  </div>

                  <Button type="submit" className="w-full" size="lg">
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>

            <div className="space-y-6 animate-slide-in-right">
              <Card>
                <CardHeader>
                  <CardTitle className="text-xl">Quick Links</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  {[
                    { label: "Emergency Helpline", info: "Call 115 / 1122 for immediate help" },
                    { label: "WhatsApp Support", info: "+92 XXX XXXXXXX" },
                    { label: "Social Media", info: "@saynotodrugsthatta" },
                    { label: "Office Address", info: "Main Road, Thatta, Sindh, Pakistan" },
                  ].map((item, index) => (
                    <div key={index} className="border-l-4 border-primary pl-4">
                      <p className="font-semibold text-foreground">{item.label}</p>
                      <p className="text-sm text-muted-foreground">{item.info}</p>
                    </div>
                  ))}
                </CardContent>
              </Card>

              <Card className="bg-primary/5 border-primary">
                <CardHeader>
                  <CardTitle className="text-xl text-primary">Need Immediate Help?</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-muted-foreground">
                    If you or someone you know is in crisis, please don't wait. Reach out immediately:
                  </p>
                  <div className="space-y-2">
                    <Button className="w-full" size="lg">
                      <Phone className="mr-2 h-5 w-5" />
                      Call Emergency: 115
                    </Button>
                    <Button variant="outline" className="w-full" size="lg">
                      <MessageSquare className="mr-2 h-5 w-5" />
                      WhatsApp: +92 XXX XXXXXXX
                    </Button>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-accent text-accent-foreground">
                <CardContent className="pt-6 text-center space-y-4">
                  <Mail className="h-12 w-12 mx-auto" />
                  <p className="text-lg font-semibold">
                    All communications are confidential and treated with respect
                  </p>
                  <p className="text-sm opacity-90">
                    We understand the sensitivity of these matters and ensure complete privacy
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

export default Contact;
