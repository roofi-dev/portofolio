
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight, MoveRight } from "lucide-react";

export function Hero() {
  return (
    <section id="home" className="relative w-full py-20 md:py-32 bg-card overflow-hidden">
      <div className="container mx-auto px-4 md:px-6 grid md:grid-cols-2 items-center gap-12">
        <div className="relative z-10 space-y-6 text-center md:text-left">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-headline tracking-tighter text-primary">
            Firdha Roofi Irawan: IT Support Specialist
          </h1>
          <p className="max-w-xl mx-auto md:mx-0 text-lg text-muted-foreground">
            Menjaga sistem Anda berjalan 24/7 dengan dukungan teknis yang proaktif, responsif, dan berorientasi pada pelanggan untuk meningkatkan efisiensi operasional.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
            <Button asChild size="lg" className="bg-primary hover:bg-primary/90">
              <Link href="#keahlian">
                Lihat Keahlian Saya
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="border-primary text-primary hover:bg-primary/5 hover:text-primary">
              <Link href="#kontak">
                Hubungi Saya
                <MoveRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
        <div className="relative h-64 md:h-auto">
          <Image
            src="https://placehold.co/600x600.png"
            alt="Firdha Roofi Irawan - IT Support Professional"
            width={600}
            height={600}
            priority
            className="rounded-full shadow-2xl object-cover aspect-square mx-auto"
            data-ai-hint="professional tech support person"
          />
           <div className="absolute inset-0 rounded-full border-4 border-primary/20 animate-pulse"></div>
           <div className="absolute inset-4 rounded-full border-2 border-accent/20 animate-pulse delay-500"></div>
        </div>
      </div>
    </section>
  );
}
