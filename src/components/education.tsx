import React, { useRef } from 'react'
import { motion, useScroll } from 'framer-motion'
import LiIcon from './li-icon'

const Details = ({
  type,
  time,
  place,
  info
}: {
  type: string
  time: string
  place: string
  info: string
}) => {
  const ref = useRef(null)
  return (
    <li
      ref={ref}
      className="my-8 first:mt-0 last:mb-0 w-[60%] mx-auto flex flex-col items-start justify-between"
    >
      <LiIcon reference={ref} />
      <motion.div
        initial={{ y: 50 }}
        whileInView={{ y: 0 }}
        transition={{ duration: 0.5, type: 'spring' }}
      >
        <h3 className="capitalize font-bold text-2xl">{type}</h3>
        <span className="capitalize font-medium text-primary/75">
          {time} | {place}
        </span>
        <p className="font-medium w-full">{info}</p>
      </motion.div>
    </li>
  )
}

const Education = () => {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'center start']
  })

  return (
    <div className="my-64">
      <h2 className="font-bold mb-32 text-8xl w-full text-center">
        Experience
      </h2>
      <div ref={ref} className="w-[75%] mx-auto relative">
        <motion.div
          className="absolute left-9 top-0 w-1 h-full bg-primary origin-top"
          style={{ scaleY: scrollYProgress }}
        />
        <ul className="w-full flex flex-col items-start justify-between ml-4">
          <Details
            type="Bachelor of Science in Computer Science"
            time="2016 - 2020"
            place="University of Washington"
            info="GPA: 3.8/4.0"
          />
          <Details
            type="Master of Science in Computer Science"
            time="2020 - 2022"
            place="University of Washington"
            info="GPA: 3.8/4.0"
          />
          <Details
            type="Online Courses"
            time="2022 - 2022"
            place="University of Washington"
            info="Frontend Development"
          />
        </ul>
      </div>
    </div>
  )
}

export default Education
