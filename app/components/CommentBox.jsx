import React, {Component} from 'react';
import Rebase from 're-base';
import CommentList from './CommentList.jsx';
import CommentForm from './CommentForm.jsx';

var base = Rebase.createClass('https://react-comment-box.firebaseio.com/comments');

export default class CommentBox extends Component{
  constructor(props){
    super(props);
    this.state = {
      data: []
    };
  }

  componentDidMount(){
    this.ref = base.syncState('commentList', {
      context: this,
      state: 'data',
      asArray: true
    });
  }

  componentWillUnmount(){
    base.removeBinding(this.ref);
  }

  handleAddItem(comment){
    this.setState({
      data: this.state.data.concat([comment])
    });
  }

  handleRemoveItem(index) {
    var newData = this.state.data;
    newData.splice(index, 1);
    this.setState({
      data: newData
    });
  }

  render() {
    return (
      <div className='commentBox'>
        <h1>Comments:</h1>
        <CommentList data={this.state.data} remove={this.handleRemoveItem.bind(this)} />
        <CommentForm add={this.handleAddItem.bind(this)} />
      </div>
    );
  }
}
