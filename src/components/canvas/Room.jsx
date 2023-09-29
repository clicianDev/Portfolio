import React, { Suspense, useEffect, useState, useRef, } from "react";

import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF, Html, PerspectiveCamera } from "@react-three/drei";
import Lights from "./Lights";
import CanvasLoader from "../Loader";
import Me from "./Me";
import annotations from '../annotations.json'
import { VideoTexture } from "three";
import videoSource from "/video/tvplay.mp4";


function Annotations({ selected, gotoAnnotation }) {
  return (
    <>
      {annotations.map((a, i) => {
        return (
          <Html key={i} position={[a.lookAt.x, a.lookAt.y, a.lookAt.z]}>
            <svg height="34" width="34" transform="translate(-16 -16)" style={{ cursor: 'pointer' }}>
              <circle cx="17" cy="17" r="16" stroke="white" strokeWidth="2" fill="rgba(0,0,0,.66)" onClick={() => gotoAnnotation(i)} />
              <text x="12" y="22" fill="white" fontSize={17} fontFamily="monospace" style={{ pointerEvents: 'none' }}>
                {i + 1}
              </text>
            </svg>
            {a.description && i === selected && (
              <div id={'desc_' + i} className="annotationDescription text-white-100" dangerouslySetInnerHTML={{ __html: a.description }} />
            )}
          </Html>
        )
      })}
    </>
  )
}

function Animate({ controls, lerping, to, target }) {
  useFrame(({ camera }, delta) => {
    if (lerping) {
      camera.position.lerp(to, delta * 2)
     
    }
  })
}

const Room = ({ isMobile }) => {
  const room = useGLTF("./room/room.gltf");
  const mesh = useRef();
  const rotationSpeed = 0.05; // Adjust the rotation speed as needed
  const maxRotationY = 0.50; // Set the maximum Y-axis rotation value

  useFrame(() => {
    // Rotate on the Y-axis only if the current rotation is less than maxRotationY
    if (mesh.current.rotation.y < maxRotationY) {
      mesh.current.rotation.y += rotationSpeed;
    }
  });
  return (
    <mesh ref={mesh}>
      <primitive
        object={room.scene}
        // scale={isMobile ? 0.7 : 1}
        position={isMobile ? [0, 0,  0] : [0, 0, 0]}
        rotation={[0, 0, 0]}
      />
    </mesh>
  );
};

const PlainCube = () => {
  const video = document.createElement("video");
  video.src = videoSource;
  video.loop = true;
  video.autoplay = true;
  video.muted = true; // To avoid unwanted audio playback
  video.crossOrigin = "Anonymous";
  video.play();
  const [videoLoaded, setVideoLoaded] = useState(false);
  const videoTexture = new VideoTexture(video);
  const mesh = useRef();
  const rotationSpeed = 0.05; // Adjust the rotation speed as needed
  const maxRotationY = 0.50; // Set the maximum Y-axis rotation value

  useFrame(() => {
    // Rotate on the Y-axis only if the current rotation is less than maxRotationY
    if (mesh.current.rotation.y < maxRotationY) {
      mesh.current.rotation.y += rotationSpeed;
    }
  });
  useEffect(() => {
    const handleLoadedData = () => {
      setVideoLoaded(true);
    };

    video.addEventListener("loadeddata", handleLoadedData);

    return () => {
      video.removeEventListener("loadeddata", handleLoadedData);
    };
  }, []);

  if (!videoLoaded) {
    return null; // You might want to show a loading indicator here
  }


  return (
    <mesh ref={mesh} position={[-1.8, 1.25, -0.7]} scale={[0.01, 0.800, 1.5]}>
      <boxGeometry args={[1, 1, 1]} />
      <meshStandardMaterial map={videoTexture} />
    </mesh>
  );
};


const RoomCanvas = (props) => {
  const [isMobile, setIsMobile] = useState(false);
  const [pageId, setPageId ]= useState(0);
  const ref = useRef()
  const [lerping, setLerping] = useState(false)
  const [to, setTo] = useState()
  const [target, setTarget] = useState()
  const [selected, setSelected] = useState(-1)
  
  useEffect(() => {
    setPageId(props.pageId)
    },[props.pageId])
    
    
    useEffect(() => {
      if (pageId >= 0 && pageId < annotations.length) {
        gotoAnnotation(pageId);
      
      }
    }, [pageId]);
  
  
  function gotoAnnotation(idx) {
    setTo(annotations[idx].camPos)
    setTarget(annotations[idx].lookAt)
    setSelected(idx)
    setLerping(true)
  }
 
const handleLoad = (index) => {
  props.load(index);
  
}
  useEffect(() => {
    // Add a listener for changes to the screen size
    const mediaQuery = window.matchMedia("(max-width: 500px)");

    // Set the initial value of the `isMobile` state variable
    setIsMobile(mediaQuery.matches);

    // Define a callback function to handle changes to the media query
    const handleMediaQueryChange = (event) => {
      setIsMobile(event.matches);
    };

    // Add the callback function as a listener for changes to the media query
    mediaQuery.addEventListener("change", handleMediaQueryChange);

    // Remove the listener when the component is unmounted
    return () => {
      mediaQuery.removeEventListener("change", handleMediaQueryChange);
    };
  }, []);

  
  return (
    <Canvas
      shadows
      dpr={[1, 2]}
      camera={{ position: [10, 8, -12], fov: 25 }}
      gl={{ preserveDrawingBuffer: true }}
      onPointerDown={() => setLerping(true)} onWheel={() => setLerping(true)}
    >
      <Suspense fallback={<CanvasLoader  load={handleLoad}/>}>
        <OrbitControls 
          ref={ref}
           enableZoom={true}
            enableRotate={false}
        />
         <Annotations selected={selected} gotoAnnotation={gotoAnnotation} />
        <Animate controls={ref} lerping={lerping} to={to} target={target} />
     
        <Lights/>
        <Room isMobile={isMobile} />
        <Me isMobile={isMobile} 
         position={isMobile ? [0, 0,  0] : [1.5, 0, -1.1]}
        />
         <PlainCube />
      </Suspense>
      
      <Preload all />
    </Canvas>
  );
};

export default RoomCanvas;