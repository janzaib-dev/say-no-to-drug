import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Phone, Hospital, Users, Heart, Shield, AlertCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

const Team = () => {
  return (
       <div className="min-h-screen bg-background">
          <Navbar />
          
             <div className="container mx-auto px-4 py-16">
                  <div className="max-w-4xl mx-auto space-y-12">
                    <div className="text-center space-y-4 animate-fade-in">
                      <h1 className="text-4xl md:text-5xl font-bold text-foreground">Meet Our Team</h1>
                      <p className="text-xl text-muted-foreground">
                        Our founding team is committed to promoting a drug-free society through awareness, education, and positive action.
                      </p>
                    </div>
          
                
          
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      {[
                        {
                          icon: Hospital,
                          title: "Murk",
                          description: " Murk helped bring this website to life with their creativity and hard work, playing a special role in making our “Thatta Anti-Narcotics” project possible.",
                          contact: "Contact us for referrals"
                        },
                        {
                          icon: Hospital,
                          title: "Amna",
                          description: "Amna focused on content writing and helped craft powerful messages and slogans for the campaign..",
                          contact: "Contact us for referrals"
                        },
                        {
                          icon: Hospital,
                          title: "Aresha",
                          description: "Aresha worked on creating social media posts and helped spread our message online to raise awareness about saying no to drugs.",
                          contact: "Contact us for referrals"
                        },
                        {
                          icon: Hospital,
                          title: "Maheen",
                          description: "Maheen  designed creative posters and visuals that made our campaign more engaging and impactful.",
                          contact: "Contact us for referrals"
                        },
                        
                      ].map((resource, index) => (
                        <Card key={index} className="border-2 hover:shadow-lg transition-all animate-slide-in-left" style={{ animationDelay: `${index * 100}ms` }}>
                          <CardHeader>
                            <CardTitle>{resource.title}</CardTitle>
                            <CardDescription>{resource.description}</CardDescription>
                          </CardHeader>
                       
                        </Card>
                      ))}
                    </div>
          
                    
          
                  
                  </div>
                </div>
          
                <Footer />
          
          </div>
  )
};

export default Team;
