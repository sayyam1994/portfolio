import React, { useRef } from 'react'
import { motion, useScroll } from 'framer-motion'
import LiIcon from './li-icon'

const Details = ({
  position,
  company,
  companyLink,
  time,
  address,
  work
}: {
  position: string
  company: string
  companyLink: string
  time: string
  address: string
  work: string
}) => {
  const ref = useRef(null)
  return (
    <li
      ref={ref}
      className="my-8 first:mt-0 last:mb-0 w-[60%] mx-auto flex flex-col items-center justify-between md:w-[80%]"
    >
      <LiIcon reference={ref} />
      <motion.div
        initial={{ y: 50 }}
        whileInView={{ y: 0 }}
        transition={{ duration: 0.5, type: 'spring' }}
      >
        <h3 className="capitalize font-bold text-2xl sm:text-xl xs:text-lg">
          {position}&nbsp;
          <a
            href={companyLink}
            target="_blank"
            className="text-green-500 capitalize"
          >
            @{company}
          </a>
        </h3>
        <span className="capitalize font-medium text-primary/75 xs:text-sm">
          {time} | {address}
        </span>
        <p className="font-medium w-full md:text-sm">{work}</p>
      </motion.div>
    </li>
  )
}

const Experience = () => {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'center start']
  })

  return (
    <div className="my-64">
      <h2 className="font-bold mb-32 text-8xl w-full text-center md:text-6xl xs:text-4xl md:mb-16">
        Experience
      </h2>
      <div ref={ref} className="w-[75%] mx-auto relative lg:w-[90%] md:w-full">
        <motion.div
          className="absolute left-9 top-0 w-1 h-full bg-primary origin-top md:w-[2px] md:left-[30px] xs:left-[20px]"
          style={{ scaleY: scrollYProgress }}
        />
        <ul className="w-full flex flex-col items-start justify-between ml-4 xs:ml-2">
          <Details
            position="Software Engineer"
            company="Google"
            companyLink="https://google.com"
            time="2020 - Present"
            address="Mountain View, CA"
            work="Worked on a team responsible for developing new features for Google's 
                  search engine, including improving the accuracy and relevance of search results and 
                  developing new tools for data analysis and visualization."
          />
          <Details
            position="Software Engineer Intern"
            company="Amazon"
            companyLink="https://amazon.com"
            time="2021 - 2022"
            address="Seattle, WA"
            work="Worked on a team responsible for developing new features for Amazon's 
                  e-commerce platform, including improving the efficiency of checkout process,
                  optimizing inventory management, and optimizing customer experience."
          />
          <Details
            position="Software Engineer Intern"
            company="Microsoft"
            companyLink="https://microsoft.com"
            time="2020 - 2021"
            address="Redmond, WA"
            work="Worked on a team responsible for developing new features for Microsoft's 
                  office suite, including improving productivity and efficiency, and 
                  developing new tools for data analysis and visualization."
          />
          <Details
            position="Software Engineer Intern"
            company="Facebook"
            companyLink="https://facebook.com"
            time="2019 - 2020"
            address="Menlo Park, CA"
            work="Worked on a team responsible for developing new features for Facebook's 
                  social media platform, including improving the user experience, 
                  optimizing the performance of the platform, and developing new tools 
                  for data analysis and visualization."
          />
        </ul>
      </div>
    </div>
  )
}

export default Experience
