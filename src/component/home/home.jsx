'use client';
import React, { useState } from 'react';
import WarpperContent from './topLetfContent/warpperContent';
import OverviewWarpper from './toprigthContent/OverviewWarpper';
import Product from './productAnalysis/product';
function Home({ }) {


  const [show, setShow] = useState(false)
  const subimtShow = (e) => {

  }

  return (


    <section className='flex m-[70px]'>

      <div className=' flex flex-wrap'>
        <WarpperContent />
        <OverviewWarpper />
        <Product/>
    
      </div>




    </section>



  );
}

export default Home;


