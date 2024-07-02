import MaxWidthWrapper from '@/components/max-width-wrapper'
import Image from 'next/image'
import profilePic from '../../public/images/profile/developer-pic-1.png'
import AnimatedText from '@/components/animated-text'
import Link from 'next/link'
import { buttonVariants } from '@/components/ui/button'
import { LinkArrow } from '@/components/icons'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <MaxWidthWrapper className="pt-0">
        <div className="flex items-center justify-between w-full">
          <div className="w-1/2">
            <Image alt="front_page" src={profilePic} className="w-full" />
          </div>
          <div className="w-1/2 flex flex-col items-center self-center">
            <AnimatedText
              text="Turning Vision Into Reality With Code And Design."
              className="text-6xl"
            />
            <p className="my-4 text-base font-medium">
              As a skilled full-stack developer, I am dedicated to turning ideas
              into innovative web applications. Explore my latest projects and
              articles, showcasing my expertise in React.js and web development
            </p>
            <div className="flex items-center self-start mt-2">
              <Link
                href="/dummy.pdf"
                target="_blank"
                download={true}
                className={buttonVariants({
                  size: 'lg',
                  className: 'mr-4'
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
                  variant: 'outline'
                })}
              >
                Contact
              </Link>
            </div>
          </div>
        </div>
      </MaxWidthWrapper>
    </main>
  )
}
