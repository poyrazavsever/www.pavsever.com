import React from 'react'
import ReactIcon from "./Icon"
import { motion } from 'framer-motion'

function SkillCard({ link = "", iconName = "", iconType = "", iconColor = "", skillName = "" }) {
  return (
    <motion.a
      href={link}
      target='_blank'
      without="true"
      rel="noreferrer"
      className='inline-flex items-center justify-center gap-2 px-4 py-2 border w-32 md:w-36 border-neutral-800 bg-neutral-950 group transition-all'
      whileHover={{
        scale: 1.05,  // Kartı hafifçe büyüt
        borderColor: 'rgba(160, 160, 160, 0.6)', // Sınır rengini değiştir
        transition: { duration: 0.2, ease: 'easeIn' } // Animasyonun süresini ayarla
      }}
    >
      <ReactIcon iconName={iconName} iconType={iconType} iconColor={iconColor} classname="text-sm md:text-lg" />
      <span className='font-medium text-neutral-400 text-sm md:text-base'>{skillName}</span>
    </motion.a>
  )
}

export default SkillCard
