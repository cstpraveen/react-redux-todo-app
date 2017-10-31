import React, { Component } from 'react';
import BookCard from  '../components/BookCard';
import AddBook from '../actions/AddBook';
import DeleteBook from '../actions/DeleteBook';
import EditBook from '../actions/EditBook';

//Provider/Container React Component
class Books extends Component {
  constructor(props) {
    super(props);
    
    this.state = {
      books : {}
    };
  }

  componentWillMount() {
    this.props.store.subscribe(this.forceUpdate.bind(this));
  }

  dispatchAction (input) {
    switch (input) {
      case "TRASH":
        this.props.store.dispatch(DeleteBook());
        break;
      case "PLUS":
        this.props.store.dispatch(AddBook());
        break;
      case "EDIT":
        this.props.store.dispatch(EditBook());
        break;
      default:
        this.props.store.dispatch(AddBook());
    }
  }

  render() {
    const stateProps = this.props.store.getState();
    
    const bookItems = stateProps.books.map((book) =>
      <BookCard 
        key = { book } 
        stateProps = { stateProps } 
        dispatchAction = {this.dispatchAction.bind(this)}
      />
    );

    return (
      <div className="books-container">
        <button onClick={() => this.dispatchAction("EDIT")}>Edit</button> 
        <button onClick={() => this.dispatchAction("TRASH")}>Delete</button> 
        <button onClick={() => this.dispatchAction("PLUS")}>Add</button> 
        {bookItems}
      </div>
    )
  }
}
export default Books