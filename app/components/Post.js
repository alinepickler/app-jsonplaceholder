import React from 'react';
import CommentsList from './CommentsList';
import ToggleDisplay from 'react-toggle-display';

export default class Post extends React.Component {
  constructor() {
    super();
    this.state = { showMore: false };
  }

  toggleShowMore() {
    this.setState({
      showMore: !this.state.showMore
    });
  }

  render () {
    return (
      <div>
        <div onClick={ () => this.toggleShowMore() }>
          <h2>{this.props.post.title}</h2>
          <h3>{this.props.user.name}</h3>
        </div>

        <ToggleDisplay show={this.state.showMore}>
          <div>
            <p>{this.props.post.body}</p>
          </div>
          <div>
            {
              this.state.showMore
              && <CommentsList postId={this.props.post.id} />
            }
          </div>
        </ToggleDisplay>
      </div>
    )
  }
}
