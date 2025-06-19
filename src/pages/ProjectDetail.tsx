
import { useParams, Link } from "react-router-dom";
import { ArrowLeft, MapPin, Clock, Users, Star, Calendar, Shield, Award, Heart, Share2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const ProjectDetail = () => {
  const { id } = useParams();

  // Mock data - in a real app this would come from an API
  const project = {
    id: 1,
    title: "Bildungsprojekt in Guatemala",
    organization: "Niños del Futuro",
    location: "Antigua, Guatemala",
    duration: "2-12 Wochen",
    category: "Bildung",
    description: "Unterstütze Kinder beim Englischlernen und bei den Hausaufgaben in einer lokalen Schule in Antigua, Guatemala.",
    participants: 156,
    rating: 4.9,
    price: "Kostenlos",
    accommodation: "Gastfamilie oder Freiwilligenhaus",
    meals: "3 Mahlzeiten täglich",
    workingHours: "4-6 Stunden, Montag-Freitag",
    requirements: ["Grundkenntnisse Spanisch oder Englisch", "Mindestalter 18 Jahre", "Erfahrung mit Kindern von Vorteil"],
    included: ["Unterkunft", "Verpflegung", "Projektbetreuung", "Orientierung", "Zertifikat"],
    notIncluded: ["Flug", "Visa", "Versicherung", "Persönliche Ausgaben"],
    images: [
      "https://images.unsplash.com/photo-1497486751825-1233686d5d80?w=800&h=400&fit=crop",
      "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=400&h=300&fit=crop",
      "https://images.unsplash.com/photo-1544717297-fa95b6ee9643?w=400&h=300&fit=crop"
    ]
  };

  const testimonials = [
    {
      name: "Lisa M., 22",
      duration: "8 Wochen",
      text: "Eine unglaubliche Erfahrung! Die Kinder sind so wissbegierig und dankbar. Ich habe mindestens genauso viel gelernt wie sie.",
      rating: 5,
      date: "März 2024"
    },
    {
      name: "Tom K., 25",
      duration: "4 Wochen", 
      text: "Perfekte Organisation und tolle Betreuung vor Ort. Kann ich jedem empfehlen, der etwas Sinnvolles machen möchte.",
      rating: 5,
      date: "Februar 2024"
    },
    {
      name: "Sarah L., 20",
      duration: "12 Wochen",
      text: "Guatemala ist wunderschön und die Menschen sind so herzlich. Das Projekt hat mein Leben verändert!",
      rating: 5,
      date: "Januar 2024"
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Back Button */}
      <div className="container mx-auto px-4 py-4">
        <Link to="/projects">
          <Button variant="ghost" className="flex items-center text-gray-600 hover:text-gray-900">
            <ArrowLeft className="h-4 w-4 mr-2" />
            Zurück zu den Projekten
          </Button>
        </Link>
      </div>

      {/* Hero Section */}
      <div className="relative">
        <img 
          src={project.images[0]} 
          alt={project.title}
          className="w-full h-96 object-cover"
        />
        <div className="absolute inset-0 bg-black/30"></div>
        <div className="absolute bottom-0 left-0 right-0 p-8">
          <div className="container mx-auto">
            <div className="text-white">
              <Badge className="bg-primary-500 text-white mb-4">
                {project.category}
              </Badge>
              <h1 className="text-4xl md:text-5xl font-bold mb-4">
                {project.title}
              </h1>
              <div className="flex flex-wrap items-center gap-6 text-lg">
                <div className="flex items-center">
                  <MapPin className="h-5 w-5 mr-2" />
                  <span>{project.location}</span>
                </div>
                <div className="flex items-center">
                  <Clock className="h-5 w-5 mr-2" />
                  <span>{project.duration}</span>
                </div>
                <div className="flex items-center">
                  <Star className="h-5 w-5 mr-2 text-accent-400" />
                  <span>{project.rating} ({project.participants} Bewertungen)</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2">
            <Tabs defaultValue="overview" className="w-full">
              <TabsList className="grid w-full grid-cols-4">
                <TabsTrigger value="overview">Übersicht</TabsTrigger>
                <TabsTrigger value="details">Details</TabsTrigger>
                <TabsTrigger value="reviews">Bewertungen</TabsTrigger>
                <TabsTrigger value="gallery">Galerie</TabsTrigger>
              </TabsList>
              
              <TabsContent value="overview" className="mt-6">
                <Card>
                  <CardContent className="p-6">
                    <h2 className="text-2xl font-bold text-gray-900 mb-4">
                      Über das Projekt
                    </h2>
                    <p className="text-gray-700 text-lg leading-relaxed mb-6">
                      {project.description} Dieses Projekt bietet dir die einzigartige Möglichkeit, 
                      in einer authentischen guatemaltekischen Gemeinde zu leben und zu arbeiten, 
                      während du einen wertvollen Beitrag zur Bildung von Kindern leistest.
                    </p>
                    
                    <h3 className="text-xl font-semibold text-gray-900 mb-3">
                      Deine Aufgaben
                    </h3>
                    <ul className="list-disc list-inside text-gray-700 space-y-2 mb-6">
                      <li>Englischunterricht für Kinder im Alter von 6-14 Jahren</li>
                      <li>Unterstützung bei den Hausaufgaben</li>
                      <li>Organisation von Freizeitaktivitäten</li>
                      <li>Hilfe bei der Vorbereitung von Unterrichtsmaterialien</li>
                      <li>Betreuung während der Pausen und beim Essen</li>
                    </ul>

                    <h3 className="text-xl font-semibold text-gray-900 mb-3">
                      Voraussetzungen
                    </h3>
                    <ul className="list-disc list-inside text-gray-700 space-y-2">
                      {project.requirements.map((req, index) => (
                        <li key={index}>{req}</li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="details" className="mt-6">
                <div className="space-y-6">
                  <Card>
                    <CardContent className="p-6">
                      <h3 className="text-xl font-semibold text-gray-900 mb-4">
                        ✅ Im Preis enthalten
                      </h3>
                      <div className="grid md:grid-cols-2 gap-3">
                        {project.included.map((item, index) => (
                          <div key={index} className="flex items-center text-gray-700">
                            <div className="w-2 h-2 bg-primary-500 rounded-full mr-3"></div>
                            {item}
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardContent className="p-6">
                      <h3 className="text-xl font-semibold text-gray-900 mb-4">
                        ❌ Nicht enthalten
                      </h3>
                      <div className="grid md:grid-cols-2 gap-3">
                        {project.notIncluded.map((item, index) => (
                          <div key={index} className="flex items-center text-gray-700">
                            <div className="w-2 h-2 bg-gray-400 rounded-full mr-3"></div>
                            {item}
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardContent className="p-6">
                      <h3 className="text-xl font-semibold text-gray-900 mb-4">
                        Weitere Details
                      </h3>
                      <div className="space-y-4">
                        <div className="flex items-center">
                          <Calendar className="h-5 w-5 text-primary-500 mr-3" />
                          <div>
                            <span className="font-medium">Arbeitszeiten:</span>
                            <span className="text-gray-600 ml-2">{project.workingHours}</span>
                          </div>
                        </div>
                        <div className="flex items-center">
                          <Users className="h-5 w-5 text-primary-500 mr-3" />
                          <div>
                            <span className="font-medium">Unterkunft:</span>
                            <span className="text-gray-600 ml-2">{project.accommodation}</span>
                          </div>
                        </div>
                        <div className="flex items-center">
                          <Shield className="h-5 w-5 text-primary-500 mr-3" />
                          <div>
                            <span className="font-medium">Verpflegung:</span>
                            <span className="text-gray-600 ml-2">{project.meals}</span>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </TabsContent>

              <TabsContent value="reviews" className="mt-6">
                <div className="space-y-6">
                  <Card>
                    <CardContent className="p-6">
                      <div className="flex items-center justify-between mb-6">
                        <h3 className="text-xl font-semibold text-gray-900">
                          Bewertungen von Freiwilligen
                        </h3>
                        <div className="flex items-center">
                          <Star className="h-5 w-5 text-accent-500 fill-current mr-1" />
                          <span className="text-lg font-semibold">{project.rating}</span>
                          <span className="text-gray-500 ml-2">({project.participants} Bewertungen)</span>
                        </div>
                      </div>
                      
                      <div className="space-y-6">
                        {testimonials.map((testimonial, index) => (
                          <div key={index} className="border-b border-gray-200 pb-6 last:border-b-0">
                            <div className="flex items-center justify-between mb-3">
                              <div className="flex items-center">
                                <div className="w-10 h-10 bg-gradient-to-r from-primary-500 to-secondary-500 rounded-full flex items-center justify-center mr-3">
                                  <span className="text-white font-semibold text-sm">
                                    {testimonial.name.charAt(0)}
                                  </span>
                                </div>
                                <div>
                                  <div className="font-semibold text-gray-900">{testimonial.name}</div>
                                  <div className="text-sm text-gray-500">{testimonial.duration} • {testimonial.date}</div>
                                </div>
                              </div>
                              <div className="flex">
                                {[...Array(testimonial.rating)].map((_, i) => (
                                  <Star key={i} className="h-4 w-4 text-accent-500 fill-current" />
                                ))}
                              </div>
                            </div>
                            <p className="text-gray-700">
                              {testimonial.text}
                            </p>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </TabsContent>

              <TabsContent value="gallery" className="mt-6">
                <div className="grid md:grid-cols-2 gap-4">
                  {project.images.map((image, index) => (
                    <img 
                      key={index}
                      src={image} 
                      alt={`${project.title} ${index + 1}`}
                      className="w-full h-64 object-cover rounded-lg"
                    />
                  ))}
                </div>
              </TabsContent>
            </Tabs>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="sticky top-8 space-y-6">
              {/* Booking Card */}
              <Card className="shadow-lg">
                <CardContent className="p-6">
                  <div className="text-center mb-6">
                    <div className="text-3xl font-bold text-primary-600 mb-2">
                      {project.price}
                    </div>
                    <p className="text-gray-600">pro Woche</p>
                  </div>
                  
                  <div className="space-y-4 mb-6">
                    <Button className="w-full bg-gradient-to-r from-primary-500 to-primary-600 hover:from-primary-600 hover:to-primary-700 text-lg py-6">
                      Jetzt bewerben
                    </Button>
                    <div className="flex gap-2">
                      <Button variant="outline" className="flex-1">
                        <Heart className="h-4 w-4 mr-2" />
                        Merken
                      </Button>
                      <Button variant="outline" className="flex-1">
                        <Share2 className="h-4 w-4 mr-2" />
                        Teilen
                      </Button>
                    </div>
                  </div>

                  <div className="text-center text-sm text-gray-500">
                    <Shield className="h-4 w-4 inline mr-1" />
                    100% sichere Buchung
                  </div>
                </CardContent>
              </Card>

              {/* Organization Info */}
              <Card>
                <CardContent className="p-6">
                  <h4 className="font-semibold text-gray-900 mb-4">
                    Über {project.organization}
                  </h4>
                  <div className="space-y-3">
                    <div className="flex items-center">
                      <Award className="h-4 w-4 text-primary-500 mr-2" />
                      <span className="text-sm text-gray-600">Verifizierte Organisation</span>
                    </div>
                    <div className="flex items-center">
                      <Users className="h-4 w-4 text-primary-500 mr-2" />
                      <span className="text-sm text-gray-600">Über 500 Freiwillige betreut</span>
                    </div>
                    <div className="flex items-center">
                      <Calendar className="h-4 w-4 text-primary-500 mr-2" />
                      <span className="text-sm text-gray-600">Seit 2018 bei Helpy</span>
                    </div>
                  </div>
                  <Button variant="outline" className="w-full mt-4">
                    Mehr über die Organisation
                  </Button>
                </CardContent>
              </Card>

              {/* Quick Facts */}
              <Card>
                <CardContent className="p-6">
                  <h4 className="font-semibold text-gray-900 mb-4">
                    Auf einen Blick
                  </h4>
                  <div className="space-y-3 text-sm">
                    <div className="flex justify-between">
                      <span className="text-gray-600">Mindestdauer:</span>
                      <span className="font-medium">2 Wochen</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Maximaldauer:</span>
                      <span className="font-medium">12 Wochen</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Sprache:</span>
                      <span className="font-medium">Spanisch</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Altersgruppe:</span>
                      <span className="font-medium">18-35 Jahre</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetail;
