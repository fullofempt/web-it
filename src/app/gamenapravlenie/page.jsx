"use client"
import Image from 'next/image'
import React from 'react'
import Header from '../UI/Header'
import Accordion from '../components/Accordion'

export default function Page() {
  return (
    <div className="relative min-h-screen bg-[#023e8a] ">
      <Header></Header>
      <div className="flex justify-start items-center p-5 0 ml-10 mr-10">
        <article className="max-w-5xl  rounded-lg p-6  shadow-xl ">
          <div className="float-right ml-4 mb-2 w-80 h-60 relative">
            <Image
              src="/img/imgProgramists.png"
              alt="Программисты"
              layout="fill"
              objectFit="cover"
              className="rounded-md shadow-xl shadow-blue-600"
            />
          </div>
          <p className="text-2xl text-white font-black">
            * Программа предназначена для подготовки специалистов в области разработки и сопровождения информационных систем с использованием игровых компьютерных технологий для решения широкого круга прикладных задач.
            <br /><br />
            * Уникальность программы – сочетание технологий, таких как: искусственный интеллект, компьютерная графика, виртуальная и смешанная реальность с практическими навыками проектирования, реализации и сопровождения игровых разработок для обучения, конструирования, реализации тренажеров и, конечно, для игр.
            <br /><br />
            * Направление дает не только сильную фундаментальную подготовку по информационным системам, но и содержит интересные профильные дисциплины, направленные на разработку компьютерных игр!
          </p>
        </article>

        <div>
          <div className="flex flex-col ">  
            <div className="inset-0 flex flex-col items-end justify-center mb-5">
              <h1 className="font-black text-5xl">Чего стоит ожидать?</h1>
            </div>
            <div className="flex justify-center items-center">
              <div className="ml-15 mb-2 w-245 h-120 relative">
                <Image
                  src="/img/imgProgramists.png"
                  alt="Программисты"
                  layout="fill"
                  objectFit="cover"
                  className="rounded-md shadow-2xl shadow-black "
                />
              </div>
            </div>
          </div>
        </div>
      </div>


      <div className="flex justify-end items-center p-5 ml-10 mr-10">

        <div className="flex flex-col ">
          <div className="inset-0 flex flex-col items-center justify-center mb-5">
            <h1 className="font-black text-5xl">Примеры разработанных игр на данном направлении</h1>
          </div>


          <div className="flex justify-center items-center">
            <div className="mr-15 mb-2 w-245 h-120 relative">
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

        <article className="max-w-5xl  rounded-lg p-6 shadow-xl">
          <div className="float-left mr-4 mb-2 w-120 h-80 relative shadow-xl shadow-blue-600">
            <Image
              src="/img/imgProgramists.png"
              alt="Программисты"
              layout="fill"
              objectFit="cover"
              className="rounded-md "
            />
          </div>

          <p className="text-2xl text-white text-right font-black">
            Программа предназначена для подготовки специалистов в области разработки и сопровождения информационных систем с использованием игровых компьютерных технологий для решения широкого круга прикладных задач.
            <br /><br />
            Уникальность программы – сочетание технологий, таких как: искусственный интеллект, компьютерная графика, виртуальная и смешанная реальность с практическими навыками проектирования, реализации и сопровождения игровых разработок для обучения, конструирования, реализации тренажеров и, конечно, для игр.
            <br /><br />
            Направление дает не только сильную фундаментальную подготовку по информационным системам, но и содержит интересные профильные дисциплины, направленные на разработку компьютерных игр!
          </p>
        </article>

      </div>
      <div className="mt-5"></div>
          <Accordion className=""/>
    </div>

  )
}
