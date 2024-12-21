import { Check, PlayCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function ProfileCard() {
  const features = [
    "Post to all major platforms in one click",
    "Schedule content for the perfect posting time",
    "Customize content for each platform",
    "Generate viral videos using our studio templates",
  ];

  const socialProof = [
    "/placeholder.svg?height=40&width=40",
    "/placeholder.svg?height=40&width=40",
    "/placeholder.svg?height=40&width=40",
    "/placeholder.svg?height=40&width=40",
    "/placeholder.svg?height=40&width=40",
  ];

  return (
    <div className="container mx-auto px-4 py-12 md:py-24">
      <div className="grid gap-8 lg:grid-cols-2 lg:gap-12 items-center">
        <div className="space-y-8">
          <div className="space-y-6">
            <a
              href="#watch-demo"
              className="inline-flex items-center text-sm font-medium text-emerald-500 hover:text-emerald-600"
            >
              <PlayCircle className="w-5 h-5 mr-2" />
              Watch demo video
            </a>
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-gray-900">
              Schedule your content everywhere in seconds
            </h1>
            <p className="text-xl text-gray-600">
              The simplest way to post and grow on all platforms. Built for
              creators and small teams without the ridiculous price tag.
            </p>
          </div>

          <ul className="space-y-4">
            {features.map((feature, index) => (
              <li key={index} className="flex items-center gap-3">
                <div className="rounded-full p-1 bg-emerald-100">
                  <Check className="w-4 h-4 text-emerald-500" />
                </div>
                <span className="text-gray-600">{feature}</span>
              </li>
            ))}
          </ul>

          <Button size="lg" className="bg-emerald-500 hover:bg-emerald-600">
            Try it for free
          </Button>

          <div className="flex items-center gap-2">
            <div className="flex -space-x-2">
              {socialProof.map((avatar, index) => (
                <Image
                  key={index}
                  src={avatar}
                  alt=""
                  width={40}
                  height={40}
                  className="rounded-full border-2 border-white"
                />
              ))}
            </div>
            <div className="flex items-center gap-1">
              <div className="flex">
                {[...Array(5)].map((_, index) => (
                  <svg
                    key={index}
                    className="w-4 h-4 text-yellow-400"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <p className="text-sm text-gray-600">
                Loved by <span className="font-semibold">2859</span>{" "}
                entrepreneurs
              </p>
            </div>
          </div>
        </div>

        <div className="relative">
          <div className="relative aspect-square">
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="relative w-full max-w-[400px]">
                <div className="grid grid-cols-3 gap-4">
                  {[
                    "/placeholder.svg?height=120&width=120",
                    "/placeholder.svg?height=120&width=120",
                    "/placeholder.svg?height=120&width=120",
                    "/placeholder.svg?height=120&width=120",
                    "/placeholder.svg?height=120&width=120",
                  ].map((icon, index) => (
                    <Image
                      key={index}
                      src={icon}
                      alt=""
                      width={120}
                      height={120}
                      className="rounded-2xl shadow-lg"
                    />
                  ))}
                </div>
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white/90 backdrop-blur-sm px-6 py-3 rounded-full border shadow-lg">
                  <div className="flex items-center gap-2">
                    <div className="rounded-full p-1 bg-emerald-100">
                      <Check className="w-4 h-4 text-emerald-500" />
                    </div>
                    <span className="text-sm font-medium">
                      Scheduled to all platforms
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
