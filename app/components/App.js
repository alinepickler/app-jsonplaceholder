import React from 'react';
import PostsList from './PostsList';

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
