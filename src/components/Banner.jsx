import React from "react";
import { Canvas } from "@react-three/fiber";
import { useGLTF, Stage, PresentationControls } from "@react-three/drei";



function Model(props){
  const { scene } = useGLTF("/book.glb");
  return <primitive object={scene}{...props} />
}

const Banner = () => {
  return (
    <div className="row align-items-center  p-0" >
  <div className="col-6 " style={{  backgroundColor: "#588157", padding: "1rem" ,display: "flex", justifyContent: "center", alignItems: "center", height: "450px" }}>
    <p className="text" style={{ color:"white",alignItems:"center",fontSize:25, fontWeight:"bold"}}>Kitabein for life</p>
  </div>
  <div className="col-6 " style={{ backgroundColor: "#588157",   height: "450px"}}>
    <Canvas dpr={[1, 2]} shadows camera={{ fov: 45 }}>
      <color attach="background" args={["#588157"]}  />
      <PresentationControls speed={1.5} global zoom={0.5} polar={[-0.1, Math.PI / 4]}>
        <Stage environment="">
          <Model scale={0.01} />
        </Stage>
      </PresentationControls>
    </Canvas>
  </div>
</div>
  );
};

export default Banner;