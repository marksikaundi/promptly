import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
  } from "@/components/ui/accordion"
  
  export default function FAQ() {
    return (
      <div className="w-full max-w-3xl mx-auto px-4 py-8 sm:py-12">
        <div className="space-y-2 sm:space-y-4 text-center sm:text-left">
          <span className="text-emerald-500 font-medium text-sm sm:text-base">FAQ</span>
          <h2 className="text-xl sm:text-2xl font-semibold text-slate-800">Frequently Asked Questions</h2>
        </div>
        
        <Accordion type="single" collapsible className="mt-6 sm:mt-8 space-y-4">
          <AccordionItem value="item-1" className="border-b-0">
            <AccordionTrigger className="hover:no-underline text-left">
              What social platforms do you support?
            </AccordionTrigger>
            <AccordionContent>
              We support all major social media platforms including Facebook, Twitter, Instagram, LinkedIn, and Pinterest.
            </AccordionContent>
          </AccordionItem>
  
          <AccordionItem value="item-2" className="border-b-0">
            <AccordionTrigger className="hover:no-underline text-left">
              How many social accounts can I connect?
            </AccordionTrigger>
            <AccordionContent>
              You can connect up to 5 social media accounts on our standard plan, and unlimited accounts on our premium plan.
            </AccordionContent>
          </AccordionItem>
  
          <AccordionItem value="item-3" className="border-b-0">
            <AccordionTrigger className="hover:no-underline text-left">
              What is a social account?
            </AccordionTrigger>
            <AccordionContent>
              A social account is any profile or page you manage on social media platforms that you want to connect to our service.
            </AccordionContent>
          </AccordionItem>
  
          <AccordionItem value="item-4" className="border-b-0">
            <AccordionTrigger className="hover:no-underline text-left">
              How many posts can I make and schedule per month?
            </AccordionTrigger>
            <AccordionContent>
              Our standard plan allows up to 100 posts per month, while our premium plan offers unlimited posting and scheduling.
            </AccordionContent>
          </AccordionItem>
  
          <AccordionItem value="item-5" className="border-b-0">
            <AccordionTrigger className="hover:no-underline text-left">
              Will my posts get less reach using this app?
            </AccordionTrigger>
            <AccordionContent>
              No, our app uses official platform APIs and follows best practices to ensure your posts get the same reach as posting directly on the platforms.
            </AccordionContent>
          </AccordionItem>
  
          <AccordionItem value="item-6" className="border-b-0">
            <AccordionTrigger className="hover:no-underline text-left">
              Can I cancel anytime?
            </AccordionTrigger>
            <AccordionContent>
              Yes, you can cancel your subscription at any time with no questions asked. Your access will continue until the end of your billing period.
            </AccordionContent>
          </AccordionItem>
  
          <AccordionItem value="item-7" className="border-b-0">
            <AccordionTrigger className="hover:no-underline text-left">
              Can I get a refund?
            </AccordionTrigger>
            <AccordionContent>
              We offer a 30-day money-back guarantee. If you&apos;re not satisfied with our service, you can request a full refund within this period.
            </AccordionContent>
          </AccordionItem>
  
          <AccordionItem value="item-8" className="border-b-0">
            <AccordionTrigger className="hover:no-underline text-left">
              I have another question
            </AccordionTrigger>
            <AccordionContent>
              Please reach out to our support team at support@example.com or use our contact form, and we&apos;ll be happy to help!
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    )
  }
  
  