import React from 'react'

import htmll from "../Asset/htmll.jpg";
import Cascad from "../Asset/Cascad.jpg";
import Boot from "../Asset/Boot.png";
import javascript from "../Asset/javascript.jpg";
import reactt from "../Asset/reactt.jpg";
import github from "../Asset/github.jpg";
import tailwind from "../Asset/tailwind.jpg";







const Experience = () => {

    const techs=[
        {
            id:1,
            src: htmll,
            title: "HTML",
            style:"shadow-orange-500",
        },
        {
            id:2,
            src: Cascad,
            title: "CSS",
            style:"shadow-blue-500",
        },
        {
            id:3,
            src: Boot,
            title: "BOOTSTRAP",
            style:"shadow-blue-500",
            
        },
        {
            id:4,
            src:javascript,
            title: "JAVASCRIPT",
            style:"shadow-yellow-500",
        },
        {
            id:5,
            src: reactt,
            title: "REACT JS",
            style:"shadow-blue-600",
        },
        {
            id:6,
            src: github,
            title: "GIT",
            style:"shadow-gray-400",
        },
        {
            id:7,
            src:tailwind,
            title: "TAILWIND",
            style:"shadow-sky-400",
        },
        


    ]

  return (

<div name="skills" className='bg-gradient-to-b from-gray-800 to-black w-full h-screen'>
        <div className='max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full h-full text-white'>
            <div>
                <p className='text-4xl font-bold border-b-4 border-gray-500 p-2 inline'>Skills</p>

                <p className='py-6'>These are the technologies i've worked with</p>
            </div>
            <div className='w-full grid grid-cols-2 sm:grid-cols-3 gap-8 text-center py-8 px-12 sm:px-0'>


            { techs.map(( {id,src,title,style})=>(
                  <div key={id} className= { `shadow-md hover:scale-105 duration-500 py-2 rounded-lg`}>
                  <img src={src} alt='' className='w-20 mx-auto'/>
                  <p className='mt-4'>{title}</p>
              </div>

              ))  } 






                
            </div>
        </div>
    </div>
  )
}

export default Experience