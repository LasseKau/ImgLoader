import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import React, { useRef, useState,} from 'react';
import { useTransition, animated, useSpring, config } from 'react-spring';
import UploadImages from "./components/image-upload.component";


import "@reach/dialog/styles.css";


export default function App() {

  return (
    <div className="container">
      <h1>Add Image</h1>
      <div className="content"> 
      <UploadImages />
      </div>

    </div>
  ); 
}






