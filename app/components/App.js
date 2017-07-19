import React from 'react';

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
    // move into own component Post and pass post and user as props
    // in Post component, add onClick listener to fetch comments
    return (
      <div>
        {this.state.posts.map(post => <li key={post.id}>{post.title} - {this.state.users[post.userId].name} - {this.state.comments[post.id].email}</li>)}
      </div>
    );
  }
}
