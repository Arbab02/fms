'use client'
 import { FaRocketchat } from "react-icons/fa";
import { useRouter } from 'next/navigation'
 
export default function Page() {
  const router = useRouter()
 
  return (
    <button className="bg-gray-900 hover:bg-gray-800 text-white py-3 px-6 rounded-lg shadow" type="button" onClick={() => router.push('https://liveblocks-red.vercel.app/')}>
     <FaRocketchat className="w-5 h-5 inline-block"/> Collaborate
     
    </button>
  )
}
