import { MessageCircle, FileCheck, Repeat, Heart } from "lucide-react";

const steps = [
  {
    number: "01",
    icon: MessageCircle,
    title: "Kostnadsfri konsultation",
    description:
      "Vi träffas för att diskutera dina behov och gör en grundlig genomgång av fastigheten. Inga dolda kostnader, inga förpliktelser.",
  },
  {
    number: "02",
    icon: FileCheck,
    title: "Skräddarsydd plan",
    description:
      "Din personliga kontaktperson skapar en serviceavtal som passar perfekt för dig – vare sig du behöver veckovis tillsyn eller säsongshjälp.",
  },
  {
    number: "03",
    icon: Repeat,
    title: "Löpande skötsel",
    description:
      "Vi utför regelbundna inspektioner, hanterar underhåll och löser problem. Allt dokumenteras med foton och detaljerade rapporter.",
  },
  {
    number: "04",
    icon: Heart,
    title: "Trygg tillvaro",
    description:
      "Du får kontinuerliga uppdateringar och kan luta dig tillbaka med vetskapen om att ditt hem är i trygga händer.",
  },
];

export function Process() {
  return (
    <section id="process" className="py-32 bg-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-accent rounded-full blur-3xl opacity-50"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-secondary/10 rounded-full blur-3xl opacity-50"></div>

      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <div className="inline-block px-4 py-1 bg-accent rounded-full text-sm text-secondary mb-6">
            Vår process
          </div>
          <h2 className="text-5xl lg:text-6xl text-primary mb-6">
            Enkelt att komma igång
          </h2>
          <p className="text-xl text-foreground/60">
            Från första kontakt till löpande skötsel – vi gör det smidigt och
            transparent
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
            {steps.map((step, index) => (
              <div key={index} className="relative group">
                {/* Connection line for desktop */}
                {index % 2 === 0 && index < steps.length - 2 && (
                  <div className="hidden md:block absolute top-20 left-1/2 w-px h-full bg-gradient-to-b from-primary/20 to-transparent"></div>
                )}

                <div className="relative bg-white rounded-3xl p-8 border border-primary/10 hover:border-primary/20 hover:shadow-2xl transition-all">
                  {/* Number badge */}
                  <div className="absolute -top-4 -left-4 w-16 h-16 bg-gradient-to-br from-primary to-secondary rounded-2xl shadow-xl flex items-center justify-center">
                    <span className="text-white text-xl">{step.number}</span>
                  </div>

                  <div className="space-y-4 pt-6">
                    <div className="w-14 h-14 bg-accent rounded-xl flex items-center justify-center">
                      <step.icon className="w-7 h-7 text-secondary" />
                    </div>

                    <h3 className="text-2xl text-primary">{step.title}</h3>

                    <p className="text-foreground/60 leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
