import { FAQ } from "@/components/patterns/faq"
import { PreviewCodeTabs } from "@/components/ui/preview-code-tabs"
import { Breadcrumb, BreadcrumbList, BreadcrumbItem, BreadcrumbSeparator, BreadcrumbLink, BreadcrumbPage } from '@/components/ui/breadcrumb'

export default function FAQDoc() {
  const basicCode = `import { FAQ } from "@/components/patterns/faq"

const items = [
  {
    question: "What is the return policy?",
    answer: "You can return any item within 30 days of purchase. The item must be unused and in its original packaging.",
  },
  {
    question: "How do I track my order?",
    answer: "Once your order ships, you will receive an email with a tracking number and a link to track your package.",
  },
  {
    question: "Do you offer international shipping?",
    answer: "Yes, we ship to most countries worldwide. Shipping costs and delivery times vary by location.",
  },
  {
    question: "Can I change my order after placing it?",
    answer: "We process orders quickly, but if you contact us within 1 hour of placing your order, we may be able to make changes.",
  },
]

export function Example() {
  return (
    <FAQ items={items} />
  )
}`

  const customTitleCode = `import { FAQ } from "@/components/patterns/faq"

const items = [
  {
    question: "How do I sign up?",
    answer: "Click the 'Sign Up' button in the top right corner and follow the instructions.",
  },
  {
    question: "Is it free to use?",
    answer: "We offer both free and premium plans. You can start with our free tier and upgrade anytime.",
  },
]

export function Example() {
  return (
    <FAQ 
      items={items} 
      title="Help Center" 
      description="Find answers to common questions about our platform."
      allowMultipleOpen={true}
    />
  )
}`

  const items = [
    {
      question: "What is the return policy?",
      answer: "You can return any item within 30 days of purchase. The item must be unused and in its original packaging.",
    },
    {
      question: "How do I track my order?",
      answer: "Once your order ships, you will receive an email with a tracking number and a link to track your package.",
    },
    {
      question: "Do you offer international shipping?",
      answer: "Yes, we ship to most countries worldwide. Shipping costs and delivery times vary by location.",
    },
    {
      question: "Can I change my order after placing it?",
      answer: "We process orders quickly, but if you contact us within 1 hour of placing your order, we may be able to make changes.",
    },
  ]

  return (
    <div className="mx-auto w-full max-w-5xl px-6 py-8">
      <Breadcrumb className="mb-8">
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbLink href="/">Home</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbPage>FAQ</BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>

      <div className="mb-12">
        <h1 className="text-4xl font-bold tracking-tight">FAQ Section</h1>
        <p className="mt-4 text-lg text-muted-foreground">
          A responsive, animated FAQ section with expandable answers and smooth transitions.
        </p>
      </div>

      <div className="grid gap-12">
        <section>
          <h2 className="mb-4 text-2xl font-semibold">Basic Usage</h2>
          <PreviewCodeTabs code={basicCode}>
            <div className="py-8 rounded-lg border bg-white dark:bg-black">
              <FAQ items={items} />
            </div>
          </PreviewCodeTabs>
        </section>

        <section>
          <h2 className="mb-4 text-2xl font-semibold">Custom Title & Multiple Open</h2>
          <p className="mb-4 text-muted-foreground">
            You can customize the title, description, and allow multiple items to be open at once.
          </p>
          <PreviewCodeTabs code={customTitleCode}>
             <div className="py-8 rounded-lg border bg-white dark:bg-black">
              <FAQ 
                items={items.slice(0, 2)} 
                title="Help Center" 
                description="Find answers to common questions about our platform."
                allowMultipleOpen={true}
              />
            </div>
          </PreviewCodeTabs>
        </section>
      </div>
    </div>
  )
}
