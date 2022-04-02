import React from 'react'


const Hamburguer = ({ burguer, setBurguer }) => {



    const handleBurguerToggle = () => {
        setBurguer(!burguer)
        document.body.classList.toggle('overflow-hidden')

    }

    return (
            <div  className=' z-50'>
                <div className='w-full  justify-end flex fixed  z-30 top-0'>
                    <i onClick={handleBurguerToggle} className={`  uil cursor-pointer uil-bars text-3xl`}></i>
                </div>
                <div  className={`${!burguer ? 'hidden' : ''} font-semibold text-xl flex justify-end fixed top-0 right-0 w-screen pt-20 pb-10 h- bg-slate-800   bg-opacity-95`}>
                    <ul className=' burguer-menu text-left px-5'>
                        <li className='my-5 '><a href="#home" onClick={handleBurguerToggle} className='cursor-pointer'>Home</a></li>
                        <li className='my-5 '><a href="#aboutme" onClick={handleBurguerToggle} className='cursor-pointer'>About Me</a></li>
                        <li className='my-5 '><a href="#skills" onClick={handleBurguerToggle} className='cursor-pointer'>Skills</a></li>
                        <li className='my-5 '><a href="#projects" onClick={handleBurguerToggle} className='cursor-pointer'>Projects</a></li>
                    </ul>
                </div>

            </div>
 
    )
}

export default Hamburguer