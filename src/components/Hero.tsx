import { Button } from "@/components/ui/button"
import Image from "next/image"
import Link from "next/link"
import { Spotlight } from "./ui/Spotlight"

export function HeroSection() {
  return (
    <>
    <Spotlight className="-top-40 -left-10 md:-left-32 md:-top-20 h-screen" fill="purple"/>
    <Spotlight className="-top-40 -right-10 md:-right-32 md:-top-20 h-screen" fill="blue"/>
      <section className="h-[80vh] md:mt-10 flex items-center justify-between gap-10">
        <div className="text-center lg:text-start lg:w-1/2">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-pulse clip bg-gradient-to-r from-pink-500 to-cyan-500">
            <span>Experience Music Like Never Before</span>
          </h1>
          <p className="text-base md:text-xl mb-6  max-w-2xl px-3 lg:px-0 text-gray-400">
            Immerse yourself in a world of sound with our cutting-edge music player. Discover, play, and share your favorite tunes with ease.
          </p>
          <Button asChild size="lg" className="bg-gradient-to-r from-pink-500 to-purple-500 hover:from-pink-600 hover:to-purple-600 text-white">
            <Link href="/" className="font-extrabold">Start Listening Now</Link>
          </Button>

        </div>

        <div className="hidden lg:flex justify-end items-center w-1/2">
          <div className="w-[500px] h-[500px] blob bg-red-300 overflow-hidden relative">
            <Image layout="fill" objectFit="cover" src="/images/man1.jpg" alt="man with headphones" />
          </div>
        </div>
      </section>
    </>
  )
}