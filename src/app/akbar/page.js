import React from "react";

const Akbar = ({showMain}) => {
console.log("hello", showMain)
  return (
    <section className='flex justify-end'>
    <div className=" w-full bg-blue-400  z-[-1]  m-[70px] border ring-0 ">
      <h1   >
        Welcome to my Next.js app!</h1>

      <p>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Excepturi aliquid cum dignissimos aliquam atque. Quo velit incidunt autem commodi, delectus illum neque soluta laudantium, iusto dolorum atque ab, alias facilis?
      </p>

   
    </div>
 
  </section>
  )
}
export default Akbar;
