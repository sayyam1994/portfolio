'use client'

import AnimatedText from '@/components/animated-text'
import MaxWidthWrapper from '@/components/max-width-wrapper'
import Head from 'next/head'
import React, { useEffect, useRef } from 'react'
import profilePic from '../../../public/images/profile/developer-pic-2.jpg'
import Image from 'next/image'
import { useInView, useMotionValue, useSpring } from 'framer-motion'
import Skills from '@/components/skills'
import Experience from '@/components/experience'
import Education from '@/components/education'
import TransitionEffect from '@/components/transition-effect'

const AnimatedNumber = ({ value }: { value: number }) => {
  const ref: React.RefObject<HTMLSpanElement> = useRef(null)
  const motionValue = useMotionValue(0)
  const springValue = useSpring(motionValue, {
    duration: 3000
  })
  const isInView = useInView(ref, { once: true })

  useEffect(() => {
    if (isInView) {
      motionValue.set(value)
    }
  }, [isInView, value, motionValue])

  useEffect(() => {
    springValue.on('change', (latest) => {
      if (ref.current) {
        if (latest.toFixed(0) <= value) {
          ref.current.textContent = latest.toFixed(0)
        }
      }
    })
  }, [springValue, isInView, value, motionValue])

  return <span ref={ref}>{value}</span>
}

const About = () => {
  return (
    <>
      <Head>
        <title>About</title>
        <meta name="description" content="About" />
      </Head>
      <TransitionEffect />
      <main className="flex w-full items-center justify-center mx-auto">
        <MaxWidthWrapper className="pt-16">
          <AnimatedText
            text="Passion Driven Coder"
            className="mb-16 lg:text-7xl sm:text-6xl xs:text-4xl sm:mb-8"
          />
          <div className="grid w-full grid-cols-8 gap-16 sm:gap-8">
            <div className="col-span-3 flex flex-col items-start justify-start xl:col-span-4 md:order-2 md:col-span-8">
              <h2 className="mb-4 text-lg font-bold uppercase opacity-75">
                About me
              </h2>
              <p className="font-medium">
                Hi, I am CodeBucks, a web developer and UI/UX designer with a
                passion for creating beautiful, functional, and user-centered
                digital experiences. With 4 years of experience in the field. I
                am always looking for new and innovative ways to bring my
                clients visions to life.
              </p>
              <p className="font-medium my-4">
                I believe that design is about more than just making things look
                pretty – it is about solving problems and creating intuitive,
                enjoyable experiences for users.
              </p>
              <p className="font-medium">
                Whether I&apos;m working on a website, mobile app, or online
                course, I bring my commitment to design excellence and user
                experience to every project I work on. I look forward to the
                opportunity to bring my skills and passion to your next project.
              </p>
            </div>
            <div className="col-span-3 xl:col-span-4 relative h-max rounded-2xl border-2 border-solid p-8 bg-secondary border-primary md:order-1 md:col-span-8">
              <div className="absolute top-0 -right-3 -z-10 w-[102%] h-[103%] rounded-[2rem] bg-black" />
              <Image
                src={profilePic}
                alt="Profile"
                className="w-full h-auto rounded-2"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                priority
              />
            </div>
            <div className="col-span-2 flex flex-col items-end justify-between xl:col-span-8 xl:flex-row xl:items-center md:order-3">
              <div className="flex flex-col items-end justify-center xl:items-center">
                <span className="inline-block text-7xl font-bold sm:text-5xl xs:text-4xl">
                  <AnimatedNumber value={50} />+
                </span>
                <h2 className="text-xl font-medium capitalize text-primary/75 xl:text-center md:text-lg sm:text-base xs:text-sm">
                  Happy Clients
                </h2>
              </div>
              <div className="flex flex-col items-end justify-center xl:items-center">
                <span className="inline-block text-7xl font-bold sm:text-5xl xs:text-4xl">
                  <AnimatedNumber value={6} />+
                </span>
                <h2 className="text-xl font-medium capitalize text-primary/75 xl:text-center md:text-lg sm:text-base xs:text-sm">
                  Years Experience
                </h2>
              </div>
              <div className="flex flex-col items-end justify-center xl:items-center">
                <span className="inline-block text-7xl font-bold sm:text-5xl xs:text-4xl">
                  <AnimatedNumber value={20} />+
                </span>
                <h2 className="text-xl font-medium capitalize text-primary/75 xl:text-center md:text-lg sm:text-base xs:text-sm">
                  Projects Completed
                </h2>
              </div>
            </div>
          </div>
          <Skills />
          <Experience />
          <Education />
        </MaxWidthWrapper>
      </main>
    </>
  )
}

export default About
