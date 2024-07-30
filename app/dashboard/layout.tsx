import { ClerkLoaded } from '@clerk/nextjs'
import React from 'react'

const layout = ({children}:{children:React.ReactNode}) => {
  return (
    <ClerkLoaded>
    <div>{children}</div>
</ClerkLoaded>
  )
}

export default layout