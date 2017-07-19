import React from 'react';

export default class Post extends React.Component {
  render() {
    return (
      <ul>
          {this.props.posts.map(post => <li key={post.id}>
            <h3>{post.title}</h3>
            <p>{post.body}</p>
            </li>)
          }
      </ul>
    );
  }
}
