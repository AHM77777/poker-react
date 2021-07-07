import { Component, Fragment } from 'react';
import Card from './Card';

class Deck extends Component {
  state = {
    table_cards: [],
    hand_cards: []
  }

  componentDidMount() {
    (async () => {
      let cards = await (await fetch(`http://localhost:4001/${this.props.path}`)).json()

      if (this.props.path == 'get_table_cards') {
        this.setState({ table_cards: cards.table_cards });
      } else {
        this.setState({ hand_cards: cards.hand_cards });
      }
    })();
  }

  render() {
    return (<>
      <h4>{this.props.title}</h4>
      <div class="cards">
        {this.state.table_cards.length > 0 && this.state.table_cards.map(card => {
          return <div key={card}>
            <Card symbol={card.slice(-1)} number={card.slice(0, -1)} isFlipped={false} />
          </div>
        })}
        {this.state.hand_cards.length > 0 && this.state.hand_cards.map(card => {
          return <div key={card}>
            <Card symbol={card.slice(-1)} number={card.slice(0, -1)} isFlipped={false} />
          </div>
        })}
      </div>
    </>);
  }
}

export default Deck;
