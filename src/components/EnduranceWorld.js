import { Canvas } from '@react-three/fiber'
import { Suspense } from 'react'
import { Preload } from '@react-three/drei'

import { useStore } from '../state/useStore'

// THREE components
import Ship from './Ship'
import Skybox from './Skybox'
import Cubes from './Cubes'
import Pongs from './Pongs'
import Walls from './Walls'
import Effects from './Effects'

// State/dummy components
import KeyboardControls from './KeyboardControls'
import GameState from './GameState'
import GlobalColor from './GlobalColor'
import Music from './Music'
import Sound from './Sound'

// HTML components
import Overlay from './html/Overlay'
import Hud from './html/Hud'
import GameOverScreen from './html/GameOverScreen'


export default function EnduranceWorld({ color, bgColor }) {
  const directionalLight = useStore((s) => s.directionalLight)

  return (
    <>
      <Canvas gl={{ antialias: false, alpha: false }} mode="concurrent" dpr={[1, 1.5]} style={{ background: `${bgColor}` }}>
        <Suspense fallback={null}>
          <GameState />
          <Skybox />
          <directionalLight
            ref={directionalLight}
            intensity={3}
            position={[0, Math.PI, 0]}
          />
          <ambientLight intensity={0.1} />
          <Ship>
            {directionalLight.current && <primitive object={directionalLight.current.target} />}
          </Ship>
          <Walls />
          <Cubes />
          <Pongs />
          <KeyboardControls />
          <Effects />
          <GlobalColor />
          <Music />
          <Sound />
          <Preload all />
        </Suspense>
      </Canvas>
      <Hud />
      <GameOverScreen />
      <Overlay />
    </>
  )
}

