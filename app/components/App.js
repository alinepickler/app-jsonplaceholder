import React from 'react';
import PostsList from './PostsList';

export default class App extends React.Component {
  constructor() {
    super();
    this.state = {
      users: {},
      posts: []
    };
  }

  componentDidMount() {
    var usersPromise = fetch('https://jsonplaceholder.typicode.com/users')
      .then(result => result.json())
      .then(users => {
        var usersMap = {}
        users.forEach(user => {
          usersMap[user.id] = user
        })
        return usersMap
    })

    var commentsPromise = fetch('https://jsonplaceholder.typicode.com/comments')
      .then(result => result.json())
      .then(comments => {
        var commentsMap = {}
        comments.forEach(comment => {
          commentsMap[comment.id] = comment
        })
        return commentsMap
    })

    var postsPromise = fetch('https://jsonplaceholder.typicode.com/posts')
      .then(result => result.json())

    Promise.all([usersPromise, commentsPromise, postsPromise])
      .then(promises => {
        this.setState({users: promises[0], comments: promises[1], posts: promises[2]})
    })
  }

  render() {
    return (
      <div>
      <PostsList
      posts= {this.state.posts}
      users= {this.state.users}
      comments= {this.state.comments}
      />
      </div>
    );
  }
}
