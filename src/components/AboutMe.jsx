import React from 'react'
import { FaYoutube } from 'react-icons/fa'

const AboutMe = () => {
  return (
    <div id="aboutme" className=' text-white container text-center px-5 mx-auto mt-28'>
      <div>
        <h2 className='text-center text-3xl my-10 font-bold'>About Me</h2>

        <div className=' mx-auto'>
          <p className='py-2'><strong>I started studying Web development in 2020</strong> with online courses from <span className='text-indigo-400'>Udemy</span> and <span className='text-red-400'>Youtube </span><FaYoutube className='inline'></FaYoutube></p>
          <p className='py-2'>I'm an ambitious guy who loves learning new stuffs. <em>I fell in love with coding because the mental proccess it takes to finish a task or a project</em> 🤯 </p>
          <p className='py-2'>I work as a Youtube Channel Manager, and Video Editor for famous content creators from <span className='text-blue-300'>Argentina</span> and <span className='text-red-300'>Chile</span>.</p>
        </div>
      </div>
    </div>
  )
}

export default AboutMe