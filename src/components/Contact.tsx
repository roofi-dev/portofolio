
import Link from "next/link";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Linkedin } from "lucide-react";

// Custom WhatsApp Icon Component
const WhatsAppIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    role="img"
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <title>WhatsApp</title>
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.861 9.861 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
  </svg>
);

export function Contact() {
  return (
    <section id="kontak" className="py-20 md:py-28">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center space-y-4 mb-12">
          <h2 className="text-3xl md:text-4xl font-bold font-headline text-primary">Hubungi Saya</h2>
          <p className="max-w-2xl mx-auto text-lg text-muted-foreground">
            Ada pertanyaan atau butuh bantuan IT? Jangan ragu untuk menghubungi saya. Saya berkomitmen merespons dalam 24 jam.
          </p>
        </div>
        <div className="grid lg:grid-cols-5 gap-12">
          <div className="lg:col-span-3">
            <Card className="shadow-lg p-2 sm:p-4">
                <CardHeader>
                    <CardTitle>Kirim Pesan</CardTitle>
                    <CardDescription>Isi formulir di bawah ini dan saya akan segera menghubungi Anda.</CardDescription>
                </CardHeader>
              <CardContent>
                <form className="space-y-4">
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Input id="name" placeholder="Nama Anda" />
                    </div>
                    <div className="space-y-2">
                      <Input id="email" type="email" placeholder="Email Anda" />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Textarea id="message" placeholder="Pesan Anda" className="min-h-[120px]" />
                  </div>
                  <Button type="submit" className="w-full bg-primary hover:bg-primary/90">Kirim Pesan</Button>
                </form>
              </CardContent>
            </Card>
          </div>
          <div className="lg:col-span-2 space-y-6">
            <h3 className="text-xl font-semibold">Atau hubungi melalui:</h3>
            <div className="space-y-4">
                <Button asChild variant="outline" className="w-full justify-start h-14 text-lg border-2 hover:bg-primary/5 hover:border-primary">
                    <Link href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4">
                        <Linkedin className="h-7 w-7 text-primary" />
                        LinkedIn Profile
                    </Link>
                </Button>
                <Button asChild variant="outline" className="w-full justify-start h-14 text-lg border-2 hover:bg-accent/5 hover:border-accent">
                    <Link href="https://wa.me/6281234567890" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4">
                         <WhatsAppIcon className="h-7 w-7 text-accent fill-current" />
                        WhatsApp Business
                    </Link>
                </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
