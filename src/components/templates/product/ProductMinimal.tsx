import { useState } from "react"
import { motion } from "framer-motion"
import { Star, Minus, Plus, ShoppingBag, Heart, Share2, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"
import { cn } from "@/lib/utils"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

export function ProductMinimal() {
  const [selectedColor, setSelectedColor] = useState("black")
  const [selectedSize, setSelectedSize] = useState("M")
  const [quantity, setQuantity] = useState(1)
  const [activeImage, setActiveImage] = useState(0)

  const product = {
    name: "Essential Cotton Tee",
    price: 45.00,
    rating: 4.8,
    reviews: 124,
    description: "Crafted from 100% organic cotton, this essential tee features a relaxed fit and a classic crew neck. Perfect for everyday wear, it combines comfort with effortless style.",
    colors: [
      { name: "black", class: "bg-zinc-900" },
      { name: "white", class: "bg-zinc-100" },
      { name: "stone", class: "bg-stone-400" },
    ],
    sizes: ["XS", "S", "M", "L", "XL"],
    images: [
      "bg-zinc-100 dark:bg-zinc-800",
      "bg-zinc-200 dark:bg-zinc-700", 
      "bg-zinc-300 dark:bg-zinc-600"
    ]
  }

  return (
    <div className="w-full min-h-screen bg-white dark:bg-zinc-950 font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
          
          {/* Image Gallery */}
          <div className="space-y-6">
            <motion.div 
              key={activeImage}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.4 }}
              className={cn(
                "aspect-[4/5] w-full rounded-sm relative overflow-hidden group",
                product.images[activeImage]
              )}
            >
              {/* Placeholder for actual image */}
              <div className="absolute inset-0 flex items-center justify-center text-muted-foreground/20">
                <ShoppingBag className="w-32 h-32" />
              </div>
            </motion.div>
            
            <div className="grid grid-cols-3 gap-4">
              {product.images.map((img, idx) => (
                <button
                  key={idx}
                  onClick={() => setActiveImage(idx)}
                  className={cn(
                    "aspect-square rounded-sm overflow-hidden border-2 transition-all",
                    activeImage === idx 
                      ? "border-black dark:border-white" 
                      : "border-transparent hover:border-zinc-200 dark:hover:border-zinc-800",
                    img
                  )}
                />
              ))}
            </div>
          </div>

          {/* Product Details */}
          <div className="flex flex-col pt-2">
            <div className="mb-8">
              <div className="flex items-center justify-between mb-2">
                <nav className="flex items-center text-sm text-muted-foreground">
                  <span>Shop</span>
                  <ChevronRight className="w-4 h-4 mx-1" />
                  <span>Men</span>
                  <ChevronRight className="w-4 h-4 mx-1" />
                  <span className="text-foreground">T-Shirts</span>
                </nav>
                <div className="flex items-center gap-4">
                  <Button variant="ghost" size="icon" className="h-8 w-8">
                    <Share2 className="w-4 h-4" />
                  </Button>
                </div>
              </div>
              
              <h1 className="text-4xl font-light tracking-tight text-foreground mb-4">
                {product.name}
              </h1>
              
              <div className="flex items-center gap-4 mb-6">
                <p className="text-2xl font-medium">${product.price.toFixed(2)}</p>
                <div className="h-4 w-px bg-border" />
                <div className="flex items-center gap-1">
                  <Star className="w-4 h-4 fill-primary text-primary" />
                  <span className="text-sm font-medium">{product.rating}</span>
                  <span className="text-sm text-muted-foreground underline cursor-pointer">
                    ({product.reviews} reviews)
                  </span>
                </div>
              </div>

              <p className="text-muted-foreground leading-relaxed text-lg">
                {product.description}
              </p>
            </div>

            <div className="space-y-8">
              {/* Color Selection */}
              <div>
                <label className="text-sm font-medium mb-3 block">
                  Color: <span className="text-muted-foreground capitalize">{selectedColor}</span>
                </label>
                <div className="flex gap-3">
                  {product.colors.map((color) => (
                    <button
                      key={color.name}
                      onClick={() => setSelectedColor(color.name)}
                      className={cn(
                        "w-10 h-10 rounded-full border-2 flex items-center justify-center transition-all",
                        selectedColor === color.name 
                          ? "border-black dark:border-white p-0.5" 
                          : "border-transparent hover:border-zinc-200 dark:hover:border-zinc-800"
                      )}
                    >
                      <div className={cn("w-full h-full rounded-full border border-black/10", color.class)} />
                    </button>
                  ))}
                </div>
              </div>

              {/* Size Selection */}
              <div>
                <div className="flex items-center justify-between mb-3">
                  <label className="text-sm font-medium">Size</label>
                  <button className="text-sm text-muted-foreground underline hover:text-foreground">
                    Size Guide
                  </button>
                </div>
                <div className="grid grid-cols-5 gap-3">
                  {product.sizes.map((size) => (
                    <button
                      key={size}
                      onClick={() => setSelectedSize(size)}
                      className={cn(
                        "h-12 flex items-center justify-center rounded-md border text-sm font-medium transition-all",
                        selectedSize === size
                          ? "border-black bg-black text-white dark:border-white dark:bg-white dark:text-black"
                          : "border-input hover:border-zinc-400 dark:hover:border-zinc-600"
                      )}
                    >
                      {size}
                    </button>
                  ))}
                </div>
              </div>

              {/* Quantity & Actions */}
              <div className="space-y-4">
                <div className="flex gap-4">
                  <div className="flex items-center border rounded-md h-12 w-32">
                    <button 
                      onClick={() => setQuantity(Math.max(1, quantity - 1))}
                      className="w-10 h-full flex items-center justify-center hover:bg-zinc-100 dark:hover:bg-zinc-800"
                    >
                      <Minus className="w-4 h-4" />
                    </button>
                    <div className="flex-1 text-center font-medium">{quantity}</div>
                    <button 
                      onClick={() => setQuantity(quantity + 1)}
                      className="w-10 h-full flex items-center justify-center hover:bg-zinc-100 dark:hover:bg-zinc-800"
                    >
                      <Plus className="w-4 h-4" />
                    </button>
                  </div>
                  <Button className="flex-1 h-12 text-base rounded-md">
                    Add to Cart - ${(product.price * quantity).toFixed(2)}
                  </Button>
                  <Button variant="outline" size="icon" className="h-12 w-12 rounded-md">
                    <Heart className="w-5 h-5" />
                  </Button>
                </div>
              </div>

              <Separator />

              {/* Accordions */}
              <Accordion type="single" collapsible className="w-full">
                <AccordionItem value="features">
                  <AccordionTrigger>Features</AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">
                    <ul className="list-disc pl-4 space-y-1">
                      <li>100% Organic Cotton</li>
                      <li>Pre-shrunk fabric</li>
                      <li>Reinforced stitching</li>
                      <li>Ethically manufactured</li>
                    </ul>
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="shipping">
                  <AccordionTrigger>Shipping & Returns</AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">
                    Free shipping on orders over $100. Returns accepted within 30 days of purchase.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="care">
                  <AccordionTrigger>Care Instructions</AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">
                    Machine wash cold with like colors. Tumble dry low. Do not bleach.
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
