import React from 'react'
import { useGetFootballTeamLogoQuery } from '../../services/footballApi';

const FetchedImage = ({ id, ...otherProps}) => {
    console.log(id);
    const { data, isFetching } = useGetFootballTeamLogoQuery()

    if (isFetching) {
      return "."
    }
    console.log('====================================');
    console.log(data);
    console.log('====================================');

  return (
    <img src={data} {...otherProps} alt="img" />
  )
}

export default FetchedImage