import { Shape } from './shapes/shape.js'

function newRenderer (shape: Shape): {draw: () => void} {
  return {
    draw () {
      const shapeType: string = shape.getType()
      const area: number = shape.computeArea()
      console.log(`${shapeType} drawn\n` + `Its area is ${area}`)
    }
  }
}

export { newRenderer }
