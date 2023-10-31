import { motion } from 'framer-motion'
import React, { useState } from 'react'
import { Typingtext } from './Typingtext'
import { staggerContainer } from '../utils/Motion'
import styles from '../Styles'
import Titletext from './Titletext'
import { exploreWorlds } from '../utils/Data'
import Explorecards from './Explorecards'

const Explore = () => {
  const [active,setActive]=useState('world-1')
  return (
    <section className={`${styles.paddings}`} id='explore' >
      {/* thsi div will animate all child  */}
        <motion.div
        variants={staggerContainer}
        initial='hidden'
        whileInView={'show'}
        viewport={{once:false,amount:0.25}}
        className={`${styles.innerWidth} mx-auto flex flex-col`}>
            {/* child 1-typing */}
            <Typingtext title='| The World' textStyles='text-center'/>
            {/* child 2-title */}
            <Titletext title={<>Choose the world you want <br className='md:block hidden'/>to explore</>} textStyles='text-center'/>
            {/* child 3-images */}
              <div className='mt-[50px] flex lg:flex-row flex-col min-h-[70vh] gap-5'>
                  {/* this div contains a mapping of images  */}
                  {exploreWorlds.map((item,index)=>{
                    return(
                          <Explorecards
                          key={item.id}
                          id={item.id}
                          index={index}
                          imgUrl={item.imgUrl}
                          title={item.title}
                          active={active}
                          handleClick={setActive}/>
                    )
                  })}
              </div>
        </motion.div>
    </section>

  )
}

export default Explore