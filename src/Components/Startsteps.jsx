import React from 'react'
import styles from '../Styles'

const Startsteps = ({text,number}) => {
  return (
    // contains all divs-number,text 
    <div className={`${styles.flexCenter} flex-row`}>
        {/* div for the numebr  */}
        <div className={`${styles.flexCenter} w-[70px] h-[70px] rounded-[24px] glassmorphism` }>
            <p className="font-bold text-[20px] text-gray-400">0{number}</p>
        </div>
        {/* p for text  */}
        <p className="flex-1 ml-[30px] font-normal text-[18px] text-[#808080] leading-[32px]">{text}</p>
    </div>
  )
}

export default Startsteps