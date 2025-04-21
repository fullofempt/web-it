import React, { useState, useEffect } from 'react';

const Corusel = () => {
    const images = [
        { id: 1, src: '/img/Anothers Destiny.png' },
        { id: 2, src: '/img/Последний день героя.png' },
        { id: 3, src: '/img/Потерянный.png', },
        { id: 4, src: '/img/Anothers Destiny.png' },
        { id: 5, src: '/img/Последний день героя.png' },
        { id: 6, src: '/img/Потерянный.png', },
    ];

    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const itemsPerPage = 1;
    const totalGroups = Math.ceil(images.length / itemsPerPage);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentImageIndex((prevIndex) => (prevIndex + 1) % totalGroups);
        }, 20000);

        return () => clearInterval(interval);
    }, [totalGroups]);

    // Группировка по 3 (Пофиксить +)
    const getGroupedImages = () => {
        let groups = [];
        for (let i = 0; i < images.length; i += itemsPerPage) {
            groups.push(images.slice(i, i + itemsPerPage));
        }
        return groups;
    };

    const groupedImages = getGroupedImages();

    return (
    <div className='bg-black '>
        <div className="flex justify-center items-center mb-2">
            <h1 className=" font-black text-white text-2xl mt-5 md:text-3xl">Проекты с Геймджемов ▼</h1>
        </div>

        <div className="relative w-full bg-black overflow-hidden">
            <div
                className="flex transition-transform duration-4000"
                style={{ transform: `translateX(-${currentImageIndex * 100}%)` }}
            >
                {groupedImages.map((group, index) => (
                    <div className="flex w-full flex-shrink-0" key={index}>
                        {group.map((item) => (
                            <div
                                className="w-full md:w-max px-2  mt-2 flex justify-center items-center"
                                key={item.id}
                            >
                                <div className="flex flex-col items-center">
                                    <img
                                        src={item.src}
                                        alt={`carousel image ${item.id}`}
                                        className=" object-cover rounded-2xl "
                                    />
                                    <div className="py-2 w-full text-center">
                                        <p className="text-black text-sm font-bold">{item.text}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                ))}
            </div>
        </div>
    </div>
    )
}

export default Corusel;
