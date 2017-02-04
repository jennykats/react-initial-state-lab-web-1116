import React from 'react'

class ImageSlider extends React.Component {
  constructor() {
    super();

    this.state = {
      currentSlideIndex: 0
    }
  }

  render() {
    return (
      <div className="image-slider">
      <p>I am on slide {this.state.currentSlideIndex}</p>
      </div>
    );
  }
}

module.exports = ImageSlider
