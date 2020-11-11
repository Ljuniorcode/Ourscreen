import React from 'react';
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

export default AvatarOurscreen;