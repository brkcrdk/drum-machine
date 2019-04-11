import React, { Component } from "react";

class Audio extends Component {
  getUrl = () => {
    const x = this.props.url;
    return x;
  };
  render() {
    return (
      <div>
        <audio
          autoPlay={true}
          className="clip"
          id={this.props.id}
          src={this.getUrl()}
          type="audio/mpeg"
        />
      </div>
    );
  }
}
export default Audio;
