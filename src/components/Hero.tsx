import { Button } from "@/components/ui/button"
import Image from "next/image"
import Link from "next/link"

export function HeroSection() {
  return (
    <section className="h-[80vh] md:mt-10 flex items-center justify-between gap-10">
      <div className="text-center lg:text-start lg:w-1/2">
        <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-pulse bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-cyan-500">
          Experience Music Like Never Before
        </h1>
        <p className="text-xl mb-8 max-w-2xl mx-auto text-gray-400">
          Immerse yourself in a world of sound with our cutting-edge music player. Discover, play, and share your favorite tunes with ease.
        </p>
        <Button asChild size="lg" className="bg-pink-600 hover:bg-pink-700 text-white">
          <Link href="/get-started">Start Listening Now</Link>
        </Button>
        
      </div>

      <div className="hidden lg:flex justify-end items-center w-1/2">
        <div className="w-[500px] h-[500px] blob bg-red-300 overflow-hidden relative">
          <Image layout="fill" objectFit="cover" src="/images/man1.jpg" alt="man with headphones"/>
        </div>
      </div>
    </section>
  )
}