import Link from 'next/link'
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { BlogPost } from '@/types/blog'

interface BlogSummaryProps {
  posts: BlogPost[];
}

export default function BlogSummary({ posts }: BlogSummaryProps) {
  return (
    <section className="py-12 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8">Latest Blog Posts</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {posts.map((post) => (
            <Card key={post.id} className="flex flex-col bg-[#2D1537]">
              <CardHeader>
                <CardTitle className='text-white'>{post.title}</CardTitle>
              </CardHeader>
              <CardContent className="flex-grow">
                <p className="text-white">{post.excerpt}</p>
              </CardContent>
              <CardFooter className="flex justify-between items-center">
                <span className="text-sm text-white">{post.date}</span>
                <Button asChild>
                  <Link href={`/blog/${post.slug}`}>Read More</Link>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

