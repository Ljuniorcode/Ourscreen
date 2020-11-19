import React from 'react';
import PropTypes from 'prop-types';
import AvatarOurscreen from '../AvatarOurscreen';
import {
  Background, Thumb, Timer, Title, WrapperThumb,
} from './styles';

function ThumbOurscreen({
  src, alt, avatar, channelName, title, timer,
}) {
  return (
    <Background>
      <WrapperThumb>
        <Thumb src={src} alt={alt} />
        <AvatarOurscreen photo={avatar} channelName={channelName} />
        <Title>{title}</Title>
        <Timer>{timer}</Timer>
      </WrapperThumb>
    </Background>
  );
}

ThumbOurscreen.propTypes = {
  src: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  channelName: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  timer: PropTypes.string.isRequired
};

export default ThumbOurscreen;
