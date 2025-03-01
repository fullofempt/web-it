import React, { useState, useEffect } from 'react';

const Footer = () => {
    const images = [
        { id: 1, src: '/img/crsl1.png', text: 'Экскурсия по университету “В ритме ПГГПУ”' },
        { id: 2, src: '/img/crsl2.png', text: 'Игра по информатике “Найти выход”' },
        { id: 3, src: '/img/crsl3.png', text: 'Новелла по сказу Бажова ”Голубая змейка”' },
        { id: 4, src: '/img/crsl4.png', text: 'Новелла по сказу Бажова ”Голубая змейка”' },

    ];

    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentImageIndex((prevIndex) => {
                // Переход к следующей группе
                if (prevIndex + 1 < Math.ceil(images.length / 3)) {
                    return prevIndex + 1;
                } else {
                    return 0; //  к первой группе
                }
            });
        }, 30000); // Смена слайдов каждые 3 секунды

        return () => clearInterval(interval);
    }, [images.length]);

    const getGroupedImages = () => {
        let groups = [];
        for (let i = 0; i < images.length; i += 3) {
            groups.push(images.slice(i, i + 3)); // Группировка по 3
        }
        return groups;
    };

    const groupedImages = getGroupedImages();

    return (
        <div>
            <footer className="flex w-full bg-gradient-to-t from-sky-500 to-indigo-500">
                <div className="flex justify-center w-full max-w-screen-lg mx-auto px-4 py-2">
                    <a
                        className="flex items-center hover:underline hover:underline-offset-4 font-black"
                        href="https://pspu.ru/?ysclid=m7oi0pn5dt184634939"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        Перейти на сайт университета →
                    </a>
                </div>
            </footer>
            <div className="flex justify-center items-center bg-sky-500 ">
                <h1 className="font-light mt-5">Проекты учеников</h1>
            </div>
            <div className="relative w-full overflow-hidden">
                <div
                    className="flex transition-transform duration-1000"
                    style={{ transform: `translateX(-${currentImageIndex * 100}%)` }}
                >
                    {groupedImages[currentImageIndex]?.map((item) => (
                        <div
                            className="w-full md:w-1/3 px-2 bg-gradient-to-t from-indigo-500 to-sky-500 flex justify-center items-center"
                            key={item.id}
                        >
                            <div className="flex flex-col items-center">
                                <img
                                    src={item.src}
                                    alt={`carousel image ${item.id}`}
                                    className="w-150 h-64 object-cover rounded-2xl "
                                />
                                <div className=" py-2 w-full text-center">
                                    <p className="text-white text-sm font-bold">{item.text}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Footer;
