import React from "react"
import {AiOutlineArrowRight} from "react-icons/ai";
import { Link } from "react-router-dom";
import HighlightText from "../Components/Core/Homepage/HighlightText";
import CTAButton from "../Components/Core/Homepage/CTAButton";
import Banner from "../assets/Images/banner.mp4";
import CodeBlocks from "../Components/Core/Homepage/CodeBlocks";
import TimeLineSection from "../Components/Core/Homepage/TimeLineSection";
import LearningLanguageSection from "../Components/Core/Homepage/LearningLanguageSection";
import InstructorSection from "../Components/Core/Homepage/InstructorSection";
import Footer from "../Components/Common/Footer";
import ExploreMore from "../Components/Core/Homepage/ExploreMore";
import ReviewSlider from "../Components/Common/ReviewSlider";




const Home = () => {
  return (
    <div>
        {/* {section-1} */}
        <div className="relative mx-auto flex flex-col w-11/12 items-center text-white
            justify-between max-w-maxContent gap-8">
            <Link to={"/signup"}>
                <div className=" group mt-16 p-1 mx-auto rounded-full bg-richblack-800 font-bold text-richblack-200
                transition=all duration-200 hover:scale-95 ">
                    <div className="flex items-center gap-2 rounded-full px-10 py-[5px] transition=all duration-200
                    group-hover:bg-richblack-900">
                        <p>Become an Instructor</p>
                        <AiOutlineArrowRight/>
                        
                    </div>
                </div>
            </Link>

            <div className="text-center text-4xl font-semibold mt-7">
                Empower Your Future With 
                <HighlightText text={"Coding Skills"}/>
            </div>
            <div className="w-[90%] text-center text-lg font-bold text-richblack-300 mt-4">
            With our online coding courses, you can learn at your own pace, from anywhere in the world, and get access to a wealth of resources, including hands-on projects, quizzes, and personalized feedback from instructors. 
            </div>

            <div className="flex gap-7 mt-8">
                <CTAButton active={true} linkto={"/signup"}>Learn More</CTAButton>
                <CTAButton active={false} linkto={"/login"}>Book a Demo</CTAButton>
            </div>
            
            <div className="w-[90%] mx-3 my-12 flex justify-center items-center
            shadow-[25px_25px_0px_0px_#f7fafc,0px_0px_40px_0px_#4fd1c5]">
                <video muted loop autoPlay className="">
                    <source src={Banner} type="video/mp4"/>
                </video>
            </div>

            {/* {code section 1} */}
            <div>
                <CodeBlocks
                position={"lg:flex-row"}
                heading={
                <div className="text-4xl font-semibold">
                    Unlock your
                    <HighlightText text={"coding potential"} /> with our online
                    courses.
                </div>
                }
                subheading={
                "Our courses are designed and taught by industry experts who have years of experience in coding and are passionate about sharing their knowledge with you."
                }
                ctabtn1={{
                btnText: "Try it Yourself",
                link: "/signup",
                active: true,
                }}
                ctabtn2={{
                btnText: "Learn More",
                link: "/signup",
                active: false,
                }}
                codeColor={"text-yellow-25"}
                codeblock={`<!DOCTYPE html>\n <html lang="en">\n<head>\n<title>This is myPage</title>\n</head>\n<body>\n<h1><a href="/">Header</a></h1>\n<nav> <a href="/one">One</a> <a href="/two">Two</a> <a href="/three">Three</a>\n</nav>\n</body>`}
                backgroundGradient={<div className="codeblock1 absolute"></div>}
            />
            </div>

            {/* Code Section 2 */}
            <div>
                <CodeBlocks
                    position={"lg:flex-row-reverse"}
                    heading={
                    <div className="w-[100%] text-4xl font-semibold lg:w-[50%]">
                        Start
                        <HighlightText text={"coding in seconds"} />
                    </div>
                    }
                    subheading={
                    "Go ahead, give it a try. Our hands-on learning environment means you'll be writing real code from your very first lesson."
                    }
                    ctabtn1={{
                    btnText: "Continue Lesson",
                    link: "/signup",
                    active: true,
                    }}
                    ctabtn2={{
                    btnText: "Learn More",
                    link: "/signup",
                    active: false,
                    }}
                    codeColor={"text-white"}
                    codeblock={`import React from "react";\n import CTAButton from "./Button";\nimport TypeAnimation from "react-type";\nimport { FaArrowRight } from "react-icons/fa";\n\nconst Home = () => {\nreturn (\n<div>Home</div>\n)\n}\nexport default Home;`}
                    backgroundGradient={<div className="codeblock2 absolute"></div>}
                />
            </div>
            <ExploreMore/>
        </div>
        {/* {section-2} */}
        <div className="bg-pure-greys-5 text-richblack-700 mt-10">
            <div className="homepage_bg h-[310px]">

                    <div className="w-11/12 max-w-maxContent flex items-center gap-5 mx-auto
                    flex-col justify-center">
                        <div className="h-[150px]"></div>
                        <div className="flex gap-7 text-white">
                            <CTAButton active={true} linkto={"/signup"}>
                                <div className="flex items-center gap-2">
                                    Explore Full Catalog
                                    <AiOutlineArrowRight/>
                                </div>
                            </CTAButton>
                            <CTAButton active={false} linkto={"/signup"}>
                                <div>
                                    Learn More
                                </div>

                            </CTAButton>
                        </div>

                    </div>
            </div>

            <div className="mx-auto w-11/12 max-w-maxContent flex flex-col items-center justify-between gap-7">
                    <div className="flex gap-5 mb-10 mt-[95px] justify-between">
                        <div className="text-4xl font-semibold w-[45%]">
                            Get the Skills you need for a
                            <HighlightText text={"Job that is in Demand"}/>
                        </div>
                        <div className="flex flex-col gap-10 w-[40%] items-start">
                            <div className="text-[16px]">
                            The modern StudyNotion is the dictates its own terms. Today, to be a competitive specialist requires more than professional skills.
                            </div>
                            <CTAButton active={true} linkto={"/signup"}>
                                Learn More
                            </CTAButton>

                        </div>

                    </div>

                <TimeLineSection/>
                <LearningLanguageSection/>
            </div>

        </div>
        {/* {section-3} */}
        <div className="w-11/12 mx-auto max-w-maxContent flex flex-col items-center justify-between gap-8
        bg-richblack-900 text-white">

            <InstructorSection/>

            <h2 className="text-center text-4xl font-semibold mt-10">Review from other Learners</h2>
            {/* Review Slider Here */}
            <ReviewSlider/>

        </div>


        {/* {Footer} */}
        <Footer/>

       
      
    </div>
  )
};

export default Home;