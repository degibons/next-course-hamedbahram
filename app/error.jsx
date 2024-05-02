'use client'

import { useEffect } from 'react'

const Error = ({ error, reset }) => {
  useEffect(() => {
    console.log(error)
  }, [error])

  return (
    <div>
      <h2 className="text-xl text-red-400">{error.message}</h2>
      <div className="text-gray-400">app level</div>
      <div className="mt-6">
        <button
          className="rounded border border-gray-400 bg-white px-4 py-2 font-semibold text-gray-800 shadow hover:bg-gray-100"
          onClick={() => reset()}
        >
          Try again
        </button>
      </div>
    </div>
  )
}

export default Error
