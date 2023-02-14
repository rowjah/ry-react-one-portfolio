import React from 'react'

const About = () => {
  return (
    <div name='about' className='w-full h-screen bg-gradient-to-b from-gray-800
    to-black text-white'>
        <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full'>
            <div className='pb-8' >
                <p className='text-4xl font-bold inline border-b-4 border-gray-500'>
                    About
                </p>

            </div>
            <p className='text-xl mt-20'>
            My name is Roja. I'm a Front-End Web Developer.I believe that the power of technology can make people's lives easier and that new frameworks and technology make developers more productive to the tech community. 
           
            </p>
            <br/>
            <p className='text-xl'>
            Learning HTML, CSS, JavaScript and React JS from my Diploma journey,piqued my interest in coding. Since then my life has been about pursuing a career in coding and web development.
            </p>
        </div>
    </div>
  )
}

export default About