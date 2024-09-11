import { Button } from "@/components/ui/button"
// import Image from "next/image"
import Link from "next/link"

export function HeroSection() {
  return (
    <section className="py-20 flex items-center justify-between">
      <div className="text-start w-1/2">
        <h1 className="text-7xl font-bold mb-6 animate-pulse bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-cyan-500">
          Experience Music Like Never Before
        </h1>
        <p className="text-xl mb-8 max-w-2xl mx-auto">
          Immerse yourself in a world of sound with our cutting-edge music player. Discover, play, and share your favorite tunes with ease.
        </p>
        <Button asChild size="lg" className="bg-pink-600 hover:bg-pink-700 text-white">
          <Link href="/get-started">Start Listening Now</Link>
        </Button>
      </div>

      <div className="flex justify-end">
        <div className="w-[600px] h-[600px]">
          <img className="w-full h-full object-contain" src="/images/man.png" alt="man with headphones"/>
        </div>
      </div>
    </section>
  )
}