// Code The Spaceship Component Here

import React from 'react' // We need to import react so we can make use of its .component class


class Spaceship  extends React.Component {
  render(){
    const { name, speed, hasRockets, colors } = this.props;
    return(
      <div className="spaceship">
        <h1>Spaceship Name: {name}</h1>
        <p>Speed: {speed}</p>
        <p>Rockets: {hasRockets ? "Yes" : "No"}</p>
        <ul>
          {colors.map((color, index) => <li key={index}>{color}</li>)}
        </ul>
      </div>
    )
  }
}

Spaceship.defaultProps = {
  speed: 'slow',
  hasRockets: false,
  colors : ['black', 'red']
};

export default Spaceship;
