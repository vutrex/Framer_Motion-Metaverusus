import React from 'react'
import styles from '../Styles'
import { motion } from 'framer-motion'
import { fadeIn, staggerContainer } from '../utils/Motion'
import { Typingtext } from './Typingtext'
import ArrowDown from '../assets/Arrow_down.svg'
const About = () => {
  return (
<section className={`${styles.paddings} relative z-10`}>
    {/* div for rendering liner gradient   */}
        <div className='gradient-02 z-0 '/>
        {/* this motion div will animate all children  */}
    <motion.div
        variants={staggerContainer}
        initial='hidden'
        whileInView={'show'}
        viewport={{once:false,amount:0.25}}
        className={`${styles.innerWidth} mx-auto ${styles.flexCenter} flex-col`}>
        
        {/* this comp will render the text by splitting the word and forming an array of letters  */}
        {/* child 1  */}
        <Typingtext title='| About Metaversus' textStyles='text-center'/>
        
        {/* paragraph-child2  */}
        <motion.p
        variants={fadeIn('up','tween',0.2,1)}
        className={`mt-[8px] font-normal sm:text-[33px] text-[20px] text-center text-gray-400`}>
            <span className="font-extrabold text-white">Metaverse</span> is a new
            thing in the future, where you can enjoy the virtual world by feeling
            like it's really real, you can feel what you feel in this metaverse
            world, because this is really the{' '}
            <span className="font-extrabold text-white">
            madness of the metaverse
            </span>{' '}
            of today, using only{' '}
            <span className="font-extrabold text-white">VR</span> devices you can
            easily explore the metaverse world you want, turn your dreams into
            reality. Let's{' '}
            <span className="font-extrabold text-white">explore</span> the madness
            of the metaverse by scrolling down
        </motion.p>

        {/* child 3 */}
        {/* down arrow image  */}
        <motion.img 
        variants={fadeIn('up','tween',0.3,1)}
        src={ArrowDown}
        className='w-[18px] h-[28px] object-contain mt-[27px]'
        />
        
    </motion.div>
</section>
  )
}

export default About