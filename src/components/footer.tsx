import React from 'react'
import MaxWidthWrapper from './max-width-wrapper'
import Link from 'next/link'

const Footer = () => {
  return (
    <footer className="w-full border-t-2 border-solid font-medium text-lg sm:text-base">
      <MaxWidthWrapper className="py-8 flex items-center justify-between lg:flex-col lg:py-6 space-y-1">
        <span>{new Date().getFullYear()} &copy; All rights reserved</span>
        <Link href="/" className="inderline underline-offset-2" target="_blank">
          Privacy Policy
        </Link>
        <Link href="/" className="inderline underline-offset-2" target="_blank">
          Say Hello
        </Link>
      </MaxWidthWrapper>
    </footer>
  )
}

export default Footer
