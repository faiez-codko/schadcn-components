import { motion } from "framer-motion"
import { Search, ShoppingBag, Menu } from "lucide-react"

const products = [
  { id: 1, name: "Nordic Chair", price: 299, color: "bg-[#E6E6E6]" },
  { id: 2, name: "Ceramic Vase", price: 49, color: "bg-[#D8D3CD]" },
  { id: 3, name: "Wool Blanket", price: 129, color: "bg-[#C4C4C4]" },
  { id: 4, name: "Wooden Lamp", price: 159, color: "bg-[#EAEAEA]" },
  { id: 5, name: "Plant Stand", price: 79, color: "bg-[#DFDFDF]" },
  { id: 6, name: "Coffee Table", price: 349, color: "bg-[#D1D1D1]" },
]

export function ShopScandinavian() {
  return (
    <div className="min-h-screen bg-[#F9F9F9] text-[#2D2D2D] font-sans">
      <nav className="sticky top-0 z-50 bg-[#F9F9F9]/80 backdrop-blur-md px-6 py-4">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <Menu className="w-6 h-6 text-gray-600 cursor-pointer" />
          <h1 className="text-xl font-medium tracking-wide">Hygge Home</h1>
          <div className="flex gap-4">
            <Search className="w-5 h-5 text-gray-600 cursor-pointer" />
            <ShoppingBag className="w-5 h-5 text-gray-600 cursor-pointer" />
          </div>
        </div>
      </nav>

      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="mb-16 text-center max-w-2xl mx-auto">
          <h2 className="text-4xl font-light mb-4 text-[#1a1a1a]">Simplicity in Design</h2>
          <p className="text-gray-500 leading-relaxed">
            Discover our curated collection of functional, minimalist furniture inspired by nature.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product) => (
            <motion.div 
              key={product.id}
              whileHover={{ y: -5 }}
              className="group cursor-pointer"
            >
              <div className={`aspect-[4/5] ${product.color} rounded-[2rem] mb-6 overflow-hidden relative`}>
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-black/5">
                  <button className="bg-white text-black px-6 py-3 rounded-full text-sm font-medium shadow-lg transform translate-y-4 group-hover:translate-y-0 transition-transform">
                    Add to Cart
                  </button>
                </div>
              </div>
              <div className="text-center">
                <h3 className="text-lg font-medium text-[#1a1a1a] mb-1">{product.name}</h3>
                <p className="text-gray-500">${product.price}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  )
}
