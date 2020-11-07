import React from 'react';
import { Thumb, WrapperThumb } from './styles';


function ThumbOurscreen({ src, alt }) {
  return (
    <WrapperThumb>
      <Thumb src={src} alt={alt} />


    </WrapperThumb>
  )
}

export default ThumbOurscreen;
