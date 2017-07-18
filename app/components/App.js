import React from 'react';

export default class App extends React.Component {
  constructor() {
    super();
    this.state = {
      items: []
    };
  }
  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then(result=>result.json())
      .then(items=>this.setState({items}))
  }
  /*
  getQueryParam(param) {
  	var vars = {};
  	window.location.href.replace( location.hash, '' ).replace(
  		/[?&]+([^=&]+)=?([^&]*)?/gi, // regexp
  		function( m, key, value ) { // callback
  			vars[key] = value !== undefined ? value : '';
  		}
  	);


  	if ( param ) {
  		return vars[param] ? vars[param] : null;
  	}
  	return vars;
  }

  var postId = getQueryParam('postId');
*/
  render() {
    return (
      <div>
        {this.state.items.map(item=><li key={item.id}>{item.body}</li>)}
      </div>
    );
  }
}
