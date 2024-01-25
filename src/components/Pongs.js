import { Object3D, Vector3 } from 'three'
import { useRef, useMemo } from 'react'
import { useFrame } from '@react-three/fiber'

import { CIRCLE_CUBE_AMOUNT, CIRCLE_CUBE_SIZE, PLANE_SIZE, COLORS, WALL_RADIUS, LEVEL_SIZE, LEFT_BOUND, RIGHT_BOUND } from '../constants'
import { useStore, mutation } from '../state/useStore'

import randomInRange from '../util/randomInRange'
import distance2D from '../util/distance2D'

const negativeBound = LEFT_BOUND + WALL_RADIUS / 2
const positiveBound = RIGHT_BOUND - WALL_RADIUS / 2
const YOUR_SPEED_PARAMETER = 50;

export default function InstancedPongs() {
  const mesh = useRef()
  const material = useRef()

  const ship = useStore(s => s.ship)
  const level = useStore(s => s.level)
  const gameStarted = useStore(s => s.gameStarted);

  const dummy = useMemo(() => new Object3D(), [])
  const cubes = useMemo(() => {
    // Setup initial cube positions
    const temp = []
    for (let i = 0; i < CIRCLE_CUBE_AMOUNT; i++) {
      const x = randomInRange(negativeBound, positiveBound)
      const y = 10
      const z = -900 + randomInRange(-400, 400)

      temp.push({ x, y, z })
    }
    return temp
  }, [])

  const diamondStart = useMemo(() => -(level * PLANE_SIZE * LEVEL_SIZE) - PLANE_SIZE * (LEVEL_SIZE - 2.6), [level])
  const diamondEnd = useMemo(() => -(level * PLANE_SIZE * LEVEL_SIZE) - PLANE_SIZE * (LEVEL_SIZE), [level])

  useFrame((state, delta) => {
    let isOutsideDiamond = false
    if (ship.current) {
      if (ship.current.position.z > diamondStart || ship.current.position.z < diamondEnd) {
        isOutsideDiamond = true
      }
    }

    cubes.forEach((cube, i) => {
      if (ship.current) {
        const direction = new Vector3(
          ship.current.position.x - cube.x,
          0,
          ship.current.position.z - cube.z
        ).normalize()

        
        if (gameStarted)  {
          cube.z += direction.z * delta * YOUR_SPEED_PARAMETER
        }

        // Check for collision with ship
        const distanceToShip = distance2D(ship.current.position.x, ship.current.position.z, cube.x, cube.z)
        if (distanceToShip < 12) {
          mutation.gameSpeed = 0
          mutation.gameOver = true
        }

        // Reset position if the circle is too far from the ship
        if (cube.z - ship.current.position.z > 15) {
          if (isOutsideDiamond) {
            cube.z = ship.current.position.z - PLANE_SIZE + randomInRange(-200, 0)
            cube.y = -CIRCLE_CUBE_SIZE
            cube.x = randomInRange(negativeBound, positiveBound)
          } else {
            cube.z = ship.current.position.z - (PLANE_SIZE * 3.1) + randomInRange(-200, 0)
            cube.y = -CIRCLE_CUBE_SIZE
            cube.x = randomInRange(negativeBound, positiveBound)
          }
        }

        // Move circle upward
        if (cube.y < CIRCLE_CUBE_SIZE / 2) {
          if (cube.y + delta * 100 > CIRCLE_CUBE_SIZE / 2) {
            cube.y = CIRCLE_CUBE_SIZE / 2
          } else {
            cube.y += delta * 100
          }
        }
      }

      material.current.color = mutation.globalColor

      dummy.position.set(cube.x, cube.y, cube.z)

      // apply changes to dummy and to the instanced matrix
      dummy.updateMatrix()
      mesh.current.setMatrixAt(i, dummy.matrix)
    })

    // THREE to draw the updated matrix
    mesh.current.instanceMatrix.needsUpdate = true
  })

  return (
    <instancedMesh ref={mesh} args={[null, null, CIRCLE_CUBE_AMOUNT]}>
      <circleBufferGeometry args={[CIRCLE_CUBE_SIZE, CIRCLE_CUBE_SIZE, CIRCLE_CUBE_SIZE]} />
      <meshBasicMaterial ref={material} color={COLORS[2].three} />
    </instancedMesh>
  )
}