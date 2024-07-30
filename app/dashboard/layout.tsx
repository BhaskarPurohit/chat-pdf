import Header from '@/components/Header'
import { ClerkLoaded } from '@clerk/nextjs'
import React from 'react'

const layout = ({children}:{children:React.ReactNode}) => {
  return (
    <ClerkLoaded>
    <div className='flex flex-col flex-1'>
        <Header/>
        {children}
    </div>
</ClerkLoaded>
  )
}

export default layout