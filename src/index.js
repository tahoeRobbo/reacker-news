import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Route } from 'react-router-dom'

import { styles } from './utils/constants'

import { ThemeProvider } from './contexts/Theme'

import 'normalize.css'
import './index.css'

import Nav from './components/Nav'
import MainPostsGridWrapper from './components/MainPostsGridWrapper'
import StoryOrCommentPost from './components/StoryOrCommentPost'
import User from './components/User'

function App () {
  const [theme, setTheme] = React.useState('bamboo')
  const changeTheme = (newTheme) => setTheme(newTheme)

  return (
    <Router>
      <ThemeProvider value={theme}>
        <div className={`${styles[theme].background} min-h-full`}>
          <div className='px-24 py-10'>
            <Nav changeTheme={changeTheme} />
            <Route exact path='/' render={() => <MainPostsGridWrapper type='top' />} />
            <Route exact path='/new' render={() => <MainPostsGridWrapper type='new' />} />
            <Route path='/user' component={User} />
            <Route path='/post' component={StoryOrCommentPost} />
          </div>
        </div>
      </ThemeProvider>
    </Router>
  )
}

ReactDOM.render(
  <App />,
  document.getElementById('app')
)
