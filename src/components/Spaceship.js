// Code The Spaceship Component Here

import React, { Component } from 'react' // We need to import react so we can make use of its .component class
import ReactDOM from 'react-dom' // ...and we need to import ReactDOM so we can create and test a virtual DOM with react!

Spaceship.defaultProps = {
  speed: 'slow'
  hasRockets  : 'false'
  colors : ['black', 'red']
};

ReactDOM.render(
  <Spaceship
    name=" "
  />,
  document.getElementById('root')
);


export class Spaceship  extends Component {
  render(){
    return(
      <div className="spaceship">
        <h1>Spaceship Name:{name}</h1>
        <p>Speed: {speed}</p>
        <p>Rockets: {hasRockets ? "Yes" : "No"}</p>
        <ul>
          {colors.map((color, index) => <li key={index}>{color}</li>)}
        </ul>
      </div>
    )
  }
}

export default Spaceship;
