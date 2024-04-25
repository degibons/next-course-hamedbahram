'use client'

import { useEffect } from 'react'

const Error = ({ error, reset }) => {
  useEffect(() => {
    console.log('Error log:', error)
  }, [error])

  return (
    <div>
      <h2 className="mb-6 text-sm text-red-400">
        Something went wrong at fetching about page!
      </h2>
      <button
        className="rounded border border-gray-400 bg-white px-4 py-2 font-semibold text-gray-800 shadow hover:bg-gray-100"
        onClick={() => reset()}
      >
        Try again
      </button>
    </div>
  )
}

export default Error
