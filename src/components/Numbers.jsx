import React from 'react'

const Numbers = (props) => {
  console.log(props.page, props.index+1)
  return (
    <div className={`number${props.page === props.index+1 ? ' active' : ''}`}><p>{props.index + 1}</p></div>
  )
}

export default Numbers
