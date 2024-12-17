"use client";
import Link from "next/link";
import { Button } from "./ui/button";
import { FaLinkedin } from "react-icons/fa";
import { BsTwitterX } from "react-icons/bs";
import { FaFacebookSquare } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FcDonate } from "react-icons/fc";

const footerData = [
  {
    title: "Company",
    links: [
      { name: "About us", path: "/about-us" },
      { name: "Terms", path: "/terms" },
      { name: "Privacy Policy", path: "/privacy-policy" },
      { name: "FAQ", path: "/faq" },
    ],
  },
  {
    title: "Links",
    links: [
      { name: "Challenge", path: "" },
      { name: "Affiliates", path: "" },
      { name: "Partner with Us", path: "" },
      { name: "Research", path: "" },
      { name: "Publications", path: "" },
      { name: "Changelog", path: "" },
    ],
  },
  {
    title: "Resources",
    links: [
      { name: "Web Editor", path: "" },
      { name: "Sitemap", path: "" },
      { name: "Tips", path: "" },
      { name: "Projects", path: "" },
      { name: "Docs", path: "" },
    ],
  },
];

export default function Footer() {
  return (
    <div className="pt-28">
      <footer className="bg-[#2D1537] p-10 text-white">
        <div className="mx-auto grid max-w-7xl grid-cols-2 gap-10 md:grid-cols-4">
          {footerData.map((section, index) => (
            <div key={index}>
              <h5 className="mb-4 font-bold">{section.title}</h5>
              <ul className="space-y-3">
                {section.links.map((link, idx) => (
                  <li key={idx}>
                    {/* Use Link for internal paths */}
                    {link.path.startsWith("http") ? (
                      <a
                        href={link.path}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        {link.name}
                      </a>
                    ) : (
                      <Link href={link.path}>{link.name}</Link>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* Support */}
          <div>
            <h5 className="mb-4 font-bold">Support us</h5>
            <div className="mt-8">
              <Button className="bg-[#F3A833] hover:bg-[#F3A833]">
                <FcDonate className="mr-2" />
                Donate
              </Button>
            </div>
            <div className="pt-5">
              <Button className="border border-[#F3A833] ">
                <Link href="/careers" className="p-2">
                  Careers
                </Link>
                <span className="relative flex h-4 w-4">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-4 w-4 bg-green-500"></span>
                </span>
              </Button>
            </div>
          </div>
        </div>
        <div className="mt-10 flex flex-col items-center justify-between border-t border-gray-600 py-6 md:flex-row">
          <div className="flex items-center space-x-4">
            <Link href="https://facebook.com/lupleg">
              <FaFacebookSquare className="text-white" />
            </Link>

            <Link href="https://twitter.com/Lupleg_Dev">
              <BsTwitterX className="text-white" />
            </Link>

            <Link href="https://linkedin.com/school/lupleg">
              <FaLinkedin className="text-white" />
            </Link>
            <Link href="https://github.com/lupleg">
              <FaInstagram className="text-white" />
            </Link>
          </div>
          <div className="mt-4 text-center md:mt-0 md:text-left">
            <p>© Copyright {new Date().getFullYear()}, All Rights Reserved</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
