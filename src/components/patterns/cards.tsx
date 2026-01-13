import * as React from "react"
import { cn } from "@/lib/utils"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle, CardAction } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge" 
import { Star, Heart, MessageCircle, Share2, ShoppingCart, ArrowRight, MoreHorizontal, Calendar, Clock } from "lucide-react"

// Generic Card Props
interface BaseCardProps extends React.HTMLAttributes<HTMLDivElement> {
  title?: string
  description?: string
  image?: string
}

// 1. Single/Generic Card
export function CardGeneric({ title = "Card Title", description = "Card Description", className, children, ...props }: BaseCardProps) {
  return (
    <Card className={cn("w-full max-w-sm", className)} {...props}>
      <CardHeader>
        <CardTitle>{title}</CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
      <CardContent>
        {children || <p className="text-sm text-muted-foreground">This is a generic card content placeholder. You can put any content here.</p>}
      </CardContent>
      <CardFooter>
        <Button className="w-full">Action</Button>
      </CardFooter>
    </Card>
  )
}

// 2. Blog Post Card
interface BlogPostCardProps extends BaseCardProps {
  category?: string
  author?: { name: string; avatar?: string }
  date?: string
  readTime?: string
}

export function CardBlogPost({
  title = "The Future of UI Design",
  description = "Exploring the latest trends in user interface design and what to expect in the coming years.",
  image = "https://images.unsplash.com/photo-1499750310159-52f8f6819fc1?q=80&w=1000&auto=format&fit=crop",
  category = "Design",
  author = { name: "Jane Doe", avatar: "JD" },
  date = "Oct 24, 2024",
  readTime = "5 min read",
  className,
  ...props
}: BlogPostCardProps) {
  return (
    <Card className={cn("w-full max-w-sm overflow-hidden p-0 gap-0", className)} {...props}>
      <div className="aspect-video w-full overflow-hidden">
        <img
          src={image}
          alt={title}
          className="h-full w-full object-cover transition-transform duration-300 hover:scale-105"
        />
      </div>
      <div className="p-6 space-y-4">
        <div className="flex items-center justify-between">
          <div className="rounded-full bg-primary/10 px-2.5 py-0.5 text-xs font-semibold text-primary">
            {category}
          </div>
          <div className="flex items-center text-xs text-muted-foreground">
            <Clock className="mr-1 h-3 w-3" />
            {readTime}
          </div>
        </div>
        <div className="space-y-2">
          <h3 className="font-semibold leading-none tracking-tight text-xl hover:text-primary cursor-pointer transition-colors">
            {title}
          </h3>
          <p className="text-sm text-muted-foreground line-clamp-2">
            {description}
          </p>
        </div>
        <div className="flex items-center justify-between pt-4 border-t">
          <div className="flex items-center gap-2">
            <Avatar className="h-8 w-8">
              <AvatarImage src={author.avatar} />
              <AvatarFallback>{author.name.charAt(0)}</AvatarFallback>
            </Avatar>
            <span className="text-sm font-medium">{author.name}</span>
          </div>
          <span className="text-xs text-muted-foreground">{date}</span>
        </div>
      </div>
    </Card>
  )
}

// 3. Social Media Post Card
interface SocialPostCardProps extends BaseCardProps {
  author?: { name: string; handle: string; avatar?: string }
  timestamp?: string
  likes?: number
  comments?: number
  shares?: number
}

export function CardSocial({
  title, // Used as content
  image,
  author = { name: "Sarah Smith", handle: "@sarahsmith", avatar: "SS" },
  timestamp = "2h ago",
  likes = 124,
  comments = 42,
  shares = 12,
  className,
  ...props
}: SocialPostCardProps) {
  return (
    <Card className={cn("w-full max-w-md p-0 gap-0", className)} {...props}>
      <div className="p-6 pb-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Avatar>
              <AvatarImage src={author.avatar} />
              <AvatarFallback>{author.name.charAt(0)}</AvatarFallback>
            </Avatar>
            <div>
              <p className="text-sm font-semibold leading-none">{author.name}</p>
              <p className="text-xs text-muted-foreground">{author.handle}</p>
            </div>
          </div>
          <Button variant="ghost" size="icon" className="h-8 w-8">
            <MoreHorizontal className="h-4 w-4" />
          </Button>
        </div>
        <div className="mt-4">
          <p className="text-sm">{title || "Just launched my new portfolio! Check it out and let me know what you think. 🚀 #design #webdev"}</p>
        </div>
      </div>
      {image && (
        <div className="w-full overflow-hidden bg-muted">
          <img src={image} alt="Post content" className="w-full h-auto object-cover max-h-[400px]" />
        </div>
      )}
      <div className="p-4 pt-2">
        <div className="flex items-center justify-between pt-2">
          <div className="flex items-center gap-4">
            <Button variant="ghost" size="sm" className="text-muted-foreground hover:text-red-500 gap-1.5 px-2">
              <Heart className="h-4 w-4" />
              <span className="text-xs">{likes}</span>
            </Button>
            <Button variant="ghost" size="sm" className="text-muted-foreground hover:text-blue-500 gap-1.5 px-2">
              <MessageCircle className="h-4 w-4" />
              <span className="text-xs">{comments}</span>
            </Button>
            <Button variant="ghost" size="sm" className="text-muted-foreground hover:text-green-500 gap-1.5 px-2">
              <Share2 className="h-4 w-4" />
              <span className="text-xs">{shares}</span>
            </Button>
          </div>
          <span className="text-xs text-muted-foreground">{timestamp}</span>
        </div>
      </div>
    </Card>
  )
}

// 4. Product Card
interface ProductCardProps extends BaseCardProps {
  price?: number
  originalPrice?: number
  rating?: number
  reviews?: number
  onAddToCart?: () => void
}

export function CardProduct({
  title = "Premium Wireless Headphones",
  description = "High-fidelity audio with active noise cancellation.",
  image = "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?q=80&w=1000&auto=format&fit=crop",
  price = 299.99,
  originalPrice = 349.99,
  rating = 4.8,
  reviews = 128,
  className,
  onAddToCart,
  ...props
}: ProductCardProps) {
  return (
    <Card className={cn("w-full max-w-sm overflow-hidden p-0 gap-0 group", className)} {...props}>
      <div className="relative aspect-square overflow-hidden bg-muted">
        <img
          src={image}
          alt={title}
          className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
        />
        <div className="absolute top-3 right-3">
           <div className="rounded-full bg-background/80 backdrop-blur-sm p-1.5 text-foreground hover:text-red-500 cursor-pointer transition-colors shadow-sm">
             <Heart className="h-4 w-4" />
           </div>
        </div>
        {originalPrice && (
          <div className="absolute top-3 left-3">
             <div className="rounded bg-red-500 px-2 py-1 text-xs font-bold text-white">
               Sale
             </div>
          </div>
        )}
      </div>
      <div className="p-6">
        <div className="flex items-center justify-between mb-2">
           <div className="flex items-center text-yellow-500">
             <Star className="h-4 w-4 fill-current" />
             <span className="ml-1 text-sm font-medium text-foreground">{rating}</span>
             <span className="ml-1 text-xs text-muted-foreground">({reviews})</span>
           </div>
        </div>
        <h3 className="font-semibold text-lg leading-tight mb-2">{title}</h3>
        <p className="text-sm text-muted-foreground line-clamp-2 mb-4">{description}</p>
        <div className="flex items-center justify-between items-end">
          <div className="flex flex-col">
            {originalPrice && (
              <span className="text-xs text-muted-foreground line-through">${originalPrice}</span>
            )}
            <span className="text-xl font-bold">${price}</span>
          </div>
          <Button size="sm" onClick={onAddToCart} className="gap-2">
            <ShoppingCart className="h-4 w-4" />
            Add
          </Button>
        </div>
      </div>
    </Card>
  )
}

// 5. Bento Grid Card
interface BentoCardProps extends BaseCardProps {
  icon?: React.ReactNode
  variant?: "default" | "dark" | "gradient"
}

export function CardBento({
  title = "Analytics",
  description = "Real-time insights into your performance metrics.",
  icon,
  variant = "default",
  className,
  children,
  ...props
}: BentoCardProps) {
  const variantStyles = {
    default: "bg-card text-card-foreground",
    dark: "bg-slate-950 text-white border-slate-800",
    gradient: "bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 text-white border-none",
  }

  return (
    <Card className={cn("w-full h-full min-h-[200px] flex flex-col justify-between overflow-hidden transition-all hover:shadow-md", variantStyles[variant], className)} {...props}>
      <CardHeader className="relative z-10">
        <div className={cn("mb-2 w-fit rounded-lg p-2", variant === "default" ? "bg-primary/10 text-primary" : "bg-white/10 text-white")}>
          {icon || <Zap className="h-5 w-5" />}
        </div>
        <CardTitle className={cn("text-xl", variant !== "default" && "text-white")}>{title}</CardTitle>
        <CardDescription className={cn(variant !== "default" && "text-white/70")}>{description}</CardDescription>
      </CardHeader>
      {children && (
        <CardContent className="relative z-10">
          {children}
        </CardContent>
      )}
      <div className="relative z-0 h-full w-full">
         {/* Decorative background elements could go here */}
      </div>
    </Card>
  )
}

// 6. Bento Product Card
interface BentoProductCardProps extends BaseCardProps {
  price?: number
  actionLabel?: string
  image?: string
}

export function CardProductBento({
  title = "Ergonomic Chair",
  description = "The ultimate comfort for your workspace.",
  price = 299,
  actionLabel = "Buy Now",
  image = "https://images.unsplash.com/photo-1505843490538-5133c6c7d0e1?q=80&w=1000&auto=format&fit=crop",
  className,
  ...props
}: BentoProductCardProps) {
  return (
    <Card className={cn("w-full h-full min-h-[300px] overflow-hidden group relative border-0 bg-zinc-100 dark:bg-zinc-900", className)} {...props}>
      <div className="absolute inset-0 z-0">
        <img
          src={image}
          alt={title}
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110 opacity-80 group-hover:opacity-100"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
      </div>
      
      <div className="relative z-10 flex h-full flex-col justify-end p-6 text-white">
        <div className="transform transition-all duration-300 translate-y-4 group-hover:translate-y-0">
          <div className="flex items-center justify-between mb-2">
            <Badge variant="secondary" className="bg-white/20 text-white hover:bg-white/30 backdrop-blur-md border-0">
              New Arrival
            </Badge>
            <span className="text-lg font-bold">${price}</span>
          </div>
          
          <h3 className="text-2xl font-bold mb-1">{title}</h3>
          <p className="text-white/80 text-sm mb-4 line-clamp-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100 h-0 group-hover:h-auto">
            {description}
          </p>
          
          <Button className="w-full bg-white text-black hover:bg-white/90 font-semibold opacity-0 group-hover:opacity-100 transition-all duration-300 delay-200 translate-y-4 group-hover:translate-y-0">
            {actionLabel} <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </div>
    </Card>
  )
}

// 7. Retro Card
interface RetroCardProps extends BaseCardProps {
  date?: string
  tag?: string
}

export function CardRetro({
  title = "Retro Design",
  description = "A neo-brutalism inspired card with high contrast borders and shadows.",
  image,
  date = "Oct 24, 2024",
  tag = "DESIGN",
  className,
  children,
  ...props
}: RetroCardProps) {
  return (
    <Card className={cn(
      "w-full max-w-sm overflow-hidden rounded-none border-4 border-[oklch(0.205_0_0)] bg-[oklch(0.985_0_0)] p-0 shadow-[8px_8px_0_0_oklch(0.205_0_0)] transition-all hover:-translate-y-1 hover:translate-x-1 hover:shadow-[12px_12px_0_0_oklch(0.205_0_0)] dark:border-[oklch(0.985_0_0)] dark:bg-[oklch(0.205_0_0)] dark:shadow-[8px_8px_0_0_oklch(0.985_0_0)] dark:hover:shadow-[12px_12px_0_0_oklch(0.985_0_0)]",
      className
    )} {...props}>
      {image && (
        <div className="relative border-b-4 border-[oklch(0.205_0_0)] dark:border-[oklch(0.985_0_0)]">
          <img
            src={image}
            alt={title}
            className="aspect-video w-full object-cover grayscale transition-all hover:grayscale-0"
          />
        </div>
      )}
      <div className="p-6">
        <div className="mb-4 flex items-center justify-between">
          <Badge 
            variant="outline" 
            className="rounded-none border-2 border-[oklch(0.205_0_0)] bg-[oklch(0.96_0.02_60)] px-3 py-1 font-bold text-[oklch(0.205_0_0)] dark:border-[oklch(0.985_0_0)] dark:bg-[oklch(0.25_0_0)] dark:text-[oklch(0.985_0_0)]"
          >
            {tag}
          </Badge>
          <span className="font-mono text-sm font-bold text-[oklch(0.205_0_0)] dark:text-[oklch(0.985_0_0)]">
            {date}
          </span>
        </div>
        <h3 className="mb-2 text-2xl font-black uppercase leading-none tracking-tight text-[oklch(0.205_0_0)] dark:text-[oklch(0.985_0_0)]">
          {title}
        </h3>
        <p className="mb-6 font-mono text-sm font-medium text-[oklch(0.205_0_0)]/80 dark:text-[oklch(0.985_0_0)]/80">
          {description}
        </p>
        <Button 
          className="w-full rounded-none border-2 border-[oklch(0.205_0_0)] bg-[oklch(0.205_0_0)] text-[oklch(0.985_0_0)] shadow-[4px_4px_0_0_oklch(0.205_0_0)] transition-all hover:-translate-y-0.5 hover:translate-x-0.5 hover:shadow-[2px_2px_0_0_oklch(0.205_0_0)] hover:bg-[oklch(0.205_0_0)] dark:border-[oklch(0.985_0_0)] dark:bg-[oklch(0.985_0_0)] dark:text-[oklch(0.205_0_0)] dark:shadow-[4px_4px_0_0_oklch(0.985_0_0)] dark:hover:shadow-[2px_2px_0_0_oklch(0.985_0_0)] dark:hover:bg-[oklch(0.985_0_0)]"
        >
          Read More
        </Button>
      </div>
    </Card>
  )
}

function Zap({ className }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
    </svg>
  )
}
