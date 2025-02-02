import React from 'react'

export const Title = ({text}) => {
  return (
    <div className='title'>
      <h2>{text || 'default title'}</h2>
      <div className="title-underline"></div>
    </div>
  )
}
