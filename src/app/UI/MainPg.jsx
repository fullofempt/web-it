import React from 'react'
import Image from "next/image";

const MainPg = () => {
    return (
        <div className="">
            <main className="grid grid-cols-1 md:grid-cols-2 w-screen h-220 overflow-hidden">
                <div className="relative w-full h-full">
                    <Image
                        className="w-full h-full object-cover"
                        src="/img/09.03.03.png"
                        alt="Left Image"
                        width={180}
                        height={38}
                        priority
                    />
                    <div className="absolute inset-0 backdrop-blur-sm"></div>

                    <div>
                        <div className="absolute inset-0 flex flex-col items-center justify-center text-white text-center p-4">
                            <h1 className="text-4xl sm:text-6xl md:text-8xl font-bold mb-4">09.03.03</h1>
                            <p className="text-3xl sm:text-4xl md:text-5xl mb-6">Прикладная <br /> Информатика</p>
                            <a
                                href="https://pspu.ru/?ysclid=m7oi0pn5dt184634939"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="px-6 py-2 text-2xl sm:text-3xl md:text-4xl mt-5 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors"
                            >
                                Узнать
                            </a>
                        </div>
                    </div>
                </div>

                <div className="relative w-full h-full">
                    <Image
                        className="w-full h-full object-cover"
                        src="/img/09.03.02.png"
                        alt="Right Image"
                        width={180}
                        height={38}
                        priority
                    />
                    <div className="absolute inset-0 backdrop-blur-sm"></div>
                    <div>
                        <div className="absolute inset-0 flex flex-col items-center justify-center text-white text-center p-4">
                            <h1 className="text-4xl sm:text-6xl md:text-8xl font-bold mb-4">09.03.02</h1>
                            <p className="text-3xl sm:text-4xl md:text-5xl mb-6">Информационные системы <br />и технологии</p>
                            <a
                                href="https://pspu.ru/?ysclid=m7oi0pn5dt184634939"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="px-6 py-2 text-2xl sm:text-3xl md:text-4xl mt-5 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors"
                            >
                                Узнать
                            </a>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    )
}

export default MainPg;
