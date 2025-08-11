import { PerspectiveCamera } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";
import { OrbitControls } from "three-stdlib";
import { Leva,useControls } from "leva";
import {useEffect} from "react";
import CanvasLoader  from "../components/CanvasLoader.jsx";
import HackerRoom from "../components/Hackerroom.jsx";
import { calculateSizes } from "../constants/index.js";
import { useMediaQuery } from "react-responsive";
const Hero = () => {
    const isSmall = useMediaQuery({ maxWidth: 440 });
     const isTablet = useMediaQuery({ minwidth:768,maxWidth: 1024 });
      const isMobile = useMediaQuery({ maxWidth: 768 });
    const sizes =calculateSizes(isSmall, isTablet, isMobile);
    const dlc = useControls('DirectionalLight',{
        positionX:{value:0, min:-10, max:10, step:0.01},
        positionY:{value:0, min:-10, max:10, step:0.01},
        positionZ:{value:0, min:-10, max:10, step:0.01},
        intensity:{value:1, min:0, max:10, step:0.01}
    });        
   
 
    return (
        <section className="min-h-screen w-full flex flex-col  " >
            <div className="w-full mx-auto flex flex-col sm:mt-36 mt-20 c-space gap-3">
                <p className="sm:text-3xl text-xl text-white text-center font-medium font-generalsans">Hey ,I am Ahgama <span className="waving-hand">👋</span></p>
                <p className="hero_tag text-gray_gradient">Trying to survive</p>
            </div>
            <div className="w-full h-full absolute inset-0"> 
                <Leva />
            <Canvas className="w-full h-full">
                <Suspense fallback={<CanvasLoader />}> 
               
                <HackerRoom  scale={sizes.deskScale} 
                position={sizes.deskPosition} 
                rotation={[0,-Math.PI,0]}/>
                <ambientLight intensity={1} />
                <directionalLight position={[dlc.positionX,dlc.positionY,dlc.positionZ]} intensity={dlc.intensity} />
                
                <PerspectiveCamera makeDefault position={[0, 0,20]   } />
                 </Suspense>

            </Canvas>
            
            </div>
            </section>
    );
}

export default Hero;