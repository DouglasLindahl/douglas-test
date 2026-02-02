import {
  MapPin,
  Phone,
  Mail,
  Facebook,
  Instagram,
  Linkedin,
} from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-primary text-white">
      <div className="container mx-auto px-6 lg:px-12 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div className="space-y-6">
            <div className="flex items-center space-x-3">
              <div className="w-12 h-12 bg-gradient-to-br from-white/20 to-white/10 rounded-xl flex items-center justify-center">
                <span className="text-white text-xl">U</span>
              </div>
              <span className="text-2xl">UPPSIKT</span>
            </div>
            <p className="text-white/70 text-sm leading-relaxed">
              Sveriges mest personliga fastighetstjänst. Vi tar hand om din
              bostad så att du kan fokusera på det som verkligen betyder något.
            </p>
            <div className="flex gap-4">
              <a
                href="#"
                className="w-10 h-10 bg-white/10 hover:bg-white/20 rounded-lg flex items-center justify-center transition-colors"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-white/10 hover:bg-white/20 rounded-lg flex items-center justify-center transition-colors"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-white/10 hover:bg-white/20 rounded-lg flex items-center justify-center transition-colors"
              >
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Tjänster */}
          <div>
            <h4 className="text-lg mb-6">Tjänster</h4>
            <ul className="space-y-3 text-sm text-white/70">
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Inspektioner
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Städning
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Fönsterputsning
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Trädgårdsskötsel
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Vinterberedskap
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Underhåll
                </a>
              </li>
            </ul>
          </div>

          {/* Företag */}
          <div>
            <h4 className="text-lg mb-6">Företag</h4>
            <ul className="space-y-3 text-sm text-white/70">
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Om Uppsikt
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Vår filosofi
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Teamet
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Karriär
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Blogg
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Press
                </a>
              </li>
            </ul>
          </div>

          {/* Kontakt */}
          <div>
            <h4 className="text-lg mb-6">Kontakt</h4>
            <ul className="space-y-4 text-sm text-white/70">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 flex-shrink-0 mt-0.5" />
                <span>
                  Storgatan 1<br />
                  114 55 Stockholm
                </span>
              </li>
              <li className="flex items-start gap-3">
                <Phone className="w-5 h-5 flex-shrink-0 mt-0.5" />
                <a
                  href="tel:+46000000000"
                  className="hover:text-white transition-colors"
                >
                  +46 (0)00 000 00 00
                </a>
              </li>
              <li className="flex items-start gap-3">
                <Mail className="w-5 h-5 flex-shrink-0 mt-0.5" />
                <a
                  href="mailto:info@uppsikt.se"
                  className="hover:text-white transition-colors"
                >
                  info@uppsikt.se
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-white/10">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-white/60">
            <p>© 2026 Uppsikt AB. Alla rättigheter förbehållna.</p>
            <div className="flex gap-6">
              <a href="#" className="hover:text-white transition-colors">
                Integritetspolicy
              </a>
              <a href="#" className="hover:text-white transition-colors">
                Användarvillkor
              </a>
              <a href="#" className="hover:text-white transition-colors">
                Cookies
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
