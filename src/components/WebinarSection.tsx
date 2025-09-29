import { WebinarCard } from "./WebinarCard";

export const WebinarSection = () => {
  const webinars = [
    {
      title: "Introduktion till Digital Marknadsföring",
      description: "Lär dig grunderna i digital marknadsföring och hur du skapar en framgångsrik strategi",
      date: "15 Oktober 2025",
      time: "14:00 - 15:30",
      spots: 25,
    },
    {
      title: "Avancerad SEO-strategi",
      description: "Fördjupa dina kunskaper inom sökmotoroptimering och teknisk SEO",
      date: "22 Oktober 2025",
      time: "13:00 - 14:30",
      spots: 15,
    },
    {
      title: "Content Marketing Masterclass",
      description: "Skapa innehåll som konverterar och bygger varumärke",
      date: "29 Oktober 2025",
      time: "14:00 - 16:00",
      spots: 30,
    },
  ];

  return (
    <section id="webinars" className="py-20 px-4 bg-muted/30">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Kommande webinars
          </h2>
          <p className="text-xl text-muted-foreground">
            Delta i våra expertledda sessioner och ta din karriär till nästa nivå
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {webinars.map((webinar, index) => (
            <WebinarCard key={index} {...webinar} />
          ))}
        </div>
      </div>
    </section>
  );
};
