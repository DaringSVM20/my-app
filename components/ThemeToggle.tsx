'use client'
import { useEffect, useState } from 'react'

export default function ThemeToggle() {
  const [darkMode, setDarkMode] = useState(false)

  useEffect(() => {
    const root = window.document.documentElement
    if (darkMode) {
      root.classList.add('dark')
    } else {
      root.classList.remove('dark')
    }
  }, [darkMode])

  return (
    <button onClick={() => setDarkMode(!darkMode)} className="text-xl">
      {darkMode ? '🌙' : '☀️'}
    </button>
  )
}
// This component toggles between light and dark themes in a Next.js application.
// It uses a button to switch themes and applies the appropriate class to the document root.