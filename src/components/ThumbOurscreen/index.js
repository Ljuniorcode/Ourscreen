import React from 'react';
import { Avatar, Background, Thumb, WrapperThumb } from './styles';

function ThumbOurscreen({ src, alt, avatar, channelName }) {
  return (
    <Background>
      <WrapperThumb>
        <Thumb src={src} alt={alt} />
        <Avatar src={avatar} alt={channelName} />
      </WrapperThumb>
    </Background>
  )
}

export default ThumbOurscreen;
