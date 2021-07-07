import React from 'react';
import './App.css';
import Deck from './Components/Deck';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div class="room-table">
          <Deck title="Table" path="get_table_cards" />
        </div>
        <div class="room-table">
          <Deck title="Hand" path="get_hand_cards" />
        </div>
      </header>
    </div>
  );
}

export default App;
