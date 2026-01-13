import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"
import { Grid, Image, Heart } from "lucide-react"

export function ProfileMonochrome() {
  return (
    <div className="w-full bg-black text-white min-h-screen font-sans selection:bg-white selection:text-black">
      <div className="max-w-4xl mx-auto pt-12 px-4">
        {/* Profile Header */}
        <div className="flex flex-col md:flex-row gap-8 md:gap-16 items-center md:items-start mb-16">
           <Avatar className="w-32 h-32 md:w-40 md:h-40 rounded-full border border-white/20">
             <AvatarImage src="https://github.com/shadcn.png" className="grayscale contrast-125" />
             <AvatarFallback className="bg-zinc-900 text-white">JD</AvatarFallback>
           </Avatar>
           
           <div className="flex-1 space-y-6 text-center md:text-left">
              <div className="flex flex-col md:flex-row items-center gap-4 md:gap-8">
                 <h2 className="text-2xl font-light">johndoe_art</h2>
                 <div className="flex gap-2">
                    <Button variant="outline" className="bg-transparent border-white text-white hover:bg-white hover:text-black h-8 px-6 rounded-none transition-colors">
                      Edit Profile
                    </Button>
                    <Button variant="ghost" className="text-white hover:bg-white/10 h-8 w-8 p-0 rounded-none">
                       <Grid className="w-4 h-4" />
                    </Button>
                 </div>
              </div>
              
              <div className="flex justify-center md:justify-start gap-8 md:gap-12 text-sm md:text-base">
                 <div><span className="font-bold">128</span> posts</div>
                 <div><span className="font-bold">45.2k</span> followers</div>
                 <div><span className="font-bold">342</span> following</div>
              </div>
              
              <div className="space-y-1">
                 <h1 className="font-bold">John Doe</h1>
                 <p className="text-gray-400 font-light">Visual Artist | NYC</p>
                 <p className="text-sm text-gray-300 max-w-md">Capturing the silence between thoughts. Black and white photography only.</p>
                 <a href="#" className="text-sm font-bold hover:underline block pt-1">www.johndoe.com</a>
              </div>
           </div>
        </div>

        {/* Tab Navigation */}
        <div className="border-t border-white/20 flex justify-center gap-12 text-xs font-bold tracking-widest uppercase mb-1">
           <button className="border-t border-white py-4 flex items-center gap-2">
             <Grid className="w-3 h-3" /> Posts
           </button>
           <button className="py-4 text-gray-500 flex items-center gap-2 hover:text-gray-300 transition-colors">
             <Image className="w-3 h-3" /> Tagged
           </button>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-3 gap-1 md:gap-8 pb-12">
           {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((i) => (
             <div key={i} className="aspect-square bg-zinc-900 relative group cursor-pointer overflow-hidden">
               {/* Hover Overlay */}
               <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-6 text-white font-bold">
                  <div className="flex items-center gap-1">
                    <Heart className="w-5 h-5 fill-white" /> {100 * i}
                  </div>
               </div>
               {/* Placeholder Content */}
               <div className="absolute inset-0 flex items-center justify-center opacity-20 group-hover:opacity-10 pointer-events-none transition-opacity">
                  <span className="text-4xl font-thin">{i}</span>
               </div>
             </div>
           ))}
        </div>
      </div>
    </div>
  )
}
