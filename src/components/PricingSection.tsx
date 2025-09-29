import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Check } from "lucide-react";

export const PricingSection = () => {
  const plans = [
    {
      name: "Gratis",
      price: "0",
      description: "Perfekt för att komma igång",
      features: [
        "Tillgång till utvalda webinars",
        "Community-forum",
        "Grundläggande material",
      ],
    },
    {
      name: "Premium",
      price: "299",
      description: "För seriösa lärande",
      features: [
        "Obegränsad tillgång till alla webinars",
        "Exklusivt premiummaterial",
        "Nedladdningsbara resurser",
        "Prioriterad support",
        "Certifikat vid slutförande",
      ],
      popular: true,
    },
    {
      name: "Företag",
      price: "999",
      description: "För team och organisationer",
      features: [
        "Allt i Premium",
        "Upp till 10 användare",
        "Skräddarsydda webinars",
        "Dedikerad account manager",
        "Anpassade rapporter",
      ],
    },
  ];

  return (
    <section id="pricing" className="py-20 px-4">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Välj rätt plan för dig
          </h2>
          <p className="text-xl text-muted-foreground">
            Flexibla abonnemang som växer med dina behov
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan, index) => (
            <Card 
              key={index} 
              className={plan.popular ? "border-primary shadow-lg scale-105" : ""}
            >
              <CardHeader>
                {plan.popular && (
                  <div className="text-sm font-semibold text-primary mb-2">
                    MEST POPULÄR
                  </div>
                )}
                <CardTitle className="text-3xl">{plan.name}</CardTitle>
                <CardDescription>{plan.description}</CardDescription>
                <div className="mt-4">
                  <span className="text-4xl font-bold">{plan.price} kr</span>
                  <span className="text-muted-foreground">/månad</span>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  {plan.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <Check className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
              <CardFooter>
                <Button 
                  className="w-full" 
                  variant={plan.popular ? "default" : "outline"}
                >
                  Kom igång
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
