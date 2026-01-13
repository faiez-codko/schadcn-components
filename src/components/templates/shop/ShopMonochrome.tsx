import { motion } from "framer-motion"
import { ArrowUpRight } from "lucide-react"

const products = [
  { id: 1, name: "Carbon Chair", price: 450, category: "Furniture" },
  { id: 2, name: "Obsidian Lamp", price: 120, category: "Lighting" },
  { id: 3, name: "Slate Table", price: 890, category: "Furniture" },
  { id: 4, name: "Graphite Vase", price: 65, category: "Decor" },
  { id: 5, name: "Onyx Mirror", price: 210, category: "Decor" },
  { id: 6, name: "Coal Rug", price: 340, category: "Textile" },
]

export function ShopMonochrome() {
  return (
    <div className="min-h-screen bg-black text-white font-sans selection:bg-white selection:text-black">
      <div className="max-w-[1600px] mx-auto p-6 md:p-12">
        <header className="flex justify-between items-end mb-24 border-b border-white/20 pb-6">
          <h1 className="text-6xl md:text-9xl font-bold tracking-tighter">MONO</h1>
          <nav className="hidden md:flex gap-8 text-sm tracking-widest uppercase">
            <a href="#" className="hover:text-gray-400 transition-colors">Shop</a>
            <a href="#" className="hover:text-gray-400 transition-colors">About</a>
            <a href="#" className="hover:text-gray-400 transition-colors">Cart (0)</a>
          </nav>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-white/20 border border-white/20">
          {products.map((product) => (
            <motion.div 
              key={product.id}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="group relative aspect-square bg-black border border-transparent hover:border-white/20 transition-all p-8 flex flex-col justify-between overflow-hidden"
            >
              <div className="absolute inset-0 bg-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              <div className="relative z-10 flex justify-between items-start">
                <span className="text-xs text-gray-500 uppercase tracking-wider">{product.category}</span>
                <span className="text-sm font-mono">${product.price}</span>
              </div>

              {/* Placeholder for Product Image */}
              <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                 <div className="w-32 h-32 bg-gradient-to-tr from-gray-900 to-gray-800 rounded-full blur-2xl opacity-50 group-hover:opacity-80 transition-opacity" />
              </div>

              <div className="relative z-10">
                <h2 className="text-2xl font-light mb-2">{product.name}</h2>
                <div className="flex items-center gap-2 text-sm text-gray-500 group-hover:text-white transition-colors cursor-pointer">
                  <span>View Details</span>
                  <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  )
}
