import React from 'react';
import AvatarOurscreen from '../AvatarOurscreen';
import { Background, Thumb, WrapperThumb } from './styles';

function ThumbOurscreen({ src, alt, avatar, channelName }) {
  return (
    <Background>
      <WrapperThumb>
        <Thumb src={src} alt={alt} />
        <AvatarOurscreen photo={avatar} channelName={channelName} />
      </WrapperThumb>
    </Background>
  )
}

export default ThumbOurscreen;
