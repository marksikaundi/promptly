'use client'

import { Upload } from 'lucide-react'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { HelpCircle } from 'lucide-react'
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip"

export function UploadSection() {
  return (
    <TooltipProvider>
      <div className="space-y-4">
        <div className="flex justify-between items-center">
          <h2 className="text-xl font-semibold">Upload content</h2>
          <Select defaultValue="single">
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Post type" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="single">single post</SelectItem>
              <SelectItem value="multiple">multiple posts</SelectItem>
            </SelectContent>
          </Select>
        </div>
        <div className="border-2 border-dashed rounded-lg p-12">
          <div className="flex flex-col items-center justify-center text-center">
            <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
              <Upload className="h-6 w-6 text-primary" />
            </div>
            <h3 className="font-semibold mb-2">Click to upload or drag and drop</h3>
            <div className="text-sm text-gray-500 flex items-center gap-2">
              Image or Video (max 100MB)
              <Tooltip>
                <TooltipTrigger>
                  <HelpCircle className="h-4 w-4" />
                </TooltipTrigger>
                <TooltipContent>
                  <p>Maximum file size is 100MB</p>
                </TooltipContent>
              </Tooltip>
            </div>
          </div>
        </div>
      </div>
    </TooltipProvider>
  )
}

