import React from 'react'
import logos from '../../database/logos';

const Logo = ({ id, ...otherProps }) => {

    const logo = logos.find(obj => obj.id === id);



  return (
    <img src={logo?.url} {...otherProps} alt="img" />
  )
}

export default Logo