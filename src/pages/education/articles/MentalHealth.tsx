import { Navbar } from "@/components/layout/Navbar";
import { PageHeader } from "@/components/PageHeader";
import { Footer } from "@/components/layout/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ScrollArea } from "@/components/ui/scroll-area";

const mentalHealthContent = {
  understanding: [
    {
      title: "What is Mental Health?",
      content: "Mental health includes our emotional, psychological, and social well-being...",
      keyPoints: [
        "Affects how we think, feel, and act",
        "Helps determine how we handle stress",
        "Important at every stage of life"
      ]
    },
    // Add more sections
  ],
  selfCare: [
    {
      title: "Self-Care Practices",
      content: "Activities and practices that we engage in on a regular basis to reduce stress...",
      tips: [
        "Regular exercise",
        "Healthy eating",
        "Adequate sleep"
      ]
    }
    // Add more sections
  ],
  resources: [
    {
      title: "Mental Health Resources",
      content: "Access to mental health services and support...",
      resources: [
        "Counseling services",
        "Support groups",
        "Online resources"
      ]
    }
    // Add more sections
  ]
};

export default function MentalHealth() {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Navbar />
      <div className="mt-16">
        <PageHeader
          title="Mental Health & Wellness"
          subtitle="Understanding and improving mental well-being."
        />
        <main className="container mx-auto px-4 py-8">
          <Tabs defaultValue="understanding" className="space-y-6">
            <TabsList className="grid w-full grid-cols-3">
              <TabsTrigger value="understanding">Understanding</TabsTrigger>
              <TabsTrigger value="selfCare">Self-Care</TabsTrigger>
              <TabsTrigger value="resources">Resources</TabsTrigger>
            </TabsList>

            <ScrollArea className="h-[600px] rounded-md border p-4">
              {/* Add content for each tab */}
            </ScrollArea>
          </Tabs>
        </main>
      </div>
      <Footer />
    </div>
  );
} 