import React from "react";

import Logo1 from "../../../assets/TimeLineLogo/Logo1.svg";

import Logo2 from "../../../assets/TimeLineLogo/Logo2.svg";

import Logo3 from "../../../assets/TimeLineLogo/Logo3.svg";

import Logo4 from "../../../assets/TimeLineLogo/Logo4.svg";

import timeLineImage from "../../../assets/Images/TimelineImage.png";

const TimeLineSection = () => {




  const timeLine = [
    {
      Logo:Logo1,
      heading:"Leadership",
      Description:"Fully committed to the success company"
    },
    {
      Logo:Logo2,
      heading:"Responsibility",
      Description:"Students will always be our top priority"
    },
    {
      Logo:Logo3,
      heading:"Flexibility",
      Description:"The ability to switch is an important skills"
    },
    {
      Logo:Logo4,
      heading:"Solve the problem",
      Description:"Code your way to a solution"
    },
  ]


  return (
    <div>
      <div className="flex gap-15 items-center">
        <div className="w-[45%] flex flex-col gap-5">
          {
            timeLine.map((element,index)=>{
              return (
                <div className="flex gap-6" key={index}>
                  <div className="w-[50px] h-[50px] bg-white flex items-center">
                    <img src={element.Logo} alt="logo"/>
                  </div>
                  <div className="flex flex-col">
                    <h2 className="font-semibold text-[18px]">{element.heading}</h2>
                    <p className="text-base">{element.Description}</p>
                  </div>
                      
                </div>
              )
            })
          }</div>
          <div className="relative shadow-blue-200 shadow-[0px_0px_30px_0px]">
            
              <img src={timeLineImage} alt="err"
              className="shadow-white object-cover h-fit"/>

              <div className="absolute bg-caribbeangreen-700 flex text-white uppercase py-5
              left-[50%] translate-x-[-50%] translate-y-[-50%]">
                <div className="flex gap-5 items-center border-r-2 border-caribbeangreen-50 px-7">
                  <p className="text-3xl font-bold">10</p>
                  <p className="text-caribbeangreen-300 text-sm">Years of Experience</p>
                </div>
                <div className="flex gap-5 items-center px-7">
                  <p className="text-3xl font-bold">250</p>
                  <p className="text-caribbeangreen-300 text-sm">Types Of Courses</p>
                </div>
              </div>

          </div>
          
        
      </div>
    </div>
  )
};

export default TimeLineSection;
