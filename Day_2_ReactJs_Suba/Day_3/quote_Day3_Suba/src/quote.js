import React, { Component } from "react";
class Quote extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentindex: 0,
      quotes: [
        {
          quote:
            "The best and most beautiful things in the world cannot be seen or even touched - they must be felt with the heart",
          by: "Helen Keller"
        },
        {
          quote: "The best preparation for tomorrow is doing your best today.",
          by: "H. Jackson Brown, Jr."
        },
        {
          quote:
            "Keep your face always toward the sunshine—and shadows will fall behind you",
          by: "Walt Whitman"
        },
        {
          quote: "It is always the simple that produces the marvelous",
          by: "Amelia Barr"
        },
        {
          quote:
            "The world is full of magical things patiently waiting for our wits to grow sharper.",
          by: "Bertrand Russell"
        }
      ]
    };
    setInterval(() => {
      let index =
        this.state.currentindex + 1 === this.state.quotes.length
          ? 0
          : this.state.currentindex + 1;
      this.setState({ currentindex: index });
    }, 1000);
  }
  render() {
    return (
      <div>
        <h1
          style={{
            color: this.state.currentindex % 2 == 0 ? "green" : "black"
          }}
        >
          {this.state.quotes[this.state.currentindex].quote}
        </h1>
      </div>
    );
  }
}

export default Quote;
