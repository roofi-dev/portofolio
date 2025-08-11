
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { PersonalizedGuidance } from "./PersonalizedGuidance";

const blogPosts = [
    {
        title: "5 Cara Mudah Mempercepat Kinerja Komputer Anda",
        description: "Temukan tips praktis yang bisa Anda terapkan sekarang juga untuk membuat PC atau laptop Anda berjalan lebih cepat.",
        image: "https://placehold.co/600x400.png",
        hint: "computer speed",
        link: "#"
    },
    {
        title: "Memahami Dasar-dasar Keamanan Jaringan WiFi di Rumah",
        description: "Amankan jaringan nirkabel Anda dari ancaman dengan langkah-langkah keamanan dasar yang mudah diikuti.",
        image: "https://placehold.co/600x400.png",
        hint: "wifi security",
        link: "#"
    },
    {
        title: "Kapan Waktu yang Tepat untuk Melakukan Backup Data?",
        description: "Jangan tunggu sampai terlambat. Pelajari pentingnya backup data dan cara melakukannya dengan benar.",
        image: "https://placehold.co/600x400.png",
        hint: "data backup",
        link: "#"
    }
];

export function Blog() {
  return (
    <section id="blog" className="py-20 md:py-28 bg-card">
        <div className="container mx-auto px-4 md:px-6">
            <div className="grid lg:grid-cols-2 gap-16 items-start">
                <div>
                    <div className="space-y-4 mb-12">
                        <h2 className="text-3xl md:text-4xl font-bold font-headline text-primary">Blog & Knowledge Base</h2>
                        <p className="max-w-2xl text-lg text-muted-foreground">
                            Berbagi tips dan wawasan untuk membantu Anda memahami dan mengelola teknologi dengan lebih baik.
                        </p>
                    </div>
                    <div className="grid gap-8">
                        {blogPosts.map((post, index) => (
                            <Card key={index} className="flex flex-col sm:flex-row overflow-hidden hover:shadow-lg transition-shadow duration-300">
                                <div className="sm:w-1/3">
                                    <Image
                                        src={post.image}
                                        alt={post.title}
                                        width={200}
                                        height={200}
                                        className="w-full h-full object-cover"
                                        data-ai-hint={post.hint}
                                    />
                                </div>
                                <div className="sm:w-2/3 flex flex-col">
                                    <CardHeader>
                                        <CardTitle className="text-lg font-headline">{post.title}</CardTitle>
                                    </CardHeader>
                                    <CardContent className="flex-grow">
                                        <CardDescription>{post.description}</CardDescription>
                                    </CardContent>
                                    <CardFooter>
                                        <Link href={post.link} className="text-sm font-semibold text-primary hover:underline flex items-center gap-1">
                                            Baca Selengkapnya <ArrowRight className="h-4 w-4" />
                                        </Link>
                                    </CardFooter>
                                </div>
                            </Card>
                        ))}
                    </div>
                </div>
                <div className="sticky top-24">
                   <PersonalizedGuidance />
                </div>
            </div>
        </div>
    </section>
  );
}
