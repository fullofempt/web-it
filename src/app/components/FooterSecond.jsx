const FooterSecond = () => {
    // Массив данных для картинок-ссылок
    const imageLinks = [
        {
            id: 1,
            src: "/img/Bunkerdev.png",
            alt: "Bunkerdev",
        },
        {
            id: 2,
            src: "/img/gamedevperm.png",
            alt: "GamedevP",
        },
        {
            id: 3,
            src: "/img/morionn.png",
            alt: "Morion",
        },

        {
            id: 4,
            src: "/img/inkubator.png",
            alt: "Pii",
        },
        {
            id: 5,
            src: "/img/StoryGame.png",
            alt: "StoryGame",
        },
        {
            id: 6,
            src: "/img/Kator.png",
            alt: "Kator",
        }
    ];

    return (
        <div className="w-full">
            {/* Контейнер с адаптивными картинками */}
            <div className="w-full bg-black py-8">
                <h2 className="text-2xl md:text-4xl flex justify-center items-center font-extrabold mb-6 md:mb-10">
                    Наши Партнёры
                </h2>
                
                {/* Мобильная версия */}
                <div className="md:hidden flex flex-col items-center space-y-8 px-4">
                    {imageLinks.map((link) => (
                        <a
                            key={link.id}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="w-70 max-w-xs hover:opacity-75 transition-opacity"
                        >
                            <img 
                                src={link.src} 
                                alt={link.alt} 
                                className="w-full h-auto object-contain"
                            />
                        </a>
                    ))}
                </div>
                
                {/* Десктопная версия */}
                <div className="hidden md:flex justify-between items-center w-full max-w-screen-4xl mx-auto px-4 lg:px-8">
                    {imageLinks.map((link) => (
                        <a
                            key={link.id}
                            href={link.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex-1 flex justify-center hover:opacity-75 transition-opacity px-2 lg:px-4"
                        >
                            <img 
                                src={link.src} 
                                alt={link.alt} 
                                className="h-32 lg:h-40 w-auto object-contain max-w-full"
                                style={{ minWidth: '80px' }}
                            />
                        </a>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default FooterSecond;