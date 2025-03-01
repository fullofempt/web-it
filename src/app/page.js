"use client"
import { useState } from "react"
import Header from "./UI/header";
import MainPg from "./UI/MainPg";
import Footer from "./UI/Footer";

export default function Home() {
  const [input, setInput] = useState("")
  return (
    <div className="min-h-screen overflow-x-hidden">
      <Header input={input}/>
      <MainPg/>
      <Footer/>
    </div >
  );
}
