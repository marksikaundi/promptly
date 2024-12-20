import { AlertCircle, DollarSign, Package2, Zap } from "lucide-react";
import {
  Calendar,
  FolderCog,
  Laptop,
  Clock,
  Rocket,
  Users,
} from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

export default function ContentPosting() {
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
      </div>
    </div>
  );
}
