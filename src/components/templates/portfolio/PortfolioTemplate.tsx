"use client"

import * as React from "react"
import { motion } from "framer-motion"
import { 
  Github, 
  Linkedin, 
  Twitter, 
  Mail, 
  ExternalLink, 
  Briefcase, 
  GraduationCap, 
  Code2, 
  Trophy, 
  BookOpen, 
  Send,
  ArrowRight
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Separator } from "@/components/ui/separator"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Timeline, type TimelineItem } from "@/components/patterns/timeline"
import { cn } from "@/lib/utils"

// --- Hero Section ---
function Hero() {
  return (
    <section className="relative py-24 md:py-32 overflow-hidden">
      <div className="container px-4 md:px-6 relative z-10">
        <div className="flex flex-col md:flex-row items-center gap-12">
          <motion.div 
            className="flex-1 space-y-6 text-center md:text-left"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="inline-block rounded-full bg-muted px-3 py-1 text-sm font-medium">
              Available for hire
            </div>
            <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl">
              Hi, I'm <span className="text-primary">Alex Doe</span>
            </h1>
            <p className="max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed mx-auto md:mx-0">
              A passionate Full Stack Developer crafting beautiful and functional web experiences.
              Specializing in React, Node.js, and modern UI/UX.
            </p>
            <div className="flex flex-wrap gap-4 justify-center md:justify-start">
              <Button size="lg">View Projects</Button>
              <Button size="lg" variant="outline">Contact Me</Button>
            </div>
            <div className="flex gap-4 justify-center md:justify-start pt-4">
              <Button variant="ghost" size="icon" className="hover:text-primary">
                <Github className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="icon" className="hover:text-primary">
                <Linkedin className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="icon" className="hover:text-primary">
                <Twitter className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="icon" className="hover:text-primary">
                <Mail className="h-5 w-5" />
              </Button>
            </div>
          </motion.div>
          
          <motion.div 
            className="flex-1 flex justify-center"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="relative w-64 h-64 md:w-96 md:h-96">
              <div className="absolute inset-0 bg-primary/20 rounded-full blur-3xl" />
              <div className="relative w-full h-full rounded-full border-4 border-background shadow-2xl overflow-hidden bg-muted">
                 {/* Placeholder for user image */}
                 <Avatar className="w-full h-full">
                    <AvatarImage src="https://github.com/shadcn.png" className="object-cover" />
                    <AvatarFallback className="text-6xl">AD</AvatarFallback>
                 </Avatar>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
      
      {/* Background decoration */}
      <div className="absolute top-1/2 right-0 -translate-y-1/2 w-[500px] h-[500px] bg-primary/5 rounded-full blur-3xl -z-10" />
      <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-blue-500/5 rounded-full blur-3xl -z-10" />
    </section>
  )
}

// --- About Section ---
function About() {
  const skills = [
    "React", "TypeScript", "Next.js", "Node.js", "TailwindCSS", "PostgreSQL", 
    "GraphQL", "AWS", "Docker", "Figma", "Git", "CI/CD"
  ]

  return (
    <section className="py-24 bg-muted/30" id="about">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col md:flex-row gap-12 items-start">
          <div className="flex-1 space-y-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">About Me</h2>
            <div className="space-y-4 text-muted-foreground text-lg">
              <p>
                I started my coding journey 5 years ago when I built my first website for a local non-profit. 
                Since then, I've been hooked on the endless possibilities of software development.
              </p>
              <p>
                I've worked with startups to build scalable MVPs and established companies to modernize their legacy systems.
                My approach combines clean code architecture with an obsession for performance and user experience.
              </p>
              <p>
                When I'm not coding, you can find me hiking, reading sci-fi novels, or experimenting with new cooking recipes.
              </p>
            </div>
          </div>
          <div className="flex-1 space-y-6 w-full">
            <h3 className="text-2xl font-bold">Skills & Technologies</h3>
            <div className="flex flex-wrap gap-2">
              {skills.map((skill) => (
                <Badge key={skill} variant="secondary" className="text-base px-3 py-1">
                  {skill}
                </Badge>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

// --- Work Experience Section ---
function Work() {
  const experiences: TimelineItem[] = [
    {
      id: 1,
      title: "Senior Frontend Engineer",
      date: "2022 - Present",
      description: (
        <div className="space-y-2">
          <p className="font-semibold text-primary">TechCorp Inc.</p>
          <p className="text-muted-foreground">Leading the frontend team in rebuilding the core product dashboard. Improved performance by 40% and established a new design system.</p>
          <div className="flex gap-2 flex-wrap mt-2">
            <Badge variant="outline">React</Badge>
            <Badge variant="outline">Next.js</Badge>
            <Badge variant="outline">GraphQL</Badge>
          </div>
        </div>
      ),
      icon: <Briefcase className="w-4 h-4" />
    },
    {
      id: 2,
      title: "Full Stack Developer",
      date: "2020 - 2022",
      description: (
        <div className="space-y-2">
          <p className="font-semibold text-primary">StartUp Solutions</p>
          <p className="text-muted-foreground">Developed and maintained multiple client projects. Implemented real-time features using WebSockets and optimized database queries.</p>
          <div className="flex gap-2 flex-wrap mt-2">
            <Badge variant="outline">Node.js</Badge>
            <Badge variant="outline">PostgreSQL</Badge>
            <Badge variant="outline">AWS</Badge>
          </div>
        </div>
      ),
      icon: <Briefcase className="w-4 h-4" />
    },
    {
      id: 3,
      title: "Junior Web Developer",
      date: "2018 - 2020",
      description: (
        <div className="space-y-2">
          <p className="font-semibold text-primary">Creative Agency</p>
          <p className="text-muted-foreground">Collaborated with designers to convert mockups into responsive websites. Built custom WordPress themes and plugins.</p>
          <div className="flex gap-2 flex-wrap mt-2">
            <Badge variant="outline">HTML/CSS</Badge>
            <Badge variant="outline">JavaScript</Badge>
            <Badge variant="outline">PHP</Badge>
          </div>
        </div>
      ),
      icon: <Briefcase className="w-4 h-4" />
    }
  ]

  return (
    <section className="py-24" id="work">
      <div className="container px-4 md:px-6">
        <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-16">Work Experience</h2>
        <Timeline items={experiences} mode="alternate" />
      </div>
    </section>
  )
}

// --- Education Section ---
function Education() {
  const education: TimelineItem[] = [
    {
      id: 1,
      title: "Master of Computer Science",
      date: "2016 - 2018",
      description: (
        <div className="space-y-1">
          <p className="font-semibold text-primary">Tech University</p>
          <p className="text-muted-foreground">Specialized in Artificial Intelligence and Distributed Systems. Graduated with Honors.</p>
        </div>
      ),
      icon: <GraduationCap className="w-4 h-4" />
    },
    {
      id: 2,
      title: "Bachelor of Science in IT",
      date: "2012 - 2016",
      description: (
        <div className="space-y-1">
          <p className="font-semibold text-primary">State College</p>
          <p className="text-muted-foreground">Major in Software Engineering. Lead Developer of the University Coding Club.</p>
        </div>
      ),
      icon: <GraduationCap className="w-4 h-4" />
    }
  ]

  return (
    <section className="py-24 bg-muted/30" id="education">
      <div className="container px-4 md:px-6">
        <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-16">Education</h2>
        <Timeline items={education} mode="left" className="max-w-3xl" />
      </div>
    </section>
  )
}

// --- Projects Section ---
function Projects() {
  const projects = [
    {
      title: "E-commerce Dashboard",
      description: "A comprehensive dashboard for online retailers to manage inventory, orders, and analytics.",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2426&auto=format&fit=crop",
      tags: ["React", "Tailwind", "Recharts", "Supabase"],
      link: "#"
    },
    {
      title: "Task Management App",
      description: "A collaborative task management tool with real-time updates and team workspaces.",
      image: "https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?q=80&w=2372&auto=format&fit=crop",
      tags: ["Next.js", "Prisma", "Socket.io"],
      link: "#"
    },
    {
      title: "AI Content Generator",
      description: "An AI-powered application that helps writers generate blog posts and social media content.",
      image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=2532&auto=format&fit=crop",
      tags: ["OpenAI API", "Python", "FastAPI", "React"],
      link: "#"
    },
    {
      title: "Finance Tracker",
      description: "Personal finance tracking application with budget planning and expense visualization.",
      image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?q=80&w=2626&auto=format&fit=crop",
      tags: ["Vue.js", "Firebase", "Chart.js"],
      link: "#"
    }
  ]

  return (
    <section className="py-24" id="projects">
      <div className="container px-4 md:px-6">
        <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-4">Featured Projects</h2>
        <p className="text-center text-muted-foreground max-w-[600px] mx-auto mb-16">
          A selection of projects that showcase my skills and passion for building products.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <Card key={index} className="overflow-hidden group hover:shadow-lg transition-all duration-300">
              <div className="relative h-64 overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <Button variant="secondary" className="gap-2">
                    View Project <ExternalLink className="w-4 h-4" />
                  </Button>
                </div>
              </div>
              <CardHeader>
                <CardTitle>{project.title}</CardTitle>
                <CardDescription>{project.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map(tag => (
                    <Badge key={tag} variant="secondary" className="text-xs">{tag}</Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

// --- Hackathon Section ---
function Hackathon() {
  const hackathons: TimelineItem[] = [
    {
      id: 1,
      title: "Global AI Hackathon 2023",
      date: "Winner - Best Healthcare Solution",
      description: "Built an AI-powered diagnostic tool for early detection of skin conditions using computer vision.",
      icon: <Trophy className="w-4 h-4" />
    },
    {
      id: 2,
      title: "Web3 DeFi Challenge",
      date: "Finalist",
      description: "Developed a decentralized lending platform with automated smart contract auditing features.",
      icon: <Code2 className="w-4 h-4" />
    },
    {
      id: 3,
      title: "Sustainable Tech Jam",
      date: "Runner Up",
      description: "Created an IoT solution for monitoring and optimizing home energy consumption.",
      icon: <Trophy className="w-4 h-4" />
    }
  ]

  return (
    <section className="py-24 bg-muted/30" id="hackathons">
      <div className="container px-4 md:px-6">
        <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-16">Hackathons</h2>
        <Timeline items={hackathons} mode="left" className="max-w-3xl" />
      </div>
    </section>
  )
}

// --- Blog Section ---
function Blog() {
  const posts = [
    {
      title: "Understanding React Server Components",
      excerpt: "A deep dive into how RSCs work and how they change the way we build Next.js applications.",
      date: "Oct 12, 2023",
      readTime: "5 min read",
      category: "React"
    },
    {
      title: "Mastering Tailwind CSS Architecture",
      excerpt: "Best practices for organizing your utility classes and creating a maintainable design system.",
      date: "Sep 28, 2023",
      readTime: "7 min read",
      category: "CSS"
    },
    {
      title: "The Future of Web Performance",
      excerpt: "Exploring new browser APIs and techniques to deliver lightning-fast web experiences.",
      date: "Aug 15, 2023",
      readTime: "6 min read",
      category: "Performance"
    }
  ]

  return (
    <section className="py-24" id="blog">
      <div className="container px-4 md:px-6">
        <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-16">Latest Articles</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {posts.map((post, index) => (
            <Card key={index} className="flex flex-col h-full hover:border-primary/50 transition-colors">
              <CardHeader>
                <div className="flex justify-between items-center mb-2">
                  <Badge variant="outline">{post.category}</Badge>
                  <span className="text-xs text-muted-foreground">{post.date}</span>
                </div>
                <CardTitle className="leading-tight hover:text-primary cursor-pointer transition-colors">
                  {post.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="flex-1">
                <p className="text-muted-foreground text-sm">{post.excerpt}</p>
              </CardContent>
              <CardFooter className="flex justify-between items-center text-sm text-muted-foreground">
                <div className="flex items-center gap-1">
                  <BookOpen className="w-3 h-3" /> {post.readTime}
                </div>
                <Button variant="link" className="p-0 h-auto">Read More <ArrowRight className="w-3 h-3 ml-1" /></Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

// --- Contact Section ---
function Contact() {
  return (
    <section className="py-24 bg-muted/30" id="contact">
      <div className="container px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-4xl mx-auto">
          <div className="space-y-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Get in Touch</h2>
            <p className="text-muted-foreground text-lg">
              I'm currently open to new opportunities and collaborations. 
              Whether you have a question or just want to say hi, I'll try my best to get back to you!
            </p>
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-primary" />
                <span>hello@alexdoe.dev</span>
              </div>
              <div className="flex items-center gap-3">
                <Twitter className="w-5 h-5 text-primary" />
                <span>@alexdoe</span>
              </div>
              <div className="flex items-center gap-3">
                <Linkedin className="w-5 h-5 text-primary" />
                <span>linkedin.com/in/alexdoe</span>
              </div>
            </div>
          </div>
          <div className="space-y-4 bg-background p-6 rounded-xl border shadow-sm">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <label htmlFor="name" className="text-sm font-medium">Name</label>
                <Input id="name" placeholder="John Doe" />
              </div>
              <div className="space-y-2">
                <label htmlFor="email" className="text-sm font-medium">Email</label>
                <Input id="email" type="email" placeholder="john@example.com" />
              </div>
            </div>
            <div className="space-y-2">
              <label htmlFor="subject" className="text-sm font-medium">Subject</label>
              <Input id="subject" placeholder="Project Inquiry" />
            </div>
            <div className="space-y-2">
              <label htmlFor="message" className="text-sm font-medium">Message</label>
              <Textarea id="message" placeholder="Tell me about your project..." className="min-h-[120px]" />
            </div>
            <Button className="w-full gap-2">
              Send Message <Send className="w-4 h-4" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}

// --- Main Template ---
export function PortfolioTemplate() {
  return (
    <div className="min-h-screen bg-background font-sans text-foreground selection:bg-primary/20">
      <Hero />
      <About />
      <Work />
      <Education />
      <Projects />
      <Hackathon />
      <Blog />
      <Contact />
      
      <footer className="py-8 border-t text-center text-sm text-muted-foreground">
        <p>© {new Date().getFullYear()} Alex Doe. All rights reserved.</p>
      </footer>
    </div>
  )
}
