'use client'

import { CiLight, CiDark } from 'react-icons/ci'

import { useTheme } from 'next-themes'
import { useEffect, useState } from 'react'

const ThemeButton = () => {
  const { resolvedTheme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => setMounted(true), [])

  if (!mounted) {
    return null
  }

  return (
    <button
      aria-label="Toggle dark mode"
      type="button"
      className="flex items-center justify-center rounded-lg p-2 transition-colors hover:bg-zinc-200 dark:hover:bg-zinc-700"
      onClick={() => setTheme(resolvedTheme === 'dark' ? 'light' : 'dark')}
    >
      {resolvedTheme === 'dark' ? (
        <CiLight className="size-5 text-orange-300" />
      ) : (
        <CiDark className="size-5 text-slate-800" />
      )}
    </button>
  )
}
export default ThemeButton
