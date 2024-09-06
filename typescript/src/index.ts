import { newRenderer } from './renderer.js'
import { newCircle } from './shapes/circle.js'
import { newRectangle } from './shapes/rectangle.js'
import { Shape } from './shapes/shape.js'
import { newSquare } from './shapes/square.js'

const rectangle: Shape = newRectangle(2, 3)
const circle: Shape = newCircle(2)
const square: Shape = newSquare(4)

const rectangleRenderer = newRenderer(rectangle)
const circleRenderer = newRenderer(circle)
const squareRenderer = newRenderer(square)

rectangleRenderer.draw()
circleRenderer.draw()
squareRenderer.draw()
