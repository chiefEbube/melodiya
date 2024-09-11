import { Github, Linkedin, Twitter } from "lucide-react"
import { Button } from "./ui/button"
import Link from "next/link"

export function AboutSection() {
    return (
      <section className="py-20">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-8 bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-cyan-500">
            About Melodya
          </h2>
          <div className="bg-gray-800 p-8 rounded-xl mb-8">
            <p className="text-base mb-6">
              {`This project is more than just a music player; it's a journey into the heart of what makes music special to each of us. It's about creating connections, discovering new sounds, and sharing the joy of music with others.`}
            </p>
            <p className="text-base">
              Melodya is my Portfolio Project for{" "}
              <Link href="https://www.holbertonschool.com" className="text-pink-400 hover:text-pink-400" target="_blank" rel="noopener noreferrer">
                Holberton School
              </Link>
              {`, where I've honed my skills and brought this vision to life.`}
            </p>
          </div>
          <div className="flex justify-center space-x-6 mb-8">
            <a href="https://www.linkedin.com/in/chiefebube" target="_blank" rel="noopener noreferrer" className="text-white hover:text-pink-500">
              <Linkedin className="h-8 w-8" />
              <span className="sr-only">LinkedIn</span>
            </a>
            <a href="https://github.com/chiefEbube" target="_blank" rel="noopener noreferrer" className="text-white hover:text-pink-500">
              <Github className="h-8 w-8" />
              <span className="sr-only">GitHub</span>
            </a>
            <a href="https://x.com/chiefEbube_" target="_blank" rel="noopener noreferrer" className="text-white hover:text-pink-500">
              <Twitter className="h-8 w-8" />
              <span className="sr-only">Twitter</span>
            </a>
          </div>
          <Button asChild className="bg-gradient-to-r from-pink-500 to-purple-500 hover:from-pink-600 hover:to-purple-600 text-white">
            <a href="https://github.com/chiefEbube/melodiya" target="_blank" rel="noopener noreferrer">
              View Project on GitHub
            </a>
          </Button>
        </div>
      </section>
    )
  }