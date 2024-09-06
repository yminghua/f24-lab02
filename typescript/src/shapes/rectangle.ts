import { Shape } from './shape'

function newRectangle (width: number, height: number): Shape {
  return {
    getType: function (): string {
      return 'Rectangle'
    },

    computeArea: function (): number {
      return width * height
    }
  }
}

export { newRectangle }
