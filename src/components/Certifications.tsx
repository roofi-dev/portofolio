
import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";

const certifications = [
  { name: "Google IT Support Professional", logo: "https://placehold.co/200x150.png", hint: "Coursera certification badge" },
  { name: "IBM Technical Support", logo: "https://placehold.co/200x150.png", hint: "IBM certificate" },
  { name: "Fullstack Developer with Ruby", logo: "https://placehold.co/200x150.png", hint: "Kominfo certification logo" },
  { name: "React Developer", logo: "https://placehold.co/200x150.png", hint: "Digitalent badge" },
];

export function Certifications() {
  return (
    <section id="sertifikasi" className="py-20 md:py-28">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center space-y-4 mb-12">
          <h2 className="text-3xl md:text-4xl font-bold font-headline text-primary">Sertifikasi & Pelatihan</h2>
          <p className="max-w-2xl mx-auto text-lg text-muted-foreground">
            Selalu meningkatkan keahlian melalui sertifikasi dan pelatihan industri terkemuka.
          </p>
        </div>
        <div className="flex flex-wrap justify-center items-center gap-8">
          {certifications.map((cert, index) => (
            <div key={index} className="group text-center">
                <Card className="p-6 bg-card rounded-lg shadow-sm hover:shadow-lg transition-shadow duration-300">
                    <Image
                        src={cert.logo}
                        alt={`${cert.name} logo`}
                        width={200}
                        height={150}
                        className="object-contain h-24 w-auto mx-auto"
                        data-ai-hint={cert.hint}
                    />
                </Card>
                <p className="mt-4 font-semibold text-muted-foreground group-hover:text-primary transition-colors">{cert.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
