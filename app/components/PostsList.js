import React from 'react';
import Post from './Post';

export default class PostsList extends React.Component {
  render() {
    return (
      <ul>
          {this.props.posts.map(post =>
            <li key={post.id}>
              <Post
              user={this.props.users[post.userId]}
              title={post.title}
              body={post.body}
              comment={this.props.comments[post.id]}
              />
            </li>)
          }
      </ul>
    );
  }
}
