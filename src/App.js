import React from 'react';
import './App.css';
import ListClass from './components/List';

class App extends React.Component {
    static defaultProps = {
      store: {
        lists: [],
        allCards: {},
      }
    };
    render(){
      const {store} = this.props;
  return (
    <main>
      <h1>Trelloyes!</h1>
      <div className="App-list">
        {store.lists.map((list =>
          <ListClass
          key={list.id}
          header={list.header}
          cards={list.cardIds.map(id => store.allCards[id])}
          />
        ))}
      </div>
    </main>
  );
  }
}

export default App;
