import { Button } from "@/components/ui/button";
import { FeatureList } from "@/features/home/feature-list";
import { PlatformIcons } from "@/features/home/platform-icons";
import { SocialProof } from "@/features/home/social-proof";
// import { WatchDemoButton } from "@/features/home/watch-demo-button";

export default function Hero() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-24">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column */}
          <div className="space-y-8">
            {/* <WatchDemoButton /> */}

            <div className="space-y-6">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                Schedule your content everywhere in seconds
              </h1>
              <p className="text-xl text-gray-600">
                The simplest way to post and grow on all platforms. Built for
                creators and small teams without the ridiculous price tag.
              </p>
            </div>

            <FeatureList />

            <div className="space-y-8">
              <Button className="bg-emerald-400 hover:bg-emerald-500 text-white px-8 py-6 text-lg rounded-full">
                Try it for free
              </Button>

              <SocialProof />
            </div>
          </div>

          {/* Right Column - Added padding bottom for badge space */}
          <div className="lg:pl-12 pb-8">
            <PlatformIcons />
          </div>
        </div>
      </div>
    </div>
  );
}
