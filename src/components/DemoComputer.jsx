import React, { useRef } from "react";
import { useGLTF, useVideoTexture } from "@react-three/drei";

const DemoComputer = (props) => {
    const { nodes, materials } = useGLTF("models/retrocomputer.glb");
    const text = useVideoTexture(props.txt);
  return (
    <group {...props} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={
          nodes.retro_computer_setup_retro_computer_setup_Mat_0_1.geometry
        }
        material={materials.retro_computer_setup_Mat}
          />
          {console.log(props.txt)}
      <mesh
        castShadow
        receiveShadow
        geometry={
          nodes.retro_computer_setup_retro_computer_setup_Mat_0_2.geometry
        }
       
          >
             
      <meshBasicMaterial map={text} /></mesh>
    </group>
  );
}



useGLTF.preload("models/retrocomputer.glb");
export default DemoComputer;
