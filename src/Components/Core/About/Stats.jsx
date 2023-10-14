import React from "react"


const Stats = [
    {count:"5k", label:"Active Students"},
    {count:"10+", label:"Mentors"},
    {count:"200+", label:"Courses"},
    {count:"50+", label:"Awards"},
]

const StatsComponent = () => {
  return (
    <section>
      <div>
        <div className="flex">
          {
              Stats.map((stat,index)=>(
                
                  <div key={index}>
                    <h1>
                      {stat.count}
                    </h1>
                    <h2>
                      {stat.label}
                    </h2>
                  </div>
              )
                
              )
          }

        </div>
      </div>
        
      
    </section>
  )
};

export default StatsComponent;
