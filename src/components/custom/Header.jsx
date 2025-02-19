import React from 'react'
import { Button } from '../ui/button'
const Header = () => {
    return (
        <div className="max-w-screen-3xl mx-auto px-4 mt-3 ">
        <div className="flex flex-wrap justify-between items-center shadow-xl h-auto min-h-[96px] px-4 sm:px-10 py-4 rounded-lg">
            <img src="/logo.png" alt="logo" className="h-[60px] w-[60px] sm:h-[70px] sm:w-[70px] rounded-lg" />
            <Button className="mt-3 sm:mt-0">Get started!</Button>
        </div>
    </div>
    )
}

export default Header
