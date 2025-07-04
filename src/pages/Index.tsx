import { Link } from "react-router-dom";
import { ArrowRight, Globe, Heart, Shield, Star, Users, Award, MessageSquare } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const Index = () => {
  const features = [
    {
      icon: Heart,
      title: "Faire Projekte",
      description: "Keine versteckten Kosten oder überteuerte Gebühren. Transparenz von Anfang an."
    },
    {
      icon: Shield,
      title: "Sicher & Verifiziert", 
      description: "Alle NGOs sind geprüft und verifiziert. Deine Sicherheit steht an erster Stelle."
    },
    {
      icon: Globe,
      title: "Weltweit Helfen",
      description: "Projekte in über 30 Ländern warten auf dich. Finde dein perfektes Match."
    },
    {
      icon: Award,
      title: "Zertifikate",
      description: "Erhalte offizielle Zertifikate für deine Freiwilligenarbeit."
    }
  ];

  const testimonials = [
    {
      name: "Lisa, 22",
      location: "Guatemala",
      text: "Dank Helpy konnte ich 3 Monate in Guatemala Kindern beim Lernen helfen - ohne mich finanziell zu ruinieren!",
      rating: 5
    },
    {
      name: "Max, 25",
      location: "Thailand",
      text: "Perfekte Organisation und tolle Community. Ich habe Freunde fürs Leben gefunden.",
      rating: 5
    },
    {
      name: "Sarah, 20",
      location: "Kenia",
      text: "Die beste Entscheidung meines Lebens! Helpy macht Freiwilligenarbeit für alle zugänglich.",
      rating: 5
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-50 via-white to-secondary-50 py-20 px-4">
        <div className="container mx-auto text-center">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 animate-fade-in">
              Weltweit helfen. <span className="text-primary-600">Sinnvoll wirken.</span> <span className="text-secondary-600">Echt wachsen.</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 mb-8 animate-slide-up">
              Finde sinnvolle Freiwilligenprojekte weltweit – ohne überteuerte Gebühren. 
              Bei Helpy steht dein Impact im Mittelpunkt, nicht der Profit.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center animate-slide-up">
              <Link to="/matching">
                <Button size="lg" className="bg-gradient-to-r from-primary-500 to-primary-600 hover:from-primary-600 hover:to-primary-700 text-lg px-8 py-6">
                  Jetzt Projekt finden
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <Link to="/projects">
                <Button variant="outline" size="lg" className="text-lg px-8 py-6">
                  Projekte entdecken
                </Button>
              </Link>
            </div>
            <div className="mt-12 flex items-center justify-center space-x-8 text-gray-500">
              <div className="flex items-center space-x-2">
                <Users className="h-5 w-5" />
                <span>2.847+ aktive Freiwillige</span>
              </div>
              <div className="flex items-center space-x-2">
                <Globe className="h-5 w-5" />
                <span>36 Länder</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 bg-white">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Warum Helpy?
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Wir machen Freiwilligenarbeit fair, transparent und für alle zugänglich.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
                  <CardContent className="p-6 text-center">
                    <div className="w-16 h-16 bg-gradient-to-r from-primary-500 to-secondary-500 rounded-xl flex items-center justify-center mx-auto mb-4">
                      <Icon className="h-8 w-8 text-white" />
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">
                      {feature.title}
                    </h3>
                    <p className="text-gray-600">
                      {feature.description}
                    </p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Beta Program */}
      <section className="py-16 px-4 bg-gradient-to-r from-accent-500 to-accent-600">
        <div className="container mx-auto text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              🚀 Sei Teil des Beta-Programms!
            </h2>
            <p className="text-xl text-accent-100 mb-8">
              Als Early Adopter erhältst du exklusiven Zugang zu neuen Features und bekommst lebenslang 20% Rabatt auf Premium-Services.
            </p>
            <Button size="lg" className="bg-white text-accent-600 hover:bg-gray-100 text-lg px-8 py-6">
              Beta-Zugang sichern
              <Star className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Was unsere Community sagt
            </h2>
            <p className="text-xl text-gray-600">
              Echte Erfahrungen von echten Menschen
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="border-0 shadow-lg">
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 text-accent-500 fill-current" />
                    ))}
                  </div>
                  <p className="text-gray-700 mb-4 italic">
                    "{testimonial.text}"
                  </p>
                  <div className="flex items-center">
                    <div className="w-10 h-10 bg-gradient-to-r from-primary-500 to-secondary-500 rounded-full flex items-center justify-center mr-3">
                      <span className="text-white font-semibold">
                        {testimonial.name.charAt(0)}
                      </span>
                    </div>
                    <div>
                      <div className="font-semibold text-gray-900">{testimonial.name}</div>
                      <div className="text-sm text-gray-500">{testimonial.location}</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-gradient-to-br from-primary-600 to-secondary-600">
        <div className="container mx-auto text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Bereit für dein Abenteuer?
            </h2>
            <p className="text-xl text-primary-100 mb-8">
              Starte jetzt deine Reise und verändere die Welt – eine gute Tat nach der anderen.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/matching">
                <Button size="lg" className="bg-white text-primary-600 hover:bg-gray-100 text-lg px-8 py-6">
                  Mein Projekt finden
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <Link to="/community">
                <Button variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-primary-600 text-lg px-8 py-6">
                  Community beitreten
                  <MessageSquare className="ml-2 h-5 w-5" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Disclaimer Footer */}
      <section className="py-8 px-4 bg-gray-100 border-t">
        <div className="container mx-auto text-center">
          <p className="text-sm text-gray-600 max-w-4xl mx-auto">
            <strong>Disclaimer:</strong> Diese Website ist ein ausgedachtes Projekt, das ausschließlich zu Studienzwecken im Rahmen einer Hochschulveranstaltung entwickelt wurde. Alle dargestellten Inhalte, Informationen und Angebote sind nicht echt, sondern dienen lediglich als Prototyp und Demo. Es handelt sich um keine reale Dienstleistung.
          </p>
        </div>
      </section>
    </div>
  );
};

export default Index;
