import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Route } from 'react-router-dom'

import Nav from './components/Nav'
import MainPostsGridWrapper from './components/MainPostsGridWrapper'
import StoryOrCommentPost from './components/StoryOrCommentPost'
import User from './components/User'

import './index.css'

function App () {
  return (
    <div>
      <Router>
        <Nav />
        <Route exact path='/' render={() => <MainPostsGridWrapper type='top' />} />
        <Route exact path='/new' render={() => <MainPostsGridWrapper type='new' />} />
        <Route path='/user' component={User} />
        <Route path='/post' component={StoryOrCommentPost} />
      </Router>
    </div>
  )
}

ReactDOM.render(
  <App />,
  document.getElementById('app')
)
