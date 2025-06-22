"use client"
import Image from 'next/image'
import React from 'react'
import { motion } from 'framer-motion'
import Header from '../UI/Header'
import Corusel11 from '../components/Corusel11'
import Corusel2 from '../components/Corusel2'
import Accordion from '../components/Accordion'
import FooterSecond from '../components/FooterSecond'

// Настройки анимации (такие же как в примере)
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
    <div className="overflow-hidden overflow-x-hidden">
      {/* <Header /> */}

      {/* Hero Banner Section */}
      <motion.div
        initial="offscreen"
        whileInView="onscreen"
        viewport={{ once: true, amount: 0.3 }}
        variants={imageVariants}
        className="w-full h-full relative"
      >
        <div className="h-160 md:h-170 lg:h-190 xl:h-285 brightness-70">
          <Image
            src="/img/headofPrikladNaprav.png"
            alt="Программисты"
            fill
            priority
            style={{ objectFit: "cover" }}
            className=''
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
            09.03.02
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl mb-4 sm:mb-6 font-bold sm:font-black"
          >
            Информационные системы
            <br className="hidden sm:block" />
            и разработка компьютерных игр
          </motion.p>
        </div>
      </motion.div>

      {/* Content Section */}
      <motion.section
        initial="offscreen"
        whileInView="onscreen"
        viewport={{ once: true, amount: 0.2 }}
        variants={sectionVariants}
        className="mt-8 sm:mt-10 lg:mt-12"
      >
        <article className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
          <motion.div
            variants={imageVariants}
            className="w-full h-48 sm:h-64 md:h-80 lg:h-120 relative mx-auto md:ml-5"
          >
            <Image
              src="/img/gameDesignPh.png"
              alt="Программисты"
              fill
              style={{ objectFit: "cover" }}
              className='mt-4 sm:mt-8 md:mt-12 lg:mt-5 rounded-xl sm:rounded-2xl md:rounded-3xl lg:rounded-4xl'
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{ duration: 0.8 }}
            className='flex justify-center ml-10 mr-10 md:mr-5 md:ml-5'
          >
            <p className="text-xl sm:text-base md:text-lg lg:text-xl xl:text-3xl text-black font-extralight text-center md:text-left py-4 sm:py-6 md:py-8 lg:py-10">
              Информационные системы и разработка компьютерных игр – молодое и интересное направление, на которое ты можешь поступить в ПГГПУ!
              <br /><br />
              Программа направлена на подготовку ИТ-специалистов в области проектирования и разработки игр на различные платформы. Кроме того, программа содержит в себе сильную фундаментальную подготовку по ИТ-специальностям общего профиля.
              <br /><br />
              В процессе обучения наши студенты создают собственные игры, участвуют в геймджемах, форумах, конференциях и многих других мероприятиях.
            </p>
          </motion.div>
        </article>
      </motion.section>

      {/* Corusels Section */}
      <div className='bg-black'>
        <motion.section
          initial="offscreen"
          whileInView="onscreen"
          viewport={{ once: true, amount: 0.2 }}
          variants={sectionVariants}
          className='grid grid-cols-1 md:grid-cols-2 mt-20'
        >
          <Corusel11 />
          <Corusel2 />
        </motion.section>

        {/* Why Choose Section */}
        <div className='grid grid-cols-1 xl:grid-cols-2 gap-5'>
          <motion.article
            initial="offscreen"
            whileInView="onscreen"
            viewport={{ once: false, amount: 0.2 }}
            variants={sectionVariants}
            className='text-center'
          >
            <p className='md:ml-15 lg:ml-10 text-xl md:text-5xl xl:text-8xl font-extrabold md:text-center xl:text-left mt-5'>
              ПОЧЕМУ ТЫ ДОЛЖЕН ВЫБРАТЬ НАПРАВЛЕНИЕ ИНФОРМАЦИОННЫЕ СИСТЕМЫ И РАЗРАБОТКА КОМПЬЮТЕРНЫХ ИГР!
            </p>
          </motion.article>

          <motion.div
            initial="offscreen"
            whileInView="onscreen"
            viewport={{ once: false, amount: 0.2 }}
            variants={sectionVariants}
          >
            <Accordion />
          </motion.div>
        </div>

        {/* Leader Section */}
        <motion.section
          initial="offscreen"
          whileInView="onscreen"
          viewport={{ once: false, amount: 0.2 }}
          variants={sectionVariants}
          className="flex justify-center bg-gradient-to-t bg-black"
        >
          <div className="mt-10 bg-white w-100 md:w-150 lg:w-250 xl:w-350 xl:h-120 rounded-2xl shadow-2xl mb-10">
            <article className="flex flex-col lg:flex-row justify-center max-w-7xl p-6">
              <motion.div
                variants={imageVariants}
                className="flex justify-center items-center mt-5 ml-4 w-80 h-120 md:w-120 md:h-150 md:ml-10 lg:w-150 lg:h-150 xl:w-100 xl:h-100 xl:float-left relative shadow-xl"
              >
                <Image
                  src="/img/lev.png"
                  alt="Программисты"
                  fill
                  style={{ objectFit: "cover" }}
                  className="rounded-xl shadow-xl"
                />
              </motion.div>
              <div className="lg:ml-10">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: false }}
                  transition={{ delay: 0.2, duration: 0.8 }}
                  className="flex mb-5 text-2xl justify-center"
                >
                  <h1 className="font-black text-black text-center">Руководитель направления</h1>
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: false }}
                  transition={{ delay: 0.4, duration: 0.8 }}
                  className="p-5 text-center font-bold lg:w-100 xl:w-200 xl:h-95"
                >
                  <p className="text-lg lg:text-xl text-black text-left rounded-2xl">
                    Худорожков Лев Юрьевич
                    <br /><br />
                    Руководитель Пермской студии разработки игр "STORY GAMES"
                    <br /><br />
                    Образование:
                    2018 - 2022 ПГГПУ, «Информационные системы и технологии», Бакалавр
                    <br />
                    2022 - 2024 УРФУ. "Инженерия искусственного интеллекта", Магистр
                    <br /><br />
                    Стаж работы: 6 лет
                    <br /><br />
                    Курсы и дисциплины:
                    Геймдизайн,
                    Практикум GameDev,
                    Разработка игр на платформе Unity,
                    История видеоигровой индустрии
                  </p>
                </motion.div>
              </div>
            </article>
          </div>
        </motion.section>
      </div>
      <FooterSecond/>
    </div>
  )
}