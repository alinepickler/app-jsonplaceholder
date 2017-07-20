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
              <h4>{comment.name}</h4>
              <p>{comment.body}</p>
            </li>)
          }
      </ul>
    );
  }
}
