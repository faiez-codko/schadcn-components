import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Wand2 } from "lucide-react"

export function LoginMagicLink() {
  return (
    <div className="flex h-screen w-full items-center justify-center bg-muted/40">
      <div className="mx-auto grid w-[350px] gap-6 bg-background p-6 rounded-xl border shadow-sm">
        <div className="grid gap-2 text-center">
          <div className="flex justify-center mb-2">
             <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                <Wand2 className="h-6 w-6" />
             </div>
          </div>
          <h1 className="text-2xl font-bold">Magic Link Login</h1>
          <p className="text-balance text-muted-foreground text-sm">
            We'll email you a magic link for a password-free sign in.
          </p>
        </div>
        <div className="grid gap-4">
          <div className="grid gap-2">
            <Label htmlFor="email">Email</Label>
            <Input
              id="email"
              type="email"
              placeholder="m@example.com"
              required
            />
          </div>
          <Button type="submit" className="w-full">
            Send Magic Link
          </Button>
        </div>
        <div className="text-center text-sm text-muted-foreground">
            <a href="#" className="underline">Back to regular login</a>
        </div>
      </div>
    </div>
  )
}
