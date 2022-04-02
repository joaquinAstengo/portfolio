import React from 'react';
import Cripto from '../img/cripto.jpg'
import Clima from '../img/clima.jpg';
import AdmClient from '../img/adm-client.jpg'
import Gastos from '../img/gastos.jpg'
import Vet from '../img/vet.jpg'
const Card = () => {
    return (
        <div className='justify-center card-container mx-auto '>



            <div className='mx-5 my-5'>
                <div className="card rounded-md shadow-md transition-all text-black">
                    <img src={Gastos} alt="banner" className='rounded-t-md' />
                    <div className='py-5'>
                        <h2 className="font-semibold text-2xl mx-5">Budget Controller</h2>
                        <p className="font-normal text-lg mt-3 mx-5">An App where you can control your budget, with graphics and a slider.</p>
                        <p className="font-normal text-md mt-3 mx-5">Made with React and Tailwind.</p>
                    </div>
                    <div className='px-5  w-full flex bottom-0'>
                        <a href='https://app-de-gastos.netlify.app/' target="_blank" rel="noopener noreferrer" className='bg-pink-600 hover:bg-pink-700 text-white w-1/2 mb-5 mx-3 py-2 rounded-md'>View</a>
                        <a href='https://github.com/joaquinAstengo/app-gastos' target='_blank' className='bg-pink-600 hover:bg-pink-700 text-white w-1/2 mb-5 mx-3 py-2 rounded-md'>Repository</a>
                    </div>
                </div>
            </div>


            <div className='mx-5 my-5'>
                <div className="card rounded-md shadow-md transition-all text-black">
                    <img src={Vet} alt="banner" className='rounded-t-md' />
                    <div className='py-5'>
                        <h2 className="font-semibold text-2xl mx-5">Vet App</h2>
                        <p className="font-normal text-lg mt-3 mx-5">List your pets on the vet with this app.</p>
                        <p className="font-normal text-md mt-3 mx-5">Developed using API REST.</p>
                    </div>
                    <div className='px-5  w-full flex bottom-0'>
                        <a href='https://mi-veterinaria-app.netlify.app/' target="_blank" rel="noopener noreferrer" className='bg-pink-600 hover:bg-pink-700 text-white w-1/2 mb-5 mx-3 py-2 rounded-md'>View</a>
                        <a href='https://github.com/joaquinAstengo/citas-react-nuevo' target='_blank' className='bg-pink-600 hover:bg-pink-700 text-white w-1/2 mb-5 mx-3 py-2 rounded-md'>Repository</a>
                    </div>
                </div>
            </div>




            <div className='mx-5 my-5'>
                <div className="card rounded-md shadow-md transition-all text-black">
                    <img src={Cripto} alt="banner" className='rounded-t-md' />
                    <div className='py-5'>
                        <h2 className="font-semibold text-2xl mx-5">Crypto Prices</h2>
                        <p className="font-normal text-lg mt-3 mx-5">What's the price of your favourite crypto?.</p>
                        <p className="font-normal text-md mt-3 mx-5">Made with React and Tailwind.</p>
                    </div>

                    <div className='px-5 w-full  bottom-0 flex '>
                        <a href='https://cotizador-crypto-joaquin.netlify.app/' target="_blank" rel="noopener noreferrer" className='bg-pink-600 hover:bg-pink-700 text-white w-1/2 mb-5 mx-3 py-2 rounded-md'>View</a>
                        <a href='https://github.com/joaquinAstengo/cotizador-crypto' target='_blank' className='bg-pink-600 hover:bg-pink-700 text-white w-1/2 mb-5 mx-3 py-2 rounded-md'>Repository</a>
                    </div>
                </div>
            </div>

            <div className='mx-5 my-5'>
                <div className="card rounded-md transition-all text-black">
                    <img src={AdmClient} alt="banner" className='rounded-t-md' />
                    <div className='py-5'>
                        <h2 className="font-semibold text-2xl mx-5">CRUD - Client Administrator</h2>
                        <p className="font-normal text-lg mt-3 mx-5">Manage your clients on a data base.</p>
                        <p className="font-normal text-md mt-3 mx-5">Made with React, Json Server, and Tailwind.</p>
                    </div>
                    <div className='px-5  w-full flex bottom-0'>
                        <a  target="_blank" rel="noopener noreferrer" title='JSON Server Not Working' className='bg-pink-600 deshabilitado  text-white w-1/2 mb-5 mx-3 py-2 rounded-md'>View 🚧</a>
                        <a  href="https://github.com/joaquinAstengo/adminClientes"target='_blank'  className='bg-pink-600 hover:bg-pink-700  text-white w-1/2 mb-5 mx-3 py-2 rounded-md'>Repository</a>
                        
                    </div>
                </div>
            </div>

        </div>


    )
}

export default Card