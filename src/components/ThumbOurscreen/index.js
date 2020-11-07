import React from 'react';
import { Avatar, Thumb, WrapperThumb } from './styles';

function ThumbOurscreen({ src, alt, avatar, channelName }) {
  return (
    <WrapperThumb>
      <Thumb src={src} alt={alt} />
      <Avatar src={avatar} alt={channelName} />
    </WrapperThumb>
  )
}

export default ThumbOurscreen;
