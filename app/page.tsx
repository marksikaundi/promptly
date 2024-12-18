import { Check, Play } from "lucide-react";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  const features = [
    "Post to all major platforms in one click",
    "Schedule content for the perfect posting time",
    "Customize content for each platform",
    "Generate viral videos using our studio templates",
  ];

  return (
    <section className="container relative px-4 sm:px-6 lg:px-8 pt-20 pb-8 md:pt-24 lg:pt-32">
      <div className="grid gap-8 lg:grid-cols-2 lg:gap-16 xl:gap-24">
        <div className="flex flex-col justify-center space-y-10">
          {/* Watch Demo Link */}
          <Link
            href="#watch-demo"
            className="inline-flex items-center space-x-2 text-[#2D1537] hover:text-[#2D1537]/90 w-fit"
          >
            <span className="flex h-5 w-5 items-center justify-center rounded-full bg-[#2D1537]/10">
              <Play className="h-3 w-3 fill-current" />
            </span>
            <span className="text-sm font-medium">Watch demo video</span>
          </Link>

          {/* Hero Content */}
          <div className="space-y-6">
            <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl">
              Schedule your content everywhere in seconds
            </h1>
            <p className="text-lg text-muted-foreground md:text-xl">
              The simplest way to post and grow on all platforms. Built for
              creators and small teams without the ridiculous price tag.
            </p>
          </div>

          {/* Features List */}
          <ul className="space-y-4">
            {features.map((feature, i) => (
              <li key={i} className="flex items-center space-x-3">
                <span className="flex h-6 w-6 items-center justify-center rounded-full bg-[#2D1537]/10">
                  <Check className="h-4 w-4 text-[#2D1537]" />
                </span>
                <span>{feature}</span>
              </li>
            ))}
          </ul>

          {/* CTA Button */}
          <Button className="w-full bg-[#2D1537] text-background hover:bg-[#2D1537]/90 sm:w-auto">
            Try it for free
          </Button>

          {/* Social Proof */}
          <div className="flex items-center space-x-4">
            <div className="flex -space-x-2">
              {[1, 2, 3, 4, 5].map((i) => (
                <div
                  key={i}
                  className="h-8 w-8 overflow-hidden rounded-full border-2 border-background"
                >
                  <Image
                    src="/features/home.webp"
                    alt="Social proof"
                    width={32}
                    height={32}
                    className="h-full w-full object-cover"
                  />
                </div>
              ))}
            </div>
            <div className="flex items-center space-x-1">
              <span className="font-medium">Loved by</span>
              <span className="font-bold">2805</span>
              <span className="text-muted-foreground">entrepreneurs</span>
            </div>
          </div>
        </div>

        {/* Platform Icons */}
        <div className="relative hidden lg:block">
          <div className="absolute right-0 top-1/2 -translate-y-1/2">
            <div className="relative h-[350px] w-[450px]">
              {/* Floating Platform Icons */}
              <div className="absolute left-0 top-0 h-full w-full">
                <Image
                  src="/features/home.webp"
                  alt="Social media platforms"
                  width={500}
                  height={400}
                  className="object-contain"
                />
              </div>
              {/* Success Badge */}
              {/* <div className="absolute   bottom-4 left-1/2 -translate-x-1/2 rounded-full bg-white/90 px-4 py-2 shadow-lg backdrop-blur">
                <div className="flex items-center space-x-2">
                  <span className="flex h-5 w-5 items-center justify-center rounded-full bg-[#2D1537]/10">
                    <Check className="h-3 w-3 text-[#2D1537]" />
                  </span>
                  <span className="text-sm font-medium">
                    Scheduled to all platforms
                  </span>
                </div>
              </div> */}
            </div>
          </div>
        </div>

        {/* Platform List */}
        <div className="mt-8 lg:col-span-2">
          <div className="flex flex-wrap items-center gap-4">
            <span className="text-sm text-muted-foreground">
              All platforms:
            </span>
            {[
              "X",
              "Instagram",
              "LinkedIn",
              "Facebook",
              "TikTok",
              "YouTube",
              "Threads",
              "Pinterest",
            ].map((platform) => (
              <div
                key={platform}
                className="flex h-8 w-8 items-center justify-center rounded-full bg-muted"
              >
                <Image
                  src={`/placeholder.svg?height=20&width=20`}
                  alt={platform}
                  width={20}
                  height={20}
                  className="h-5 w-5"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
