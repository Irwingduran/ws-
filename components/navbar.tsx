
import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

const Navbar = () => {
    
  return (
    <header className="bg-white py-4 px-4 border-b">
    <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center">
    <Link href="/">  <div className="flex items-center mb-4 md:mb-0">
        <Image
          src="/logo.png"
          alt="Logo"
          width={80}
          height={80}
          className="mr-4"
        />
        <div>
          <h1 className="text-[#3B5998] text-xl font-semibold">Serenity Surgery Planner</h1>
          <p className="text-[#4A90E2] text-sm">MEXICANS SPECIALISTS</p>
        </div>
      </div></Link>
      <nav className="flex flex-wrap justify-center gap-2 md:gap-4">
        <a href="/" className="px-2 py-1 text-sm font-medium">
          Home
        </a>
        <a href="/#about" className="px-2 py-1 text-sm font-medium">
          About
        </a>
        <a href="/#services" className="px-2 py-1 text-sm font-medium">
          Services
        </a>
        <a href="/#reviews" className="px-2 py-1 text-sm font-medium">
          Reviews
        </a>
        <a href="/#contact" className="px-2 py-1 text-sm font-medium">
          Contact
        </a>
        <a href="#" className="px-3 py-2 text-sm font-medium bg-[#F5A623] text-white rounded-xl">
          Make an Appointment
        </a>
      </nav>
    </div>
  </header>
  )
}

export default Navbar