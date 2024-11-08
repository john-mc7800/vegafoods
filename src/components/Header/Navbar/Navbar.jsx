'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useState } from 'react'
import { Poppins } from 'next/font/google'
import { HiMenu} from 'react-icons/hi'
import { IoMdCart } from 'react-icons/io'

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['300', '400', '800'],
})

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const pathname = usePathname()

  const navItems = [
    { label: 'Home', href: '/' },
    { label: 'Shop', href: '/shop' },
    { label: 'About', href: '/about' },
    { label: 'Blog', href: '/blog' },
    { label: 'Contact', href: '/contact' },
    { icon: <IoMdCart size={12} className='mx-4' />, quantity:"[ 0 ]", href: '/cart' },
  ]

  return (
    <nav className="lg:bg-white bg-black shadow-lg">
      <div className="max-w-6xl mx-auto lg:px-6 px-0">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <span className={`${poppins.className} lg:text-customGreen text-white  text-xl font-semibold uppercase hover:text-black mx-2 lg:mx-0`}>
              Vegefoods
            </span>
          </Link>

          {/* Desktop Nav Links */}
          <div className="hidden lg:flex items-center space-x-3">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`${poppins.className} py-0 lg:py-2 px-5 text-black font-[300] text-xs transition duration-300`}
              >
                {item.label ? <div className="text-xs">{item.label}</div> :<div className='flex flex-row  text-customGray lg:text-black '> {item.icon} {item.quantity}</div>}
              </Link>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden flex items-center mx-2">
            <button onClick={() => setIsOpen(!isOpen)} className="outline-none mobile-menu-button" aria-label="Toggle menu">
              {isOpen ? (<div className='flex flex-row text-customGray'><HiMenu className="w-6 h-6 text-customGray " />MENU</div>) : (
                <div className='flex flex-row text-customGray'><HiMenu className="w-6 h-6 text-customGray " />MENU</div>
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div className={`lg:hidden ${isOpen ? 'block w-full' : 'hidden'}`}>
          <div className="px-2 pt-2 pb-3 space-y-1 lg:bg-white bg-black">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`block px-3 py-2  text-base font-medium ${
                  pathname === item.href ? 'text-white bg-customGreen' : 'text-gray-500 hover:text-white '
                }`}
                onClick={() => setIsOpen(false)}
              >
                {item.label ? <div className="text-sm">{item.label}</div> : item.icon}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </nav>
  )
}
