import React from 'react';
import PostsList from './PostsList';
import ToggleDisplay from 'react-toggle-display';

export default class App extends React.Component {
  constructor() {
    super();
    this.state = {
      posts: [],
      users: {},
    };
  }

  componentDidMount() {
    var postsPromise = fetch('https://jsonplaceholder.typicode.com/posts')
      .then(result => result.json())

    var usersPromise = fetch('https://jsonplaceholder.typicode.com/users')
      .then(result => result.json())
      .then(users => {
        var usersMap = {}
        users.forEach(user => {
          usersMap[user.id] = user
        })
        return usersMap
    })
/*
    var postsCommentsPromise =
      fetch('https://jsonplaceholder.typicode.com/comments')
        .then(result => result.json())
        .then(comments => {
          var postsCommentsMap = {}
          comments.forEach(comment => {
            if (!postsCommentsMap[comment.postId]) {
              postsCommentsMap[comment.postId] = []
            }
            postsCommentsMap[comment.postId].push(comment)
          })
          return postsCommentsMap
      })
*/
    Promise.all([postsPromise, usersPromise])
      .then(promises => {
        this.setState({
          posts: promises[0],
          users: promises[1]
        })
    })
  }

  render() {
    return (
      <div>
        <PostsList
        posts={this.state.posts}
        users={this.state.users}
        />
      </div>
    );
  }
}
