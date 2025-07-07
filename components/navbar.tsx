'use client'
import Link from 'next/link'
import { useState } from 'react'
import ThemeToggle from './ThemeToggle'

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <nav className="flex justify-between items-center p-4 bg-white dark:bg-gray-900 shadow-md">
      <h1 className="text-2xl font-bold text-gray-900 dark:text-white">MyNextApp</h1>
      <div className="hidden md:flex gap-6 text-gray-800 dark:text-gray-200">
        <Link href="/">Home</Link>
        <Link href="/about">About</Link>
      </div>
      <div className="flex items-center gap-4">
        <ThemeToggle />
        <button className="md:hidden" onClick={() => setMenuOpen(!menuOpen)}>☰</button>
      </div>
      {menuOpen && (
        <div className="md:hidden absolute right-4 top-16 bg-white dark:bg-gray-800 rounded p-4 shadow-md">
          <Link href="/">Home</Link><br />
          <Link href="/about">About</Link>
        </div>
      )}
    </nav>
  )
}
// This is a simple responsive navbar component for a Next.js application.
// It includes links to the home and about pages, a theme toggle button, and a hamburger menu for mobile view.