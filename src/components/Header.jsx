import React from 'react'
import { FaReact } from 'react-icons/fa';
const Header = () => {
    return (
        <div id="home" className='bg-gray-900 container mx-auto mt-28 px-5 flex justify-center'>

            <div>
                <h1 className='text-white font-bold text-5xl'>Joaquin
                    <span className='block'>Frontend Developer 😋</span>
                </h1>

                <div className='md:flex items-center'>
<a className='w-full md:max-w-max bg-pink-600 transition-all py-3 font-semibold hover:bg-pink-700 my-5 px-5 rounded-md text-white' href="#form">
                        Contact Me
                    </a>

                    <div className='md:mx-5'>
                        <a target="_blank" rel="noopener noreferrer" href="http://www.linkedin.com/in/joaquinAstengo" className='mx-3 hover:cursor-pointer'><i class="uil text-2xl hover:text-gray-200 active:text-pink-600 uil-linkedin"></i></a>
                        <a target="_blank" rel="noopener noreferrer" href="http://www.github.com/joaquinAstengo" className='ml-3 hover:cursor-pointer'><i class="uil text-2xl hover:text-gray-200 active:text-pink-600 uil-github"></i></a>
                    </div>
                </div>

                <div className='mt-10'>
                    <p className='my-2'>Hi! My name is Joaquín and I'm from <em>Buenos Aires, Argentina</em> 🇦🇷</p>
                    <p className='my-2'>I'm <strong>currently looking for my first job</strong> as a React Frontend Developer <FaReact className='inline text-blue-400'></FaReact> 😏 </p>
                </div>
            </div>
            <div>
                <a href="#home" className=' hover:bg-pink-600 transition-all active:bg-pink-700 border-2 border-pink-600 w-16 text-center h-16 flex justify-center items-center rounded-full fixed goup font-bold z-20 bottom-10 right-20'>Go UP</a>
            </div>
        </div>
    )
}

export default Header