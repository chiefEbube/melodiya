'use client'

import { useState, useEffect } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import Image from "next/image"
import { Menu, X } from "lucide-react"

export default function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);

    useEffect(() => {
        if (isMenuOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
    }, [isMenuOpen]);

    return (
        <nav className="relative flex items-center justify-between py-4 bg-transparent">
            <Link href="/" className="flex items-center space-x-2 z-20">
                <div className="bg-black w-9 h-9 flex items-center justify-center rounded-full">
                    <Image
                        src="/images/logo.png"
                        alt="Melodya Logo"
                        width={30}
                        height={30}
                    />
                </div>
                <span className="text-xl font-bold">Melodya</span>
            </Link>
            
            <button 
                className="lg:hidden p-2 z-20" 
                onClick={() => setIsMenuOpen(prev => !prev)}
                aria-expanded={isMenuOpen}
                aria-label="Toggle navigation"
            >
                <Menu size={24} className="text-gray-100" />
            </button>
            
            {isMenuOpen && (
                <div 
                    className="fixed inset-0 bg-black bg-opacity-50 z-30 lg:hidden"
                    onClick={() => setIsMenuOpen(false)}
                ></div>
            )}

            <div 
                className={`
                    fixed top-0 right-0 h-full w-72 bg-gradient-to-br from-purple-900 to-indigo-950 text-white z-40 transform transition-transform duration-300 ease-in-out
                    ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'}
                    lg:relative lg:transform-none lg:flex lg:w-auto lg:items-center lg:bg-transparent lg:text-gray-800
                `}
            >
                <div className="flex flex-col h-full p-6 lg:flex-row lg:space-x-10 lg:p-0">
                    <div className="flex justify-between items-center mb-8 lg:hidden">
                        <div className="flex items-center space-x-2">
                            <div className="bg-black w-10 h-10 flex items-center justify-center rounded-full">
                                <Image
                                    src="/images/logo.png"
                                    alt="Melodya Logo"
                                    width={24}
                                    height={24}
                                />
                            </div>
                            <span className="text-lg font-bold">Melodya</span>
                        </div>
                        <button onClick={() => setIsMenuOpen(false)} aria-label="Close menu">
                            <X size={24} />
                        </button>
                    </div>
                    <div className="space-y-6 lg:space-y-0 lg:flex lg:items-center">
                        <Link 
                            href="/" 
                            className="block font-semibold hover:text-purple-200 transition-colors duration-200 lg:text-gray-800 lg:hover:text-purple-600"
                            onClick={() => setIsMenuOpen(false)}
                        >
                            Features
                        </Link>
                        <Link 
                            href="/" 
                            className="block font-semibold hover:text-purple-200 transition-colors duration-200 lg:text-gray-800 lg:hover:text-purple-600"
                            onClick={() => setIsMenuOpen(false)}
                        >
                            About
                        </Link>
                    </div>
                    <div className="mt-auto lg:mt-0">
                        <Button 
                            asChild 
                            className="w-full bg-white text-purple-600 hover:bg-purple-100 transition-colors duration-200 lg:bg-purple-600 lg:text-white lg:hover:bg-purple-700"
                        >
                            <Link href="/get-started" className="font-bold text-lg" onClick={() => setIsMenuOpen(false)}>
                                Get Started
                            </Link>
                        </Button>
                    </div>
                </div>
            </div>
        </nav>
    )
}
