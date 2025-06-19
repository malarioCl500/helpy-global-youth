
import { useState } from "react";
import { Link } from "react-router-dom";
import { Search, Filter, MapPin, Clock, Users, Heart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

const Projects = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCountry, setSelectedCountry] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");

  const projects = [
    {
      id: 1,
      title: "Bildungsprojekt in Guatemala",
      organization: "Niños del Futuro",
      location: "Antigua, Guatemala",
      duration: "2-12 Wochen",
      category: "Bildung",
      description: "Unterstütze Kinder beim Englischlernen und bei den Hausaufgaben in einer lokalen Schule.",
      participants: 156,
      rating: 4.9,
      image: "https://images.unsplash.com/photo-1497486751825-1233686d5d80?w=400&h=250&fit=crop"
    },
    {
      id: 2,
      title: "Meeresschutz in Thailand",
      organization: "Ocean Guardians",
      location: "Koh Tao, Thailand", 
      duration: "3-8 Wochen",
      category: "Umweltschutz",
      description: "Hilf beim Schutz der Korallenriffe und bei der Aufklärung über Meeresschutz.",
      participants: 89,
      rating: 4.8,
      image: "https://images.unsplash.com/photo-1583212292454-1fe6229603b7?w=400&h=250&fit=crop"
    },
    {
      id: 3,
      title: "Gesundheitshilfe in Kenia",
      organization: "Health for All",
      location: "Nairobi, Kenia",
      duration: "4-16 Wochen", 
      category: "Gesundheit",
      description: "Unterstütze medizinische Fachkräfte in einer Klinik und bei Gesundheitskampagnen.",
      participants: 203,
      rating: 4.9,
      image: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=400&h=250&fit=crop"
    },
    {
      id: 4,
      title: "Tierschutz in Costa Rica",
      organization: "Wildlife Rescue",
      location: "Manuel Antonio, Costa Rica",
      duration: "2-6 Wochen",
      category: "Tierschutz",
      description: "Pflege verletzte Wildtiere und hilf bei ihrer Rehabilitation zurück in die Natur.",
      participants: 92,
      rating: 4.7,
      image: "https://images.unsplash.com/photo-1425082661705-1834bfd09dca?w=400&h=250&fit=crop"
    },
    {
      id: 5,
      title: "Bauprojekt in Nepal",
      organization: "Build Together",
      location: "Kathmandu, Nepal",
      duration: "3-12 Wochen",
      category: "Infrastruktur",
      description: "Hilf beim Wiederaufbau von Schulen und Gemeindezentren nach dem Erdbeben.",
      participants: 124,
      rating: 4.6,
      image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=250&fit=crop"
    },
    {
      id: 6,
      title: "Frauenförderung in Indien",
      organization: "Women Empowerment",
      location: "Delhi, Indien",
      duration: "4-20 Wochen",
      category: "Soziales",
      description: "Unterstütze Frauen bei der beruflichen Weiterbildung und beim Aufbau von Kleinunternehmen.",
      participants: 167,
      rating: 4.8,
      image: "https://images.unsplash.com/photo-1509099836639-18ba1795216d?w=400&h=250&fit=crop"
    }
  ];

  const countries = ["Guatemala", "Thailand", "Kenia", "Costa Rica", "Nepal", "Indien"];
  const categories = ["Bildung", "Umweltschutz", "Gesundheit", "Tierschutz", "Infrastruktur", "Soziales"];

  const filteredProjects = projects.filter(project => {
    const matchesSearch = project.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         project.organization.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         project.location.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCountry = !selectedCountry || project.location.includes(selectedCountry);
    const matchesCategory = !selectedCategory || project.category === selectedCategory;
    
    return matchesSearch && matchesCountry && matchesCategory;
  });

  return (
    <div className="min-h-screen py-8 px-4">
      <div className="container mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Finde dein <span className="text-primary-600">Traumprojekt</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Entdecke sinnvolle Freiwilligenprojekte in über 30 Ländern und starte dein Abenteuer
          </p>
        </div>

        {/* Search and Filters */}
        <div className="bg-white rounded-2xl shadow-lg p-6 mb-8">
          <div className="grid md:grid-cols-4 gap-4">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
              <Input
                placeholder="Projekt oder Organisation suchen..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10"
              />
            </div>
            <Select value={selectedCountry} onValueChange={setSelectedCountry}>
              <SelectTrigger>
                <SelectValue placeholder="Land wählen" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="">Alle Länder</SelectItem>
                {countries.map(country => (
                  <SelectItem key={country} value={country}>{country}</SelectItem>
                ))}
              </SelectContent>
            </Select>
            <Select value={selectedCategory} onValueChange={setSelectedCategory}>
              <SelectTrigger>
                <SelectValue placeholder="Kategorie wählen" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="">Alle Kategorien</SelectItem>
                {categories.map(category => (
                  <SelectItem key={category} value={category}>{category}</SelectItem>
                ))}
              </SelectContent>
            </Select>
            <Button className="bg-gradient-to-r from-primary-500 to-primary-600 hover:from-primary-600 hover:to-primary-700">
              <Filter className="h-4 w-4 mr-2" />
              Filter anwenden
            </Button>
          </div>
        </div>

        {/* Results Counter */}
        <div className="mb-6">
          <p className="text-gray-600">
            <span className="font-semibold text-gray-900">{filteredProjects.length}</span> Projekte gefunden
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <Card key={project.id} className="border-0 shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden">
              <div className="relative">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-48 object-cover"
                />
                <div className="absolute top-4 left-4">
                  <span className="bg-white/90 text-primary-600 px-3 py-1 rounded-full text-sm font-medium">
                    {project.category}
                  </span>
                </div>
                <div className="absolute top-4 right-4">
                  <Button size="sm" variant="ghost" className="bg-white/90 hover:bg-white">
                    <Heart className="h-4 w-4" />
                  </Button>
                </div>
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {project.title}
                </h3>
                <p className="text-gray-600 text-sm mb-3">
                  {project.organization}
                </p>
                <div className="flex items-center text-gray-500 text-sm mb-3">
                  <MapPin className="h-4 w-4 mr-1" />
                  <span>{project.location}</span>
                </div>
                <div className="flex items-center justify-between text-gray-500 text-sm mb-4">
                  <div className="flex items-center">
                    <Clock className="h-4 w-4 mr-1" />
                    <span>{project.duration}</span>
                  </div>
                  <div className="flex items-center">
                    <Users className="h-4 w-4 mr-1" />
                    <span>{project.participants} Teilnehmer</span>
                  </div>
                </div>
                <p className="text-gray-700 text-sm mb-4 line-clamp-3">
                  {project.description}
                </p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <div className="flex">
                      {[...Array(5)].map((_, i) => (
                        <div key={i} className={`h-4 w-4 ${i < Math.floor(project.rating) ? 'text-accent-500' : 'text-gray-300'}`}>
                          ⭐
                        </div>
                      ))}
                    </div>
                    <span className="text-sm text-gray-600 ml-2">{project.rating}</span>
                  </div>
                  <Link to={`/project/${project.id}`}>
                    <Button size="sm" className="bg-gradient-to-r from-primary-500 to-primary-600 hover:from-primary-600 hover:to-primary-700">
                      Details
                    </Button>
                  </Link>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Load More */}
        <div className="text-center mt-12">
          <Button variant="outline" size="lg" className="px-8">
            Mehr Projekte laden
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Projects;
