import React, {Component} from 'react';
import Comment from './Comment.jsx';

export default class CommentList extends Component {

  render() {
    var commentNodes = this.props.data.map((comment, index) => {
      return (
        <Comment key={index} author={comment.author}>
          {comment.text}
        </Comment>
      );
    });
    return (
      <div className='commentList'>
        {commentNodes}
      </div>
    );
  }
}
