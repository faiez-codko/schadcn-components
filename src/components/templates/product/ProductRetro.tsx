import { useState } from "react"
import { motion } from "framer-motion"
import { Star, Minus, Plus, ShoppingCart, Heart, Zap, ArrowRight, MousePointer2 } from "lucide-react"
import { cn } from "@/lib/utils"

export function ProductRetro() {
  const [selectedSize, setSelectedSize] = useState("L")
  const [quantity, setQuantity] = useState(1)

  const product = {
    name: "CYBER_KICKS_2000",
    price: 129.99,
    description: "STEP INTO THE FUTURE WITH THE ULTIMATE FOOTWEAR EXPERIENCE. FEATURING QUANTUM SOLES AND NEON-SYNTH UPPER MESH.",
    sizes: ["US 7", "US 8", "US 9", "US 10", "US 11", "US 12"],
  }

  return (
    <div className="min-h-screen bg-[#f0f0f0] p-4 md:p-8 font-mono text-black">
      {/* Top Marquee */}
      <div className="w-full bg-[#ff00ff] border-4 border-black mb-8 overflow-hidden py-2">
        <motion.div 
          animate={{ x: [0, -1000] }}
          transition={{ repeat: Infinity, duration: 10, ease: "linear" }}
          className="whitespace-nowrap font-black text-xl text-white tracking-widest"
        >
          *** NEW ARRIVAL *** LIMITED STOCK *** DON'T MISS OUT *** FREE SHIPPING ON ALL ORDERS OVER $500 *** 
          *** NEW ARRIVAL *** LIMITED STOCK *** DON'T MISS OUT *** FREE SHIPPING ON ALL ORDERS OVER $500 *** 
        </motion.div>
      </div>

      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8">
        
        {/* Left Column - Image & Stats */}
        <div className="lg:col-span-7 space-y-8">
          <div className="bg-white border-4 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] relative group">
            <div className="absolute top-4 left-4 z-10 bg-[#ffff00] border-2 border-black px-2 py-1 font-bold transform -rotate-2">
              BEST SELLER
            </div>
            <div className="aspect-[4/3] bg-blue-200 border-b-4 border-black relative overflow-hidden flex items-center justify-center">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-blue-100 via-blue-200 to-blue-400 opacity-50" />
              {/* Retro Grid Background */}
              <div className="absolute inset-0" 
                style={{ 
                  backgroundImage: 'linear-gradient(rgba(0,0,0,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(0,0,0,0.1) 1px, transparent 1px)',
                  backgroundSize: '20px 20px'
                }} 
              />
              <Zap className="w-48 h-48 text-[#ff00ff] drop-shadow-[4px_4px_0px_rgba(0,0,0,1)] animate-pulse" />
            </div>
            
            {/* Thumbnails */}
            <div className="grid grid-cols-4 divide-x-4 divide-black">
              {[1, 2, 3, 4].map((_, i) => (
                <button 
                  key={i}
                  className="aspect-square bg-white hover:bg-yellow-100 transition-colors flex items-center justify-center group"
                >
                  <div className="w-8 h-8 rounded-full bg-black/10 group-hover:bg-black/20" />
                </button>
              ))}
            </div>
          </div>

          <div className="bg-[#ff9900] border-4 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] p-6">
            <h3 className="text-2xl font-black mb-4 uppercase flex items-center gap-2">
              <Star className="fill-black" /> Specs
            </h3>
            <ul className="space-y-2 font-bold">
              <li className="flex items-center gap-2">
                <ArrowRight className="w-5 h-5" /> MATERIAL: SYNTHETIC MESH
              </li>
              <li className="flex items-center gap-2">
                <ArrowRight className="w-5 h-5" /> SOLE: REINFORCED RUBBER
              </li>
              <li className="flex items-center gap-2">
                <ArrowRight className="w-5 h-5" /> YEAR: 2024 EDITION
              </li>
              <li className="flex items-center gap-2">
                <ArrowRight className="w-5 h-5" /> ORIGIN: CYBER_CITY
              </li>
            </ul>
          </div>
        </div>

        {/* Right Column - Details & Cart */}
        <div className="lg:col-span-5 space-y-8">
          <div className="bg-white border-4 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] p-8">
            <div className="flex justify-between items-start mb-6">
              <h1 className="text-4xl font-black uppercase leading-tight max-w-[80%]">
                {product.name}
              </h1>
              <Heart className="w-8 h-8 hover:fill-[#ff00ff] hover:text-[#ff00ff] cursor-pointer transition-colors" />
            </div>

            <div className="flex items-baseline gap-4 mb-8">
              <span className="text-5xl font-black text-[#0000ff]">
                ${product.price}
              </span>
              <span className="text-xl text-gray-500 line-through decoration-2 decoration-red-500 font-bold">
                $199.99
              </span>
            </div>

            <p className="text-lg font-bold mb-8 leading-relaxed border-l-4 border-[#ff00ff] pl-4">
              {product.description}
            </p>

            {/* Size Selector */}
            <div className="mb-8">
              <label className="block text-xl font-black mb-4 uppercase">Select Size:</label>
              <div className="grid grid-cols-3 gap-3">
                {product.sizes.map((size) => (
                  <button
                    key={size}
                    onClick={() => setSelectedSize(size)}
                    className={cn(
                      "py-3 font-bold border-2 border-black transition-all active:translate-y-1",
                      selectedSize === size
                        ? "bg-black text-white shadow-none translate-y-1"
                        : "bg-white text-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:bg-gray-50"
                    )}
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>

            {/* Quantity */}
            <div className="mb-8">
              <label className="block text-xl font-black mb-4 uppercase">Quantity:</label>
              <div className="flex items-center gap-4">
                <button 
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="w-12 h-12 bg-white border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] active:translate-y-1 active:shadow-none flex items-center justify-center hover:bg-red-100 transition-colors"
                >
                  <Minus className="w-6 h-6" />
                </button>
                <div className="w-20 h-12 bg-white border-2 border-black flex items-center justify-center font-black text-2xl">
                  {quantity}
                </div>
                <button 
                  onClick={() => setQuantity(quantity + 1)}
                  className="w-12 h-12 bg-white border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] active:translate-y-1 active:shadow-none flex items-center justify-center hover:bg-green-100 transition-colors"
                >
                  <Plus className="w-6 h-6" />
                </button>
              </div>
            </div>

            {/* CTA */}
            <button className="w-full bg-[#00ff00] text-black border-4 border-black py-4 px-8 text-2xl font-black uppercase shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] hover:translate-y-1 hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] active:translate-y-2 active:shadow-none transition-all flex items-center justify-center gap-4 group">
              <ShoppingCart className="w-8 h-8 group-hover:rotate-12 transition-transform" />
              Add To Cart
            </button>
          </div>

          <div className="bg-[#ff00ff] text-white border-4 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] p-4 text-center">
             <div className="font-black text-lg flex items-center justify-center gap-2">
                <MousePointer2 className="w-6 h-6" />
                CLICK TO ACTIVATE 3D VIEW
             </div>
          </div>
        </div>
      </div>
    </div>
  )
}
