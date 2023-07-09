'use client';
import Search from "./search";
import ChatTop from "./in-ch-st";
import LeftHeader from "./leftHeader";
export const Header = () => {





    return(
         <>
        <section className="flex  bg-[#050C17] fixed right-0 w-full h-[80px]  ">

         <Search/>
         <ChatTop/>
         <LeftHeader/>
        </section>

         </>
    )
}