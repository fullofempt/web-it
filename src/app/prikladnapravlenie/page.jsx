"use client"
import Image from 'next/image'
import React from 'react'
import Header from '../UI/Header'
import Accordion from '../components/Accordion'
import Corusel from '../components/Corusel'

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
          Информационные системы и разработка компьютерных игр – молодое и интересное направление, на которое ты можешь поступить в ПГГПУ!
            <br /><br />
            Программа направлена на подготовку ИТ-специалистов в области проектирования и разработки игр на различные платформы. Кроме того, программа содержит в себе сильную фундаментальную подготовку по ИТ-специальностям общего профиля.
            <br /><br />
            В процессе обучения наши студенты создают собственные игры, участвуют в геймджемах, форумах, конференциях и многих других мероприятиях.
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
          Информационные системы и разработка компьютерных игр – молодое и интересное направление, на которое ты можешь поступить в ПГГПУ!
            <br /><br />
            Программа направлена на подготовку ИТ-специалистов в области проектирования и разработки игр на различные платформы. Кроме того, программа содержит в себе сильную фундаментальную подготовку по ИТ-специальностям общего профиля.
            <br /><br />
            В процессе обучения наши студенты создают собственные игры, участвуют в геймджемах, форумах, конференциях и многих других мероприятиях.
          </p>
        </article>

      </div>
      <div className="mt-5"></div>
      {/* <Accordion className="" /> */}
      {/* <Corusel className=""/>
      3 */}
    </div>

  )
}
