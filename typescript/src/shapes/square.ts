import { Shape } from './shape'

function newSquare (sideLen: number): Shape {
  return {
    getType: function (): string {
      return 'Square'
    },

    computeArea: function (): number {
      return sideLen * sideLen
    }
  }
}

export { newSquare }
