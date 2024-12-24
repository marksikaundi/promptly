'use client'

import { X } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Filter } from 'lucide-react'
import Image from 'next/image'

const platforms = [
  { name: 'Instagram', icon: '/instagram.svg', connectLabel: 'Connect Instagram' },
  { name: 'LinkedIn', icon: '/linkedin.svg', connectLabel: 'Connect LinkedIn' },
  { name: 'TikTok', icon: '/tiktok.svg', connectLabel: 'Connect Tiktok' },
  { name: 'Twitter', icon: '/twitter.svg', connectLabel: 'Connect Twitter' },
  { name: 'YouTube', icon: '/youtube.svg', connectLabel: 'Connect Youtube' },
  { name: 'Facebook', icon: '/facebook.svg', connectLabel: 'Connect Facebook' },
]

const connectedAccounts = [
  { platform: 'Instagram', username: 'curiosity.quench' },
  { platform: 'Instagram', username: 'scroll.less.daily' },
  { platform: 'Instagram', username: 'jackfriks' },
  { platform: 'Instagram', username: 'scroll_less_live_more' },
  { platform: 'LinkedIn', username: 'jack friks' },
  { platform: 'TikTok', username: 'jack friks' },
  { platform: 'Twitter', username: 'curiousquench' },
  { platform: 'YouTube', username: 'jack friks' },
  { platform: 'YouTube', username: 'jack friks shorts' },
]

export function ConnectedAccounts() {
  return (
    <div className="space-y-4">
      <div className="flex justify-between items-center">
        <h2 className="text-xl font-semibold">Connected Accounts</h2>
        <Button variant="outline" size="sm">
          <Filter className="h-4 w-4 mr-2" />
          all accounts
        </Button>
      </div>
      <div className="space-y-4">
        {platforms.map((platform) => (
          <div key={platform.name} className="flex flex-wrap items-center gap-3">
            <Button 
              variant="secondary" 
              className="min-w-[200px] justify-start"
            >
              <Image
              width={20}
                height={20}
                src={platform.icon} 
                alt={platform.name} 
                className="h-5 w-5 mr-2" 
              />
              {platform.connectLabel}
            </Button>
            {connectedAccounts
              .filter(account => account.platform === platform.name)
              .map((account, index) => (
                <Badge 
                  key={index} 
                  variant="secondary"
                  className="gap-2 py-2 px-3"
                >
                  <Avatar className="h-5 w-5">
                    <AvatarImage src={`/avatar-${index + 1}.png`} />
                    <AvatarFallback>{account.username[0]}</AvatarFallback>
                  </Avatar>
                  {account.username}
                  <Button 
                    variant="ghost" 
                    size="icon" 
                    className="h-4 w-4 p-0 hover:bg-transparent"
                  >
                    <X className="h-3 w-3" />
                  </Button>
                </Badge>
              ))}
          </div>
        ))}
      </div>
    </div>
  )
}

