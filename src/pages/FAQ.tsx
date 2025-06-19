
import { Shield, Lock, Award, Globe, HeadphonesIcon, AlertCircle } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const FAQ = () => {
  const faqCategories = [
    {
      title: "Allgemeine Fragen",
      icon: Globe,
      questions: [
        {
          question: "Was ist Helpy und wie funktioniert es?",
          answer: "Helpy ist eine Plattform, die junge Menschen direkt mit verifizierten NGOs und Freiwilligenprojekten weltweit verbindet - ohne teure Vermittlungsgebühren. Wir prüfen alle Organisationen sorgfältig und sorgen für transparente, faire Konditionen."
        },
        {
          question: "Kostet die Nutzung von Helpy etwas?",
          answer: "Die Grundnutzung von Helpy ist komplett kostenlos. Du zahlst nur die tatsächlichen Projektkosten direkt an die NGO. Wir verdienen durch optionale Premium-Services wie erweiterte Beratung oder Zusatzversicherungen."
        },
        {
          question: "Wie unterscheidet sich Helpy von anderen Anbietern?",
          answer: "Anders als teure Vermittlungsagenturen nehmen wir keine hohen Gebühren. Wir sind eine gemeinnützige Initiative, die faire, transparente Freiwilligenarbeit ermöglicht. Unsere Projekte sind sorgfältig geprüft und du behältst die volle Kostenkontrolle."
        }
      ]
    },
    {
      title: "Sicherheit & Datenschutz",
      icon: Shield,
      questions: [
        {
          question: "Wie stellt Helpy meine Sicherheit sicher?",
          answer: "Alle unsere Partner-NGOs durchlaufen einen strengen Prüfprozess. Wir arbeiten nur mit etablierten, vertrauenswürdigen Organisationen zusammen. Vor jedem Einsatz erhältst du umfassende Sicherheitsinformationen und 24/7-Notfallkontakte."
        },
        {
          question: "Wie werden meine Daten geschützt?",
          answer: "Deine Daten werden nach höchsten europäischen Datenschutzstandards (DSGVO) behandelt. Wir geben niemals persönliche Informationen an Dritte weiter und nutzen modernste Verschlüsselungstechnologie."
        },
        {
          question: "Was passiert im Notfall?",
          answer: "Jeder Freiwillige erhält eine 24/7-Notfallhotline. Unsere Partner vor Ort sind geschult in Notfallmanagement und wir arbeiten mit lokalen Behörden zusammen. Eine Auslandsversicherung wird für alle Teilnehmer empfohlen."
        }
      ]
    },
    {
      title: "Bewerbung & Qualifikation",
      icon: Award,
      questions: [
        {
          question: "Welche Voraussetzungen muss ich erfüllen?",
          answer: "Die meisten Projekte erfordern ein Mindestalter von 18 Jahren und Grundkenntnisse in Englisch oder der Landessprache. Spezielle Qualifikationen sind projektabhängig - viele Projekte sind auch für Einsteiger geeignet."
        },
        {
          question: "Wie lange dauert der Bewerbungsprozess?",
          answer: "Nach deiner Anmeldung und dem Matching-Prozess dauert es meist 1-2 Wochen bis zur finalen Bestätigung. Wir empfehlen, dich mindestens 2-3 Monate vor dem gewünschten Start zu bewerben."
        },
        {
          question: "Kann ich auch ohne Vorerfahrung mitmachen?",
          answer: "Absolut! Viele unserer Projekte sind speziell für Einsteiger konzipiert. Du erhältst vor Ort eine gründliche Einführung und wirst während deines Einsatzes kontinuierlich betreut."
        }
      ]
    },
    {
      title: "Kosten & Zahlung",
      icon: Lock,
      questions: [
        {
          question: "Was ist in den Projektkosten enthalten?",
          answer: "Die Kosten variieren je nach Projekt, enthalten aber typischerweise Unterkunft, Verpflegung, Projektbetreuung, Orientierung und ein Teilnahmezertifikat. Flug, Visa und persönliche Ausgaben sind meist nicht enthalten."
        },
        {
          question: "Wie und wann muss ich bezahlen?",
          answer: "Du zahlst direkt an die NGO nach einem transparenten Zahlungsplan. Meist ist eine Anzahlung bei Bestätigung fällig, der Rest vor Projektbeginn. Helpy erhebt keine versteckten Gebühren."
        },
        {
          question: "Gibt es Stornierungsmöglichkeiten?",
          answer: "Jede NGO hat eigene Stornobedingungen, die du vor der Buchung einsehen kannst. Wir empfehlen eine Reiserücktrittsversicherung. Bei Stornierungen durch höhere Gewalt helfen wir bei der Lösungsfindung."
        }
      ]
    }
  ];

  const contactInfo = [
    {
      title: "E-Mail Support",
      description: "Antwort innerhalb von 24 Stunden",
      contact: "support@helpy.org",
      icon: HeadphonesIcon
    },
    {
      title: "Telefonberatung",
      description: "Mo-Fr 9:00-18:00 Uhr",
      contact: "+49 (0) 30 12345678",
      icon: HeadphonesIcon
    },
    {
      title: "Live Chat",
      description: "Sofortige Hilfe online",
      contact: "Jetzt chatten",
      icon: HeadphonesIcon
    }
  ];

  return (
    <div className="min-h-screen py-8 px-4 bg-gray-50">
      <div className="container mx-auto max-w-4xl">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Häufige <span className="text-primary-600">Fragen</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Hier findest du Antworten auf die wichtigsten Fragen rund um Helpy und Freiwilligenarbeit
          </p>
        </div>

        {/* Safety Notice */}
        <Card className="mb-8 border-l-4 border-l-primary-500 bg-primary-50">
          <CardContent className="p-6">
            <div className="flex items-start">
              <AlertCircle className="h-6 w-6 text-primary-600 mr-3 mt-1 flex-shrink-0" />
              <div>
                <h3 className="text-lg font-semibold text-primary-900 mb-2">
                  Deine Sicherheit ist unser Wichtigstes
                </h3>
                <p className="text-primary-800">
                  Alle unsere Partner-NGOs sind sorgfältig geprüft und verifiziert. Wir stehen dir vor, während und nach deinem Einsatz mit Rat und Tat zur Seite. Bei Fragen zur Sicherheit wende dich jederzeit an unser Team.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* FAQ Categories */}
        <div className="space-y-8">
          {faqCategories.map((category, categoryIndex) => {
            const Icon = category.icon;
            return (
              <Card key={categoryIndex} className="shadow-lg">
                <CardContent className="p-6">
                  <div className="flex items-center mb-6">
                    <div className="w-12 h-12 bg-gradient-to-r from-primary-500 to-secondary-500 rounded-lg flex items-center justify-center mr-4">
                      <Icon className="h-6 w-6 text-white" />
                    </div>
                    <h2 className="text-2xl font-bold text-gray-900">
                      {category.title}
                    </h2>
                  </div>

                  <Accordion type="single" collapsible className="w-full">
                    {category.questions.map((faq, faqIndex) => (
                      <AccordionItem key={faqIndex} value={`item-${categoryIndex}-${faqIndex}`}>
                        <AccordionTrigger className="text-left text-lg font-medium hover:text-primary-600">
                          {faq.question}
                        </AccordionTrigger>
                        <AccordionContent className="text-gray-600 leading-relaxed">
                          {faq.answer}
                        </AccordionContent>
                      </AccordionItem>
                    ))}
                  </Accordion>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Contact Section */}
        <div className="mt-16">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Noch Fragen?
            </h2>
            <p className="text-xl text-gray-600">
              Unser Team hilft dir gerne weiter
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 mb-8">
            {contactInfo.map((contact, index) => {
              const Icon = contact.icon;
              return (
                <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <div className="w-16 h-16 bg-gradient-to-r from-primary-500 to-secondary-500 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Icon className="h-8 w-8 text-white" />
                    </div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">
                      {contact.title}
                    </h3>
                    <p className="text-gray-600 text-sm mb-3">
                      {contact.description}
                    </p>
                    <p className="text-primary-600 font-medium">
                      {contact.contact}
                    </p>
                  </CardContent>
                </Card>
              );
            })}
          </div>

          {/* CTA */}
          <Card className="bg-gradient-to-r from-primary-500 to-secondary-500 text-white text-center">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold mb-4">
                Bereit für dein Abenteuer?
              </h3>
              <p className="text-primary-100 mb-6 text-lg">
                Finde jetzt dein perfektes Freiwilligenprojekt und starte deine Reise
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="bg-white text-primary-600 hover:bg-gray-100">
                  Projekt finden
                </Button>
                <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-primary-600">
                  Beratung buchen
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default FAQ;
