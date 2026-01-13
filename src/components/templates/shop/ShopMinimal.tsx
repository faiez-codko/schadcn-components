import { motion } from "framer-motion"
import { Search, ShoppingBag } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { cn } from "@/lib/utils"

const products = [
  { id: 1, name: "Linen Shirt", price: 85, image: "bg-stone-100" },
  { id: 2, name: "Cotton Chino", price: 120, image: "bg-stone-200" },
  { id: 3, name: "Leather Tote", price: 245, image: "bg-stone-300" },
  { id: 4, name: "Wool Sweater", price: 160, image: "bg-stone-100" },
  { id: 5, name: "Suede Loafers", price: 195, image: "bg-stone-200" },
  { id: 6, name: "Silk Scarf", price: 65, image: "bg-stone-300" },
]

export function ShopMinimal() {
  return (
    <div className="w-full min-h-screen bg-white dark:bg-zinc-950 font-sans p-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <header className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-16">
          <div className="space-y-1">
            <h1 className="text-3xl font-light tracking-tight text-zinc-900 dark:text-zinc-50">Collection 01</h1>
            <p className="text-sm text-zinc-500 font-medium">SPRING / SUMMER 2024</p>
          </div>
          <div className="flex items-center gap-6">
            <div className="relative group">
              <Search className="w-4 h-4 absolute left-0 top-1/2 -translate-y-1/2 text-zinc-400 group-hover:text-zinc-900 transition-colors" />
              <Input 
                className="pl-6 border-0 border-b border-zinc-200 rounded-none px-0 focus-visible:ring-0 focus-visible:border-zinc-900 w-48 bg-transparent" 
                placeholder="Search" 
              />
            </div>
            <Button variant="ghost" size="sm" className="hidden md:flex">Filter</Button>
            <div className="flex items-center gap-2">
              <span className="text-sm font-medium">Cart (0)</span>
            </div>
          </div>
        </header>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-16">
          {products.map((product) => (
            <motion.div 
              key={product.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              className="group cursor-pointer"
            >
              <div className={cn("aspect-[3/4] w-full mb-6 overflow-hidden bg-zinc-100 dark:bg-zinc-900", product.image)}>
                <div className="w-full h-full group-hover:scale-105 transition-transform duration-700 ease-out flex items-center justify-center text-zinc-300">
                   {/* Placeholder Image */}
                </div>
              </div>
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="text-base font-medium text-zinc-900 dark:text-zinc-50">{product.name}</h3>
                  <p className="text-sm text-zinc-500 mt-1">New Arrival</p>
                </div>
                <span className="text-sm font-medium text-zinc-900 dark:text-zinc-50">${product.price}</span>
              </div>
            </motion.div>
          ))}
        </div>
        
        <div className="mt-24 text-center">
           <Button variant="outline" className="rounded-full px-8 border-zinc-200 hover:bg-zinc-50 dark:border-zinc-800 dark:hover:bg-zinc-900">
             Load More
           </Button>
        </div>
      </div>
    </div>
  )
}
