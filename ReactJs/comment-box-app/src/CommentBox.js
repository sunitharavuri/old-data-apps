import React, { Component } from 'react';
import CommentList from './CommentList';
import CommentForm from './CommentForm';
import data from './data';
import style from './style';

class CommentBox extends Component {
  constructor(props) {
    super(props);
    this.state = { data: [] };
  }
  render() {
    return (
      <div style={ style.commentBox }>
        <h2>Comments:</h2>
      <CommentList data={ data }/>
      <CommentForm />
      </div>
    )
  }
}

export default CommentBox;