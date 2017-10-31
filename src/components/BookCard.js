import React, { Component } from 'react';


class BookCard extends Component {
  render() {
    return (
      <div className="book-card">
        <h2>{this.props.stateProps.title}</h2>
      </div>
    )
  }
}
export default BookCard