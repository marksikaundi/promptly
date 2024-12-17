import Link from 'next/link'
import { Button } from "@/components/ui/button"
import React from 'react'

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <main className="flex flex-col items-center justify-center w-full flex-1 px-20 text-center">
        <h1 className="text-6xl font-bold">
          Welcome to <span className="text-blue-600">Social Media Scheduler</span>
        </h1>
        <p className="mt-3 text-2xl">
          Schedule your posts in advance and boost your social media presence!
        </p>
        <div className="flex mt-6">
          <Link href="/register">
            <Button className="mr-4">Sign Up</Button>
          </Link>
          <Link href="/login">
            <Button variant="outline">Log In</Button>
          </Link>
        </div>
      </main>
    </div>
  )
}

