import React, { Component } from "react";
import "./App.css";
import Buttons from "./Buttons";
import Sounds from "./Sound";
import Audio from "./Audio";

class App extends Component {
  constructor(props) {
    super();
    this.state = {
      sound: Sounds,
      music: {}
    };
  }
  onKeyPressed(e) {
    const state = this.state.sound;

    const codes = state //get all the keycodes from the sound array
      .map(item => {
        return item.keyCode;
      })
      .filter(item => {
        //return an item if keyCodes are the same
        return item === e.keyCode;
      });
    // I have to check if returned item is in the array or not
    const newState = state.filter(item => {
      return item.keyCode === codes[0];
    });
    //if returned keyCode is in the array update the state else dont
    if (state.indexOf(newState[0]) !== -1) {
      this.setState({
        music: newState[0]
      });
    }
  }
  handleClick = e => {
    this.setState({
      music: this.state.sound[parseFloat(e.target.name)]
    });
  };

  render() {
    console.log(this.state.music);
    return (
      <div
        onKeyDown={e => {
          this.onKeyPressed(e);
        }}
        className="App text-center"
        id="drum-machine"
      >
        <Buttons data={this.state.sound} event={this.handleClick} />
        <span id="display">{this.state.music.id}</span>
        <Audio url={this.state.music.url} id={this.state.music.keyTrigger} />
      </div>
    );
  }
}

export default App;
