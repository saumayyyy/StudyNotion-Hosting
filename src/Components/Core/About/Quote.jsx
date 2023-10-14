import React from "react"
import HighlightText from "../Homepage/HighlightText";

const Quote = () => {
  return (
    <div className="text-white">

We are passionate about revolutionizing the way we learn. Our innovative platform 
<HighlightText text={"combines technology, "}/>
<span className="font-bold text-brown-200"> expertise,</span> 
and community to create an 
<span className="font-bold text-brown-400"> unparalleled educational experience.</span>
      
    </div>
  )
};

export default Quote;
