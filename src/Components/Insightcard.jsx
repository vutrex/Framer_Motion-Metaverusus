import { motion } from 'framer-motion'
import React from 'react'
import styles from '../Styles'
import { fadeIn } from '../utils/Motion'
import Arrow from '../assets/Arrow.svg'
const Insightcard = ({imgUrl,title,subtitle,index}) => {
  return (
   <motion.div
   variants={fadeIn('up','spring', index * 0.5, 1)}
   className='flex md:flex-row  flex-col gap-4'>
        <img src={imgUrl} alt="" className='md:w-[270px] w-full h-[250px] rounded-[32px] object-cover' />
        {/* this div contains a div of title/subtitle and an arrow image  */}
            <div className='w-full flex justify-between items-center'>
                {/* this is div for col alignment of title and subtitle  */}
                <div className='flex-1 md:ml-[62px] flex flex-col max-w-[650px]'>
                    <h4 className='font-normal lg:text-[42px] text-[26px] text-white'>{title}</h4>
                    <p className='mt-[16px] font-normal lg:text-[20px] text-[14px] text-gray-400'>{subtitle}</p>
                </div>
                {/* this is div for arrow image  */}
                <div className='lg:flex hidden items-center justify-center w-[100px] h-[100px] rounded-full border-[1px] border-white'>
                        <img src={Arrow} className='w-[40%] h-[40%] object-contain' alt="" />
                </div>
            </div>
   </motion.div>
  )
}

export default Insightcard