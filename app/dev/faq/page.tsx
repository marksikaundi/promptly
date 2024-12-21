// Previous imports remain the same...
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function ContentPosting() {
  // Previous code remains exactly the same until the last section...

  const faqs = [
    {
      question: "What social platforms do you support?",
      answer:
        "We support all major social media platforms including Twitter/X, Instagram, LinkedIn, Facebook, TikTok, YouTube, Bluesky, Threads, and Pinterest. We're constantly adding more platforms based on user requests.",
    },
    {
      question: "How many social accounts can I connect?",
      answer:
        "You can connect unlimited social media accounts across all supported platforms. There are no restrictions on the number of accounts you can manage.",
    },
    {
      question: "What is a social account?",
      answer:
        "A social account is any profile or page you manage on social media platforms. This could be your personal profile, business page, or brand account on any of our supported platforms.",
    },
    {
      question: "How many posts can I make and schedule per month?",
      answer:
        "There are no limits on the number of posts you can make or schedule per month. Post as much as you need to grow your social media presence.",
    },
    {
      question: "Will my posts get less reach using this app?",
      answer:
        "No, your posts will get the same reach as if you posted directly on each platform. We use official APIs and posting methods approved by each platform.",
    },
    {
      question: "Can I cancel anytime?",
      answer:
        "Yes, you can cancel your subscription at any time. There are no long-term commitments or contracts.",
    },
    {
      question: "Can I get a refund?",
      answer:
        "Yes, we offer a 30-day money-back guarantee. If you're not satisfied with our service, we'll refund your payment no questions asked.",
    },
    {
      question: "I have another question",
      answer:
        "Please reach out to our support team at support@postbridge.com and we'll be happy to help you with any questions you have.",
    },
  ];

  return (
    <>
      <div className="container mx-auto px-4 py-12 max-w-6xl">
        <div className="space-y-20">
          {/* Previous sections remain exactly the same... */}

          {/* FAQ Section */}
          <div className="space-y-8">
            <div className="space-y-4">
              <div className="flex items-center gap-2">
                <span className="text-emerald-500 font-medium">FAQ</span>
              </div>
              <h2 className="text-2xl md:text-3xl font-bold">
                Frequently Asked Questions
              </h2>
            </div>

            <Accordion type="single" collapsible className="w-full">
              {faqs.map((faq, index) => (
                <AccordionItem key={index} value={`item-${index}`}>
                  <AccordionTrigger className="text-left">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent>{faq.answer}</AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </div>

      {/* Hero Section */}
      <div className="relative h-screen min-h-[600px] flex items-center justify-center">
        <div className="absolute inset-0">
          <Image
            src="/placeholder.svg"
            alt="Social media apps on a phone screen"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black/60" />
        </div>
        <div className="relative z-10 text-center space-y-6 max-w-4xl mx-auto px-4">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white">
            Get more views, with less effort
          </h1>
          <p className="text-xl md:text-2xl text-white/90">
            Post to all platforms in 30 seconds instead of 30 minutes.
          </p>
          <Button size="lg" className="bg-emerald-500 hover:bg-emerald-600">
            Try for free
          </Button>
        </div>
      </div>
    </>
  );
}
