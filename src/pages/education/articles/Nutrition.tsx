import { Navbar } from "@/components/layout/Navbar";
import { PageHeader } from "@/components/PageHeader";
import { Footer } from "@/components/layout/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ScrollArea } from "@/components/ui/scroll-area";

const nutritionContent = {
  basics: [
    {
      title: "Understanding Macronutrients",
      content: "Detailed explanation of proteins, carbohydrates, and fats...",
      keyPoints: [
        "Proteins are essential for muscle building",
        "Carbohydrates provide energy",
        "Healthy fats support brain function"
      ]
    },
    // Add more sections
  ],
  mealPlanning: [
    {
      title: "Creating Balanced Meals",
      content: "Guide to portion control and meal composition...",
      tips: [
        "Include protein in every meal",
        "Fill half your plate with vegetables",
        "Choose whole grains over refined"
      ]
    }
    // Add more sections
  ],
  recommendations: [
    {
      title: "Daily Nutritional Guidelines",
      content: "Recommended daily intake for different nutrients...",
      guidelines: [
        "2000-2500 calories for adults",
        "5 servings of vegetables",
        "2-3 servings of fruits"
      ]
    }
    // Add more sections
  ]
};

export default function Nutrition() {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Navbar />
      <div className="mt-16">
        <PageHeader
          title="Nutrition & Healthy Eating"
          subtitle="Guidelines for balanced nutrition and better food choices."
        />
        <main className="container mx-auto px-4 py-8">
          <Tabs defaultValue="basics" className="space-y-6">
            <TabsList className="grid w-full grid-cols-3">
              <TabsTrigger value="basics">Nutrition Basics</TabsTrigger>
              <TabsTrigger value="mealPlanning">Meal Planning</TabsTrigger>
              <TabsTrigger value="recommendations">Recommendations</TabsTrigger>
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