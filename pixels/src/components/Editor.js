import React, { useState } from 'react'
import '../styles/editor.scss'
import { CirclePicker } from 'react-color'
import DrawingPanel from './DrawingPanel'

export default function Editor() {
  // controls inputs of width and height in state
  const [panelWidth, setPanelWidth] = useState(16)
  const [panelHeight, setPanelHeight] = useState(16)
  //hiding the panel options/input when you start drawing
  const [hideOptions, setHideOptions] = useState(false)
  //hiding the drawing panel, when start drawing is clicked the state withh change to false which will show the panel
  const [hideDrawingPanel, setHideDrawingPanel] = useState(true)
  //reuse the button text to flip between start drawing and reset
  const [buttonText, setButtonText] = useState('start drawing')
  //setting the color for colorpicker, default first color for the color picker
  const [selectedColor, setColor] = useState('#f44336')

  function initialise() {
    //called on click
    //when initialise drawing panel, going to hide the options, show the drawing panel and change button text to reset
    //when called again, it will show the options, hide the drawing panel and change button text to start drawing
    //switching it from true to false
    setHideOptions(!hideOptions)
    setHideDrawingPanel(!hideDrawingPanel)

    buttonText === 'start drawing'
      ? setButtonText('reset')
      : setButtonText('start drawing')
  }
  //color comes from the color picker itself and hex is changing its value in the state
  function changeColor(color) {
    setColor(color.hex)
  }

  return (
    <div id="editor">
      <h1>Pixel Editor</h1>
      {/* if hide drawing panel is true, want to show this title, but when clicked start drawing it'll hide  */}
      {hideDrawingPanel && <h2>Enter Panel Dimensions</h2>}
      {/* hiding this whole options tag when start drawing has been clicked */}
      {hideDrawingPanel && (
        <>
          <div id="options">
            <div className="option">
              <input
                type="number"
                className="panelInput"
                //set with state
                defaultValue={panelWidth}
                //targeting the input from user to change panel accordingly
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
                //set by state
                defaultValue={panelHeight}
                //targeting the input from user to change panel accordingly
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
        //color is set as state as default color, if you change the color to another one in the picker that will set as state default,
        //however if the color doesn't exist in the default color picker nothing will happen
        //onChangeComplete is what happens when clicked on another color in the picker
        //circle picker to be hidden when on the dimensions page, only when start drawing has been clicked it will show
        <CirclePicker color={selectedColor} onChangeComplete={changeColor} />
      )}

      {hideOptions && (
        <DrawingPanel
          //all done with state
          width={panelWidth}
          height={panelHeight}
          selectedColor={selectedColor}
        />
      )}
    </div>
  )
}
