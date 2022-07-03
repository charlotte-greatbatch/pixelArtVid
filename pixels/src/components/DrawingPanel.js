import React from 'react'
import '../styles/drawingPanel.scss'
import Row from './Row'

export default function DrawingPanel(props) {
  const { width, height, selectedColor } = props

  let rows = []

  //height as been set, number of pxiels in the height thats how many rows we want set up
  //inside each row we want the width pixels to be passed in
  //inside the rows are the pixels and we want the selectedColor to change their background color
  for (let i = 0; i < height; i++) {
    rows.push(<Row key={i} width={width} selectedColor={selectedColor} />)
  }

  return (
    <div id="drawingPanel">
      <div id="pixels">{rows}</div>
    </div>
  )

  // return <div id="drawingPanel">drawing panel</div>
}
