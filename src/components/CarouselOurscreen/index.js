import React from 'react'
import ThumbOurscreen from '../ThumbOurscreen';
import PropTypes from 'prop-types'

function CarouselOurscreen({ videos }) {
  return (
    <ThumbOurscreen {...videos[0]} />
  )
}

CarouselOurscreen.propTypes = {
  videos: PropTypes.arrayOf.isRequired,
}
export default CarouselOurscreen;