"use client"
import Image from 'next/image'
import React from 'react'
import Header from '../UI/Header'
// import Accordion from '../components/Accordion'
import Corusel11 from '../components/Corusel11'
import Corusel2 from '../components/Corusel2'
import Accordion from '../components/Accordion'

export default function Page() {
  return (
    <div className=" overflow-hidden overflow-x-hidden">
      <Header />
      <div className="h-160  md:h-170 lg:h-190 xl:h-285 brightness-70">
        <Image
          src="/img/LevUr.png"
          alt="Программисты"
          layout="fill"
          objectFit="cover"
        />
      </div>
      <div className="absolute inset-0 backdrop-blur-sm"></div>

      <div className="absolute inset-0 flex flex-col items-center justify-center text-white text-center px-4">
        <div className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-extrabold mb-2 sm:mb-4"
        >
          09.03.02
        </div>
        <div className="text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl mb-4 sm:mb-6 font-bold sm:font-black"
        >
          Информационные системы
          <br className="hidden sm:block" />
          и разработка компьютерных игр
        </div>
      </div>
      <div className='grid grid-cols-2 mt-10 '>
        <div>
          <div className="h-160  md:h-170 lg:h-190 xl:h-120 brightness-70 ml-10">
            <Image
              src="/img/gameDesignPh.png"
              alt="Программисты"
              layout="fill"
              objectFit="cover"
              className='rounded-4xl'
            />
          </div>
        </div>
        <div className='flex justify-center ml-10'>
          <article>
            <p className="text-lg lg:text-2xl mt-15 text-black text-left font-black">
              Информационные системы и разработка компьютерных игр – молодое и интересное направление, на которое ты можешь поступить в ПГГПУ!
              <br /><br />
              Программа направлена на подготовку ИТ-специалистов в области проектирования и разработки игр на различные платформы. Кроме того, программа содержит в себе сильную фундаментальную подготовку по ИТ-специальностям общего профиля.
              <br /><br />
              В процессе обучения наши студенты создают собственные игры, участвуют в геймджемах, форумах, конференциях и многих других мероприятиях.
            </p>
          </article>
        </div>
        <Corusel11 />
        <Corusel2 />
      </div>
      <div className='grid grid-cols-2 gap-5 bg-black'>
        <Accordion />
        <div>
          <article className='text-[80px] font-extrabold text-left mt-5'>
            <p>ПОЧЕМУ ТЫ ДОЛЖЕН ВЫБРАТЬ НАПРАВЛЕНИЕ ИНФОРМАЦИОННЫЕ СИСТЕМЫ И РАЗРАБОТКА КОМПЬЮТЕРНЫХ ИГР</p>
          </article>
        </div>
      </div>

      <div className="flex justify-center bg-gradient-to-t bg-black ">
        <div className="mt-10 bg-white w-100  md:w-150 lg:w-250 xl:w-350 xl:h-120 rounded-2xl shadow-2xl mb-10">
          <article className="flex flex-col lg:flex-row justify-center max-w-7xl p-6 ">
            <div className="flex justify-center items-center mt-5 ml-4 w-80 h-120 md:w-120 md:h-150 md:ml-10 lg:w-150 lg:h-150 xl:w-100 xl:h-100 xl:float-left relative shadow-xl">
              <Image
                src="/img/lev.png"
                alt="Программисты"
                fill
                objectFit="cover"
                className=" rounded-xl shadow-xl "

              />


            </div>
            <div className="lg:ml-10">
              <div className=" flex mb-5 text-2xl justify-center">
                <h1 className="font-black text-black text-center">Руководитель направления</h1>

              </div>
              <div className="p-5 text-center font-bold lg:w-100 xl:w-200 xl:h-95">

                <p className="text-lg lg:text-xl text-black text-left  rounded-2xl">
                  Худорожков Лев Юрьевич
                  <br></br>
                  <br></br>
                  Руководитель Пермской студии разработки игр “STORY GAMES”
                  <br></br>
                  <br></br>
                  Образование:
                  2018 - 2022 ПГГПУ, «Информационные системы и технологии», Бакалавр
                  <br></br>
                  2022 - 2024 УРФУ. "Инженерия искусственного интеллекта", Магистр
                  <br></br>
                  <br></br>
                  Стаж работы: 6 лет
                  <br></br>
                  <br></br>
                  Курсы и дисциплины
                  Геймдизайн
                  Практикум GameDev
                  Разработка игр на платформе Unity
                  История видеоигровой индустрии

                </p>
              </div>
            </div>
          </article>
        </div>
      </div>

    </div>

  )
}


