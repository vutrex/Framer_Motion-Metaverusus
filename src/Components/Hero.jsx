 import React from 'react'
import styles from '../Styles'
import { motion } from 'framer-motion' 
import Stamp from '../assets/Stamp.png'
import CoverImg from '../assets/Cover.png'
import { slideIn, staggerContainer, textVariant } from '../utils/Motion'
 const Hero = () => {
   return (
    // main section 
     <section className={`${styles.yPaddings} sm:pl-16 pl-6`}>
        {/* this motion div has a variant of stagger container so it will animate all the  */}
        {/* children elements(div/motion.div)  */}
     <motion.div
     variants={staggerContainer}
     initial='hidden'
     whileInView={'show'}
     viewport={{once:false, amount:0.25}}
     className={`${styles.innerWidth} mx-auto flex flex-col`}
     >
        {/* this div will contain all the headings in col style  */}
        <div className='flex justify-center items-center flex-col relative z-10'>
            {/* motion h1 animating metaverse */}
            <motion.h1 className={`${styles.heroHeading}`} variants={textVariant(1.5)}>
                Metaverse
            </motion.h1>
            {/* motion div animating madness  */}
            <motion.div variants={textVariant(1.7)} className={`flex flex-row justify-center items-center`}>
                <h1 className={`${styles.heroHeading}`}>Ma</h1>
                <div className={`${styles.heroDText}`}/>
                <h1 className={`${styles.heroHeading}`}>Ness</h1>
                </motion.div>
        </div>

            {/* motion div animating image  */}
            <motion.div
                variants={slideIn('right','tween',0.5,1)}
                className='w-full relative md:-mt-[20px] -mt-[12px] '
                >
                    {/* this self closing div will only render the gradient  */}
                    <div className='absolute w-full h-[300px] hero-gradient rounded-tl-[140px] z-[0] -top-[40px]'/>

                    <img src={CoverImg} className='w-full sm:h-[500px] h-[350px] object-cover rounded-tl-[140px] z-10 relative' alt="" />

                    {/* stamp(link->div->image)  */}
                    <a href="#explore">
                        <div className='w-full flex justify-end sm:-mt-[70px] -mt-[50px] pr-[40px] relative z-10'>
                            <img src={Stamp} alt="" className='sm:w-[155px] w-[100px] sm:h-[150px] h-[100px] object-contain' />
                        </div>
                    </a>
            </motion.div>

     </motion.div>
     </section>
   )
 }
 
 export default Hero