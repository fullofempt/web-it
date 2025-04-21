'use client'
import React from 'react'
import { HiArrowCircleDown, HiX } from 'react-icons/hi'
import { motion, AnimatePresence } from 'framer-motion'

const AccordionUI = ({ title, children, Id, Index, setIndex }) => {
  const isOpen = Index === Id

  const handleSetIndex = () => {
    if (!isOpen) setIndex(Id)
  }

  const handleClose = (e) => {
    e.stopPropagation()
    setIndex(null)
  }

  const titleVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: [0.16, 1, 0.3, 1]
      }
    }
  }

  const contentVariants = {
    hidden: { 
      opacity: 0,
      height: 0,
      marginTop: 0,
      marginBottom: 0
    },
    visible: {
      opacity: 1,
      height: 'auto',
      marginTop: '0.5rem',
      marginBottom: '0.5rem',
      transition: {
        duration: 0.5,
        ease: [0.16, 1, 0.3, 1]
      }
    },
    exit: {
      opacity: 0,
      height: 0,
      marginTop: 0,
      marginBottom: 0,
      transition: {
        duration: 0.4,
        ease: [0.65, 0, 0.35, 1]
      }
    }
  }

  return (
    <div className="w-full md:w-4/5 lg:w-3/4 mx-auto mt-5">
      <motion.div
        onClick={handleSetIndex}
        initial="hidden"
        animate="visible"
        variants={titleVariants}
        whileHover={{ scale: 1.02 }}
        className="flex group cursor-pointer h-14 sm:h-16 justify-between items-center rounded-3xl 
                   bg-white hover:bg-[#aaaaaa] hover:shadow-lg text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl"
      >
        <div className="text-black font-semibold pl-5 sm:pl-8 md:pl-10 group-hover:text-white">
          {title}
        </div>
        <div className="flex items-center justify-center pr-5 sm:pr-8 md:pr-10">
          {!isOpen ? (
            <motion.div
              animate={{ rotate: 0 }}
              transition={{ duration: 0.3 }}
            >
              <HiArrowCircleDown className="w-5 h-5 sm:w-6 sm:h-6 group-hover:text-white text-black" />
            </motion.div>
          ) : (
            <motion.div
              onClick={handleClose}
              animate={{ rotate: 90 }}
              transition={{ duration: 0.3 }}
              className="group-hover:text-white text-black cursor-pointer"
            >
              <HiX className="w-5 h-5 sm:w-6 sm:h-6" />
            </motion.div>
          )}
        </div>
      </motion.div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            key="content"
            initial="hidden"
            animate="visible"
            exit="exit"
            variants={contentVariants}
            className="bg-[#aaaaaa] pl-5 sm:pl-8 md:pl-10 pr-3 sm:pr-5 font-semibold text-black rounded-xl 
                       whitespace-normal break-words overflow-hidden text-xs sm:text-sm md:text-base lg:text-lg"
          >
            <div className="py-3 sm:py-4">
              {children}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

export default AccordionUI