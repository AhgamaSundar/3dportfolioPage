import React, { useRef } from "react";
import {Float, useGLTF } from "@react-three/drei";
import gsap from "gsap";

const ReactLogo=(props)=> {
  const { nodes, materials } = useGLTF("/models/react.glb");
  return (
    <Float floatIntensity={1} >
      <group {...props} scale={0.01} dispose={null}>
        <mesh
          geometry={nodes["React-Logo_Material002_0"].geometry}
          material={materials["Material.002"]}
          position={[0, 7.935, 18.102]}
          rotation={[0, 0, -Math.PI / 2]}
          scale={17}
        />
      </group>
    </Float>
  );
}

useGLTF.preload("/models/react.glb");

export default ReactLogo;