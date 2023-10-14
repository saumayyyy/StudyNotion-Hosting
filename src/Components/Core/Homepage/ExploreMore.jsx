import React, { useState } from "react"
import { HomePageExplore } from "../../../data/homepage-explore";
import HighlightText from "./HighlightText";
import CourseCard from "./CourseCard";


const ExploreMore = () => {
    const tabsName = [
            "Free",
            "New to coding",
            "Most popular",
            "Skills paths",
            "Career paths",
        ];
   
    const [currentTab,setCurrentTab] = useState(tabsName[0]);
    const [courses,setCourses] = useState(HomePageExplore[0].courses);
    const [currentCard,setCurrentCard] = useState(HomePageExplore[0].courses[0].heading);


    const setMyCards = (value)=>{
        setCurrentTab(value);
        const result = HomePageExplore.filter((course)=> course.tag === value);
        setCourses(result[0].courses);
        setCurrentCard(result[0].courses[0].heading);
    }

  return (
    <div>
        <div className="text-4xl font-semibold text-center">
            Unlock the
            <HighlightText text={"Power of code"}/>

        </div>
        <p className="text-center text-richblack-300 text-md mt-3">
            Learn to build anything you can imagine
        </p>

        <div className="mt-5 flex rounded-full bg-richblack-800 mb-5 border border-richblack-700
        px-1 py-1">
            {
                tabsName.map((element,index)=>{
                    return(
                        <div key={index}
                        onClick={()=>setMyCards(element)}
                        className={`text-[16px] flex items-center gap-2 
                        ${currentTab === element?("bg-richblack-900 text-richblack-5")
                        :("text-richblack-200")} rounded-full transition-all duration-200 cursor-pointer
                        hover:ring-richblack-900 hover:text-richblack-5 px-7 py-2`}>
                            {element}
                        </div>
                    )
                })
            }
        </div>
        <div className="lg:h-[150px]"> 

        {/*course cards ka group*/}
        <div className="absolute flex gap-10 justify-center w-full right-3 mt-5">
            {
                courses.map((element,index)=>{
                    return(
                        <CourseCard key={index}
                        cardData = {element}
                        currentCard = {currentCard}
                        setCurrentCard = {setCurrentCard}/>
                    )
                })
            }
        </div>


        </div>
      
    </div>
  )
};

export default ExploreMore;

