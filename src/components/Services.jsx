import React, { useEffect, useState } from 'react'
import { inner, main, outer } from '../assets';
import { motion } from 'framer-motion'
import Typewriter from 'typewriter-effect';

export default function Services() {
    const [value, setValue] = useState('')

    const changeValueHandler = (e) => {
        setValue(e.target.innerHTML);
    }
    useEffect(() => {
        setValue('Brand Strategy')
    }, [])
    return (
        <section className=' w-fulloverflow-hidden min-h-screen bg-bg '>
            <div className='flex items-center justify-center max-w-screen-2xl mx-auto flex-col select-none gap-10 p-2 text-center'>
                <motion.div
                    className='flex items-center justify-end w-full  mt-20 origin-left'>

                    <motion.h1
                        initial={{
                            opacity: 0,
                            scaleX: 0,


                        }}
                        animate={{
                            opacity: 1,
                            scaleX: 1

                        }}
                        transition={{
                            duration: 0.5,
                            delay: 3
                        }}
                        className='  text-5xl   origin-right text-primary'>
                        <Typewriter
                            onInit={(typewriter) => {
                                typewriter
                                    .pauseFor(3000)
                                    .typeString('We Create Experiences with measurable impact')
                                    .start();
                            }}
                        /></motion.h1>

                </motion.div>

                <article className='flex flex-col-reverse items-center  w-full z-20 lg:flex-row'>

                    {/* FOR IMAGES */}
                    <div className='relative w-[559px] h-[682px] z-30'>
                        <motion.img
                            initial={{
                                opacity: 0,
                                rotateZ: -180,

                            }}
                            animate={{
                                opacity: 1,
                                rotateZ: 0
                            }}
                            transition={{
                                duration: 1.5,
                                delay: 1,
                                type: 'spring', stiffness: 100
                            }}

                            src={outer} alt="" className='absolute top-0 left-0 outer' />
                        <motion.img
                            initial={{
                                opacity: 0,

                            }}
                            animate={{
                                opacity: 1,

                            }}
                            whileHover={{
                                scaleX: 180
                            }}
                            transition={{
                                duration: 0.5,
                                delay: 2
                            }}
                            src={inner} alt="" className='absolute top-0 left-0 ' />
                        <motion.img
                            initial={{
                                opacity: 0,
                                rotateZ: 360,


                            }}
                            animate={{
                                opacity: 1,
                                rotateZ: 0
                            }}
                            transition={{
                                duration: 3,
                                delay: 1,
                                type: 'spring', stiffness: 100
                            }}
                            src={main} alt="" className='absolute top-0 left-0 origin-center  inner main' />

                    </div>
                    {/* FOR CONTENT */}
                    <motion.ul

                        className='text-white   w-full  lg:flex-1 z-20 p-2 relative list rounded-2xl'>
                        <li className='list-items' onMouseEnter={changeValueHandler}>Brand Strategy</li>
                        <li className='list-items' onMouseEnter={changeValueHandler}>Design</li>
                        <li className='list-items' onMouseEnter={changeValueHandler}>Digital</li>
                        <li className='list-items' onMouseEnter={changeValueHandler}>Events</li>
                        <li className='list-items' onMouseEnter={changeValueHandler}>Exhibitions</li>
                        <li className='list-items' onMouseEnter={changeValueHandler}>Interior and Retail</li>
                        <li className='list-items' onMouseEnter={changeValueHandler}>World Expo</li>
                        <div alt="" className='absolute top-0 left-0  w-full h-full rounded-2xl hoverBG' >
                            <h1 className='text-primary'>
                                {value}
                            </h1>
                        </div>

                    </motion.ul>
                    <div>

                    </div>
                </article>
            </div>

        </section>
    )
}
