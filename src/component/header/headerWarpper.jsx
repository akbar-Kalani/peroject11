'use client'
import { Header } from "./header";
import { Navbar } from "../navbar/navbar";
import Home from "../home/home";
import { useState } from "react";

export const HeaderWrapper = () => {


  /*  const [isOpenNav, setIsOpenNav] = useState(false) */

  return (
    <section className=" flex  ">
     
      <Navbar />
      <Header />
    </section>
  )
}