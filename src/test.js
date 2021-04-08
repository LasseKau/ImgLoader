
import React, { useRef, Suspense, useState, useEffect } from 'react'
import { Canvas, useFrame } from 'react-three-fiber'
import { EffectComposer, Noise, Glitch } from 'react-postprocessing'
import { BlendFunction } from 'postprocessing'


const Box = () => {
  const ref = useRef()

  useFrame(state => {
    const time = state.clock.getElapsedTime()
    ref.current.rotation.x = Math.sin(time / 4)
    ref.current.rotation.y = Math.sin(time / 2)
  })
  console.log("Boxtest");
  return (
    <mesh ref={ref}>
      <boxGeometry args={[1, 1, 1]} attach="geometry" />
      <meshBasicMaterial color="red" attach="material" />
    </mesh>
  )
}

export default function Effects() {
  return (
    <>
      <div className="effect">
        <Canvas>
          <Box />

          <Suspense fallback={null}>
            <EffectComposer>
              <Glitch />
              <Noise blendFunction={BlendFunction.MULTIPLY} />
            </EffectComposer>
          </Suspense>
        </Canvas>
      </div>
    </>
  )
}
