import Link from "next/link";
import Image from "next/image";
import { Star } from "lucide-react";

export default function HomeHero() {
  return (
    <div className="bg-[#2D1537] min-h-screen">
      <section className="container mx-auto px-4 py-16 md:py-24">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight">
              Automate Your Social Media Posts
            </h1>
            <p className="text-lg md:text-xl text-white/80 max-w-2xl">
              Take control of your social media strategy. Plan, schedule, and
              publish your posts with ease using our advanced scheduling tool.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                href="#"
                className="inline-flex h-12 items-center justify-center rounded-md bg-white px-6 text-sm font-medium text-[#2D1537] hover:bg-white/90"
              >
                Try for Free
              </Link>
              <Link
                href="https://wa.me/+260776578583"
                className="inline-flex h-12 items-center justify-center rounded-md border border-white/20 bg-white/10 px-6 text-sm text-white hover:bg-white/20"
              >
                Talk to us
              </Link>
            </div>
            <div className="flex flex-wrap gap-6">
              <div className="flex items-center gap-2">
                <Star className="h-5 w-5 fill-current text-yellow-400" />
                <span className="text-white font-medium">4.7 stars</span>
                <span className="text-white/60">
                  {" "}
                  Trusted by over 1,000+ content creators and communities
                </span>
              </div>
              {/* <div className="flex items-center gap-2">
                <Star className="h-5 w-5 fill-current text-yellow-400" />
                <span className="text-white font-medium">4.5 stars</span>
                <span className="text-white/60">250+ reviews</span>
              </div> */}
            </div>
          </div>
          <div className="relative">
            <div className="aspect-[4/3] rounded-lg overflow-hidden backdrop-blur">
              <Image
                src="/edu.svg"
                alt="Front platform interface"
                width={800}
                height={400}
                className="w-full h-full  contain"
              />
            </div>
          </div>
        </div>
        {/* <div className="mt-24 text-center">
          <p className="text-white/80 text-lg">
            Trusted by over 1,000+ developers and companies
          </p>
        </div> */}
      </section>
    </div>
  );
}
