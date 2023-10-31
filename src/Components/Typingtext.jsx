import { motion } from 'framer-motion'
import React from 'react'
import { textContainer, textVariant2 } from '../utils/Motion'

export const Typingtext = ({title,textStyles}) => {
  return (
    <motion.p 
    variants={textContainer}
    className={`font-normal text-[15px] text-gray-400 ${textStyles}`}>
        {Array.from(title).map((letter,index)=>{
            return(
                <motion.span
                variants={textVariant2} key={index}>
                    {letter ===' ' ? '\u00A0': letter}
                </motion.span>
            )
        })}
    </motion.p>
  )
}

