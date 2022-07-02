import React, { useState } from 'react'
import '../styles/editor.scss'
import { CirclePicker } from 'react-color'

export default function Editor() {
  const [panelWidth, setPanelWidth] = useState(16)
  const [panelHeight, setPanelHeight] = useState(16)
  const [hideOptions, setHideOptions] = useState(false)
  const [hideDrawingPanel, setHideDrawingPanel] = useState(true)
  const [buttonText, setButtonText] = useState('start drawing')
  const [selectedColor, setColor] = useState('#f44336')

  function initialise() {
    setHideOptions(!hideOptions)
    setHideDrawingPanel(!hideDrawingPanel)

    buttonText === 'start drawing'
      ? setButtonText('reset')
      : setButtonText('start drawing')
  }

  function changeColor(color) {
    setColor(color.hex)
  }

  return (
    <div id="editor">
      <h1>Pixel Editor</h1>
      {/* if hide drawing panel is true, want to show this title, but when clicked start drawing it'll hide  */}
      {hideDrawingPanel && <h2>Enter Panel Dimensions</h2>}
      {hideDrawingPanel && (
        <>
          <div id="options">
            <div className="option">
              <input
                type="number"
                className="panelInput"
                defaultValue={panelWidth}
                onChange={(e) => {
                  setPanelWidth(e.target.value)
                }}
              />
              <span>Width</span>
            </div>
          </div>
          <div id="options">
            <div className="option">
              <input
                type="number"
                className="panelInput"
                defaultValue={panelHeight}
                onChange={(e) => {
                  setPanelHeight(e.target.value)
                }}
              />
              <span>Height</span>
            </div>
          </div>
        </>
      )}

      <button onClick={initialise} className="button">
        {buttonText}
      </button>

      {hideOptions && (
        <CirclePicker color={selectedColor} onChangeComplete={changeColor} />
      )}
    </div>
  )
}
