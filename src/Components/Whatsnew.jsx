import { motion } from 'framer-motion'
import React from 'react'
import styles from '../Styles'
import { fadeIn, planetVariants, staggerContainer } from '../utils/Motion'
import { Typingtext } from './Typingtext'
import Titletext from './Titletext'
import ws from '../assets/Whats_new.png'
import { newFeatures } from '../utils/Data'
import Newfeatures from './Newfeatures'
const Whatsnew = () => {
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

           {/* child1  */}
           {/* animating text1 and text2 and mapping of features in a div  */}
           <motion.div className='flex-[0.75] flex justify-center flex-col' variants={fadeIn('right','tween',0.2,1)}>
             <Typingtext title={"| What's New?"}/>
             <Titletext title={<>What's new about Metaversus?</>}/>
              <div className='mt-[50px] flex flex-wrap justify-between gap-[24px]'>
               {newFeatures.map((feature,index)=>{
                   return(
                     <Newfeatures
                     key={feature.title}
                     imgUrl={feature.imgUrl}
                     subtitle={feature.subtitle}
                     title={feature.title}/>
                   )
               })}
             </div> 
           </motion.div>

            {/* child2 */}
         {/* animating image */}
         <motion.div
           variants={planetVariants('right')}
           className={`flex-1 ${styles.flexCenter}`}>
             <img 
             src={ws} 
             alt="" 
             className='w-[80%] h-[80%] object-contain'/>
           </motion.div>
       </motion.div>
   </section>
  )
}

export default Whatsnew