import { motion } from "framer-motion"
import { Sparkles, Heart, Star, Music, Palette } from "lucide-react"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"

export function ProfilePlayful() {
  return (
    <div className="w-full max-w-2xl mx-auto bg-sky-100 p-8 rounded-[3rem] border-8 border-white shadow-xl relative overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-yellow-200 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 opacity-50 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-pink-200 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2 opacity-50 pointer-events-none" />

      <div className="relative z-10 flex flex-col items-center text-center space-y-6">
        
        {/* Avatar with bouncy badge */}
        <div className="relative">
          <motion.div 
            whileHover={{ scale: 1.1, rotate: 5 }}
            className="w-40 h-40 rounded-full bg-white p-2 shadow-lg border-4 border-purple-400 cursor-pointer"
          >
            <Avatar className="w-full h-full rounded-full border-4 border-yellow-300">
              <AvatarImage src="https://github.com/shadcn.png" />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
          </motion.div>
          <motion.div 
            animate={{ y: [0, -10, 0] }}
            transition={{ repeat: Infinity, duration: 2 }}
            className="absolute -top-2 -right-2 bg-pink-500 text-white p-2 rounded-full border-4 border-white shadow-md rotate-12"
          >
            <Sparkles className="w-6 h-6 fill-yellow-300 text-yellow-300" />
          </motion.div>
        </div>

        {/* Name & Bio */}
        <div className="space-y-2">
           <h1 className="text-4xl font-black text-slate-800 tracking-tight">
             Alex The Creator
           </h1>
           <div className="inline-block bg-white px-4 py-1 rounded-full text-sm font-bold text-purple-500 shadow-sm border-2 border-purple-100">
             @alex_makes_stuff
           </div>
           <p className="text-slate-600 font-medium max-w-md mx-auto leading-relaxed">
             Making the world more colorful! 🎨 Illustrator, Dreamer, and Pizza Enthusiast. 🍕
           </p>
        </div>

        {/* Action Buttons */}
        <div className="flex gap-4">
           <Button className="bg-pink-500 hover:bg-pink-400 text-white font-bold rounded-2xl px-8 h-12 shadow-[0_6px_0_rgb(190,24,93)] active:shadow-none active:translate-y-[6px] transition-all border-b-0">
             Follow Me!
           </Button>
           <Button variant="secondary" className="bg-white hover:bg-slate-50 text-slate-700 font-bold rounded-2xl px-8 h-12 shadow-[0_6px_0_rgb(203,213,225)] active:shadow-none active:translate-y-[6px] transition-all border-2 border-slate-200">
             Say Hi 👋
           </Button>
        </div>

        {/* Interests Tags */}
        <div className="flex flex-wrap justify-center gap-3 pt-4">
           {[
             { icon: Palette, label: "Art", color: "bg-blue-200 text-blue-700" },
             { icon: Music, label: "Music", color: "bg-green-200 text-green-700" },
             { icon: Star, label: "Magic", color: "bg-yellow-200 text-yellow-700" },
             { icon: Heart, label: "Cats", color: "bg-red-200 text-red-700" },
           ].map((tag) => (
             <div key={tag.label} className={`flex items-center gap-2 px-4 py-2 rounded-xl font-bold ${tag.color} transform hover:scale-110 transition-transform cursor-default`}>
               <tag.icon className="w-4 h-4" />
               {tag.label}
             </div>
           ))}
        </div>

        {/* Recent Snaps Grid */}
        <div className="w-full pt-8">
           <div className="flex items-center justify-between mb-4 px-2">
              <h3 className="font-bold text-slate-700 text-lg">Recent Snaps 📸</h3>
              <button className="text-sm font-bold text-purple-500 hover:underline">View All</button>
           </div>
           <div className="grid grid-cols-3 gap-4">
              {[1, 2, 3].map((i) => (
                <div key={i} className="aspect-square bg-white rounded-2xl p-2 shadow-md hover:-rotate-3 transition-transform cursor-pointer border-2 border-slate-100">
                   <div className={`w-full h-full rounded-xl bg-slate-100 ${['bg-orange-100', 'bg-lime-100', 'bg-cyan-100'][i-1]}`} />
                </div>
              ))}
           </div>
        </div>

      </div>
    </div>
  )
}
