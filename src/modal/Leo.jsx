import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";

export function Model(props) {
  const { nodes, materials } = useGLTF("/models/leo.glb");
  return (
    <group {...props} dispose={null}>
      <group name="a_statue_carved_of_co_0125231519_texturefbx" scale={0.01}>
        <mesh
          name="Mesh1_Mesh1004_Material001_0"
          castShadow
          receiveShadow
          geometry={nodes.Mesh1_Mesh1004_Material001_0.geometry}
          material={materials["Material.001"]}
          scale={100}
        />
      </group>
    </group>
  );
}
export default Model;

useGLTF.preload("/models/leo.glb");
