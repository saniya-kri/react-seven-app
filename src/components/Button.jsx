import React from "react";

const Button = () => {
  return (
    <div className="flex space-x-4">
      <div>
        <button className=" text-black border-[#00b289] hover:text-white hover:bg-[#00b289] transition-all duration-500 ease-in-out border-2 px-3 py-[6px] rounded-md lg:text-[13px] font-medium uppercase">
          Log in
        </button>
      </div>
      <div>
        <button className="bg-[#00b289] hover:bg-[#309880] transition-all duration-500 ease-in-out text-white  px-3 py-2 rounded-md font-medium uppercase lg:text-[13px]">
          Start free
        </button>
      </div>
    </div>
  );
};

export default Button;
