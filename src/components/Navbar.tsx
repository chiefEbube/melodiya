import Link from "next/link"
import { Button } from "@/components/ui/button"
import Image from "next/image"

export default function Navbar() {
    return (
        <nav className="flex items-center justify-between py-4 bg-transparent">
            <Link href="/" className="flex items-center space-x-2">
                <div className="bg-black w-9 h-9 flex items-center justify-center">
                    <Image
                        src="/images/logo.png"
                        alt="Melodya Logo"
                        width={30}
                        height={30}
                    />
                </div>

                <span className="text-xl font-bold">Melodya</span>
            </Link>
            <Button asChild className="bg-purple-600 hover:bg-purple-700 text-white">
                <Link href="/get-started" className="font-extrabold">Get Started</Link>
            </Button>
        </nav>
    )
}