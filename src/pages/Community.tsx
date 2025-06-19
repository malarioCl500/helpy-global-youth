
import { useState } from "react";
import { MessageSquare, Heart, Share2, User, MapPin, Calendar, Star, Filter, Search } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const Community = () => {
  const [activeTab, setActiveTab] = useState("stories");

  const stories = [
    {
      id: 1,
      author: "Lisa Schmidt",
      avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=50&h=50&fit=crop&crop=face",
      project: "Bildungsprojekt Guatemala",
      location: "Antigua, Guatemala",
      date: "vor 2 Tagen",
      title: "3 Monate in Guatemala - Eine Reise, die mein Leben verändert hat",
      excerpt: "Als ich vor 3 Monaten nach Guatemala aufgebrochen bin, hätte ich nie gedacht, dass diese Erfahrung mich so sehr prägen würde...",
      image: "https://images.unsplash.com/photo-1497486751825-1233686d5d80?w=400&h=250&fit=crop",
      likes: 47,
      comments: 12,
      category: "Bildung",
      rating: 5
    },
    {
      id: 2,
      author: "Max Müller",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=50&h=50&fit=crop&crop=face",
      project: "Meeresschutz Thailand",
      location: "Koh Tao, Thailand",
      date: "vor 1 Woche",
      title: "Unter Wasser für den Umweltschutz - Korallenriffe retten in Thailand",
      excerpt: "Tauchen und dabei etwas Gutes tun? Das geht! Hier ist meine Geschichte über 6 Wochen Meeresschutz in Thailand...",
      image: "https://images.unsplash.com/photo-1583212292454-1fe6229603b7?w=400&h=250&fit=crop",
      likes: 63,
      comments: 18,
      category: "Umweltschutz",
      rating: 5
    },
    {
      id: 3,
      author: "Sarah Weber",
      avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=50&h=50&fit=crop&crop=face",
      project: "Tierschutz Costa Rica",
      location: "Manuel Antonio, Costa Rica",
      date: "vor 2 Wochen",
      title: "Von Faultieren und Freundschaften - Meine Zeit im Tierschutz",
      excerpt: "4 Wochen im Dschungel von Costa Rica, verletzte Tiere pflegen und dabei selbst so viel lernen...",
      image: "https://images.unsplash.com/photo-1425082661705-1834bfd09dca?w=400&h=250&fit=crop",
      likes: 91,
      comments: 24,
      category: "Tierschutz",
      rating: 5
    }
  ];

  const leaderboard = [
    {
      rank: 1,
      name: "Anna Hoffmann",
      avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=50&h=50&fit=crop&crop=face",
      points: 4250,
      projects: 6,
      countries: 4,
      level: "Expert"
    },
    {
      rank: 2,
      name: "Tom Schneider",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=50&h=50&fit=crop&crop=face",
      points: 3890,
      projects: 5,
      countries: 3,
      level: "Fortgeschritten"
    },
    {
      rank: 3,
      name: "Julia Becker",
      avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=50&h=50&fit=crop&crop=face",
      points: 3456,
      projects: 4,
      countries: 3,
      level: "Fortgeschritten"
    },
    {
      rank: 4,
      name: "Lisa Schmidt",
      avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=50&h=50&fit=crop&crop=face",
      points: 2847,
      projects: 4,
      countries: 3,
      level: "Fortgeschritten"
    },
    {
      rank: 5,
      name: "David König",
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=50&h=50&fit=crop&crop=face",
      points: 2567,
      projects: 3,
      countries: 2,
      level: "Fortgeschritten"
    }
  ];

  const discussions = [
    {
      id: 1,
      title: "Tipps für den ersten Freiwilligeneinsatz?",
      author: "Nina Berg",
      avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=40&h=40&fit=crop&crop=face",
      replies: 23,
      lastActivity: "vor 1 Stunde",
      category: "Allgemein"
    },
    {
      id: 2,
      title: "Beste Reiseversicherung für Freiwilligenarbeit?",
      author: "Marco Richter",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=40&h=40&fit=crop&crop=face",
      replies: 15,
      lastActivity: "vor 3 Stunden",
      category: "Vorbereitung"
    },
    {
      id: 3,
      title: "Spanisch lernen vor Guatemala-Einsatz",
      author: "Emma Fischer",
      avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=40&h=40&fit=crop&crop=face",
      replies: 31,
      lastActivity: "vor 5 Stunden",
      category: "Sprachen"
    }
  ];

  return (
    <div className="min-h-screen py-8 px-4 bg-gray-50">
      <div className="container mx-auto max-w-6xl">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Unsere <span className="text-primary-600">Community</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Teile deine Erfahrungen, finde Inspiration und vernetze dich mit Gleichgesinnten aus aller Welt
          </p>
        </div>

        {/* Community Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
          <Card>
            <CardContent className="p-4 text-center">
              <div className="text-2xl font-bold text-primary-600">2.847</div>
              <div className="text-sm text-gray-600">Aktive Mitglieder</div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-4 text-center">
              <div className="text-2xl font-bold text-primary-600">156</div>
              <div className="text-sm text-gray-600">Erfahrungsberichte</div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-4 text-center">
              <div className="text-2xl font-bold text-primary-600">36</div>
              <div className="text-sm text-gray-600">Länder</div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-4 text-center">
              <div className="text-2xl font-bold text-primary-600">89%</div>
              <div className="text-sm text-gray-600">Würden wiederkommen</div>
            </CardContent>
          </Card>
        </div>

        {/* Tabs */}
        <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="stories">Erfahrungsberichte</TabsTrigger>
            <TabsTrigger value="discussions">Diskussionen</TabsTrigger>
            <TabsTrigger value="leaderboard">Rangliste</TabsTrigger>
          </TabsList>

          <TabsContent value="stories" className="mt-6">
            <div className="grid lg:grid-cols-3 gap-8">
              {/* Main Content */}
              <div className="lg:col-span-2 space-y-6">
                {/* Search and Filter */}
                <Card>
                  <CardContent className="p-4">
                    <div className="flex gap-4">
                      <div className="relative flex-1">
                        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
                        <Input placeholder="Erfahrungsberichte durchsuchen..." className="pl-10" />
                      </div>
                      <Button variant="outline">
                        <Filter className="h-4 w-4 mr-2" />
                        Filter
                      </Button>
                    </div>
                  </CardContent>
                </Card>

                {/* Stories */}
                {stories.map((story) => (
                  <Card key={story.id} className="hover:shadow-lg transition-shadow">
                    <CardContent className="p-0">
                      <div className="grid md:grid-cols-3 gap-0">
                        <div className="md:col-span-1">
                          <img 
                            src={story.image} 
                            alt={story.title}
                            className="w-full h-48 md:h-full object-cover rounded-l-lg"
                          />
                        </div>
                        <div className="md:col-span-2 p-6">
                          <div className="flex items-center justify-between mb-3">
                            <Badge className="bg-primary-100 text-primary-700">
                              {story.category}
                            </Badge>
                            <div className="flex items-center">
                              {[...Array(story.rating)].map((_, i) => (
                                <Star key={i} className="h-4 w-4 text-accent-500 fill-current" />
                              ))}
                            </div>
                          </div>
                          
                          <h3 className="text-xl font-semibold text-gray-900 mb-3 line-clamp-2">
                            {story.title}
                          </h3>
                          
                          <p className="text-gray-600 mb-4 line-clamp-3">
                            {story.excerpt}
                          </p>
                          
                          <div className="flex items-center justify-between">
                            <div className="flex items-center">
                              <img
                                src={story.avatar}
                                alt={story.author}
                                className="w-8 h-8 rounded-full mr-3"
                              />
                              <div className="text-sm">
                                <div className="font-medium text-gray-900">{story.author}</div>
                                <div className="text-gray-500 flex items-center">
                                  <MapPin className="h-3 w-3 mr-1" />
                                  {story.location} • {story.date}
                                </div>
                              </div>
                            </div>
                            
                            <div className="flex items-center space-x-4 text-sm text-gray-500">
                              <div className="flex items-center">
                                <Heart className="h-4 w-4 mr-1" />
                                {story.likes}
                              </div>
                              <div className="flex items-center">
                                <MessageSquare className="h-4 w-4 mr-1" />
                                {story.comments}
                              </div>
                              <Button variant="ghost" size="sm">
                                <Share2 className="h-4 w-4" />
                              </Button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}

                <div className="text-center">
                  <Button variant="outline" size="lg">
                    Mehr Berichte laden
                  </Button>
                </div>
              </div>

              {/* Sidebar */}
              <div className="lg:col-span-1 space-y-6">
                {/* Write Story CTA */}
                <Card className="bg-gradient-to-br from-primary-500 to-secondary-500 text-white">
                  <CardContent className="p-6 text-center">
                    <h3 className="text-xl font-semibold mb-3">
                      Teile deine Geschichte!
                    </h3>
                    <p className="mb-4 text-primary-100">
                      Inspiriere andere mit deinen Erfahrungen
                    </p>
                    <Button className="bg-white text-primary-600 hover:bg-gray-100">
                      Bericht schreiben
                    </Button>
                  </CardContent>
                </Card>

                {/* Top Contributors */}
                <Card>
                  <CardContent className="p-6">
                    <h3 className="text-lg font-semibold text-gray-900 mb-4">
                      Top Contributors
                    </h3>
                    <div className="space-y-3">
                      {leaderboard.slice(0, 3).map((user) => (
                        <div key={user.rank} className="flex items-center">
                          <div className="w-8 h-8 bg-gradient-to-r from-accent-400 to-accent-500 rounded-full flex items-center justify-center text-white text-sm font-bold mr-3">
                            {user.rank}
                          </div>
                          <img
                            src={user.avatar}
                            alt={user.name}
                            className="w-10 h-10 rounded-full mr-3"
                          />
                          <div className="flex-1">
                            <div className="font-medium text-gray-900 text-sm">{user.name}</div>
                            <div className="text-xs text-gray-500">{user.points} Punkte</div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </TabsContent>

          <TabsContent value="discussions" className="mt-6">
            <div className="grid lg:grid-cols-3 gap-8">
              <div className="lg:col-span-2 space-y-4">
                <div className="flex justify-between items-center">
                  <h2 className="text-2xl font-bold text-gray-900">Diskussionen</h2>
                  <Button className="bg-gradient-to-r from-primary-500 to-primary-600 hover:from-primary-600 hover:to-primary-700">
                    Neue Diskussion
                  </Button>
                </div>

                {discussions.map((discussion) => (
                  <Card key={discussion.id} className="hover:shadow-md transition-shadow">
                    <CardContent className="p-6">
                      <div className="flex items-start">
                        <img
                          src={discussion.avatar}
                          alt={discussion.author}
                          className="w-10 h-10 rounded-full mr-4"
                        />
                        <div className="flex-1">
                          <h3 className="text-lg font-semibold text-gray-900 mb-2">
                            {discussion.title}
                          </h3>
                          <div className="flex items-center justify-between text-sm text-gray-500">
                            <div className="flex items-center space-x-4">
                              <span>von {discussion.author}</span>
                              <Badge variant="outline" className="text-xs">
                                {discussion.category}
                              </Badge>
                            </div>
                            <div className="flex items-center space-x-4">
                              <span>{discussion.replies} Antworten</span>
                              <span>{discussion.lastActivity}</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>

              <div className="lg:col-span-1">
                <Card>
                  <CardContent className="p-6">
                    <h3 className="text-lg font-semibold text-gray-900 mb-4">
                      Kategorien
                    </h3>
                    <div className="space-y-2">
                      {["Allgemein", "Vorbereitung", "Sprachen", "Sicherheit", "Erfahrungen"].map((category) => (
                        <Button key={category} variant="ghost" className="w-full justify-start">
                          {category}
                        </Button>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </TabsContent>

          <TabsContent value="leaderboard" className="mt-6">
            <Card>
              <CardContent className="p-6">
                <div className="flex items-center justify-between mb-6">
                  <h2 className="text-2xl font-bold text-gray-900">Community Rangliste</h2>
                  <Badge className="bg-gradient-to-r from-accent-500 to-accent-600 text-white">
                    Top 5
                  </Badge>
                </div>

                <div className="space-y-4">
                  {leaderboard.map((user) => (
                    <div key={user.rank} className={`flex items-center p-4 rounded-lg ${
                      user.rank <= 3 ? 'bg-gradient-to-r from-accent-50 to-primary-50 border-2 border-accent-200' : 'bg-gray-50'
                    }`}>
                      <div className={`w-12 h-12 rounded-full flex items-center justify-center text-white font-bold text-lg mr-4 ${
                        user.rank === 1 ? 'bg-gradient-to-r from-yellow-400 to-yellow-500' :
                        user.rank === 2 ? 'bg-gradient-to-r from-gray-400 to-gray-500' :
                        user.rank === 3 ? 'bg-gradient-to-r from-amber-600 to-amber-700' :
                        'bg-gradient-to-r from-primary-500 to-primary-600'
                      }`}>
                        {user.rank}
                      </div>
                      
                      <img
                        src={user.avatar}
                        alt={user.name}
                        className="w-12 h-12 rounded-full mr-4"
                      />
                      
                      <div className="flex-1">
                        <div className="flex items-center">
                          <h3 className="text-lg font-semibold text-gray-900 mr-3">
                            {user.name}
                          </h3>
                          <Badge className="bg-primary-100 text-primary-700">
                            {user.level}
                          </Badge>
                        </div>
                        <div className="flex items-center space-x-4 text-sm text-gray-600">
                          <span>{user.points} Punkte</span>
                          <span>{user.projects} Projekte</span>
                          <span>{user.countries} Länder</span>
                        </div>
                      </div>
                      
                      {user.rank <= 3 && (
                        <div className="text-2xl">
                          {user.rank === 1 ? '🏆' : user.rank === 2 ? '🥈' : '🥉'}
                        </div>
                      )}
                    </div>
                  ))}
                </div>

                <div className="text-center mt-8">
                  <Button variant="outline" size="lg">
                    Vollständige Rangliste anzeigen
                  </Button>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default Community;
