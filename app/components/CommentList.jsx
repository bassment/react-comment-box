import React, {Component} from 'react';
import Comment from './Comment.jsx';

export default class CommentList extends Component {

  render() {
    var styles = {
      removeItem: {
         fontSize: 20,
         top: 12,
         left: 6,
         cursor: "pointer",
         color: "rgb(222, 79, 79)",
         border: "none",
         background: "none",
         padding: 0
      }
   };
    var commentNodes = this.props.data.map((comment, index) => {
      return (
        <div>
          <Comment key={index} author={comment.author}>
            {comment.text}
          </Comment>
          <button
            className="remove"
            style={styles.removeItem}
            onClick={this.props.remove.bind(null, index)}>
            Delete
          </button>
        </div>
      );
    });
    return (
      <div className='commentList'>
        {commentNodes}
      </div>
    );
  }
}
