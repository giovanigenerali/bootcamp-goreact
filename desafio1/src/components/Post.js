import React from 'react'
import PostHeader from './PostHeader'

const Post = (props) => (
  <div className="post">
    <PostHeader
      avatar={props.post.avatar}
      title={props.post.title}
      createdAt={props.post.createdAt}
    />
    <div className="content">
      <p>{ props.post.body }</p>
    </div>
  </div>
)

export default Post;
