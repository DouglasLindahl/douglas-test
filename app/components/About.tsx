import { Check } from "lucide-react";
import { Button } from "@/app/components/ui/button";

export function About() {
  return (
    <section id="om" className="py-32 bg-gradient-to-b from-white to-accent/30">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Image Side */}
          <div className="relative">
            <div className="absolute -inset-4 bg-gradient-to-br from-secondary/20 to-primary/20 rounded-3xl blur-2xl"></div>
            <div className="relative grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <img
                  src="https://images.unsplash.com/photo-1755200642814-44d27abc264e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzY2FuZGluYXZpYW4lMjBnYXJkZW4lMjBzdW1tZXJ8ZW58MXx8fHwxNzcwMDY4MDk3fDA&ixlib=rb-4.1.0&q=80&w=1080"
                  alt="Garden care"
                  className="rounded-2xl shadow-xl w-full h-64 object-cover"
                />
                <img
                  src="https://images.unsplash.com/photo-1734490957246-0fc74b4cb539?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBwcm9wZXJ0eSUyMGNhcmV0YWtlcnxlbnwxfHx8fDE3NzAwNjgwOTZ8MA&ixlib=rb-4.1.0&q=80&w=1080"
                  alt="Professional service"
                  className="rounded-2xl shadow-xl w-full h-48 object-cover"
                />
              </div>
              <div className="space-y-4 pt-8">
                <img
                  src="https://images.unsplash.com/photo-1761353854314-4bda99811659?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBob21lJTIwbWFpbnRlbmFuY2V8ZW58MXx8fHwxNzcwMDY4MDk3fDA&ixlib=rb-4.1.0&q=80&w=1080"
                  alt="Home maintenance"
                  className="rounded-2xl shadow-xl w-full h-48 object-cover"
                />
                <img
                  src="https://images.unsplash.com/photo-1520099823969-e9c747f601a4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBzd2VkaXNoJTIwaG9tZSUyMGFyY2hpdGVjdHVyZXxlbnwxfHx8fDE3NzAwNjgwOTZ8MA&ixlib=rb-4.1.0&q=80&w=1080"
                  alt="Swedish home"
                  className="rounded-2xl shadow-xl w-full h-64 object-cover"
                />
              </div>
            </div>
          </div>

          {/* Content Side */}
          <div className="space-y-8">
            <div>
              <div className="inline-block px-4 py-1 bg-accent rounded-full text-sm text-secondary mb-6">
                Om Uppsikt
              </div>
              <h2 className="text-5xl text-primary mb-6 leading-tight">
                Personlig service som gör skillnad
              </h2>
              <p className="text-lg text-foreground/60 leading-relaxed mb-6">
                Vi tror på långsiktiga relationer. Därför får du en dedikerad
                kontaktperson som lär känna din fastighet, dina behov och dina
                preferenser.
              </p>
              <p className="text-lg text-foreground/60 leading-relaxed">
                Ingen automatiserade system, ingen anonymitet – bara äkta
                människor som bryr sig om att hålla ditt hem i perfekt skick.
              </p>
            </div>

            <div className="space-y-4">
              {[
                "En dedikerad kontaktperson för varje kund",
                "Proaktiv kommunikation och transparens",
                "Detaljerad dokumentation av alla åtgärder",
                "Flexibla lösningar anpassade efter dina behov",
                "Snabb respons vid akuta situationer",
              ].map((item, index) => (
                <div key={index} className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-secondary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Check className="w-4 h-4 text-secondary" />
                  </div>
                  <span className="text-foreground/70">{item}</span>
                </div>
              ))}
            </div>

            <Button size="lg" className="bg-primary hover:bg-secondary">
              Läs mer om oss
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
