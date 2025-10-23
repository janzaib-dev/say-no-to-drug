import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { HeartCrack, Baby, Home, Coins, GraduationCap, UsersRound, Users } from "lucide-react";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, LineChart, Line } from "recharts";
import familyImage from "@/assets/family-impact.jpg";
import womenImage from "@/assets/women-empowerment.jpg";

const Impact = () => {
  // Women empowerment data showing impact
  const womenImpactData = [
    { year: '2019', affected: 45, empowered: 12, leading: 5 },
    { year: '2020', affected: 62, empowered: 18, leading: 8 },
    { year: '2021', affected: 85, empowered: 28, leading: 15 },
    { year: '2022', affected: 110, empowered: 45, leading: 25 },
    { year: '2023', affected: 145, empowered: 68, leading: 38 },
    { year: '2024', affected: 180, empowered: 95, leading: 52 },
  ];

  // Family roles affected
  const roleData = [
    { role: 'Income Loss', impact: 85 },
    { role: 'Child Care', impact: 78 },
    { role: 'Mental Health', impact: 92 },
    { role: 'Social Isolation', impact: 70 },
    { role: 'Education', impact: 65 },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto space-y-12">
          <div className="text-center space-y-4 animate-fade-in">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground">
              How Drugs Destroy Families
            </h1>
            <p className="text-xl text-muted-foreground">
              The devastating impact of drug addiction on homes and loved ones in Thatta
            </p>
          </div>

          <Card className="bg-destructive/5 border-destructive animate-scale-in overflow-hidden">
            <div className="relative h-64 md:h-80">
              <img src={familyImage} alt="Family suffering from drug addiction" className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
              <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                <CardTitle className="text-3xl text-white flex items-center gap-2">
                  <HeartCrack className="h-10 w-10" />
                  The Heartbreaking Reality
                </CardTitle>
              </div>
            </div>
            <CardContent className="mt-6 space-y-4 text-muted-foreground">
              <p>
                Drug addiction doesn't just affect the person using drugs—it tears apart entire families. 
                In Thatta, we have witnessed countless homes broken, children traumatized, and relationships 
                destroyed because of drug abuse.
              </p>
              <p>
                When one person in a family becomes addicted, everyone suffers. The pain ripples through 
                generations, affecting children, spouses, parents, and siblings in profound ways.
              </p>
            </CardContent>
          </Card>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              {
                icon: Coins,
                title: "Financial Devastation",
                description: "Addicts spend all family savings on drugs. They sell household items, borrow money, and leave families in debt. Children go hungry while money goes to dealers."
              },
              {
                icon: HeartCrack,
                title: "Emotional Trauma",
                description: "Spouses face constant fear and anxiety. Children grow up without proper care. Trust is broken, and the emotional wounds last for years."
              },
              {
                icon: Home,
                title: "Broken Homes",
                description: "Marriages end in divorce. Families are torn apart. The addict becomes isolated, and loved ones are left to pick up the pieces of a shattered home."
              },
              {
                icon: Baby,
                title: "Impact on Children",
                description: "Children witness violence, neglect, and instability. They suffer from trauma, develop behavioral issues, and face an uncertain future without proper guidance."
              },
              {
                icon: GraduationCap,
                title: "Lost Education",
                description: "Students addicted to drugs drop out of school. Children of addicts miss education due to family instability. Dreams and futures are destroyed."
              },
              {
                icon: UsersRound,
                title: "Social Isolation",
                description: "Families face shame and stigma in the community. They lose social connections and support networks. Isolation makes recovery even harder."
              },
            ].map((impact, index) => (
              <Card key={index} className="border-2 hover:shadow-lg transition-all animate-slide-in-left" style={{ animationDelay: `${index * 100}ms` }}>
                <CardHeader>
                  <impact.icon className="h-10 w-10 text-accent mb-2" />
                  <CardTitle className="text-xl">{impact.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{impact.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          <Card className="animate-fade-in">
            <CardHeader>
              <CardTitle className="text-2xl">A Real Story from Thatta</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 text-muted-foreground">
              <p className="italic">
                "My husband started using drugs 5 years ago. At first, we didn't know. Then the money started 
                disappearing. He sold our TV, my jewelry, even our children's school books. He would come home 
                angry and violent. My children were scared. We had no food, no money for medicine when they got sick."
              </p>
              <p className="italic">
                "I tried to get help, but our community blamed me. People said I was a bad wife. My family stopped 
                talking to me. My children stopped going to school because we couldn't afford it and they were 
                ashamed. Our home—once full of love—became a place of fear and sadness."
              </p>
              <p className="italic">
                "It took years, but with help from support programs, my husband finally got treatment. Our family 
                is healing, but the scars remain. I wish someone had helped us sooner. No family should suffer 
                like we did."
              </p>
              <p className="text-right font-semibold text-foreground">- Anonymous, Thatta resident</p>
            </CardContent>
          </Card>

          {/* Impact Statistics */}
          <Card className="animate-fade-in">
            <CardHeader>
              <CardTitle className="text-2xl">Impact on Family Roles</CardTitle>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={300}>
                <BarChart data={roleData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="role" />
                  <YAxis />
                  <Tooltip />
                  <Legend />
                  <Bar dataKey="impact" fill="#ef4444" name="% of Families Affected" />
                </BarChart>
              </ResponsiveContainer>
              <p className="text-sm text-muted-foreground mt-4">
                Drug addiction affects every aspect of family life, with mental health and income being the most impacted areas.
              </p>
            </CardContent>
          </Card>

          {/* Women Empowerment Section */}
          <Card className="animate-slide-in-left overflow-hidden">
            <div className="relative h-64 md:h-80">
              <img src={womenImage} alt="Women leading change in Thatta" className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
              <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                <h2 className="text-3xl font-bold mb-2">Women: The Silent Sufferers & Powerful Agents of Change</h2>
                <p className="text-white/90">Rising to lead families and communities toward recovery</p>
              </div>
            </div>
            <CardContent className="mt-6 space-y-6">
              <div className="space-y-4 text-muted-foreground">
                <p>
                  In Thatta's patriarchal society, women bear the heaviest burden when drug addiction strikes their families. 
                  Yet, they are also emerging as the most powerful force for change and recovery.
                </p>

                <div className="bg-accent/10 p-6 rounded-lg border-l-4 border-accent">
                  <h3 className="font-semibold text-accent text-xl mb-3">How Women Are Affected</h3>
                  <ul className="space-y-2">
                    <li>• <strong>Economic Hardship:</strong> When husbands or sons become addicts, women struggle to feed their children with no income</li>
                    <li>• <strong>Domestic Violence:</strong> Drug abuse leads to increased violence against wives and mothers in the home</li>
                    <li>• <strong>Social Stigma:</strong> Women face blame and shame from society, even though they are victims</li>
                    <li>• <strong>Emotional Burden:</strong> Mothers and wives carry the trauma of watching loved ones destroy themselves</li>
                    <li>• <strong>Lost Education:</strong> Young girls forced to drop out of school to work or care for younger siblings</li>
                  </ul>
                </div>

                <div className="bg-primary/10 p-6 rounded-lg border-l-4 border-primary">
                  <h3 className="font-semibold text-primary text-xl mb-3">Women Leading the Fight Back</h3>
                  <p className="mb-4">
                    Despite facing enormous challenges, women in Thatta are stepping up to lead the fight against drugs:
                  </p>
                  <ul className="space-y-2">
                    <li>• <strong>Community Organizers:</strong> Women forming support groups and awareness committees</li>
                    <li>• <strong>Economic Independence:</strong> Learning skills and starting small businesses to support families</li>
                    <li>• <strong>Education Advocates:</strong> Ensuring children continue school despite family addiction</li>
                    <li>• <strong>Peer Counselors:</strong> Trained women helping other affected families cope and recover</li>
                    <li>• <strong>Cultural Guardians:</strong> Preserving family values and traditions for next generation</li>
                  </ul>
                </div>
              </div>

              {/* Women Empowerment Chart */}
              <div className="mt-8">
                <h3 className="font-semibold text-lg mb-4 text-foreground">
                  Women's Empowerment Journey (2019-2024)
                </h3>
                <ResponsiveContainer width="100%" height={300}>
                  <LineChart data={womenImpactData}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="year" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Line type="monotone" dataKey="affected" stroke="#ef4444" strokeWidth={2} name="Women Affected by Addiction" />
                    <Line type="monotone" dataKey="empowered" stroke="#22c55e" strokeWidth={2} name="Women Empowered & Trained" />
                    <Line type="monotone" dataKey="leading" stroke="#3b82f6" strokeWidth={2} name="Women in Leadership Roles" />
                  </LineChart>
                </ResponsiveContainer>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
                  <div className="bg-destructive/10 p-4 rounded-lg">
                    <p className="text-sm font-semibold text-destructive mb-1">Women Affected</p>
                    <p className="text-2xl font-bold text-foreground">180+</p>
                    <p className="text-xs text-muted-foreground">Direct impact from family addiction</p>
                  </div>
                  <div className="bg-green-500/10 p-4 rounded-lg">
                    <p className="text-sm font-semibold text-green-600 mb-1">Women Empowered</p>
                    <p className="text-2xl font-bold text-foreground">95+</p>
                    <p className="text-xs text-muted-foreground">Through training and support programs</p>
                  </div>
                  <div className="bg-blue-500/10 p-4 rounded-lg">
                    <p className="text-sm font-semibold text-blue-600 mb-1">In Leadership</p>
                    <p className="text-2xl font-bold text-foreground">52+</p>
                    <p className="text-xs text-muted-foreground">Leading community initiatives</p>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-r from-primary/20 to-accent/20 p-6 rounded-lg mt-6">
                <h3 className="font-semibold text-foreground text-xl mb-3 flex items-center gap-2">
                  <Users className="h-6 w-6 text-primary" />
                  Success Stories
                </h3>
                <div className="space-y-4 text-sm">
                  <div className="border-l-4 border-primary pl-4">
                    <p className="italic text-muted-foreground">
                      "When my husband became addicted, I was helpless. But through this program, I learned tailoring. 
                      Now I earn money, my children go to school, and I help other women in my situation. I am not 
                      just surviving—I am leading."
                    </p>
                    <p className="text-right font-semibold text-foreground mt-2">- Fatima, 34, Thatta</p>
                  </div>
                  <div className="border-l-4 border-accent pl-4">
                    <p className="italic text-muted-foreground">
                      "My brother's addiction destroyed our family. But I refused to give up. I completed my education, 
                      got training in counseling, and now I work with families affected by drugs. Women can do more 
                      than just suffer—we can be the solution."
                    </p>
                    <p className="text-right font-semibold text-foreground mt-2">- Ayesha, 28, Social Worker</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-primary/5 border-primary animate-scale-in">
            <CardHeader>
              <CardTitle className="text-2xl text-primary">The Cycle Must Be Broken</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 text-muted-foreground">
              <p>
                The impact of drug addiction on families is devastating, but it doesn't have to be permanent. 
                With proper support, treatment, and community action, families can heal and rebuild.
              </p>
              <p>
                We must act now to prevent more families from experiencing this pain. Every person we help recover 
                is a family saved, children protected, and futures restored. And empowering women is key to this transformation.
              </p>
              <div className="bg-primary/10 p-6 rounded-lg mt-6">
                <p className="font-semibold text-primary text-lg text-center">
                  If your family is affected by drug addiction, you are not alone. Help is available.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Impact;
