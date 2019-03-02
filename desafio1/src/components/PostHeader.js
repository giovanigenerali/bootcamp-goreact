import React from 'react'

const PostHeader = (props) => (
  <div className="head">
    <img className="avatar" src={props.avatar} />
    <div>
      <span className="title">{props.title}</span>
      <span className="date">{props.createdAt}</span>
    </div>
  </div>
)

export default PostHeader;
