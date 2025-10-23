import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Phone, Hospital, Users, Heart, Shield, AlertCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

const Help = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto space-y-12">
          <div className="text-center space-y-4 animate-fade-in">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground">Get Help Now</h1>
            <p className="text-xl text-muted-foreground">
              Recovery is possible. Support is available. You don't have to face this alone.
            </p>
          </div>

          <Card className="bg-primary/10 border-primary animate-scale-in">
            <CardHeader>
              <CardTitle className="text-2xl text-primary flex items-center gap-2">
                <AlertCircle className="h-8 w-8" />
                Emergency Help
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-muted-foreground">
                If you or someone you know is in immediate danger due to drug overdose or severe withdrawal, 
                please call emergency services or visit the nearest hospital immediately.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="flex items-center gap-2">
                  <Phone className="h-5 w-5" />
                  Call Emergency: 115 / 1122
                </Button>
              </div>
            </CardContent>
          </Card>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              {
                icon: Hospital,
                title: "Treatment Centers",
                description: "Professional rehabilitation facilities in and around Thatta offering medical detox and long-term recovery programs.",
                contact: "Contact us for referrals"
              },
              {
                icon: Users,
                title: "Support Groups",
                description: "Join peer support groups where recovering addicts and their families share experiences and encouragement.",
                contact: "Weekly meetings in Thatta"
              },
              {
                icon: Phone,
                title: "Helpline",
                description: "24/7 confidential helpline for advice, support, and crisis intervention. Trained counselors ready to help.",
                contact: "+92 XXX XXXXXXX"
              },
              {
                icon: Heart,
                title: "Family Counseling",
                description: "Professional counseling services for families affected by addiction to heal and rebuild relationships.",
                contact: "Schedule an appointment"
              },
            ].map((resource, index) => (
              <Card key={index} className="border-2 hover:shadow-lg transition-all animate-slide-in-left" style={{ animationDelay: `${index * 100}ms` }}>
                <CardHeader>
                  <resource.icon className="h-10 w-10 text-accent mb-2" />
                  <CardTitle>{resource.title}</CardTitle>
                  <CardDescription>{resource.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm font-semibold text-primary">{resource.contact}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          <Card className="animate-fade-in">
            <CardHeader>
              <CardTitle className="text-2xl">Steps to Recovery</CardTitle>
            </CardHeader>
            <CardContent>
              <ol className="space-y-4">
                {[
                  {
                    step: "1. Acknowledge the Problem",
                    description: "The first step is admitting that help is needed. This takes courage but it's the most important step."
                  },
                  {
                    step: "2. Reach Out for Help",
                    description: "Contact a helpline, visit a treatment center, or talk to a trusted person. Don't try to do this alone."
                  },
                  {
                    step: "3. Medical Assessment",
                    description: "Get a professional evaluation to determine the best treatment approach for your specific situation."
                  },
                  {
                    step: "4. Detoxification",
                    description: "Safely remove drugs from your system under medical supervision to manage withdrawal symptoms."
                  },
                  {
                    step: "5. Treatment Program",
                    description: "Engage in therapy, counseling, and rehabilitation programs to address the root causes of addiction."
                  },
                  {
                    step: "6. Ongoing Support",
                    description: "Join support groups, continue counseling, and build a network to maintain long-term recovery."
                  },
                ].map((item, index) => (
                  <li key={index} className="border-l-4 border-primary pl-4">
                    <h3 className="font-semibold text-foreground mb-1">{item.step}</h3>
                    <p className="text-muted-foreground">{item.description}</p>
                  </li>
                ))}
              </ol>
            </CardContent>
          </Card>

          <Card className="bg-accent/5 border-accent animate-slide-in-right">
            <CardHeader>
              <CardTitle className="text-2xl text-accent flex items-center gap-2">
                <Shield className="h-8 w-8" />
                For Family Members
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 text-muted-foreground">
              <p>
                If someone in your family is struggling with addiction, remember that you need support too.
              </p>
              <ul className="space-y-2">
                <li>• Don't enable the addiction by giving money or making excuses</li>
                <li>• Set healthy boundaries to protect yourself and other family members</li>
                <li>• Seek counseling to deal with the emotional toll</li>
                <li>• Join family support groups to learn from others' experiences</li>
                <li>• Take care of your own mental and physical health</li>
                <li>• Stay hopeful but realistic about the recovery process</li>
              </ul>
            </CardContent>
          </Card>

          <Card className="bg-primary text-primary-foreground animate-scale-in">
            <CardHeader className="text-center">
              <CardTitle className="text-2xl">You Are Not Alone</CardTitle>
            </CardHeader>
            <CardContent className="text-center space-y-4">
              <p className="text-lg">
                Recovery is a journey, not a destination. With support, treatment, and determination, 
                a drug-free life is absolutely possible.
              </p>
              <p className="text-lg font-semibold">
                Reach out today. Help is available. Hope is real.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Help;
