import React from 'react'
import Formulario from './Formulario'
import { UilLinkedin } from '@iconscout/react-unicons'
const Footer = () => {
  return (
    <footer className='w-full flex justify-center mt-10 left-0 absolute bg-slate-500'>
      <div>

        <div className='flex items-center mt-10 pb-5 justify-center border-b border-gray-400 text-center'>
        <h3 className='text-xl font-semibold  mx-3'>You can contact me here!</h3>
        {UilLinkedin}
        <a target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/joaquinAstengo"><i class="uil text-4xl  uil-linkedin"></i></a>
        <a target="_blank" rel="noopener noreferrer" href="https://wa.me/5491162086623"><i class="uil text-4xl uil-whatsapp"></i></a>
        <a target="_blank" rel="noopener noreferrer" href="mailto:joaquin.astengo@gmail.com?"><i class="uil text-4xl mx-1 text-gray-200 hover:text-gray-300  uil-envelope"></i></a>
        </div>
        <Formulario></Formulario>

      </div>
    </footer>
  )
}

export default Footer