import AnimatedText from '@/components/animated-text'
import { GithubIcon } from '@/components/icons'
import MaxWidthWrapper from '@/components/max-width-wrapper'
import Head from 'next/head'
import Image, { StaticImageData } from 'next/image'
import Link from 'next/link'
import React from 'react'
import projects1 from '../../../public/images/projects/crypto-screener-cover-image.jpg'
import projects2 from '../../../public/images/projects/portfolio-cover-image.jpg'

const FeaturedProject = ({
  type,
  title,
  summary,
  img,
  link,
  github
}: {
  type: string
  title: string
  summary: string
  img: StaticImageData
  link: string
  github: string
}) => {
  return (
    <article className="w-full flex items-center justify-between rounded-3xl border border-solid border-primary bg-secondary shadow-2xl p-12 relative rounded-br-2xl">
      <Link
        href={link}
        target="_blank"
        className="w-1/2 cursor-pointer overflow-hidden rounded-lg"
      >
        <div className="absolute top-0 -right-4 -z-10 w-[101%] h-[103%] rounded-[2.5rem] bg-primary rounded-br-3xl" />
        <Image
          src={img}
          alt={title}
          className="w-full h-auto"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 50vw"
          priority
        />
      </Link>
      <div className="w-1/2 flex flex-col items-start justify-between pl-6">
        <span className="text-green-500 font-medium text-xl">{type}</span>
        <Link
          href={link}
          target="_blank"
          className="hover:underline underline-offset-2"
        >
          <h2 className="my-2 w-full text-left text-4xl font-bold">{title}</h2>
        </Link>
        <p className="my-2 font-medium text-primary">{summary}</p>
        <div className="mt-2 flex items-center">
          <Link href={github} target="_blank" className="w-10">
            <GithubIcon />
          </Link>
          <Link
            href={link}
            target="_blank"
            className="ml-4 rounded-lg bg-primary text-secondary px-6 py-2 text-lg font-semibold"
          >
            Visit Project
          </Link>
        </div>
      </div>
    </article>
  )
}

const Project = ({
  type,
  title,
  img,
  link,
  github
}: {
  type: string
  title: string
  img: StaticImageData
  link: string
  github: string
}) => {
  return (
    <article className="w-full flex flex-col items-center justify-center rounded-2xl border border-solid border-primary bg-secondary p-6 relative rounded-br-2xl">
      <Link
        href={link}
        target="_blank"
        className="w-full cursor-pointer overflow-hidden rounded-lg"
      >
        <div className="absolute top-0 -right-3 -z-10 w-[101%] h-[103%] rounded-[2rem] bg-black rounded-br-3xl" />
        <Image src={img} alt={title} className="w-full h-auto" />
      </Link>
      <div className="w-full flex flex-col items-start justify-between mt-4">
        <span className="text-green-500 font-medium text-xl">{type}</span>
        <Link
          href={link}
          target="_blank"
          className="hover:underline underline-offset-2"
        >
          <h2 className="my-2 w-full text-left text-3xl font-bold">{title}</h2>
        </Link>
        <div className="w-full mt-2 flex items-center justify-between">
          <Link
            href={link}
            target="_blank"
            className="text-lg font-semibold underline"
          >
            Visit
          </Link>
          <Link href={github} target="_blank" className="w-8">
            <GithubIcon />
          </Link>
        </div>
      </div>
    </article>
  )
}

const Projects = () => {
  return (
    <>
      <Head>
        <title>Projects</title>
        <meta name="description" content="Projects" />
      </Head>
      <main className="flex w-full items-center justify-center mb-16">
        <MaxWidthWrapper className="pt-16">
          <AnimatedText
            text="Imagination Trumps Knowledge!"
            className="mb-16"
          />
          <div className="grid grid-cols-12 gap-24 gap-y-32">
            <div className="col-span-12">
              <FeaturedProject
                type="Featured Project"
                title="Crypto Screener Application"
                img={projects1}
                summary="A feature-rich Crypto Screener App using React, Tailwind CSS, Context API, React Router and Recharts. 
                         It shows detail regarding almost all the cryptocurrency. You can easily convert the price in your 
                         local currency."
                link="/"
                github="/"
              />
            </div>
            <div className="col-span-6">
              <Project
                type="Project"
                title="React Portfolio Website"
                img={projects2}
                link="/"
                github="/"
              />
            </div>
            <div className="col-span-6">Project-2</div>
            <div className="col-span-12">Featured Project</div>
            <div className="col-span-6">Project-1</div>
            <div className="col-span-6">Project-2</div>
          </div>
        </MaxWidthWrapper>
      </main>
    </>
  )
}

export default Projects
