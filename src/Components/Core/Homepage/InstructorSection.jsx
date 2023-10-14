import React from "react"
import instructor from "../../../assets/Images/Instructor.png"
import HighlightText from "./HighlightText";
import CTAButton from "./CTAButton";
import {AiOutlineArrowRight} from "react-icons/ai";

const InstructorSection = () => {
  return (
    <div className="mt-16">
      <div className="flex gap-20 items-center">

        <div className="w-[50%]">
            <img src={instructor}
            alt="instructor"
            className="shadow-[-20px_-20px_0px_0px_#f7fafc]"/>

        </div>
        <div className="w-[50%] flex flex-col gap-10">
            <div className="text-4xl font-semibold w-[50%]">
                Become an
                <HighlightText text={"Instructor"}/>
            </div>
            <div className="font-medium text-[16px] text-richblack-300 w-[80%]">
                Instructors from around the world teach millions of students on StudyNotion. We provide the tools and skills to teach what you love.
            </div>

            <div className="w-fit">
                <CTAButton active={true} linkto={"/signup"}>
                <div className="flex gap-2 items-center">
                        Start Learning Today
                    <AiOutlineArrowRight/>
                </div>
                </CTAButton>

            </div>
        </div>

      </div>
    </div>
  )
};

export default InstructorSection;
