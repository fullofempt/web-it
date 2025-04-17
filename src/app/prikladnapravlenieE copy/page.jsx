"use client"
import Image from 'next/image'
import React from 'react'
import Header from '../UI/Header'
import { motion } from 'framer-motion'

// Анимации
const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
}

const item = {
  hidden: { opacity: 0, y: 50 },
  show: { opacity: 1, y: 0 }
}

export default function Page() {
  return (
    <div className="bg-[#ffffe4]">
      {/* Header Section */}
      <Header />

      {/* Hero Banner Section */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="w-full h-full relative"
      >
        <div className="h-285 brightness-70">
          <Image
            src="/img/headofPrikladNaprav.png"
            alt="Программисты"
            layout="fill"
            objectFit="cover"
          />
        </div>
        <div className="absolute inset-0 backdrop-blur-sm"></div>

        <div className="absolute inset-0 flex flex-col items-center justify-center text-white text-center p-4">
          <h1 className="text-xl sm:text-6xl md:text-7xl lg:text-9xl font-extrabold mb-4">09.03.03</h1>
          <p className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl mb-6 font-black">
            Прикладная информатика <br />
            и системы искусственного интеллекта
          </p>
        </div>
      </motion.div>

      {/* Content Section */}
      <motion.div 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8 }}
        className="mt-10"
      >
        <article className="grid grid-cols-1 md:grid-cols-2 bg-[#ffffe4]">
          <div className="w-full h-120 relative ml-5">
            <Image
              src="/img/headofPrikladNaprav2.png"
              alt="Программисты"
              layout="fill"
              objectFit="cover"
              className='mt-15 rounded-4xl'
            />
          </div>

          <div className='flex justify-center items-center'>
            <p className="text-lg lg:text-3xl text-black font-serif text-left p-15">
              Информационные системы и разработка компьютерных игр – молодое и интересное направление, на которое ты можешь поступить в ПГГПУ!
              <br /><br />
              Программа направлена на подготовку ИТ-специалистов в области проектирования и разработки игр на различные платформы. Кроме того, программа содержит в себе сильную фундаментальную подготовку по ИТ-специальностям общего профиля.
              <br /><br />
              В процессе обучения наши студенты создают собственные игры, участвуют в геймджемах, форумах, конференциях и многих других мероприятиях.
            </p>
          </div>
        </article>
      </motion.div>

      {/* Numbered Sections */}
      <div className="mt-10 p-4 text-white bg-black">
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          className='ml-10 mt-20'
        >
          {/* Section 1 */}
          <motion.div variants={item} className="grid grid-cols-1 md:grid-cols-2 items-center mb-16">
            <div className="md:pr-10">
              <h3 className="text-2xl md:text-5xl font-bold mb-4 text-center">
                Эта программа готовит IT-специалистов широкого профиля
              </h3>
              <p className="text-2xl opacity-80 text-center">
                Способных разрабатывать программное обеспечение, автоматизировать бизнес-процессы и работать с современными информационными технологиями.
              </p>
            </div>
            <div className="flex justify-center">
              <span className="text-8xl md:text-9xl font-bold opacity-20">0</span>
            </div>
          </motion.div>

          {/* Section 2 */}
          <motion.div variants={item} className="grid grid-cols-1 md:grid-cols-2 items-center mb-16">
            <div className="md:pr-10">
              <h3 className="text-2xl md:text-5xl font-bold mb-4 text-center">
                Учебный план сочетает фундаментальные знания
              </h3>
              <p className="text-2xl opacity-80 text-center">
                В области программирования, анализа данных и проектирования информационных систем с прикладными навыками для реальных задач.
              </p>
            </div>
            <div className="flex justify-center">
              <span className="text-8xl md:text-9xl font-bold opacity-20">1</span>
            </div>
          </motion.div>

          {/* Section 3 */}
          <motion.div variants={item} className="grid grid-cols-1 md:grid-cols-2 items-center mb-16">
            <div className="md:pr-10">
              <h3 className="text-2xl md:text-5xl font-bold mb-4 text-center">
                Студенты учатся создавать приложения
              </h3>
              <p className="text-2xl opacity-80 text-center">
                Веб- и мобильные приложения, работать с базами данных, применять искусственный интеллект и машинное обучение.
              </p>
            </div>
            <div className="flex justify-center ">
              <span className="text-8xl md:text-9xl font-bold opacity-20">10</span>
            </div>
          </motion.div>

          {/* Section 4 */}
          <motion.div variants={item} className="grid grid-cols-1 md:grid-cols-2 items-center mb-16">
            <div className="md:pr-10">
              <h3 className="text-2xl md:text-5xl font-bold mb-4 text-center">
                Участие в профессиональных мероприятиях
              </h3>
              <p className="text-2xl opacity-80 text-center">
                Они участвуют в хакатонах, IT-конференциях и стажировках, реализуют собственные проекты.
              </p>
            </div>
            <div className="flex justify-center">
              <span className="text-8xl md:text-9xl font-bold opacity-20">11</span>
            </div>
          </motion.div>

          {/* Section 5 */}
          <motion.div variants={item} className="grid grid-cols-1 md:grid-cols-2 items-center mb-16">
            <div className="md:pr-10">
              <h3 className="text-2xl md:text-5xl font-bold mb-4 text-center">
                Карьерные перспективы
              </h3>
              <p className="text-2xl opacity-80 text-center">
                Выпускники становятся востребованными разработчиками, системными аналитиками и IT-консультантами.
              </p>
            </div>
            <div className="flex justify-center">
              <span className="text-8xl md:text-9xl font-bold opacity-20">100</span>
            </div>
          </motion.div>

          {/* Section 6 */}
          <motion.div variants={item} className="grid grid-cols-1 md:grid-cols-2 items-center">
            <div className="md:pr-10">
              <h3 className="text-2xl md:text-5xl font-bold mb-4 text-center">
                Присоединяйся к миру современных технологий
              </h3>
              <p className="text-2xl opacity-80 text-center">
                Строй успешную карьеру в IT!
              </p>
            </div>
            <div className="flex justify-center">
              <span className="text-8xl md:text-9xl font-bold opacity-20">101</span>
            </div>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="w-full h-full relative"
        >
          <div className="h-200 brightness-70 mt-20">
            <Image
              src="/img/prikol.png"
              alt="Программисты"
              layout="fill"
              objectFit="cover"
              className='rounded-4xl'
            />
          </div>
          <div className="absolute "></div>
        </motion.div>
      </div>
    </div>
  )
}
