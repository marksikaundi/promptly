import Link from "next/link"
import { ChevronDown } from 'lucide-react'

import { Button } from "@/components/ui/button"

export function Header() {
  return (
    <nav className="flex items-center justify-between max-w-7xl mx-auto px-4 py-4">
      <div className="flex items-center gap-2">
        <div className="w-10 h-10 bg-primary rounded-lg"></div>
        <span className="text-xl font-bold">TitanApps</span>
      </div>
      
      <div className="hidden md:flex items-center gap-8">
        <div className="flex items-center gap-1 cursor-pointer">
          Tools
          <ChevronDown className="w-4 h-4" />
        </div>
        <Link href="#" className="hover:text-primary">
          Documentation
        </Link>
        <Link href="#" className="hover:text-primary">
          Partner Program
        </Link>
        <Link href="#" className="hover:text-primary">
          Blog
        </Link>
      </div>

      <Button variant="outline" className="hidden md:block">
        Talk to Sales
      </Button>

      <Button className="md:hidden" variant="outline" size="icon">
        <ChevronDown className="w-4 h-4" />
      </Button>
    </nav>
  )
}

