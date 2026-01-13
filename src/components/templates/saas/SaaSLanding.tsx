"use client"

import * as React from "react"
import { motion } from "framer-motion"
import { Menu, X, Check, ArrowRight, BarChart3, Globe, Shield, Zap, Layout, Users } from "lucide-react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import { PricingGrid, type PricingTier } from "@/components/patterns/pricing"
import { TestimonialsGrid, type Testimonial } from "@/components/patterns/testimonials"
import { FAQ, type FAQItem } from "@/components/patterns/faq"

// --- Navbar ---
function Navbar() {
  const [isOpen, setIsOpen] = React.useState(false)

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 border-b bg-background/80 backdrop-blur-md">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        <div className="flex items-center gap-2">
          <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary text-primary-foreground">
            <Zap className="h-5 w-5 fill-current" />
          </div>
          <span className="text-xl font-bold tracking-tight">SaaSify</span>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8">
          <a href="#features" className="text-sm font-medium text-muted-foreground hover:text-foreground">Features</a>
          <a href="#testimonials" className="text-sm font-medium text-muted-foreground hover:text-foreground">Testimonials</a>
          <a href="#pricing" className="text-sm font-medium text-muted-foreground hover:text-foreground">Pricing</a>
          <a href="#faq" className="text-sm font-medium text-muted-foreground hover:text-foreground">FAQ</a>
        </div>

        <div className="hidden md:flex items-center gap-4">
          <Button variant="ghost" size="sm">Log in</Button>
          <Button size="sm">Get Started</Button>
        </div>

        {/* Mobile Menu Toggle */}
        <button className="md:hidden p-2" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden border-t bg-background p-4 space-y-4">
          <div className="flex flex-col gap-4">
            <a href="#features" className="text-sm font-medium" onClick={() => setIsOpen(false)}>Features</a>
            <a href="#testimonials" className="text-sm font-medium" onClick={() => setIsOpen(false)}>Testimonials</a>
            <a href="#pricing" className="text-sm font-medium" onClick={() => setIsOpen(false)}>Pricing</a>
            <a href="#faq" className="text-sm font-medium" onClick={() => setIsOpen(false)}>FAQ</a>
          </div>
          <div className="flex flex-col gap-2 pt-4 border-t">
            <Button variant="outline" className="w-full">Log in</Button>
            <Button className="w-full">Get Started</Button>
          </div>
        </div>
      )}
    </nav>
  )
}

// --- Hero ---
function Hero() {
  return (
    <section className="relative overflow-hidden pt-32 pb-16 md:pt-48 md:pb-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="inline-flex items-center rounded-full border px-3 py-1 text-sm font-medium bg-muted/50 text-muted-foreground mb-6">
            <span className="flex h-2 w-2 rounded-full bg-primary mr-2"></span>
            v2.0 is now live
          </div>
          <h1 className="text-4xl font-bold tracking-tight sm:text-6xl md:text-7xl bg-gradient-to-r from-foreground to-foreground/60 bg-clip-text text-transparent pb-2">
            The Ultimate Platform <br className="hidden sm:block" />
            for <span className="text-primary">Modern SaaS</span>
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-muted-foreground sm:text-xl">
            Streamline your workflow, boost productivity, and scale your business with our all-in-one solution. Built for developers, designers, and founders.
          </p>
          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button size="lg" className="h-12 px-8 text-base w-full sm:w-auto">
              Start Free Trial <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
            <Button size="lg" variant="outline" className="h-12 px-8 text-base w-full sm:w-auto">
              View Demo
            </Button>
          </div>
        </motion.div>

        {/* Dashboard Preview */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="mt-20 relative mx-auto max-w-5xl rounded-xl border bg-background shadow-2xl overflow-hidden"
        >
          <div className="absolute inset-x-0 top-0 h-10 bg-muted/50 border-b flex items-center px-4 gap-2">
            <div className="h-3 w-3 rounded-full bg-red-400" />
            <div className="h-3 w-3 rounded-full bg-amber-400" />
            <div className="h-3 w-3 rounded-full bg-green-400" />
          </div>
          <div className="pt-10 bg-zinc-50 dark:bg-zinc-900/50 min-h-[400px] md:min-h-[600px] p-8">
            {/* Abstract Dashboard Content */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="col-span-2 space-y-6">
                <div className="h-64 rounded-lg bg-background border shadow-sm p-6">
                   <div className="h-4 w-32 bg-muted rounded mb-4" />
                   <div className="h-40 bg-primary/5 rounded-md flex items-end justify-between px-4 pb-2 gap-2">
                      {[40, 70, 45, 90, 65, 80, 50, 95].map((h, i) => (
                        <div key={i} className="w-full bg-primary/20 rounded-t-sm" style={{ height: `${h}%` }} />
                      ))}
                   </div>
                </div>
                <div className="grid grid-cols-2 gap-6">
                   <div className="h-32 rounded-lg bg-background border shadow-sm p-4">
                      <div className="h-8 w-8 rounded bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 flex items-center justify-center mb-3">
                        <Users className="h-5 w-5" />
                      </div>
                      <div className="h-4 w-20 bg-muted rounded mb-2" />
                      <div className="h-8 w-16 bg-muted/50 rounded" />
                   </div>
                   <div className="h-32 rounded-lg bg-background border shadow-sm p-4">
                      <div className="h-8 w-8 rounded bg-green-100 dark:bg-green-900/30 text-green-600 dark:text-green-400 flex items-center justify-center mb-3">
                        <BarChart3 className="h-5 w-5" />
                      </div>
                      <div className="h-4 w-20 bg-muted rounded mb-2" />
                      <div className="h-8 w-16 bg-muted/50 rounded" />
                   </div>
                </div>
              </div>
              <div className="col-span-1 space-y-6">
                <div className="h-full rounded-lg bg-background border shadow-sm p-6">
                   <div className="h-4 w-24 bg-muted rounded mb-6" />
                   <div className="space-y-4">
                      {[1, 2, 3, 4, 5].map((i) => (
                        <div key={i} className="flex items-center gap-3">
                           <div className="h-8 w-8 rounded-full bg-muted" />
                           <div className="space-y-1 flex-1">
                              <div className="h-3 w-full bg-muted rounded" />
                              <div className="h-2 w-2/3 bg-muted/50 rounded" />
                           </div>
                        </div>
                      ))}
                   </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
      
      {/* Background decoration */}
      <div className="absolute top-0 inset-x-0 h-[500px] bg-gradient-to-b from-primary/5 to-transparent -z-10" />
    </section>
  )
}

// --- Logo Cloud ---
function LogoCloud() {
  const logos = [
    "Acme Corp", "GlobalTech", "Nebula", "Trio", "FoxRun", "Circle"
  ]
  return (
    <section className="py-12 border-y bg-muted/30">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
        <p className="text-sm font-semibold text-muted-foreground mb-8">TRUSTED BY INNOVATIVE TEAMS WORLDWIDE</p>
        <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16 opacity-60 grayscale hover:grayscale-0 transition-all duration-500">
          {logos.map((logo, i) => (
            <div key={i} className="text-xl md:text-2xl font-bold flex items-center gap-2">
               <div className="h-6 w-6 rounded-full bg-current opacity-50" />
               {logo}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

// --- Features ---
function Features() {
  const features = [
    {
      icon: <Globe className="h-6 w-6" />,
      title: "Global Infrastructure",
      description: "Deploy your application to edge locations worldwide with a single click."
    },
    {
      icon: <Shield className="h-6 w-6" />,
      title: "Enterprise Security",
      description: "Bank-grade encryption, SOC2 compliance, and automated threat protection."
    },
    {
      icon: <Zap className="h-6 w-6" />,
      title: "Lightning Fast",
      description: "Optimized performance with sub-millisecond latency for your users."
    },
    {
      icon: <BarChart3 className="h-6 w-6" />,
      title: "Real-time Analytics",
      description: "Gain deep insights into user behavior and application performance."
    },
    {
      icon: <Layout className="h-6 w-6" />,
      title: "Intuitive Dashboard",
      description: "Manage everything from a beautiful, easy-to-use command center."
    },
    {
      icon: <Users className="h-6 w-6" />,
      title: "Team Collaboration",
      description: "Built-in tools for teams to collaborate, review, and ship faster."
    }
  ]

  return (
    <section id="features" className="py-24 bg-background">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">Everything you need to scale</h2>
          <p className="text-lg text-muted-foreground">
            Our platform provides a comprehensive suite of tools designed to help you build, launch, and grow your SaaS business.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, i) => (
            <div key={i} className="p-6 rounded-2xl border bg-card hover:shadow-lg transition-all duration-300 group">
              <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center text-primary mb-4 group-hover:scale-110 transition-transform">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-muted-foreground">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

// --- CTA ---
function CTA() {
  return (
    <section className="py-24">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <div className="relative rounded-3xl bg-primary px-6 py-16 sm:px-12 sm:py-24 text-center overflow-hidden">
          <div className="relative z-10">
            <h2 className="text-3xl font-bold tracking-tight text-primary-foreground sm:text-4xl mb-6">
              Ready to transform your business?
            </h2>
            <p className="text-lg text-primary-foreground/80 max-w-2xl mx-auto mb-10">
              Join thousands of developers and founders who are building the future with SaaSify today.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Button size="lg" variant="secondary" className="h-12 px-8 text-base">
                Get Started for Free
              </Button>
              <Button size="lg" variant="outline" className="h-12 px-8 text-base bg-transparent text-primary-foreground border-primary-foreground hover:bg-primary-foreground/10">
                Contact Sales
              </Button>
            </div>
          </div>
          
          {/* Decorative circles */}
          <div className="absolute top-0 left-0 -translate-x-1/2 -translate-y-1/2 h-64 w-64 rounded-full bg-white/10 blur-3xl" />
          <div className="absolute bottom-0 right-0 translate-x-1/2 translate-y-1/2 h-64 w-64 rounded-full bg-white/10 blur-3xl" />
        </div>
      </div>
    </section>
  )
}

// --- Footer ---
function Footer() {
  return (
    <footer className="border-t bg-muted/30 pt-16 pb-8">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8 mb-12">
          <div className="col-span-2 lg:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary text-primary-foreground">
                <Zap className="h-5 w-5 fill-current" />
              </div>
              <span className="text-xl font-bold">SaaSify</span>
            </div>
            <p className="text-muted-foreground max-w-xs mb-6">
              The complete platform for modern SaaS applications. Build faster, scale better.
            </p>
            <div className="flex gap-4">
              {/* Social placeholders */}
              {[1, 2, 3, 4].map((i) => (
                <div key={i} className="h-8 w-8 rounded-full bg-muted-foreground/20 flex items-center justify-center hover:bg-primary hover:text-white transition-colors cursor-pointer">
                  <Globe className="h-4 w-4" />
                </div>
              ))}
            </div>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Product</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><a href="#" className="hover:text-foreground">Features</a></li>
              <li><a href="#" className="hover:text-foreground">Integrations</a></li>
              <li><a href="#" className="hover:text-foreground">Pricing</a></li>
              <li><a href="#" className="hover:text-foreground">Changelog</a></li>
              <li><a href="#" className="hover:text-foreground">Docs</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Company</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><a href="#" className="hover:text-foreground">About Us</a></li>
              <li><a href="#" className="hover:text-foreground">Careers</a></li>
              <li><a href="#" className="hover:text-foreground">Blog</a></li>
              <li><a href="#" className="hover:text-foreground">Contact</a></li>
              <li><a href="#" className="hover:text-foreground">Partners</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Legal</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><a href="#" className="hover:text-foreground">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-foreground">Terms of Service</a></li>
              <li><a href="#" className="hover:text-foreground">Cookie Policy</a></li>
            </ul>
          </div>
        </div>
        <div className="border-t pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-muted-foreground">
          <p>© 2024 SaaSify Inc. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-foreground">Privacy</a>
            <a href="#" className="hover:text-foreground">Terms</a>
            <a href="#" className="hover:text-foreground">Cookies</a>
          </div>
        </div>
      </div>
    </footer>
  )
}

// --- Main Component ---
export function SaaSLanding() {
  const pricingTiers: PricingTier[] = [
    {
      name: "Starter",
      price: "$29",
      description: "Perfect for side projects and small teams.",
      features: ["Up to 5 team members", "5GB Storage", "Basic Analytics", "Community Support", "API Access"],
      cta: "Start Free Trial",
      highlight: false
    },
    {
      name: "Pro",
      price: "$79",
      description: "For growing teams that need more power.",
      features: ["Up to 20 team members", "50GB Storage", "Advanced Analytics", "Priority Support", "Custom Integrations", "Audit Logs"],
      cta: "Get Started",
      popular: true,
      highlight: true
    },
    {
      name: "Enterprise",
      price: "$199",
      description: "Custom solutions for large organizations.",
      features: ["Unlimited team members", "Unlimited Storage", "Custom Reporting", "24/7 Dedicated Support", "SSO & SAML", "SLA Guarantee"],
      cta: "Contact Sales",
      highlight: false
    }
  ]

  const testimonials: Testimonial[] = [
    {
      quote: "SaaSify has completely transformed how we build and ship software. It's simply incredible.",
      name: "Sarah Jenkins",
      role: "CTO at TechFlow",
      highlight: "transformed",
      rating: 5
    },
    {
      quote: "The best investment we've made this year. The ROI was immediate and substantial.",
      name: "Michael Chen",
      role: "Founder at GrowthLabs",
      highlight: "best investment",
      rating: 5
    },
    {
      quote: "I can't imagine going back to our old workflow. SaaSify is intuitive, fast, and reliable.",
      name: "Jessica Williams",
      role: "Product Manager",
      highlight: "intuitive, fast",
      rating: 5
    }
  ]

  const faqs: FAQItem[] = [
    {
      question: "Can I cancel my subscription at any time?",
      answer: "Yes, you can cancel your subscription at any time. Your access will continue until the end of your current billing period."
    },
    {
      question: "Do you offer a free trial?",
      answer: "We offer a 14-day free trial on all plans. No credit card required to start."
    },
    {
      question: "What payment methods do you accept?",
      answer: "We accept all major credit cards, PayPal, and bank transfers for Enterprise plans."
    },
    {
      question: "Is my data secure?",
      answer: "Absolutely. We use industry-standard encryption and security practices to keep your data safe."
    }
  ]

  return (
    <div className="min-h-screen bg-background font-sans text-foreground selection:bg-primary/20">
      <Navbar />
      <main>
        <Hero />
        <LogoCloud />
        <Features />
        <div id="testimonials">
            <TestimonialsGrid items={testimonials} />
        </div>
        <div id="pricing">
            <PricingGrid tiers={pricingTiers} />
        </div>
        <div id="faq" className="py-12 bg-muted/20">
            <FAQ items={faqs} />
        </div>
        <CTA />
      </main>
      <Footer />
    </div>
  )
}
