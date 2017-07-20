import React from 'react';

export default class CommentsList extends React.Component {
  constructor() {
    super();
    this.state = {
      comments: []
    };
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/comments?postId=' + this.props.postId)
      .then(result=>result.json())
      .then(comments=>this.setState({comments}))
  }

  render() {
    return (
      <ul>
          {this.state.comments.map(comment =>
            <li key={comment.id}>
              {comment.email}
            </li>)
          }
      </ul>
    );
  }
}
