import React from 'react'
import { useState } from 'react'
import AccordionUI from './AccordionUI'

const Accordion = () => {
    const [index, setIndex] = useState(false)

    const data = [
        {
            id: 1,
            question: "Что ты будешь узнавать ?",
            answer: "блаблаблаблаблаблаблабла",
        },
        {
            id: 2,
            question: "Как дела ?",
            answer:
                "блаблаблаблаблаблаблаблаблаблаблаблаблаблаблаблаблаблаблаблааблаблаблаблаблаблаблаблловыралоывраолырваолырвоарыволарыволр  аблаблаблаблаблабла",
        },
        {
            id: 3,
            question: "What is art ?",
            answer:
                " a visual object or experience consciously created through an expression of skill or imagination.",
        },
    
        {
            id: 4,
            question: "What is art ?",
            answer:
                " a visual object or experience consciously created through an expression of skill or imagination.",
        },
    ];

    return (
        <div className="flex justify-center">
            <div className="flex flex-col justify-center items-center p-10 rounded-xl h-auto w-full max-w-8xl md:py-20 ">
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