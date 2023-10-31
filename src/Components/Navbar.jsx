import React from 'react'
import { motion } from "framer-motion"
import styles from '../Styles'
import { navVariants } from '../utils/Motion'
import Searches from '../assets/Search.svg'
import Menu from '../assets/Menu.svg'
const Navbar = () => {
  return (
    <motion.nav
    variants={navVariants}
    initial='hidden'
    whileInView={'show'}
    className={`${styles.xPaddings} py-8 relative`}
    >
        <div className='absolute w-[50%] inset-0 gradient-01'/>
        <div className={`${styles.innerWidth} mx-auto flex justify-between gap-8 `}>
            <img src={Searches} alt="search" className='w-[30px] h-[30px] object-contain '/>
        <h2 className='font-extrabold text-[24px] leading-[30px] text-white'>
            METAVERSUS
        </h2>
        <img src={Menu} alt="menu"  className='w-[30px] h-[30px] object-contain ' />
       </div>
    </motion.nav>
  )
}

export default Navbar