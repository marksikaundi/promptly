'use client'

import Link from "next/link"
import { Home, Upload, LinkIcon, Clock, RotateCcw, Settings } from 'lucide-react'
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { usePathname } from "next/navigation"

export function Sidebar() {
  const pathname = usePathname()
  
  const navigation = [
    { name: 'Home', href: '/', icon: Home },
    { name: 'Upload', href: '/upload', icon: Upload },
    { name: 'Connect', href: '/connect', icon: LinkIcon },
    { name: 'Scheduled', href: '/scheduled', icon: Clock },
    { name: 'Posts', href: '/posts', icon: RotateCcw },
  ]

  return (
    <div className="w-64 bg-white border-r flex flex-col h-full">
      <div className="p-4 border-b">
        <div className="flex items-center gap-2">
          <div className="h-8 w-8 rounded-full bg-primary" />
          <span className="font-semibold text-lg">post bridge</span>
        </div>
      </div>
      <nav className="flex-1 p-4 space-y-1">
        {navigation.map((item) => {
          const Icon = item.icon
          return (
            <Link 
              key={item.name}
              href={item.href}
              className={cn(
                "flex items-center gap-3 px-3 py-2 rounded-lg text-sm font-medium",
                pathname === item.href 
                  ? "bg-gray-900 text-white" 
                  : "text-gray-700 hover:bg-gray-100"
              )}
            >
              <Icon className="h-5 w-5" />
              {item.name}
            </Link>
          )
        })}
      </nav>
      <div className="p-4 border-t">
        <div className="rounded-lg border-2 border-dashed p-4 text-center">
          <h3 className="font-semibold">Upgrade to premium</h3>
          <p className="text-sm text-gray-500 mt-1">
            Unlimited posting and scheduling for an unbeatable price.
          </p>
          <Button className="mt-3 w-full" variant="default">
            Choose plan
          </Button>
        </div>
      </div>
      <div className="p-4 border-t">
        <Button variant="ghost" size="icon" className="w-10 h-10">
          <Settings className="h-5 w-5" />
        </Button>
      </div>
    </div>
  )
}

