import React from "react";

function Details(props) {
  return (
    <div>
      <section className="font-[SourceSans3] pt-14 pb-20 ">
        <div className="flex flex-col items-start gap-1 justify-between md:justify-around lg:flex-row ">
          <h2
            className={`text-[34px] font-black text-[#FFD700] pl-6 text-start sm:w-[80%] sm:mx-auto  lg:pl-16`}>
            {props.title} <br className="hidden lg:block" /> {props.br}
          </h2>
          
          <div className={`pl-6 lg:w-[${props.lgw}%]`}>
            <p className="pt-7 w-[95%]  sm:w-[80%] sm:mx-auto sm:pt-7 lg:w-[90%] lg:pt-1">
              {props.info}
            </p>

            <p className="pt-4 w-[95%] sm:w-[80%] sm:mx-auto lg:w-[90%] ">{props.details}</p>
        

            <div className="pt-10 sm:pt-5 sm:pl-16 md:pl-20 lg:pl-10 ">
              {props.list && props.list.map((items) => <li>{items}</li>)}
            </div>

            <p className="pt-8 sm:pl-14  md:pl-20  lg:pl-7 ">{props.moreInfo}</p>
            <p className="pt-10 sm:pl-14 md:pt-4   md:pl-20 lg:pl-7">{props.extraDetails}</p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Details;
