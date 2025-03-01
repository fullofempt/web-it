import React, { useState, useEffect, useRef } from 'react';
import { HiMenu } from "react-icons/hi";
import Link from 'next/link';

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
            <header className="flex w-full items-center justify-between p-2 relative bg-white shadow-md">
                {/* Burger Menu */}
                <button
                    ref={buttonRef}
                    onClick={toggleMenu}
                    className="p-2 rounded-full hover:bg-[#7BE9FF] transition-colors"
                >
                    <HiMenu className="text-2xl text-black" />
                </button>

                {/* Mobile Menu */}
                <div 
                    ref={menuRef} 
                    className={`absolute top-full left-0 mt-2 w-max h-max bg-[#7BE9FF] rounded-lg shadow-lg p-4 transition-transform duration-300 ease-in-out ${isMenuOpen ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-5 pointer-events-none'}`}
                    onMouseLeave={() => setIsMenuOpen(false)}
                >
                    <nav className="flex flex-col space-y-2">
                        <ul>
                            <li>
                                <Link href="/" legacyBehavior>
                                    <a className="block px-4 py-2 text-gray-700 hover:bg-gray-100 rounded-2xl">Направление Прикладной Информатики</a>
                                </Link>
                            </li>
                            <li>
                                <Link href="/about" legacyBehavior>
                                    <a className="block px-4 py-2 text-gray-700 hover:bg-gray-100 rounded-2xl">Направление Геймификации и Дизайна</a>
                                </Link>
                            </li>
                        </ul>
                    </nav>
                </div>

                {/* Desktop and Tablet Buttons */}
                <div className="hidden md:flex justify-center items-center space-x-5 ml-65">
                    <button className="px-5 rounded-xl bg-[#ADE8F4] hover:bg-cyan-200 text-black">
                        Заявка
                    </button>
                    <button className="px-5 rounded-xl bg-[#ADE8F4] hover:bg-cyan-200 text-black">
                        Об университете
                    </button>
                    <button className="px-5 rounded-xl bg-[#ADE8F4] hover:bg-cyan-200 text-black">
                        Материалы
                    </button>
                    <button className="px-5 rounded-xl bg-[#ADE8F4] hover:bg-cyan-200 text-black">
                        Проекты учеников
                    </button>
                </div>

                {/* Search and Login */}
                <div className="flex items-center space-x-5">
                    <input
                        className="hidden md:block px-3 py-2 h-6 w-40 rounded-xl text-black bg-[#ADE8F4] hover:bg-cyan-200 focus:outline-none"
                        type="text"
                        value={input}
                        onChange={(e) => setInput(e.target.value)}
                        placeholder="Поиск"
                    />
                    <button className="px-5 rounded-xl bg-[#ADE8F4] hover:bg-cyan-200 text-black">
                        Логин
                    </button>
                </div>
            </header>
        </div>
    );
};

export default Header;
