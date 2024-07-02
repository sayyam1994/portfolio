'use client'

import Link from 'next/link'
import React from 'react'
import Logo from './logo'
import { usePathname } from 'next/navigation'
import { GithubIcon, LinkedInIcon } from './icons'
import { motion } from 'framer-motion'

const CustomLink = ({
  href,
  title,
  className
}: {
  href: string
  title: string
  className?: string
}) => {
  const pathname = usePathname()

  return (
    <Link href={href} className={`${className} relative group`} title={title}>
      {title}
      <span
        className={`h-0.5 bg-primary inline-block absolute left-0 -bottom-0.5 group-hover:w-full transition-[width] duration-300 ease ${
          pathname === href ? 'w-full' : 'w-0'
        }`}
      >
        &nbsp;
      </span>
    </Link>
  )
}

const Navbar = () => {
  return (
    <header className="w-full px-32 py-8 font-medium flex items-center justify-between">
      <nav>
        <CustomLink href="/" title="Home" className="mr-4" />
        <CustomLink href="/about" title="About" className="mx-4" />
        <CustomLink href="/projects" title="Projects" className="ml-4" />
      </nav>
      <div className="absolute left-[50%] top-2 translate-x-[-50%]">
        <Logo />
      </div>
      <nav className="flex items-center justify-center space-x-3">
        <motion.a
          href="/"
          target="_blank"
          whileHover={{ y: -2 }}
          whileTap={{ scale: 0.8 }}
        >
          <GithubIcon className="w-6 h-6" />
        </motion.a>
        <motion.a
          href="/"
          target="_blank"
          whileHover={{ y: -2 }}
          whileTap={{ scale: 0.8 }}
        >
          <LinkedInIcon className="w-6 h-6" />
        </motion.a>
      </nav>
    </header>
  )
}

export default Navbar
