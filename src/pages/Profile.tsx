
import { useState } from "react";
import { User, Award, MapPin, Calendar, Star, Download, Edit, Settings, Trophy } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Progress } from "@/components/ui/progress";

const Profile = () => {
  const [activeTab, setActiveTab] = useState("overview");

  const user = {
    name: "Lisa Schmidt",
    age: 22,
    location: "Berlin, Deutschland",
    joinDate: "März 2023",
    profilePicture: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face",
    level: "Fortgeschritten",
    points: 2847,
    nextLevelPoints: 3000,
    projectsCompleted: 4,
    totalWeeks: 26,
    countries: 3
  };

  const badges = [
    { name: "Erste Mission", description: "Erstes Projekt abgeschlossen", icon: "🏆", earned: true },
    { name: "Globetrotter", description: "3+ Länder besucht", icon: "🌍", earned: true },
    { name: "Langzeit-Helfer", description: "20+ Wochen geholfen", icon: "⏰", earned: true },
    { name: "Community Star", description: "5+ hilfreiche Bewertungen", icon: "⭐", earned: true },
    { name: "Mentor", description: "Neuen Freiwilligen geholfen", icon: "🎓", earned: false },
    { name: "Umweltschützer", description: "3+ Umweltprojekte", icon: "🌱", earned: false }
  ];

  const completedProjects = [
    {
      title: "Bildungsprojekt Guatemala",
      organization: "Niños del Futuro",
      location: "Antigua, Guatemala",
      duration: "8 Wochen",
      period: "Juni - August 2024",
      rating: 5,
      certificateUrl: "#"
    },
    {
      title: "Meeresschutz Thailand",
      organization: "Ocean Guardians", 
      location: "Koh Tao, Thailand",
      duration: "6 Wochen",
      period: "Februar - März 2024",
      rating: 5,
      certificateUrl: "#"
    },
    {
      title: "Gesundheitshilfe Kenia",
      organization: "Health for All",
      location: "Nairobi, Kenia", 
      duration: "12 Wochen",
      period: "September - November 2023",
      rating: 4,
      certificateUrl: "#"
    }
  ];

  const upcomingProjects = [
    {
      title: "Tierschutz Costa Rica",
      organization: "Wildlife Rescue",
      location: "Manuel Antonio, Costa Rica",
      startDate: "15. Januar 2025",
      duration: "4 Wochen"
    }
  ];

  const achievements = [
    { title: "Längster Einsatz", value: "12 Wochen", description: "Gesundheitsprojekt in Kenia" },
    { title: "Kinder unterrichtet", value: "150+", description: "In Guatemala und Thailand" },
    { title: "CO2 gespart", value: "2.4t", description: "Durch Umweltprojekte" },
    { title: "Community Ranking", value: "#47", description: "Von 2.847 aktiven Helfern" }
  ];

  return (
    <div className="min-h-screen py-8 px-4 bg-gray-50">
      <div className="container mx-auto max-w-6xl">
        {/* Profile Header */}
        <Card className="mb-8 shadow-lg">
          <CardContent className="p-8">
            <div className="flex flex-col md:flex-row items-center md:items-start gap-6">
              <div className="relative">
                <img
                  src={user.profilePicture}
                  alt={user.name}
                  className="w-32 h-32 rounded-full object-cover border-4 border-primary-200"
                />
                <Button size="sm" className="absolute bottom-0 right-0 rounded-full w-8 h-8 p-0">
                  <Edit className="h-4 w-4" />
                </Button>
              </div>
              
              <div className="flex-1 text-center md:text-left">
                <div className="flex flex-col md:flex-row md:items-center gap-4 mb-4">
                  <h1 className="text-3xl font-bold text-gray-900">{user.name}</h1>
                  <Badge className="bg-gradient-to-r from-primary-500 to-primary-600 text-white px-3 py-1">
                    {user.level}
                  </Badge>
                </div>
                
                <div className="flex flex-wrap justify-center md:justify-start gap-4 text-gray-600 mb-4">
                  <div className="flex items-center">
                    <MapPin className="h-4 w-4 mr-1" />
                    <span>{user.location}</span>
                  </div>
                  <div className="flex items-center">
                    <Calendar className="h-4 w-4 mr-1" />
                    <span>Dabei seit {user.joinDate}</span>
                  </div>
                </div>

                <div className="grid grid-cols-3 gap-4 md:gap-8 mb-6">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-primary-600">{user.projectsCompleted}</div>
                    <div className="text-sm text-gray-600">Projekte</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-primary-600">{user.totalWeeks}</div>
                    <div className="text-sm text-gray-600">Wochen</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-primary-600">{user.countries}</div>
                    <div className="text-sm text-gray-600">Länder</div>
                  </div>
                </div>

                {/* Progress to next level */}
                <div className="mb-4">
                  <div className="flex justify-between text-sm text-gray-600 mb-2">
                    <span>Level Progress</span>
                    <span>{user.points} / {user.nextLevelPoints} Punkte</span>
                  </div>
                  <Progress value={(user.points / user.nextLevelPoints) * 100} className="h-2" />
                </div>

                <div className="flex flex-col sm:flex-row gap-3">
                  <Button className="bg-gradient-to-r from-primary-500 to-primary-600 hover:from-primary-600 hover:to-primary-700">
                    <Edit className="h-4 w-4 mr-2" />
                    Profil bearbeiten
                  </Button>
                  <Button variant="outline">
                    <Settings className="h-4 w-4 mr-2" />
                    Einstellungen
                  </Button>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Tabs */}
        <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="overview">Übersicht</TabsTrigger>
            <TabsTrigger value="projects">Projekte</TabsTrigger>
            <TabsTrigger value="badges">Auszeichnungen</TabsTrigger>
            <TabsTrigger value="certificates">Zertifikate</TabsTrigger>
          </TabsList>

          <TabsContent value="overview" className="mt-6">
            <div className="grid lg:grid-cols-2 gap-6">
              {/* Achievements */}
              <Card>
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-4 flex items-center">
                    <Trophy className="h-5 w-5 mr-2 text-accent-500" />
                    Deine Erfolge
                  </h3>
                  <div className="space-y-4">
                    {achievements.map((achievement, index) => (
                      <div key={index} className="flex justify-between items-center p-3 rounded-lg bg-gray-50">
                        <div>
                          <div className="font-medium text-gray-900">{achievement.title}</div>
                          <div className="text-sm text-gray-600">{achievement.description}</div>
                        </div>
                        <div className="text-2xl font-bold text-primary-600">
                          {achievement.value}
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Recent Badges */}
              <Card>
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-4 flex items-center">
                    <Award className="h-5 w-5 mr-2 text-accent-500" />
                    Neueste Auszeichnungen
                  </h3>
                  <div className="grid grid-cols-2 gap-3">
                    {badges.filter(badge => badge.earned).slice(0, 4).map((badge, index) => (
                      <div key={index} className="text-center p-4 rounded-lg bg-gradient-to-br from-primary-50 to-secondary-50">
                        <div className="text-3xl mb-2">{badge.icon}</div>
                        <div className="font-medium text-gray-900 text-sm">{badge.name}</div>
                      </div>
                    ))}
                  </div>
                  <Button variant="outline" className="w-full mt-4">
                    Alle Auszeichnungen anzeigen
                  </Button>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="projects" className="mt-6">
            <div className="space-y-8">
              {/* Upcoming Projects */}
              {upcomingProjects.length > 0 && (
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">Geplante Projekte</h3>
                  <div className="grid gap-4">
                    {upcomingProjects.map((project, index) => (
                      <Card key={index} className="border-2 border-accent-200">
                        <CardContent className="p-6">
                          <div className="flex items-center justify-between">
                            <div>
                              <h4 className="text-xl font-semibold text-gray-900 mb-1">
                                {project.title}
                              </h4>
                              <p className="text-gray-600 mb-2">{project.organization}</p>
                              <div className="flex items-center text-gray-500 text-sm">
                                <MapPin className="h-4 w-4 mr-1" />
                                <span className="mr-4">{project.location}</span>
                                <Calendar className="h-4 w-4 mr-1" />
                                <span>Start: {project.startDate}</span>
                              </div>
                            </div>
                            <Badge className="bg-accent-500 text-white">
                              {project.duration}
                            </Badge>
                          </div>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </div>
              )}

              {/* Completed Projects */}
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Abgeschlossene Projekte</h3>
                <div className="grid gap-6">
                  {completedProjects.map((project, index) => (
                    <Card key={index}>
                      <CardContent className="p-6">
                        <div className="flex flex-col md:flex-row md:items-center justify-between">
                          <div className="flex-1">
                            <h4 className="text-xl font-semibold text-gray-900 mb-1">
                              {project.title}
                            </h4>
                            <p className="text-gray-600 mb-2">{project.organization}</p>
                            <div className="flex flex-wrap items-center gap-4 text-gray-500 text-sm mb-3">
                              <div className="flex items-center">
                                <MapPin className="h-4 w-4 mr-1" />
                                <span>{project.location}</span>
                              </div>
                              <div className="flex items-center">
                                <Calendar className="h-4 w-4 mr-1" />
                                <span>{project.period}</span>
                              </div>
                              <Badge variant="outline">
                                {project.duration}
                              </Badge>
                            </div>
                            <div className="flex items-center">
                              <span className="text-sm text-gray-600 mr-2">Deine Bewertung:</span>
                              <div className="flex">
                                {[...Array(5)].map((_, i) => (
                                  <Star 
                                    key={i} 
                                    className={`h-4 w-4 ${i < project.rating ? 'text-accent-500 fill-current' : 'text-gray-300'}`} 
                                  />
                                ))}
                              </div>
                            </div>
                          </div>
                          <div className="mt-4 md:mt-0 md:ml-6 flex flex-col gap-2">
                            <Button 
                              variant="outline" 
                              size="sm"
                              onClick={() => window.open(project.certificateUrl, '_blank')}
                            >
                              <Download className="h-4 w-4 mr-2" />
                              Zertifikat
                            </Button>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            </div>
          </TabsContent>

          <TabsContent value="badges" className="mt-6">
            <Card>
              <CardContent className="p-6">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">
                  Alle Auszeichnungen
                </h3>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {badges.map((badge, index) => (
                    <div 
                      key={index} 
                      className={`p-6 rounded-xl border-2 text-center transition-all ${
                        badge.earned 
                          ? 'border-primary-200 bg-gradient-to-br from-primary-50 to-secondary-50' 
                          : 'border-gray-200 bg-gray-50 opacity-60'
                      }`}
                    >
                      <div className="text-4xl mb-3">{badge.icon}</div>
                      <h4 className="font-semibold text-gray-900 mb-2">{badge.name}</h4>
                      <p className="text-sm text-gray-600 mb-3">{badge.description}</p>
                      {badge.earned ? (
                        <Badge className="bg-primary-500 text-white">
                          Erhalten ✓
                        </Badge>
                      ) : (
                        <Badge variant="outline" className="text-gray-500">
                          Noch nicht erhalten
                        </Badge>
                      )}
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="certificates" className="mt-6">
            <Card>
              <CardContent className="p-6">
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-2xl font-bold text-gray-900">
                    Deine Zertifikate
                  </h3>
                  <Button variant="outline">
                    <Download className="h-4 w-4 mr-2" />
                    Alle herunterladen
                  </Button>
                </div>
                
                <div className="grid md:grid-cols-2 gap-6">
                  {completedProjects.map((project, index) => (
                    <Card key={index} className="border border-primary-200">
                      <CardContent className="p-6 text-center">
                        <div className="w-16 h-16 bg-gradient-to-r from-primary-500 to-secondary-500 rounded-full flex items-center justify-center mx-auto mb-4">
                          <Award className="h-8 w-8 text-white" />
                        </div>
                        <h4 className="font-semibold text-gray-900 mb-2">
                          {project.title}
                        </h4>
                        <p className="text-gray-600 text-sm mb-1">{project.organization}</p>
                        <p className="text-gray-500 text-sm mb-4">{project.period}</p>
                        <Badge className="mb-4">{project.duration}</Badge>
                        <div className="flex gap-2">
                          <Button 
                            size="sm" 
                            className="flex-1 bg-gradient-to-r from-primary-500 to-primary-600 hover:from-primary-600 hover:to-primary-700"
                            onClick={() => window.open(project.certificateUrl, '_blank')}
                          >
                            <Download className="h-4 w-4 mr-2" />
                            Download
                          </Button>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default Profile;
