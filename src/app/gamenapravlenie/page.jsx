"use client"
import Image from 'next/image'
import React from 'react'
import Header from '../UI/Header'
import Accordion from '../components/Accordion'
import Corusel from '../components/Corusel'
import Corusel2 from '../components/Corusel2'

export default function Page() {
  return (
    <div className="relative min-h-screen bg-[#023e8a] overflow-hidden overflow-x-hidden">
      <Header />
      <div className="flex flex-col lg:flex-row justify-start items-center p-5 0 ml-10 mr-10">
        <article className="max-w-5xl  rounded-lg p-6  shadow-xl ">
          <div className="float-center ml-4 mb-5 w-80 h-40   xl:w-80 xl:h-60 xl:float-right relative ">
            <Image
              src="/img/imgProgramists.png"
              alt="Программисты"
              layout="fill"
              objectFit="cover"
              className="rounded-md shadow-xl shadow-blue-600"
            />
          </div>
          <p className="text-lg lg:text-xl text-white font-black">
            * Программа предназначена для подготовки специалистов в области разработки и сопровождения информационных систем с использованием игровых компьютерных технологий для решения широкого круга прикладных задач.
            <br /><br />
            * Уникальность программы – сочетание технологий, таких как: искусственный интеллект, компьютерная графика, виртуальная и смешанная реальность с практическими навыками проектирования, реализации и сопровождения игровых разработок для обучения, конструирования, реализации тренажеров и, конечно, для игр.
            <br /><br />
            * Направление дает не только сильную фундаментальную подготовку по информационным системам, но и содержит интересные профильные дисциплины, направленные на разработку компьютерных игр!
          </p>
        </article>

        <div className="flex flex-col mt-10 lg:mt-0">
          <div className="inset-0 flex flex-col items-center lg:items-end justify-center mb-5">
            <h1 className="font-black text-xl md:text-1xl lg:text-2xl xl:text-3xl">Чего стоит ожидать?</h1>
          </div>
          <div className="flex justify-center items-center">
            <div className="ml-0 w-70 h-48 md:w-120 md:h-55 lg:ml-10  lg:w-80 lg:h=120 xl:w-220 xl:h-120 relative">
              <Image
                src="/img/imgProgramists.png"
                alt="Программисты"
                layout="fill"
                objectFit="cover"
                className="rounded-md shadow-2xl shadow-black"
              />
            </div>
          </div>
        </div>
      </div>


      <div className="flex flex-col lg:flex-row justify-end items-center p-5 ml-10 mr-10">

        <div className="flex flex-col mt-5 lg:mt-0 ">
          <div className="inset-0 flex flex-col items-center lg:items-start justify-center mb-5">
            <h1 className="font-black text-xl md:text-1xl lg:text-2xl xl:text-3xl">Примеры разработанных игр на данном направлении</h1>
          </div>


          <div className="flex justify-center items-center">
            <div className="mr-0 w-70 h-48 md:w-120 md:h-55 lg:mr-20  lg:w-80 lg:h=120 xl:w-220 xl:h-120 relative">
              <Image
                src="/img/imgProgramists.png"
                alt="Программисты"
                layout="fill"
                objectFit="cover"
                className="rounded-md shadow-2xl shadow-black"
              />
            </div>
          </div>
        </div>

        <article className="max-w-5xl  rounded-lg p-6 shadow-xl mt-10">
          <div className="float-center ml-4 mb-5 w-80 h-40   xl:w-80 xl:h-60 xl:float-left relative shadow-xl shadow-blue-600">
            <Image
              src="/img/imgProgramists.png"
              alt="Программисты"
              layout="fill"
              objectFit="cover"
              className="rounded-md "
            />
          </div>

          <p className="text-lg lg:text-xl text-white text-right font-black">
            Программа предназначена для подготовки специалистов в области разработки и сопровождения информационных систем с использованием игровых компьютерных технологий для решения широкого круга прикладных задач.
            <br /><br />
            Уникальность программы – сочетание технологий, таких как: искусственный интеллект, компьютерная графика, виртуальная и смешанная реальность с практическими навыками проектирования, реализации и сопровождения игровых разработок для обучения, конструирования, реализации тренажеров и, конечно, для игр.
            <br /><br />
            Направление дает не только сильную фундаментальную подготовку по информационным системам, но и содержит интересные профильные дисциплины, направленные на разработку компьютерных игр!
          </p>
        </article>

      </div>
      <div className="mt-20"></div>
      <div className='flex justify-center items-center'>
        <div className='font-black text-3xl mt-10'>Что ты будешь изучать?</div>  
      </div>
      <Accordion className="" />
      <Corusel className="" />
      <Corusel2 className="" />

      <div className="flex justify-center bg-gradient-to-t from-[#023e8a] to-sky-700 mb-10">
        <div className="mt-10 bg-[#000ba72f] w-100  md:w-150 lg:w-250 xl:w-350 xl:h-120 rounded-2xl shadow-2xl">
          <article className="flex flex-col lg:flex-row justify-center max-w-7xl p-6 ">
            <div className="flex justify-center items-center mt-5 ml-4 w-80 h-120 md:w-120 md:h-150 md:ml-10 lg:w-150 lg:h-150 xl:w-100 xl:h-100 xl:float-left relative shadow-xl">
              <Image
                src="/img/lev.png"
                alt="Программисты"
                fill
                objectFit="cover"
                className=" rounded-xl shadow-xl"
              />


            </div>
            <div className="lg:ml-10">
              <div className=" flex mb-5 text-2xl justify-center">
                <h1 className="font-black text-center">Руководитель направления</h1>

              </div>
              <div className="p-5 text-center font-bold lg:w-100 xl:w-200 xl:h-95">

                <p className="text-lg lg:text-xl text-white text-left  rounded-2xl">
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
