import React from 'react';
import PropTypes from 'prop-types'
//import { Channel } from '../ThumbOurscreen/styles';
import { Avatar, Channel, WrapperAvatar } from './styles';

function AvatarOurscreen({ photo, channelName }) {
  return (
    <WrapperAvatar>
      <Avatar src={photo} alt={channelName} />
      <Channel>{channelName}</Channel>
    </WrapperAvatar>
  )
}

AvatarOurscreen.propTypes = {
  photo: PropTypes.string.isRequired,
  channelName: PropTypes.string.isRequired
}

export default AvatarOurscreen;