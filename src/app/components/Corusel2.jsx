import React, { useState, useEffect } from 'react';

const Corusel2 = () => {
    const images = [
        { id: 1, src: '/img/crsl21.png', text: 'Anothers Destiny' },
        { id: 2, src: '/img/crsl22.png', text: 'Последний день героя' },
        { id: 3, src: '/img/crsl23.png', text: 'Потерянный' },
        { id: 4, src: '/img/crsl23.png', text: 'Проект 4' },
        { id: 5, src: '/img/crsl22.png', text: 'Проект 5' },
        { id: 6, src: '/img/crsl21.png', text: 'Проект 6' },

    ];

    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const itemsPerPage = 3;
    const totalGroups = Math.ceil(images.length / itemsPerPage);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentImageIndex((prevIndex) => (prevIndex + 1) % totalGroups);
        }, 5000);

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

    return (<div>
        <div className="flex justify-center items-center bg-sky-700 ">
            <h1 className="font-bold text-3xl mb-10 mt-5">Игры с Геймджемов ▼</h1>
        </div>

        <div className="relative w-full overflow-hidden">
            <div
                className="flex transition-transform duration-1000"
                style={{ transform: `translateX(-${currentImageIndex * 100}%)` }}
            >
                {groupedImages.map((group, index) => (
                    <div className="flex w-full flex-shrink-0" key={index}>
                        {group.map((item) => (
                            <div
                                className="w-full md:w-1/3 px-2  bg-sky-700  flex justify-center items-center"
                                key={item.id}
                            >
                                <div className="flex flex-col items-center">
                                    <img
                                        src={item.src}
                                        alt={`carousel image ${item.id}`}
                                        className="w-150 h-64 object-cover rounded-2xl "
                                    />
                                    <div className="py-2 w-full text-center">
                                        <p className="text-white text-sm font-bold">{item.text}</p>
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

export default Corusel2;
