import { Check } from "lucide-react";
import Image from "next/image";

export function PlatformIcons() {
  return (
    <div className="relative">
      <div className="relative bg-white rounded-3xl shadow-xl max-w-md mx-auto">
        {/* Add aspect-ratio container */}
        <div className="relative aspect-[4/3] w-full">
          {/* Social Media Icons Container */}
          <div className="absolute inset-0 p-4">
            <Image
              src="/features/home.webp"
              alt="Social media platforms"
              fill
              priority
              className="object-contain p-4"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
          </div>
        </div>
      </div>

      {/* Status Badge */}
      <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-1/2">
        <div className="bg-white px-6 py-2 rounded-full shadow-lg flex items-center gap-2">
          <div className="bg-emerald-100 rounded-full p-1">
            <Check className="w-4 h-4 text-emerald-500" />
          </div>
          <span className="text-gray-900 font-medium whitespace-nowrap">
            Scheduled to all platforms
          </span>
        </div>
      </div>
    </div>
  );
}
