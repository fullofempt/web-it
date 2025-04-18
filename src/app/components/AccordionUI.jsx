import React from 'react'
import { HiArrowCircleDown, HiX } from "react-icons/hi";

const AccordionUI = ({title, children, Id, Index, setIndex}) => {
    const handleSetIndex = (Id => Index !== Id && setIndex(Id));
    
  return (
    <>
    <div
      onClick={() => handleSetIndex(Id)}
      className="flex group float-left cursor-pointer w-3/4 mx-auto h-25 justify-between  items-center mt-2 rounded-4xl 
        bg-white hover:bg-[#aaaaaa] hover:shadow-lg focus:bg-black md:text-lg lg:text-2xl lg:h-20"
    >
      <div className="flex group cursor-pointer">
        <div className="text-black font-semibold pl-10 group-hover:text-white">
          {title}
        </div>
      </div>
      <div className="flex items-center justify-center pr-10 mt-2">
        {Index !== Id ? (
          <HiArrowCircleDown className="w-6 h-6 group-hover:text-white text-black" />
        ) : (
          <HiX className="w-6 h-6 group-hover:text-white text-black" />
        )}
      </div>
    </div>

    {Index === Id && (
      <div className="bg-[#aaaaaa] pl-5  font-semibold text-black w-3/4 h-auto  rounded-2xl p-4 border-3-4 mt-2 mb-2 
      whitespace-normal break-words overflow-wrap md:text-lg lg:text-xl">
        {children}
      </div>
    )}
  </>
  );
}
export default AccordionUI;