import React from 'react';
import Post from './Post';

export default class PostsList extends React.Component {
  render() {
    return (
      <ul>
          {this.props.posts.map(post =>
            <li key={post.id}>
              <Post
              post={post}
              user={this.props.users[post.userId]}
              />
            </li>)
          }
      </ul>
    );
  }
}
