import * as THREE from "three";
import React from "react";
import { useGLTF } from "@react-three/drei";
import { GLTF } from "three-stdlib";

type GLTFResult = GLTF & {
  nodes: {
    FK8Wipers_FK8BlackMatt_0: THREE.Mesh;
    FK8Windshield_FK8Windshield_0: THREE.Mesh;
    FK8WheelBrakeFtR_FK8RedGloss_0: THREE.Mesh;
    FK8WheelBrakeFtL_FK8RedGloss_0: THREE.Mesh;
    FK8WheelBrakeBkR_FK8RedGloss_0: THREE.Mesh;
    FK8WheelBrakeBkL_FK8RedGloss_0: THREE.Mesh;
    FK8WheelFtR_FK8BlackGloss_0: THREE.Mesh;
    FK8WheelFtR_FK8Red_0: THREE.Mesh;
    FK8WheelFtR_FK8Chrome_0: THREE.Mesh;
    FK8WheelFtR_FK8Tire_0: THREE.Mesh;
    FK8WheelFtR_FK8BrakeDisc_0: THREE.Mesh;
    FK8WheelFtR_FK8Brown_0: THREE.Mesh;
    FK8WheelFtL_FK8BlackGloss_0: THREE.Mesh;
    FK8WheelFtL_FK8Red_0: THREE.Mesh;
    FK8WheelFtL_FK8Chrome_0: THREE.Mesh;
    FK8WheelFtL_FK8Tire_0: THREE.Mesh;
    FK8WheelFtL_FK8BrakeDisc_0: THREE.Mesh;
    FK8WheelFtL_FK8Brown_0: THREE.Mesh;
    FK8WheelBkR_FK8BlackGloss_0: THREE.Mesh;
    FK8WheelBkR_FK8Red_0: THREE.Mesh;
    FK8WheelBkR_FK8Chrome_0: THREE.Mesh;
    FK8WheelBkR_FK8Tire_0: THREE.Mesh;
    FK8WheelBkR_FK8BrakeDisc_0: THREE.Mesh;
    FK8WheelBkR_FK8Brown_0: THREE.Mesh;
    FK8WheelBkL_FK8BlackGloss_0: THREE.Mesh;
    FK8WheelBkL_FK8Red_0: THREE.Mesh;
    FK8WheelBkL_FK8Chrome_0: THREE.Mesh;
    FK8WheelBkL_FK8Tire_0: THREE.Mesh;
    FK8WheelBkL_FK8BrakeDisc_0: THREE.Mesh;
    FK8WheelBkL_FK8Brown_0: THREE.Mesh;
    FK8TaillightGlassR_FK8HeadlightGlass_0: THREE.Mesh;
    FK8TaillightGlassL_FK8HeadlightGlass_0: THREE.Mesh;
    FK8TaillightR_FK8BlackMatt_0: THREE.Mesh;
    FK8TaillightR_FK8Taillight_0: THREE.Mesh;
    FK8TaillightR_FK8ReverseLight_0: THREE.Mesh;
    FK8TaillightR_FK8Brakelight_0: THREE.Mesh;
    FK8TaillightR_FK8SignalR_0: THREE.Mesh;
    FK8TaillightL_FK8BlackMatt_0: THREE.Mesh;
    FK8TaillightL_FK8Taillight_0: THREE.Mesh;
    FK8TaillightL_FK8SignalL_0: THREE.Mesh;
    FK8TaillightL_FK8ReverseLight_0: THREE.Mesh;
    FK8TaillightL_FK8Brakelight_0: THREE.Mesh;
    FK8TailgateGlass_FK8Windshield_0: THREE.Mesh;
    FK8Tailgate_FK8Paint_0: THREE.Mesh;
    FK8Tailgate_FK8BlackMatt_0: THREE.Mesh;
    FK8Tailgate_FK8Interior_0: THREE.Mesh;
    FK8Tailgate_FK8Badge_0: THREE.Mesh;
    FK8Tailgate_FK8Windshield_0: THREE.Mesh;
    FK8Tailgate_FK8Taillight_0: THREE.Mesh;
    FK8Tailgate_FK8Brakelight_0: THREE.Mesh;
    FK8Tailgate_FK8Headlight_0: THREE.Mesh;
    Fk8Steer_FK8Interior_0: THREE.Mesh;
    Fk8Steer_FK8Badge_0: THREE.Mesh;
    FK8Spoiler_FK8Paint_0: THREE.Mesh;
    FK8Spoiler_FK8BlackGloss_0: THREE.Mesh;
    FK8NeedleTacho_FK8Interiorlights_0: THREE.Mesh;
    FK8Hood_FK8Paint_0: THREE.Mesh;
    FK8Hood_FK8Engine_0: THREE.Mesh;
    FK8Hood_Material001_0: THREE.Mesh;
    FK8Hood_FK8BlackMatt_0: THREE.Mesh;
    FK8Hood_FK8Grille_0: THREE.Mesh;
    FK8HeadlightGlassR_FK8HeadlightGlass_0: THREE.Mesh;
    FK8HeadlightGlassL_FK8HeadlightGlass_0: THREE.Mesh;
    FK8HeadlightR_FK8BlackMatt_0: THREE.Mesh;
    FK8HeadlightR_FK8SignalR_0: THREE.Mesh;
    FK8HeadlightR_FK8RunningLight_0: THREE.Mesh;
    FK8HeadlightR_FK8Headlight_0: THREE.Mesh;
    FK8HeadlightR_FK8HighBeam_0: THREE.Mesh;
    FK8HeadlightL_FK8BlackMatt_0: THREE.Mesh;
    FK8HeadlightL_FK8SignalL_0: THREE.Mesh;
    FK8HeadlightL_FK8RunningLight_0: THREE.Mesh;
    FK8HeadlightL_FK8Headlight_0: THREE.Mesh;
    FK8HeadlightL_FK8HighBeam_0: THREE.Mesh;
    FK8FenderR_FK8Paint_0: THREE.Mesh;
    FK8FenderR_FK8BlackMatt_0: THREE.Mesh;
    FK8FenderR_FK8Grille_0: THREE.Mesh;
    FK8FenderL_FK8Paint_0: THREE.Mesh;
    FK8FenderL_FK8BlackMatt_0: THREE.Mesh;
    FK8FenderL_FK8Grille_0: THREE.Mesh;
    FK8DoorFtR_FK8Paint_0: THREE.Mesh;
    FK8DoorFtR_FK8Interior_0: THREE.Mesh;
    FK8DoorFtR_FK8BlackMatt_0: THREE.Mesh;
    FK8DoorFtR_FK8Grille_0: THREE.Mesh;
    FK8DoorFtR_FK8Windshield_0: THREE.Mesh;
    FK8DoorFtR_Material002_0: THREE.Mesh;
    FK8DoorFtR_FK8Carbon_0: THREE.Mesh;
    FK8DoorFtR_FK8Chrome_0: THREE.Mesh;
    FK8DoorFtL_FK8Paint_0: THREE.Mesh;
    FK8DoorFtL_FK8Interior_0: THREE.Mesh;
    FK8DoorFtL_Material004_0: THREE.Mesh;
    FK8DoorFtL_FK8BlackMatt_0: THREE.Mesh;
    FK8DoorFtL_FK8Windshield_0: THREE.Mesh;
    FK8DoorFtL_FK8Grille_0: THREE.Mesh;
    FK8DoorFtL_FK8Carbon_0: THREE.Mesh;
    FK8DoorFtL_FK8Chrome_0: THREE.Mesh;
    FK8DoorBkR_FK8Paint_0: THREE.Mesh;
    FK8DoorBkR_FK8Interior_0: THREE.Mesh;
    FK8DoorBkR_FK8BlackMatt_0: THREE.Mesh;
    FK8DoorBkR_FK8Windshield_0: THREE.Mesh;
    FK8DoorBkR_Material003_0: THREE.Mesh;
    FK8DoorBkR_FK8Grille_0: THREE.Mesh;
    FK8DoorBkL_FK8Paint_0: THREE.Mesh;
    FK8DoorBkL_FK8Interior_0: THREE.Mesh;
    FK8DoorBkL_FK8BlackMatt_0: THREE.Mesh;
    FK8DoorBkL_FK8Windshield_0: THREE.Mesh;
    FK8DoorBkL_Material005_0: THREE.Mesh;
    FK8DoorBkL_FK8Grille_0: THREE.Mesh;
    FK8BumperFt_FK8Paint_0: THREE.Mesh;
    FK8BumperFt_FK8BlackMatt_0: THREE.Mesh;
    FK8BumperFt_FK8Carbon_0: THREE.Mesh;
    FK8BumperFt_FK8Badge_0: THREE.Mesh;
    FK8BumperFt_FK8RedGloss_0: THREE.Mesh;
    FK8BumperFt_FK8HeadlightGlass_0: THREE.Mesh;
    FK8BumperFt_FK8Chrome_0: THREE.Mesh;
    FK8BumperFt_FK8Grille_0: THREE.Mesh;
    FK8BumperFt_FK8Headlight_0: THREE.Mesh;
    FK8BumperFt_FK8HighBeam_0: THREE.Mesh;
    FK8BumperBk_FK8Paint_0: THREE.Mesh;
    FK8BumperBk_FK8BlackMatt_0: THREE.Mesh;
    FK8BumperBk_FK8Carbon_0: THREE.Mesh;
    FK8BumperBk_FK8RedGloss_0: THREE.Mesh;
    FK8BumperBk_FK8HeadlightGlass_0: THREE.Mesh;
    FK8BumperBk_FK8Gray_0: THREE.Mesh;
    FK8BumperBk_FK8Grille_0: THREE.Mesh;
    FK8BumperBk_FK8Brakelight_0: THREE.Mesh;
    Fk8Body_FK8Paint_0: THREE.Mesh;
    Fk8Body_FK8Interior_0: THREE.Mesh;
    Fk8Body_FK8Engine_0: THREE.Mesh;
    Fk8Body_FK8Carbon_0: THREE.Mesh;
    Fk8Body_FK8BlackMatt_0: THREE.Mesh;
    Fk8Body_FK8Badge_0: THREE.Mesh;
    Fk8Body_FK8Red_0: THREE.Mesh;
    Fk8Body_FK8RedGloss_0: THREE.Mesh;
    Fk8Body_FK8Grille_0: THREE.Mesh;
    Fk8Body_FK8Interiorlights_0: THREE.Mesh;
    Fk8Body_FK8Chrome_0: THREE.Mesh;
  };
  materials: {
    ["FK8.BlackMatt"]: THREE.MeshPhysicalMaterial;
    ["FK8.Windshield"]: THREE.MeshStandardMaterial;
    ["FK8.RedGloss"]: THREE.MeshStandardMaterial;
    ["FK8.BlackGloss"]: THREE.MeshStandardMaterial;
    ["FK8.Red"]: THREE.MeshPhysicalMaterial;
    ["FK8.Chrome"]: THREE.MeshStandardMaterial;
    ["FK8.Tire"]: THREE.MeshPhysicalMaterial;
    ["FK8.BrakeDisc"]: THREE.MeshStandardMaterial;
    ["FK8.Brown"]: THREE.MeshStandardMaterial;
    ["FK8.HeadlightGlass"]: THREE.MeshStandardMaterial;
    ["FK8.Taillight"]: THREE.MeshStandardMaterial;
    ["FK8.ReverseLight"]: THREE.MeshStandardMaterial;
    ["FK8.Brakelight"]: THREE.MeshStandardMaterial;
    ["FK8.Signal.R"]: THREE.MeshStandardMaterial;
    ["FK8.Signal.L"]: THREE.MeshStandardMaterial;
    ["FK8.Paint"]: THREE.MeshPhysicalMaterial;
    ["FK8.Interior"]: THREE.MeshPhysicalMaterial;
    ["FK8.Badge"]: THREE.MeshStandardMaterial;
    ["FK8.Headlight"]: THREE.MeshStandardMaterial;
    ["FK8.Interiorlights"]: THREE.MeshStandardMaterial;
    ["FK8.Engine"]: THREE.MeshStandardMaterial;
    ["Material.001"]: THREE.MeshPhysicalMaterial;
    ["FK8.Grille"]: THREE.MeshPhysicalMaterial;
    ["FK8.RunningLight"]: THREE.MeshStandardMaterial;
    ["FK8.HighBeam"]: THREE.MeshStandardMaterial;
    ["Material.002"]: THREE.MeshStandardMaterial;
    ["FK8.Carbon"]: THREE.MeshStandardMaterial;
    ["Material.004"]: THREE.MeshPhysicalMaterial;
    ["Material.003"]: THREE.MeshStandardMaterial;
    ["Material.005"]: THREE.MeshStandardMaterial;
    ["FK8.Gray"]: THREE.MeshStandardMaterial;
  };
};

export default function Model(props: JSX.IntrinsicElements["group"]) {
  const { nodes, materials } = useGLTF(require('./modified_honda_civic.glb')) as GLTFResult;
  return (
    <group {...props} dispose={null} scale={1} position={[0,0,0]}>
      <group scale={0.01}>
        <group position={[-78.047, 33.521, 131.254]} scale={[-1, 1, 1]}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.FK8WheelFtR_FK8BlackGloss_0.geometry}
            material={materials["FK8.BlackGloss"]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.FK8WheelFtR_FK8Red_0.geometry}
            material={materials["FK8.Red"]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.FK8WheelFtR_FK8Chrome_0.geometry}
            material={materials["FK8.Chrome"]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.FK8WheelFtR_FK8Tire_0.geometry}
            material={materials["FK8.Tire"]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.FK8WheelFtR_FK8BrakeDisc_0.geometry}
            material={materials["FK8.BrakeDisc"]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.FK8WheelFtR_FK8Brown_0.geometry}
            material={materials["FK8.Brown"]}
          />
        </group>
        <group position={[78.047, 33.521, 131.254]}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.FK8WheelFtL_FK8BlackGloss_0.geometry}
            material={materials["FK8.BlackGloss"]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.FK8WheelFtL_FK8Red_0.geometry}
            material={materials["FK8.Red"]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.FK8WheelFtL_FK8Chrome_0.geometry}
            material={materials["FK8.Chrome"]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.FK8WheelFtL_FK8Tire_0.geometry}
            material={materials["FK8.Tire"]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.FK8WheelFtL_FK8BrakeDisc_0.geometry}
            material={materials["FK8.BrakeDisc"]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.FK8WheelFtL_FK8Brown_0.geometry}
            material={materials["FK8.Brown"]}
          />
        </group>
        <group position={[-78.047, 33.521, -127.12]} scale={[-1, 1, 1]}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.FK8WheelBkR_FK8BlackGloss_0.geometry}
            material={materials["FK8.BlackGloss"]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.FK8WheelBkR_FK8Red_0.geometry}
            material={materials["FK8.Red"]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.FK8WheelBkR_FK8Chrome_0.geometry}
            material={materials["FK8.Chrome"]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.FK8WheelBkR_FK8Tire_0.geometry}
            material={materials["FK8.Tire"]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.FK8WheelBkR_FK8BrakeDisc_0.geometry}
            material={materials["FK8.BrakeDisc"]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.FK8WheelBkR_FK8Brown_0.geometry}
            material={materials["FK8.Brown"]}
          />
        </group>
        <group position={[78.047, 33.521, -127.12]}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.FK8WheelBkL_FK8BlackGloss_0.geometry}
            material={materials["FK8.BlackGloss"]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.FK8WheelBkL_FK8Red_0.geometry}
            material={materials["FK8.Red"]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.FK8WheelBkL_FK8Chrome_0.geometry}
            material={materials["FK8.Chrome"]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.FK8WheelBkL_FK8Tire_0.geometry}
            material={materials["FK8.Tire"]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.FK8WheelBkL_FK8BrakeDisc_0.geometry}
            material={materials["FK8.BrakeDisc"]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.FK8WheelBkL_FK8Brown_0.geometry}
            material={materials["FK8.Brown"]}
          />
        </group>
        <group position={[-68.554, 90.236, -181.482]}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.FK8TaillightR_FK8BlackMatt_0.geometry}
            material={materials["FK8.BlackMatt"]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.FK8TaillightR_FK8Taillight_0.geometry}
            material={materials["FK8.Taillight"]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.FK8TaillightR_FK8ReverseLight_0.geometry}
            material={materials["FK8.ReverseLight"]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.FK8TaillightR_FK8Brakelight_0.geometry}
            material={materials["FK8.Brakelight"]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.FK8TaillightR_FK8SignalR_0.geometry}
            material={materials["FK8.Signal.R"]}
          />
        </group>
        <group position={[68.543, 90.218, -181.493]}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.FK8TaillightL_FK8BlackMatt_0.geometry}
            material={materials["FK8.BlackMatt"]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.FK8TaillightL_FK8Taillight_0.geometry}
            material={materials["FK8.Taillight"]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.FK8TaillightL_FK8SignalL_0.geometry}
            material={materials["FK8.Signal.L"]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.FK8TaillightL_FK8ReverseLight_0.geometry}
            material={materials["FK8.ReverseLight"]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.FK8TaillightL_FK8Brakelight_0.geometry}
            material={materials["FK8.Brakelight"]}
          />
        </group>
        <group position={[1.06, 102.578, -173.593]}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.FK8Tailgate_FK8Paint_0.geometry}
            material={materials["FK8.Paint"]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.FK8Tailgate_FK8BlackMatt_0.geometry}
            material={materials["FK8.BlackMatt"]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.FK8Tailgate_FK8Interior_0.geometry}
            material={materials["FK8.Interior"]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.FK8Tailgate_FK8Badge_0.geometry}
            material={materials["FK8.Badge"]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.FK8Tailgate_FK8Windshield_0.geometry}
            material={materials["FK8.Windshield"]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.FK8Tailgate_FK8Taillight_0.geometry}
            material={materials["FK8.Taillight"]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.FK8Tailgate_FK8Brakelight_0.geometry}
            material={materials["FK8.Brakelight"]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.FK8Tailgate_FK8Headlight_0.geometry}
            material={materials["FK8.Headlight"]}
          />
        </group>
        <group position={[35.602, 85.973, 40.124]} rotation={[-1.213, 0, 0]}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Fk8Steer_FK8Interior_0.geometry}
            material={materials["FK8.Interior"]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Fk8Steer_FK8Badge_0.geometry}
            material={materials["FK8.Badge"]}
          />
        </group>
        <group position={[-0.046, 121.966, -186.375]}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.FK8Spoiler_FK8Paint_0.geometry}
            material={materials["FK8.Paint"]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.FK8Spoiler_FK8BlackGloss_0.geometry}
            material={materials["FK8.BlackGloss"]}
          />
        </group>
        <group position={[-3.189, 88.317, 145.371]}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.FK8Hood_FK8Paint_0.geometry}
            material={materials["FK8.Paint"]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.FK8Hood_FK8Engine_0.geometry}
            material={materials["FK8.Engine"]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.FK8Hood_Material001_0.geometry}
            material={materials["Material.001"]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.FK8Hood_FK8BlackMatt_0.geometry}
            material={materials["FK8.BlackMatt"]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.FK8Hood_FK8Grille_0.geometry}
            material={materials["FK8.Grille"]}
          />
        </group>
        <group position={[-59.816, 68.543, 186.193]}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.FK8HeadlightR_FK8BlackMatt_0.geometry}
            material={materials["FK8.BlackMatt"]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.FK8HeadlightR_FK8SignalR_0.geometry}
            material={materials["FK8.Signal.R"]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.FK8HeadlightR_FK8RunningLight_0.geometry}
            material={materials["FK8.RunningLight"]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.FK8HeadlightR_FK8Headlight_0.geometry}
            material={materials["FK8.Headlight"]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.FK8HeadlightR_FK8HighBeam_0.geometry}
            material={materials["FK8.HighBeam"]}
          />
        </group>
        <group position={[59.816, 68.543, 186.193]}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.FK8HeadlightL_FK8BlackMatt_0.geometry}
            material={materials["FK8.BlackMatt"]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.FK8HeadlightL_FK8SignalL_0.geometry}
            material={materials["FK8.Signal.L"]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.FK8HeadlightL_FK8RunningLight_0.geometry}
            material={materials["FK8.RunningLight"]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.FK8HeadlightL_FK8Headlight_0.geometry}
            material={materials["FK8.Headlight"]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.FK8HeadlightL_FK8HighBeam_0.geometry}
            material={materials["FK8.HighBeam"]}
          />
        </group>
        <group position={[-85.75, 66.822, 101.322]}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.FK8FenderR_FK8Paint_0.geometry}
            material={materials["FK8.Paint"]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.FK8FenderR_FK8BlackMatt_0.geometry}
            material={materials["FK8.BlackMatt"]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.FK8FenderR_FK8Grille_0.geometry}
            material={materials["FK8.Grille"]}
          />
        </group>
        <group position={[85.75, 66.822, 101.322]}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.FK8FenderL_FK8Paint_0.geometry}
            material={materials["FK8.Paint"]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.FK8FenderL_FK8BlackMatt_0.geometry}
            material={materials["FK8.BlackMatt"]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.FK8FenderL_FK8Grille_0.geometry}
            material={materials["FK8.Grille"]}
          />
        </group>
        <group position={[-75.679, 85.646, 36.169]}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.FK8DoorFtR_FK8Paint_0.geometry}
            material={materials["FK8.Paint"]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.FK8DoorFtR_FK8Interior_0.geometry}
            material={materials["FK8.Interior"]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.FK8DoorFtR_FK8BlackMatt_0.geometry}
            material={materials["FK8.BlackMatt"]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.FK8DoorFtR_FK8Grille_0.geometry}
            material={materials["FK8.Grille"]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.FK8DoorFtR_FK8Windshield_0.geometry}
            material={materials["FK8.Windshield"]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.FK8DoorFtR_Material002_0.geometry}
            material={materials["Material.002"]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.FK8DoorFtR_FK8Carbon_0.geometry}
            material={materials["FK8.Carbon"]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.FK8DoorFtR_FK8Chrome_0.geometry}
            material={materials["FK8.Chrome"]}
          />
        </group>
        <group position={[75.862, 85.462, 35.784]}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.FK8DoorFtL_FK8Paint_0.geometry}
            material={materials["FK8.Paint"]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.FK8DoorFtL_FK8Interior_0.geometry}
            material={materials["FK8.Interior"]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.FK8DoorFtL_Material004_0.geometry}
            material={materials["Material.004"]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.FK8DoorFtL_FK8BlackMatt_0.geometry}
            material={materials["FK8.BlackMatt"]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.FK8DoorFtL_FK8Windshield_0.geometry}
            material={materials["FK8.Windshield"]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.FK8DoorFtL_FK8Grille_0.geometry}
            material={materials["FK8.Grille"]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.FK8DoorFtL_FK8Carbon_0.geometry}
            material={materials["FK8.Carbon"]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.FK8DoorFtL_FK8Chrome_0.geometry}
            material={materials["FK8.Chrome"]}
          />
        </group>
        <group position={[-73.267, 85.054, -61.456]}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.FK8DoorBkR_FK8Paint_0.geometry}
            material={materials["FK8.Paint"]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.FK8DoorBkR_FK8Interior_0.geometry}
            material={materials["FK8.Interior"]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.FK8DoorBkR_FK8BlackMatt_0.geometry}
            material={materials["FK8.BlackMatt"]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.FK8DoorBkR_FK8Windshield_0.geometry}
            material={materials["FK8.Windshield"]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.FK8DoorBkR_Material003_0.geometry}
            material={materials["Material.003"]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.FK8DoorBkR_FK8Grille_0.geometry}
            material={materials["FK8.Grille"]}
          />
        </group>
        <group position={[73.254, 84.843, -61.426]}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.FK8DoorBkL_FK8Paint_0.geometry}
            material={materials["FK8.Paint"]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.FK8DoorBkL_FK8Interior_0.geometry}
            material={materials["FK8.Interior"]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.FK8DoorBkL_FK8BlackMatt_0.geometry}
            material={materials["FK8.BlackMatt"]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.FK8DoorBkL_FK8Windshield_0.geometry}
            material={materials["FK8.Windshield"]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.FK8DoorBkL_Material005_0.geometry}
            material={materials["Material.005"]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.FK8DoorBkL_FK8Grille_0.geometry}
            material={materials["FK8.Grille"]}
          />
        </group>
        <group position={[0.656, 47.766, 199.572]}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.FK8BumperFt_FK8Paint_0.geometry}
            material={materials["FK8.Paint"]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.FK8BumperFt_FK8BlackMatt_0.geometry}
            material={materials["FK8.BlackMatt"]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.FK8BumperFt_FK8Carbon_0.geometry}
            material={materials["FK8.Carbon"]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.FK8BumperFt_FK8Badge_0.geometry}
            material={materials["FK8.Badge"]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.FK8BumperFt_FK8RedGloss_0.geometry}
            material={materials["FK8.RedGloss"]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.FK8BumperFt_FK8HeadlightGlass_0.geometry}
            material={materials["FK8.HeadlightGlass"]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.FK8BumperFt_FK8Chrome_0.geometry}
            material={materials["FK8.Chrome"]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.FK8BumperFt_FK8Grille_0.geometry}
            material={materials["FK8.Grille"]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.FK8BumperFt_FK8Headlight_0.geometry}
            material={materials["FK8.Headlight"]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.FK8BumperFt_FK8HighBeam_0.geometry}
            material={materials["FK8.HighBeam"]}
          />
        </group>
        <group position={[0.058, 46.828, -197.483]}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.FK8BumperBk_FK8Paint_0.geometry}
            material={materials["FK8.Paint"]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.FK8BumperBk_FK8BlackMatt_0.geometry}
            material={materials["FK8.BlackMatt"]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.FK8BumperBk_FK8Carbon_0.geometry}
            material={materials["FK8.Carbon"]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.FK8BumperBk_FK8RedGloss_0.geometry}
            material={materials["FK8.RedGloss"]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.FK8BumperBk_FK8HeadlightGlass_0.geometry}
            material={materials["FK8.HeadlightGlass"]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.FK8BumperBk_FK8Gray_0.geometry}
            material={materials["FK8.Gray"]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.FK8BumperBk_FK8Grille_0.geometry}
            material={materials["FK8.Grille"]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.FK8BumperBk_FK8Brakelight_0.geometry}
            material={materials["FK8.Brakelight"]}
          />
        </group>
        <group position={[1.676, 80.72, 51.613]}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Fk8Body_FK8Paint_0.geometry}
            material={materials["FK8.Paint"]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Fk8Body_FK8Interior_0.geometry}
            material={materials["FK8.Interior"]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Fk8Body_FK8Engine_0.geometry}
            material={materials["FK8.Engine"]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Fk8Body_FK8Carbon_0.geometry}
            material={materials["FK8.Carbon"]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Fk8Body_FK8BlackMatt_0.geometry}
            material={materials["FK8.BlackMatt"]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Fk8Body_FK8Badge_0.geometry}
            material={materials["FK8.Badge"]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Fk8Body_FK8Red_0.geometry}
            material={materials["FK8.Red"]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Fk8Body_FK8RedGloss_0.geometry}
            material={materials["FK8.RedGloss"]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Fk8Body_FK8Grille_0.geometry}
            material={materials["FK8.Grille"]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Fk8Body_FK8Interiorlights_0.geometry}
            material={materials["FK8.Interiorlights"]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Fk8Body_FK8Chrome_0.geometry}
            material={materials["FK8.Chrome"]}
          />
        </group>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.FK8Wipers_FK8BlackMatt_0.geometry}
          material={materials["FK8.BlackMatt"]}
          position={[-0.751, 95.093, 109.242]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.FK8Windshield_FK8Windshield_0.geometry}
          material={materials["FK8.Windshield"]}
          position={[-0.492, 110.932, 71.405]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.FK8WheelBrakeFtR_FK8RedGloss_0.geometry}
          material={materials["FK8.RedGloss"]}
          position={[-80.512, 32.581, 144.87]}
          scale={[-1, 1, 1]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.FK8WheelBrakeFtL_FK8RedGloss_0.geometry}
          material={materials["FK8.RedGloss"]}
          position={[80.512, 32.581, 144.87]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.FK8WheelBrakeBkR_FK8RedGloss_0.geometry}
          material={materials["FK8.RedGloss"]}
          position={[-77.901, 39.944, -143.796]}
          scale={[-1, 1, 1]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.FK8WheelBrakeBkL_FK8RedGloss_0.geometry}
          material={materials["FK8.RedGloss"]}
          position={[77.901, 39.944, -143.796]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.FK8TaillightGlassR_FK8HeadlightGlass_0.geometry}
          material={materials["FK8.HeadlightGlass"]}
          position={[-69.55, 91.909, -181.111]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.FK8TaillightGlassL_FK8HeadlightGlass_0.geometry}
          material={materials["FK8.HeadlightGlass"]}
          position={[69.55, 91.909, -181.111]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.FK8TailgateGlass_FK8Windshield_0.geometry}
          material={materials["FK8.Windshield"]}
          position={[0, 112.396, -171.032]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.FK8NeedleTacho_FK8Interiorlights_0.geometry}
          material={materials["FK8.Interiorlights"]}
          position={[41.123, 87.18, 64.439]}
          rotation={[-0.794, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.FK8HeadlightGlassR_FK8HeadlightGlass_0.geometry}
          material={materials["FK8.HeadlightGlass"]}
          position={[-62.717, 69.453, 188.498]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.FK8HeadlightGlassL_FK8HeadlightGlass_0.geometry}
          material={materials["FK8.HeadlightGlass"]}
          position={[62.717, 69.453, 188.498]}
        />
      </group>
    </group>
  );
}

useGLTF.preload(require('./modified_honda_civic.glb'));