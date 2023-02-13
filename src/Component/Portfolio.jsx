import React from 'react'

import herooIma  from "../Asset/herooIma.jpg";
import jorDan from "../Asset/jorDan.png";


const Portfolio = () => {
    const portfolios=  [
        {
            id:1,
            src: herooIma,
            web: 'https://aquamarine-jelly-3384d9.netlify.app',
            code: 'https://github.com/rowjah/cafe-paris',
        },
        {
            id:2,
            src:  jorDan,
            web: 'https://stellular-longma-eeff32.netlify.app',
            code: 'https://github.com/rowjah/mine',
        },

    ]
  return (
    <div name="portfolio" className='bg-gradient-to-b from-black to-gray-800 w-full text-white md:h-screen'>
        <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full'>
            <div className='pb-8'>
                <p className='text-4xl font-bold inline border-b-4 border-gray-500'>Portfolio</p>
                <p className='py-6'>Check out some of my works right here</p>
            </div>
           
            
            
                 <div  className='grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0'>
                    {portfolios.map(( {id, src,web,code})=>(

                 <div key={id} className='shadow-md shadow-gray-600 rounded-lg'>
                     <img src={src} alt='' className='rounded-md duration-200 hover:scale-105'  />
                     <div className='flex items-center justify-center'>
                        <a href={web}>
                            <button  className='w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105'>Demo</button> </a>
                        <a href={code}>
                             <button className='w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105'>Code</button> </a>
                     </div>
                 </div>
             


            )) 
            }





</div>
        </div>
    </div>
  )
}

export default Portfolio