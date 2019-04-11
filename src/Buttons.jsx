import React from "react";
class Buttons extends React.Component {
  render() {
    const veri = [...this.props.data].map((item, i) => {
      return (
        <button
          className="drum-pad btn btn-secondary btn-lg m-3"
          id={item.id}
          url={item.url}
          key={item.keyCode}
          onClick={this.props.event}
          name={i}
          autoFocus={true}
        >
          {item.keyTrigger}
        </button>
      );
    });
    return <React.Fragment>{veri}</React.Fragment>;
  }
}

export default Buttons;
