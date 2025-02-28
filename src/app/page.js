"use client"
import Image from "next/image";
import { useState } from "react"

export default function Home() {
  const [input, setInput] = useState("")
  return (
    <div className="grid items-center justify-items-center min-h-screen gap-2 font-[family-name:var(--font-geist-sans)]">

      <header className="flex w-max">
        <div className="grid grid-flow-col m-5 space-x-2 rounded-full border border-solid border-black/[.08] dark:border-white/[.145] transition-colors flex items-center justify-center hover:bg-[#ADE8F4] dark:hover:bg-[#b8f1ff] hover:border-transparent text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 sm:min-w-44">
          <button className="px-5 rounded-xl bg-cyan-500 hover:bg-cyan-600">
            Заявка
          </button>
          <button className="px-5 rounded-xl bg-cyan-500 hover:bg-cyan-600">
            Об университете
          </button>
          <button className="px-5 rounded-xl bg-cyan-500 hover:bg-cyan-600">
            Материалы
          </button >
          <button className="px-5 rounded-xl bg-cyan-500 hover:bg-cyan-600">
            Проекты учеников
          </button >
          <input
            className="px-5 rounded-xl text-zinc-100 bg-cyan-800 hover:bg-cyan-900"
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Поиск"
          />
        </div>
      </header>

      <main className="grid grid-cols-2 w-screen h-200 overflow-hidden p-0">
      <div className="relative w-full h-full">
        <Image
          className="w-full h-200 object-cover"
          src="/img/09.03.03.png"
          alt="Left Image"
          width={180}
          height={38}
          priority
        />
        <div className="absolute inset-0 backdrop-blur-sm"></div>
      </div>

      <div className="relative w-full h-full">
        <Image
          className="w-full h-200 object-cover"
          src="/img/09.03.02.png"
          alt="Right Image"
          width={180}
          height={38}
          priority
        />
        <div className="absolute inset-0 backdrop-blur-sm"></div>
      </div>
    </main>

      <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center">
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://pspu.ru/?ysclid=m7oi0pn5dt184634939"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/globe.svg"
            alt="Globe icon"
            width={16}
            height={16}
          />
          Перейти на сайт университета →
        </a>
      </footer>

    </div>
  );
}
