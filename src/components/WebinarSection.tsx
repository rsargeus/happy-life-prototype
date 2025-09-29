import { WebinarCard } from "./WebinarCard";

export const WebinarSection = () => {
  const webinars = [
    {
      title: "Hitta din livsriktning",
      description: "Upptäck dina värderingar och skapa en klar vision för ditt liv",
      date: "15 Oktober 2025",
      time: "19:00 - 20:30",
      spots: 25,
    },
    {
      title: "Från dröm till verklighet",
      description: "Konkreta strategier för att sätta och uppnå dina livsmål",
      date: "22 Oktober 2025",
      time: "18:00 - 19:30",
      spots: 15,
    },
    {
      title: "Mindset för framgång",
      description: "Bryt negativa mönster och bygg en stark mental grund",
      date: "29 Oktober 2025",
      time: "19:00 - 21:00",
      spots: 30,
    },
  ];

  return (
    <section id="webinars" className="py-20 px-4 bg-muted/30">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Kommande transformationsprogram
          </h2>
          <p className="text-xl text-muted-foreground">
            Delta i våra live-webinars och ta första steget mot ditt drömliv
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
