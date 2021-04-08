import React, { useRef, Suspense, useState, useEffect } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
//import './styles.css'
import { Canvas, useFrame } from 'react-three-fiber'
import { EffectComposer, Noise, Glitch } from 'react-postprocessing'
import { BlendFunction } from 'postprocessing'


import UploadImages from "./components/image-upload.component";

function App() {
  return (
    <div className="container">
   
      <h4>Add Image</h4>

      <div className="content">
      <Canvas>

          <Suspense fallback={null}>
            <EffectComposer>
              <Glitch />
              <Noise blendFunction={BlendFunction.MULTIPLY} />
            </EffectComposer>
          </Suspense>
        </Canvas>
        <UploadImages />
      </div>
    </div>
    
  );
}

export default App;
