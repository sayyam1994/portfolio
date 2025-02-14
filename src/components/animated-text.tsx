'use client'

import { cn } from '@/lib/utils'
import React from 'react'
import { motion } from 'framer-motion'

const quote = {
  initial: { opacity: 0 },
  animate: {
    opacity: 1,
    transition: {
      delay: 0.5,
      staggerChildren: 0.08
    }
  },
  exit: { opacity: 0 }
}

const singleWord = {
  initial: { opacity: 0, y: 50 },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 1
    }
  }
}

const AnimatedText = ({
  text,
  className
}: {
  text: string
  className?: string
}) => {
  return (
    <div className="w-full mx-auto flex justify-center items-center text-center overflow-hidden sm:py-0">
      <motion.h1
        className={cn(
          `inline-block w-full font-bold capitalize text-8xl ${className}`
        )}
        variants={quote}
        initial="initial"
        animate="animate"
        exit="exit"
      >
        {text.split(' ').map((word, index) => (
          <motion.span
            key={word + '-' + index}
            className="inline-block"
            variants={singleWord}
          >
            {word}&nbsp;
          </motion.span>
        ))}
      </motion.h1>
    </div>
  )
}

export default AnimatedText
