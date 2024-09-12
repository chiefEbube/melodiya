import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { signIn } from "../../../auth"


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

                    <div className="-mt-16">
                        <div className="space-y-4">


                            <form
                                action={async () => {
                                    "use server"
                                    await signIn("google")
                                }}
                            >
                                <Button variant="outline" className="w-full flex items-center justify-center bg-white text-gray-800 hover:bg-gray-50 border border-gray-300 py-5">
                                    <svg
                                        className="w-5 h-5 mr-2"
                                        viewBox="0 0 24 24"
                                        fill="currentColor"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
                                        <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
                                        <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" />
                                        <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" />
                                    </svg>
                                    Continue with Google
                                </Button>
                            </form>

                        </div>
                        <div className="mt-6 text-center">
                            <p className="text-sm text-gray-200">
                                {`Don't have an account? `}
                                <Link href="/signup" className="text-purple-300 hover:text-violet">
                                    Sign up for free
                                </Link>
                            </p>
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