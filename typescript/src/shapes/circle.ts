import { Shape } from './shape'

function newCircle (radius: number): Shape {
  return {
    getType: function (): string {
      return 'Circle'
    },

    computeArea: function (): number {
      return Math.PI * radius * radius
    }
  }
}

export { newCircle }
