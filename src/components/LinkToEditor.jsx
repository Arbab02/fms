import { useRouter } from 'next/router'
 
export default function Page() {
  const router = useRouter()
 
  return (
    <button type="button" onClick={() => router.push('/https://liveblocks-red.vercel.app/')}>
      Link To Editor
    </button>
  )
}
