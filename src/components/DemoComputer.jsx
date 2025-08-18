import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";

const DemoComputer = (props) => {
  const { nodes, materials } = useGLTF("models/retrocomputer.glb");
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
      <mesh
        castShadow
        receiveShadow
        geometry={
          nodes.retro_computer_setup_retro_computer_setup_Mat_0_2.geometry
        }
        material={materials["Material.003"]}
      />
    </group>
  );
}



useGLTF.preload("models/retrocomputer.glb");
export default DemoComputer;
