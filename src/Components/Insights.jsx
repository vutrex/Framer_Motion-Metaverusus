import React from 'react'
import styles from '../Styles'
import { staggerContainer } from '../utils/Motion'
import { Typingtext } from './Typingtext'
import Titletext from './Titletext'
import { motion } from 'framer-motion'
import { insights } from '../utils/Data'
import Insightcard from './Insightcard'
const Insights = () => {
  return (
    // overall section have paddings and posin 
    <section className={`${styles.paddings} z-10 relative`}>
    {/* ths motion div will animate childs(staggerContainer) */}
        <motion.div
        variants={staggerContainer}
        initial='hidden'
        whileInView={'show'}
        viewport={{once:false,amount:0.25}}
        className={`${styles.innerWidth} flex flex-col mx-auto`}>

            {/* child1  */}
            <Typingtext title='| Insights' textStyles={'text-center'}/>

            {/* child2  */}
            <Titletext title={'Insights about metaverse'} textStyles={'text-center'}/>

            {/* child3 - mapping div of Insightcard  */}
            <div className="mt-[50px] flex flex-col gap-[30px]">
                {
                    insights.map((info,index)=>{
                        return(
                        <Insightcard
                        key={`insight-${index}`}
                        imgUrl={info.imgUrl}
                        title={info.title}
                        subtitle={info.subtitle}
                        index={index+1}/>
                        )
                    })
                }
            </div>
        </motion.div>
    </section>
  )
}

export default Insights