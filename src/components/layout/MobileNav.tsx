import { Activity, Heart, MapPin, MessageSquare, Bell, BookOpen, Bot } from "lucide-react";

const navItems = [
  { title: "Home", icon: Activity, url: "/" },
  { title: "Symptoms", icon: Heart, url: "/symptoms" },
  { title: "Community", icon: MessageSquare, url: "/community" },
  { title: "Resources", icon: MapPin, url: "/resources" },
  { title: "Learn", icon: BookOpen, url: "/education" },
  { title: "Alerts", icon: Bell, url: "/notifications" },
  { title: "Bot", icon: Bot, url: "/medical-bot" },
];

export function MobileNav() {
  return (
    <nav className="fixed bottom-0 left-0 right-0 z-50 bg-white border-t md:hidden">
      <div className="flex justify-around items-center h-16">
        {navItems.map((item) => (
          <a
            key={item.title}
            href={item.url}
            className="flex flex-col items-center justify-center w-full h-full text-gray-600 hover:text-primary"
          >
            <item.icon className="h-5 w-5" />
            <span className="text-xs mt-1">{item.title}</span>
          </a>
        ))}
      </div>
    </nav>
  );
}