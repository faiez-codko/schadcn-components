import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"
import { Mail, MapPin, ArrowRight } from "lucide-react"

export function ProfileScandinavian() {
  return (
    <div className="w-full max-w-4xl mx-auto bg-[#F9F9F9] p-8 md:p-12 rounded-[2rem] text-[#4a4a4a]">
      <div className="flex flex-col md:flex-row gap-12">
        {/* Left Column - Info */}
        <div className="w-full md:w-1/3 flex flex-col items-center md:items-start text-center md:text-left space-y-6">
          <Avatar className="w-48 h-48 rounded-[2rem]">
            <AvatarImage src="https://github.com/shadcn.png" className="object-cover" />
            <AvatarFallback className="bg-[#EAEAEA] text-gray-500 rounded-[2rem]">EL</AvatarFallback>
          </Avatar>
          
          <div className="space-y-2">
            <h1 className="text-3xl font-normal text-[#2d2d2d]">Elara Lin</h1>
            <p className="text-[#8a8a8a] text-lg font-light">Interior Architect</p>
          </div>

          <div className="flex flex-col gap-3 w-full">
            <Button variant="outline" className="w-full justify-start rounded-xl border-[#e0e0e0] bg-white text-gray-600 hover:bg-[#f0f0f0] h-12 font-normal">
              <Mail className="w-4 h-4 mr-3 text-[#b0b0b0]" /> Contact Me
            </Button>
            <div className="flex items-center text-gray-400 text-sm pl-4">
              <MapPin className="w-4 h-4 mr-2" /> Stockholm, Sweden
            </div>
          </div>
        </div>

        {/* Right Column - Content */}
        <div className="flex-1 space-y-12">
           {/* About */}
           <section className="space-y-4">
             <h2 className="text-xl font-medium text-[#2d2d2d] border-b border-[#e0e0e0] pb-2 inline-block">About</h2>
             <p className="text-[#6a6a6a] leading-loose font-light">
               Focusing on sustainable materials and light. I believe that good design should be whisper-quiet, functional, and inherently beautiful. Currently working on residential projects in the archipelago.
             </p>
           </section>

           {/* Stats */}
           <section className="grid grid-cols-3 gap-8 border-y border-[#e0e0e0] py-8">
              {[
                { label: "Projects", value: "42" },
                { label: "Awards", value: "12" },
                { label: "Years", value: "8" }
              ].map((stat) => (
                <div key={stat.label} className="text-center md:text-left">
                  <div className="text-3xl font-light text-[#2d2d2d] mb-1">{stat.value}</div>
                  <div className="text-xs uppercase tracking-widest text-[#9a9a9a]">{stat.label}</div>
                </div>
              ))}
           </section>

           {/* Latest Work */}
           <section className="space-y-6">
             <div className="flex items-center justify-between">
               <h2 className="text-xl font-medium text-[#2d2d2d]">Selected Work</h2>
               <Button variant="ghost" className="text-[#8a8a8a] hover:text-[#2d2d2d] hover:bg-transparent p-0 font-light">
                 View All <ArrowRight className="w-4 h-4 ml-2" />
               </Button>
             </div>
             
             <div className="grid grid-cols-2 gap-6">
               {[1, 2].map((i) => (
                 <div key={i} className="group cursor-pointer space-y-3">
                   <div className="aspect-[4/3] bg-[#e6e6e6] rounded-2xl overflow-hidden relative">
                      <div className="absolute inset-0 bg-black/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                   </div>
                   <div>
                     <h3 className="text-lg font-medium text-[#4a4a4a]">Villa Norr {i}</h3>
                     <p className="text-sm text-[#9a9a9a]">Residential • 2023</p>
                   </div>
                 </div>
               ))}
             </div>
           </section>
        </div>
      </div>
    </div>
  )
}
