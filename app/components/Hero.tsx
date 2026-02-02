import { Button } from "@/app/components/ui/button";
import { ArrowRight, Play } from "lucide-react";

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      {/* Background with overlay */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-background via-accent/50 to-background z-10"></div>
        <img
          src="https://images.unsplash.com/photo-1520099823969-e9c747f601a4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBzd2VkaXNoJTIwaG9tZSUyMGFyY2hpdGVjdHVyZXxlbnwxfHx8fDE3NzAwNjgwOTZ8MA&ixlib=rb-4.1.0&q=80&w=1080"
          alt="Swedish home"
          className="w-full h-full object-cover opacity-20"
        />
      </div>

      {/* Content */}
      <div className="container mx-auto px-6 lg:px-12 relative z-20">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-white/80 backdrop-blur-sm px-5 py-2 rounded-full border border-primary/20 shadow-sm">
            <div className="w-2 h-2 bg-secondary rounded-full animate-pulse"></div>
            <span className="text-sm text-primary">
              Sveriges mest personliga fastighetstjänst
            </span>
          </div>

          {/* Main Heading */}
          <h1 className="text-5xl md:text-7xl lg:text-8xl text-primary tracking-tight">
            Din fastighet.
            <br />
            <span className="text-secondary">Vårt ansvar.</span>
          </h1>

          {/* Subheading */}
          <p className="text-xl md:text-2xl text-foreground/60 max-w-2xl mx-auto leading-relaxed">
            Professionell fastighetsskötsel med en personlig touch. Vi tar hand
            om allt – från regelbundna inspektioner till akuta problem.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4">
            <Button
              size="lg"
              className="bg-primary hover:bg-secondary group shadow-xl"
            >
              Kom igång
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-primary/20 hover:bg-white/50 group"
            >
              <Play className="mr-2 w-5 h-5" />
              Se hur det fungerar
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-8 pt-16 max-w-2xl mx-auto">
            <div className="space-y-2">
              <div className="text-4xl text-primary">500+</div>
              <div className="text-sm text-foreground/60">Nöjda kunder</div>
            </div>
            <div className="space-y-2">
              <div className="text-4xl text-primary">24/7</div>
              <div className="text-sm text-foreground/60">Tillgänglighet</div>
            </div>
            <div className="space-y-2">
              <div className="text-4xl text-primary">15+</div>
              <div className="text-sm text-foreground/60">År i branschen</div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20">
        <div className="w-6 h-10 border-2 border-primary/30 rounded-full flex items-start justify-center p-2">
          <div className="w-1 h-2 bg-primary rounded-full animate-bounce"></div>
        </div>
      </div>
    </section>
  );
}
