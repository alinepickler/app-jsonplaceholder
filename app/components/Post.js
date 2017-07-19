import React from 'react';

export default class Post extends React.Component {
  render () {
    return (
      <div>
        <h2>{this.props.user}</h2>
        <h3>{this.props.title}</h3>
        <p>{this.props.body}</p>
      </div>
    )
  }
}
