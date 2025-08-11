
import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle2 } from "lucide-react";

const uniqueSellingPoints = [
  "Dukungan di lokasi (on-site) dan jarak jauh (remote)",
  "Kemampuan komunikasi multibahasa",
  "Berpengalaman di berbagai sektor industri",
  "Pendekatan pemeliharaan yang proaktif",
  "Keterampilan komunikasi yang sangat baik"
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
                    alt="Foto Profesional IT Support"
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
              Dengan pengalaman lebih dari 5 tahun sebagai IT Support, saya memiliki hasrat mendalam untuk memecahkan masalah dan membantu pengguna. Pendekatan saya yang berorientasi pada pelanggan memastikan setiap masalah teknis ditangani dengan efisien, efektif, dan komunikasi yang jelas.
            </p>
            <p className="text-muted-foreground">
              Saya memegang sertifikasi industri seperti CompTIA A+ dan Network+, yang menjadi bukti komitmen saya terhadap keunggulan teknis. Saya percaya pada pemeliharaan proaktif untuk mencegah masalah sebelum terjadi, memastikan kelancaran operasional bisnis Anda.
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
