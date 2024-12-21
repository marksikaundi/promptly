import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="bg-gray-50 px-4 py-12 md:px-6 lg:px-8 min-h-[calc(100vh-4rem)]">
      <div className="mx-auto max-w-7xl flex flex-col justify-end h-full">
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {/* Brand Column */}
          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-2">
              <div className="h-6 w-6 rounded-full bg-black" />
              <span className="font-semibold">postbridge</span>
            </div>
            <p className="text-sm text-gray-600">
              Post content to multiple social media platforms at the same time, all-in-one place. Cross posting made easy.
            </p>
            <p className="text-sm text-gray-500">Copyright © 2024 - All rights reserved</p>
          </div>

          {/* Links Column */}
          <div>
            <h3 className="mb-4 text-sm font-semibold uppercase text-gray-500">Links</h3>
            <ul className="space-y-3 text-sm">
              <li><Link href="#" className="text-gray-600 hover:text-gray-900">Support</Link></li>
              <li><Link href="#" className="text-gray-600 hover:text-gray-900">Pricing</Link></li>
              <li><Link href="#" className="text-gray-600 hover:text-gray-900">Blog</Link></li>
              <li><Link href="#" className="text-gray-600 hover:text-gray-900">Affiliates</Link></li>
            </ul>
          </div>

          {/* Platforms Column */}
          <div>
            <h3 className="mb-4 text-sm font-semibold uppercase text-gray-500">Platforms</h3>
            <ul className="space-y-3 text-sm">
              <li><Link href="#" className="text-gray-600 hover:text-gray-900">Twitter/X scheduler</Link></li>
              <li><Link href="#" className="text-gray-600 hover:text-gray-900">Instagram scheduler</Link></li>
              <li><Link href="#" className="text-gray-600 hover:text-gray-900">LinkedIn scheduler</Link></li>
              <li><Link href="#" className="text-gray-600 hover:text-gray-900">Facebook scheduler</Link></li>
              <li><Link href="#" className="text-gray-600 hover:text-gray-900">TikTok scheduler</Link></li>
              <li><Link href="#" className="text-gray-600 hover:text-gray-900">Youtube scheduler</Link></li>
              <li><Link href="#" className="text-gray-600 hover:text-gray-900">Bluesky scheduler</Link></li>
              <li><Link href="#" className="text-gray-600 hover:text-gray-900">Threads scheduler</Link></li>
              <li><Link href="#" className="text-gray-600 hover:text-gray-900">Pinterest scheduler</Link></li>
            </ul>
          </div>

          {/* Legal Column */}
          <div>
            <h3 className="mb-4 text-sm font-semibold uppercase text-gray-500">Legal</h3>
            <ul className="space-y-3 text-sm">
              <li><Link href="#" className="text-gray-600 hover:text-gray-900">Terms of services</Link></li>
              <li><Link href="#" className="text-gray-600 hover:text-gray-900">Privacy policy</Link></li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  )
}

