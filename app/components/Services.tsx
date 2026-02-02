import {
  Search,
  Sparkles,
  Wind,
  Leaf,
  Snowflake,
  Hammer,
  ShieldCheck,
  FileText,
} from "lucide-react";

const services = [
  {
    icon: Search,
    title: "Inspektioner",
    description:
      "Regelbundna genomgångar av fastigheten för att upptäcka problem tidigt.",
    color: "from-blue-500/10 to-blue-600/10",
    iconColor: "text-blue-600",
  },
  {
    icon: Sparkles,
    title: "Städning",
    description: "Professionell städning anpassad efter dina behov och schema.",
    color: "from-purple-500/10 to-purple-600/10",
    iconColor: "text-purple-600",
  },
  {
    icon: Wind,
    title: "Fönsterputsning",
    description: "Kristallklara fönster året om, inuti och utanför.",
    color: "from-cyan-500/10 to-cyan-600/10",
    iconColor: "text-cyan-600",
  },
  {
    icon: Leaf,
    title: "Trädgård",
    description: "Komplett skötsel av gräsmatta, växter och utemiljö.",
    color: "from-green-500/10 to-green-600/10",
    iconColor: "text-green-600",
  },
  {
    icon: Snowflake,
    title: "Vinterberedskap",
    description: "Skydda din fastighet mot vintervädrets påfrestningar.",
    color: "from-indigo-500/10 to-indigo-600/10",
    iconColor: "text-indigo-600",
  },
  {
    icon: Hammer,
    title: "Hantverkare",
    description: "Vi koordinerar alla nödvändiga reparationer och underhåll.",
    color: "from-orange-500/10 to-orange-600/10",
    iconColor: "text-orange-600",
  },
  {
    icon: ShieldCheck,
    title: "Säkerhet",
    description: "Regelbundna säkerhetskontroller för trygghet och skydd.",
    color: "from-red-500/10 to-red-600/10",
    iconColor: "text-red-600",
  },
  {
    icon: FileText,
    title: "Dokumentation",
    description:
      "Fullständig rapportering med foton och detaljerade noteringar.",
    color: "from-slate-500/10 to-slate-600/10",
    iconColor: "text-slate-600",
  },
];

export function Services() {
  return (
    <section id="tjanster" className="py-32 bg-white relative">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="max-w-3xl mb-20">
          <div className="inline-block px-4 py-1 bg-accent rounded-full text-sm text-secondary mb-6">
            Våra tjänster
          </div>
          <h2 className="text-5xl lg:text-6xl text-primary mb-6">
            Allt du behöver för din fastighet
          </h2>
          <p className="text-xl text-foreground/60 leading-relaxed">
            Vi erbjuder ett komplett utbud av fastighetstjänster – allt från
            daglig skötsel till specialiserade projekt.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <div
              key={index}
              className="group relative p-8 rounded-2xl border border-primary/10 hover:border-primary/20 transition-all hover:shadow-xl bg-white"
            >
              <div
                className={`absolute inset-0 bg-gradient-to-br ${service.color} rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity`}
              ></div>

              <div className="relative space-y-4">
                <div
                  className={`w-14 h-14 rounded-xl bg-gradient-to-br ${service.color} flex items-center justify-center`}
                >
                  <service.icon className={`w-7 h-7 ${service.iconColor}`} />
                </div>

                <h3 className="text-xl text-primary">{service.title}</h3>

                <p className="text-sm text-foreground/60 leading-relaxed">
                  {service.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
