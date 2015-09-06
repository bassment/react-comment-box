import React, {Component} from 'react';

export default class CommentForm extends Component {
  handleSubmit(e) {
    e.preventDefault();
    var author = this.refs.author.getDOMNode().value;
    var text = this.refs.text.getDOMNode().value;
    if (!text || !author) {
      return;
    }
    this.props.add({author: author, text: text});
    this.refs.author.getDOMNode().value = '';
    this.refs.text.getDOMNode().value = '';
    return;
  }
  render() {
    return (
      <form className="commentForm" onSubmit={this.handleSubmit.bind(this)}>
        <input type="text" placeholder="Your name" ref='author' />
        <input type="text" placeholder="Say something..." ref='text' />
        <input type="submit" value="Post" />
      </form>
    );
  }
}
