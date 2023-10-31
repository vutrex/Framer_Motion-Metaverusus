import { motion } from 'framer-motion'
import React from 'react'
import { fadeIn, staggerContainer } from '../utils/Motion'
import styles from '../Styles'
import { Typingtext } from './Typingtext'
import Titletext from './Titletext'
import Map from '../assets/Map.png'
import Pep1 from '../assets/People_01.png'
import Pep2 from '../assets/People_02.png'
import Pep3 from '../assets/People_03.png'
const World = () => {
  return (
      // overall section have paddings and posin 
      <section className={`${styles.paddings} z-10 relative`}>
      {/* ths motion div will animate childs(staggerContainer) */}
        <motion.div
        variants={staggerContainer}
        initial='hidden'
        whileInView={'show'}
        viewport={{once:false,amount:0.25}}
        className={`${styles.innerWidth} flex flex-col  mx-auto`}>

            {/* child1  */}
            <Typingtext title='| People on the World' textStyles="text-center" />

            {/* child2  */}
            <Titletext title={<>Track friends around you and invite them to play together in the same
            world</>} textStyles='text-center'/>

            {/* child3-animating image and icons over it  */}
            <motion.div
            variants={fadeIn('up','tween',0.3,1)}
            className='relative mt-[68px] flex w-full h-[550px] '>
                <img src={Map} alt="" className='w-full h-full object-cover' />

                {/* div for  icon-1 ovr it (absolute) */}
                <div className='absolute top-10 left-20 w-[70px] h-[70px] p-[6px] rounded-full bg-[#5d6680]'>
                    <img src={Pep1} alt="" className='w-full h-full ' />
                </div>

                {/* div for  icon-2 ovr it (absolute) */}
                <div className='absolute top-1/2 left-[45%] w-[70px] h-[70px] p-[6px] rounded-full bg-[#5d6680]'>
                    <img src={Pep2} alt="" className='w-full h-full ' />
                </div>

                {/* div for  icon-3 ovr it (absolute) */}
                <div className='absolute bottom-20 right-20 w-[70px] h-[70px] p-[6px] rounded-full bg-[#5d6680]'>
                    <img src={Pep3} alt="" className='w-full h-full ' />
                </div>
            </motion.div>
        </motion.div>
    </section> 
  )
}

export default World