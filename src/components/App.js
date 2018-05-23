import React, { Component } from 'react';
import Comment from './Comment';
import Lists from './Lists';

class App extends Component {
  render() {
    return (
      <div className="app">
        <h2>Add a comment: </h2>
      	<Comment/>
      	<hr/>
      	<div>
      		<h2>Lists of comments:</h2>
      	</div>
      	<Lists/>
      </div>
    );
  }
}

export default App;