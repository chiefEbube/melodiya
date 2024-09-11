import { Button } from "@/components/ui/button"
import Link from "next/link"

export function CTASection() {
  return (
    <section className="py-20 text-center h-[100vh] max-h-[800px]">
      <div className="bg-gradient-to-r from-pink-500 via-purple-500 to-cyan-500 p-px rounded-lg h-full">
        <div className="rounded-lg h-full grid place-content-center" style={{ backgroundImage: 'linear-gradient(rgba(0,0,0,0.8), rgba(0,0,0,0.8)),url(/images/cta.jpg)', backgroundSize: 'cover', backgroundRepeat: 'no-repeat' }}>
          <div className="px-10">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-200">Ready to Transform Your Music Experience?</h2>
            <p className="text-lg md:text-xl mb-8 text-gray-400">Join millions of music lovers and start your journey today.</p>
            <Button asChild size="lg" className="bg-gradient-to-r from-pink-500 to-purple-500 hover:from-pink-600 hover:to-purple-600 text-white">
              <Link href="/" className="font-extrabold">Get Started for Free</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}