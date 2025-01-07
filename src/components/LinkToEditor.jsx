'use client'
 
import { useRouter } from 'next/navigation'
 
export default function Page() {
  const router = useRouter()
 
  return (
    <button className="bg-brown-500 hover:bg-blue-600 text-white py-2 px-4 rounded-lg shadow" type="button" onClick={() => router.push('https://liveblocks-red.vercel.app/')}>
      Collaborate
    </button>
  )
}
