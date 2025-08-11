
"use client";

import { useState } from "react";
import { useForm, type SubmitHandler } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { getPersonalizedGuidance } from "@/app/actions";
import { Lightbulb, Loader2, AlertTriangle, FileText } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const formSchema = z.object({
  userInteractions: z.string().min(10, { message: "Harap jelaskan interaksi Anda sebelumnya secara lebih rinci." }),
  expressedNeeds: z.string().min(10, { message: "Harap jelaskan masalah Anda saat ini secara lebih rinci." }),
});

type FormData = z.infer<typeof formSchema>;

export function PersonalizedGuidance() {
  const [isLoading, setIsLoading] = useState(false);
  const [recommendations, setRecommendations] = useState<string[] | null>(null);
  const { toast } = useToast();
  
  const form = useForm<FormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      userInteractions: "",
      expressedNeeds: "",
    },
  });

  const onSubmit: SubmitHandler<FormData> = async (data) => {
    setIsLoading(true);
    setRecommendations(null);
    
    const result = await getPersonalizedGuidance(data);

    setIsLoading(false);
    if (result.success && result.data) {
      setRecommendations(result.data.recommendations);
      toast({
        title: "Rekomendasi Ditemukan!",
        description: "Berikut adalah beberapa artikel yang mungkin membantu.",
      });
    } else {
      toast({
        variant: "destructive",
        title: "Terjadi Kesalahan",
        description: result.error || "Gagal mendapatkan rekomendasi. Silakan coba lagi.",
      });
    }
  };

  return (
    <Card className="shadow-lg border-accent/50">
      <CardHeader>
        <div className="flex items-center gap-3">
            <Lightbulb className="h-8 w-8 text-accent" />
            <CardTitle className="text-2xl font-headline text-accent">Panduan IT Personal</CardTitle>
        </div>
        <CardDescription>
          Dapatkan rekomendasi artikel yang dipersonalisasi berdasarkan kebutuhan Anda menggunakan AI.
        </CardDescription>
      </CardHeader>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)}>
          <CardContent className="space-y-4">
            <FormField
              control={form.control}
              name="userInteractions"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Interaksi Sebelumnya</FormLabel>
                  <FormControl>
                    <Textarea
                      placeholder="Contoh: Saya sudah mencari artikel tentang 'mempercepat laptop' dan 'membersihkan virus'."
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="expressedNeeds"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Kebutuhan/Masalah Saat Ini</FormLabel>
                  <FormControl>
                    <Textarea
                      placeholder="Contoh: Laptop saya terasa sangat lambat saat membuka banyak tab di Chrome."
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </CardContent>
          <CardFooter>
            <Button type="submit" disabled={isLoading} className="w-full bg-accent hover:bg-accent/90">
              {isLoading ? (
                <>
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  Mencari...
                </>
              ) : (
                "Dapatkan Rekomendasi"
              )}
            </Button>
          </CardFooter>
        </form>
      </Form>
      {recommendations && (
        <CardContent>
          <h4 className="font-semibold mb-4">Artikel yang Direkomendasikan:</h4>
          <ul className="space-y-3">
            {recommendations.map((rec, index) => (
              <li key={index} className="flex items-start gap-3 p-3 bg-primary/5 rounded-md">
                <FileText className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                <span>{rec}</span>
              </li>
            ))}
          </ul>
        </CardContent>
      )}
    </Card>
  );
}
