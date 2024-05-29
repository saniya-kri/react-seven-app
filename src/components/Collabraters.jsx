import React, { useRef } from "react";
import { collaborate } from "../constant";
import { useGSAP } from "@gsap/react";
import gsap from "gsap"

const Collabraters = () => {

  // useGSAP(()=>{
  //   gsap.from(".boxFirst",{
  //     y : 100,
  //     duration:2,
  //   })
  // })

  const boxRef = useRef()

  useGSAP(()=>{
    gsap.to(boxRef.current,{
      x : -10,
      delay:0.2,
      duration:2
    })
  })

  // const box2Ref = useRef()

  // useGSAP(()=>{
  //   gsap.to(box2Ref.current,{
  //     x : 20,
  //     delay:0.5,
  //     duration:2
  //   })
  // })

  return (
    <div className="mt-20">
      <div className="text-center lg:text-3xl md:text-2xl font-medium text-[20px] px-5 mt-5 text-neutral-700">
        <h1>Super charge your work with add-ons</h1>
      </div>
      <div className="flex flex-col lg:my-20 my-5 lg:w-10/2  w-full mx-auto space-y-5">
        {collaborate.map((partners, index) => (
          <div key={index} className="w-full mx-auto flex justify-between mt-5 boxFirst rounded-lg shadow-xl py-10 px-10">
            <div className="flex flex-col">
              <div key={index} className="text-2xl font-semibold py-2">
                {partners.heading}
              </div>
              <div className="text-[14px] text-neutral-700">
                {partners.desc}
              </div>
            </div>
            <div className="lg:text-3xl pl-10 text-[20px] font-semibold text-neutral-700 mt-10">
              {partners.pay}
            </div>
          </div>
        ))}
      </div>
      <div className="lg:w-9/12 w-full mx-auto rounded-md bg-[#f2faff] flex space-x-8    lg:justify-between justify-evenly py-10 lg:flex-nowrap flex-wrap">   
     <div className="lg:w-8/12 lg:pl-20 text-4xl text-center text-neutral-700 font-semibold w-full mt-5 lg:text-left">
       <p>It’s <span className="text-[#00b289]">your</span> business.</p>
       <p>We’re here to help it grow.</p>
      </div>
      <div className="lg:w-4/12 w-full mt-6 text-center">
        <button ref={boxRef} className="mt-4 text-[13px] mr-8 font-bold text-white py-2 px-3 bg-[#00b289] rounded-sm">START FREE</button>
      </div>

     </div>
    </div>
  );
};

export default Collabraters;
