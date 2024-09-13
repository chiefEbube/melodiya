import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
// import { signIn, signOut } from "../../../auth"


export default function GetStarted() {
    return (
        <div className="h-screen flex">
            {/* Left Column */}
            <div className="hidden md:block md:w-1/2 bg-gradient-to-br from-gray-950 via-slate-950 to-violet-950 text-white p-8">
                <Link href="/" className="flex items-center space-x-2 z-20">
                    <div className="bg-black w-9 h-9 flex items-center justify-center rounded-full">
                        <Image
                            src="/images/logo.png"
                            alt="Melodya Logo"
                            width={25}
                            height={25}
                        />
                    </div>
                    <span className="text-lg font-bold">Melodya</span>
                </Link>

                <div className="h-[90%] grid place-content-center">
                    <Image src='/images/get-started.png' width={800} height={800} alt="man" />

                </div>

            </div>

            {/* Right Column */}
            <div className="w-full md:w-1/2 bg-gradient-to-br from-violet-950 via-slate-950 to-gray-950 p-8">
                <Link href="/" className="md:hidden">
                    <div className="bg-black w-9 h-9 flex items-center justify-center rounded-full">
                        <Image
                            src="/images/logo.png"
                            alt="Melodya Logo"
                            width={25}
                            height={25}
                        />
                    </div>
                </Link>
                <div className="w-full mx-auto h-[90%] md:h-full flex flex-col justify-evenly items-center">
                    <h2 className="text-3xl md:text-5xl text-center font-bold text-gray-50">
                        Join millions all over the world using <span className="text-purple-300">Melodya</span>
                    </h2>

                    <div className="">
                        <div className="space-y-4">
                            <Link href="/player">
                                <Button variant="outline" className="w-full flex items-center justify-center bg-white text-gray-800 hover:bg-gray-50 border border-gray-300 py-5">
                                    Start Listening Now
                                </Button>
                            </Link>
                        </div>
                        <p className="text-xs text-gray-200 mt-8 text-center">
                            By continuing, you agree to our{" "}
                            <Link href="/get-started" className="underline text-purple-300 hover:text-violet-700">
                                Terms of Service
                            </Link>{" "}
                            and{" "}
                            <Link href="/get-started" className="underline text-purple-300 hover:text-violet-700">
                                Privacy Policy
                            </Link>
                            .
                        </p>
                    </div>

                </div>
            </div>
        </div>
    )
}