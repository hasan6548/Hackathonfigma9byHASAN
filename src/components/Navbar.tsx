'use client';

import { useState } from 'react'
import Link from "next/link"
import Image from "next/image"
import { Menu, X } from 'lucide-react'
import { Button } from './ui/button';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const menuItems = [
    { name: "Home", href: "/", active: true },
    { name: "Menu", href: "/Manu"},
    { name: "Blog", href: "/blog" },
    { name: "Pages", href: "/pages" },
    { name: "About", href: "/about" },
    { name: "Shop", href: "/shop" },
    { name: "Contact", href: "/contact" },
    { name: "FAQ", href: "/FAQ" },
  ]

  return (
    <header className="z-10 w-full bg-[#0D0D0D] fixed top-0 px-4 sm:px-6 lg:px-[15.62%] py-4 lg:py-7">
      <nav className="flex items-center justify-between">
        {/* Logo */}
        <Link
          href="/"
          className="text-[20px] sm:text-[24px] leading-[32px] font-bold text-white z-10"
        > <div className="text-xl font-bold flex items-center ">
        <img src="/Foodtuck.png" alt="Logo" width={109} height={32} />
      </div>
        </Link>

        {/* Mobile Menu Toggle */}
        <Button
          className="lg:hidden text-white z-10"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </Button>

        {/* Navigation Links */}
        <ul className={`
          fixed inset-0 bg-[#0D0D0D] flex flex-col items-center justify-center gap-6
          lg:static lg:flex-row lg:bg-transparent lg:gap-[32px]
          transition-all duration-300 ease-in-out
          ${isMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible lg:opacity-100 lg:visible'}
        `}>
          {menuItems.map((item) => (
            <li key={item.name}>
              <Link
                href={item.href}
                className={`text-[16px] leading-6 ${
                  item.active ? "text-[#FF9F0D] font-bold" : "text-white"
                } font-inter hover:text-[#FF9F0D] transition-colors`}
                onClick={() => setIsMenuOpen(false)}
              >
                {item.name}
              </Link>
            </li>
          ))}
        </ul>

        {/* Icons */}
        <input
            type="search"
            placeholder="Search.."
            className="px-4 py-2 w-22 text-black rounded-l"
          />
        <div 
        className="hidden lg:flex items-center gap-4">
          <Link href="#" className="text-white hover:text-[#FF9F0D] transition-colors">
            <Image src="/search.png" alt="search" width={24} height={24} />
          </Link>
          <Link href="/signup" className="text-white hover:text-[#FF9F0D] transition-colors">
            <Image src="/user.png" alt="user" width={24} height={24} />
          </Link>
          <Link href="#" className="text-white hover:text-[#FF9F0D] transition-colors">
            <Image src="/tote.png" alt="cart" width={24} height={24} />
          </Link>
        </div>
      </nav>
    </header>
  )
}