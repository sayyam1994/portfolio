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
    <div className={cn(`w-full h-full inline-block p-32 ${className}`)}>
      {children}
    </div>
  )
}

export default MaxWidthWrapper
