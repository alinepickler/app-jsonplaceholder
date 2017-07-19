import React from 'react';
import Comment from './Comment';

export default class Post extends React.Component {
  render () {
    return (
      <div>
        <h2>{this.props.user.name}</h2>
        <h3>{this.props.title}</h3>
        <p>{this.props.body}</p>
        <Comment
          name={this.props.comment.name}
          body={this.props.comment.body}
        />
      </div>
    )
  }
}
