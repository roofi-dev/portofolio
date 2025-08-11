
import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle2 } from "lucide-react";

const uniqueSellingPoints = [
  "Dukungan di lokasi (on-site) dan jarak jauh (remote)",
  "Kemampuan komunikasi yang baik",
  "Berpengalaman di berbagai tantangan IT",
  "Pendekatan pemeliharaan yang proaktif",
  "Peningkatan keamanan sistem dan efisiensi kerja"
];

export function About() {
  return (
    <section id="tentang-saya" className="py-20 md:py-28">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid md:grid-cols-3 gap-12 items-center">
          <div className="md:col-span-1 flex justify-center">
            <Card className="rounded-xl shadow-lg overflow-hidden border-2 border-primary/10 w-full max-w-sm">
                <Image
                    src="https://placehold.co/400x500.png"
                    alt="Foto Profesional Firdha Roofi Irawan"
                    width={400}
                    height={500}
                    className="object-cover w-full h-full"
                    data-ai-hint="professional IT person"
                />
            </Card>
          </div>
          <div className="md:col-span-2 space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold font-headline text-primary">Tentang Saya</h2>
            <p className="text-lg text-muted-foreground">
              Spesialis Support & Infrastruktur Information Technology dengan lebih dari lima tahun pengalaman yang berfokus pada peningkatan efisiensi operasional, keandalan sistem dan memberikan dukungan teknis baik onsite maupun remote.
            </p>
            <p className="text-muted-foreground">
              Saya mampu beradaptasi dengan cepat dengan kemampuan komunikasi yang baik dalam merancang, mengimplementasikan dan mengimprovisasi solusi ketika menghadapi tantangan dalam bidang teknologi informasi. Berkomitmen terhadap peningkatan keamanan sistem, efisiensi kerja dan kepuasan pengguna.
            </p>
            <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-4">
              {uniqueSellingPoints.map((point, index) => (
                <div key={index} className="flex items-start gap-3">
                  <CheckCircle2 className="h-6 w-6 text-accent mt-1 flex-shrink-0" />
                  <span className="text-foreground">{point}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
