
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Award, CheckCircle, Users } from "lucide-react";

const testimonials = [
    { name: "Andi Wijaya", company: "CEO, Startup Maju", text: "Dukungan IT yang luar biasa! Waktu respons sangat cepat dan semua masalah kami terselesaikan dengan profesional. Sangat direkomendasikan.", avatar: "AW" },
    { name: "Siti Rahayu", company: "Manajer Operasional, UKM Kreatif", text: "Firdha telah mengubah cara kami bekerja. Sistem kami sekarang jauh lebih stabil dan aman. Terima kasih atas bantuannya!", avatar: "SR" },
    { name: "Budi Santoso", company: "Kepala Cabang, Perusahaan Logistik", text: "Profesional, berpengetahuan luas, dan sangat sabar dalam menjelaskan masalah teknis. Layanan yang benar-benar bisa diandalkan.", avatar: "BS" },
];

const caseStudies = [
    {
        title: "Implementasi Cloud Storage Nextcloud",
        description: "Mengimplementasikan sistem penyimpanan berbasis cloud (Nextcloud) yang berhasil mengurangi biaya penyimpanan dan meningkatkan aksesibilitas data untuk seluruh karyawan."
    },
    {
        title: "Pengembangan Aplikasi Kinerja Karyawan",
        description: "Mengembangkan sistem digitalisasi manajemen kinerja berbasis web (PHP/Laravel) yang secara signifikan meningkatkan akurasi data untuk evaluasi karyawan."
    },
    {
        title: "Rancang Bangun Jaringan Redundan",
        description: "Merancang dan mengimplementasikan solusi jaringan redundan menggunakan perangkat Cisco, yang berhasil mengurangi downtime jaringan secara drastis dan memastikan operasional tetap berjalan normal."
    },
    {
        title: "Otomatisasi Proses Administratif",
        description: "Membangun sistem otomatisasi berbasis web yang mengoptimalkan proses administratif utama, meningkatkan efisiensi, dan mengintegrasikan sistem ke platform terpusat."
    }
];

export function Portfolio() {
  return (
    <section id="portfolio" className="py-20 md:py-28 bg-card">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-3xl md:text-4xl font-bold font-headline text-primary">Portfolio & Pencapaian</h2>
          <p className="max-w-2xl mx-auto text-lg text-muted-foreground">
            Hasil nyata dan kepuasan klien adalah prioritas utama saya.
          </p>
        </div>
        
        <div className="grid lg:grid-cols-3 gap-8 mb-16">
            <Card className="text-center bg-primary/5 border-primary/20">
                <CardHeader>
                    <Award className="h-12 w-12 mx-auto text-primary" />
                    <CardTitle className="text-4xl font-bold text-primary">5+</CardTitle>
                </CardHeader>
                <CardContent>
                    <p className="text-muted-foreground font-medium">Tahun Pengalaman</p>
                </CardContent>
            </Card>
            <Card className="text-center bg-primary/5 border-primary/20">
                <CardHeader>
                    <CheckCircle className="h-12 w-12 mx-auto text-primary" />
                    <CardTitle className="text-4xl font-bold text-primary">99%</CardTitle>
                </CardHeader>
                <CardContent>
                    <p className="text-muted-foreground font-medium">System Uptime</p>
                </CardContent>
            </Card>
            <Card className="text-center bg-primary/5 border-primary/20">
                <CardHeader>
                    <Users className="h-12 w-12 mx-auto text-primary" />
                    <CardTitle className="text-4xl font-bold text-primary">150+</CardTitle>
                </CardHeader>
                <CardContent>
                    <p className="text-muted-foreground font-medium">Pengguna Telah Dibantu</p>
                </CardContent>
            </Card>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
                <h3 className="text-2xl font-bold mb-6 text-center lg:text-left">Studi Kasus</h3>
                <Accordion type="single" collapsible className="w-full">
                    {caseStudies.map((study, index) => (
                        <AccordionItem key={index} value={`item-${index}`}>
                            <AccordionTrigger className="text-lg font-semibold hover:no-underline">{study.title}</AccordionTrigger>
                            <AccordionContent className="text-muted-foreground text-base">
                                {study.description}
                            </AccordionContent>
                        </AccordionItem>
                    ))}
                </Accordion>
            </div>
             <div>
                <h3 className="text-2xl font-bold mb-6 text-center lg:text-left">Testimoni Klien</h3>
                <Carousel className="w-full">
                    <CarouselContent>
                        {testimonials.map((testimonial, index) => (
                        <CarouselItem key={index}>
                            <div className="p-1">
                            <Card className="shadow-none border-dashed">
                                <CardContent className="flex flex-col items-center text-center p-6 space-y-4">
                                    <Avatar>
                                        <AvatarImage src={`https://placehold.co/40x40.png?text=${testimonial.avatar}`} alt={testimonial.name} />
                                        <AvatarFallback>{testimonial.avatar}</AvatarFallback>
                                    </Avatar>
                                    <p className="text-muted-foreground italic">"{testimonial.text}"</p>
                                    <div className="font-semibold">
                                        {testimonial.name}
                                        <span className="font-normal text-sm text-muted-foreground">, {testimonial.company}</span>
                                    </div>
                                </CardContent>
                            </Card>
                            </div>
                        </CarouselItem>
                        ))}
                    </CarouselContent>
                    <CarouselPrevious className="hidden sm:flex" />
                    <CarouselNext className="hidden sm:flex" />
                </Carousel>
            </div>
        </div>
      </div>
    </section>
  );
}
