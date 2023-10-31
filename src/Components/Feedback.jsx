import { motion } from 'framer-motion'
import React from 'react'
import styles from '../Styles'
import { fadeIn, staggerContainer, zoomIn } from '../utils/Motion'
import p9 from '../assets/Planet_09.png'
import stamp from '../assets/Stamp.png'
const Feedback = () => {
  return (
   // overall section have paddings and posin 
   <section className={`${styles.paddings} z-10 relative`}>
   {/* ths motion div will animate childs(staggerContainer) */}
       <motion.div
       variants={staggerContainer}
       initial='hidden'
       whileInView={'show'}
       viewport={{once:false,amount:0.25}}
       className={`${styles.innerWidth} flex flex-col mx-auto lg:flex-row gap-6`}>
        {/* child1- box  */}
            <motion.div 
            variants={fadeIn('right','tween',0.2,1)}
            className='flex-0.5 lg:max-w-[370px] flex justify-end flex-col gradient-05 sm:p-8 p-4 rounded-[32px] border-[1px] border-[#6a6a6a] relative'>
            <div className='feedback-gradient '/>
                <div>
                    <h4 className="font-bold sm:text-[32px] text-[26px] sm:leading-[40.32px] leading-[36.32px] text-white">
                    Samantha
                    </h4>

                    <p className="mt-[8px] font-normal sm:text-[18px] text-[12px] sm:leading-[22.68px] leading-[16.68px] text-white">
                    Founder Metaverus
                    </p>
                </div>

                <p className="mt-[24px] font-normal sm:text-[24px] text-[18px] sm:leading-[45.6px] leading-[39.6px] text-white">
                “With the development of today's technology, metaverse is very
                useful for today's work, or can be called web 3.0. by using
                metaverse you can use it as anything”
                </p>
            </motion.div>

            {/* child2-image  */}
            <motion.div
            variants={fadeIn('left','tween',0.2,1)}
            className='flex flex-1 relative justify-center items-center'>
                <img src={p9} alt="" className='w-full lg:h-[600px] min-h-[210px] h-auto object-cover rounded-[40px]' />
                {/* for stamp animation  */}
                <motion.div variants={zoomIn(0.4,1)} className='lg:block hidden absolute -left-[10%] top-[3%]'>
                    <img src={stamp} className='w-[150px] h-[150px] object-contain' alt="" />
                </motion.div>
             </motion.div>   
        </motion.div>
    </section>
  )
}

export default Feedback