import React, { Component } from 'react';
import Books from '../containers/Books';

class Home extends Component {

  constructor(props) {
    super(props);
    this.state = {
      user : props.name
    }
  }

  //Component after mount
  componentDidMount() { 
    this.setState ({
      user : 'Praveen S'
    });
  }

  render() {
    return (
      <div>
        <h1>Home Page</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. A aliquam architecto at exercitationem ipsa iste molestiae nobis odit! Error quo reprehenderit velit! Aperiam eius non odio optio, perspiciatis suscipit vel?</p>
        <h2>Hello Mr. {this.state.user}, welcome!</h2>
        <Books store={this.props.store}/>
      </div>
    );
  }
}

export default Home;
