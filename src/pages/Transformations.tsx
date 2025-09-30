import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight, ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import sofiaImage from "@/assets/person-sofia.jpg";
import marcusImage from "@/assets/person-marcus.jpg";
import emmaImage from "@/assets/person-emma.jpg";

const transformations = [
  {
    name: "Sofia Andersson",
    age: 34,
    image: sofiaImage,
    before: {
      title: "Innan programmet",
      description: "Sofia arbetade som redovisningskonsult och kände sig fast i ett jobb som inte gav henne energi. Hon tvivlade på sin förmåga att göra karriärskifte och saknade mod att följa sin passion för företagande. Vardagen kändes grå och meningslös."
    },
    after: {
      title: "Efter transformationen",
      description: "Idag driver Sofia sitt eget framgångsrika konsultföretag inom hållbart ledarskap. Hon har hittat sin passion och hjälper andra ledare att växa. Sofia har också mer tid för familj och hälsa, och vaknar varje morgon med en känsla av syfte och glädje."
    }
  },
  {
    name: "Marcus Bergström",
    age: 41,
    image: marcusImage,
    before: {
      title: "Innan programmet",
      description: "Marcus hade arbetat i IT-branschen i 15 år men kände sig utbränd och frustrerad. Han hade glömt sina drömmar och levde på autopilot. Relationen med familjen led och han hade tappat lusten för livet. Stressen påverkade hans hälsa negativt."
    },
    after: {
      title: "Efter transformationen",
      description: "Marcus har hittat balansen i livet och bytt till ett jobb som engagerar honom. Han har återfått relationen med sin familj och tränar regelbundet. Idag lever han ett liv där arbete, familj och fritid samspelar harmoniskt. Han har lärt sig att sätta gränser och prioritera det som verkligen betyder något."
    }
  },
  {
    name: "Emma Lindqvist",
    age: 28,
    image: emmaImage,
    before: {
      title: "Innan programmet",
      description: "Emma kände sig vilsen efter universitetet och hoppade mellan olika jobb utan att hitta sin väg. Hon jämförde sig ständigt med andra på sociala medier och kände sig otillräcklig. Självförtroendet var lågt och hon visste inte vad hon ville med sitt liv."
    },
    after: {
      title: "Efter transformationen",
      description: "Emma har hittat sin väg och arbetar nu som UX-designer på ett företag hon brinner för. Hon har lärt sig att uppskatta sin egen resa och slutat jämföra sig med andra. Med nytt självförtroende har hon också börjat resa och utforska världen. Hennes kreativitet och glädje lyser igenom allt hon gör."
    }
  }
];

const Transformations = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-background/80">
      <div className="container mx-auto px-4 py-20">
        <Link to="/">
          <Button variant="ghost" className="mb-8 group">
            <ArrowLeft className="mr-2 group-hover:-translate-x-1 transition-transform" />
            Tillbaka
          </Button>
        </Link>

        <div className="max-w-4xl mx-auto text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-primary via-primary-glow to-primary bg-clip-text text-transparent">
            Inspirerande Livsresor
          </h1>
          <p className="text-xl text-muted-foreground">
            Möt tre personer som vågade ta steget och transformerade sina liv. 
            Deras resor visar att förändring är möjlig för alla som vågar satsa på sig själva.
          </p>
        </div>

        <div className="space-y-20">
          {transformations.map((person, index) => (
            <Card key={index} className="overflow-hidden border-2 hover:border-primary/50 transition-colors">
              <CardContent className="p-0">
                <div className="grid md:grid-cols-2 gap-8 p-8">
                  <div className="flex flex-col items-center text-center space-y-6">
                    <div className="relative w-48 h-48 rounded-full overflow-hidden ring-4 ring-primary/20">
                      <img 
                        src={person.image} 
                        alt={person.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div>
                      <h2 className="text-3xl font-bold mb-2">{person.name}</h2>
                      <p className="text-muted-foreground">{person.age} år</p>
                    </div>
                  </div>

                  <div className="space-y-6">
                    <div className="bg-muted/30 rounded-lg p-6">
                      <h3 className="text-xl font-semibold mb-3 text-destructive/80">
                        {person.before.title}
                      </h3>
                      <p className="text-muted-foreground leading-relaxed">
                        {person.before.description}
                      </p>
                    </div>

                    <div className="flex justify-center">
                      <ArrowRight className="w-8 h-8 text-primary animate-pulse" />
                    </div>

                    <div className="bg-primary/5 rounded-lg p-6 border-2 border-primary/20">
                      <h3 className="text-xl font-semibold mb-3 text-primary">
                        {person.after.title}
                      </h3>
                      <p className="text-foreground leading-relaxed">
                        {person.after.description}
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-20">
          <h2 className="text-3xl font-bold mb-6">Din resa börjar här</h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Precis som Sofia, Marcus och Emma kan du också skapa den förändring du längtar efter. 
            Ta första steget idag.
          </p>
          <Link to="/#pricing">
            <Button size="lg" className="text-lg group">
              Välj ditt program
              <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Transformations;
