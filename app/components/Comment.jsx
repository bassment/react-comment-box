import React, {Component} from 'react';
import marked from 'marked';

export default class Comment extends Component {

  render() {
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
}
