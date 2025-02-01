import React, { useEffect } from "react";
import { useGLTF } from "@react-three/drei";
import * as THREE from "three";

export function Model(props) {
  const { nodes, materials } = useGLTF("/models/leo.glb");
  useEffect(() => {
    Object.entries(materials).map((material) => {
      // these are the material names that can't be changed color
      if (
        material[0] !== "zFdeDaGNRwzccye" &&
        material[0] !== "ujsvqBWRMnqdwPx" &&
        material[0] !== "hUlRcbieVuIiOXG" &&
        material[0] !== "jlzuBkUzuJqgiAK" &&
        material[0] !== "xNrofRCqOXXHVZt"
      ) {
        material[1].color = new THREE.Color(props.color[0]);
      }
      material[1].needsUpdate = true;
    });
  }, [materials, props.color]);
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
