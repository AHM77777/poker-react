import { Component } from 'react';

class Card extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isFlipped: props.isFlipped
    };

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState(prevState => ({
      isFlipped: !prevState.isFlipped
    }));
  }

  render() {
    const isNumber = !isNaN(this.props.number) || this.props.number === "A";
    const fixedSize = this.props.number === "A" ? 1 : this.props.number;

    return (
      <div class={'card card-' + this.props.symbol + (this.state.isFlipped ? " flipped" : "")} number={this.props.number} onClick={this.handleClick}>
        <div class="card-front" >
          <div class="card-corner top-left">
            <div>{this.props.number}</div>
            <div>{this.props.symbol}</div>
          </div>
          <div class="symbols">
            {isNumber
              ? new Array(parseInt(fixedSize))
                .fill(this.props.symbol)
                .map((cardSymbol, i) => <div key={i}>{cardSymbol}</div>)
              : ""
            }
          </div>
          <div class="card-corner bottom-right">
            <div>{this.props.symbol}</div>
            <div>{this.props.number}</div>
          </div>
        </div>
        <div class="card-back">
        </div>
      </div>);
  }
}

export default Card;
