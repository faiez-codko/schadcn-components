import { motion } from "framer-motion"
import { ShoppingCart, Heart, Sparkles } from "lucide-react"

const products = [
  { id: 1, name: "Super Plushy", price: 25, color: "bg-pink-200", border: "border-pink-400" },
  { id: 2, name: "Mega Robot", price: 45, color: "bg-blue-200", border: "border-blue-400" },
  { id: 3, name: "Rainbow Slime", price: 12, color: "bg-purple-200", border: "border-purple-400" },
  { id: 4, name: "Rocket Ship", price: 55, color: "bg-orange-200", border: "border-orange-400" },
  { id: 5, name: "Magic Wand", price: 18, color: "bg-yellow-200", border: "border-yellow-400" },
  { id: 6, name: "Dino Egg", price: 30, color: "bg-green-200", border: "border-green-400" },
]

export function ShopPlayful() {
  return (
    <div className="min-h-screen bg-sky-100 p-8 font-sans">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <header className="flex justify-between items-center mb-12 bg-white rounded-3xl p-6 border-b-8 border-r-8 border-sky-400 shadow-xl">
          <div className="flex items-center gap-3">
            <div className="bg-yellow-300 p-3 rounded-2xl border-4 border-black rotate-3">
              <Sparkles className="w-8 h-8 text-black" />
            </div>
            <h1 className="text-4xl font-black text-black tracking-tight">TOY_BOX</h1>
          </div>
          <button className="bg-pink-400 hover:bg-pink-300 text-white font-bold py-3 px-6 rounded-2xl border-b-4 border-pink-600 active:border-b-0 active:translate-y-1 transition-all flex items-center gap-2">
            <ShoppingCart className="w-6 h-6" />
            My Cart
          </button>
        </header>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product) => (
            <motion.div
              key={product.id}
              whileHover={{ scale: 1.02, rotate: 1 }}
              whileTap={{ scale: 0.98 }}
              className={`bg-white rounded-[2rem] p-6 border-4 ${product.border} shadow-[8px_8px_0px_0px_rgba(0,0,0,0.1)]`}
            >
              <div className={`aspect-square ${product.color} rounded-[1.5rem] mb-6 flex items-center justify-center relative overflow-hidden group`}>
                <div className="absolute top-4 right-4">
                  <button className="bg-white p-2 rounded-full shadow-md hover:scale-110 transition-transform text-red-400">
                    <Heart className="w-6 h-6 fill-current" />
                  </button>
                </div>
                <div className="w-32 h-32 bg-white/30 rounded-full blur-xl absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />
                {/* Emoji Placeholder */}
                <span className="text-6xl drop-shadow-lg filter grayscale-0 group-hover:scale-110 transition-transform">
                  {["🧸", "🤖", "🌈", "🚀", "✨", "🥚"][product.id - 1]}
                </span>
              </div>
              
              <div className="space-y-3">
                <h3 className="text-2xl font-black text-gray-800">{product.name}</h3>
                <div className="flex items-center justify-between">
                  <span className="text-2xl font-bold text-gray-600">${product.price}</span>
                  <button className="bg-black text-white font-bold py-2 px-6 rounded-xl hover:bg-gray-800 transition-colors">
                    ADD +
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  )
}
