'use client'

const RefreshButton = () => {
  return (
    <button
      onClick={() => window.location.reload()}
      className="rounded bg-green-500 px-4 py-2 font-bold text-white hover:bg-green-700"
    >
      Reload
    </button>
  )
}
export default RefreshButton
