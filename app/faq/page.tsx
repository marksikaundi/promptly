'use client'

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

export default function FAQ() {
  return (
    <div className="max-w-3xl mx-auto p-6">
      <div className="mb-8">
        <span className="text-emerald-500 font-medium">FAQ</span>
        <h2 className="text-3xl font-semibold text-slate-800 mt-2">Frequently Asked Questions</h2>
      </div>
      
      <Accordion type="single" collapsible className="space-y-4">
        <AccordionItem value="item-1" className="border-b">
          <AccordionTrigger className="text-base font-medium text-slate-800 hover:no-underline">
            What social platforms do you support?
          </AccordionTrigger>
          <AccordionContent className="text-slate-600">
            We support all major social media platforms including Facebook, Twitter, Instagram, LinkedIn, 
            Pinterest, and TikTok. Our platform is constantly evolving to include new platforms as they 
            gain popularity.
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="item-2" className="border-b">
          <AccordionTrigger className="text-base font-medium text-slate-800 hover:no-underline">
            How many social accounts can I connect?
          </AccordionTrigger>
          <AccordionContent className="text-slate-600">
            With our standard plan, you can connect up to 5 social media accounts. Our premium plans 
            allow for unlimited account connections to help you manage your entire social media presence 
            from one dashboard.
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="item-3" className="border-b">
          <AccordionTrigger className="text-base font-medium text-slate-800 hover:no-underline">
            What is a social account?
          </AccordionTrigger>
          <AccordionContent className="text-slate-600">
            A social account is any profile, page, or account on a social media platform that you manage. 
            This could be a Facebook page, Instagram profile, Twitter account, or any other social media 
            presence you want to manage through our platform.
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="item-4" className="border-b">
          <AccordionTrigger className="text-base font-medium text-slate-800 hover:no-underline">
            How many posts can I make and schedule per month?
          </AccordionTrigger>
          <AccordionContent className="text-slate-600">
            Our platform offers unlimited posts and scheduling capabilities. You can create and schedule 
            as many posts as you need across all your connected social media accounts without any monthly limits.
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="item-5" className="border-b">
          <AccordionTrigger className="text-base font-medium text-slate-800 hover:no-underline">
            Will my posts get less reach using this app?
          </AccordionTrigger>
          <AccordionContent className="text-slate-600">
            No, your posts will not get less reach. We use official APIs provided by social media platforms 
            to publish your content, ensuring that your posts receive the same treatment as if you posted 
            directly on the platform.
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="item-6" className="border-b">
          <AccordionTrigger className="text-base font-medium text-slate-800 hover:no-underline">
            Can I cancel anytime?
          </AccordionTrigger>
          <AccordionContent className="text-slate-600">
            Yes, you can cancel your subscription at any time. There are no long-term contracts or 
            commitments. Your subscription will remain active until the end of your current billing period.
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="item-7" className="border-b">
          <AccordionTrigger className="text-base font-medium text-slate-800 hover:no-underline">
            Can I get a refund?
          </AccordionTrigger>
          <AccordionContent className="text-slate-600">
            We offer a 30-day money-back guarantee for all new subscriptions. If you&apos;re not satisfied 
            with our service, you can request a full refund within the first 30 days of your subscription.
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="item-8" className="border-b">
          <AccordionTrigger className="text-base font-medium text-slate-800 hover:no-underline">
            I have another question
          </AccordionTrigger>
          <AccordionContent className="text-slate-600">
            If you have any other questions, please don&apos;t hesitate to reach out to our support team. 
            We&apos;re available 24/7 and happy to help with any queries you might have about our platform.
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  )
}

