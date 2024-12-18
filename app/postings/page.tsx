"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Clock, DollarSign, LayoutGrid, AlertCircle } from "lucide-react";
import { useRouter } from "next/navigation";

export default function PostingContents() {
  const router = useRouter();

  const handleTry = () => {
    router.push("#/auth/signup");
  };
  return (
    <section className="container mx-auto px-4 py-12 md:py-16 lg:py-24">
      <div className="space-y-4 text-center mb-12">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight">
          Posting content shouldn&apos;t be this{" "}
          <span className="text-[#2D1537]">hard</span>
        </h2>
        <p className="text-muted-foreground text-lg">
          Other solutions and tools...
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
        <Card className="bg-gray-50/50">
          <CardContent className="p-6">
            <div className="flex items-start gap-4">
              <Clock className="w-6 h-6 text-[#2D1537] shrink-0" />
              <div className="space-y-2">
                <h3 className="text-xl font-semibold">Manually posting</h3>
                <p className="text-muted-foreground">
                  Hours of time you can&apos;t get back - spent posting your
                  content 1 by 1 to each platform (ouch)
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="bg-gray-50/50">
          <CardContent className="p-6">
            <div className="flex items-start gap-4">
              <DollarSign className="w-6 h-6 text-[#2D1537] shrink-0" />
              <div className="space-y-2">
                <h3 className="text-xl font-semibold">Unfairly expensive</h3>
                <p className="text-muted-foreground">
                  You&apos;re not an enterprise, or a Fortune 500 company, so
                  why are you paying as much as one?
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="bg-gray-50/50">
          <CardContent className="p-6">
            <div className="flex items-start gap-4">
              <LayoutGrid className="w-6 h-6 text-[#2D1537] shrink-0" />
              <div className="space-y-2">
                <h3 className="text-xl font-semibold">
                  Features you don&apos;t need
                </h3>
                <p className="text-muted-foreground">
                  99 features and you only need one... but you&apos;ll have to
                  pay for for all of them.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="bg-gray-50/50">
          <CardContent className="p-6">
            <div className="flex items-start gap-4">
              <AlertCircle className="w-6 h-6 text-[#2D1537] shrink-0" />
              <div className="space-y-2">
                <h3 className="text-xl font-semibold">Complex tools</h3>
                <p className="text-muted-foreground">
                  The learning curve is steeper than a UFO&apos;s flight path.
                  Houston, we have a problem!
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      <p className="text-center text-muted-foreground mt-12 text-lg">
        Give up hours of your time or buckets of your cash? You shouldn&apos;t
        have to choose...
      </p>

      <div className="flex justify-center mt-12">
        <Button
          onClick={handleTry}
          variant="default"
          className="bg-[#2D1537] text-background hover:bg-[#2D1537]/90"
        >
          Try it for free
        </Button>
      </div>
    </section>
  );
}
