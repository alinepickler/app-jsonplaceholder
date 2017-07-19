import React from 'react';
import Comment from './Comment';

export default class CommentsList extends React.Component {
  render() {
    return (
      <ul>
          {this.props.comments.map(comment =>
            <li key={comment.id}>
              <Comment
              comment={comment}
              />
            </li>)
          }
      </ul>
    );
  }
}
