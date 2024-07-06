import { cn } from '@/lib/utils'
import React from 'react'

const MaxWidthWrapper = ({
  className,
  children
}: {
  className?: string
  children: React.ReactNode
}) => {
  return (
    <div
      className={cn(
        `w-full h-full inline-block p-32 xl:p-24 lg:p-16 md:p-12 sm:p-8 ${className}`
      )}
    >
      {children}
    </div>
  )
}

export default MaxWidthWrapper
