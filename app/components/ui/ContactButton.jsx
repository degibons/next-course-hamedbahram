'use client'

import { useRouter } from 'next/navigation'

const ContactButton = () => {
  const router = useRouter()

  function handleClick() {
    router.push('/team')
  }

  return (
    <button
      onClick={handleClick}
      className="rounded bg-blue-500 px-4 py-2 font-bold text-white hover:bg-blue-700"
    >
      Team
    </button>
  )
}
export default ContactButton
