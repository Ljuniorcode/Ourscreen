import React from 'react';
import AvatarOurscreen from '../AvatarOurscreen';
import { Background, Thumb, Title, WrapperThumb } from './styles';

function ThumbOurscreen({ src, alt, avatar, channelName, title }) {



  return (
    <Background>
      <WrapperThumb>
        <Thumb src={src} alt={alt} />
        <AvatarOurscreen photo={avatar} channelName={channelName} />
        <Title>{title}</Title>
      </WrapperThumb>
    </Background>
  )
}

export default ThumbOurscreen;
