import React from 'react';
import { motion } from 'framer-motion';
import ReactIcon from "./Icon";

export const StatsCard = ({ title, value, gradientColors, iconName }) => {
    return (
        <div className='relative w-full px-6 py-8 bg-zinc-900 rounded-lg shadow-lg overflow-hidden'>
            <motion.div
                className='absolute inset-0 bg-gradient-to-r from-neutral-800 via-neutral-300 to-neutral-500'
                animate={{ opacity: [0.1, 0.3, 0.1] }}
                transition={{ duration: 12, repeat: Infinity}}
            ></motion.div>
            <div className='flex flex-col justify-start items-start gap-3 z-30 relative'>
                <div><ReactIcon iconName={iconName} iconType={"ai"} classname="text-2xl text-zinc-400" /></div>
                <div><h2 className='text-xl font-medium text-zinc-300'>{title}</h2></div>
                <div><p className='text-base text-zinc-400 font-light'><span className='text-lg text-zinc-200 font-semibold'>{value}</span> {title}</p></div>
            </div>
            <div className={`absolute inset-0 bg-gradient-to-t ${gradientColors} opacity-20 blur-2xl`}></div>
        </div>
    );
}
