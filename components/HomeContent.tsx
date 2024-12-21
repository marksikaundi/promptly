import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function HomeContent() {
  return (
    <div className="relative h-screen min-h-[600px] flex items-center justify-center">
      <div className="absolute inset-0">
        <Image
          src="/social.jpg"
          alt="Social media apps on a phone screen"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/60" />
      </div>
      <div className="relative z-10 text-center space-y-6 max-w-4xl mx-auto px-4">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white">
          Get more views, with less effort
        </h1>
        <p className="text-xl md:text-2xl text-white/90">
          Post to all platforms in 30 seconds instead of 30 minutes.
        </p>
        <Button size="lg" className="bg-emerald-500 hover:bg-emerald-600">
          Try for free
        </Button>
      </div>
    </div>
  );
}
