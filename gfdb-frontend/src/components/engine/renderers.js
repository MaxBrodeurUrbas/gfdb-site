import React, { PureComponent } from "react";
import peng1 from '../engine/penguin/penguin_walk01.png'
class Box extends PureComponent {
  render() {


    const screen_width = Math.max(
        document.documentElement["clientWidth"],
        document.body["scrollWidth"],
        document.documentElement["scrollWidth"],
        document.body["offsetWidth"],
        document.documentElement["offsetWidth"]
      );
  
    const screen_height = Math.max(
    document.documentElement["clientWidth"],
    document.body["scrollWidth"],
    document.documentElement["scrollWidth"],
    document.body["offsetWidth"],
    document.documentElement["offsetWidth"]
    );
        

    console.log('screen height: ' + screen_height * 0.06)
    console.log('screen_width: ' + screen_width)


    const height = 25;
    const width = 20;

    let x = this.props.x - width / 2;

    if (x > screen_width - width) {
        x = screen_width - width - 1
    }
    if (x < 1) {
        x = 2
    }
        
    let y = this.props.y - height / 2;

    if (y > (screen_height * 0.06) - height - 1) {
        y = (screen_height * 0.06) - height - 1
    }
    if (y < 0)
        y = 0

    console.log('x: ' + x)
    console.log('y: ' +y)

    return (
      <img 
        src = {peng1}
        alt = "penguin"
        style={{ 
          position: "absolute", 
          width: width, 
          height: height,
          left: x, 
          top: y,
          }} />
    );
  }
}

export { Box };