import React from 'react';
import './List.css'
import CardClass from './Card';

class ListClass extends React.Component {
    render(){
        return (
            <section class="List">
        <header class="List-header">
          <h2>{this.props.header}</h2>
        </header>
        <div class="List-cards">
        {this.props.cards.map((card =>
          <CardClass
            key={card.id}
            title={card.title}
            content={card.content}
          />)
        )}
          <button type="button" class="List-add-button">
            + Add Random Card
          </button>
        </div>
      </section>

        )
    }
}

export default ListClass;