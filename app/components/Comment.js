import React from 'react';

export default class Comment extends React.Component {
  render() {
    return (
      <div>
      <h4>{this.props.name}</h4>
      <p>{this.props.body}</p>
      </div>
    )
  }
}
