import React, { PureComponent } from "react";
import { GameEngine } from "react-game-engine";
import { Box } from "./renderers";
import { MoveBox } from "./systems"

export default class SimpleGame extends PureComponent {

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
    return (
      <GameEngine
        style={{ 
          width: screen_width, 
          height: screen_height * 0.06, 
          backgroundColor: "rgb(43, 42, 51)"}}
        systems={[MoveBox]}
        entities={{
          //-- Notice that each entity has a unique id (required)
          //-- and a renderer property (optional). If no renderer
          //-- is supplied with the entity - it won't get displayed.
          box1: { x: "1.8vw",  y: "1.8vw", renderer: <Box />}
        }}>

      </GameEngine>
    );
  }
}