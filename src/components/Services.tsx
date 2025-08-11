
import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Wrench, Network, Settings, UserCheck, Laptop, ServerCog } from "lucide-react";

const servicesData = [
  {
    title: "Technical Support & Troubleshooting",
    description: "Diagnosis dan penyelesaian masalah hardware dan software dengan cepat dan efektif.",
    icon: <Wrench className="h-10 w-10 text-accent" />,
  },
  {
    title: "Administrasi Jaringan",
    description: "Pengelolaan dan pemeliharaan jaringan LAN/WAN untuk memastikan konektivitas yang stabil.",
    icon: <Network className="h-10 w-10 text-accent" />,
  },
  {
    title: "System Maintenance & Optimization",
    description: "Pemeliharaan rutin dan optimisasi sistem untuk performa maksimal dan pencegahan masalah.",
    icon: <Settings className="h-10 w-10 text-accent" />,
  },
  {
    title: "Pelatihan & Dokumentasi Pengguna",
    description: "Memberikan pelatihan kepada pengguna dan membuat dokumentasi yang mudah dipahami.",
    icon: <UserCheck className="h-10 w-10 text-accent" />,
  },
  {
    title: "Layanan Dukungan Jarak Jauh",
    description: "Memberikan bantuan teknis secara remote untuk penyelesaian masalah yang lebih cepat.",
    icon: <Laptop className="h-10 w-10 text-accent" />,
  },
  {
    title: "Setup Infrastruktur IT",
    description: "Membantu dalam perencanaan dan pemasangan infrastruktur IT untuk kantor baru atau upgrade.",
    icon: <ServerCog className="h-10 w-10 text-accent" />,
  },
];

export function Services() {
  return (
    <section id="layanan" className="py-20 md:py-28">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center space-y-4 mb-12">
          <h2 className="text-3xl md:text-4xl font-bold font-headline text-primary">Layanan yang Ditawarkan</h2>
          <p className="max-w-2xl mx-auto text-lg text-muted-foreground">
            Menyediakan berbagai layanan untuk memenuhi semua kebutuhan IT bisnis Anda.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {servicesData.map((service) => (
            <Card key={service.title} className="text-center shadow-md hover:shadow-lg transition-shadow duration-300 rounded-xl flex flex-col">
              <CardHeader className="items-center">
                <div className="p-4 bg-accent/10 rounded-full mb-4">
                    {service.icon}
                </div>
                <CardTitle className="text-xl font-headline">{service.title}</CardTitle>
              </CardHeader>
              <CardDescription className="p-6 pt-0 text-base">
                {service.description}
              </CardDescription>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
