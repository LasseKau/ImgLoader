import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import React, { useRef, useState, useEffect, useCallback } from 'react';
import { useTransition, animated, useSpring } from 'react-spring';
import UploadImages from "./components/image-upload.component";
import ReactDOM from 'react-dom';
//import './styles.css'

const AnimFeTurbulence = animated('feTurbulence')
const AnimFeDisplacementMap = animated('feDisplacementMap')

function App() {
  const [open, toggle] = useState(false)
  const { freq, scale, transform, opacity } = useSpring({
    reverse: open,
    from: { scale: 10, opacity: 0, transform: 'scale(0.9)', freq: '0.0175, 0.0' },
    to: { scale: 150, opacity: 1, transform: 'scale(1)', freq: '0.0, 0.0' },
    config: { duration: 3000 }
  })

  return (
    <div className="container">
      
      <h1>Add Image</h1>
      <div className="content">
      <UploadImages />
      </div>
    </div>
  );
}





export default App;
