"use client";

import { FaSquareFacebook } from "react-icons/fa6";
import { BsTwitterX } from "react-icons/bs";
import { FaLinkedin } from "react-icons/fa";
import { AiFillTikTok } from "react-icons/ai";
import { FaInstagramSquare } from "react-icons/fa";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import { Settings, Upload, X } from "lucide-react";
import Image from "next/image";

export default function Dashboard() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Left Sidebar */}
      <aside className="fixed left-0 top-0 h-full w-64 bg-[#2D1537] text-white">
        <div className="p-4 flex items-center gap-2">
          <div className="w-6 h-6">
            <Image
              src="/placeholder.svg"
              alt="Promptly Logo"
              width={24}
              height={24}
              className="rounded"
            />
          </div>
          <span className="font-medium">Promptly</span>
        </div>

        <nav className="mt-4">
          <Button
            variant="ghost"
            className="w-full justify-start rounded-none px-4 py-2 bg-[#7c568c] text-white hover:bg-[#2D1537]/90"
          >
            <svg
              className="mr-3 h-5 w-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
            </svg>
            Home
          </Button>
          <Button
            variant="ghost"
            className="w-full justify-start rounded-none px-4 py-2 text-white hover:bg-[#2D1537]/90"
          >
            <Upload className="mr-3 h-5 w-5" />
            Upload
          </Button>
          <Button
            variant="ghost"
            className="w-full justify-start rounded-none px-4 py-2 text-white hover:bg-[#1E2230]/90"
          >
            <svg
              className="mr-3 h-5 w-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M13 10V3L4 14h7v7l9-11h-7z" />
            </svg>
            Connect
          </Button>
          <Button
            variant="ghost"
            className="w-full justify-start rounded-none px-4 py-2 text-white hover:bg-[#1E2230]/90"
          >
            <svg
              className="mr-3 h-5 w-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            Scheduled
          </Button>
          <Button
            variant="ghost"
            className="w-full justify-start rounded-none px-4 py-2 text-white hover:bg-[#1E2230]/90"
          >
            <svg
              className="mr-3 h-5 w-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9.5a2 2 0 00-2-2h-2" />
            </svg>
            Posts
          </Button>
        </nav>

        <div className="absolute bottom-0 left-0 right-0 p-4">
          <div className="border border-gray-700 rounded-lg p-4 mb-4">
            <h3 className="font-medium mb-1">Post limit reached</h3>
            <div className="text-sm text-gray-400 mb-4">
              Unlimited posting and scheduling for an unbeatable price.
            </div>
            <Button className="w-full bg-[#F3A833] hover:bg-[#F3A833] text-white">
              Choose plan
            </Button>
          </div>
          <Button variant="ghost" size="icon" className="w-10 h-10">
            <Settings className="h-5 w-5" />
          </Button>
        </div>
      </aside>

      {/* Main Content */}
      <main className="ml-64 p-8">
        {/* Upload Content Section */}
        <Card className="mb-8">
          <CardHeader className="flex flex-row items-center justify-between">
            <CardTitle>Upload content</CardTitle>
            <Select defaultValue="single">
              <SelectTrigger className="w-32">
                <SelectValue placeholder="Post type" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="single">single post</SelectItem>
                <SelectItem value="multiple">multiple posts</SelectItem>
              </SelectContent>
            </Select>
          </CardHeader>
          <CardContent>
            <div className="border-2 border-dashed rounded-lg p-12 text-center">
              <div className="mx-auto w-12 h-12 mb-4">
                <Upload className="w-12 h-12 text-[#7c568c]" />
              </div>
              <h3 className="text-lg font-medium mb-2">
                Click to upload or drag and drop
              </h3>
              <p className="text-sm text-gray-500">
                Image or Video (max 100MB)
              </p>
            </div>
          </CardContent>
        </Card>

        {/* Connected Accounts Section */}
        <Card>
          <CardHeader className="flex flex-row items-center justify-between">
            <CardTitle>Connected Accounts</CardTitle>
            <Select defaultValue="all">
              <SelectTrigger className="w-32">
                <SelectValue placeholder="Filter" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">all accounts</SelectItem>
              </SelectContent>
            </Select>
          </CardHeader>
          <CardContent className="space-y-4">
            {/* Social Media Buttons */}
            <div className="grid gap-3">
              <Button variant="outline" className="justify-start h-11">
                <FaInstagramSquare className="w-6 h-6 mr-2" />
                Connect Instagram
              </Button>
              <Button variant="outline" className="justify-start h-11">
                <FaLinkedin className="w-6 h-6 mr-2" />
                Connect LinkedIn
              </Button>
              <Button variant="outline" className="justify-start h-11">
                <AiFillTikTok className="w-6 h-6 mr-2" />
                Connect Tiktok
              </Button>
              <Button variant="outline" className="justify-start h-11">
              <BsTwitterX className="w-6 h-6 mr-2" />

                Connect Twitter
              </Button>
              <Button variant="outline" className="justify-start h-11">
                <FaSquareFacebook className="w-6 h-6 mr-2" />
                Connect Facebook
              </Button>
            </div>

            {/* Connected Account Pills */}
            <div className="flex flex-wrap gap-2">
              <Badge variant="secondary" className="h-8 gap-2 pl-2 pr-1">
                <div className="flex items-center gap-2">
                  <div className="w-5 h-5 rounded-full overflow-hidden">
                    <Image
                      src="/placeholder.svg"
                      alt="curiosity.quench"
                      width={20}
                      height={20}
                    />
                  </div>
                  curiosity.quench
                </div>
                <Button variant="ghost" size="icon" className="h-6 w-6">
                  <X className="h-3 w-3" />
                </Button>
              </Badge>
              <Badge variant="secondary" className="h-8 gap-2 pl-2 pr-1">
                <div className="flex items-center gap-2">
                  <div className="w-5 h-5 rounded-full overflow-hidden">
                    <Image
                      src="/placeholder.svg"
                      alt="scroll.less.daily"
                      width={20}
                      height={20}
                    />
                  </div>
                  scroll.less.daily
                </div>
                <Button variant="ghost" size="icon" className="h-6 w-6">
                  <X className="h-3 w-3" />
                </Button>
              </Badge>
              <Badge variant="secondary" className="h-8 gap-2 pl-2 pr-1">
                <div className="flex items-center gap-2">
                  <div className="w-5 h-5 rounded-full overflow-hidden">
                    <Image
                      src="/placeholder.svg"
                      alt="jackfriks"
                      width={20}
                      height={20}
                    />
                  </div>
                  jackfriks
                </div>
                <Button variant="ghost" size="icon" className="h-6 w-6">
                  <X className="h-3 w-3" />
                </Button>
              </Badge>
              <Badge variant="secondary" className="h-8 gap-2 pl-2 pr-1">
                <div className="flex items-center gap-2">
                  <div className="w-5 h-5 rounded-full overflow-hidden">
                    <Image
                      src="/placeholder.svg"
                      alt="scroll_less_live_more"
                      width={20}
                      height={20}
                    />
                  </div>
                  scroll_less_live_more
                </div>
                <Button variant="ghost" size="icon" className="h-6 w-6">
                  <X className="h-3 w-3" />
                </Button>
              </Badge>
            </div>
          </CardContent>
        </Card>
      </main>
    </div>
  );
}
