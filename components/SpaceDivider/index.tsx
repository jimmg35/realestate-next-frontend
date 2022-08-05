import React from 'react'

interface ISpaceDividerProps {
  distance?: string
}

const SpaceDivider = ({
  distance = '5px'
}: ISpaceDividerProps) => {
  return <div style={{ height: distance, width: distance, backgroundColor: 'black' }}></div>
}

export default SpaceDivider
