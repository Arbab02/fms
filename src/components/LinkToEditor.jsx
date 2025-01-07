'use client

import { useRouter } from 'next/router'
 
export default function Page() {
  const router = useRouter()
 
  return (
    <button type="button" className='bg-indigo-700 text-white' onClick={() => router.push('/https://liveblocks-red.vercel.app/')}>
      Link To Editor
    </button>
  )
}
