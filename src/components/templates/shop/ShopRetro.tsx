import { motion } from "framer-motion"
import { ShoppingCart, Star, Zap, Disc } from "lucide-react"
import { cn } from "@/lib/utils"

const products = [
  { id: 1, name: "GAME_BOY_ADVANCE", price: 120, color: "bg-purple-500" },
  { id: 2, name: "WALKMAN_X", price: 85, color: "bg-blue-500" },
  { id: 3, name: "VHS_PLAYER", price: 45, color: "bg-green-500" },
  { id: 4, name: "NEON_SIGN", price: 150, color: "bg-pink-500" },
  { id: 5, name: "ARCADE_STICK", price: 200, color: "bg-yellow-500" },
  { id: 6, name: "CASSETTE_TAPE", price: 15, color: "bg-orange-500" },
]

export function ShopRetro() {
  return (
    <div className="min-h-screen bg-yellow-50 p-4 md:p-8 font-mono">
      {/* Header */}
      <div className="border-4 border-black bg-white p-6 mb-12 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="flex items-center gap-4">
            <Disc className="w-12 h-12 animate-spin-slow" />
            <h1 className="text-4xl font-black uppercase italic tracking-tighter transform -skew-x-12">
              Retro_Mart
            </h1>
          </div>
          <div className="flex gap-4">
            <button className="px-6 py-2 bg-[#ff00ff] text-white border-4 border-black font-bold shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:translate-y-1 hover:shadow-none transition-all">
              LOGIN
            </button>
            <button className="px-6 py-2 bg-[#00ffff] text-black border-4 border-black font-bold shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:translate-y-1 hover:shadow-none transition-all flex items-center gap-2">
              <ShoppingCart className="w-5 h-5" /> CART (0)
            </button>
          </div>
        </div>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
        {products.map((product, idx) => (
          <motion.div
            key={product.id}
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: idx * 0.1 }}
            className="group relative bg-white border-4 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] hover:shadow-[12px_12px_0px_0px_rgba(0,0,0,1)] hover:-translate-y-1 transition-all"
          >
            {/* Sale Badge */}
            {idx % 2 === 0 && (
              <div className="absolute -top-4 -right-4 bg-red-500 text-white font-bold px-3 py-1 border-2 border-black rotate-12 z-10">
                HOT!
              </div>
            )}
            
            <div className={cn("aspect-square border-b-4 border-black relative overflow-hidden p-8", product.color)}>
              {/* Scanlines overlay */}
              <div className="absolute inset-0 bg-[linear-gradient(transparent_50%,rgba(0,0,0,0.1)_50%)] bg-[length:100%_4px] pointer-events-none" />
              <div className="w-full h-full border-4 border-black bg-white/20 flex items-center justify-center">
                 <Zap className="w-16 h-16 text-white drop-shadow-[4px_4px_0px_rgba(0,0,0,1)]" />
              </div>
            </div>
            
            <div className="p-6 space-y-4">
              <div className="flex justify-between items-start">
                <h3 className="text-xl font-black uppercase leading-none">{product.name}</h3>
                <div className="flex text-yellow-500">
                  <Star className="w-4 h-4 fill-current" />
                  <Star className="w-4 h-4 fill-current" />
                  <Star className="w-4 h-4 fill-current" />
                </div>
              </div>
              
              <div className="flex items-center justify-between">
                <span className="text-2xl font-black">${product.price}</span>
                <button className="bg-black text-white px-4 py-2 font-bold hover:bg-[#ff00ff] transition-colors">
                  BUY NOW
                </button>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  )
}
