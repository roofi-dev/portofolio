
import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Wrench, Network, Settings, UserCheck, ServerCog, Database } from "lucide-react";

const servicesData = [
  {
    title: "Technical Support & Troubleshooting",
    description: "Diagnosis dan penyelesaian masalah hardware, software, dan jaringan dengan cepat dan efektif.",
    icon: <Wrench className="h-10 w-10 text-accent" />,
  },
  {
    title: "Administrasi Sistem & Server",
    description: "Pengelolaan dan pemeliharaan server Windows & Linux untuk memastikan kestabilan dan keamanan.",
    icon: <ServerCog className="h-10 w-10 text-accent" />,
  },
  {
    title: "Manajemen Jaringan & Keamanan",
    description: "Konfigurasi LAN/WAN, firewall, dan VPN untuk memastikan konektivitas yang aman dan stabil.",
    icon: <Network className="h-10 w-10 text-accent" />,
  },
  {
    title: "System Maintenance & Optimization",
    description: "Pemeliharaan rutin dan optimisasi sistem untuk performa maksimal dan pencegahan masalah.",
    icon: <Settings className="h-10 w-10 text-accent" />,
  },
  {
    title: "Backup & Data Recovery",
    description: "Implementasi strategi pencadangan dan pemulihan data untuk melindungi aset digital bisnis Anda.",
    icon: <Database className="h-10 w-10 text-accent" />,
  },
  {
    title: "Pelatihan & Edukasi Pengguna",
    description: "Memberikan pelatihan dan edukasi keamanan siber kepada pengguna untuk meningkatkan kesadaran.",
    icon: <UserCheck className="h-10 w-10 text-accent" />,
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
