"use client";

import { useState } from "react";
import { Calculator, ArrowRight } from "lucide-react";
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
import { CTA } from "../components/CTA";

/* =======================
   TYPES
======================= */

type City = "sotenäs" | "göteborg" | "stockholm";
type Service = "hemstad" | "flyttstad" | "fonsterputs" | "custom";

/* =======================
   PRICING DATA
======================= */

const hemstadData = [
  { from: 0, to: 50, time: 1 },
  { from: 51, to: 75, time: 1.5 },
  { from: 76, to: 100, time: 2.5 },
  { from: 101, to: 125, time: 3.5 },
  { from: 126, to: 150, time: 4.5 },
  { from: 151, to: 200, time: 5.5 },
  { from: 201, to: 250, time: 7 },
  { from: 251, to: 300, time: 8 },
];

const flyttstadData = [
  { from: 0, to: 45, time: 8 },
  { from: 46, to: 60, time: 10 },
  { from: 61, to: 80, time: 14 },
  { from: 81, to: 100, time: 17 },
  { from: 101, to: 150, time: 25 },
  { from: 151, to: 200, time: 33 },
  { from: 201, to: 250, time: 40 },
  { from: 251, to: 300, time: 48 },
];

const TIMPRIS = {
  sotenäs: {
    hemstad: 625,
    flyttstad: 750,
    fonsterputs: 300,
  },
  göteborg: {
    hemstad: 725,
    flyttstad: 850,
    fonsterputs: 400,
  },
  stockholm: {
    hemstad: 825,
    flyttstad: 950,
    fonsterputs: 500,
  },
} as const;

/* =======================
   HELPERS
======================= */

function getTimeFromSqm(
  sqm: number,
  table: { from: number; to: number; time: number }[],
) {
  return table.find((row) => sqm >= row.from && sqm <= row.to)?.time ?? null;
}

const serviceInfo: Record<Service, string> = {
  hemstad:
    "Hemstäd beräknas utifrån bostadens storlek och den tid som krävs för ett grundligt veckostäd.",
  flyttstad:
    "Flyttstäd är mer omfattande och inkluderar hela bostaden enligt mäklarstandard.",
  fonsterputs:
    "Fönsterputs prissätts per fönster och inkluderar putsning av glasets alla sidor.",
  custom: "Ett anpassat paket skräddarsys helt efter dina behov och önskemål.",
};

/* =======================
   COMPONENT
======================= */

export function PriceCalculatorPage() {
  const [city, setCity] = useState<City | "">("");
  const [service, setService] = useState<Service | "">("");
  const [inputValue, setInputValue] = useState("");
  const [price, setPrice] = useState<number | null>(null);

  const handleCalculate = () => {
    if (!city || !service || service === "custom") return;

    const value = Number(inputValue);
    if (isNaN(value) || value <= 0) return;

    let total = 0;

    if (service === "fonsterputs") {
      total = value * TIMPRIS[city].fonsterputs;
    } else {
      const time =
        service === "hemstad"
          ? getTimeFromSqm(value, hemstadData)
          : getTimeFromSqm(value, flyttstadData);

      if (!time) return;

      total = time * TIMPRIS[city][service];
    }

    setPrice(Math.round(total));
  };

  const rutPrice = price ? Math.round(price / 2) : null;

  /* =======================
     RENDER
  ======================= */

  return (
    <div className="min-h-screen pt-32 pb-20 bg-gradient-to-b from-accent/30 to-white">
      <div className="container mx-auto px-6 lg:px-12">
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
          {/* LEFT */}
          <Card>
            <CardContent className="p-8 space-y-6">
              <div>
                <Label>Välj kommun</Label>
                <Select onValueChange={(v: City) => setCity(v)}>
                  <SelectTrigger className="h-12">
                    <SelectValue placeholder="Välj kommun..." />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="sotenäs">Sotenäs</SelectItem>
                    <SelectItem value="göteborg">Göteborg</SelectItem>
                    <SelectItem value="stockholm">Stockholm</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div>
                <Label>Välj tjänst</Label>
                <Select onValueChange={(v: Service) => setService(v)}>
                  <SelectTrigger className="h-12">
                    <SelectValue placeholder="Välj tjänst..." />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="hemstad">Hemstäd</SelectItem>
                    <SelectItem value="flyttstad">Flyttstäd</SelectItem>
                    <SelectItem value="fonsterputs">Fönsterputs</SelectItem>
                    <SelectItem value="custom">Anpassat paket</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              {service && service !== "custom" && (
                <div>
                  <Label>
                    {service === "fonsterputs"
                      ? "Antal fönster"
                      : "Fastighetens storlek (kvm)"}
                  </Label>
                  <Input
                    type="number"
                    min="1"
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                    placeholder={
                      service === "fonsterputs" ? "T.ex. 12" : "T.ex. 120"
                    }
                  />
                </div>
              )}

              {service !== "custom" ? (
                <Button
                  onClick={handleCalculate}
                  disabled={!city || !service || !inputValue}
                  className="w-full h-12"
                >
                  Beräkna pris
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              ) : (
                <Button className="w-full h-12">Kontakta oss för offert</Button>
              )}

              {price !== null && (
                <div className="bg-primary text-white rounded-xl p-6 text-center space-y-2">
                  <div className="text-sm opacity-80">Uppskattat pris</div>
                  <div className="text-4xl font-bold">
                    {price.toLocaleString("sv-SE")} kr
                  </div>
                  <div className="text-sm opacity-80">
                    Efter RUT-avdrag:{" "}
                    <strong>{rutPrice?.toLocaleString("sv-SE")} kr</strong>
                  </div>
                </div>
              )}
            </CardContent>
          </Card>

          {/* RIGHT */}
          <Card>
            <CardContent className="p-8 space-y-4 text-center">
              <Calculator className="w-10 h-10 mx-auto text-secondary" />
              <p className="text-muted-foreground">
                {service
                  ? serviceInfo[service]
                  : "Välj en tjänst för mer information."}
              </p>
            </CardContent>
          </Card>
        </div>
        {/* CTA Section */}
      </div>
    </div>
  );
}
