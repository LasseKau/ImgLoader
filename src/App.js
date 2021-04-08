import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import React, { useRef, useState,} from 'react';
import { useTransition, animated, useSpring, config } from 'react-spring';
import UploadImages from "./components/image-upload.component";


import "@reach/dialog/styles.css";




  


export default function App() {
  //testing animations
  const props = useSpring({opacity: 1, from: { opacity: 0 },})
  
  return (
  
    <div className="container">
      <animated.h1 style={props}>Upload your images</animated.h1>
      <div className="content"> 
      <UploadImages />
      </div>

    </div>
  ); 
}






