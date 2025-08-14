import React from "react";

const About = () => {
  return (
    <section className="c-space my-20">
      <div className="grid xl:grid-cols-3 xl:grid-rows-6 md:grid-cols-2 grid-cols-1 gap-5 h-full">
        <div className="col-span-1 xl-row-span-3">
          <div className="grid-container">
            <img
              src="/assets/grid1.png"
              alt="grid-1"
              className="w-full sm:h-[276] h-fit object-contain"
            />
            <div>
              <p className="grid-headtext">Hi , Im Ahgama</p>
              <p className="grid-subtext">
                I am a self-taught developer with domain knowledge across
                diverse fields. I can bring any idea to life in the most
                efficient and creative way possible.
              </p>
            </div>
          </div>
        </div>
        <div className="col-span-1 xl:row-span-2">
          <div className="grid-container">
            <img src="/assets/grid2.png" className="w-full  sm:w-[276px] h-fit object-contain" />
            <div>
              <p className="grid-headtext">Tech Stack</p>
              <p className="grid-subtext">
                I specialize in Python, React, and JavaScript, and bring
                additional expertise in Docker, Linux, and diverse domain areas
                to every project I take on
              </p>
            </div>
          </div>
        </div>
        <div className="col-span-1 xl:row-span-4">
            <div className="grid-container">
            <div className="rounded-3xl w-full sm-h[326px] h-fit flex justify-center items-center">
              
              </div>
            </div>
        </div>
        </div>
    </section>
  );
};

export default About;
