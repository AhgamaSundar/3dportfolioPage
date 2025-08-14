import { PerspectiveCamera } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";
import { Leva, useControls } from "leva";
import { calculateSizes } from "../constants/index.js";
import { useMediaQuery } from "react-responsive";
import CanvasLoader from "../components/CanvasLoader.jsx";
import HackerRoom from "../components/Hackerroom.jsx";
import Target from "../components/Target.jsx";
import ReactLogo from "../components/Reactlogo.jsx";
import Cube from "../components/Cube.jsx";
import Rings from "../components/Rings.jsx";
import HeroCamera from "../components/HeroCamera.jsx";
import Button from "../components/Button.jsx"

const Hero = () => {
  const isSmall = useMediaQuery({ maxWidth: 440 });
  const isTablet = useMediaQuery({ minWidth: 768, maxWidth: 1024 });
  const isMobile = useMediaQuery({ maxWidth: 768 });
  const sizes = calculateSizes(isSmall, isTablet, isMobile);
  // Leva controls for tweaking the DirectionalLight properties in real-time
  // const dlc = useControls("DirectionalLight", {
  //   positionX: { value: 0, min: -10, max: 10, step: 0.01 },
  //   positionY: { value: 0, min: -10, max: 10, step: 0.01 },
  //   positionZ: { value: 0, min: -10, max: 10, step: 0.01 },
  //   intensity: { value: 1, min: 0, max: 10, step: 0.01 },
  // });

  return (
    <section className="min-h-screen w-full flex flex-col  ">
      <div className="w-full mx-auto flex flex-col sm:mt-36 mt-20 c-space gap-3">
        <p className="sm:text-3xl text-xl text-white text-center font-medium font-generalsans">
          Hey ,I am Ahgama <span className="waving-hand">👋</span>
        </p>
        <p className="hero_tag text-gray_gradient">Trying to survive</p>
      </div>
      <div className="w-full h-full absolute inset-0">
        
        <Canvas className="w-full h-full">
          <Suspense fallback={<CanvasLoader />}>
            <HeroCamera isMobile={isMobile}>
              <HackerRoom
                scale={sizes.deskScale}
                position={sizes.deskPosition}
                rotation={[0.1, -Math.PI, 0]}
              />
            </HeroCamera>
            <group>
              <Target position={sizes.targetPosition} />
              <ReactLogo position={sizes.reactLogoPosition} />
              <Cube position={sizes.cubePosition} />
              <Rings position={sizes.ringPosition} />
            </group>
            <ambientLight intensity={0.5} />
            <directionalLight
              position={[-0.3, 0.24,0]}
              intensity={3.01}
            />

            <PerspectiveCamera makeDefault position={[0, 0, 20]} />
          </Suspense>
        </Canvas>
        
      </div>
      <div className="absolute bottom-7 left-0 right-0 w-full z-10 c-space" >
        <a href="#contact" className="w-fit">
          <Button name="Lets work together" isBeam containerClass="sm:w-fit w-full sm:min-w-96"></Button>
        </a>
      </div>
    </section>
  );
};

export default Hero;
