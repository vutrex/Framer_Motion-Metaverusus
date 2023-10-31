import { motion } from 'framer-motion'
import React from 'react'
import { fadeIn } from '../utils/Motion'
import Headset from '../assets/Headset.svg'
import styles from '../Styles'
function Explorecards({imgUrl,title,active,handleClick,index,id}) {
  return (
    <motion.div
    // key*0.5 bcoz to delay dynamically (one after another -> ex-> 1*0.5 ,2*0.5 )
     variants={fadeIn('right', 'spring', index * 0.5, 0.75)}
    className={`relative ${
      active === id ? 'lg:flex-[2.5] flex-[10]' : 'lg:flex-[0.5] flex-[2]'
    } flex items-center justify-center min-w-[170px] h-[700px] transition-[flex] duration-[0.7s] ease-out-flex cursor-pointer`}
    onClick={()=>handleClick(id)}>
          <img
      src={imgUrl}
      alt="planet-04"
      className="absolute w-full h-full object-cover rounded-[24px]"
    />
    {active!==id ? (
        <h3 className='font-semibold sm:text-[26px] text-[18px] text-white absolute z-0 lg:bottom-20 lg:rotate-[-90deg] lg:origin-[0,0]'>{title}</h3>
    ):(
        <div className='absolute bottom-0 p-8 justify-start w-full flex-col rounded-b-[25px] bg-[rgba(0,0,0,0.5)]'>
            <div className={`${styles.flexCenter} w-[60px] h-[60px] glassmorphism rounded-[24px] mb-[16px]`}>
                <img src={Headset} alt="" className='w-1/2 h-1/2 object-contain'/>
            </div>
            <p className="font-normal text-[16px] leading-[20.16px] text-white uppercase">
          Enter Metaverse
        </p>
        <h2 className="mt-[24px] font-semibold sm:text-[32px] text-[24px] text-white">
          {title}
        </h2>
        </div>
    )}
    </motion.div>
  )
}

export default Explorecards