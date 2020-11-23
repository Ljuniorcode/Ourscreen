import React, { useState } from 'react'
import ThumbOurscreen from '../ThumbOurscreen'
import PropTypes from 'prop-types'
import { CarouselStyle, Right, Wrapper } from './styles'

function CarouselOurscreen({ videos }) {
  const [moveRight, setMoveRight] = useState(0);


  function actionRight() {
    setMoveRight(oldMoveRight => oldMoveRight + 1);
  }

  return (
    <CarouselStyle>
      <Wrapper moveRight={moveRight}>
        {videos.map(({ src, alt, title, avatar, channelName, timer, link }) => (
          <ThumbOurscreen
            src={src}
            alt={alt}
            title={title}
            avatar={avatar}
            channelName={channelName}
            timer={timer}
            link={link}
          />
        ))}
      </Wrapper>
      <Right onClick={actionRight} />
    </CarouselStyle>
  )
}

const typeVideo = {
  src: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  channelName: PropTypes.string.isRequired,
  timer: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired
}

CarouselOurscreen.propTypes = {
  videos: PropTypes.arrayOf(PropTypes.shape(typeVideo)).isRequired,
}
export default CarouselOurscreen;