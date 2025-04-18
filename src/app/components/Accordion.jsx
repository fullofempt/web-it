import React from 'react'
import { useState } from 'react'
import AccordionUI from './AccordionUI'

const Accordion = () => {
    const [index, setIndex] = useState(false)

    const data = [
        {
            id: 1,
            question: "1.	История видеоигровой индустрии",
            answer: "Введение в специальность. Изучишь историю появления видеоигр, познакомишься с играми прошлого и настоящего, освоишь основные термины и определения.",
        },
        {
            id: 2,
            question: "2.	Инструментальные средства разработки игр",
            answer:
                "Познакомишься с различными программами, которые помогут тебе в будущем разработать свою игру.",
        },
        {
            id: 3,
            question: "3.	Разработка трехмерной графики",
            answer:
                "Научишься создавать оптимизированные для игр 3D-модели: окружение, персонажи, риггинг, анимация, текстурирование.",
        },
    
        {
            id: 4,
            question: "4.	Дизайн игровых уровней",
            answer:
                "Научишься создавать игровые уровни, их архитектуру и компоновку объектов.",
        },

        {
            id: 5,
            question: "5.	Геймдизайн",
            answer:
                "Научишься проектировать игру, прорабатывать концепт, механики, геймплей своей будущей игры.",
        },

        {
            id: 6,
            question: "6.	Нарративный дизайн",
            answer:
                "Научишься создавать интересные истории, придумывать сюжет и персонажей, сплетать окружение и повествование.",
        },

        {
            id: 7,
            question: "7.	Проектирование и разработка компьютерных игр",
            answer:
                "Создашь прототип своей игры на игровом движке, подготовишь MVP.",
        },
        {
            id: 8,
            question: "8.	Технологии VR/AR",
            answer:
                "Научишься создавать миры в виртуальной и дополненной реальности с использованием VR-шлемов. ",
        },
        {
            id: 9,
            question: "9.	Спецпрактикум GameDev",
            answer:
                "Сделаешь свою игру и защитишь её как дипломную работу!",
        },
    ];

    return (
        <div className="flex justify-center">
            <div className="flex flex-col justify-center items-center mb-10 p-0 rounded-xl h-auto w-full max-w-8xl md:py-10 ">
                {data.map((data) => (
                    <AccordionUI
                        key={data.id}
                        title={data.question}
                        Id={data.id}
                        children={data.answer}
                        Index={index}
                        setIndex={setIndex}
                    />
                ))}
            </div>
        </div>
    );
}
export default Accordion;