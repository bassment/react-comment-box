var React = require('react');
var marked = require('marked');

var Comment = React.createClass({

  render: function() {
    var rawMarkup = marked(this.props.children.toString(), {sanitize: true});
    return (
      <div className='comment'>
        <h2 className='commnetAuthor'>
          {this.props.author}
        </h2>
        <span dangerouslySetInnerHTML={{__html: rawMarkup}} />
      </div>
    );
  }

});

module.exports = Comment;