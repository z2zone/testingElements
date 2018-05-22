import React, { Component } from 'react';
import Comment from './Comment';
import Lists from './Lists';

class App extends Component {
  render() {
    return (
      <div className="app">
      	<Comment/>
      	<Lists/>
      </div>
    );
  }
}

export default App;