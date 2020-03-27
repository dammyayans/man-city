import React, { Component } from "react";
import { easePolyOut } from "d3-ease";
import Animate from "react-move/Animate";
export class Stripes extends Component {
  state = {
    stripes: [
      {
        background: "#98c5e9",
        left: 120,
        rotate: 25,
        top: -260,
        delay: 0
      },
      {
        background: "#ffffff",
        left: 360,
        rotate: 25,
        top: -397,
        delay: 200
      },
      {
        background: "#98c5e9",
        left: 600,
        rotate: 25,
        top: -498,
        delay: 400
      }
    ]
  };
  showStripes = () =>
    this.state.stripes.map((stripe, id) => (
      <Animate
        key={id}
        show={true}
        start={{
          background: "#ffffff",
          opacity: 0,
          left: 190,
          rotate: 0,
          top: 0
        }}
        enter={{
          top: [stripe.top],
          background: stripe.background,
          opacity: [1],
          left: [stripe.left],
          rotate: [stripe.rotate],
          timing: { delay: 500, duration: 200, ease: easePolyOut }
        }}
      >
        {({ background, opacity, left, rotate, top }) => (
          <div
            className="stripe"
            style={{
              transform: `rotate(${rotate}deg) translate(${left}px, ${top}px)`,
              backgroundColor: background,
              opacity: opacity
            }}
          ></div>
        )}
      </Animate>
    ));
  render() {
    return <div className="featured_stripes">{this.showStripes()}</div>;
  }
}

export default Stripes;
