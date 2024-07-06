import React from 'react'
import { motion } from 'framer-motion'

const Skill = ({ name, x, y }: { name: string; x: string; y: string }) => {
  return (
    <motion.div
      className="flex items-center justify-center py-3 px-6 rounded-full font-semibold text-2xl bg-secondary text-primary cursor-pointer absolute lg:py-2 lg:px-4 md:text-sm md:py-1.5 md:px-3 xs:bg-transparent xs:text-secondary"
      style={{ x, y }}
      whileHover={{ scale: 1.05 }}
      initial={{ x: 0, y: 0 }}
      animate={{ x: x, y: y }}
      transition={{ duration: 1.5 }}
    >
      {name}
    </motion.div>
  )
}

const Skills = () => {
  return (
    <>
      <h2 className="font-bold text-8xl mt-64 w-full text-center md:text-6xl md:mt-32">
        Skills
      </h2>
      <div className="w-full h-screen relative flex items-center justify-center rounded-full bg-circular-light">
        <motion.div
          className="flex items-center justify-center rounded-full font-semibold text-2xl p-4 bg-secondary text-primary"
          whileHover={{ scale: 1.05 }}
        >
          Web
        </motion.div>

        <Skill name="HTML" x="-20vw" y="2vw" />
        <Skill name="CSS" x="-5vw" y="-10vw" />
        <Skill name="Javascript" x="20vw" y="6vw" />
        <Skill name="ReactJS" x="0vw" y="20vw" />
        <Skill name="NextJS" x="-20vw" y="-15vw" />
        <Skill name="TailwindCSS" x="15vw" y="-12vw" />
      </div>
    </>
  )
}

export default Skills
