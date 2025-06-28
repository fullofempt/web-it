import React from 'react';
import Image from "next/image";
import Link from 'next/link';
import routes from '../routes';

const MainPg = () => {
    return (
        <div className="">
            <main className="grid grid-cols-1 md:grid-cols-2 w-screen h-282 overflow-hidden">
                <div className="relative w-full h-full hover:scale-105 transition-transform duration-300">
                    <Image
                        className="w-full h-full object-cover"
                        src="/images/09.03.03.png"
                        alt="Left Image"
                        width={180}
                        height={38}
                        priority
                    />
                    <div className="absolute inset-0 backdrop-blur-sm"></div>

                    <div>
                        <div className="absolute inset-0 flex flex-col items-center justify-center text-white text-center p-4">
                            <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-bold mb-4">09.03.03</h1>
                            <p className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl mb-6">Прикладная информатика  <br />и системы искусственного интеллекта</p>

                            <Link
                                href={routes.prikladnapravlenieE}
                                className="px-6 py-2 text-2xl sm:text-3xl md:text-4xl mt-5 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors"
                            >
                                Узнать
                            </Link>
                        </div>
                    </div>
                </div>

                <div className="relative w-full h-full hover:scale-105 transition-transform duration-300">
                    <Image
                        className="w-full h-full object-cover "
                        src="/images/09.03.02.png"
                        alt="Right Image"
                        width={180}
                        height={38}
                        priority
                    />
                    <div className="absolute inset-0 backdrop-blur-sm"></div>
                    <div>
                        <div className="absolute inset-0 flex flex-col items-center justify-center text-white text-center p-4">
                            <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-bold mb-4">09.03.02</h1>
                            <p className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl mb-6">Информационные системы   <br />и разработка компьютерных игр</p>

                            <Link
                                href={routes.gamenapravlenieE}
                                className="px-6 py-2 text-2xl sm:text-3xl md:text-4xl mt-5 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors"
                            >
                                Узнать
                            </Link>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    )
}

export default MainPg;