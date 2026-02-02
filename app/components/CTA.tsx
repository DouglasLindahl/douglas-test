import { Button } from "@/app/components/ui/button";
import { ArrowRight, Phone, Mail } from "lucide-react";

export function CTA() {
  return (
    <section id="kontakt" className="relative py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary via-secondary to-primary"></div>

      {/* Pattern overlay */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10 w-72 h-72 bg-white rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 right-10 w-96 h-96 bg-white rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        <div className="max-w-4xl mx-auto">
          <div className="text-center space-y-8 mb-12">
            <h2 className="text-5xl lg:text-6xl text-white">
              Redo att förenkla ditt fastighetsägande?
            </h2>
            <p className="text-xl text-white/90 leading-relaxed">
              Boka en kostnadsfri konsultation idag. Vi besöker din fastighet,
              lyssnar på dina behov och skapar en skräddarsydd lösning – helt
              utan förpliktelser.
            </p>
          </div>

          {/* Contact cards */}
          <div className="grid md:grid-cols-2 gap-6 max-w-2xl mx-auto">
            <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-6 text-center">
              <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center mx-auto mb-4">
                <Phone className="w-6 h-6 text-white" />
              </div>
              <div className="text-sm text-white/70 mb-2">Ring oss</div>
              <a
                href="tel:+46760176960"
                className="text-lg text-white hover:underline"
              >
                +46 760 17 69 60
              </a>
            </div>

            <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-6 text-center">
              <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center mx-auto mb-4">
                <Mail className="w-6 h-6 text-white" />
              </div>
              <div className="text-sm text-white/70 mb-2">Mejla oss</div>
              <a
                href="mailto:info@uppsikt.se"
                className="text-lg text-white hover:underline"
              >
                info@uppsikt.se
              </a>
            </div>
          </div>

          {/* Trust badges */}
          <div className="mt-16 pt-8 border-t border-white/20">
            <div className="grid grid-cols-3 gap-8 text-center">
              <div>
                <div className="text-3xl text-white mb-2">100%</div>
                <div className="text-sm text-white/70">Kundnöjdhet</div>
              </div>
              <div>
                <div className="text-3xl text-white mb-2">Ingen</div>
                <div className="text-sm text-white/70">Bindningstid</div>
              </div>
              <div>
                <div className="text-3xl text-white mb-2">24/7</div>
                <div className="text-sm text-white/70">Support</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
