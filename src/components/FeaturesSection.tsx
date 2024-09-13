'use client'

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { MusicIcon, HeadphonesIcon, ShareIcon } from "lucide-react"
import AOS from 'aos'
import 'aos/dist/aos.css'
import { useEffect } from "react"

export function FeaturesSection() {
  useEffect(()=>{
    AOS.init()
  }, [])
  const features = [
    {
      title: "Vast Music Library",
      description: "Access millions of tracks from various genres and artists.",
      icon: <MusicIcon className="h-10 w-10 lg:h-20 lg:w-20" />,
      gradient: "from-pink-500 to-purple-500",
    },
    {
      title: "High-Quality Audio",
      description: "Experience crystal-clear sound with our advanced audio technology.",
      icon: <HeadphonesIcon className="h-10 w-10 lg:h-20 lg:w-20" />,
      gradient: "from-purple-500 to-cyan-500",
    },
    {
      title: "Easy Sharing",
      description: "Share your favorite playlists and tracks with friends effortlessly.",
      icon: <ShareIcon className="h-10 w-10 lg:h-20 lg:w-20"/>,
      gradient: "from-cyan-500 to-pink-500",
    },
  ]

  return (
    <section className="py-20" id="features">
      <h2 className="text-3xl font-bold mb-12 text-center text-gray-200">Why Choose Melodya?</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {features.map((feature, index) => (
          <Card data-aos="fade-up" key={index} className={`relative overflow-hidden rounded-xl bg-gray-800 border-0 p-4`}>
            <div className={`absolute inset-0 bg-gradient-to-br ${feature.gradient} opacity-75`} />
            <div className="absolute inset-0 bg-gray-900 opacity-75" />
            <CardHeader className="relative z-10">
              <CardTitle className="flex flex-col items-start space-y-6 text-white">
                <div className={`p-4 rounded-full bg-gradient-to-br ${feature.gradient}`}>
                  {feature.icon}
                </div>
                <div>{feature.title}</div>
              </CardTitle>
            </CardHeader>
            <CardContent className="relative z-10">
              <p className="text-gray-300">{feature.description}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  )
  }