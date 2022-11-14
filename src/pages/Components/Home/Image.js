import React from 'react'

const Image = ({ data }) => {
  return (
    <a href={data.urls.regular} target="_blank" rel='noreferrer'>
        <img src={data.urls.small} alt={data.alt_description}/>
    </a>
  )
}

export default Image