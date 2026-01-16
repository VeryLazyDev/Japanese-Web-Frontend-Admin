import React from 'react'
import { Outlet } from 'react-router-dom'

const MainLayout = () => {
  return (
    <main className='w-screen h-screen bg-neutral-100'>
        Hello World
        <Outlet />
    </main>
  )
}

export default MainLayout