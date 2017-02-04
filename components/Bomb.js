import React from 'react'

class Bomb extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      secondsLeft: this.props.initialCount
    }
  }

  render() {
     if (this.state.secondsLeft > 0) {
       return (

         <div>
         <p>{this.state.secondsLeft} seconds left before I go boom!</p>
         </div>
       )} else {
         return (
        <div>
        <p>Boom!</p>
        </div>
    )}
  }
}


module.exports = Bomb
