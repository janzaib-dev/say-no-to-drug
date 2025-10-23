import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { AlertTriangle, TrendingUp, Users, Skull, Building2, Landmark } from "lucide-react";
import { LineChart, Line, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, PieChart, Pie, Cell } from "recharts";
import cultureImage from "@/assets/culture-destruction.jpg";

const Crisis = () => {
  // Chart data for drug cases rising
  const drugCasesData = [
    { year: '2019', cases: 120, employed: 850 },
    { year: '2020', cases: 180, employed: 780 },
    { year: '2021', cases: 285, employed: 650 },
    { year: '2022', cases: 420, employed: 520 },
    { year: '2023', cases: 580, employed: 380 },
    { year: '2024', cases: 750, employed: 250 },
  ];

  // Employment loss data
  const employmentData = [
    { category: 'Lost Jobs', value: 45, color: '#ef4444' },
    { category: 'At Risk', value: 30, color: '#f97316' },
    { category: 'Stable', value: 25, color: '#22c55e' },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto space-y-12">
          <div className="text-center space-y-4 animate-fade-in">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground">The Drug Crisis in Thatta</h1>
            <p className="text-xl text-muted-foreground">
              Understanding the scope and impact of drug abuse in our community
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 animate-scale-in">
            {[
              {
                icon: AlertTriangle,
                title: "Growing Problem",
                stat: "Increasing Daily",
                description: "Drug abuse cases are rising at an alarming rate in Thatta district"
              },
              {
                icon: Users,
                title: "Youth Affected",
                stat: "Primary Target",
                description: "Young people between 15-35 are most vulnerable to drug addiction"
              },
              {
                icon: TrendingUp,
                title: "Economic Impact",
                stat: "Devastating",
                description: "Families lose income, savings, and financial stability to drugs"
              },
              {
                icon: Skull,
                title: "Health Crisis",
                stat: "Life-Threatening",
                description: "Drug abuse leads to severe health complications and overdoses"
              },
            ].map((item, index) => (
              <Card key={index} className="border-2 hover:shadow-lg transition-all">
                <CardHeader>
                  <item.icon className="h-10 w-10 text-destructive mb-2" />
                  <CardTitle>{item.title}</CardTitle>
                  <CardDescription className="text-destructive font-semibold">{item.stat}</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{item.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          <Card className="animate-slide-in-left">
            <CardHeader>
              <CardTitle className="text-2xl">The Situation in Thatta</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 text-muted-foreground">
              <p>
                Thatta, a historic district in Sindh, Pakistan, is facing a severe drug crisis that threatens 
                the social fabric of our community. The easy availability of drugs, combined with economic 
                challenges and lack of awareness, has created a perfect storm for addiction.
              </p>
              <p>
                Common substances include heroin, hashish, crystal meth, and pharmaceutical drugs. What starts 
                as experimentation or peer pressure quickly spirals into addiction, trapping individuals and 
                destroying families.
              </p>
              <p>
                The problem is compounded by limited rehabilitation facilities, social stigma preventing 
                people from seeking help, and insufficient law enforcement against drug trafficking.
              </p>
            </CardContent>
          </Card>

          <Card className="bg-destructive/10 border-destructive animate-slide-in-right">
            <CardHeader>
              <CardTitle className="text-2xl text-destructive">Warning Signs of Drug Abuse</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3">
                {[
                  "Sudden changes in behavior and personality",
                  "Loss of interest in work, studies, or family",
                  "Unexplained financial problems and stealing",
                  "Physical symptoms: weight loss, red eyes, poor hygiene",
                  "Secretive behavior and lying",
                  "Mood swings and aggression",
                  "Withdrawal from social activities",
                  "Possession of drug paraphernalia"
                ].map((sign, index) => (
                  <li key={index} className="flex items-start space-x-2">
                    <span className="text-destructive mt-1">•</span>
                    <span className="text-foreground">{sign}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>

          {/* Charts Section */}
          <Card className="animate-fade-in">
            <CardHeader>
              <CardTitle className="text-2xl">Rising Crisis in Numbers</CardTitle>
              <CardDescription>Statistical evidence of the growing drug problem in Thatta</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-8">
                <div>
                  <h3 className="font-semibold text-lg mb-4 text-foreground">Drug Cases & Employment Loss (2019-2024)</h3>
                  <ResponsiveContainer width="100%" height={300}>
                    <LineChart data={drugCasesData}>
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis dataKey="year" />
                      <YAxis />
                      <Tooltip />
                      <Legend />
                      <Line type="monotone" dataKey="cases" stroke="#ef4444" strokeWidth={3} name="Drug Cases" />
                      <Line type="monotone" dataKey="employed" stroke="#22c55e" strokeWidth={3} name="Employed Persons" />
                    </LineChart>
                  </ResponsiveContainer>
                  <p className="text-sm text-muted-foreground mt-4">
                    As drug cases rise sharply, employment among affected individuals drops dramatically, 
                    showing the direct economic impact of addiction on our community.
                  </p>
                </div>

                <div>
                  <h3 className="font-semibold text-lg mb-4 text-foreground">Employment Status of Affected Families</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
                    <ResponsiveContainer width="100%" height={250}>
                      <PieChart>
                        <Pie
                          data={employmentData}
                          cx="50%"
                          cy="50%"
                          labelLine={false}
                          label={({ category, value }) => `${category}: ${value}%`}
                          outerRadius={80}
                          fill="#8884d8"
                          dataKey="value"
                        >
                          {employmentData.map((entry, index) => (
                            <Cell key={`cell-${index}`} fill={entry.color} />
                          ))}
                        </Pie>
                        <Tooltip />
                      </PieChart>
                    </ResponsiveContainer>
                    <div className="space-y-3">
                      <div className="flex items-center gap-2">
                        <div className="w-4 h-4 bg-destructive rounded"></div>
                        <span className="text-sm"><strong>45%</strong> have lost their jobs due to addiction</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <div className="w-4 h-4 bg-orange-500 rounded"></div>
                        <span className="text-sm"><strong>30%</strong> are at risk of unemployment</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <div className="w-4 h-4 bg-green-500 rounded"></div>
                        <span className="text-sm"><strong>25%</strong> maintain stable employment</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Culture Destruction Section */}
          <Card className="animate-slide-in-left overflow-hidden">
            <div className="relative h-64 md:h-80">
              <img src={cultureImage} alt="Cultural heritage at risk" className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
              <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                <h2 className="text-3xl font-bold mb-2">Our Culture is Being Destroyed</h2>
                <p className="text-white/90">Drug abuse threatens the very fabric of Thatta's rich heritage</p>
              </div>
            </div>
            <CardContent className="mt-6 space-y-4">
              <div className="space-y-4 text-muted-foreground">
                <p>
                  Thatta is renowned for its rich Sindhi culture, historical monuments, and strong family values. 
                  Our ancestors built the magnificent Shah Jahan Mosque and preserved traditions for centuries. 
                  But today, drug addiction is destroying what our forefathers protected.
                </p>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
                  <div className="border-l-4 border-destructive pl-4">
                    <h3 className="font-semibold text-foreground mb-2 flex items-center gap-2">
                      <Landmark className="h-5 w-5 text-destructive" />
                      Traditional Values Eroding
                    </h3>
                    <p className="text-sm">
                      Respect for elders, family honor, and community bonds—pillars of our culture—are 
                      breaking down as addiction spreads. Young people abandon traditions and responsibilities.
                    </p>
                  </div>

                  <div className="border-l-4 border-destructive pl-4">
                    <h3 className="font-semibold text-foreground mb-2 flex items-center gap-2">
                      <Users className="h-5 w-5 text-destructive" />
                      Social Gatherings Disrupted
                    </h3>
                    <p className="text-sm">
                      Cultural celebrations, religious festivals, and family gatherings that once united us 
                      are now avoided. Addicts bring shame and fear into these sacred spaces.
                    </p>
                  </div>

                  <div className="border-l-4 border-destructive pl-4">
                    <h3 className="font-semibold text-foreground mb-2 flex items-center gap-2">
                      <Building2 className="h-5 w-5 text-destructive" />
                      Youth Losing Identity
                    </h3>
                    <p className="text-sm">
                      Young people in Thatta are forgetting their Sindhi language, traditional crafts, 
                      and cultural practices. Drugs replace cultural education and heritage preservation.
                    </p>
                  </div>

                  <div className="border-l-4 border-destructive pl-4">
                    <h3 className="font-semibold text-foreground mb-2 flex items-center gap-2">
                      <AlertTriangle className="h-5 w-5 text-destructive" />
                      Community Trust Broken
                    </h3>
                    <p className="text-sm">
                      The culture of trust and mutual support in Thatta neighborhoods is destroyed. 
                      Fear of theft and violence from addicts has replaced traditional hospitality.
                    </p>
                  </div>
                </div>

                <div className="bg-destructive/10 p-6 rounded-lg mt-6">
                  <p className="font-semibold text-destructive text-lg mb-2">
                    If we don't act now, we will lose the Thatta that our ancestors gave us
                  </p>
                  <p className="text-sm text-muted-foreground">
                    Our cultural heritage, built over centuries, is being destroyed in just a few years. 
                    We must fight this crisis not just for health and economy, but to preserve our very identity 
                    as people of Thatta and Sindh.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-primary/5 border-primary animate-fade-in">
            <CardHeader>
              <CardTitle className="text-2xl text-primary">Why This Happens</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 text-muted-foreground">
              <div>
                <h3 className="font-semibold text-foreground mb-2">Social Factors</h3>
                <p>Peer pressure, unemployment, family conflicts, and social isolation push people toward drugs.</p>
              </div>
              <div>
                <h3 className="font-semibold text-foreground mb-2">Economic Factors</h3>
                <p>Poverty, lack of opportunities, and economic stress make individuals vulnerable to addiction.</p>
              </div>
              <div>
                <h3 className="font-semibold text-foreground mb-2">Psychological Factors</h3>
                <p>Mental health issues, trauma, stress, and depression often lead to self-medication through drugs.</p>
              </div>
              <div>
                <h3 className="font-semibold text-foreground mb-2">Availability</h3>
                <p>Easy access to drugs through dealers and lack of strict enforcement enables the crisis.</p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Crisis;
