import Link from "next/link"
import Image from "next/image"
import { Facebook, Linkedin, Twitter, Youtube } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-[#2E0D8A] text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <Image
                src="/placeholder.svg"
                alt="TitanApps"
                width={32}
                height={32}
                className="w-8 h-8"
              />
              <span className="text-xl font-semibold">TitanApps</span>
            </div>
            <p className="text-sm text-gray-300">
              TitanApps is a set of productivity tools for project management platforms designed for professional teams to move projects forward
            </p>
          </div>

          {/* Tools for Jira */}
          <div>
            <h3 className="font-semibold mb-4">Tools for Jira</h3>
            <ul className="space-y-2">
              <li><Link href="#" className="text-sm hover:text-gray-300">Smart Checklist</Link></li>
              <li><Link href="#" className="text-sm hover:text-gray-300">Smart Template</Link></li>
            </ul>
          </div>

          {/* Tools for monday.com */}
          <div>
            <h3 className="font-semibold mb-4">Tools for monday.com</h3>
            <ul className="space-y-2">
              <li><Link href="#" className="text-sm hover:text-gray-300">Smart Checklist</Link></li>
              <li><Link href="#" className="text-sm hover:text-gray-300">Smart Template</Link></li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="font-semibold mb-4">Resources</h3>
            <ul className="space-y-2">
              <li><Link href="#" className="text-sm hover:text-gray-300">Blog</Link></li>
              <li><Link href="#" className="text-sm hover:text-gray-300">Documentation</Link></li>
              <li><Link href="#" className="text-sm hover:text-gray-300">Support</Link></li>
              <li><Link href="#" className="text-sm hover:text-gray-300">Sales Dashboard</Link></li>
              <li><Link href="#" className="text-sm hover:text-gray-300">Careers-Railsware hiring</Link></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="font-semibold mb-4">Company</h3>
            <ul className="space-y-2">
              <li><Link href="#" className="text-sm hover:text-gray-300">Contact Us</Link></li>
              <li><Link href="#" className="text-sm hover:text-gray-300">Partner Program</Link></li>
              <li><Link href="#" className="text-sm hover:text-gray-300">Privacy Policy</Link></li>
              <li><Link href="#" className="text-sm hover:text-gray-300">Terms of Service</Link></li>
              <li><Link href="#" className="text-sm hover:text-gray-300">Cookie Policy</Link></li>
              <li><Link href="#" className="text-sm hover:text-gray-300">DPA</Link></li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row justify-between items-center mt-12 pt-8 border-t border-gray-700">
          <div className="flex items-center gap-4 mb-4 md:mb-0">
            <span className="text-sm">TitanApps all rights reserved</span>
            <span className="text-sm">Railsware Products Studio LLC</span>
          </div>
          <div className="flex items-center gap-6">
            <Link href="#" className="hover:text-gray-300">
              <Youtube className="w-5 h-5" />
            </Link>
            <Link href="#" className="hover:text-gray-300">
              <Twitter className="w-5 h-5" />
            </Link>
            <Link href="#" className="hover:text-gray-300">
              <Facebook className="w-5 h-5" />
            </Link>
            <Link href="#" className="hover:text-gray-300">
              <Linkedin className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}

