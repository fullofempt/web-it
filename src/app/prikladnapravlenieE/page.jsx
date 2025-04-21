"use client"
import Image from 'next/image'
import React from 'react'
import Header from '../UI/Header'
import { motion } from 'framer-motion'

// Настройки анимации
const sectionVariants = {
  offscreen: {
    opacity: 0,
    y: 50
  },
  onscreen: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      bounce: 0.4,
      duration: 1
    }
  }
}

const imageVariants = {
  offscreen: {
    opacity: 0,
    scale: 0.8
  },
  onscreen: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.8,
      ease: "easeOut"
    }
  }
}

export default function Page() {
  return (
    <div className="bg-[#ffffe4] overflow-hidden overflow-x-hidden">
      {/* Header Section */}
      <Header />

      {/* Hero Banner Section */}
      <motion.div
        initial="offscreen"
        whileInView="onscreen"
        viewport={{ once: false, amount: 0.3 }}
        variants={imageVariants}
        className="w-full h-full relative"
      >
        <div className="h-160  md:h-170 lg:h-190 xl:h-285 brightness-70">
          <Image
            src="/img/headofPrikladNaprav.png"
            alt="Программисты"
            layout="fill"
            objectFit="cover"
          />
        </div>
        <div className="absolute inset-0 backdrop-blur-sm"></div>

        <div className="absolute inset-0 flex flex-col items-center justify-center text-white text-center px-4">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-extrabold mb-2 sm:mb-4"
          >
            09.03.03
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl mb-4 sm:mb-6 font-bold sm:font-black"
          >
            Прикладная информатика <br className="hidden sm:block" />
            и системы искусственного интеллекта
          </motion.p>
        </div>
      </motion.div>

      {/* Content Section */}
      <motion.section
        initial="offscreen"
        whileInView="onscreen"
        viewport={{ once: false, amount: 0.2 }}
        variants={sectionVariants}
        className="mt-8 sm:mt-10 lg:mt-12"
      >
        <article className="grid grid-cols-1 md:grid-cols-2 bg-[#ffffe4] gap-4 sm:gap-6">
          <motion.div
            variants={imageVariants}
            className="w-full h-48 sm:h-64 md:h-80 lg:h-120 relative mx-auto md:ml-5"
          >
            <Image
              src="/img/headofPrikladNaprav2.png"
              alt="Программисты"
              layout="fill"
              objectFit="cover"
              className='mt-4 sm:mt-8 md:mt-12 lg:mt-5 rounded-xl sm:rounded-2xl md:rounded-3xl lg:rounded-4xl '
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{ duration: 0.8 }}
            className='flex justify-center items-center px-4 sm:px-6 md:px-8 lg:px-10'
          >
            <p className="text-xl sm:text-base md:text-lg lg:text-xl xl:text-3xl text-black font-extralight text-center lg:text-left py-4 sm:py-6 md:py-8 lg:py-10">
              Информационные системы и разработка компьютерных игр – молодое и интересное направление, на которое ты можешь поступить в ПГГПУ!
              <br /><br />
              Программа направлена на подготовку ИТ-специалистов в области проектирования и разработки игр на различные платформы. Кроме того, программа содержит в себе сильную фундаментальную подготовку по ИТ-специальностям общего профиля.
              <br /><br />
              В процессе обучения наши студенты создают собственные игры, участвуют в геймджемах, форумах, конференциях и многих других мероприятиях.
            </p>
          </motion.div>
        </article>
      </motion.section>

      {/* Numbered Sections */}
      <div className="mt-8 sm:mt-10 lg:mt-20 p-4 sm:p-6 text-white bg-black">
        {/* Section 1 */}
        <motion.section
          initial="offscreen"
          whileInView="onscreen"
          viewport={{ once: false, amount: 0.2 }}
          variants={sectionVariants}
          className='ml-2 sm:ml-4 md:ml-6 lg:ml-10 mt-8 sm:mt-12 md:mt-16 lg:mt-20'
        >
          <div className="grid grid-cols-1 md:grid-cols-2 items-center mb-8 sm:mb-12 md:mb-16">
            <div className="md:pr-4 lg:pr-6 xl:pr-10">
              <h3 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold mb-2 sm:mb-4 text-center">
                Эта программа готовит IT-специалистов широкого профиля
              </h3>
              <p className="text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl opacity-80 text-center">
                Способных разрабатывать программное обеспечение, автоматизировать бизнес-процессы и работать с современными информационными технологиями.
              </p>
            </div>
            <motion.div
              initial={{ scale: 0.5 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: false }}
              transition={{ type: "spring", stiffness: 100 }}
              className="flex justify-center mt-4 sm:mt-0"
            >
              <span className="text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-bold opacity-20">0</span>
            </motion.div>
          </div>
        </motion.section>

        {/* Section 2 */}
        <motion.section
          initial="offscreen"
          whileInView="onscreen"
          viewport={{ once: false, amount: 0.2 }}
          variants={sectionVariants}
        >
          <div className="grid grid-cols-1 md:grid-cols-2 items-center mb-8 sm:mb-12 md:mb-16">
            <div className="md:pr-4 lg:pr-6 xl:pr-10">
              <h3 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold mb-2 sm:mb-4 text-center">
                Учебный план сочетает фундаментальные знания
              </h3>
              <p className="text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl opacity-80 text-center">
                В области программирования, анализа данных и проектирования информационных систем с прикладными навыками для реальных задач.
              </p>
            </div>
            <div className="flex justify-center mt-4 sm:mt-0">
              <span className="text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-bold opacity-20">1</span>
            </div>
          </div>
        </motion.section>

        {/* Section 3 */}
        <motion.section
          initial="offscreen"
          whileInView="onscreen"
          viewport={{ once: false, amount: 0.2 }}
          variants={sectionVariants}
        >
          <div className="grid grid-cols-1 md:grid-cols-2 items-center mb-8 sm:mb-12 md:mb-16">
            <div className="md:pr-4 lg:pr-6 xl:pr-10">
              <h3 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold mb-2 sm:mb-4 text-center">
                Студенты учатся создавать приложения
              </h3>
              <p className="text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl opacity-80 text-center">
                Веб- и мобильные приложения, работать с базами данных, применять искусственный интеллект и машинное обучение.
              </p>
            </div>
            <div className="flex justify-center mt-4 sm:mt-0">
              <span className="text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-bold opacity-20">10</span>
            </div>
          </div>
        </motion.section>

        {/* Section 4 */}
        <motion.section
          initial="offscreen"
          whileInView="onscreen"
          viewport={{ once: false, amount: 0.2 }}
          variants={sectionVariants}
        >
          <div className="grid grid-cols-1 md:grid-cols-2 items-center mb-8 sm:mb-12 md:mb-16">
            <div className="md:pr-4 lg:pr-6 xl:pr-10">
              <h3 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold mb-2 sm:mb-4 text-center">
                Участие в профессиональных мероприятиях
              </h3>
              <p className="text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl opacity-80 text-center">
                Они участвуют в хакатонах, IT-конференциях и стажировках, реализуют собственные проекты.
              </p>
            </div>
            <div className="flex justify-center mt-4 sm:mt-0">
              <span className="text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-bold opacity-20">11</span>
            </div>
          </div>
        </motion.section>

        {/* Section 5 */}
        <motion.section
          initial="offscreen"
          whileInView="onscreen"
          viewport={{ once: false, amount: 0.2 }}
          variants={sectionVariants}
        >
          <div className="grid grid-cols-1 md:grid-cols-2 items-center mb-8 sm:mb-12 md:mb-16">
            <div className="md:pr-4 lg:pr-6 xl:pr-10">
              <h3 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold mb-2 sm:mb-4 text-center">
                Карьерные перспективы
              </h3>
              <p className="text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl opacity-80 text-center">
                Выпускники становятся востребованными разработчиками, системными аналитиками и IT-консультантами.
              </p>
            </div>
            <div className="flex justify-center mt-4 sm:mt-0">
              <span className="text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-bold opacity-20">100</span>
            </div>
          </div>
        </motion.section>

        {/* Section 6 */}
        <motion.section
          initial="offscreen"
          whileInView="onscreen"
          viewport={{ once: false, amount: 0.2 }}
          variants={sectionVariants}
        >
          <div className="grid grid-cols-1 md:grid-cols-2 items-center mb-8 sm:mb-12 md:mb-16">
            <div className="md:pr-4 lg:pr-6 xl:pr-10">
              <h3 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold mb-2 sm:mb-4 text-center">
                Присоединяйся к миру современных технологий
              </h3>
              <p className="text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl opacity-80 text-center">
                Строй успешную карьеру в IT!
              </p>
            </div>
            <div className="flex justify-center mt-4 sm:mt-0">
              <span className="text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-bold opacity-20">101</span>
            </div>
          </div>
        </motion.section>

        {/* Финальное изображение */}
        <motion.div
          initial="offscreen"
          whileInView="onscreen"
          viewport={{ once: false, amount: 0.3 }}
          variants={imageVariants}
          className="w-full h-full relative"
        >
          <div className="h-48 sm:h-64 md:h-80 lg:h-200 brightness-70 mt-8 sm:mt-12 md:mt-16 lg:mt-20">
            <Image
              src="/img/inekPhoto.png"
              alt="ИНЭК"
              layout="fill"
              objectFit="cover"
              className='rounded-xl sm:rounded-2xl md:rounded-3xl lg:rounded-4xl'
            />
          </div>
        </motion.div>
      </div>
    </div>
  )
}