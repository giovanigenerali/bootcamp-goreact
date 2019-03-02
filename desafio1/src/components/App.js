import React, { Component, Fragment } from 'react'
import moment from 'moment'
moment.locale('pt-BR')

import Header from './Header'
import Post from './Post'

export default class App extends Component {
  state = {
    posts: [
      {
        id: 1,
        avatar: 'https://randomuser.me/api/portraits/men/10.jpg',
        title: 'Post 1',
        body: 'There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don not look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there is not anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.',
        createdAt: '2019-03-02 12:00:00',
      },
      {
        id: 2,
        avatar: 'https://randomuser.me/api/portraits/men/20.jpg',
        title: 'Post 2',
        body: 'There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don not look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there is not anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.',
        createdAt: '2019-02-02 12:00:00',
      },
      {
        id: 3,
        avatar: 'https://randomuser.me/api/portraits/men/30.jpg',
        title: 'Post 3',
        body: 'There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don not look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there is not anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.',
        createdAt: '2019-01-01 12:00:00',
      },
    ],
  }

  render () {
    const { posts } = this.state;
    return (
      <Fragment>
        <Header />
        { posts.map(post => {
          post.createdAt = moment(post.createdAt).fromNow()
          return (
            <Post key={post.id} post={post} />
          )
        }) }
      </Fragment>
    )
  }
}
