import React from "react";
import { useState } from "react";
import Globe from "react-globe.gl";
import Button from "../components/Button"
const About = () => {
  const [hasCopied,setHasCopied]=useState(false)
  const handleCopy = () => {
    navigator.clipboard.writeText("ahgamasundar40@gmail.com")
    setHasCopied(true)
    setTimeout(() => {
      setHasCopied(false)
    
    },2000)
  }
  return (
    <section id="about" className="c-space my-20">
      <div className="grid xl:grid-cols-3 xl:grid-rows-6 md:grid-cols-2 grid-cols-1 gap-5 h-full">
        <div className="col-span-1 xl:row-span-3">
          <div className="grid-container">
            <img
              src="/assets/grid1.png"
              alt="grid-1"
              className="w-full sm:h-[276px] h-fit object-contain"
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
        <div className="xl:col-span-1 xl:row-span-3">
          <div className="grid-container">
            <img
              src="assets/grid2.png"
              className="w-full sm:h-[276px] h-fit object-contain"
            />
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
            <div className="rounded-3xl w-full sm:h-[326px] h-fit flex justify-center items-center">
              <Globe
                height={326}
                width={326}
                backgroundColor="rgba(0,0,0,0)"
                backgroundImageOpacity={0.5}
                showAtmosphere
                showGraticules
                globeImageUrl="//unpkg.com/three-globe/example/img/earth-night.jpg"
                bumpImageUrl="//unpkg.com/three-globe/example/img/earth-topology.png"
               
              />
            </div>
            <div>
              <p className="grid-headtext">
                Flexible and able to accommodate any time zone requirements.
              </p>
              <p className="grid-subtext">
                I'm based in India with remote work available
              </p><a href="#contact">
              <Button name="Contact Me"  isBeam containerClass="w-full mt-10" /></a>
            </div>
          </div>
        </div>
        <div className="xl:col-span-2 xl:row-span-3">
          <div className="grid-container">
            <img
              src="/assets/grid3.png"
              alt="grid-3"
              className="w-full sm:h-[266px] h-fit object-contain"
            />
            <div>
              <p className="grid-headtext">
                Passionate about building software and solving problems
              </p>
              <p className="grid-subtext">
                I enjoy creating efficient, scalable solutions and exploring new
                technologies to bring ideas to life. Always learning, always
                coding.
              </p>
            </div>
          </div>
        </div>
        <div className="xl:col-span-1 xl:row-span-2">
          <div className="grid-container">
            <img
              src="assets/grid4.png"
              alt="grid-4"
              className="w-full md:h-[126px] sm:h-[276px] h-fit object-cover sm:object-top"
            />
            <div className="space-y-2">
              <p className="grid-subtext text-center">Contact Me</p>
              <div className="copy-container" onClick={handleCopy}>
                <img src={hasCopied ? "assets/tick.svg" : "assets/copy.svg"} />
              </div>
              <p className="lg:text-xl md:text-xl font-medium text-gray_gradient text-white text-center  ">
                ahgamasundar40@gmail.com
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
