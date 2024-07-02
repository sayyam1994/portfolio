import React from 'react'
import MaxWidthWrapper from './max-width-wrapper'
import Link from 'next/link'

const Footer = () => {
  return (
    <footer className="w-full border-t-2 border-solid font-medium text-lg">
      <MaxWidthWrapper className="py-8 flex items-center justify-between">
        <span>{new Date().getFullYear()} &copy; All rights reserved</span>
        <Link href="/">Privacy Policy</Link>
        <Link href="/">Say Hello</Link>
      </MaxWidthWrapper>
    </footer>
  )
}

export default Footer
