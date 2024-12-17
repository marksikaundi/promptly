import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <div className="relative h-screen flex items-center justify-center">
      {/* Background Image */}
      <Image
        src="/placeholder.svg?height=1080&width=1920"
        alt="Hero background"
        layout="fill"
        objectFit="cover"
        quality={100}
        className="z-0"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-white opacity-50 z-10"></div>

      {/* Content */}
      <div className="relative z-20 text-center text-[#2D1537] px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4">
          Schedule Your Social Media Posts
        </h1>
        <p className="text-xl sm:text-2xl md:text-3xl mb-8">
          Streamline your social media strategy with our powerful scheduler
        </p>
        <Link
          href=""
          className="inline-block bg-[#2D1537] hover:bg-[#2D1537] text-white font-bold py-3 px-8 rounded-full text-lg transition duration-300 ease-in-out transform hover:scale-105"
        >
          Get Started
        </Link>
      </div>
    </div>
  );
}
