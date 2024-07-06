'use client'

import MaxWidthWrapper from '@/components/max-width-wrapper'
import Image from 'next/image'
import profilePic from '../../public/images/profile/developer-pic-1.png'
import AnimatedText from '@/components/animated-text'
import Link from 'next/link'
import { buttonVariants } from '@/components/ui/button'
import { LinkArrow } from '@/components/icons'
import TransitionEffect from '@/components/transition-effect'
import { AnimatePresence } from 'framer-motion'

export default function Home() {
  return (
    <>
      <AnimatePresence mode="wait">
        <TransitionEffect />

        <main className="flex min-h-screen flex-col items-center justify-between p-24">
          <MaxWidthWrapper className="pt-0 md:pt-16 sm:pt-8">
            <div className="flex items-center justify-between w-full lg:flex-col">
              <div className="w-1/2 md:w-full">
                <Image
                  alt="front_page"
                  src={profilePic}
                  className="w-full h-auto lg:hidden md:inline-block md:w-full"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 50vw"
                  priority
                />
              </div>
              <div className="w-1/2 flex flex-col items-center self-center lg:w-full lg:text-center">
                <AnimatedText
                  text="Turning Vision Into Reality With Code And Design."
                  className="text-6xl text-left xl:text-5xl lg:text-center lg:text-6xl md:text-5xl sm:text-3xl"
                />
                <p className="my-4 text-base font-medium md:text-sm sm:text-xs">
                  As a skilled full-stack developer, I am dedicated to turning
                  ideas into innovative web applications. Explore my latest
                  projects and articles, showcasing my expertise in React.js and
                  web development
                </p>
                <div className="flex items-center self-start mt-2 lg:self-center">
                  <Link
                    href="/dummy.pdf"
                    target="_blank"
                    download={true}
                    className={buttonVariants({
                      size: 'lg',
                      className: 'mr-4 md:p-2 md:px-4 md:text-base'
                    })}
                  >
                    Resume
                    <LinkArrow className="w-4 h-4 ml-2" />
                  </Link>
                  <Link
                    href="mailto:sayyammehra@gmail.com"
                    target="_blank"
                    className={buttonVariants({
                      size: 'lg',
                      variant: 'outline',
                      className: 'md:text-base'
                    })}
                  >
                    Contact
                  </Link>
                </div>
              </div>
            </div>
          </MaxWidthWrapper>
        </main>
      </AnimatePresence>
    </>
  )
}
