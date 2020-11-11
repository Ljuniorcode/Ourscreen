import React from 'react';
import AvatarOurscreen from '../AvatarOurscreen';
import { Background, Thumb, Timer, Title, WrapperThumb } from './styles';

function ThumbOurscreen({ src, alt, avatar, channelName, title, timer }) {
  return (
    <Background>
      <WrapperThumb>
        <Thumb src={src} alt={alt} />
        <AvatarOurscreen photo={avatar} channelName={channelName} />
        <Title>{title}</Title>
        <Timer>{timer}</Timer>
      </WrapperThumb>
    </Background>
  )
}

export default ThumbOurscreen;
