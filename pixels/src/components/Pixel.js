import React, { useState } from 'react'
import '../styles/pixel.scss'

export default function Pixel(props) {
  const { selectedColor } = props
  //coloring the pixel or having the default color of white
  const [pixelColor, setPixelColor] = useState('#fff')
  //using the oldColor when hovering over the pixel
  const [oldColor, setOldColor] = useState(pixelColor)
  //helper while switching the color on hover
  const [changeColor, setChangeColor] = useState(true)

  function applyColor() {
    setPixelColor(selectedColor)
    //prevents hover effects overriding the click event, color won't be changeable until we hover to another pixel
    //pixel color won't change without it
    setChangeColor(false)
  }

  function changeColorOnHover() {
    //setting old color to pixel color, making a reserved value so it knows which color to keep when you hover over another pixels
    setOldColor(pixelColor)
    setPixelColor(selectedColor)
  }

  function resetColor() {
    if (changeColor) {
      setPixelColor(oldColor)
    }
    setChangeColor(true)
    //checking if we can change the color back
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
