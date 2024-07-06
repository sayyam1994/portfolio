'use client'

import Link from 'next/link'
import React, { useState } from 'react'
import Logo from './logo'
import { usePathname, useRouter } from 'next/navigation'
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

const CustomMobileLink = ({
  href,
  title,
  className,
  toggle
}: {
  href: string
  title: string
  className?: string
  toggle: () => void
}) => {
  const pathname = usePathname()
  const router = useRouter()

  const handleClick = () => {
    toggle()
    router.push(href)
  }

  return (
    <button
      onClick={handleClick}
      className={`${className} relative group text-secondary my-2`}
      title={title}
    >
      {title}
      <span
        className={`h-0.5 bg-secondary inline-block absolute left-0 -bottom-0.5 group-hover:w-full transition-[width] duration-300 ease ${
          pathname === href ? 'w-full' : 'w-0'
        }`}
      >
        &nbsp;
      </span>
    </button>
  )
}

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)

  const handleClick = () => {
    setIsOpen(!isOpen)
  }

  return (
    <header className="w-full z-10 px-32 py-8 font-medium flex items-center justify-between relative lg:px-16 md:px-12 sm:px-8">
      <button
        className="flex-col justify-center items-center hidden lg:flex"
        onClick={handleClick}
      >
        <span
          className={`bg-primary block transition duration-300 ease h-0.5 w-6 rounded-sm -translate-y-0.5 ${
            isOpen ? 'rotate-45 translate-y-1' : '-translate-y-0.5'
          }`}
        ></span>
        <span
          className={`bg-primary block transition duration-300 ease h-0.5 w-6 rounded-sm my-0.5 ${
            isOpen ? 'opacity-0' : 'opacity-100'
          }`}
        ></span>
        <span
          className={`bg-primary block transition duration-300 ease h-0.5 w-6 rounded-sm translate-y-0.5 ${
            isOpen ? '-rotate-45 -translate-y-1' : 'translate-y-0.5'
          }`}
        ></span>
      </button>

      {isOpen ? (
        <motion.div
          className="bg-primary/90 min-w-[70vw] z-30 flex flex-col justify-between items-center fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-lg backdrop-blur-md py-32"
          initial={{ scale: 0, opacity: 0, x: '-50%', y: '-50%' }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0, opacity: 0 }}
          transition={{ duration: 0.5 }}
        >
          <nav className="flex flex-col items-center justidy-center">
            <CustomMobileLink
              href="/"
              title="Home"
              className=""
              toggle={handleClick}
            />
            <CustomMobileLink
              href="/about"
              title="About"
              className=""
              toggle={handleClick}
            />
            <CustomMobileLink
              href="/projects"
              title="Projects"
              className=""
              toggle={handleClick}
            />
          </nav>
          <nav className="flex flex-wrap mt-2 items-center justify-center space-x-3">
            <motion.a
              href="/"
              target="_blank"
              className="w-6 mx-3 bg-secondary rounded-full"
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.8 }}
            >
              <GithubIcon />
            </motion.a>
            <motion.a
              href="/"
              target="_blank"
              className="w-6 mx-3"
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.8 }}
            >
              <LinkedInIcon />
            </motion.a>
          </nav>
        </motion.div>
      ) : null}

      <div className="w-full flex justify-between items-center lg:hidden">
        <nav>
          <CustomLink href="/" title="Home" className="mr-4" />
          <CustomLink href="/about" title="About" className="mx-4" />
          <CustomLink href="/projects" title="Projects" className="ml-4" />
        </nav>
        <nav className="flex items-center justify-center space-x-3">
          <motion.a
            href="/"
            target="_blank"
            className="w-6 mx-3 bg-secondary rounded-full"
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.8 }}
          >
            <GithubIcon className="w-6 h-6" />
          </motion.a>
          <motion.a
            href="/"
            target="_blank"
            className="w-6 mx-3"
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.8 }}
          >
            <LinkedInIcon className="w-6 h-6" />
          </motion.a>
        </nav>
      </div>
      <div className="absolute left-[50%] top-2 translate-x-[-50%]">
        <Logo />
      </div>
    </header>
  )
}

export default Navbar
