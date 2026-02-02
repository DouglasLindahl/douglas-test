import { useState } from "react";
import { Calculator, Check, ArrowRight } from "lucide-react";
import { Button } from "@/app/components/ui/button";
import { Label } from "@/app/components/ui/label";
import { Input } from "@/app/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/app/components/ui/select";
import { Card, CardContent } from "@/app/components/ui/card";

// Price rates per square meter per month for different service categories
const serviceRates = {
  basic: {
    name: "Grundpaket",
    description: "Månadsvisa inspektioner och rapporter",
    pricePerSqm: 15,
    features: [
      "Månadsvisa inspektioner",
      "Digitala rapporter med foton",
      "Säkerhetskontroller",
      "En dedikerad kontaktperson",
    ],
  },
  standard: {
    name: "Standardpaket",
    description: "Inspektioner + regelbunden städning",
    pricePerSqm: 35,
    features: [
      "Allt i Grundpaket",
      "Städning varannan vecka",
      "Fönsterputsning 2 gånger/år",
      "Mindre underhållsarbeten",
    ],
  },
  premium: {
    name: "Premiumpaket",
    description: "Fullservice fastighetsskötsel",
    pricePerSqm: 60,
    features: [
      "Allt i Standardpaket",
      "Veckovis städning",
      "Komplett trädgårdsskötsel",
      "Vinterberedskap och snöröjning",
      "Koordinering av alla hantverkare",
      "24/7 akutservice",
    ],
  },
  custom: {
    name: "Anpassat paket",
    description: "Skräddarsydd lösning efter dina behov",
    pricePerSqm: 0,
    features: [
      "Vi skapar ett paket som passar dig perfekt",
      "Flexibel servicenivå",
      "Kontakta oss för offert",
    ],
  },
};

export function PriceCalculatorPage() {
  const [selectedCategory, setSelectedCategory] = useState<string>("");
  const [squareMeters, setSquareMeters] = useState<string>("");
  const [calculatedPrice, setCalculatedPrice] = useState<number | null>(null);

  const handleCalculate = () => {
    if (selectedCategory && squareMeters && selectedCategory !== "custom") {
      const sqm = parseFloat(squareMeters);
      if (!isNaN(sqm) && sqm > 0) {
        const rate =
          serviceRates[selectedCategory as keyof typeof serviceRates]
            .pricePerSqm;
        const price = rate * sqm;
        setCalculatedPrice(price);
      }
    }
  };

  const selectedService = selectedCategory
    ? serviceRates[selectedCategory as keyof typeof serviceRates]
    : null;

  return (
    <div className="min-h-screen pt-32 pb-20 bg-gradient-to-b from-accent/30 to-white">
      <div className="container mx-auto px-6 lg:px-12">
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-white px-5 py-2 rounded-full border border-primary/20 shadow-sm mb-6">
            <Calculator className="w-4 h-4 text-secondary" />
            <span className="text-sm text-primary">Priskalkylator</span>
          </div>
          <h1 className="text-5xl lg:text-6xl text-primary mb-6">
            Beräkna ditt pris
          </h1>
          <p className="text-xl text-foreground/60 leading-relaxed">
            Välj ett tjänstepaket och ange din fastighets storlek för att få en
            direkt prisuppskattning
          </p>
        </div>

        <div className="max-w-5xl mx-auto grid lg:grid-cols-2 gap-8">
          {/* Calculator Form */}
          <Card className="border-primary/10">
            <CardContent className="p-8">
              <div className="space-y-8">
                <div className="space-y-3">
                  <Label htmlFor="category">Välj tjänstekategori</Label>
                  <Select
                    onValueChange={(value: any) => {
                      setSelectedCategory(value);
                      setCalculatedPrice(null);
                    }}
                  >
                    <SelectTrigger id="category" className="h-12">
                      <SelectValue placeholder="Välj ett paket..." />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="basic">Grundpaket</SelectItem>
                      <SelectItem value="standard">Standardpaket</SelectItem>
                      <SelectItem value="premium">Premiumpaket</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-3">
                  <Label htmlFor="sqm">Fastighetens storlek (kvm)</Label>
                  <Input
                    id="sqm"
                    type="number"
                    placeholder="T.ex. 150"
                    value={squareMeters}
                    onChange={(e) => {
                      setSquareMeters(e.target.value);
                      setCalculatedPrice(null);
                    }}
                    className="h-12"
                    min="0"
                  />
                </div>

                {selectedCategory !== "custom" ? (
                  <Button
                    onClick={handleCalculate}
                    disabled={!selectedCategory || !squareMeters}
                    className="w-full h-12 bg-primary hover:bg-secondary group"
                  >
                    Beräkna pris
                    <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </Button>
                ) : (
                  <Button className="w-full h-12 bg-primary hover:bg-secondary">
                    Kontakta oss för offert
                  </Button>
                )}

                {/* Price Result */}
                {calculatedPrice !== null && (
                  <div className="bg-gradient-to-br from-primary to-secondary text-white rounded-2xl p-8 text-center space-y-4">
                    <div className="text-sm opacity-90">
                      Uppskattat månadspris
                    </div>
                    <div className="text-5xl">
                      {calculatedPrice.toLocaleString("sv-SE")} kr
                    </div>
                    <div className="text-sm opacity-90">per månad</div>
                    <div className="pt-4 border-t border-white/20 text-sm">
                      <p className="opacity-90">
                        Detta är en uppskattning. Kontakta oss för en exakt
                        offert baserad på dina specifika behov.
                      </p>
                    </div>
                  </div>
                )}
              </div>
            </CardContent>
          </Card>

          {/* Service Details */}
          <div className="space-y-6">
            {selectedService ? (
              <Card className="border-primary/10">
                <CardContent className="p-8 space-y-6">
                  <div className="space-y-2">
                    <h3 className="text-2xl text-primary">
                      {selectedService.name}
                    </h3>
                    <p className="text-foreground/60">
                      {selectedService.description}
                    </p>
                    {selectedService.pricePerSqm > 0 && (
                      <div className="pt-2">
                        <span className="text-3xl text-secondary">
                          {selectedService.pricePerSqm} kr
                        </span>
                        <span className="text-foreground/60">
                          {" "}
                          / kvm / månad
                        </span>
                      </div>
                    )}
                  </div>

                  <div className="space-y-3 pt-4">
                    <h4 className="text-foreground/80">
                      Inkluderat i paketet:
                    </h4>
                    {selectedService.features.map((feature, index) => (
                      <div key={index} className="flex items-start gap-3">
                        <div className="w-5 h-5 rounded-full bg-secondary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                          <Check className="w-3 h-3 text-secondary" />
                        </div>
                        <span className="text-sm text-foreground/70">
                          {feature}
                        </span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ) : (
              <Card className="border-primary/10">
                <CardContent className="p-8 text-center space-y-4">
                  <div className="w-16 h-16 bg-accent rounded-2xl flex items-center justify-center mx-auto">
                    <Calculator className="w-8 h-8 text-secondary" />
                  </div>
                  <h3 className="text-xl text-primary">Välj ett paket</h3>
                  <p className="text-foreground/60">
                    Börja med att välja ett tjänstepaket för att se detaljer och
                    beräkna ditt pris
                  </p>
                </CardContent>
              </Card>
            )}

            {/* Info Box */}
            <Card className="border-primary/10 bg-accent/50">
              <CardContent className="p-6 space-y-3">
                <h4 className="text-primary">Viktigt att veta</h4>
                <ul className="space-y-2 text-sm text-foreground/70">
                  <li className="flex items-start gap-2">
                    <span className="text-secondary mt-1">•</span>
                    <span>Priserna är baserade på genomsnittlig fastighet</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-secondary mt-1">•</span>
                    <span>Ingen bindningstid eller uppsägningstid</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-secondary mt-1">•</span>
                    <span>Första konsultationen är alltid kostnadsfri</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-secondary mt-1">•</span>
                    <span>Vi kan anpassa alla paket efter dina behov</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* CTA Section */}
        <div className="max-w-3xl mx-auto mt-20 text-center">
          <Card className="border-primary/10 bg-white">
            <CardContent className="p-12 space-y-6">
              <h3 className="text-3xl text-primary">Redo att komma igång?</h3>
              <p className="text-lg text-foreground/60">
                Boka en kostnadsfri konsultation så hjälper vi dig hitta det
                perfekta paketet för din fastighet
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
                <Button size="lg" className="bg-primary hover:bg-secondary">
                  Boka konsultation
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-primary/20"
                >
                  Kontakta oss
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
