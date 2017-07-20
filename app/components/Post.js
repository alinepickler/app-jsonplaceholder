import React from 'react';
import CommentsList from './CommentsList';

export default class Post extends React.Component {
  render () {
    return (
      <div>
        <div>
          <h2>{this.props.post.title}</h2>
          <h3>{this.props.user.name}</h3>
          <p>{this.props.post.body}</p>
        </div>

        <div>
          <CommentsList
            postId={this.props.post.id}
          />
        </div>
      </div>
    )
  }
}
