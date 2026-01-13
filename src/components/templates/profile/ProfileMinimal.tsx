import { MapPin, Link as LinkIcon, Calendar, Twitter, Github } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

export function ProfileMinimal() {
  return (
    <div className="w-full max-w-2xl mx-auto bg-white dark:bg-zinc-950 p-8 rounded-xl border shadow-sm">
      <div className="flex flex-col sm:flex-row items-start gap-6">
        <Avatar className="w-24 h-24 sm:w-32 sm:h-32 border-4 border-white dark:border-zinc-950 shadow-lg">
          <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
        
        <div className="flex-1 space-y-2">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div>
              <h1 className="text-2xl font-bold tracking-tight text-zinc-900 dark:text-zinc-50">Sarah Jenkins</h1>
              <p className="text-zinc-500 font-medium">@sarahj_design</p>
            </div>
            <div className="flex gap-2">
              <Button variant="outline" className="rounded-full">Message</Button>
              <Button className="rounded-full">Follow</Button>
            </div>
          </div>
          
          <p className="text-zinc-600 dark:text-zinc-300 leading-relaxed max-w-lg">
            Product Designer building accessible web interfaces. Minimalist enthusiast. Coffee lover. 
            Creating open source tools for developers.
          </p>
          
          <div className="flex flex-wrap gap-x-6 gap-y-2 text-sm text-zinc-500 pt-2">
            <div className="flex items-center gap-1">
              <MapPin className="w-4 h-4" />
              <span>San Francisco, CA</span>
            </div>
            <div className="flex items-center gap-1">
              <LinkIcon className="w-4 h-4" />
              <a href="#" className="hover:text-zinc-900 dark:hover:text-zinc-50 transition-colors">sarah.design</a>
            </div>
            <div className="flex items-center gap-1">
              <Calendar className="w-4 h-4" />
              <span>Joined March 2021</span>
            </div>
          </div>

          <div className="flex gap-4 pt-4">
             <div className="flex gap-1">
                <span className="font-bold text-zinc-900 dark:text-zinc-50">1.2k</span>
                <span className="text-zinc-500">Following</span>
             </div>
             <div className="flex gap-1">
                <span className="font-bold text-zinc-900 dark:text-zinc-50">4.8k</span>
                <span className="text-zinc-500">Followers</span>
             </div>
          </div>
        </div>
      </div>

      <Separator className="my-8" />

      <div className="space-y-6">
        <h3 className="font-semibold text-lg">Recent Projects</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
           {[1, 2, 3, 4].map((i) => (
             <div key={i} className="group p-4 rounded-lg border hover:border-zinc-300 dark:hover:border-zinc-700 transition-colors cursor-pointer">
               <div className="flex items-center justify-between mb-2">
                 <div className="w-8 h-8 rounded-full bg-zinc-100 dark:bg-zinc-900 flex items-center justify-center">
                   <Github className="w-4 h-4" />
                 </div>
                 <span className="text-xs text-zinc-400">2d ago</span>
               </div>
               <h4 className="font-medium mb-1 group-hover:underline">Project Alpha {i}</h4>
               <p className="text-sm text-zinc-500">A minimal dashboard template built with React and Tailwind.</p>
             </div>
           ))}
        </div>
      </div>
    </div>
  )
}
