    'use client'

    import { useState, useEffect, useRef } from 'react'
    import { Button } from "@/components/ui/button"
    import { Card, CardContent } from "@/components/ui/card"
    import { Input } from "@/components/ui/input"
    import {
        DropdownMenu,
        DropdownMenuContent,
        DropdownMenuItem,
        DropdownMenuTrigger,
    } from "@/components/ui/dropdown-menu"
    import { Pause, Play, MoreHorizontal, Share, ListPlus, Search, Plus } from 'lucide-react'

    interface Track {
        id: string
        name: string
        artist_name: string
        audio: string
    }

    const CLIENT_ID = process.env.NEXT_PUBLIC_JAMENDO_CLIENT_ID
    const TRACKS_PER_PAGE = 10

    export default function JamendoPlayer() {
        const [tracks, setTracks] = useState<Track[]>([])
        const [loading, setLoading] = useState(true)
        const [error, setError] = useState<string | null>(null)
        const [currentTrack, setCurrentTrack] = useState<Track | null>(null)
        const [isPlaying, setIsPlaying] = useState(false)
        const [searchQuery, setSearchQuery] = useState('')
        const [offset, setOffset] = useState(0)
        const audioRef = useRef<HTMLAudioElement | null>(null)

        useEffect(() => {
            fetchTracks()
        }, [searchQuery])

        useEffect(() => {
            if (currentTrack && audioRef.current) {
                audioRef.current.src = currentTrack.audio
                if (isPlaying) {
                    audioRef.current.play()
                }
            }
        }, [currentTrack])

        const fetchTracks = async (loadMore = false) => {
            try {
                setLoading(true)
                const newOffset = loadMore ? offset + TRACKS_PER_PAGE : 0
                const response = await fetch(`https://api.jamendo.com/v3.0/tracks/?client_id=${CLIENT_ID}&format=jsonpretty&limit=${TRACKS_PER_PAGE}&offset=${newOffset}&include=musicinfo&audioformat=mp32&search=${searchQuery}`)
                if (!response.ok) {
                    throw new Error('Failed to fetch tracks')
                }
                const data = await response.json()
                setTracks(prevTracks => loadMore ? [...prevTracks, ...data.results] : data.results)
                setOffset(newOffset)
            } catch (err) {
                setError('An error occurred while fetching tracks. Please try again later.')
                console.error('Error fetching tracks:', err)
            } finally {
                setLoading(false)
            }
        }

        const handlePlayPause = (track: Track) => {
            if (currentTrack && currentTrack.id === track.id) {
                if (isPlaying) {
                    audioRef.current?.pause()
                } else {
                    audioRef.current?.play()
                }
                setIsPlaying(!isPlaying)
            } else {
                setCurrentTrack(track)
                setIsPlaying(true)
            }
        }

        const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {
            e.preventDefault()
            setOffset(0)
            fetchTracks()
        }

        const handleLoadMore = () => {
            fetchTracks(true)
        }

        if (error) {
            return <div className="text-center text-red-300">{error}</div>
        }

        return (
            <div className="min-h-screen w-full bg-gradient-to-br from-gray-950 via-slate-950 to-violet-950 text-white py-8 px-4">
                <div className="w-full max-w-3xl mx-auto p-4">
                    <h1 className="text-3xl md:text-7xl font-bold mb-6 animate-pulse clip bg-gradient-to-r from-pink-500 to-cyan-500">
                        <span>Welcome to Melodya</span>
                    </h1>
                    <form onSubmit={handleSearch} className="mb-8 flex gap-2">
                        <Input
                            type="text"
                            placeholder="Search for tracks..."
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                            className="bg-gray-800 text-white border-gray-700 focus:border-violet-500"
                        />
                        <Button type="submit" className="bg-gradient-to-r from-pink-500 to-purple-500 hover:from-pink-600 hover:to-purple-600 text-white font-bold">
                            <Search className="h-4 w-4 mr-1" />
                            <p className='hidden md:flex'>Search</p>
                        </Button>
                    </form>
                    {loading && tracks.length === 0 ? (
                        <div className="text-center text-white">Loading tracks...</div>
                    ) : (
                        <>
                            <div className="grid gap-4 md:grid-cols-2">
                                {tracks.map((track) => (
                                    <Card key={track.id} className="overflow-hidden bg-gradient-to-br from-gray-800 via-slate-800 to-violet-800 text-white border-gray-700">
                                        <CardContent className="px-4 py-2">
                                            <div className="flex justify-between items-start mb-2">
                                                <div>
                                                    <h2 className="font-semibold truncate text-white text-sm">{track.name.slice(0, 20)}</h2>
                                                    <p className="text-xs text-gray-300 truncate">{track.artist_name}</p>
                                                </div>
                                                <div className="flex items-center space-x-2">
                                                    <Button
                                                        size="icon"
                                                        variant="ghost"
                                                        className="text-white hover:text-violet-300"
                                                        onClick={() => handlePlayPause(track)}
                                                    >
                                                        {currentTrack?.id === track.id && isPlaying ? (
                                                            <Pause className="h-4 w-4" />
                                                        ) : (
                                                            <Play className="h-4 w-4" />
                                                        )}
                                                    </Button>
                                                    <DropdownMenu>
                                                        <DropdownMenuTrigger asChild>
                                                            <Button size="icon" variant="ghost" className="text-white hover:text-violet-300">
                                                                <MoreHorizontal className="h-4 w-4" />
                                                                <span className="sr-only">More options</span>
                                                            </Button>
                                                        </DropdownMenuTrigger>
                                                        <DropdownMenuContent align="end" className="bg-gray-800 text-white border-gray-700">
                                                            <DropdownMenuItem className="hover:bg-gray-700">
                                                                <Share className="mr-2 h-4 w-4" />
                                                                <span>Share</span>
                                                            </DropdownMenuItem>
                                                            <DropdownMenuItem className="hover:bg-gray-700">
                                                                <ListPlus className="mr-2 h-4 w-4" />
                                                                <span>Add to playlist</span>
                                                            </DropdownMenuItem>
                                                        </DropdownMenuContent>
                                                    </DropdownMenu>
                                                </div>
                                            </div>
                                        </CardContent>
                                    </Card>
                                ))}
                            </div>
                            <div className="mt-6 text-center">
                                <Button
                                    onClick={handleLoadMore}
                                    disabled={loading}
                                    className="bg-gradient-to-r from-pink-500 to-purple-500 hover:from-pink-600 hover:to-purple-600 text-white font-bold"
                                >
                                    {loading ? (
                                        "Loading..."
                                    ) : (
                                        <>
                                            <Plus className="h-4 w-4 mr-1" />
                                            Load More
                                        </>
                                    )}
                                </Button>
                            </div>
                        </>
                    )}
                    <audio ref={audioRef} onEnded={() => setIsPlaying(false)} />
                </div>
            </div>
        )
    }