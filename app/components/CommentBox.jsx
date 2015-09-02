var React = require('react');
var CommentList = require('./CommentList.jsx');
var CommentForm = require('./CommentForm.jsx');

var CommentBox = React.createClass({
  getInitialState: function() {
    return {
      data: []
    };
  },

  render: function() {
    return (
      <div className='commentBox'>
        <h1>Comments:</h1>
        <CommentList data={this.state.data} />
        <CommentForm />
      </div>
    );
  }

});

module.exports = CommentBox;
