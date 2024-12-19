import { Star } from "lucide-react";
import Image from "next/image";

export function SocialProof() {
  return (
    <div className="flex items-center gap-4 flex-wrap">
      <div className="flex -space-x-2">
        {[1, 2, 3, 4, 5].map((i) => (
          <Image
            width={200}
            height={200}
            key={i}
            src="/features/home.webp"
            alt="Social media platforms"
            className="w-10 h-10 rounded-full border-2 border-white"
          />
        ))}
      </div>
      <div className="flex items-center gap-1">
        {[1, 2, 3, 4, 5].map((i) => (
          <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
        ))}
      </div>
      <p className="text-gray-700">
        Loved by <span className="font-bold">2826</span> small businesses
      </p>
    </div>
  );
}
