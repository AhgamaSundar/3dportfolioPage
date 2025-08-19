import React, { useRef } from "react";
import { useGLTF, useVideoTexture } from "@react-three/drei";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const DemoComputer = (props) => {
  const group = useRef();
  const { nodes, materials } = useGLTF("/models/retrocomputer.glb");
  const videoTexture = useVideoTexture(props.txt);

  useGSAP(() => {
    gsap.from(group.current.rotation, {
      y: Math.PI / 2,
      duration: 1,
      ease: "power3.out",
    });
  }, [props.txt]); // ✅ depends on video source string

  return (
    <group ref={group} {...props} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube.geometry}
        material={materials["Material.006"]}
        position={[-14.948, -29.91, 0]}
        scale={[46.985, 30.252, 30.252]}
      />
      <group position={[0, 0.254, 0]}>
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
        >
          <meshBasicMaterial map={videoTexture} />
        </mesh>
      </group>
    </group>
  );
};

useGLTF.preload("/models/retrocomputer.glb");
export default DemoComputer;
