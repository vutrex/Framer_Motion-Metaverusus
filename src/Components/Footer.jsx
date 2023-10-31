import { motion } from 'framer-motion'
import React from 'react'
import { footerVariants } from '../utils/Motion'
import styles from '../Styles'
import hd from '../assets/Headset.svg'
const Footer = () => {
    const handle=()=>{
        window.scrollTo({top:0,left:0,behavior:'smooth'})
    }
  return (
   <motion.footer 
   variants={footerVariants}
   initial='hidden'
   whileInView={'show'}
   viewport={{once:false,amount:0.25}}
   className={`${styles.paddings} py-8 relative`}
   >
    <div className='footer-gradient'/>
    <div className={`${styles.innerWidth} mx-auto flex flex-col`}>
        <div className='flex items-center justify-between flex-wrap gap-5'>
            <h4 className='font-bold text-white text-[45px] md:text-[65px]'>Enter the Metaverse</h4>
            <button
             onClick={handle}
            className='flex items-center h-fit py-4 px-6 bg-[#25618b] rounded-[32px] gap-[12px]'>
                <img src={hd} alt="" className='w-[24px] h-[24px] object-contain' />
                <span className='font-normal text-[16px] text-white'>ENTER METAVERSE</span>
            </button>
        </div>
    </div>
   </motion.footer>
  )
}

export default Footer