import React, { Component } from 'react';
import { Route, BrowserRouter } from 'react-router-dom';

import StoryboardContainer from './components/storyboard-container/storyboard-container';

class App extends Component {
	render() {
	  return (
		<BrowserRouter>
		  <div className="App">
			<Route exact path='/' component={StoryboardContainer} />
		  </div>
		</BrowserRouter>
	  );
	};
  };
  
  export default App;
