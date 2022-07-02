import React, { useState } from 'react'
import '../styles/pixel.scss'

export default function Pixel(props) {
  const { selectedColor } = props

  const [pixelColor, setPixelColor] = useState('#fff')
  const [oldColor, setOldColor] = useState(pixelColor)
  const [changeColor, setChangeColor] = useState(true)

  function applyColor() {
    setPixelColor(selectedColor)
    setChangeColor(false)
  }

  function changeColorOnHover() {
    setOldColor(pixelColor)
    setPixelColor(selectedColor)
  }

  function resetColor() {
    if (changeColor) {
      setPixelColor(oldColor)
    }
    setChangeColor(true)
  }

  return (
    <div
      className="pixel"
      onClick={applyColor}
      onMouseEnter={changeColorOnHover}
      onMouseLeave={resetColor}
      style={{ backgroundColor: pixelColor }}
    ></div>
  )
}
