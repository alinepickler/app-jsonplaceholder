import React from 'react';
import CommentsList from './CommentsList';

export default class Post extends React.Component {
  render () {
    return (
      <div>
        <div>
          <h2>{this.props.user.name}</h2>
          <h3>{this.props.post.title}</h3>
        </div>

        <div>
          <p>{this.props.post.body}</p>
          <CommentsList
            comments={this.props.comments}
          />
        </div>
      </div>
    )
  }
}
