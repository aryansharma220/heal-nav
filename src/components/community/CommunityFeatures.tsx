import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Users, Award, Target, Sparkles, Calendar, Star, Trophy, Clock } from "lucide-react";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";

export function CommunityFeatures() {
  const challenges = [
    {
      title: "30-Day Yoga Challenge",
      participants: 234,
      daysLeft: 12,
      description: "Daily yoga and meditation practice",
      progress: 60,
      rewards: ["Digital Badge", "Expert Session"],
      difficulty: "Intermediate"
    },
    {
      title: "Healthy Indian Cooking",
      participants: 156,
      daysLeft: 5,
      description: "Cooking nutritious Indian meals",
      progress: 40,
      rewards: ["Recipe Book", "Cooking Session"],
      difficulty: "Beginner"
    },
    {
      title: "Monsoon Wellness",
      participants: 189,
      daysLeft: 15,
      description: "Staying healthy during monsoon season",
      progress: 25,
      rewards: ["Wellness Guide", "Health Kit"],
      difficulty: "Easy"
    }
  ];

  const achievements = [
    {
      title: "Wellness Warrior",
      description: "Completed 30 days of consistent practice",
      icon: Trophy,
      date: "2023-12-25"
    },
    {
      title: "Community Guide",
      description: "Helped 50+ members in their journey",
      icon: Users,
      date: "2023-12-20"
    }
  ];

  const quickActions = [
    {
      title: "Find Yoga Partner",
      icon: Users,
      action: "Connect"
    },
    {
      title: "Join Meditation Group",
      icon: Sparkles,
      action: "Join"
    },
    {
      title: "Ayurvedic Consultation",
      icon: Target,
      action: "Book"
    }
  ];

  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Trophy className="h-5 w-5 text-emerald-500" />
            Your Achievements
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {achievements.map((achievement, index) => (
              <div key={index} className="flex items-start gap-3 p-3 bg-muted/50 rounded-lg">
                <achievement.icon className="h-5 w-5 text-emerald-500 mt-1" />
                <div>
                  <h4 className="font-medium">{achievement.title}</h4>
                  <p className="text-sm text-muted-foreground">{achievement.description}</p>
                  <p className="text-xs text-muted-foreground mt-1">
                    Achieved on {new Date(achievement.date).toLocaleDateString('en-IN')}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Award className="h-5 w-5 text-emerald-500" />
            Active Challenges
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {challenges.map((challenge) => (
              <div
                key={challenge.title}
                className="p-4 bg-emerald-50/50 rounded-lg space-y-3 hover:bg-emerald-50 transition-colors"
              >
                <div className="flex items-center justify-between">
                  <div>
                    <h4 className="font-medium">{challenge.title}</h4>
                    <p className="text-sm text-muted-foreground">{challenge.description}</p>
                  </div>
                  <Badge variant="outline">{challenge.difficulty}</Badge>
                </div>
                
                <Progress value={challenge.progress} className="h-2" />
                
                <div className="flex items-center justify-between text-sm text-gray-500">
                  <span className="flex items-center gap-1">
                    <Users className="h-4 w-4" />
                    {challenge.participants.toLocaleString('en-IN')} participants
                  </span>
                  <span className="flex items-center gap-1">
                    <Clock className="h-4 w-4" />
                    {challenge.daysLeft} days left
                  </span>
                </div>

                <div className="flex flex-wrap gap-2">
                  {challenge.rewards.map((reward, index) => (
                    <Badge key={index} variant="secondary">
                      <Star className="h-3 w-3 mr-1" />
                      {reward}
                    </Badge>
                  ))}
                </div>
              </div>
            ))}
            <Button className="w-full">
              <Target className="mr-2 h-4 w-4" />
              Join a Challenge
            </Button>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Quick Actions</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-2">
            {quickActions.map((action, index) => (
              <Button 
                key={index}
                variant="outline" 
                className="w-full justify-between hover:bg-emerald-50"
              >
                <span className="flex items-center">
                  <action.icon className="mr-2 h-4 w-4 text-emerald-500" />
                  {action.title}
                </span>
                <span className="text-sm text-emerald-600">{action.action}</span>
              </Button>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}