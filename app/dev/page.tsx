import {
  AlertCircle,
  DollarSign,
  Package2,
  Zap,
  Calendar,
  FolderCog,
  Laptop,
  Clock,
  Rocket,
  Users,
  Plus,
} from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

// Import platform icons
import {
  Twitter,
  Instagram,
  Linkedin,
  Facebook,
  Youtube,
  PinIcon as Pinterest,
} from "lucide-react";

export default function ContentPosting() {
  const platforms = [
    { name: "Twitter/X", icon: Twitter },
    { name: "Instagram", icon: Instagram },
    { name: "LinkedIn", icon: Linkedin },
    { name: "Facebook", icon: Facebook },
    {
      name: "TikTok",
      icon: ({ className }: { className?: string }) => (
        <svg className={className} viewBox="0 0 24 24" fill="currentColor">
          <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z" />
        </svg>
      ),
    },
    { name: "YouTube", icon: Youtube },
    {
      name: "Bluesky",
      icon: ({ className }: { className?: string }) => (
        <svg className={className} viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 2L1 12l11 10 11-10L12 2zm0 15.5L5 12l7-5.5 7 5.5-7 5.5z" />
        </svg>
      ),
    },
    {
      name: "Threads",
      icon: ({ className }: { className?: string }) => (
        <svg className={className} viewBox="0 0 24 24" fill="currentColor">
          <path d="M12.186 24h-.007c-3.581-.024-6.334-1.205-8.184-3.509C2.35 18.44 1.5 15.586 1.5 12.068V12c.013-5.392 2.866-8.863 7.828-9.626C11.354 2.006 12.984 2 13.472 2h.049c1.845.008 3.485.347 5.025 1.044l-.523 1.77a9.154 9.154 0 0 0-4.358-.865h-.116c-.483 0-1.906.006-3.636.334-4.039.618-6.318 3.362-6.329 7.72v.069c0 3.111.725 5.571 2.157 7.312 1.536 1.871 3.81 2.824 6.76 2.845 2.55 0 4.484-.675 5.961-2.067 1.434-1.352 2.095-3.276 2.095-6.066v-.677h-8.31v-1.957h10.425v2.321c0 3.504-.881 6.17-2.617 7.926-1.861 1.885-4.466 2.841-7.753 2.841z" />
        </svg>
      ),
    },
    { name: "Pinterest", icon: Pinterest },
    { name: "Request a Platform", icon: Plus },
  ];

  return (
    <div className="container mx-auto px-4 py-12 max-w-6xl">
      <div className="space-y-20">
        {/* First Section */}
        <div className="space-y-8">
          <div className="space-y-4">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-center">
              Posting content shouldn&apos;t be this{" "}
              <span className="text-red-500">hard</span>
            </h1>
            <p className="text-muted-foreground text-center">
              Other solutions and tools...
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card className="bg-gray-50">
              <CardContent className="p-6">
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <AlertCircle className="w-5 h-5 text-red-500" />
                    <h3 className="font-semibold text-lg">Manually posting</h3>
                  </div>
                  <p className="text-muted-foreground">
                    Hours of time you can&apos;t get back - spent posting your
                    content 1 by 1 to each platform (ouch!)
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-gray-50">
              <CardContent className="p-6">
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <DollarSign className="w-5 h-5 text-red-500" />
                    <h3 className="font-semibold text-lg">
                      Unfairly expensive
                    </h3>
                  </div>
                  <p className="text-muted-foreground">
                    You&apos;re not an enterprise, or a Fortune 500 company, so
                    why are you paying as much as one?
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-gray-50">
              <CardContent className="p-6">
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <Package2 className="w-5 h-5 text-red-500" />
                    <h3 className="font-semibold text-lg">
                      Features you don&apos;t need
                    </h3>
                  </div>
                  <p className="text-muted-foreground">
                    99 features and you only need one... but you&apos;ll have to
                    pay for for all of them.
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-gray-50">
              <CardContent className="p-6">
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <Zap className="w-5 h-5 text-red-500" />
                    <h3 className="font-semibold text-lg">Complex tools</h3>
                  </div>
                  <p className="text-muted-foreground">
                    The learning curve is steeper than a UFO&apos;s flight path.
                    Houston, we have a problem!
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>

          <p className="text-center text-muted-foreground">
            Give up hours of your time or buckets of your cash? You
            shouldn&apos;t have to choose...
          </p>
        </div>

        {/* Second Section */}
        <div className="space-y-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center">
            Grow your social reach with{" "}
            <span className="text-emerald-500">less effort</span> for{" "}
            <span className="text-emerald-500">less money</span>
          </h2>
          <p className="text-muted-foreground text-center">
            Using post bridge features...
          </p>
        </div>

        {/* Features Section */}
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="space-y-6">
              <div className="flex items-center gap-2">
                <div className="rounded-full bg-emerald-100 p-1">
                  <div className="rounded-full bg-emerald-500 w-2 h-2" />
                </div>
                <span className="text-emerald-500 font-semibold">
                  Cross-posting
                </span>
              </div>
              <p className="text-muted-foreground">
                Upload your content to post bridge and post it to any of your
                connected social media accounts, including posting to all
                platforms at the same time.
              </p>
            </div>

            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <Calendar className="w-5 h-5 text-gray-500" />
                <span className="font-medium">Scheduling</span>
              </div>
              <div className="flex items-center gap-3">
                <FolderCog className="w-5 h-5 text-gray-500" />
                <span className="font-medium">Content management</span>
              </div>
              <div className="flex items-center gap-3">
                <Laptop className="w-5 h-5 text-gray-500" />
                <span className="font-medium">Content Studio</span>
              </div>
            </div>
          </div>

          <div className="relative bg-gray-100 rounded-lg aspect-video flex items-center justify-center">
            <div className="text-center space-y-2">
              <h3 className="font-semibold text-xl">Watch views grow</h3>
              <div className="text-4xl md:text-5xl font-bold text-emerald-500">
                10,000,000+
              </div>
              <p className="text-sm text-muted-foreground">
                Potential views await...
              </p>
            </div>
            {/* Confetti dots decoration */}
            <div className="absolute inset-0 overflow-hidden">
              {[...Array(20)].map((_, i) => (
                <div
                  key={i}
                  className="absolute w-1 h-1 bg-emerald-500 rounded-full animate-ping"
                  style={{
                    top: `${Math.random() * 100}%`,
                    left: `${Math.random() * 100}%`,
                    animationDelay: `${Math.random() * 2}s`,
                    animationDuration: `${1 + Math.random() * 2}s`,
                  }}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <Card>
            <CardContent className="p-6">
              <div className="space-y-2">
                <div className="flex items-center gap-2 text-emerald-500">
                  <Clock className="w-5 h-5" />
                  <h3 className="text-sm font-medium">Weekly Time Saved</h3>
                </div>
                <div className="flex items-baseline gap-1">
                  <span className="text-3xl font-bold text-emerald-500">
                    3h 4m
                  </span>
                </div>
                <p className="text-xs text-muted-foreground">Per active user</p>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <div className="space-y-2">
                <div className="flex items-center gap-2 text-blue-500">
                  <Rocket className="w-5 h-5" />
                  <h3 className="text-sm font-medium">Yearly Time Saved</h3>
                </div>
                <div className="flex items-baseline gap-1">
                  <span className="text-3xl font-bold text-blue-500">13</span>
                  <span className="text-sm text-muted-foreground">
                    entire days
                  </span>
                </div>
                <p className="text-xs text-muted-foreground">
                  Based on weekly average
                </p>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <div className="space-y-2">
                <div className="flex items-center gap-2 text-orange-500">
                  <Users className="w-5 h-5" />
                  <h3 className="text-sm font-medium">Posts Published</h3>
                </div>
                <div className="flex items-baseline gap-1">
                  <span className="text-3xl font-bold text-orange-500">
                    17,785
                  </span>
                </div>
                <p className="text-xs text-muted-foreground">
                  ↗ 67% engagement
                </p>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Supported Platforms Section */}
        <div className="space-y-8">
          <div className="text-center space-y-4">
            <h2 className="text-3xl font-bold">Supported Platforms</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Use post bridge to schedule and post your content across all of
              these social media platforms at the same time - all from one
              place.
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
            {platforms.map((platform) => (
              <Card
                key={platform.name}
                className="bg-gray-50 hover:bg-gray-100 transition-colors"
              >
                <CardContent className="p-6 flex flex-col items-center justify-center space-y-2">
                  <platform.icon className="w-8 h-8" />
                  <span className="text-sm font-medium">{platform.name}</span>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
