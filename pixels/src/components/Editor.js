import React, { useState } from 'react'
import '../styles/editor.scss'

export default function Editor() {
  const [panelWidth, setPanelWidth] = useState(16)
  const [panelHeight, setPanelHeight] = useState(16)
  const [hideOptions, setHideOptions] = useState(false)
  const [hideDrawingPanel, setHideDrawingPanel] = useState(true)
  const [buttonText, setButtonText] = useState('start drawing')
  const [selectedColor, setColor] = useState('#f44336')

  return (
    <div id="editor">
      <h1>Pixel Editor</h1>
      <h2>Enter Panel Dimensions</h2>
      <div id="options">
        <div className="option">
          <input
            type="number"
            className="panelInput"
            defaultValue="16"
            // onChange={}
          />
          <span>Width</span>
        </div>
      </div>
      <div id="options">
        <div className="option">
          <input
            type="number"
            className="panelInput"
            defaultValue="16"
            // onChange={}
          />
          <span>Height</span>
        </div>
      </div>

      <button className="button">Start Drawing</button>
    </div>
  )
}
