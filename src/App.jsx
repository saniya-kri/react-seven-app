import React, { useState } from "react";
import Navbar from "./components/Navbar/Navbar";
import Pricing from "./components/Pricing";
import Collabraters from "./components/Collabraters";
import Faq4 from "./components/Faq4";
import Footer from "./components/Footer";
import PricingTwo from "./components/PricingTwo";
import { Switch } from "antd";

// import Example from "./components/Example";

const App = () => {
  const [toggle, setToggle] = useState(false);

  const toggler = () => {
    toggle ? setToggle(false) : setToggle(true);
  };

  return (
    <>
      <Navbar />
      {/* <Example/> */}
      <div className="max-w-7xl  mx-auto pt-20 px-6">
        <div className="w-full mt-5">
            <div className="px-10 flex justify-center m-5">
            <p className="px-4 text-[#00b289]"><b>Yearly</b></p>
              <Switch className="bg-[#00b289] lg:text-2xl text-[15px]" onClick={toggler} />
              <p className="px-4 text-[#00b289]"><b>Monthly</b></p>
            </div>
            <div>{toggle ? <Pricing /> : <PricingTwo />}</div>
          </div>
        <Collabraters />
        <Faq4 />
        <Footer />
      </div>
    </>
  );
};

export default App;
