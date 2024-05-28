import React from "react";
import { footer } from "../constant";

const Footer = () => {
  return (
     <div className="mt-10 mx-auto">
      <div className="flex flex-wrap">
        {footer.map((foo, index) => (
          <div key={index} className="w-full sm:w-1/2 lg:w-1/3 p-2">
            <div className="p-10">
              <p className="text-xl font-semibold text-neutral-700 mb-12">
                {foo.title}
              </p>
              {/* <p className="mb-8">
                <span className="text-5xl mt-6 mr-2">{foo.price}</span>
              </p> */}
              <ul>
                {foo.features.map((features, index) => (
                //   <li key={index} className="mt-3 flex items-center">
                //     <span className="ml-2">{features}</span>
                //   </li>
                <li className="mt-4 flex items-center text-neutral-600 text-[14px]">
                        <a className="ml-2" href={index}>{features}</a>
                </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    <center className="text-black text-light py-4"><em><u>This site is made by Anjali 2024..</u></em></center>
    </div>

  );
};

export default Footer;
