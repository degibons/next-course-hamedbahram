'use client'

import { useRouter } from 'next/navigation'

const RefreshButton = () => {
  const router = useRouter()

  function handleRefresh() {
    // window.location.reload()
    router.refresh()
  }

  return (
    <button
      onClick={() => handleRefresh()}
      className="rounded bg-green-500 px-4 py-2 font-bold text-white hover:bg-green-700"
    >
      Reload
    </button>
  )
}
export default RefreshButton
