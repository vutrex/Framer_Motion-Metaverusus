import React from 'react'
import styles from '../Styles'
import { motion } from 'framer-motion'
import { fadeIn, planetVariants, staggerContainer } from '../utils/Motion'
import gs from '../assets/Get_started.png'
import { Typingtext } from './Typingtext'
import Titletext from './Titletext'
import { startingFeatures } from '../utils/Data'
import Startsteps from './Startsteps'
const Getstarted = () => {
  return (
    // overall section have paddings and posin 
    <section className={`${styles.paddings} z-10 relative`}>
      {/* ths motion div will animate childs(staggerContainer) */}
        <motion.div
        variants={staggerContainer}
        initial='hidden'
        whileInView={'show'}
        viewport={{once:false,amount:0.25}}
        className={`${styles.innerWidth}  flex lg:flex-row flex-col gap-8`}>

          {/* child1 */}
          {/* animating image */}
            <motion.div
            variants={planetVariants('left')}
            className={`flex-1 ${styles.flexCenter}`}>
              <img 
              src={gs} 
              alt="" 
              className='w-[80%] h-[80%] object-contain'/>
            </motion.div>

            {/* child2  */}
            {/* animating text1 and text2 and mapping of features in a div  */}
            <motion.div className='flex-[0.75] flex justify-center flex-col' variants={fadeIn('left','tween',0.2,1)}>
              <Typingtext title={'| How Metaversus Works'}/>
              <Titletext title={<>Get started with just few clicks!</>}/>
              <div className='mt-[30px] flex flex-col max-w-[370px] gap-[24px]'>
                {startingFeatures.map((feature,index)=>{
                    return(
                      <Startsteps
                      key={feature}
                      number={index+1}
                      text={feature}/>
                    )
                })}
              </div>
            </motion.div>
        </motion.div>
    </section>
  )
}

export default Getstarted