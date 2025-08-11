
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { HardDrive, AppWindow, Network, Ticket, ShieldCheck, Check } from "lucide-react";

const skillsData = [
  {
    category: "Hardware",
    icon: <HardDrive className="h-8 w-8 text-primary" />,
    skills: ["Troubleshooting PC/Laptop", "Perawatan Printer", "Manajemen Perangkat Jaringan", "Instalasi Komponen"],
  },
  {
    category: "Software",
    icon: <AppWindow className="h-8 w-8 text-primary" />,
    skills: ["Windows & macOS", "Microsoft Office 365", "Active Directory", "Remote Desktop Tools"],
  },
  {
    category: "Jaringan",
    icon: <Network className="h-8 w-8 text-primary" />,
    skills: ["Konfigurasi LAN/WAN", "Protokol TCP/IP", "Setup VPN", "Dasar-dasar Firewall"],
  },
  {
    category: "Help Desk",
    icon: <Ticket className="h-8 w-8 text-primary" />,
    skills: ["Sistem Tiket (Jira, Zendesk)", "Dokumentasi Teknis", "Pelatihan Pengguna", "Manajemen SLA"],
  },
  {
    category: "Keamanan",
    icon: <ShieldCheck className="h-8 w-8 text-primary" />,
    skills: ["Manajemen Antivirus", "Solusi Backup & Recovery", "Edukasi Keamanan Siber", "Patch Management"],
  },
];

export function Skills() {
  return (
    <section id="keahlian" className="py-20 md:py-28 bg-card">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center space-y-4 mb-12">
          <h2 className="text-3xl md:text-4xl font-bold font-headline text-primary">Keahlian Teknis</h2>
          <p className="max-w-2xl mx-auto text-lg text-muted-foreground">
            Menguasai berbagai teknologi untuk memberikan solusi IT yang komprehensif dan efektif.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillsData.map((category) => (
            <Card key={category.category} className="shadow-lg hover:shadow-xl hover:-translate-y-2 transition-all duration-300 rounded-xl border-t-4 border-t-primary">
              <CardHeader className="flex flex-row items-center gap-4 space-y-0 pb-4">
                {category.icon}
                <CardTitle className="text-xl font-headline">{category.category}</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  {category.skills.map((skill) => (
                    <li key={skill} className="flex items-center gap-3">
                      <Check className="h-5 w-5 text-accent flex-shrink-0" />
                      <span className="text-muted-foreground">{skill}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
