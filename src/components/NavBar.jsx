import React from 'react'

const NavBar = () => {
    return (
        <nav>
            <ul className='flex fixed z-10 bg-gray-900 py-5 text-gray-300 top-0 left-0 font-normal w-screen justify-center text-xl'>
                <li className='mx-5'><a href="#home"className='hover:cursor-pointer'>Home</a></li>
                <li className='mx-5'><a href="#aboutme" className='hover:cursor-pointer'>About Me</a></li>
                <li className='mx-5'><a href="#skills" className='hover:cursor-pointer'>Skills</a></li>
                <li className='mx-5'><a href="#projects" className='hover:cursor-pointer'>Projects</a></li>

                </ul>

        </nav>
    )
}

export default NavBar