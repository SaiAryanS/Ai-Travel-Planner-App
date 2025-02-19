import React from 'react'
import { Button } from '../ui/button'
const Header = () => {
    return (
        <div>
        <div className='flex justify-between mx-10 my-5 items-center 
        shadow-lg h-24 px-10 rounded-lg '>
            <img src="/logo.png" alt="logo" className=' h-[70px] w-[70px] rounded-lg' />
            <Button>Get started!</Button>
        </div>
        </div>
    )
}

export default Header
