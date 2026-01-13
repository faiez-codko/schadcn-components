import { motion } from "framer-motion"
import { Trophy, Star, Gamepad2, Sword } from "lucide-react"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Progress } from "@/components/ui/progress"

export function ProfileRetro() {
  return (
    <div className="w-full max-w-3xl mx-auto bg-[#2b2b2b] p-2 rounded-none shadow-[10px_10px_0px_0px_rgba(0,0,0,1)] font-mono text-white">
      {/* Outer Border */}
      <div className="border-4 border-[#ffd700] p-1 h-full">
        <div className="border-2 border-[#ff00ff] p-6 h-full bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]">
          
          {/* Header */}
          <div className="flex flex-col md:flex-row gap-8 items-center md:items-start mb-8">
            <div className="relative">
               <Avatar className="w-32 h-32 border-4 border-[#00ffff] bg-black shadow-[5px_5px_0px_0px_rgba(255,0,255,1)] overflow-hidden rounded-none">
                 <AvatarImage src="https://github.com/shadcn.png" className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-500" />
                 <AvatarFallback className="rounded-none bg-zinc-800 text-[#00ffff] font-bold">CN</AvatarFallback>
               </Avatar>
               <div className="absolute -bottom-3 -right-3 bg-[#ff0000] border-2 border-black px-2 py-0.5 text-xs font-bold animate-pulse">
                 LVL 99
               </div>
            </div>

            <div className="flex-1 w-full text-center md:text-left">
              <h1 className="text-4xl font-black uppercase tracking-widest text-[#00ffff] drop-shadow-[2px_2px_0px_#ff00ff] mb-2">
                Cyber_Ninja
              </h1>
              <div className="flex items-center justify-center md:justify-start gap-4 mb-4 text-[#ffd700]">
                <span className="flex items-center gap-1"><Trophy className="w-4 h-4" /> RANK #1</span>
                <span className="flex items-center gap-1"><Star className="w-4 h-4" /> 500K XP</span>
              </div>
              
              {/* Stats Bar */}
              <div className="space-y-3 max-w-md">
                 <div className="flex justify-between text-xs font-bold text-[#00ff00]">
                   <span>HP</span>
                   <span>100/100</span>
                 </div>
                 <Progress value={100} className="h-4 rounded-none border border-[#00ff00] bg-black [&>div]:bg-[#00ff00]" />
                 
                 <div className="flex justify-between text-xs font-bold text-[#00ffff]">
                   <span>MANA</span>
                   <span>75/100</span>
                 </div>
                 <Progress value={75} className="h-4 rounded-none border border-[#00ffff] bg-black [&>div]:bg-[#00ffff]" />
              </div>
            </div>
          </div>

          {/* Action Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
            {['INVENTORY', 'QUESTS', 'SKILLS'].map((item) => (
              <button key={item} className="bg-black border-2 border-white p-3 hover:bg-[#ff00ff] hover:border-black hover:text-black transition-all font-bold uppercase shadow-[4px_4px_0px_0px_rgba(255,255,255,1)] hover:shadow-none hover:translate-x-1 hover:translate-y-1">
                {item}
              </button>
            ))}
          </div>

          {/* Achievements */}
          <div className="bg-black/50 border-2 border-white/20 p-4">
             <h3 className="text-[#ffd700] font-bold mb-4 flex items-center gap-2">
               <Sword className="w-5 h-5" /> RECENT ACHIEVEMENTS
             </h3>
             <div className="space-y-2">
               {[1, 2, 3].map((i) => (
                 <div key={i} className="flex items-center gap-3 p-2 border border-white/10 hover:bg-white/5 transition-colors">
                   <div className="w-10 h-10 bg-[#2b2b2b] border border-white flex items-center justify-center">
                     <Gamepad2 className="w-6 h-6 text-[#00ffff]" />
                   </div>
                   <div>
                     <div className="font-bold text-sm">BOSS SLAYER {i}</div>
                     <div className="text-xs text-gray-400">Defeated the glitch dragon</div>
                   </div>
                   <div className="ml-auto text-[#ffd700] text-xs font-bold">+500 XP</div>
                 </div>
               ))}
             </div>
          </div>

        </div>
      </div>
    </div>
  )
}
