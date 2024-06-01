import React, { useRef } from "react";
import {
  MeshTransmissionMaterial,
  useGLTF,
  Text,
  OrbitControls,
} from "@react-three/drei";
import { useFrame, useThree } from "@react-three/fiber";

export default function Model() {
  const { nodes } = useGLTF("/medias/torrus.glb");
  const { viewport } = useThree();
  const torus = useRef(null);

  useFrame(() => {
    torus.current.rotation.x += 0.02;
  });

  return (
    <group scale={viewport.width / 3.5}>
      <OrbitControls
        enablePan={true}
        enableZoom={true}
        enableRotate
        enableDamping
      />
      <Text
        font={"/fonts/PPNeueMontreal-Bold.otf"}
        position={[0, 0, -1]}
        fontSize={0.5}
        color="white"
        anchorX="center"
        anchorY="middle"
      >
        Hey there!
      </Text>
      <Text
        font={"/fonts/PPNeueMontreal-Bold.otf"}
        position={[0, -0.5, -1]}
        fontSize={0.5}
        color="white"
        anchorX="center"
        anchorY="middle"
      >
        Im Xeven
      </Text>
      <mesh ref={torus} {...nodes.Torus002}>
        <MeshTransmissionMaterial
          thickness={0.2}
          roughness={0}
          transmission={1}
          ior={1.2}
          chromaticAberration={0.16}
          backside={true}
        />
      </mesh>
    </group>
  );
}
