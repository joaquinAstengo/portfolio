import React from 'react'
import ReactIcon from '../img/react.png'
import BootstrapIcon from '../img/bootstrap.png'
import TypescriptIcon from '../img/typescript.png'
import JavascriptIcon from '../img/javascript.png'
import TailwindIcon from '../img/tailwind.png'
import HtmlIcon from '../img/html.png'
import CssIcon from '../img/css.png'
const Skills = () => {
  return (
    <div id="skills" className='mx-auto bg-slate container px-5 max-w-5xl text-center mt-28'>
      <div>
        <h2 className='text-center text-3xl my-5 font-bold'>Main Skills</h2>
        <div id="skills" className='grid  md:grid-cols-4 grid-cols-2 py-3 px-4'>
          <img className='hover:scale-105 transition-all mt-5 mx-auto hover:-rotate-2' title="HTML" src={HtmlIcon} alt="html icon" />
          <img className='hover:scale-105 transition-all mt-5  mx-auto hover:-rotate-1' title="CSS" src={CssIcon} alt="css icon" />
          <img className='hover:scale-105 transition-all mt-5  mx-auto hover:rotate-1' title="Javascript" src={JavascriptIcon} alt="javascript icon" />
          <img className='hover:scale-105 transition-all mt-5  mx-auto hover:rotate-2' title="React" src={ReactIcon} alt="react icon" />
        </div>
      </div>

      <div>
        <h2 className='text-center text-3xl mt-20 mb-5 font-bold'>Other Skills</h2>
        <div id="skills" className='flex py-3 px-4 justify-around'>
          <img className='hover:scale-105 transition-all hover:-rotate-2' title="bootstrap" src={BootstrapIcon} alt="bootstrap icon" />
          <img className='hover:scale-105 transition-all' title="tailwind" src={TailwindIcon} alt="tailwindcss icon" />
          <img className='hover:scale-105 transition-all hover:rotate-2' title="typescript" src={TypescriptIcon} alt="typescript icon" />
        </div>
      </div>
    </div>
  )
}

export default Skills