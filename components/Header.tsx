import Link from "next/link";
// import Image from "next/image";

export default function Header() {
  return (
    <div className="bg-[#2D1537] ">
      <header className="container mx-auto px-4">
        <nav className="flex items-center justify-between py-4">
          <div className="flex items-center gap-8">
            <Link href="/" className="flex items-center">
              {/* <Image
                src="/xlogo.svg"
                alt="Lupleg Logo"
                width={150}
                height={100}
                className="h-12 w-auto"
              /> */}
              <h1 className="text-xl font-bold text-white">Promptly</h1>
            </Link>
            <div className="hidden md:flex items-center gap-6 ml-28">
              <Link href="#" className="text-white/80 hover:text-white">
                Solutions
              </Link>
              <Link
                href="#"
                className="text-white/80 hover:text-white"
              >
                Products
              </Link>
              <Link
                href="#"
                className="text-white/80 hover:text-white"
              >
                Pricing
              </Link>

              <Link
                href="#"
                className="text-white/80 hover:text-white"
              >
                Resources
              </Link>
             
            </div>
          </div>
          <div className="flex items-center gap-4">
            <Link
              href="#login"
              className="text-white/80 hover:text-white hidden md:block mr-8"
            >
              Login
            </Link>
            {/* <Link
              href="https://wa.me/+260776578583"
              className="hidden md:inline-flex h-9 items-center justify-center rounded-md border border-white  px-4 text-sm text-white"
            >
              Talk to us
            </Link> */}
            <Link
              href="#free"
              className="inline-flex h-9 items-center justify-center rounded-md bg-white px-4 text-sm font-medium text-[#2D1537] hover:bg-white/90"
            >
              Try for Free
            </Link>
          </div>
        </nav>
      </header>
    </div>
  );
}
