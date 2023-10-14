import React from "react"
import {BiSolidChat} from "react-icons/bi"
import {BsGlobeCentralSouthAsia} from "react-icons/bs"
import {IoCallSharp} from "react-icons/io5"
import ContactUsForm from "../Components/ContactUs/ContactUsForm";
import Footer from "../Components/Common/Footer";
import ReviewSlider from "../Components/Common/ReviewSlider";

const ContactUs = () => {
  return (
    <div className="mt-[80px]">
        {/* section-1 */}
        <div className="mx-auto w-11/12 max-w-maxContent flex justify-center gap-10">
            <div className="bg-richblack-800 text-richblack-100 pl-8 pr-20 py-8 max-h-[375px]">
                {/* icon section */}
                <div className="flex flex-col gap-8">
                    <div className="flex items-start gap-5 ">
                        <BiSolidChat className="mt-1 text-lg"/>
                        <div>
                            <h1 className="text-lg font-semibold">Chat on us</h1>
                            <p className="text-sm">Our friendly team is here to help.</p>
                            <button className="text-sm">@mail address</button>
                        </div>
                    </div>

                    <div className="flex items-start gap-5">
                        <BsGlobeCentralSouthAsia className="mt-1 text-lg"/>
                        <div>
                            <h1 className="text-lg font-semibold">Visit Us</h1>
                            <p className="text-sm">Come and say hello at our office HQ.</p>
                            <button className="text-sm">Here is the location/ address</button>
                        </div>
                    </div>

                    <div className="flex items-start gap-5">
                        <IoCallSharp className="mt-1 text-lg"/>
                        <div>
                            <h1 className="text-lg font-semibold">Call Us</h1>
                            <p className="text-sm">Mon - Fri From 8am to 5pm</p>
                            <button className="text-sm">+123 456 7890</button>
                        </div>
                    </div>
                </div>


            </div>

            {/* form */}
            <div className="w-[500px] ml-5">
                <h1 className="text-3xl text-richblack-5 font-bold">Got a Idea? We’ve got the skills. Let’s team up</h1>
                <p className="text-sm text-richblack-500 mt-1 mb-5">Tell us more about yourself and what you’re got in mind.</p>
                <ContactUsForm/>
            </div>
        </div>

        {/* section-2 */}
        <div className="w-11/12 flex flex-col items-center ml-10">
            <h1 className="text-4xl text-richblack-5 font-inter text-center mt-[100px] font-bold">
                Reviews from other learners</h1>
                <ReviewSlider />

        </div>

        {/* section-3 */}
        <Footer/>
      
    </div>
  )
};

export default ContactUs;
