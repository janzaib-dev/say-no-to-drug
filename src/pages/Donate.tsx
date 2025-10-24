import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import { Heart, Shield, Users, GraduationCap } from "lucide-react";

const Donate = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    amount: "",
    message: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Thank You for Your Support!",
      description: "We'll contact you shortly with donation details.",
    });
    setFormData({ name: "", email: "", phone: "", amount: "", message: "" });
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto space-y-12">
          <div className="text-center space-y-4 animate-fade-in">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground">Support Our Mission</h1>
            <p className="text-xl text-muted-foreground">
              Your donation helps save lives and restore families in Thatta
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 animate-scale-in">
            {[
              {
                icon: Shield,
                title: "Prevention",
                description: "Fund awareness programs in schools and communities"
              },
              {
                icon: Heart,
                title: "Treatment",
                description: "Support rehabilitation and medical care for addicts"
              },
              {
                icon: Users,
                title: "Family Support",
                description: "Provide counseling for affected families"
              },
              {
                icon: GraduationCap,
                title: "Education",
                description: "Help children of addicts continue their education"
              },
            ].map((item, index) => (
              <Card key={index} className="text-center border-2 hover:shadow-lg transition-all">
                <CardHeader>
                  <item.icon className="h-10 w-10 text-primary mx-auto mb-2" />
                  <CardTitle className="text-lg">{item.title}</CardTitle>
                  <CardDescription className="text-sm">{item.description}</CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <Card className="animate-slide-in-left">
              <CardHeader>
                <CardTitle className="text-2xl">Make a Donation</CardTitle>
                <CardDescription>
                  Every contribution, no matter how small, makes a difference in someone's life
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
                    <Label htmlFor="amount">Donation Amount (PKR) *</Label>
                    <Input
                      id="amount"
                      type="number"
                      value={formData.amount}
                      onChange={(e) => setFormData({ ...formData, amount: e.target.value })}
                      required
                      placeholder="Enter amount"
                      min="1"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message">Message (Optional)</Label>
                    <Input
                      id="message"
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Any special message or dedication"
                    />
                  </div>

                  <Button type="submit" className="w-full" size="lg">
                    Proceed to Donate
                  </Button>
                </form>
              </CardContent>
            </Card>

            <div className="space-y-6 animate-slide-in-right">
              <Card>
                <CardHeader>
                  <CardTitle className="text-xl">How Your Donation Helps</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  {[
                    { amount: "Rs. 5,000", impact: "Provides educational materials for 10 children" },
                    { amount: "Rs. 10,000", impact: "Funds one family counseling session" },
                    { amount: "Rs. 25,000", impact: "Supports awareness campaign in one school" },
                    { amount: "Rs. 50,000", impact: "Sponsors one month of rehabilitation for an addict" },
                  ].map((item, index) => (
                    <div key={index} className="border-l-4 border-primary pl-4">
                      <p className="font-semibold text-primary">{item.amount}</p>
                      <p className="text-sm text-muted-foreground">{item.impact}</p>
                    </div>
                  ))}
                </CardContent>
              </Card>

              <Card className="bg-accent/5 border-accent">
                <CardHeader>
                  <CardTitle className="text-xl text-accent">Direct Bank Transfer</CardTitle>
                </CardHeader>
                <CardContent className="space-y-2 text-sm">
                  <p><span className="font-semibold">Bank:</span> [Bank Name]</p>
                  <p><span className="font-semibold">Account Title:</span>  Nashe Ke Khilaf Thatha Ke Sath - Thatta</p>
                  <p><span className="font-semibold">Account Number:</span> XXXX-XXXX-XXXX</p>
                  <p><span className="font-semibold">IBAN:</span> PK XX XXXX XXXX XXXX XXXX XXXX</p>
                  <p className="text-muted-foreground pt-2">
                    After transfer, please send proof to our email or WhatsApp for receipt.
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-primary text-primary-foreground">
                <CardContent className="pt-6 text-center">
                  <Heart className="h-12 w-12 mx-auto mb-4" />
                  <p className="text-lg font-semibold">
                    100% of donations go directly to helping families and fighting drug abuse in Thatta
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

export default Donate;
