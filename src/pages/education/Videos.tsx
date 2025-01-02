import { Navbar } from "@/components/layout/Navbar";
import { PageHeader } from "@/components/PageHeader";
import { Footer } from "@/components/layout/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { PlayCircle, Clock } from "lucide-react";

const videos = [
  {
    title: "Understanding Diabetes",
    description: "A comprehensive guide to managing diabetes",
    duration: "15:30",
    thumbnail: "/video-thumbnails/diabetes.jpg"
  },
  {
    title: "Yoga for Beginners",
    description: "Simple yoga poses for daily practice",
    duration: "20:45",
    thumbnail: "/video-thumbnails/yoga.jpg"
  },
  // Add more videos
];

export default function Videos() {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Navbar />
      <div className="mt-16">
        <PageHeader
          title="Health & Wellness Videos"
          subtitle="Watch expert-led videos on various health topics."
        />
        
        <main className="container mx-auto px-4 py-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {videos.map((video, index) => (
              <Card key={index} className="overflow-hidden">
                <div className="relative">
                  <img 
                    src={video.thumbnail} 
                    alt={video.title}
                    className="w-full h-48 object-cover rounded-t-lg"
                  />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <PlayCircle className="w-12 h-12 text-white" />
                  </div>
                </div>
                <CardHeader>
                  <CardTitle>{video.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-2">{video.description}</p>
                  <p className="text-sm text-muted-foreground">Duration: {video.duration}</p>
                  <Button className="w-full mt-4">Watch Now</Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </main>
      </div>
      <Footer />
    </div>
  );
} 