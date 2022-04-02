import React from 'react'

const Formulario = () => {
  return (
    <div className=''>
      <form className='formulario py-10' id="form">

      <h3>🚧 Working on it 🚧</h3>
        <div className='mb-5 mx-auto '>
          <label htmlFor="nombre" className=' mb-2 block  text-slate-400 '>From</label>
          <input type="text" id="nombre" disabled className="deshabilitado  rounded-md placeholder:text-slate-400 px-5 py-3 text-black" placeholder="Your name/company" />
        </div>
        <div className='mb-5 mx-auto '>
          <label htmlFor="email" className='block mb-2   text-slate-400 '>Email</label>
          <input type="email" id="email" disabled className="deshabilitado rounded-md placeholder:text-slate-400 px-5 py-3 text-black" placeholder="ex. Email@email.com" />
        </div>
        <div className='mb-5 mx-auto'>
          <label htmlFor="mensaje" className='block mb-2  text-slate-400'>Mensaje</label>
          <textarea name="" id="mensaje" disabled className='deshabilitado rounded-md placeholder:text-slate-400 px-5 py-3 text-black' placeholder="Your message" ></textarea>
        </div>
        <div className='flex justify-between'>
          <button type='submit' disabled className='bg-slate-600 text-slate-400 deshabilitado rounded-md py-3 px-3  font-semibold  transition-all '>Contact Me</button>
        </div>

      </form>

    </div>
  )
}

export default Formulario