import React, { useState, useEffect, useRef } from 'react';
import { HiMenu } from "react-icons/hi";
import Link from 'next/link';
import routes from '../routes';

const Header = ({ input, setInput }) => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const menuRef = useRef(null);
    const buttonRef = useRef(null);

    const toggleMenu = () => {
        setIsMenuOpen((prev) => !prev);
    };

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (
                menuRef.current &&
                !menuRef.current.contains(event.target) &&
                buttonRef.current &&
                !buttonRef.current.contains(event.target)
            ) {
                setIsMenuOpen(false);
            }
        };
        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    return (
        <div className="relative z-50">
            <header className="flex w-full items-center justify-between p-2 relative bg-blue-900 shadow-md">
                {/* Burger Menu */}
                <button
                    ref={buttonRef}
                    onClick={toggleMenu}
                    className="p-2 rounded-full hover:bg-blue-600 transition-colors"
                >
                    <HiMenu className="text-2xl text-white" />
                </button>

                {/* Mobile Menu */}
                <div
                    ref={menuRef}
                    className={`absolute top-full left-0 mt-2 w-max h-max bg-blue-600 rounded-lg shadow-lg p-4 transition-transform duration-300 ease-in-out ${isMenuOpen ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-5 pointer-events-none'}`}
                    onMouseLeave={() => setIsMenuOpen(false)}
                >
                    <nav className="flex flex-col space-y-2">
                        <ul>
                            <li>
                                <Link href="/" legacyBehavior>
                                    <a className="block px-4 py-2 text-white hover:bg-blue-500 rounded-2xl">Прикладная информатика  <br />и системы искусственного интеллекта</a>
                                </Link>
                            </li>
                            <li>
                                <Link href={routes.gamenapravlenie} legacyBehavior>
                                    <a className="block px-4 py-2 text-white hover:bg-blue-500 rounded-2xl">Информационные системы   <br />и разработка компьютерных игр</a>
                                </Link>
                            </li>
                        </ul>
                    </nav>
                </div>

                <div className=" hidden lg:grid grid-cols-4 items-center space-x-5 ml-50 ">
                    <button className="px-5 rounded-xl  hover:bg-blue-600 text-white">
                        <Link href="https://www.youtube.com/watch?v=dQw4w9WgXcQ" legacyBehavior>
                        Заявка
                        </Link>
                    </button>
                    <button className="px-5 rounded-xl  hover:bg-blue-600 text-white">
                        <Link href="https://pspu.ru/about_the_university/" legacyBehavior>
                            Об университете
                        </Link>
                    </button>
                    <button className="px-5 rounded-xl  hover:bg-blue-600 text-white">
                        <Link href={routes.materials}>
                            Материалы
                        </Link>
                    </button>
                    <button className="px-5 rounded-xl hover:bg-blue-600 text-white">
                        <Link href={routes.projects}>
                            Проекты Студентов
                        </Link>
                    </button>
                </div>

                {/* Поиск-логин */}
                <div className="flex items-center space-x-5">
                    <input
                        className="hidden md:block px-3 py-2 h-6 w-40 rounded-xl text-white border-2 border-white hover:bg-blue-600 focus:outline-none"
                        type="text"
                        value={input}
                        onChange={(e) => setInput(e.target.value)}
                        placeholder="Поиск"
                    />
                    <button className="px-5 rounded-xl  hover:bg-blue-600 text-white">
                        <Link href={routes.login}>
                            Логин
                        </Link>
                    </button>
                </div>
            </header>
        </div>
    );
};

export default Header;
