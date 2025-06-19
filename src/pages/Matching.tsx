
import { useState } from "react";
import { ChevronRight, ChevronLeft, MapPin, Heart, Users, Clock, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import { Slider } from "@/components/ui/slider";

const Matching = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState({
    interests: [],
    duration: [4],
    languages: [],
    skills: [],
    availability: "",
    experience: ""
  });

  const interests = [
    "Bildung & Unterrichten",
    "Umweltschutz",
    "Gesundheit & Medizin", 
    "Tierschutz",
    "Soziale Arbeit",
    "Infrastruktur & Bauen",
    "Landwirtschaft",
    "Technologie & IT"
  ];

  const languages = [
    "Deutsch", "Englisch", "Spanisch", "Französisch", 
    "Portugiesisch", "Mandarin", "Hindi", "Arabisch"
  ];

  const skills = [
    "Lehrerfahrung",
    "Handwerkliche Fähigkeiten", 
    "Medizinische Kenntnisse",
    "IT & Computer",
    "Fotografie",
    "Kochen",
    "Musik",
    "Sport & Fitness"
  ];

  const matchedProjects = [
    {
      id: 1,
      title: "Bildungsprojekt in Guatemala",
      organization: "Niños del Futuro",
      location: "Antigua, Guatemala",
      duration: "2-12 Wochen",
      match: 95,
      description: "Unterrichte Englisch und unterstütze Kinder bei den Hausaufgaben.",
      participants: 156,
      rating: 4.9
    },
    {
      id: 2,
      title: "Umweltschutz in Costa Rica",
      organization: "Green Paradise",
      location: "Manuel Antonio, Costa Rica", 
      duration: "3-8 Wochen",
      match: 87,
      description: "Schutz des Regenwaldes und Aufforstungsprojekte.",
      participants: 89,
      rating: 4.8
    },
    {
      id: 3,
      title: "Sozialprojekt in Thailand",
      organization: "Community Care",
      location: "Chiang Mai, Thailand",
      duration: "4-16 Wochen", 
      match: 82,
      description: "Arbeit mit Straßenkindern und Gemeindezentren.",
      participants: 203,
      rating: 4.7
    }
  ];

  const handleInterestChange = (interest, checked) => {
    if (checked) {
      setFormData(prev => ({
        ...prev,
        interests: [...prev.interests, interest]
      }));
    } else {
      setFormData(prev => ({
        ...prev,
        interests: prev.interests.filter(i => i !== interest)
      }));
    }
  };

  const handleLanguageChange = (language, checked) => {
    if (checked) {
      setFormData(prev => ({
        ...prev,
        languages: [...prev.languages, language]
      }));
    } else {
      setFormData(prev => ({
        ...prev,
        languages: prev.languages.filter(l => l !== language)
      }));
    }
  };

  const handleSkillChange = (skill, checked) => {
    if (checked) {
      setFormData(prev => ({
        ...prev,
        skills: [...prev.skills, skill]
      }));
    } else {
      setFormData(prev => ({
        ...prev,
        skills: prev.skills.filter(s => s !== skill)
      }));
    }
  };

  const nextStep = () => {
    if (currentStep < 4) {
      setCurrentStep(currentStep + 1);
    }
  };

  const prevStep = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  return (
    <div className="min-h-screen py-8 px-4 bg-gradient-to-br from-primary-50 to-secondary-50">
      <div className="container mx-auto max-w-4xl">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Finde dein <span className="text-primary-600">perfektes Match</span>
          </h1>
          <p className="text-xl text-gray-600">
            Beantworte ein paar Fragen und wir finden die besten Projekte für dich
          </p>
        </div>

        {/* Progress Bar */}
        <div className="mb-8">
          <div className="flex items-center justify-between mb-2">
            <span className="text-sm text-gray-600">Schritt {currentStep} von 4</span>
            <span className="text-sm text-gray-600">{Math.round((currentStep / 4) * 100)}% komplett</span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-2">
            <div 
              className="bg-gradient-to-r from-primary-500 to-primary-600 h-2 rounded-full transition-all duration-300"
              style={{ width: `${(currentStep / 4) * 100}%` }}
            ></div>
          </div>
        </div>

        <Card className="shadow-xl border-0">
          <CardContent className="p-8">
            {/* Step 1: Interests */}
            {currentStep === 1 && (
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-6">
                  Was interessiert dich am meisten?
                </h2>
                <p className="text-gray-600 mb-8">
                  Wähle alle Bereiche aus, in denen du gerne helfen möchtest:
                </p>
                <div className="grid md:grid-cols-2 gap-4 mb-8">
                  {interests.map((interest) => (
                    <div key={interest} className="flex items-center space-x-3 p-4 rounded-lg border hover:bg-gray-50 transition-colors">
                      <Checkbox
                        id={interest}
                        checked={formData.interests.includes(interest)}
                        onCheckedChange={(checked) => handleInterestChange(interest, checked)}
                      />
                      <label htmlFor={interest} className="text-gray-700 cursor-pointer flex-1">
                        {interest}
                      </label>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Step 2: Duration and Availability */}
            {currentStep === 2 && (
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-6">
                  Wie lange möchtest du helfen?
                </h2>
                <div className="mb-8">
                  <label className="block text-gray-700 font-medium mb-4">
                    Geplante Dauer: {formData.duration[0]} Wochen
                  </label>
                  <Slider
                    value={formData.duration}
                    onValueChange={(value) => setFormData(prev => ({ ...prev, duration: value }))}
                    max={24}
                    min={1}
                    step={1}
                    className="mb-6"
                  />
                  <div className="flex justify-between text-sm text-gray-500">
                    <span>1 Woche</span>
                    <span>24 Wochen</span>
                  </div>
                </div>
                
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  Wann bist du verfügbar?
                </h3>
                <div className="grid md:grid-cols-2 gap-4">
                  {["Sofort", "In 1-3 Monaten", "In 3-6 Monaten", "In 6+ Monaten"].map((option) => (
                    <div key={option} className="flex items-center space-x-3 p-4 rounded-lg border hover:bg-gray-50 transition-colors">
                      <input
                        type="radio"
                        id={option}
                        name="availability"
                        value={option}
                        checked={formData.availability === option}
                        onChange={(e) => setFormData(prev => ({ ...prev, availability: e.target.value }))}
                        className="text-primary-600"
                      />
                      <label htmlFor={option} className="text-gray-700 cursor-pointer flex-1">
                        {option}
                      </label>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Step 3: Languages */}
            {currentStep === 3 && (
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-6">
                  Welche Sprachen sprichst du?
                </h2>
                <p className="text-gray-600 mb-8">
                  Wähle alle Sprachen aus, die du sprechen kannst:
                </p>
                <div className="grid md:grid-cols-2 gap-4 mb-8">
                  {languages.map((language) => (
                    <div key={language} className="flex items-center space-x-3 p-4 rounded-lg border hover:bg-gray-50 transition-colors">
                      <Checkbox
                        id={language}
                        checked={formData.languages.includes(language)}
                        onCheckedChange={(checked) => handleLanguageChange(language, checked)}
                      />
                      <label htmlFor={language} className="text-gray-700 cursor-pointer flex-1">
                        {language}
                      </label>
                    </div>
                  ))}
                </div>
                
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  Besondere Fähigkeiten
                </h3>
                <div className="grid md:grid-cols-2 gap-4">
                  {skills.map((skill) => (
                    <div key={skill} className="flex items-center space-x-3 p-4 rounded-lg border hover:bg-gray-50 transition-colors">
                      <Checkbox
                        id={skill}
                        checked={formData.skills.includes(skill)}
                        onCheckedChange={(checked) => handleSkillChange(skill, checked)}
                      />
                      <label htmlFor={skill} className="text-gray-700 cursor-pointer flex-1">
                        {skill}
                      </label>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Step 4: Results */}
            {currentStep === 4 && (
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-6">
                  Deine perfekten Matches! 🎉
                </h2>
                <p className="text-gray-600 mb-8">
                  Basierend auf deinen Angaben haben wir diese Projekte für dich gefunden:
                </p>
                <div className="space-y-6">
                  {matchedProjects.map((project) => (
                    <Card key={project.id} className="border-2 border-primary-200 hover:border-primary-300 transition-colors">
                      <CardContent className="p-6">
                        <div className="flex items-start justify-between mb-4">
                          <div className="flex-1">
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
                          </div>
                          <div className="text-center">
                            <div className="bg-gradient-to-r from-primary-500 to-primary-600 text-white rounded-full w-16 h-16 flex items-center justify-center mb-2">
                              <span className="text-lg font-bold">{project.match}%</span>
                            </div>
                            <span className="text-sm text-gray-600">Match</span>
                          </div>
                        </div>
                        
                        <p className="text-gray-700 mb-4">
                          {project.description}
                        </p>
                        
                        <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                          <div className="flex items-center">
                            <Clock className="h-4 w-4 mr-1" />
                            <span>{project.duration}</span>
                          </div>
                          <div className="flex items-center">
                            <Users className="h-4 w-4 mr-1" />
                            <span>{project.participants} Teilnehmer</span>
                          </div>
                          <div className="flex items-center">
                            <Star className="h-4 w-4 mr-1 text-accent-500" />
                            <span>{project.rating}</span>
                          </div>
                        </div>
                        
                        <div className="flex gap-3">
                          <Button className="flex-1 bg-gradient-to-r from-primary-500 to-primary-600 hover:from-primary-600 hover:to-primary-700">
                            Jetzt bewerben
                          </Button>
                          <Button variant="outline" size="icon">
                            <Heart className="h-4 w-4" />
                          </Button>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            )}

            {/* Navigation Buttons */}
            <div className="flex justify-between mt-8">
              <Button
                variant="outline"
                onClick={prevStep}
                disabled={currentStep === 1}
                className="flex items-center"
              >
                <ChevronLeft className="h-4 w-4 mr-2" />
                Zurück
              </Button>
              
              {currentStep < 4 ? (
                <Button
                  onClick={nextStep}
                  className="bg-gradient-to-r from-primary-500 to-primary-600 hover:from-primary-600 hover:to-primary-700 flex items-center"
                >
                  Weiter
                  <ChevronRight className="h-4 w-4 ml-2" />
                </Button>
              ) : (
                <Button className="bg-gradient-to-r from-accent-500 to-accent-600 hover:from-accent-600 hover:to-accent-700">
                  Alle Projekte ansehen
                </Button>
              )}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Matching;
